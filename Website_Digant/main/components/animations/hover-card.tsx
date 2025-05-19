"use client"

import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

const HoverCard = ({ children, className = "" }: HoverCardProps) => {
  return (
    <div className={`${className} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>{children}</div>
  )
}

export default HoverCard
