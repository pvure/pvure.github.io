import React from "react";
import { Section } from "./misc/Section";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionv3";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Code, DefaultIcon } from "./sharedComponents";

export default function Publications() {
  const publicationsData = [
    {
      pubDate: "Oct. 2024",
      pubAuthors: (
        <>
          Wang, L.†, Pulugurta. R.†, <span className="font-semibold text-primary">Vure, P†</span>, Pal, A., Zhang, Y., Chatterjee, P. (†equal contribution)
        </>
      ),
      pubImpact: "Paper in review, Nature Methods",
      pubTitle: "PepDoRA: A Unified Peptide Language Model via Weight-Decomposed Low-Rank Adaptation",
      pubJournal: "Arxiv",
      pubJournalLink: "https://doi.org/10.48550/arXiv.2410.20667",
      pubType: "Preprint",
      pubDescription: (
        <>
          While traditional models struggle to predict the properties of peptide therapeutics, PepDoRA bridges this gap by using Weight-Decomposed Low-Rank Adaptation to fine-tune ChemBERTa-77M-MLM, creating optimized embeddings that can accurately predict various properties of both modified and unmodified peptides.
        </>
      ),
      pubLink: "https://doi.org/10.48550/arXiv.2410.20667",
      pubCategory: [
        {
          name: "Deep Learning",
          icon: "brain-circuit",
        },
        {
          name: "Drug Discovery",
          icon: "flask-round",
        }
      ],
    },
    {
      pubDate: "Jun. 2024",
      pubAuthors: (
        <>
          Vincoff, S., Kholina, K., Goel, S., Pulugurta, R., <span className="font-semibold text-primary">Vure, P.</span>, Chatterjee, P.
        </>
      ),
      pubImpact: "Paper Accepted, Nature Communications",
      pubTitle: "FusOn-pLM: A Fusion Oncoprotein-Specific Language Model via Focused Probabilistic Masking",
      pubJournal: "Nature Communications",
      pubJournalLink: "https://www.biorxiv.org/content/10.1101/2024.06.03.597245v1",
      pubType: "Research Article",
      pubDescription: (
        <>
          Fusion oncoproteins, which drive various cancers through chromosomal translocations, have been historically difficult to target therapeutically due to their disordered nature and lack of druggable pockets. Our new FusOn-pLM model addresses this challenge by fine-tuning ESM-2 on fusion oncoprotein sequences with focused masking on key residues, generating optimized embeddings that outperform baselines and enable potential therapeutic design applications.
        </>
      ),
      pubLink: "https://doi.org/10.1101/2024.06.03.597245",
      pubCategory: [
        {
          name: "Oncology",
          icon: "microscope",
        },
        {
          name: "Machine Learning",
          icon: "brain-circuit",
        }
      ],
    },
    {
      pubDate: "Mar. 2024",
      pubAuthors: (
        <>
          Chen, T., <span className="font-semibold text-primary">Vure, P.</span>, Pulugurta, R., Chatterjee, P.
        </>
      ),
      pubImpact: "Journal paper in preparation",
      pubTitle: "AMP-Diffusion: Integrating Latent Diffusion with Protein Language Models for Antimicrobial Peptide Generation",
      pubJournal: "Biorxiv",
      pubJournalLink: "https://www.biorxiv.org/content/10.1101/2024.03.03.583201v1",
      pubType: "Preprint",
      pubDescription: (
        <>
          While diffusion models have shown remarkable success across AI domains, their application to protein design through continuous latent space diffusion within protein language models remains underexplored. We present AMP-Diffusion, a latent diffusion model that leverages ESM-2 to generate antimicrobial peptides with properties closely matching natural sequences, demonstrating the potential of pLM-based diffusion for peptide design.
        </>
      ),
      pubLink: "https://www.biorxiv.org/content/10.1101/2024.03.03.583201v1.full.pdf",
      pubCategory: [
        {
          name: "Generative AI",
          icon: "sparkles",
        },
        {
          name: "Protein Design",
          icon: "dna",
        }
      ],
    },
    {
      pubDate: "Oct. 2023",
      pubAuthors: (
        <>
          Chen, T., Pertsemlidis, S., Watson, R., Kavirayuni, V.S, Hsu, A., <span className="font-semibold text-primary">Vure, P.</span>, Pulugurta, R., Vincoff, S., Hong, L., Wang, T., Yudistyra, V., Haarer, E., Zhao, L., Chatterjee, P.
        </>
      ),
      pubImpact: "Paper in review, Nature Biotechnology",
      pubTitle: "PepMLM: Target Sequence-Conditioned Generation of Therapeutic Peptide Binders via Span Masked Language Modeling",
      pubJournal: "Nature Biotechnology (In Review)",
      pubJournalLink: "https://arxiv.org/abs/2310.03842",
      pubType: "Research Article",
      pubDescription: (
        <>
          Many disease-related proteins have been difficult to target with traditional drugs due to their lack of binding pockets, but PepMLM addresses this by generating linear peptide binders directly from target protein sequences through a novel fine-tuning approach of ESM-2. The system&apos;s effectiveness has been demonstrated both computationally and experimentally, successfully generating peptides that can induce degradation of disease-relevant proteins when fused to E3 ubiquitin ligase domains.
        </>
      ),
      pubLink: "https://doi.org/10.48550/arXiv.2310.03842",
      pubCategory: [
        {
          name: "Drug Design",
          icon: "flask-round",
        },
        {
          name: "Machine Learning",
          icon: "brain-circuit",
        }
      ],
    },
    {
      pubDate: "Jun. 2023",
      pubAuthors: (
        <>
          Bhat, S., Palepu, K. et al., <span className="font-semibold text-primary">Vure, P.</span>, Chatterjee, P.
        </>
      ),
      pubImpact: "Published, Science Advances",
      pubTitle: "De Novo Design of Peptide Binders to Conformationally Diverse Targets with Contrastive Language Modeling",
      pubJournal: "Science Advances",
      pubJournalLink: "https://www.science.org/doi/10.1126/sciadv.adr8638",
      pubType: "Research Article",
      pubDescription: (
        <>
          PepPrCLIP provides a novel framework for designing target-binding peptides by combining ESM-2&apos;s latent space exploration with CLIP-based screening, requiring only the target protein&apos;s sequence. The system&apos;s effectiveness has been validated experimentally, successfully generating peptides that can both inhibit and degrade disease-relevant proteins when fused to E3 ubiquitin ligase domains.
        </>
      ),
      pubLink: "https://www.science.org/doi/10.1126/sciadv.adr8638",
      pubCategory: [
        {
          name: "Protein Design",
          icon: "dna",
        },
        {
          name: "Machine Learning",
          icon: "brain-circuit",
        }
      ],
    },
    {
      pubDate: "Nov. 2023",
      pubAuthors: (
        <>
          Kapingidza, B. et al., <span className="font-semibold text-primary">Vure, P.</span>, Azoitei, M.L.
        </>
      ),
      pubImpact: "Published, Nature Communications",
      pubTitle: "Engineered immunogens to elicit antibodies against conserved coronavirus epitopes",
      pubJournal: "Nature Communications",
      pubJournalLink: "https://www.nature.com/ncomms/",
      pubType: "Research Article",
      pubDescription: (
        <>
          The design of scaffolded immunogens displaying conserved regions of the SARS-CoV-2 spike protein offers a way to avoid immune responses to the highly mutable receptor binding domain. These engineered proteins successfully bind to broadly protective antibodies and, when used as vaccine boosters in mice, generate broad immunity against betacoronaviruses and protect against live virus challenges.
        </>
      ),
      pubLink: "https://doi.org/10.1038/s41467-023-43638-9",
      pubCategory: [
        {
          name: "Immunology",
          icon: "shield",
        },
        {
          name: "Protein Design",
          icon: "dna",
        }
      ],
    },
  ];

  return (
    <Section className="flex flex-col items-start gap-4">
      <div>
        <Badge variant="outline" className="" id="publications">
          Publications
        </Badge>
      </div>

      {publicationsData.map(
        ({
          pubDate,
          pubAuthors,
          pubTitle,
          pubJournal,
          pubJournalLink,
          pubDescription,
          pubLink,
          pubImpact,
          pubType,
          pubCategory,
        }) => {
          return (
            <div key={pubTitle} className="project max-md:w-full">
              <div className="flex items-center gap-4 mx-2">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full font-sans"
                >
                  <AccordionItem
                    value="item-1"
                    className="pb-4 text-pretty flex flex-row transition gap-4"
                  >
                    <div className="flex items-center text-muted-foreground text-sm w-min text-left font-mono">
                      <p className="">{pubDate}</p>
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="text-primary flex flex-col">
                          <div className="text-base font-bold text-foreground">
                            <Link
                              href={pubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="transition brightness-105">
                                {pubTitle}
                              </span>{" "}
                              <ArrowUpRight
                                className="inline-block w-5 mb-0.5"
                                size={16}
                              />
                            </Link>
                          </div>
                          <div className="text-muted-foreground text-sm font-normal text-[0.925em]">
                            <TooltipProvider delayDuration={50}>
                              <Tooltip>
                                <TooltipTrigger className="font-medium">
                                  <div className="relative after:absolute after:bottom-0 after:left-0 before:h-[0.5px] after:h-[0.5px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-200 after:bg-gray-500 text-foreground">
                                    {pubJournalLink ? (
                                      <Link
                                        href={pubJournalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {pubJournal}
                                      </Link>
                                    ) : (
                                      pubJournal
                                    )}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="shadow-md shadow-card transition-all">
                                  <p>{pubImpact}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {pubJournal && " - "}{pubType}
                          </div>
                          <div className="text-muted-foreground text-xs font-light py-1.5">
                            {typeof pubAuthors === "string" ? (
                              `- ${pubAuthors}`
                            ) : (
                              <>{pubAuthors}</>
                            )}
                          </div>
                        </div>
                      </div>
                      <AccordionContent className="mr-8 pb-2.5 pt-0.5">
                        {pubDescription}
                      </AccordionContent>
                      <div className="flex flex-wrap gap-2 text-xs leading-none">
                        {pubCategory.map((category) => (
                          <Code
                            key={category.name}
                            className="inline-flex items-center"
                          >
                            <DefaultIcon
                              icon={category.icon}
                              className="text-current -mt-0"
                              height="14"
                            />
                            <span className="ml-2">{category.name}</span>
                          </Code>
                        ))}
                      </div>
                    </div>
                    <AccordionTrigger className="pb-0 p-1" />
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          );
        }
      )}
    </Section>
  );
}
