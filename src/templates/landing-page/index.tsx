"use client";

import { Header } from "@/components/header";
import { HeroSection } from "./sections/hero";
import { ProblemSection } from "./sections/problem";
import { HowWorksSection } from "./sections/how-works";
import { BenefitsSection } from "./sections/benefits";
import { TargetAudienceSection } from "./sections/target-audience";
import { BetaOfferSection } from "./sections/beta-offer";
import { FAQSection } from "./sections/faq";
import { FinalCTASection } from "./sections/final-cta";
import { Footer } from "@/components/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowWorksSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <BetaOfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
