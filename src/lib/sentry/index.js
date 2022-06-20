/*global process*/
/*eslint no-undef: "error"*/
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import { CaptureConsole } from "@sentry/integrations";
import { useEffect } from "react";

const SentrySetup = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      if (typeof document !== "undefined") {
        // Sentry
        Sentry.init({
          dsn: process.env.SENTRY_ID,
          release: "chehreh-plus@" + process.env.CHEHREH_PLUS_VERSION,
          autoSessionTracking: true,
          integrations: [
            new Integrations.BrowserTracing(),
            new CaptureConsole({
              levels: ["error"],
            }),
          ],
          sampleRate: 1,
          tracesSampleRate: 0.1,
          environment: "production",
        });
      }
    }
  }, []);
  return (
    <>
      <div id="sentry-setup"></div>
    </>
  );
};

export default SentrySetup;
