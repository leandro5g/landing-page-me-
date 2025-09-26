"use client";

import { Card } from "@/components/card";
import { ArrowRight, Star, TrendingUp } from "lucide-react";

const targets = [
  {
    title: "Júnior rumo a Pleno",
    description: "Acelere seu crescimento com clareza sobre gaps e trilhas.",
    icon: TrendingUp,
  },
  {
    title: "Pleno buscando promoção",
    description: "Desenvolva visão técnica, estratégica e liderança.",
    icon: Star,
  },
  {
    title: "Profissionais em transição",
    description: "Monte seu roteiro para mudar de área com segurança.",
    icon: ArrowRight,
  },
];

export function TargetAudienceSection() {
  return (
    <section
      id="para-quem"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center hero-title mb-16">Para quem é</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target) => (
            <Card key={target.title} className="p-8 card-glow text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {<target.icon className="h-10 w-10 text-primary-foreground" />}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {target.title}
              </h3>
              <p className="text-white/80">{target.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
