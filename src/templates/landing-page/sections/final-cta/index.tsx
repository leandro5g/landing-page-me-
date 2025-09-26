import { Button } from "@/components/button";
import { openWhatsApp } from "@/utils/openWhatsApp";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="hero-title mb-6">Pronto para dar o próximo passo?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Conecte-se com mentores, trace seu mapa de crescimento e comece a
          evoluir agora.
        </p>

        <Button onClick={openWhatsApp} size="lg" className="group cta-button">
          Começar meu crescimento
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
