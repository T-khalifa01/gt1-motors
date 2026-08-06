/**
 * site.config.js
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for INFRASTRUCTURE VALUES — identity,
 * contact numbers, socials, brand tokens, SEO, analytics/monitoring.
 *
 * This file does NOT control page content or section layout.
 * Every dealership site is hand-built: real JSX, real custom
 * sections, written to fit that dealership's design and tone.
 * The `components/sections` library is a reference/foundation —
 * a starting point you pick from and modify per project, not a
 * runtime switch driven by config.
 *
 * What belongs here: anything that's a genuine cross-cutting value
 * used by multiple parts of the app (a phone number used by both
 * the CTA button and the footer, a color used across several
 * components, an analytics ID). What doesn't belong here: headline
 * copy, about text, layout choices — that lives directly in each
 * dealership's JSX.
 * ------------------------------------------------------------------
 */

const siteConfig = {
  // ==================================================================
  // 1. DEALERSHIP IDENTITY
  // ==================================================================
  dealership: {
    name: "GT1 Motors", // Public-facing display name
    legalName: "GT1 Motors", // Footer copyright line
    slug: "gt-1-motors", // URLs, file naming, analytics labels
  },

  // ==================================================================
  // 2. CONTACT — WhatsApp numbers are intentionally split.
  //    ctaNumber   -> hero CTA + floating WhatsApp button
  //                   (general "I'm interested" enquiries)
  //    formNumber  -> contact/enquiry form ONLY
  //                   (dealership's "sales desk" line; can equal
  //                   ctaNumber if they only have one line)
  // ==================================================================
  contact: {
    whatsapp: {
      ctaNumber: "201000000000", // Full international format, no + or spaces
      formNumber: "201000000000",
      ctaDefaultMessage: "Hi, I'd like to enquire about your vehicles.",
    },
    phone: "+20 100 000 0000", // Optional, omit from UI if not provided
    email: "info@dealership.com", // Optional, omit from UI if not provided
    address: {
      line1: "Sheikh Zayed Central axis", //
      line2: "October,Giza Governorate",
      country: "Egypt",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.720032003643!2d31.002221156164634!3d30.016194388216128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b00ccb34af9%3A0xa61dd018f20c205d!2sGT1%20MOTORS!5e0!3m2!1sen!2seg!4v1785940089286!5m2!1sen!2seg", // Google Maps iframe src
      lat: 30.01620084022301,
      lng: 31.004386551585814
    },
    address: {
      line1: "fifth settlment, Rahim Square", //
      line2: "New Cairo 1, Cairo Governorate",
      country: "Egypt",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.046464816783!2d31.461142199999998!3d30.035524799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458230ed4c3683f%3A0xa93b30e10e2a5025!2sGT1%20MOTORS!5e0!3m2!1sen!2seg!4v1785940000321!5m2!1sen!2seg", // Google Maps iframe src
      lat: 30.035752358594014,
      lng: 31.4615284380886
    },
  },

  // ==================================================================
  // 3. SOCIAL LINKS — only render icons/links for non-empty values
  // ==================================================================
  social: {
    instagram: "gt1motors",
    tiktok: "",
    facebook: "GT1 Motors",
    whatsappChannel: "",
  },

  // ==================================================================
  // 4. BRAND TOKENS — colors used as a consistent foundation across
  //    custom components. Individual components can still deviate —
  //    these are defaults, not constraints.
  //
  //    Fonts are NOT here. Font family/weight is a design decision,
  //    hand-set per project in app/layout.jsx via next/font/google or
  //    next/font/local — see that file's top comment block. This
  //    keeps fonts self-hosted, correctly weighted for whichever
  //    specific font is chosen, and unconstrained by a generic
  //    two-slot config system.
  // ==================================================================
  brand: {
    colors: {
      primary: "#0B0A09",         // ink
      secondary: "#242A33",       // dark-slate
      accent: "#B3182B",          // brand-red (4.5+ contrast against white)
      background: "#0B0A09",      // ink
      surface: "#38424D",         // mid-slate
      textPrimary: "#F7F4EE",     // off-white
      textMuted: "rgba(247,244,238,0.55)", // grey
    },
    logo: {
      wordmarkText: "GT1 MOTORS", // If no logo image, render as styled text using brand fonts
      imageSrc: "/gt1-logo.png", // Path in /public, takes priority over wordmarkText if set
      faviconSrc: "/favicon.ico",
    },
  },

  // ==================================================================
  // 5. SEO / METADATA — feeds the Next.js Metadata API, OG tags,
  //    robots.js and sitemap.js
  // ==================================================================
  seo: {
    title: "GT1 Motors",
    description: "Short SEO meta description, 150-160 characters ideally.",
    keywords: ["car Imports", "premium dealership zayed", "exotic cars", "performance cars"],
    siteUrl: "https://www.dealership-domain.com", // No trailing slash
    ogImage: "/og-image.jpg", // Path in /public, 1200x630 recommended
    locale: "en_EG",
    robots: {
      index: true,
      follow: true,
    },
  },

  // ==================================================================
  // 6. LANGUAGE — bilingual EN/AR, English-dominant
  // ==================================================================
  i18n: {
    defaultLocale: "en",
    supportedLocales: ["en", "ar"],
    dir: "ltr",
  },

  // ==================================================================
  // 7. SERVICE MODEL — Model 1 = presence + trust + WhatsApp CTA only
  //                     Model 2 = adds inventory/pricing functionality
  //    Purely informational flag (e.g. for internal notes or
  //    conditionally rendering an Inventory section import) — does
  //    NOT drive a generic component the way earlier drafts assumed.
  // ==================================================================
  serviceModel: "model-1", // "model-1" | "model-2"

  // ==================================================================
  // 8. LEAD FORM MESSAGE TEMPLATE — the WhatsApp message format used
  //    when a form submission redirects to the dealership's sales
  //    number. Functional string consumed by lib/whatsapp.js, not
  //    page content.
  //    NOTE: The Google Sheets endpoint itself is NOT here — it's a
  //    per-deploy value that lives in .env.local as
  //    GOOGLE_SHEETS_ENDPOINT (see .env.example).
  // ==================================================================
  leadCapture: {
    // Dropdown options for the "Interested In" field on the lead
    // form (components/sections/Contact.jsx). REAL per-dealership
    // list — edit to match what this specific dealership actually
    // offers. Order here is the order shown in the dropdown. Kept
    // generic in lib/validators.js (any non-empty string passes
    // server-side validation) — the real constraint is that the
    // dropdown itself only offers these options, so a visitor can't
    // submit something outside this list through the real form.
    services: [
      "Buying a vehicle",
      "Trade-in / Selling",
      "Financing",
      "Service & Maintenance",
      "General Inquiry",
    ],

    formEnquiryMessageTemplate:
      "New website enquiry:\nName: {name}\nPhone: {phone}\nMessage: {message}",
  },

  // ==================================================================
  // 9. ANALYTICS & MONITORING
  // ==================================================================
  analytics: {
    ga4MeasurementId: "", // e.g. "G-XXXXXXXXXX", leave empty to disable GA4
  },

  monitoring: {
    sentryDsn: "", // Leave empty to disable Sentry entirely
    sentryEnvironment: "production",
  },
};

export default siteConfig;