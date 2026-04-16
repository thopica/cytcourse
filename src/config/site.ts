// ============================================================
// SITE CONFIG — Edit this single file to create a new sales page
// ============================================================

export const siteConfig = {
  // ── GLOBAL ──────────────────────────────────────────────
  siteName: "Epic Paper Dragon",
  siteUrl: "https://yourdomain.com",
  favicon: "/favicon.ico",

  // ── DESIGN TOKENS ──────────────────────────────────────
  // Change these to instantly restyle the entire site
  theme: {
    colors: {
      primary: "#6B3FA0",        // Purple — headings, accents
      primaryLight: "#F3EEF8",   // Light lavender — section backgrounds
      cta: "#34C759",            // Green — buy buttons
      ctaHover: "#2DB84E",       // Green hover
      text: "#1A1A1A",           // Body text
      textLight: "#555555",      // Secondary text
      white: "#FFFFFF",
      black: "#000000",
      border: "#E5E5E5",
      guarantee: "#D4380D",      // Red/orange for guarantee badge
      star: "#FAAD14",           // Gold for stars/badges
      footerBg: "#1A1A1A",
      footerText: "#CCCCCC",
    },
    fonts: {
      heading: "'DM Serif Display', Georgia, serif",
      body: "'DM Sans', -apple-system, sans-serif",
    },
    sizes: {
      // Font sizes — all in rem for easy scaling
      heroTitle: "2.75rem",
      heroTitleMobile: "2rem",
      sectionTitle: "2rem",
      sectionTitleMobile: "1.5rem",
      subheading: "1.35rem",
      subheadingMobile: "1.15rem",
      body: "1.125rem",
      bodyMobile: "1rem",
      small: "0.9rem",
      price: "3rem",
      priceMobile: "2.5rem",
      priceOriginal: "1.5rem",
    },
    spacing: {
      sectionPadding: "5rem 1.5rem",
      sectionPaddingMobile: "3rem 1rem",
      maxWidth: "960px",
      borderRadius: "12px",
    },
  },

  // ── HEADER / NAV ───────────────────────────────────────
  header: {
    logo: "/images/logo.png", // or null to use siteName as text
    navLinks: [
      { label: "About", href: "#intro" },
      { label: "Modules", href: "#modules" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaButton: {
      label: "Get Access",
      href: "#pricing",
    },
  },

  // ── HERO / ABOVE THE FOLD ──────────────────────────────
  hero: {
    headline: "Build an Epic Dragon Scene Out of Paper",
    subheadline: "Even if you've never folded anything before",
    image: "/images/hero.jpg",
    imageAlt: "A woman smiling next to a paper dragon scene with volcano, castle and forest",
    ctaButton: {
      label: "Start Building Today",
      href: "#pricing",
    },
  },

  // ── INTRO / IMAGINE IF ─────────────────────────────────
  intro: {
    id: "intro",
    headline: "Imagine if you could...",
    bullets: [
      "...build a stunning scene that looks like it came straight out of a storybook — using only your hands and a few sheets of paper",
      "...make something totally unique without needing any special skills, tools, or artistic background",
      "...create something so cool your friends won't believe you made it yourself",
    ],
  },

  // ── CREATOR BIO ────────────────────────────────────────
  creator: {
    headline: "Let me introduce myself:",
    image: "/images/creator.jpg",
    imageAlt: "Michelle smiling at her craft table",
    paragraphs: [
      "Hi, I'm Michelle! I'm the one behind this dragon scene — and I promise, I didn't start out as some kind of paper-folding wizard.",
      "I used to look at projects like this and think, \"There's no way I could make that.\"",
      "But over time, I started experimenting. Just folding, shaping, layering — for fun. And what I discovered was: you don't need to be an artist to build something beautiful.",
    ],
  },

  // ── COURSE INTRO ───────────────────────────────────────
  courseIntro: {
    headline: "Introducing...",
    title: "The Epic Paper Dragon Course",
    image: "/images/course-devices.jpg",
    imageAlt: "Course displayed on laptop, tablet and phone",
  },

  // ── MODULES ────────────────────────────────────────────
  modules: {
    id: "modules",
    headline: "This is everything you are getting:",
    items: [
      {
        title: "Module 1: Materials & Tools",
        subtitle: "Everything you'll need to start building the scene.",
        bullets: [
          "Learn which types of paper actually help your folds — and which ones fight back",
          "The sneaky paper that works just as well as fancy craft sheets — and you probably already have it at home",
          "A surprising trick to make lava look molten using only cheap gold wrapping paper",
          "A ruler and glue stick will be your best friends. Here's exactly when to use them (and when to skip).",
          "How to turn even a small kitchen table into a fold-friendly workspace in 2 minutes",
        ],
        image: "/images/module1.jpg",
      },
      {
        title: "Module 2: Building the Base Scene",
        subtitle: "Lay the foundation for your entire dragon world.",
        bullets: [
          "Build a rock-solid base that holds every element in place",
          "Shape a volcano that actually looks rugged and real",
          "Create a lava flow that pops with color and depth",
        ],
        image: "/images/module2.jpg",
      },
      {
        title: "Module 3: Adding the Castle & Fantasy Backdrop",
        subtitle: "Turn your scene into a full fantasy world.",
        bullets: [
          "Fold a storybook castle with turrets, walls, and a gate",
          "Build a layered sky backdrop with clouds",
          "Add depth with a mountain range silhouette",
        ],
        image: "/images/module3.jpg",
      },
      {
        title: "Module 4: Crafting the Forest",
        subtitle: "Surround your scene with lush greenery.",
        bullets: [
          "Create 3D pine trees in multiple sizes",
          "Place them for maximum visual impact",
          "Add ground cover details that tie the scene together",
        ],
        image: "/images/module4.jpg",
      },
      {
        title: "Module 5: Building the Dragon",
        subtitle: "The grand finale — your showpiece.",
        bullets: [
          "Fold a fierce paper dragon step by step",
          "Shape wings, claws, and a tail with realistic curves",
          "Position your dragon for maximum dramatic effect",
        ],
        image: "/images/module5.jpg",
      },
    ],
  },

  // ── STACKING / WHAT YOU GET ────────────────────────────
  stacking: {
    headline: "This is everything you are getting:",
    image: "/images/stacking-devices.jpg",
    imageAlt: "Course on multiple devices",
    items: [
      "Lifetime Access to The Epic Paper Dragon Course",
      "Module 1: Materials & Tools",
      "Module 2: Building the Base Scene",
      "Module 3: Adding the Castle & Fantasy Backdrop",
      "Module 4: Crafting the Forest",
      "Module 5: Building the Dragon",
    ],
  },

  // ── BONUSES ────────────────────────────────────────────
  bonuses: {
    headline: "Bonuses When You Join Today",
    items: [
      {
        title: "Bonus 1: Wizard Companion",
        description:
          "Build a tiny wizard character that fits perfectly into your final scene — perched near the volcano, hiding behind trees, or watching over the castle.",
        bullets: [
          "See how to fold the wizard from a single sheet — complete with hat, robe, and staff",
          "Create a sturdy paper base that helps your wizard stand tall",
          "Try the optional \"cloak twist\" move — a secret step that makes his robes look like they're caught in a breeze",
        ],
        image: "/images/bonus-wizard.jpg",
      },
      {
        title: "Bonus 2: Element Guide",
        description:
          "A printable reference sheet with fold patterns for every scene element.",
        bullets: [
          "Quick-reference diagrams for all folds",
          "Paper selection cheatsheet",
          "Troubleshooting common mistakes",
        ],
        image: "/images/bonus-guide.jpg",
      },
    ],
  },

  // ── PRICING ────────────────────────────────────────────
  pricing: {
    id: "pricing",
    headline: "Let's Talk Numbers.",
    paragraphs: [
      "The regular course price is $97.",
      "But that's not the price you'll be paying today.",
      "The page you're seeing right now is a beta test. I'm not sure I can give my personal attention to more than 100 people who will buy this course.",
      "And I want you to get results...",
      "So I'll be giving you the course for a fraction of that price. Just for me to see if I can actually handle getting support tickets from 100 people. If I can then I'll just start selling it for $97.",
      "But right now — I'm selling it for",
    ],
    originalPrice: "$97",
    currentPrice: "$47",
    priceSubtext: "ONE-TIME PAYMENT. LIFETIME ACCESS FOREVER.",
    ctaButton: {
      label: "»  Unlock Lifetime Access Now",
    },
    trustBadges: ["Secure Payment", "PayPal", "Visa", "MasterCard", "Discover", "Amex"],
  },

  // ── GUARANTEE ──────────────────────────────────────────
  guarantee: {
    headline: "30-Day Money Back Guarantee",
    paragraphs: [
      "I want you to feel confident in your purchase.",
      "If the course isn't right for you, you can request a full refund within 30 days — no questions asked.",
      "Your satisfaction is what matters to me, and I'm here to make sure you're supported every step of the way.",
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: {
    id: "faq",
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "How long do I have access to the course?",
        answer:
          "You get lifetime access. No expiration date, no deadlines. You can return to the course anytime — next week, next year, or whenever inspiration strikes.",
      },
      {
        question: "Is the $47 a one-time payment?",
        answer:
          "Yes, it's a one-time purchase. No subscriptions. No hidden fees. No upsells. You get everything: the full course, all bonuses, lifetime access. All for $47.",
      },
      {
        question: "Is it safe to pay online?",
        answer:
          "Yes, your payment is 100% secure. All transactions are processed using encrypted, industry-standard payment systems (like Stripe or PayPal), so your information stays protected. I never store your payment details, and you'll receive a confirmation email right after purchase.",
      },
      {
        question: "How does the money-back guarantee work?",
        answer:
          "You're protected by a 30-day, no-questions-asked guarantee. If the course doesn't feel like a good fit — for any reason — just email within 30 days and I'll give you a full refund. No hassle, no awkwardness.",
      },
      {
        question: "What happens after I join?",
        answer:
          "As soon as you check out, you'll get an email with your login and instant access to the full course, all five step-by-step modules, and all bonus materials. You can start folding your first tree or mountain within minutes.",
      },
    ],
  },

  // ── FOOTER ─────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Epic Paper Dragon. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Impressum", href: "/impressum" },
      { label: "Contact", href: "mailto:hello@yourdomain.com" },
    ],
  },

  // ── STRIPE ─────────────────────────────────────────────
  stripe: {
    // Price in cents
    priceAmount: 4700,
    currency: "usd",
    productName: "The Epic Paper Dragon Course",
    successUrl: "/success",
    cancelUrl: "/",
  },
};

export type SiteConfig = typeof siteConfig;
