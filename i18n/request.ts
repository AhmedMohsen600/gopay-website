import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  // Load messages from namespace files in the locale directory
  // Each JSON file becomes a namespace (e.g., whoWeAre.json -> whoWeAre namespace)
  //
  // STRUCTURE:
  // messages/
  //   en/
  //     whoWeAre.json  -> useTranslations("whoWeAre")
  //     common.json     -> useTranslations("common")
  //     header.json     -> useTranslations("header")
  //   ar/
  //     whoWeAre.json
  //     common.json
  //     header.json
  //
  // TO ADD A NEW NAMESPACE:
  // 1. Create messages/en/{namespace}.json and messages/ar/{namespace}.json
  // 2. Add the namespace name to the namespaceFiles array below
  // 3. Remove that namespace from messages/en.json and messages/ar.json
  const messages: Record<string, Record<string, unknown>> = {};

  // List of namespace files to load from the locale directory
  // Add namespaces here as you split them from the flat file
  const namespaceFiles = [
    "whoWeAre",
    "features",
    "pricing",
    "contact",
    "news",
    "blog",
    "invoices",
    "terms",
    "dataProtection",
    // Add more namespaces here as you split them:
    // "common", "header", "home", "cta", "footer"
  ];

  // Load namespace files
  for (const namespace of namespaceFiles) {
    try {
      const namespaceModule = await import(
        `../messages/${locale}/${namespace}.json`
      );
      messages[namespace] = namespaceModule.default;
    } catch {
      // Namespace file doesn't exist yet, skip it (will fall back to flat file)
    }
  }

  // Fallback: Load from flat file if it exists (for backwards compatibility)
  // Note: Namespace files take precedence over flat file
  try {
    const flatFile = (await import(`../messages/${locale}.json`)).default;
    // Merge flat file into messages, but don't override existing namespaces
    Object.keys(flatFile).forEach((key) => {
      if (!messages[key]) {
        messages[key] = flatFile[key];
      }
    });
  } catch {
    // Flat file doesn't exist, that's okay if we have namespace files
  }

  return {
    locale,
    messages,
  };
});
