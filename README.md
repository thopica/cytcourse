# Sales Page Template

A reusable one-page sales page with Stripe Checkout, built with Next.js 14.
Edit `src/config/site.ts` to create a new sales page in minutes.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local

# 3. Add your Stripe secret key to .env.local
#    Get it from https://dashboard.stripe.com/apikeys

# 4. Run locally
npm run dev
```

## How to Customize

### Change ALL content, pricing, colors
Edit **one file**: `src/config/site.ts`

- `theme.colors` — change primary, CTA, text colors globally
- `theme.fonts` — swap font families (update the Google Fonts import in `globals.css` too)
- `theme.sizes` — adjust all font sizes (mobile defaults, desktop overrides via CSS)
- `hero` / `intro` / `modules` / `pricing` / `faq` — all copy lives here
- `stripe.priceAmount` — price in cents (4700 = $47)

### Add real images
1. Put images in `public/images/`
2. Update the image paths in `site.ts`
3. Replace `<PlaceholderImage>` with `<img>` in each component

### Create a new sales page
1. Copy this entire project
2. Edit `src/config/site.ts` with new content
3. Replace images in `public/images/`
4. Deploy to Vercel

## Deploy to Vercel

```bash
# Push to GitHub, then import in Vercel
# Or use the Vercel CLI:
npx vercel
```

**Environment variables to set in Vercel Dashboard:**
- `STRIPE_SECRET_KEY` — your live Stripe secret key (`sk_live_...`)
- `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://yourdomain.com`)

## Project Structure

```
src/
├── config/
│   └── site.ts          ← EDIT THIS to change everything
├── components/
│   ├── Header.tsx       ← Sticky nav with mobile burger
│   ├── Hero.tsx         ← Above the fold
│   ├── Intro.tsx        ← "Imagine if you could..."
│   ├── Creator.tsx      ← Creator bio
│   ├── CourseIntro.tsx   ← "Introducing..." section
│   ├── Modules.tsx      ← Course modules list
│   ├── Bonuses.tsx      ← Bonus items
│   ├── Pricing.tsx      ← Price card + Stripe checkout button
│   ├── Guarantee.tsx    ← 30-day guarantee
│   ├── Faq.tsx          ← Accordion FAQ
│   ├── FinalCta.tsx     ← Bottom CTA
│   ├── Footer.tsx       ← Footer with policy links
│   └── PlaceholderImage ← Swap with real <img> later
├── styles/
│   └── globals.css      ← Design tokens (CSS variables)
└── app/
    ├── layout.tsx
    ├── page.tsx          ← Assembles all sections
    ├── success/page.tsx  ← Post-purchase thank you
    └── api/checkout/route.ts ← Stripe Checkout Session API
```

## Stripe Setup Checklist

1. Create a Stripe account at stripe.com
2. Get your API keys from the Dashboard
3. Use `sk_test_...` for development, `sk_live_...` for production
4. Set `STRIPE_SECRET_KEY` in `.env.local` (local) and Vercel (production)
5. Set `NEXT_PUBLIC_SITE_URL` to your domain
6. Test a purchase with Stripe test card: `4242 4242 4242 4242`
