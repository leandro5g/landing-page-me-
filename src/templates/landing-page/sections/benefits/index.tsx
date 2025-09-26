"use client";

import { Card } from "@/components/card";
import { BookOpen, CheckCircle, Shield, Zap } from "lucide-react";

const benefits = [
  {
    title: "Direção clara",
    description:
      "Saiba onde está e qual o próximo passo no seu crescimento profissional.",
    icon: CheckCircle,
  },
  {
    title: "Plano de ação prático",
    description:
      "Metas específicas que geram resultado real, não apenas teoria abstrata.",
    icon: Zap,
  },
  {
    title: "Materiais de estudo incluídos",
    description:
      "Conteúdos cuidadosamente selecionados para otimizar seu tempo de estudo.",
    icon: BookOpen,
  },
  {
    title: "Apoio contínuo",
    description: "Retorne sempre que precisar ajustar sua rota de crescimento.",
    icon: Shield,
  },
];

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-section-dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center hero-title mb-16">O que você recebe</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefits, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/80 border-border card-glow hover:scale-105 hover:bg-card/90 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-4 translate-x-4"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefits.icon && (
                    <benefits.icon className="h-10 w-10 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefits.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {benefits.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
