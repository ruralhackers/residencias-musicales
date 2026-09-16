import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Lab } from "@/components/Lab";
import { Method } from "@/components/Method";
import { Showcase } from "@/components/Showcase";
import { Scholarships } from "@/components/Scholarships";
import { Apply } from "@/components/Apply";
import { Artists } from "@/components/Artists";
import { MusicProjects } from "@/components/MusicProjects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <About />
        <Lab />
        <Method />
        <Showcase />
        <MusicProjects />
        <Artists />
        <Scholarships />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
