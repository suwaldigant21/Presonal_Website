import SectionWrapper from "./section-wrapper"
import { Animated } from "./animations/animate"

const WorkExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Work Experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <Animated animation="fadeInUp" delay={0.1} className="w-full">
            <h2 className="text-5xl font-black mb-16 text-black dark:text-white uppercase">WORK EXPERIENCE</h2>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-normal text-black dark:text-white">AWS Solution Architect Associate </h3>
                <p className="text-xl text-black dark:text-white mt-2">- Apprenticeship at Adex International</p>
                <p className="mt-4 text-black dark:text-white">
                  I have been working as an Apprentice in AWS Solution Architect Associate at Adex International. I am currently working on various AWS projects and honing my skills to become a proficient AWS Solution Architect.
                </p>
              </div>
              <span className="text-xl text-black dark:text-white mt-4 md:mt-0 md:ml-8 whitespace-nowrap">May 2025 - Present</span>
            </div>
          </Animated>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WorkExperienceSection
