import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { render } from "preact";

import App from "@/App";
import "./index.css";

render(
  <>
    <Analytics />
    <SpeedInsights />
    <App />
  </>,
  document.getElementById("root") as HTMLElement,
);
