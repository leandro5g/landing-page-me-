import { Button } from "@/components/button";
import { trackEvent } from "@/lib/mixpanel";
import { AppEvent } from "@/lib/mixpanel/interfaces/events";
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
  const handleScrollToSection = (sectionId: string, label: string) => {
    trackEvent(AppEvent.BUTTON_CLICK, {
      cta_id: `header_${sectionId}_button`,
      cta_label: label,
      section: "header_mobile",
      metadata: {
        timestamp: new Date().toISOString(),
      },
    });

    scrollToSection(sectionId);
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50 bg-background/95 backdrop-blur-md">
        {menuItems.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => handleScrollToSection(item.sectionId, item.label)}
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
