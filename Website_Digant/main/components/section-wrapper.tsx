"use client"

import { useRef, type ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
  title?: string // For aria-labelledby
}

const SectionWrapper = ({ children, id, className = "", title }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleId = title ? `${id}-title` : undefined

  return (
    <section id={id} ref={sectionRef} className={className} aria-labelledby={titleId}>
      {title && (
        <h2 id={titleId} className="sr-only">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default SectionWrapper
