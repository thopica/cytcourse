// ============================================================
// SITE CONFIG — Edit this single file to create a new sales page
// ============================================================

export const siteConfig = {
  // ── GLOBAL ──────────────────────────────────────────────
  siteName: "CYT Dog Portrait",
  siteUrl: "https://cytcourse.com",
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
    headline: "Turn a Photo of Your Dog Into a Stunning piece of Art",
    subheadline: "Using nothing but sunlight and a few simple materials",
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
      "...create a stunning portrait of your dog that looks like it came straight out of an art gallery using only sunlight and a few simple materials",
      "...make something totally unique without needing any artistic skills, a camera, or a creative background",
      "...create something so beautiful your friends won't believe you made it yourself",
    ],
  },

  // ── PROBLEM DIG-IN ──────────────────────────────────────
  problemDigIn: {
    id: "problem-dig-in",
    headline: "Why anyone can create a stunning dog portrait (yes, even on the first try):",
    
      
    paragraphs: [
      "Let's be honest. At first glance, a portrait like this might look intimidating. Too artistic, too technical for a beginner. But in fact...",
      "It's surprisingly simple. Cyanotype is an art form from the 1800s that uses sunlight to create deep blue images on paper, fabric, or almost any surface.",
      "The materials are easy. Everything you need is on Amazon or in any craft store. Most of it you probably already have at home.",
      "A free tool makes your photo print-ready in under a minute.",
      "The process is always the same. Learn it once, repeat it with any photo, any size, any time.",
    ],
    closingLines: [
      "You don't need to be artistic.",
      "You don't need to be technical.",
      "You just need to start.",
    ],
  },

  // ── CREATOR BIO ────────────────────────────────────────
  creator: {
    headline: "Let me introduce myself:",
    image: "/images/creator.jpg",
    imageAlt: "Thomas smiling at his dog portrait",
    paragraphs: [
      "Hi, I'm Thomas! I'm the one behind this dog portrait and no, I did not start out as a photographer or an artist of any kind.",
      "One day I stumbled across something called Cyanotype. An art technique from the 1800s where you literally print images using sunlight.",
      "So I tried it. Just mixing, coating, exposing out of pure curiosity.",
      "And the moment I rinsed my first print and watched that deep blue portrait appear right in front of my eyes I was completely hooked.",
      "That feeling of seeing something you created with your own hands emerge from a sheet of paper is unlike anything else.",
      "And what I discovered was: you don't need any artistic skill to create something that looks genuinely stunning.",
      "That's why this piece came to life. A way for dog lovers to capture everything they feel about their dog in one stunning portrait.",
      "If you've ever wanted to slow down and make something beautiful with your own hands, you've found the right spot.",
    ],
  },

  // ── COURSE INTRO ───────────────────────────────────────
  courseIntro: {
    headline: "Introducing...",
    title: "The Sunlight Dog Portrait Course",
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
        subtitle: "You probably already have half of this at home.",
        bullets: [
          "The complete materials list. Everything fits in a shoebox (yes, really)",
          "The one specialist item you need to order online and exactly where to get it",
          "The foam brush trick that makes coating your paper effortless",
          "How to get your transparency printed even without a printer at home",
          "How to turn any kitchen table into your own printing studio in under 5 minutes",
        ],
        image: "/images/module1.jpg",
      },
      {
        title: "Module 2: Choose & Prepare Your Photo",
        subtitle: "The right photo makes all the difference. Here is how to pick a great one.",
        bullets: [
          "The three things that make a dog photo work beautifully as a cyanotype portrait",
          "How to take a new photo of your dog today that is perfect for printing",
          "The free online tool that converts your photo into a print-ready negative in under a minute",
          "How to get the perfect size and proportions for your paper",
          "A quick checklist to confirm your negative is ready before you print",
        ],
        image: "/images/module2.jpg",
      },
      {
        title: "Module 3: Coat & Dry",
        subtitle: "This is where your paper comes to life. It is easier than it sounds.",
        bullets: [
          "How to mix your cyanotype solution correctly in under 2 minutes",
          "The simple brushing technique that gives you an even coat every single time",
          "How to dry your coated paper properly so it is ready to print",
          "The one thing to avoid while your paper is drying (it is easier than you think)",
          "How to know your paper is perfectly ready before you move to the next step",
        ],
        image: "/images/module3.jpg",
      },
      {
        title: "Module 4: Print With Light",
        subtitle: "This is the moment the magic happens. All you need is sunlight.",
        bullets: [
          "How to set up your paper and negative for a sharp, detailed exposure",
          "The simple trick to know exactly how long to leave it in the sun",
          "What your print should look like after exposure so you know it worked",
          "How to read the light on cloudy days and still get a beautiful result",
          "The most satisfying part of the whole process. You will want to do this again immediately",
        ],
        image: "/images/module4.jpg",
      },
      {
        title: "Module 5: Reveal, Dry & Frame",
        subtitle: "The portrait of your dog appears right in front of your eyes. Here is how to finish it beautifully.",
        bullets: [
          "How to rinse your print and watch the portrait reveal itself in real time",
          "The drying technique that keeps your paper flat and frame-ready",
          "How to pick the right frame to make your portrait look like a piece of gallery art",
          "A simple finishing trick that deepens the blue and sharpens the final result",
          "How to photograph your finished portrait so it looks stunning on social media",
        ],
        image: "/images/module5.jpg",
      },
    ],
  },

  // ── STACKING / WHAT YOU GET ────────────────────────────
  stacking: {
    id: "stacking",
    headline: "This is everything you are getting:",
    image: "/images/stacking-devices.jpg",
    imageAlt: "Everything included in the course",
    items: [
      "Lifetime Access to The Sunlight Dog Portrait Course",
      "Module 1: Materials & Tools",
      "Module 2: Choose & Prepare Your Photo",
      "Module 3: Coat & Dry",
      "Module 4: Print With Light",
      "Module 5: Reveal, Dry & Frame",
      "Bonus: The Free Dog Portrait Converter",
    ],
  },

  // ── BONUSES ────────────────────────────────────────────
  bonuses: {
    headline: "Bonuses When You Join Today",
    items: [
      {
        title: "Bonus 1: The Free Photo Converter Tool",
        description:
          "Skip the most technical part of the entire process. Upload any photo of your dog and get back a print-ready image in under a minute.",
        bullets: [
          "Upload any photo straight from your phone or laptop",
          "Watch your photo transform into a perfectly prepared print-ready version automatically",
          "Download instantly and send straight to your printer or local print shop",
        ],
        image: "/images/bonus-wizard.jpg",
      },
      {
        title: "Bonus 2: The Perfect Photo Guide",
        description:
          "A short PDF guide showing exactly how to pick or take the perfect photo of your dog for a stunning print every time.",
        bullets: [
          "The 3 things that make a dog photo work beautifully as a portrait",
          "How to take a new photo of your dog at home in under 5 minutes",
          "Simple lighting tricks that turn an ordinary photo into a perfect one",
          "What to look for in your existing photos so you know which ones will work",
          "The one thing to avoid that most beginners miss",
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
      "$47.00",
      "It’s a one-time payment.",
      "Access to the course - forever.",
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
    copyright: "© 2026 CYT Dog Portrait. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Impressum", href: "/impressum" },
    ],
  },

  // ── STRIPE ─────────────────────────────────────────────
  stripe: {
    // Price in cents
    priceAmount: 4700,
    currency: "usd",
    productName: "The Sunlight Dog Portrait Course",
    successUrl: "/success",
    cancelUrl: "/",
  },
};

export type SiteConfig = typeof siteConfig;
