import SectionWrapper from "./section-wrapper"
import { Animated, AnimatedDivider } from "./animations/animate"

const EducationSection = () => {
  const educationData = [
    {
      institution: "THE BRITISH COLLEGE",
      degree: "BSc Honours in Computing",
      period: "JAN 2024 - SEP 2027",
      status: "RUNNING",
    },
    {
      institution: "KHWOPA SECONDARY SCHOOL",
      degree: "+2 in Science",
      additionalInfo: "Physics and Computer Majors",
      period: "JUL 2021 - SEP 2023",
      gpa: "3.14",
    },
    {
      institution: "MOUNT EVEREST SCHOOL",
      degree: "Basic & Secondary Level",
      period: "2011 - 2021",
      gpa: "3.85",
    },
  ]

  return (
    <SectionWrapper id="education" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Education">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <Animated animation="fadeInUp" delay={0.1}>
              <h2 className="text-5xl font-black mb-12 text-black dark:text-white uppercase">EDUCATION</h2>
            </Animated>

            <div className="space-y-12">
              {educationData.map((entry, index) => (
                <Animated key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-black dark:text-white">{entry.institution}</h3>
                      <div className="flex items-center mt-1 md:mt-0">
                        <span className="mr-4 text-black dark:text-white">{entry.period}</span>
                        <span className="font-medium text-black dark:text-white">
                          {entry.status || (entry.gpa && `GPA: ${entry.gpa}`)}
                        </span>
                      </div>
                    </div>
                    <AnimatedDivider className="mb-2" delay={0.1 + index * 0.2} />
                    <p className="text-xl text-black dark:text-white">{entry.degree}</p>
                    {entry.additionalInfo && (
                      <p className="text-xl text-black dark:text-white">{entry.additionalInfo}</p>
                    )}
                  </div>
                </Animated>
              ))}
            </div>
          </div>

          <Animated animation="fadeInLeft" delay={0.5} className="hidden md:block w-full md:w-1/3 mt-16">
            <div className="relative w-full h-[500px]">
              <img
                src="/education.jpg?height=500&width=500"
                alt="Profile photo"
                className="w-full h-full object-cover object-center rounded-lg shadow-md"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-gray-300 dark:ring-gray-700"></div>
            </div>
          </Animated>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default EducationSection
