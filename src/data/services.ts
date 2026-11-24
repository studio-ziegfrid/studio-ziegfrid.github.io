export interface Service {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Custom UI/UX design',
    description:
      'A design built around your customers and your business — not a theme with your logo dropped in.',
    icon: 'draw',
    items: ['Discovery', 'Sitemap & flows', 'Wireframes', 'Visual design', 'Motion'],
  },
  {
    title: 'Front-end engineering',
    description:
      'Fast, accessible web interfaces built with Vue, Quasar, React, or the stack that makes sense for your project.',
    icon: 'code',
    items: ['Vue / Quasar', 'React', 'TypeScript', 'Responsive builds', 'Component systems'],
  },
  {
    title: 'Mobile apps & store launch',
    description:
      'Mobile apps built with React Native for iOS and Android, taken all the way through Play Store and App Store release.',
    icon: 'smartphone',
    items: ['iOS & Android', 'React Native', 'Play Store', 'App Store', 'Releases & updates'],
  },
  {
    title: 'CMS & content',
    description:
      'Edit your pages, products, and stories without calling a developer for every typo.',
    icon: 'edit_note',
    items: ['Sanity', 'Strapi', 'Headless WordPress', 'Decap CMS'],
  },
  {
    title: 'Booking & reservations',
    description:
      'Flows for rooms, tables, vehicles, appointments, and pickups that match how you actually operate.',
    icon: 'event_available',
    items: ['Availability', 'Scheduling', 'Deposits', 'Confirmations'],
  },
  {
    title: 'E-commerce & payments',
    description:
      'Product catalogues, baskets, delivery slots, and payment integrations without the template ceiling.',
    icon: 'shopping_bag',
    items: ['Catalogues', 'Baskets', 'Stripe / local gateways', 'Delivery rules'],
  },
  {
    title: 'Integrations',
    description:
      'Connect the tools your business already runs on, instead of rebuilding your operations around a page builder.',
    icon: 'hub',
    items: ['CRM', 'Email', 'Maps', 'Analytics', 'WhatsApp'],
  },
  {
    title: 'AI integration',
    description:
      'Useful AI wired into the places your business already works — with the tools, data, and permissions chosen deliberately.',
    icon: 'auto_awesome',
    items: [
      'Support answers',
      'Admin assistants',
      'Data analysis',
      'Background jobs',
      'Semantic search',
      'Scoped access',
      'Self-hosted option',
    ],
  },
  {
    title: 'Performance & SEO',
    description:
      'Fast pages, clean semantics, and technical SEO that gives your content a fair chance to be found.',
    icon: 'speed',
    items: ['Core Web Vitals', 'Metadata', 'Structured data', 'Sitemaps'],
  },
  {
    title: 'Care & maintenance',
    description:
      'Ongoing updates, fixes, backups, and improvements — handled by the same studio that built it.',
    icon: 'health_and_safety',
    items: ['Updates', 'Backups', 'Monitoring', 'Small changes'],
  },
];

export interface AiUseCase {
  title: string;
  description: string;
}

export const aiUseCases: AiUseCase[] = [
  {
    title: 'Customer queries',
    description:
      'Straight answers drawn from your own pages, policies, and prices, with a clear hand-off to a person when the question needs one.',
  },
  {
    title: 'Admin assistants',
    description:
      'Summaries, record lookups, and drafted replies inside the web or mobile app your team already works in.',
  },
  {
    title: 'Data analysis',
    description:
      'Reports, trends, and anomalies from your own numbers. The model and the depth are chosen to fit the question and the budget.',
  },
  {
    title: 'Background jobs',
    description:
      'Scheduled digests, categorisation, and follow-ups that would otherwise be done by hand, late, or not at all.',
  },
  {
    title: 'Document & form extraction',
    description:
      'Structured data pulled out of invoices, applications, and uploads, then checked before anything is stored.',
  },
  {
    title: 'Semantic search',
    description:
      'Finding the right page, product, or record from a question written the way people actually talk.',
  },
  {
    title: 'Lead triage',
    description:
      'Enquiries qualified, tagged, and routed to the right desk before a person picks them up.',
  },
  {
    title: 'Translation & localisation',
    description:
      'Content adapted for other languages and markets without a human retyping every page.',
  },
  {
    title: 'Anomaly alerts',
    description:
      'Unusual orders, traffic, or data patterns flagged for review — a prompt to look, not a verdict.',
  },
];

export interface AiSafeguard {
  title: string;
  description: string;
}

export const aiSafeguards: AiSafeguard[] = [
  {
    title: 'Tool allowlist',
    description:
      'The model only sees the tools we hand it. Everything else is out of reach, whatever it is asked to do.',
  },
  {
    title: 'Read-only by default',
    description: 'Writing, sending, and charging need a permission we agree on with you first.',
  },
  {
    title: 'Human approval',
    description:
      'Consequential actions wait for a person to confirm them. Nothing important happens on a model say-so.',
  },
  {
    title: 'Your data stays yours',
    description:
      'No training on your content, and no sending private prompts or records anywhere they do not need to go.',
  },
  {
    title: 'Self-hosted when privacy matters',
    description:
      'Ollama or LM Studio on your own infrastructure. Your data never leaves your systems, and we handle the setup.',
  },
  {
    title: 'Visible and limited',
    description:
      'Logs, usage caps, and cost limits, so what the AI did and what it cost is never a mystery.',
  },
];

export interface Engagement {
  name: string;
  label: string;
  description: string;
  bestFor: string;
}

export const engagements: Engagement[] = [
  {
    name: 'Launch',
    label: 'Start fresh',
    description:
      'A new website or mobile app from scratch: strategy, design, build, and launch. Ideal for a new business or a brand that has outgrown its first build.',
    bestFor: 'New businesses, rebrands, first serious product',
  },
  {
    name: 'Redesign',
    label: 'Keep what works',
    description:
      'A considered redesign of an existing site or app. We keep the content and equity that still serve you, and rebuild the experience around what does not.',
    bestFor: 'Outdated sites, poor conversion, clumsy mobile flows',
  },
  {
    name: 'Custom build',
    label: 'Break the ceiling',
    description:
      'Booking flows, e-commerce, dashboards, mobile apps, AI, integrations, or anything a template cannot do. Designed and engineered around your operations.',
    bestFor: 'Complex workflows, integrations, growing teams',
  },
  {
    name: 'Care',
    label: 'Stay looked after',
    description:
      'Ongoing maintenance, fixes, updates, and small improvements. Delivered through SiteMedic, our maintenance arm.',
    bestFor: 'Launched sites and apps that need a reliable pair of hands',
  },
];

export const scopingPrinciples = [
  {
    number: '01',
    title: 'Start with the outcome',
    description:
      'We begin with what the product needs to do for the business, not with a long list of features. Fewer, better decisions.',
  },
  {
    number: '02',
    title: 'Every feature earns its place',
    description:
      'If a feature does not help a customer or save you time, it does not belong in the first version. We would rather do six things well.',
  },
  {
    number: '03',
    title: 'Phase the rest',
    description:
      'There is always a next version. We plan it, price it, and build it when it makes sense — instead of overspending on day one.',
  },
];

export const addOns = [
  'Booking & reservations',
  'E-commerce & payments',
  'CMS setup & training',
  'CRM & email integration',
  'Maps & location pages',
  'Analytics & reporting',
  'Multilingual content',
  'Blog & editorial',
  'Custom dashboards',
  'API integrations',
  'AI Integrations',
  'Mobile apss and store launch'
];
