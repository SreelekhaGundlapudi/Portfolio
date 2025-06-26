import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
// import { TechStack } from "@/components/tech-stack"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark">
      <Hero />
      <About />
      <Skills />
      {/* <TechStack /> */}
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
