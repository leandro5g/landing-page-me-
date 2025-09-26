"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { openWhatsApp } from "@/utils/openWhatsApp";
import { ArrowRight } from "lucide-react";

const badges = [
  "Sessões a partir de R$50",
  "Materiais incluídos",
  "Sem mensalidade",
];

export function HeroSection() {

  return (
    <section
      id="hero"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 bg-black"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title mb-6 leading-tight">
            Destrave sua carreira com apoio de mentores experientes
          </h1>

          <p className="hero-subtitle text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Se você está travado ou quer traçar um mapa de crescimento pessoal e
            profissional, aqui você encontra sessões acessíveis, materiais de
            estudo e planos de ação claros para evoluir com confiança.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {badges.map((text, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                ✔ {text}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="group cta-button"
            >
              Quero começar meu crescimento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
