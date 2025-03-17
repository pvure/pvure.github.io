"use client"

import Image from "next/image"
import { Section } from "./misc/Section"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const experiences = [
  {
    title: "Data Science/R&D Intern",
    company: "Medtronic",
    logo: "/Medtronic-Emblem.png",
    period: "Summer 2024",
    description:
      "Quantified sympathetic control of renal vasculature and developed indicators for renal denervation treatment efficacy.",
  },
  {
    title: "Founding Engineer",
    company: "Valinor Discovery",
    logo: "/valinor-logo.png",
    period: "Summer 2024 - Present",
    description:
      "Built an ML platform to identify and validate drug targets for systemic organ aging, securing angel investments.",
  },
  {
    title: "Manufacturing Engineering Intern",
    company: "Medtronic",
    logo: "/Medtronic-Emblem.png",
    period: "Summer 2023",
    description:
      "Optimized NT-oxygenation system manufacturing, reducing production inefficiencies through data-driven analysis and solution implementation.",
  },
]

export default function Experience() {
  return (
    <Section>
      <div className='mb-4' >
        <Badge variant={"outline"} className="" id="publications">
          Experiences
        </Badge>
        {/* <h2 className="text-3xl font-semibold font-sans first:mt-0 text-primary">
          Check out my publications...
        </h2> */}
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card opacity-100 z-50 p-6 rounded-[0.5rem] shadow-md flex items-center"
          >
            <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} width={64} height={64} className="mr-6" />
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-accent-foreground">{exp.company}</p>
              <p className="text-sm text-primary mb-2">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
