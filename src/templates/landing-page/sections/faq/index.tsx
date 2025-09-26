import { Card } from "@/components/card";

const questions = [
  {
    question: "Preciso assinar um plano?",
    answer: "Não, você paga apenas pelas sessões que quiser.",
  },
  {
    question: "Quanto custa?",
    answer: "A partir de R$50 por sessão.",
  },
  {
    question: "Recebo materiais de apoio?",
    answer: "Sim, cada mentor compartilha conteúdos práticos e objetivos.",
  },
  {
    question: "Funciona para transição de área?",
    answer:
      "Sim, você terá um roteiro e acompanhamento para mudar de carreira.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer: "Em média de 60 a 90 minutos.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-section-subtle)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center hero-title mb-16">Dúvidas frequentes</h2>

        <div className="space-y-6">
          {questions.map((item) => (
            <Card key={item.question} className="p-6 card-glow">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {item.question}
              </h3>
              <p className="text-white/80">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
