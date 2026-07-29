import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResearchComponents } from "@/components/sections/research-components";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ObjectivesTimeline } from "@/components/sections/objectives-timeline";
import { GallerySection } from "@/components/sections/gallery-section";
import { DocumentsSection } from "@/components/sections/documents-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TeamSection } from "@/components/sections/team-section";
import { SupervisorsSection } from "@/components/sections/supervisors-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { FAQSection, ContactSection } from "@/components/sections/faq-contact-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResearchComponents />
      <ArchitectureSection />
      <TechStackSection />
      <ObjectivesTimeline />
      <GallerySection />
      <DocumentsSection />
      <TimelineSection />
      <TeamSection />
      <SupervisorsSection />
      <StatisticsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
