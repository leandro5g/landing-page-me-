import { trackEvent } from "@/lib/mixpanel";
import { AppEvent } from "@/lib/mixpanel/interfaces/events";

type DesktopNavigationProps = {
  scrollToSection: (sectionId: string) => void;
};

const menuItems = [
  { label: "Como funciona", sectionId: "como-funciona" },
  { label: "Benefícios", sectionId: "beneficios" },
  { label: "Para quem é", sectionId: "para-quem" },
  { label: "FAQ", sectionId: "faq" },
];

export function DesktopNavigation({ scrollToSection }: DesktopNavigationProps) {
  const handleScrollToSection = (sectionId: string, label: string) => {
    trackEvent(AppEvent.BUTTON_CLICK, {
      cta_id: `header_${sectionId}_button`,
      cta_label: label,
      section: "header_desktop",
      metadata: {
        timestamp: new Date().toISOString(),
      },
    });

    scrollToSection(sectionId);
  };

  return (
    <nav className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => handleScrollToSection(item.sectionId, item.label)}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
