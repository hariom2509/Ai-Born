import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface WhitelistEntry {
  xHandle: string;
  walletAddress: string;
  postLink: string;
  timestamp: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "whitelist.json");

// Helper to read entries from local file
async function getLocalEntries(): Promise<WhitelistEntry[]> {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

// Helper to save entries to local file
async function saveLocalEntries(entries: WhitelistEntry[]) {
  try {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify(entries, null, 2), "utf-8");
  } catch (err) {
    console.error("Local file write error:", err);
  }
}

// Helper to optionally commit directly to GitHub repository if GITHUB_TOKEN is set
async function syncToGitHub(entries: WhitelistEntry[]) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return;

  const repo = "hariom2509/Ai-Born";
  const filePath = "src/data/whitelist.json";
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

  try {
    // 1. Get current file SHA
    const getRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    let sha = "";
    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    }

    // 2. Commit updated JSON
    const contentEncoded = Buffer.from(JSON.stringify(entries, null, 2)).toString("base64");
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore: update whitelist registry [${entries.length} entries]`,
        content: contentEncoded,
        sha: sha || undefined,
      }),
    });
  } catch (err) {
    console.error("GitHub sync error:", err);
  }
}

export async function GET(req: NextRequest) {
  const entries = await getLocalEntries();
  const format = req.nextUrl.searchParams.get("format");

  if (format === "csv") {
    const header = "xHandle,walletAddress,postLink,timestamp\n";
    const rows = entries
      .map(
        (e) =>
          `"${e.xHandle}","${e.walletAddress}","${e.postLink}","${e.timestamp}"`
      )
      .join("\n");
    return new NextResponse(header + rows, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="aiborn-whitelist.csv"',
      },
    });
  }

  return NextResponse.json({
    total: entries.length,
    entries,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { xHandle, walletAddress, postLink } = body;

    if (!xHandle || !walletAddress || !postLink) {
      return NextResponse.json(
        { error: "Missing required fields: xHandle, walletAddress, or postLink." },
        { status: 400 }
      );
    }

    const cleanHandle = xHandle.trim().startsWith("@")
      ? xHandle.trim()
      : `@${xHandle.trim()}`;
    const cleanWallet = walletAddress.trim().toLowerCase();
    const cleanPostLink = postLink.trim();

    const currentEntries = await getLocalEntries();

    // Check if wallet already submitted
    const existingIndex = currentEntries.findIndex(
      (e) => e.walletAddress.toLowerCase() === cleanWallet
    );

    const newEntry: WhitelistEntry = {
      xHandle: cleanHandle,
      walletAddress: cleanWallet,
      postLink: cleanPostLink,
      timestamp: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      currentEntries[existingIndex] = newEntry; // update existing entry
    } else {
      currentEntries.push(newEntry);
    }

    // Save locally
    await saveLocalEntries(currentEntries);

    // Sync to GitHub repo if token provided
    await syncToGitHub(currentEntries);

    return NextResponse.json({
      success: true,
      message: "Checkpoint verified and registered in whitelist registry.",
      totalRegistrations: currentEntries.length,
      entry: newEntry,
    });
  } catch (error) {
    console.error("Whitelist registration error:", error);
    return NextResponse.json(
      { error: "Internal server error processing registration." },
      { status: 500 }
    );
  }
}
