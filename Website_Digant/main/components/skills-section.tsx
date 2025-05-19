'use client'

import SectionWrapper from "./section-wrapper"
import { Animated } from "./animations/animate"
import useIntersectionObserver from "@/hooks/use-intersection-observer"

const SkillsSection = () => {
  const [skillsRef, skillsVisible] = useIntersectionObserver()

  const skills = [
    { icon: "/c.png", name: "C" },
    { icon: "/c++.png", name: "C++" },
    { icon: "/Python.png", name: "Python" },
    { icon: "/java.png", name: "Java" },
    { icon: "/git.png", name: "Git" },
    { icon: "/github.png", name: "Github" },
    { icon: "/aws.png", name: "AWS" },
    { icon: "/sql.png", name: "SQL" },
    { icon: "/javascript.png", name: "HTML" },
    { icon: "/figma.png", name: "Figma" },
    { icon: "/photoshop.png", name: "Photoshop" },
  ]

  return (
    <SectionWrapper id="skills" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Skills and Tools">
      <div className="max-w-6xl mx-auto">
        <Animated animation="fadeInUp" delay={0.1}>
          <h2 className="text-5xl font-black mb-12 text-black dark:text-white uppercase">SKILLS & TOOLS</h2>
        </Animated>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Skill Icons */}
          <div ref={skillsRef} className="w-full md:w-1/2 mb-8 md:mb-0">
            {skillsVisible && (
              <div className="grid grid-cols-3 gap-8"> {/* 3 per row, larger gap */}
                {skills.map((skill, index) => (
                  <Animated key={index} animation="scaleUp" delay={0.1 + index * 0.05} className="flex flex-col items-center">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={`${skill.name} icon`}
                      width={80} // larger size
                      height={80}
                      className="object-contain"
                    />
                    <span className="sr-only">{skill.name}</span>
                  </Animated>
                ))}
              </div>
            )}
          </div>

          {/* Right side - Skills description */}
          <div className="w-full md:w-1/2 md:pl-16">
            <Animated animation="fadeInUp" delay={0.4}>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white uppercase">MY TOP SKILLS ARE</h3>
            </Animated>
            <div className="space-y-4">
              <p className="text-lg text-black dark:text-white">
                I have experience developing programs in C, C++, and Java, with a strong foundation in object-oriented
                programming. I'm currently diving deep into data structures and algorithms to strengthen my
                problem-solving skills.
              </p>

              <p className="text-lg text-black dark:text-white">
                In Python, I work with various frameworks and libraries such as NumPy, Pandas, Matplotlib, and
                Scikit-learn for data analysis and research. For databases, I use Oracle APEX and Apache SQL to design
                and manage robust systems.
              </p>

              <p className="text-lg text-black dark:text-white">
                On the creative side, I design using tools like Photoshop, Figma, Canva, and Illustrator. I'm also
                currently studying for the AWS Certified Solutions Architect certification to deepen my cloud computing
                knowledge.
              </p>

              <p className="text-lg text-black dark:text-white">
                Additionally, I use Git and GitHub for collaborative development and am learning to implement CI/CD
                pipelines for smoother and more efficient deployment workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SkillsSection