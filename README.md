# AI Video Blueprint — landing page (nateasset.com/ai layout recreation)

A React + Vite recreation of the layout, styling and interactions of `https://nateasset.com/ai`:
dark theme, Archivo / Inter Tight typography, red accent, the same section order, responsive
behaviour (swipe rails on mobile, sticky buy bar below 1024px) and the same micro-interactions.

## Requirements

- Node.js 18+ (tested with Node 24) and npm

## Run locally

Open a terminal **in the `nateasset-ai-clone` folder** (the one containing `package.json`) and run:

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that build locally so you can check it.

## Configuration

Create a `.env` file next to `package.json` to point the buttons at real destinations:

```
VITE_CHECKOUT_URL=https://your-checkout-link
VITE_PREMIUM_URL=https://your-premium-page
```

Without these, every buy button scrolls to the final call-to-action section. There is **no payment,
login or backend** in this project. Checkout and access need an external provider
(Stripe Payment Links, Gumroad, Lemon Squeezy, …).

## Project structure

```
nateasset-ai-clone/
├── public/
│   ├── assets/            stand-in SVG artwork (see "Assets" below)
│   ├── privacy.html       placeholder legal page
│   └── terms.html         placeholder legal page
├── src/
│   ├── components/
│   │   ├── common/        Brand, PriceTag, ProductThumbs, Reveal, SectionHeading
│   │   ├── Navbar.jsx           fixed header, blur on scroll, dropdown menu
│   │   ├── Hero.jsx / HeroVisual.jsx
│   │   ├── ProofSection.jsx     "You've watched the videos" reels
│   │   ├── ProcessSection.jsx   5-step idea → finished reel
│   │   ├── FeatureSection.jsx   "Everything included" product cards
│   │   ├── PreviewSection.jsx   free + locked guide pages
│   │   ├── PromptsSection.jsx   50+ prompts block
│   │   ├── AfterPurchaseSection.jsx
│   │   ├── OfferSection.jsx     glowing full-system offer card
│   │   ├── FAQSection.jsx       native <details> accordion
│   │   ├── CTASection.jsx       final call to action
│   │   ├── Footer.jsx
│   │   └── StickyBuyBar.jsx     mobile/tablet bottom bar
│   ├── data/content.js    ALL copy, prices, links and image paths
│   ├── hooks/useInView.js IntersectionObserver hook for scroll reveals
│   ├── pages/Home.jsx
│   ├── styles/global.css  design tokens, buttons, shared utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Each component has its own CSS file next to it.

## Differences from the reference (read before publishing)

- **Branded as Stickman (@stickmanadventure_).** The text is new (not copied from the reference).
- **Real episodes.** The proof section shows Day 1–4 of the ₹10cr series using the Instagram reel covers
  (`public/assets/reels/day-*.jpg`), with captions, views and likes as of 21 Oct 2026. Each card links to
  its reel. Update the numbers in `src/data/content.js` as they grow.
- **Playing the clips on the page.** Instagram doesn't serve reel videos without a login, so no video files
  are included. Export each reel (from the Instagram app, or your original edit), save it as
  `public/assets/reels/day-1.mp4` … `day-4.mp4`, and set `video: '/assets/reels/day-N.mp4'` for that reel
  in `content.js`. Cards then autoplay muted while on screen and pause when scrolled away. Keep each file
  under a few MB (e.g. 720p H.264).
- **Other artwork is illustrated.** The process-step and product covers in `public/assets/*.svg` are
  original illustrations.
- **No Trustpilot badge.** The reference shows a "5.0 / 5 Trustpilot" rating. It is left out because it
  would be a made-up review score. Add your own verified widget if you have one.
- **Animations** use CSS plus IntersectionObserver, as the reference does. GSAP wasn't needed.
