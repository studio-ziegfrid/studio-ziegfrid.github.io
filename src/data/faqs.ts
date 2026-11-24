import { SITE } from '@/data/site';

export interface FaqLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
  link?: FaqLink;
}

export const faqs: Faq[] = [
  {
    question: 'How is this different from Wix or Squarespace?',
    answer:
      'Wix and Squarespace are good tools for some businesses. They become a ceiling when you need a custom booking flow, a specific CMS workflow, unique interactions, or code you actually own. We design and build the thing that fits your business — not the closest template.',
  },
  {
    question: 'Do I own what you build?',
    answer:
      'Yes. You own the design, the code, the content, and the domain — for a website or an app. There is no proprietary page builder keeping you hostage, and no vendor lock-in. If you ever want to move hosts or work with another developer, you can.',
  },
  {
    question: 'Can I edit the content myself?',
    answer:
      'Yes, when a CMS makes sense. We set up an editing experience for the pages, products, or stories you will actually update, then show you how to use it. For smaller builds, we can keep updates simple and handled through the studio.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A focused site or app usually takes 3–6 weeks. Larger builds with booking, e-commerce, integrations, or store submission run longer. We agree on a realistic timeline before we start, and we do not pretend a complex build can happen in a weekend.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Every project is quoted after a short conversation about scope, timeline, and budget. We do not display fixed packages because two projects with the same number of screens can need very different work. We will always tell you what can wait until a later phase.',
  },
  {
    question: 'What if my budget is limited?',
    answer:
      'Tell us the range. We will design the smallest thing that does the job well, and plan the rest for later. We would rather build a focused product you are proud of than an overbuilt one you regret. No surprise costs, no bloated retainers.',
  },
  {
    question: 'Do you work with existing brands?',
    answer:
      'Yes. If you already have a logo, voice, or visual identity, we build around it. If the brand is still forming, we can shape the digital expression of it without forcing you into a full rebrand.',
  },
  {
    question: 'Can you maintain the app after launch?',
    answer:
      'Yes. Ongoing maintenance for websites and mobile apps is handled through SiteMedic, our care arm for fixes, updates, backups, and store releases. You can also take the keys and maintain it yourself — we will make sure you have what you need.',
  },
  {
    question: 'Can you add AI to our web or mobile app?',
    answer:
      'Yes. We can add AI to something we built or an app your team already runs. We start with what the app needs to do, which provider or model fits, and what the AI is allowed to touch — then we wire it in with the permissions agreed up front.',
  },
  {
    question: 'Can you integrate AI into an existing app?',
    answer:
      'Yes — even an app we did not build. We handle ongoing work on existing web and mobile apps through SiteMedic, our care arm. AI integration can be scoped as part of that, with the tools and permissions agreed first.',
    link: { label: 'See SiteMedic', href: SITE.sitemedicUrl, external: true },
  },
  {
    question: 'Will AI have access to everything on our site?',
    answer:
      'No. We choose the tools and the permissions deliberately, and we tell you what we chose. Access is read-only unless we agree on more, consequential actions wait for a person to confirm them, and the AI never gets credentials for systems it does not need.',
  },
  {
    question: 'Can AI run on our own servers?',
    answer:
      'Yes. When privacy is the concern, we run open models with Ollama or LM Studio on your own infrastructure, so your data never has to leave your systems. We handle the setup; you keep the keys.',
  },
];
