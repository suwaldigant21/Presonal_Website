"use client"

import { useState } from "react"
import { getProjects, type Project } from "@/lib/content-loader"
import SectionWrapper from "./section-wrapper"
import { Animated } from "./animations/animate"
import HoverCard from "./animations/hover-card"
import useIntersectionObserver from "@/hooks/use-intersection-observer"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"

const ProjectsSection = () => {
  const [projects] = useState<Project[]>(getProjects())
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [filtersRef, filtersVisible] = useIntersectionObserver()
  const [featuredRef, featuredVisible] = useIntersectionObserver()
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.technologies.includes(activeFilter))

  const uniqueTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies)))

  // Find the featured project
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  // Calculate total pages
  const totalPages = Math.ceil(regularProjects.length / projectsPerPage)

  // Get current page projects
  const currentProjects = regularProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <SectionWrapper id="projects" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Projects">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fadeInUp" delay={0.1}>
          <h2 className="text-5xl font-black mb-12 text-black dark:text-white uppercase">PROJECTS</h2>
        </Animated>

        {/* Filter buttons */}
        <div ref={filtersRef}>
          {filtersVisible && uniqueTechnologies.length > 0 && (
            <Animated animation="fadeInUp" delay={0.3} className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-opacity-80"
                }`}
                aria-pressed={activeFilter === "all"}
              >
                All
              </button>
              {uniqueTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === tech
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-opacity-80"
                  }`}
                  aria-pressed={activeFilter === tech}
                >
                  {tech}
                </button>
              ))}
            </Animated>
          )}
        </div>

        {/* Featured Project (if exists) */}
        {featuredProject && (
          <div ref={featuredRef}>
            {featuredVisible && (
              <Animated animation="fadeInUp" delay={0.4} className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white uppercase">Featured Project</h3>
                <HoverCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-purple-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                      <img
                        src={featuredProject.image || "/placeholder.svg?height=256&width=512"}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">{featuredProject.title}</h4>
                      <p className="text-black dark:text-white mb-4">{featuredProject.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-4">
                        {featuredProject.githubUrl && (
                          <a
                            href={featuredProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-gray-300 dark:border-gray-600 transition-colors"
                            aria-label={`GitHub repository for ${featuredProject.title}`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </Animated>
            )}
          </div>
        )}

        {/* Projects Slider */}
        <Animated animation="fadeInUp" delay={0.5}>
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white uppercase">All Projects</h3>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <HoverCard key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 mb-4 rounded overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg?height=128&width=256"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h4>
                  <p className="text-black dark:text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-gray-300 dark:border-gray-600 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-5 h-5" />
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
                        currentPage === index ? "w-6 bg-black dark:bg-white" : "w-2 bg-black dark:bg-white opacity-50"
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
      </div>
    </SectionWrapper>
  )
}

export default ProjectsSection
