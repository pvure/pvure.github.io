"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-100">
          {/* Dimmed Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={onClose} // Close modal on overlay click
          />
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              {" "}
              <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white">
                <h2 className="text-lg font-medium">Details</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
