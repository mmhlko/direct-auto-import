"use client"

import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import GlassWrapper from "./GlassWrapper"
import { X } from "lucide-react"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  showCloseButton?: boolean // по умолчанию true
}

export default function Modal({
  open,
  onClose,
  children,
  showCloseButton = true,
}: ModalProps) {
  if (typeof window === "undefined") return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-1000"
          onClick={onClose}
          aria-label="modal wrapper"
        >
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-998 bg-black/10 backdrop-blur-sm p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            aria-label="modal overlay"
          />

          {/* Modal content */}
          <motion.div
            className="fixed inset-0 z-999 flex items-center justify-center m-4 md:m-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
            aria-label="modal content"
          >
            <GlassWrapper className="p-8 relative">
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 transition hover:text-white hover:cursor-pointer"
                  aria-label="Close modal"
                >
                  <X />
                </button>
              )}
              {children}
            </GlassWrapper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}