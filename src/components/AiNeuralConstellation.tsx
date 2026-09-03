"use client";

import React, { useEffect, useState } from "react";

export default function AiNeuralConstellation() {
  const [nodes, setNodes] = useState<
    Array<{ id: number; x: number; y: number; r: number; opacity: number }>
  >([]);

  useEffect(() => {
    // Generate fixed deterministic pseudo-neural nodes
    const generated = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        x: (i * 19.3) % 94 + 3,
        y: (i * 23.7) % 92 + 4,
        r: (i % 3) * 0.75 + 1.2,
        opacity: (i % 4) * 0.15 + 0.25,
      });
    }
    setNodes(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Neural Network Interconnection Lines */}
        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % nodes.length];
          const skip = nodes[(i + 3) % nodes.length];
          return (
            <g key={`lines-${node.id}`}>
              <line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="url(#neuralGrad)"
                strokeWidth="0.75"
                strokeDasharray="4 6"
                className="animate-pulse"
              />
              {i % 2 === 0 && (
                <line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${skip.x}%`}
                  y2={`${skip.y}%`}
                  stroke="rgba(139, 92, 246, 0.15)"
                  strokeWidth="0.5"
                />
              )}
            </g>
          );
        })}

        {/* Neural Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.r + 2}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="0.5"
              opacity={node.opacity * 0.6}
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.r}
              fill="#c084fc"
              opacity={node.opacity}
              className="animate-ping"
              style={{ animationDuration: `${4 + (node.id % 4)}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
