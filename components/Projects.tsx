import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Section } from "./misc/Section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionv3"

interface Author {
  name: string
  isMainAuthor: boolean
}

interface Project {
  title: string
  fullTitle: string
  authors: Author[]
  year: string
  description: string
}

const projects: Project[] = [
  {
    title: "ALDH2 Delivery via AAV",
    fullTitle: "Transient Delivery of ALDH2 via Adeno-Associated Virus to Mitigate Alcohol-Induced Toxicity",
    authors: [
      { name: "Vure, P.", isMainAuthor: true },
      { name: "Chen, R.", isMainAuthor: false },
      { name: "Koneru, H.", isMainAuthor: false },
      { name: "Lashkari, V.", isMainAuthor: false },
      { name: "Tran, M.", isMainAuthor: false },
      { name: "Gatongi, M.", isMainAuthor: false },
      { name: "Kim, C.", isMainAuthor: false }
    ],
    year: "2024",
    description: "Widespread alcohol consumption's negative health impacts have prompted research into biotechnology solutions to combat its toxic effects, particularly through manipulation of liver enzymes that metabolize alcohol and its byproducts. This study explored using adeno-associated virus (AAV) gene therapy to boost ALDH2 enzyme expression in liver cells, finding significant protective effects against toxic acetaldehyde."
  },
  {
    title: "NCAM1 Specific Binders",
    fullTitle: "Design of NCAM1 Specific Binders Towards Neuroendocrine Prostate Cancer Therapy",
    authors: [
      { name: "Kavirayuni, V.S.", isMainAuthor: false },
      { name: "Vure, P.", isMainAuthor: true },
      { name: "Yerrabelli, R.", isMainAuthor: false },
      { name: "Goodingham, E.P.", isMainAuthor: false },
      { name: "Hong, L.", isMainAuthor: false },
      { name: "Tran, M.", isMainAuthor: false },
      { name: "Gatongi, M.", isMainAuthor: false },
      { name: "Chatterjee, P.", isMainAuthor: false }
    ],
    year: "2024",
    description: "The study aimed to design peptide binders for NCAM1, a key receptor in neuroendocrine prostate cancer (NEPC), using computational tools PepMLM and RFdiffusion to enable targeted drug delivery via lipid nanoparticles. The approach generated hundreds of candidate sequences, with three promising candidates selected for experimental validation based on ipTM scores, representing an effort to develop more effective targeted therapies for this aggressive cancer."
  },
  {
    title: "DISTCLIP",
    fullTitle: "DISTCLIP: Advancing Protein-Protein Interaction Predictions Through Contrastive Learning of Distograms",
    authors: [
      { name: "Vure, P.", isMainAuthor: true },
      { name: "Hsu, A.", isMainAuthor: false },
      { name: "Pulugurta, R.", isMainAuthor: false },
      { name: "et al.", isMainAuthor: false },
      { name: "Chatterjee, P.", isMainAuthor: false }
    ],
    year: "2024",
    description: "The study introduces DistCLIP, a novel CLIP-based model that leverages ESM-2 to predict protein-protein distograms, addressing the challenge of understanding protein interactions without time-consuming structural experiments. This model, using contrastive learning to predict inter-residue distances between proteins, demonstrates superior accuracy compared to baseline methods in predicting protein-protein interactions at the residue level."
  },
  {
    title: "Anti-CRISPRTune",
    fullTitle: "Anti-CRISPRTune: Fine-Tuning ProtGPT2 and ESM-2 for the Generative Design of Anti-CRISPR Proteins",
    authors: [
      { name: "Vure, P.", isMainAuthor: true },
      { name: "et al.", isMainAuthor: false },
      { name: "Chatterjee, P.", isMainAuthor: false }
    ],
    year: "2024",
    description: "This study introduces Anti-CRISPRTune, a novel fine-tuned version of ProtGPT2 designed to generate new Anti-CRISPR proteins that could help control CRISPR-Cas gene editing systems. The model employs a three-step process of sequence generation, SVM-based screening, and ESM-2 optimization, successfully generating proteins with natural-like characteristics."
  },
  {
    title: "Glucose-Insulin Dynamics",
    fullTitle: "Modeling Effects of Humalog and Ozempic on Glucose and Insulin Dynamics in Healthy & Type 2 Diabetes Patients",
    authors: [
      { name: "D'Cunha, R.", isMainAuthor: false },
      { name: "Vure, P.", isMainAuthor: true },
      { name: "Docters, S.", isMainAuthor: false },
      { name: "Baldwin, B.", isMainAuthor: false },
      { name: "Le, P.", isMainAuthor: false }
    ],
    year: "2023",
    description: "This study presents a modified Bergman model to understand diabetes treatments, particularly focusing on how Ozempic and Humalog affect blood glucose regulation in both healthy and diabetic individuals. Through mathematical modeling and simulations incorporating factors like food intake and drug interactions, the research demonstrates that while Humalog provides short-term glucose control, Ozempic offers longer-term management of blood glucose levels, though both drugs carry risks of hypoglycemia in healthy individuals."
  }
]

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <div className="flex items-start gap-6">
            <div className="text-sm text-muted-foreground font-mono whitespace-nowrap">
              {project.year}
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-primary">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.fullTitle}</p>
                <div className="text-xs text-muted-foreground mt-2">
                  {project.authors.map((author, authorIndex) => (
                    <span key={authorIndex}>
                      <span className={author.isMainAuthor ? "font-bold" : ""}>
                        {author.name}
                      </span>
                      {authorIndex < project.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
              
              <AccordionTrigger className="py-2 mt-1">
                <span className="text-xs">View Description</span>
              </AccordionTrigger>
              
              <AccordionContent className="text-sm text-muted-foreground">
                {project.description}
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export default function Projects() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div>
        <Badge variant="outline" className="" id="projects">
          Projects
        </Badge>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  )
}