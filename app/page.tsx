"use client";
import ContactSection from "./section/ContactSection/page";
import HomeSection from "./section/HomeSection/page";
import ProjectSection from "./section/ProjectSection/page";
import ServiceSection from "./section/ServiceSection/page";
import SkillSection from "./section/SkillSection/page";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HomeSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="services">
        <ServiceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
