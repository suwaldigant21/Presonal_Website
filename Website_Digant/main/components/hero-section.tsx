import Link from "next/link"
import Image from "next/image"
import { Animated } from "./animations/animate"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f6f0cf] dark:bg-gray-900 px-8 pt-24 pb-16"
      aria-label="Hero Section"
    >
      <div className="max-w-6xl mx-auto mt-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Name and Bio */}
          <div className="w-full md:w-2/3 mb-10 md:mb-0">
            <Animated animation="fadeInUp" delay={0.1} className="mb-2">
              <h1 className="text-5xl md:text-8xl font-black mb-4 text-black dark:text-white uppercase">
                DIGANT SUWAL
              </h1>
            </Animated>
            <Animated animation="fadeInUp" delay={0.3} className="mb-6">
              <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white uppercase">
                Student & Researcher
              </h2>
            </Animated>
            <div className="max-w-3xl">
              <div className="text-lg text-center md:text-left mb-6 text-black dark:text-white">
                I'm a student developer and researcher based in Bhaktapur, Nepal, passionate about building
                enterprise-level software that blends intuitive design with robust backend functional depth. My focus lies in crafting
                visually engaging digital interfaces while ensuring balanced and efficient database systems behind the
                scenes. I hold a deep interest in cloud computing and data science, and I'm currently exploring the
                realms of machine learning and artificial intelligence to develop next-generation systems that serve
                both innovation and purpose.
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <Animated animation="fadeInLeft" delay={0.7} className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-80 h-96 sm:h-[32rem]">
              <Image
                src="/home.png"
                alt="Digant Suwal"
                width={320}
                height={512}
                className="w-full h-full object-cover rounded-lg shadow-md"
                priority
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-gray-300 dark:ring-gray-700"></div>
            </div>
          </Animated>
        </div>

        {/* Connect button */}
        <Animated animation="fadeInUp" delay={0.9} className="absolute bottom-16 right-16 hidden md:block">
          <Link href="#contact">
            <div className="border-2 border-black dark:border-white rounded-full px-6 py-3 transform rotate-3 hover:bg-black hover:text-[#f6f0cf] dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:rotate-0 duration-300 cursor-pointer shadow-sm hover:shadow-md">
              <p className="font-bold text-black dark:text-white hover:text-[#f6f0cf] dark:hover:text-gray-900">
                LET'S CONNECT !
              </p>
            </div>
          </Link>
        </Animated>
      </div>
    </section>
  )
}

export default HeroSection
