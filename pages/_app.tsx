import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";

import { posthog } from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { Crisp } from "crisp-sdk-web";

if (
  !window.location.host.includes("127.0.0.1") &&
  !window.location.host.includes("localhost")
) {
  posthog.init("phc_dvLAOScCPWS1kXSnJlvSHNnfXDvarKIsSN7Q32yt20s", {
    api_host: "https://eu.posthog.com",
  });

  Crisp.configure("ad7ab300-bd5d-410f-86eb-136d1d846a73", {
    autoload: true,
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <PostHogProvider instance={posthog}>
        <AuthProvider>
          <Layout
            announcementProps={announcement}
            headerProps={header}
            footerProps={footer}
          >
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </PostHogProvider>
    </SaasProvider>
  );
}

export default MyApp;
