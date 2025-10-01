import mixpanel from 'mixpanel-browser';
import { ITrackEvent } from './interfaces/track-event';
 
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
 
export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token is missing! Check your .env file.');
    return;
  }
 
  mixpanel.init(MIXPANEL_TOKEN, { autocapture: true });
}

export const trackEvent: ITrackEvent = (eventName, eventParams) => {
  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }
  mixpanel.track(eventName, eventParams);
};