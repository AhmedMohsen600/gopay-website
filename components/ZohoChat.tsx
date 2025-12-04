"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Zoho Guided Conversations Chat Widget
 *
 * To change colors, edit the --zoho-chat-primary variable in globals.css
 */
export function ZohoChat() {
  useEffect(() => {
    // Get the custom color from CSS variable
    const primaryColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--zoho-chat-primary")
        .trim() || "#282d4e";

    // CSS variables to override
    const cssVarsToOverride = [
      "--gc_widget_bg",
      "--gc_chat_primary",
      "--gc_widget_header_logo_bg",
      "--gc_chat_link_text",
      "--gc_widget_frame_border",
      "--gc_skipbtn_bg",
      "--gc_chat_primary_bg",
      "--gc_widget_primary_bg",
    ];

    // Function to override styles on an element
    const overrideElementStyles = (el: HTMLElement) => {
      const style = el.getAttribute("style") || "";
      // Check if element has any of our target CSS variables
      if (cssVarsToOverride.some((v) => style.includes(v))) {
        cssVarsToOverride.forEach((varName) => {
          el.style.setProperty(varName, primaryColor, "important");
        });
      }
    };

    // Function to scan and override all Zoho elements
    const overrideAllZohoColors = () => {
      // Target the main Zoho container and ALL its descendants
      const zohoContainer = document.getElementById("zohogc-helper-main");
      if (zohoContainer) {
        overrideElementStyles(zohoContainer);
        // Get ALL descendant elements
        zohoContainer.querySelectorAll("*").forEach((el) => {
          overrideElementStyles(el as HTMLElement);
        });
      }

      // Also target any elements with gc class prefix
      document
        .querySelectorAll('[class*="gcc"], [data-selector-id="container"]')
        .forEach((el) => {
          overrideElementStyles(el as HTMLElement);
        });
    };

    // Observe for changes and new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Handle added nodes
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            overrideElementStyles(node);
            node.querySelectorAll("*").forEach((el) => {
              overrideElementStyles(el as HTMLElement);
            });
          }
        });
        // Handle attribute changes (style changes)
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          overrideElementStyles(mutation.target as HTMLElement);
        }
      });
    });

    // Start observing with attribute monitoring
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    // Initial runs with delays to catch async widget loading
    setTimeout(overrideAllZohoColors, 500);
    setTimeout(overrideAllZohoColors, 1000);
    setTimeout(overrideAllZohoColors, 2000);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Script
      id="zoho-gc-chat"
      src="https://gc.zohopublic.sa/org/150000596454/flows/126000000002163/embed/script"
      strategy="afterInteractive"
    />
  );
}
