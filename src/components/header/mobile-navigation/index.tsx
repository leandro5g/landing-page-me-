import { Button } from "@/components/button";
import { openWhatsApp } from "@/utils/openWhatsApp";

type MobileNavigationProps = {
  scrollToSection: (sectionId: string) => void;
};

const menuItems = [
  { label: "Como funciona", sectionId: "como-funciona" },
  { label: "Benefícios", sectionId: "beneficios" },
  { label: "Para quem é", sectionId: "para-quem" },
  { label: "FAQ", sectionId: "faq" },
];

export function MobileNavigation({ scrollToSection }: MobileNavigationProps) {

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50 bg-background/95 backdrop-blur-md">

        {menuItems.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => scrollToSection(item.sectionId)}
            className="block px-3 py-2 cursor-pointer text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
          >
            {item.label}
          </button>
        ))}

    
        <div className="pt-4 pb-2">
          <Button
            onClick={openWhatsApp}
            variant="default"
            size="sm"
            className="w-full cursor-pointer"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
