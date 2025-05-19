"use client"

import { useState } from "react"
import { getResearchPapers, type ResearchPaper } from "@/lib/content-loader"
import SectionWrapper from "./section-wrapper"
import Link from "next/link"
import { Animated } from "./animations/animate"
import HoverCard from "./animations/hover-card"
import useIntersectionObserver from "@/hooks/use-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ResearchSection = () => {
  const [papers] = useState<ResearchPaper[]>(getResearchPapers())
  const [carouselRef, carouselVisible] = useIntersectionObserver()
  const [currentPage, setCurrentPage] = useState(0)
  const papersPerPage = 2

  // Calculate total pages
  const totalPages = Math.ceil(papers.length / papersPerPage)

  // Get current page papers
  const currentPapers = papers.slice(currentPage * papersPerPage, (currentPage + 1) * papersPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <SectionWrapper id="research" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Research Papers">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fadeInUp" delay={0.1}>
          <h2 className="text-5xl font-black mb-12 text-black dark:text-white uppercase">MY RESEARCH PAPER</h2>
        </Animated>

        <div ref={carouselRef}>
          {carouselVisible && papers.length > 0 && (
            <Animated animation="fadeInUp" delay={0.3}>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentPapers.map((paper, index) => (
                    <HoverCard
                      key={paper.id}
                      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full ${
                        index === 1 ? "border-2 border-purple-500" : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{paper.title}</h3>
                      <p className="text-black dark:text-white mb-4">{paper.abstract}</p>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{paper.publication}</span>
                        <span>{paper.year}</span>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <Link
                          href={`/research/${paper.id}`}
                          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline relative group"
                          aria-label={`Read ${paper.title}`}
                        >
                          Read Here
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        {paper.pdfUrl && (
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline relative group"
                            aria-label={`Download PDF of ${paper.title}`}
                          >
                            Download PDF
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 dark:bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                          </a>
                        )}
                      </div>
                    </HoverCard>
                  ))}
                </div>

                {/* Navigation controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8 space-x-4">
                    <button
                      onClick={prevPage}
                      className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`h-2 rounded-full transition-all ${
                            currentPage === index
                              ? "w-6 bg-black dark:bg-white"
                              : "w-2 bg-black dark:bg-white opacity-50"
                          }`}
                          aria-label={`Go to page ${index + 1}`}
                          aria-current={currentPage === index ? "true" : "false"}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextPage}
                      className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>
            </Animated>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ResearchSection
