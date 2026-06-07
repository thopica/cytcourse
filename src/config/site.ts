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
      { label: "About", href: "/#intro" },
      { label: "Modules", href: "/#modules" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
      { label: "Tool", href: "/tool" },
    ],
    ctaButton: {
      label: "Start the Course",
      href: "#pricing",
    },
  },

  // ── HERO / ABOVE THE FOLD ──────────────────────────────
  hero: {
    headline:
      "Turn Your Dog's Photo Into a Frame-Worthy Blue Portrait — No Art Skills Needed",
    subheadline:
      "Step-by-step video course. Print at home with sunlight and a few simple materials. Includes a free tool that prepares your photo in 60 seconds.",
    image: "/images/hero.jpg",
    imageAlt: "Finished cyanotype dog portrait made with sunlight",
    imageCaption: "Made from a phone photo and sunlight — no art background required.",
  },

  // ── INTRO / IMAGINE IF ─────────────────────────────────
  intro: {
    id: "intro",
    headline: "Want a portrait of your dog that actually means something?",
    bullets: [
      "Hang it on your wall — a deep-blue portrait that looks like it belongs in a gallery, made by you",
      "Use any phone photo — the free converter tool handles the technical prep in under a minute",
      "Follow 5 short modules — from materials list to framed print, at your own pace",
    ],
  },

  // ── PROBLEM DIG-IN ──────────────────────────────────────
  problemDigIn: {
    id: "problem-dig-in",
    headline: "Why anyone can create a stunning dog portrait (yes, even on the first try):",
    paragraphs: [
      'You saw a blue dog portrait and thought: "That looks incredible — but I could never make that."',
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
      "Hi, I'm Thomas. I'm not a photographer or an artist — I'm a dog person who accidentally discovered you can print photos with sunlight.",
      "One day I stumbled across something called Cyanotype. An art technique from the 1800s where you literally print images using sunlight.",
      "So I tried it. Just mixing, coating, exposing out of pure curiosity.",
      "And the moment I rinsed my first print and watched that deep blue portrait appear right in front of my eyes I was completely hooked.",
      "That feeling of seeing something you created with your own hands emerge from a sheet of paper is unlike anything else.",
      "And what I discovered was: you don't need any artistic skill to create something that looks genuinely stunning.",
      "That's why this piece came to life. A way for dog lovers to capture everything they feel about their dog in one stunning portrait.",
      "If you've ever wanted to slow down and make something beautiful with your own hands, you've found the right spot.",
    ],
  },

  // ── HOW IT WORKS ───────────────────────────────────────
  howItWorks: {
    id: "how-it-works",
    headline: "How it works — 3 steps",
    steps: [
      {
        title: "Pick a photo and prep it with the free tool",
        outcome: "Print-ready negative in 60 seconds.",
      },
      {
        title: "Coat paper and expose in sunlight",
        outcome: "Your dog's image transfers to paper.",
      },
      {
        title: "Rinse, dry, and frame",
        outcome: "A finished portrait on your wall.",
      },
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
    headline: "What's inside the course",
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
    headline: "Your complete toolkit:",
    image: "/images/stacking-devices.jpg",
    imageAlt: "Everything included in the course",
    items: [
      { bold: "Lifetime Access", text: " to The Sunlight Dog Portrait Course" },
      { bold: "Module 1:", text: " Materials & Tools" },
      { bold: "Module 2:", text: " Choose & Prepare Your Photo" },
      { bold: "Module 3:", text: " Coat & Dry" },
      { bold: "Module 4:", text: " Print With Light" },
      { bold: "Module 5:", text: " Reveal, Dry & Frame" },
      { bold: "Bonus 1:", text: " The Free Photo Converter Tool" },
      { bold: "Bonus 2:", text: " The Perfect Photo Guide" },
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
        image: "/images/bonus-converter.png",
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
        image: "/images/bonus-guide.png",
      },
    ],
  },

  // ── PRICING ────────────────────────────────────────────
  pricing: {
    id: "pricing",
    headline: "One payment. Lifetime access. Everything included.",
    paragraphs: [
      "The full course price is $97.",
      "Your price today is $47 — launch pricing while I personally support every student.",
      "One-time payment. No subscription. No hidden fees. No upsells.",
      "You get all 5 modules, both bonuses, and the free photo converter tool.",
      "You're covered by a 30-day money-back guarantee.",
    ],
    originalPrice: "$97",
    currentPrice: "$47",
    priceSubtext: "ONE-TIME PAYMENT. LIFETIME ACCESS FOREVER.",
    ctaButton: {
      label: "Get Instant Access — $47",
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
        question: "How much do the materials cost?",
        answer:
          "Most of what you need costs under $30 in total, and a lot of it you may already have at home. Module 1 gives you the full shopping list with links — everything fits in a shoebox.",
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
          "As soon as you check out, you'll get an email with your login and instant access to the full course, all five step-by-step modules, and all bonus materials. You can start Module 1 and gather your materials within minutes.",
      },
      {
        question: "I've never done anything like this. Is this really for beginners?",
        answer:
          "Yes. Module 1 is a complete materials list. The free photo tool handles the hardest technical step. You just follow the videos one module at a time.",
      },
    ],
  },

  // ── FINAL CTA ──────────────────────────────────────────
  finalCta: {
    headline: "Ready to make your dog's portrait?",
    subheadline:
      "Get instant access to all 5 modules, both bonuses, and the free photo tool.",
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
