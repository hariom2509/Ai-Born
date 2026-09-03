"use client";

import React, { createContext, useContext, useState } from "react";
import WhitelistModal from "./WhitelistModal";

interface WhitelistContextType {
  openWhitelistModal: () => void;
  closeWhitelistModal: () => void;
  isModalOpen: boolean;
}

const WhitelistContext = createContext<WhitelistContextType>({
  openWhitelistModal: () => {},
  closeWhitelistModal: () => {},
  isModalOpen: false,
});

export function WhitelistProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhitelistModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WhitelistContext.Provider
      value={{
        openWhitelistModal,
        closeWhitelistModal: closeModal,
        isModalOpen,
      }}
    >
      {children}
      <WhitelistModal isOpen={isModalOpen} onClose={closeModal} />
    </WhitelistContext.Provider>
  );
}

export function useWhitelistModal() {
  return useContext(WhitelistContext);
}
