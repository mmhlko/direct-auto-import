"use client"

import { ReactNode } from "react"
import { cn } from "../utils/utils"

interface GlassWrapperProps {
  children: ReactNode
  className?: string
}

export default function GlassWrapper({
  children,
  className,
}: GlassWrapperProps) {
  return (
    <div
      className={cn(
        "relative",
        "rounded-[24px]",
        "bg-white/20",
        "backdrop-blur-[5px]",
        "border border-white/30",
        "shadow-[inset_0px_4px_6px_rgba(255,255,255,0.1)]",
        "shadow-[0_0_10px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.1)]",
        // "before:absolute",
        // "before:inset-0",
        // "before:rounded-[24px]",
        // "before:pointer-events-none",
        // "before:shadow-[0_0_2px_rgba(255,0,0,0.4),0_0_2px_rgba(0,255,255,0.4)]",
        // "will-change-transform,opacity",
        className
      )}
    >
      {children}
    </div>
  )
}