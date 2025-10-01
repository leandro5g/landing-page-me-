"use client";

import { initMixpanel } from "@/lib/mixpanel";
import { LandingPage } from "@/templates/landing-page";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initMixpanel();
  }, []);

  return <LandingPage />;
}
