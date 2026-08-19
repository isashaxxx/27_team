import { HeaderNav } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HeaderNav";
import { HeroSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HeroSection";
import { IntroStrip } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/IntroStrip";
import { ProjectsSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ProjectsSection";
import { WhyChooseCta } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/WhyChooseCta";
import { ServicesAccordion } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ServicesAccordion";
import { HowWeLaunch } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HowWeLaunch";
import { CaseStudyStats } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/CaseStudyStats";
import { TestimonialsSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/TestimonialsSection";
import { TeamMission } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/TeamMission";
import { PricingSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/PricingSection";
import { FaqSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/FaqSection";
import { BlogSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/BlogSection";
import { ContactSection } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ContactSection";
import { NewsletterFooter } from "@/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/NewsletterFooter";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main className="bg-[#f5f5f5]">
        <HeroSection />
        <IntroStrip />
        <ProjectsSection />
        <WhyChooseCta />
        <ServicesAccordion />
        <HowWeLaunch />
        <CaseStudyStats />
        <TestimonialsSection />
        <TeamMission />
        <PricingSection />
        <FaqSection />
        <BlogSection />
        <ContactSection />
        <NewsletterFooter />
      </main>
    </>
  );
}
