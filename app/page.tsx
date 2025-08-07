// import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danielle Andrews',
  description: 'Featured projects and work by Danielle Andrews',
  openGraph: {
    title: 'Danielle Andrews',
    description: 'Featured projects and work by Danielle Andrews',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
