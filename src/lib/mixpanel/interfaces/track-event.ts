import { AppEvent } from "./events";
import { EventParamsMap } from "./events-params-map";

export type ITrackEvent = <E extends AppEvent>(
  eventName: E,
  eventParams: EventParamsMap[E]
) => void;
