// All page copy, links and asset paths live here so the layout components stay generic.
// Copy is written for this template (not copied from the reference).
// Reel covers, captions, views and likes come from the public @stickmanadventure_ Instagram profile
// (21 Oct 2026) — update them as they grow.

const env = import.meta.env;

export const links = {
  // Set VITE_CHECKOUT_URL in a .env file to send every buy button to your payment page.
  checkout: env.VITE_CHECKOUT_URL || '#final-cta',
  access: env.VITE_ACCESS_URL || '#final-cta',
  premium: env.VITE_PREMIUM_URL || '#final-cta',
};

const INSTAGRAM = 'https://www.instagram.com/stickmanadventure_/';

export const brand = {
  primary: 'Stick',
  accent: 'man',
  tagline: 'You decide what happens • New episode daily',
  instagram: INSTAGRAM,
};

export const price = {
  current: '₹69',
  original: '₹499.99',
  label: 'One-time payment',
  shortLabel: 'One-time',
};

export const assets = {
  heroReel: '/assets/reels/day-2.jpg',
  blueprint: '/assets/blueprint-artwork.svg',
  promptsPack: '/assets/prompts-pack.svg',
  viralGuide: '/assets/viral-guide.svg',
};

export const navLinks = [
  { label: 'Products', href: '#everything-included' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'The system behind my Stickman episodes',
  titleTop: 'Make AI videos',
  titleAccent: 'like Stickman.',
  subtitle:
    'The full workflow plus 50+ prompts I use to turn a rough idea into a finished AI episode — one step at a time.',
  bullets: [
    'The complete AI video workflow',
    '50+ copy-ready prompts',
    'Bonus: How to get your first video viral',
    'Instant digital download',
  ],
  primaryCta: `Get instant access — ${price.current}`,
  secondaryCta: "See exactly what's inside",
  finePrint: 'Pay once • Instant access • No subscription',
  reel: { label: 'Day 2 episode', views: '423K views' },
  steps: ['Idea', 'Generate', 'Final video'],
};

export const proof = {
  title: "You've watched the videos.",
  accent: "Now learn how they're built.",
  subtitle: 'This is the same creation process behind every Stickman episode on my page.',
  // The ₹10cr series, in episode order. `poster` is the reel cover from Instagram.
  // To play the actual clip on the page, export the reel from Instagram, save it as
  // public/assets/reels/day-N.mp4 and set `video: '/assets/reels/day-N.mp4'`.
  reels: [
    {
      day: 'Day 1',
      poster: '/assets/reels/day-1.jpg',
      video: null,
      views: '88.3K views',
      likes: '2,225 likes',
      caption: 'You stole ₹10cr from a bank. Now escape with the money — how would you do it?',
      href: 'https://www.instagram.com/stickmanadventure_/reel/Deg8nZjzVqu/',
    },
    {
      day: 'Day 2',
      poster: '/assets/reels/day-2.jpg',
      video: null,
      views: '423K views',
      likes: '12,587 likes',
      caption: 'We tried to hide the money in 3 different places…',
      href: 'https://www.instagram.com/stickmanadventure_/reel/DelSzynTCIx/',
    },
    {
      day: 'Day 3',
      poster: '/assets/reels/day-3.jpg',
      video: null,
      views: '169K views',
      likes: '4,470 likes',
      caption: 'We gave the money to Pappu…',
      href: 'https://www.instagram.com/stickmanadventure_/reel/Deop9KOTBIx/',
    },
    {
      day: 'Day 4',
      poster: '/assets/reels/day-4.jpg',
      video: null,
      views: '45.3K views',
      likes: null,
      caption: 'The fight between Pappu and Bunty — and an intense suspense.',
      href: 'https://www.instagram.com/stickmanadventure_/reel/DetSkv_zfw3/',
    },
  ],
  profileCta: 'Watch every episode on Instagram',
};

export const process = {
  title: 'From idea → finished reel',
  subtitle: 'Every stage of the process, laid out in order.',
  steps: [
    { title: 'Idea', text: 'Begin with the story or concept.', image: '/assets/step-1.svg' },
    { title: 'Character', text: 'Design characters that stay consistent.', image: '/assets/step-2.svg' },
    { title: 'Scene + prompt', text: 'Build every shot with a proven prompt structure.', image: '/assets/prompts-pack.svg' },
    { title: 'Animate', text: 'Bring the still images to life as video.', image: '/assets/step-4.svg' },
    { title: 'Edit + post', text: 'Polish the Reel and get it ready to publish.', image: '/assets/step-5.svg' },
  ],
};

export const products = [
  {
    kicker: 'Digital guide',
    title: 'The AI Video Blueprint',
    image: '/assets/blueprint-artwork.svg',
    imageAlt: 'Blueprint guide cover artwork',
    highlight: false,
    items: [
      'Full start-to-finish workflow',
      'Character design system',
      'Image → video process',
      'Story structure',
      'Editing workflow',
      'Tool setup',
      'Worked step-by-step examples',
    ],
  },
  {
    kicker: 'Included',
    title: '50+ AI Video Prompts',
    image: '/assets/prompts-pack.svg',
    imageAlt: 'Prompt pack cover artwork in red and white on black',
    highlight: true,
    items: [
      '50+ copy-ready prompts',
      'Character prompts',
      'Scene prompts',
      'Video / animation prompts',
      'Story formulas',
      'Reusable prompt templates',
    ],
  },
  {
    kicker: 'Bonus guide',
    title: 'How to Get Your First Video Viral',
    image: '/assets/viral-guide.svg',
    imageAlt: 'First Video Viral guide cover artwork in red and white on black',
    highlight: true,
    items: [
      'Hooks that stop the scroll in 2 seconds',
      'Retention editing tricks',
      'Episode / series format that brings viewers back',
      'Captions, hashtags & posting times',
      '"Comment to vote" engagement loops',
      'Reading your Insights to repeat what works',
    ],
  },
];

// Short names for the "you get" lists and thumbnails
export const productThumbs = products.map((p) => ({ image: p.image, alt: `${p.title} cover` }));

export const preview = {
  title: 'Preview the system',
  accent: 'before you buy.',
  subtitle: 'Look at how the blueprint is organised before you purchase.',
  freeFlow: ['Character', 'Story', 'Generate', 'Edit', 'Post'],
  freeNote: 'Just a small peek. Everything else unlocks after purchase.',
  pages: [
    { title: 'The simple system', text: 'Character → story → generate → edit → post, as one loop you can repeat.', free: true },
    { title: 'Tools & setup', text: 'Which tools I use and how to configure them before you spend a credit.' },
    { title: 'Character creation', text: 'A copy-paste prompt for a multi-angle character reference sheet.' },
    { title: 'Story structure', text: 'Hook → context → escalation → turn → cliffhanger, plus a hook test.' },
    { title: 'The master video prompt', text: 'The complete 9:16 prompt with consistency, dialogue and pacing rules.' },
  ],
};

export const prompts = {
  title: '50+ prompts.',
  accent: 'Ready to copy.',
  text: 'No more blank page. Start from the prompt structures I rely on and adapt them to your own videos.',
  tags: ['Hooks', 'Characters', 'Stories', 'Scenes', 'Video prompts'],
  cta: 'Get the blueprint + 50+ prompts',
};

export const afterPurchase = {
  title: 'What happens after I buy?',
  steps: [
    { title: 'Pay once', text: `Finish the secure ${price.current} checkout.` },
    { title: 'Get instant access', text: 'Your downloads unlock as soon as payment goes through.' },
    { title: 'Open the workflow', text: 'Work through the process from idea → finished Reel.' },
    { title: 'Use the prompts', text: 'Copy, tweak and start creating.' },
  ],
  assurances: [
    { icon: 'zap', label: 'Instant digital access' },
    { icon: 'card', label: 'One-time payment' },
    { icon: 'lock', label: 'No subscription' },
  ],
};

export const offer = {
  eyebrow: 'The full system',
  title: 'Everything you need',
  titleLine2: 'to start creating',
  youGet: [
    'AI Video Blueprint',
    '50+ AI Video Prompts',
    'How to Get Your First Video Viral',
    'The exact creation workflow',
    'Reusable prompt system',
    'Instant access',
  ],
  cta: `Get everything for ${price.current} →`,
  finePrint: 'Secure checkout • Instant access • No subscription',
};

export const faqs = [
  {
    q: 'What exactly do I get?',
    a: 'A step-by-step blueprint covering tools, character creation, story structure, prompting, the image-to-video process and editing — plus the 50+ prompt pack.',
  },
  {
    q: 'Is this beginner friendly?',
    a: 'Yes. Each stage is explained from scratch, with examples you can follow even if you have never made an AI video before.',
  },
  {
    q: 'What AI tools do I need?',
    a: 'The blueprint lists the image and video tools used in the workflow and how to set them up. Some tools have their own paid plans.',
  },
  {
    q: 'Do I get the exact prompts?',
    a: 'Yes — every prompt in the pack is ready to copy and paste, and built to be customised for your own characters and stories.',
  },
  {
    q: 'How do I access everything after buying?',
    a: 'Right after a successful payment you get access to the digital products. Keep your receipt email to log back in later.',
  },
  {
    q: 'Is this a subscription?',
    a: 'No. It is a single one-time payment with no recurring charges.',
  },
  {
    q: 'Can I use this to make my own content?',
    a: 'Absolutely. The whole point is to help you create and post your own AI videos.',
  },
  {
    q: 'Is this a refundable product?',
    a: 'Because it is a digital product delivered instantly, check the store terms for the refund policy before buying.',
  },
];

export const finalCta = {
  title: 'Ready to make',
  titleLine2: 'your own?',
};

export const footer = {
  links: [
    { label: 'My access', href: links.access },
    { label: 'Products', href: '#everything-included' },
    { label: 'Premium', href: links.premium },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:hello@example.com' },
  ],
  social: [{ label: 'Instagram @stickmanadventure_', href: INSTAGRAM }],
  legal: [
    { label: 'Privacy', href: '/privacy.html' },
    { label: 'Terms', href: '/terms.html' },
  ],
};
