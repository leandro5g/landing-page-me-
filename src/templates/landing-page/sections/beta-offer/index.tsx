import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";

export function BetaOfferSection() {
  const handleCTAClick = () => {};

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-section-teal)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="hero-title mb-6">Participe do lançamento Beta</h2>
        <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
          Durante o Beta, você paga apenas as sessões que agendar, sem
          assinatura ou mensalidade. Além disso, terá acesso à comunidade para
          trocar experiências e tirar dúvidas entre encontros.
        </p>

        <Button onClick={handleCTAClick} size="lg" className="group cta-button">
          Participar do Beta
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
