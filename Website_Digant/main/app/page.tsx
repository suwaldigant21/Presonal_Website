import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import BlogSection from "@/components/blog-section"
import ResearchSection from "@/components/research-section"
import WorkExperienceSection from "@/components/work-experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/ui/back-to-top"
import ThemeToggle from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <BlogSection />
      <ResearchSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <ThemeToggle />
    </main>
  )
}
