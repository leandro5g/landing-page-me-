"use client";

import { Card } from "@/components/card";

export function HowWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-section-blue)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center hero-title mb-16">Como funciona</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <div className="text-primary text-lg font-semibold mb-2">
                Passo 1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Escolha seu mentor
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Encontre profissionais experientes na sua área ou na área que
                deseja migrar.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <div className="text-secondary text-lg font-semibold mb-2">
                Passo 2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Agende sua sessão
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Valores a partir de R$50 por encontro — sem mensalidade.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <div className="text-accent text-lg font-semibold mb-2">
                Passo 3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Receba orientação prática
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Saia da sessão com metas claras e materiais de apoio para
                estudar.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border card-glow hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <div className="text-primary text-lg font-semibold mb-2">
                Passo 4
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Acompanhe sua evolução
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Cada sessão ajusta e fortalece seu mapa de crescimento.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
