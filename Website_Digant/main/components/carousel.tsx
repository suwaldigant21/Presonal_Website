"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: ReactNode[]
  itemsPerSlide?: number
}

const Carousel = ({ children, itemsPerSlide = 3 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate total slides
  const effectiveItemsPerSlide = isMobile ? 1 : itemsPerSlide
  const totalSlides = Math.ceil(children.length / effectiveItemsPerSlide)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Render slide items
  const renderItems = () => {
    const items = []
    for (let i = 0; i < totalSlides; i++) {
      const startIdx = i * effectiveItemsPerSlide
      const endIdx = Math.min(startIdx + effectiveItemsPerSlide, children.length)
      const slideItems = children.slice(startIdx, endIdx)

      items.push(
        <div
          key={i}
          className="flex-shrink-0 w-full grid gap-6"
          style={{
            display: i === currentIndex ? "grid" : "none",
            gridTemplateColumns: `repeat(${effectiveItemsPerSlide}, minmax(0, 1fr))`,
          }}
        >
          {slideItems}
        </div>,
      )
    }
    return items
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex transition-transform duration-500 ease-in-out">{renderItems()}</div>
      </div>

      {/* Navigation arrows - only show if there's more than one slide */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots navigation - only show if there's more than one slide */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-6 bg-black dark:bg-white" : "w-2 bg-black dark:bg-white opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
