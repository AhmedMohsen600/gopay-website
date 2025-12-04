"use client";

import Script from "next/script";

/**
 * Zoho Guided Conversations Chat Widget
 *
 * This component embeds the Zoho GC chat widget using the pre-configured
 * embed script URL. All configuration (styling, languages, flow settings)
 * is already included in the remote script.
 *
 * Script URL: https://gc.zohopublic.sa/org/150000596454/flows/126000000002163/embed/script
 */
export function ZohoChat() {
  return (
    <Script
      id="zoho-gc-chat"
      src="https://gc.zohopublic.sa/org/150000596454/flows/126000000002163/embed/script"
      strategy="lazyOnload"
    />
  );
}
