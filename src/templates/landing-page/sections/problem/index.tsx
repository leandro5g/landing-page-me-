"use client";

export function ProblemSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-section-dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="hero-title mb-12 text-4xl md:text-5xl font-bold">
            Estudar sozinho não é suficiente
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card/50 p-8 rounded-2xl border border-border/20 backdrop-blur-sm">
              <p className="text-xl text-white leading-relaxed font-medium">
                Cursos soltos, conteúdos sem ordem e a dúvida constante sobre o
                que realmente importa. Esse é o cenário de quem tenta crescer
                sem acompanhamento.
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <p className="text-xl text-white font-semibold leading-relaxed">
                Na Me+, você não precisa adivinhar o caminho. Com a orientação
                de quem já chegou lá, você avança mais rápido e com clareza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
