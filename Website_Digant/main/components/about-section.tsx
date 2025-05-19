import SectionWrapper from "./section-wrapper"
import { Animated } from "./animations/animate"

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="About Me">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Heading and Image */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            {/* Removed decorative wavy lines */}

            <Animated animation="fadeInUp" className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">A LITTLE MORE</h2>
              <br></br>
              <h1 className="text-6xl md:text-7xl font-black text-black dark:text-white uppercase">ABOUT ME</h1>
            </Animated>

            <Animated animation="scaleUp" delay={0.3} className="relative w-full max-w-md mx-auto md:mx-0">
              <div className="aspect-[3/4] relative">
                <img
                  src="/about.jpg"
                  alt="Digant Suwal in formal attire"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Animated>
          </div>

          {/* Right side - Bio text */}
          <div className="w-full md:w-3/5 md:pl-12">
            <div className="space-y-4 text-lg text-black dark:text-white">
              <br>
              </br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br><p>
                Hi everyone! I'm Digant Suwal, a BSc (Hons) Computing student at The British College. I have a keen
                interest in emerging technologies, and I absolutely love development and creating new things. I'm still
                learning, growing, and exploring something new every day.
              </p>

              <p>
                Beyond the tech world, I'm deeply fond of art, painting, music, and operas. I also enjoy diving into my
                culture and history—uncovering the stories and meanings behind my different traditions and legends
                fascinates me.
              </p>

              <p>
                In my free time, I enjoy drawing, playing football with my dear friends and neighbors, and immersing
                myself in video games, films, and anime. I love going on bike rides, and I really like dairy—especially
                curd. YUMMY! 😋
              </p>

              <p>
                Health is very important to me, so I train daily by hitting the gym early in the mornings. It keeps me
                grounded, energized, and motivated.
              </p>

              <p>
                My dream is to do something impactful in tech—something that can genuinely help the world, especially in
                the fields of space exploration and medicine. If I hadn't chosen computer science, I truly might have
                pursued medicine instead, to serve people directly by helping them heal and live healthy lives. But
                since I haven't chosen medicine in this life, I hope to contribute to the medical field through
                AI—creating something that could one day support and uplift humanity.
              </p>

              <p>
                Another big dream of mine is to travel the world soaking in the beauty of different cultures, spending
                time on beaches, and just chilling out while appreciating life. 🌏 🏖️
              </p>

              <p>
                A quote I live by is: "You don't have much time. Do whatever you can right now, because time really
                passes that fast."
              </p>

              <p>And honestly? That keeps me going every single day. 💯</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
