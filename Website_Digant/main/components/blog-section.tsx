"use client"

import { useState } from "react"
import { getBlogPosts, type BlogPost } from "@/lib/content-loader"
import SectionWrapper from "./section-wrapper"
import Link from "next/link"
import { Animated } from "./animations/animate"
import HoverCard from "./animations/hover-card"
import useIntersectionObserver from "@/hooks/use-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const BlogSection = () => {
  const [blogPosts] = useState<BlogPost[]>(getBlogPosts())
  const [carouselRef, carouselVisible] = useIntersectionObserver()
  const [currentPage, setCurrentPage] = useState(0)
  const postsPerPage = 3

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  // Get current page posts
  const currentPosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <SectionWrapper id="blog" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Blog Posts">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fadeInUp" delay={0.1}>
          <h2 className="text-6xl font-black mb-12 text-black dark:text-white uppercase">MY BLOG</h2>
        </Animated>

        <div ref={carouselRef}>
          {carouselVisible && blogPosts.length > 0 && (
            <Animated animation="fadeInUp" delay={0.3}>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentPosts.map((post) => (
                    <HoverCard key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                      <div className="h-40 bg-gray-100 dark:bg-gray-700 mb-4 rounded overflow-hidden">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage || "/placeholder.svg"}
                            alt={`Cover image for ${post.title}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <span>No image</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{post.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline relative group"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read More
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
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

export default BlogSection
