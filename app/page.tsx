import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { AnimateIn } from "@/components/animate-in";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {/* Header stays static, no animation */}
        <Header />

        {/* Staggered animations for each section */}
        <AnimateIn delay={0}>
          <About />
        </AnimateIn>

        <AnimateIn delay={100}>
          <Work />
        </AnimateIn>

        <AnimateIn delay={125}>
          <Projects />
        </AnimateIn>
      </div>
    </div>
  );
}
