import { AppEvent } from "./events";

export interface EventParamsMap {
  [AppEvent.CTA_CLICK]: {
    cta_id: string;
    cta_label?: string;
    section?: string;
    metadata?: Record<string, unknown>;
  };
  [AppEvent.BUTTON_CLICK]: {
    cta_id: string;
    cta_label?: string;
    section?: string;
    metadata?: Record<string, unknown>;
  };
}
