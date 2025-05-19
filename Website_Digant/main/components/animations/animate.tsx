"use client"

import type { ReactNode } from "react"

interface AnimatedProps {
  children: ReactNode
  animation?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleUp" | "slideIn"
  delay?: number
  duration?: number
  className?: string
}

export const Animated = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
}: AnimatedProps) => {
  // Simplified animation - just return the children with a class
  const animationClass =
    animation === "fadeInUp"
      ? "animate-fadeInUp"
      : animation === "fadeInLeft"
        ? "animate-fadeInLeft"
        : animation === "scaleUp"
          ? "animate-scaleUp"
          : "animate-fadeIn"

  const delayStyle = delay ? { animationDelay: `${delay}s` } : {}

  return (
    <div className={`${className} ${animationClass}`} style={delayStyle}>
      {children}
    </div>
  )
}

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const AnimatedText = ({ children, delay = 0, duration = 0.5, className = "" }: AnimatedTextProps) => {
  const delayStyle = delay ? { animationDelay: `${delay}s` } : {}

  return (
    <div className={`${className} animate-fadeIn`} style={delayStyle}>
      {children}
    </div>
  )
}

interface AnimatedDividerProps {
  className?: string
  delay?: number
}

export const AnimatedDivider = ({ className = "", delay = 0 }: AnimatedDividerProps) => {
  const delayStyle = delay ? { animationDelay: `${delay}s` } : {}

  return (
    <div className={`h-px bg-gray-300 dark:bg-gray-700 w-full ${className} animate-fadeIn`} style={delayStyle}></div>
  )
}

interface AnimatedStaggerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export const AnimatedStagger = ({ children, className = "", delay = 0, staggerDelay = 0.1 }: AnimatedStaggerProps) => {
  return <div className={className}>{children}</div>
}
