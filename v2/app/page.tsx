import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {/* Header stays static, no animation */}
        <Header />
        <About />
        <Work />
        <Projects />
      </div>
    </div>
  );
}
