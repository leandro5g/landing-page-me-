"use client";

import { useCallback, useState } from "react";
import { Logo } from "../logo";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { MobileNavigation } from "./mobile-navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../button";
import { DesktopNavigation } from "./desktop-navigation";
import { openWhatsApp } from "@/utils/openWhatsApp";
import { trackEvent } from "@/lib/mixpanel";
import { AppEvent } from "@/lib/mixpanel/interfaces/events";

export function Header() {
  const { scrollToSection } = useScrollToSection();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId);
      setIsMenuOpen(false);
    },
    [scrollToSection]
  );

  const handleStartNowClick = () => {
    trackEvent(AppEvent.CTA_CLICK, {
      cta_id: "header_start_now_button",
      cta_label: "Começar agora",
      section: "header",
      metadata: {
        timestamp: new Date().toISOString(),
      }
    })
    openWhatsApp();
  }

  const handleOpenMenu = () => {
    trackEvent(AppEvent.BUTTON_CLICK, {
      cta_id: "header_menu_button",
      cta_label: isMenuOpen ? "Fechar menu" : "Abrir menu",
      section: "header_mobile",
      metadata: {
        timestamp: new Date().toISOString(),
      }
    })
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <DesktopNavigation scrollToSection={handleScrollToSection} />

          <div className="hidden md:block">
            <Button onClick={handleStartNowClick} variant="default" size="sm">
              Começar agora
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={handleOpenMenu}
              className="text-foreground hover:text-primary p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <MobileNavigation scrollToSection={handleScrollToSection} />
        )}
      </div>
    </header>
  );
}
