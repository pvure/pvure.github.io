"use client"

import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Publications from "../components/Publications"
import Skills from "../components/Skills"
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div>
      <div className="space-y-10">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Gallery />
        <Contact />
        <Footer />
      </div>

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10 opacity-50",
          )}
        />
    </div>
  )
}
