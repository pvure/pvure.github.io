"use client"

import Image from "next/image"
import { Section } from "./misc/Section"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const experiences = [
  {
    title: "Engineer",
    company: "Stealth",
    logo: "/stealth.png",
    period: "Summer 2024 - Present",
    description:
      "Building at the intersection of AI and Biotech.",
  },
  {
    title: "ML Researcher",
    company: "Programmable Biology Group",
    logo: "/CAGT_logo.png",
    period: "Summer 2023 - Present",
    description:
      "Built generative AI & deep learning-based models and platforms for protein design under Dr. Pranam Chatterjee.",
  },
  {
    title: "Data Science/R&D Intern",
    company: "Medtronic",
    logo: "/Medtronic-Emblem.png",
    period: "Summer 2024",
    description:
      "Quantified sympathetic control of renal vasculature and developed indicators for renal denervation treatment efficacy.",
  },
  
  {
    title: "Manufacturing Engineering Intern",
    company: "Medtronic",
    logo: "/Medtronic-Emblem.png",
    period: "Summer 2023",
    description:
      "Optimized NT-oxygenation system manufacturing, reducing production inefficiencies through data-driven analysis and solution implementation.",
  },
  {
    title: "Immune Engineering Researcher",
    company: "Duke Human Vaccine Institute",
    logo: "/dhvi_logo_final.png",
    period: "Fall 2021 - Summer 2023",
    description:
      "Built and validated epitope-scaffold models to elicit the production of broadly protective coronavirus antibodies under Dr. Mihai Azoitei.",
  }
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
