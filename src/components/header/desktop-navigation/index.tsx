type DesktopNavigationProps = {
  scrollToSection: (sectionId: string) => void;
};

export function DesktopNavigation({ scrollToSection }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        <button
          onClick={() => scrollToSection("como-funciona")}
          className="text-foreground hover:text-primary transition-colors text-sm font-medium"
        >
          Como funciona
        </button>
        <button
          onClick={() => scrollToSection("beneficios")}
          className="text-foreground hover:text-primary transition-colors text-sm font-medium"
        >
          Benefícios
        </button>
        <button
          onClick={() => scrollToSection("para-quem")}
          className="text-foreground hover:text-primary transition-colors text-sm font-medium"
        >
          Para quem é
        </button>
        <button
          onClick={() => scrollToSection("faq")}
          className="text-foreground hover:text-primary transition-colors text-sm font-medium"
        >
          FAQ
        </button>
      </div>
    </nav>
  );
}
