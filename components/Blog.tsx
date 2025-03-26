import React, { useState } from 'react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'

// This will be expanded as you write more articles
const blogPosts = [
  {
    id: 1,
    title: "Bioengineering Primer: Fighting Viruses That Change Their Face",
    author: "Pranay",
    date: "March 26, 2025",
    readTime: "10 min read",
    summary: "An introduction to bioengineering and a glimpse into my research on designing proteins to combat coronavirus variants.",
    content: `
      <div class="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>My name is Pranay and I'm a senior at Duke University. In a few short months, I'll be graduating college and will be off to graduate school to pursue a PhD in bioengineering.</p>
        
        <p>I'm interested in developing tools and methods to control, cure, or prevent some of the world's most pressing diseases and disorders. I'm fascinated by cool, unique, and important research that's being done to advance these missions, and I really think that anyone with sufficient background and interest would be fascinated as well.</p>
        
        <p>So that's what I hope to try to cultivate on my blog - primers into different topics that I'm interested in, and topics that I think you should be interested in too.</p>
        
        <p>Whether you're seeing this post on my Substack or my personal website, welcome! I hope you can leave this article having learned something new about bioengineering, and hopefully you enjoy it enough to tune in for the next installment!</p>
        
        <hr class="my-8 border-gray-700" />
        
        <h2>Setting the stage</h2>
        <p>When I tell people I'm majoring in bioengineering, conversations often end quickly with a polite nod or a question about prosthetics, highlighting how unfamiliar most people are with the extent of the field.</p>
        
        <p>I don't think this reflects a lack of interest, but rather a lack of familiarity with what bioengineering actually encompasses. When I do get the chance to explain my work, people are genuinely curious and engaged. And they should be—bioengineers are developing new drugs and treatments for diseases, creating advanced diagnostic tools, and designing solutions for global health challenges. So, in this article, I'll try to give a very brief primer into what bioengineering is, and then kick off with a quick summary into one research project I've worked on.</p>
        
        <h2>What is bioengineering, anyway?</h2>
        <p>Bioengineering is the application of engineering principles to biological systems. Think of a traditional engineer, such as a civil or electrical engineer. A civil engineer builds bridges with different materials, say concrete or steel, while an electrical engineer can create a circuit with copper wires or silicon chips.</p>
        
        <p>Bioengineers, on the other hand, work with the components of living systems. This can include cells, tissues, bone, and hundreds to thousands of other components. There are a few different areas of bioengineering that I've seen, and this list is not even close to being comprehensive. Here are a few different examples, but the main point is that this field is huge:</p>
        
        <ol>
          <li><strong>Biomechanical engineering:</strong> This is probably what people think of first - designing artificial limbs, heart valves, or exoskeletons that interact with the human body. It's the most visible branch of bioengineering.</li>
          <li><strong>Tissue engineering:</strong> Growing replacement or enhanced tissues or organs in the lab, with several applications in things such as transplantation, wound healing, and disease modeling.</li>
          <li><strong>Synthetic biology:</strong> Redesigning existing organisms or creating new biological components with specific functions, like bacteria that can produce insulin or clean up oil spills.</li>
          <li><strong>Biomolecular engineering:</strong> Working at the molecular level to design or modify proteins, DNA, and other biomolecules to perform specific tasks.</li>
        </ol>
        
        <p>Within biomolecular engineering, I specifically work on protein engineering (which I'll shortly explain), which will be the focus of many of my posts, including this one.</p>
        
        <p>Proteins are the primary drivers of many of the functions of the human body - they help to digest the food you eat, fight off infections that would otherwise run rampant in your body and kill you, allow your muscles to contract, transport oxygen in your blood, and thousands of other essential tasks.</p>
        
        <p>Think of proteins as tiny machines made up of building blocks called amino acids (there are 20 different types). These amino acids are arranged in a specific order, like beads on a string. Based on the order of these beads, or amino acids, this string folds into an energetically favorable 3D shape that determines what the protein can do. By changing the sequence of amino acids, we can create proteins with new or improved functions. So the main thing that we need to remember here is that the amino acid sequence --> 3d protein structure --> function of a protein.</p>
        
        <p>Check out this super short piece on the functional diversity of proteins.</p>
        
        <p>So here we've developed the general intuition behind why engineering a protein would be a useful or interesting endeavor. We've gone through a few different examples of functions of proteins in the body, which should show that proteins can be incredibly specific and efficient at what they do. And so if we can design proteins to perform specific tasks—like breaking down pollutants, detecting disease markers, or targeting cancer cells—we can develop new solutions to major issues. And that's exactly what protein engineering aims to do.</p>
        
        <h2>How do you catch someone that keeps changing their face?</h2>
        <p>Picture this: You're an FBI agent, tracking down a serial killer, who is traveling all across the country. You know what they look like, and have Wanted posters up everywhere imaginable. The catch: every time you get close to them, every time you see them, they are able to change their face and the search starts anew.</p>
        
        <p>This analogy helps us understand the challenge with COVID-19. The vaccines we have today primarily train our immune system (the FBI, in this example) to recognize the spike protein of SARS-CoV-2—specifically a part called the receptor binding domain (RBD). The spike protein is the "face" of the virus that our immune system learns to recognize.</p>
        
        <p>But here's the problem: this region of the virus changes easily through mutations. It's like the virus keeps putting on different disguises. Our immune system, trained to recognize one version, might not recognize the new disguises as quickly or effectively. That's why we've needed updated boosters for Omicron and other variants.</p>
        
        <p>This is a form of viral evolution - viruses with mutations in regions targeted by our immune system survive longer and reproduce more, becoming the dominant variants. In other words, the virus changed its "face" just enough that our immune system's recognition wasn't as strong.</p>
        
        <p>So how do you go about catching someone that keeps changing their face? Well, in the case of the FBI example, you find ways to target aspects of the serial killer that they can't change. Things like their fingerprint, height, or DNA. The things that make them <em>them</em>.</p>
        
        <p>Scientists have found that there are parts of the coronavirus that can't change much without the virus losing its ability to infect cells - parts that remain nearly identical across many different coronaviruses. These regions would be ideal vaccine targets because they can't easily mutate to escape our immune response.</p>
        
        <p>The challenge is that these regions are usually hidden inside the virus structure, only becoming briefly visible during the infection process during the infection process. Our immune system rarely gets a good look at them, so how is it supposed to fight against them?</p>
        
        <div class="bg-indigo-900/30 p-6 rounded-xl my-8">
          <h3 class="text-xl font-semibold mb-3">Continue Reading</h3>
          <p>This article continues with sections on:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Understanding antibodies: Your immune system's seek-and-destroy weapons</li>
            <li>Building molecular training tools for the immune system</li>
            <li>The engineering process</li>
            <li>Testing our designer proteins</li>
            <li>The results: Promising steps toward broad coronavirus protection</li>
            <li>Why this matters + Final Thoughts</li>
          </ul>
          <button class="mt-4 text-indigo-300 hover:text-indigo-200 font-medium flex items-center">
            Read full article <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    `
  },
  // You can add more blog posts here as you write them
]

export default function Blog() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0)
  const currentPost = blogPosts[currentPostIndex]
  
  const nextPost = () => {
    setCurrentPostIndex((prev) => (prev + 1) % blogPosts.length)
  }
  
  const prevPost = () => {
    setCurrentPostIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  return (
    <section id="blog" className="py-16 md:py-24">
      <Container>
        <SectionHeading>Blog</SectionHeading>
        
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">{currentPost.title}</h3>
              <div className="flex items-center gap-4 mt-2 md:mt-0 text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentPost.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8 text-gray-300 italic border-l-4 border-indigo-500 pl-4 py-1">
              {currentPost.summary}
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevPost}
                disabled={blogPosts.length <= 1}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <Button
                onClick={nextPost}
                disabled={blogPosts.length <= 1}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}