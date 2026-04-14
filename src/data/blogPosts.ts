export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'future-of-ai-enterprise-infrastructure',
    title: 'The Future of AI in Enterprise Infrastructure',
    excerpt:
      'Discover how large language models are reshaping the way global organizations manage their cloud resources and security protocols.',
    author: 'Dr. Elena Vance',
    date: 'April 12, 2026',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: 'https://picsum.photos/seed/ai-tech/800/500',
    content: [
      'Enterprise leaders are moving from isolated AI pilots to deeply integrated systems that influence architecture decisions in real time. This shift allows teams to predict operational bottlenecks before they affect customer-facing services.',
      'Modern AI-powered infrastructure combines observability data, security telemetry, and cost signals to automate routine actions. Instead of reacting manually to every incident, engineering teams can define guardrails while AI systems execute fast, policy-aligned fixes.',
      'The next competitive edge lies in governance. Organizations that pair intelligent automation with transparent controls and human oversight are scaling faster while keeping compliance and trust intact.'
    ]
  },
  {
    id: 2,
    slug: 'securing-the-edge-new-paradigms-2026',
    title: 'Securing the Edge: New Paradigms in 2026',
    excerpt:
      'As decentralized computing becomes the norm, we explore the critical security measures needed to protect data at the edge of the network.',
    author: 'Marcus Thorne',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: 'https://picsum.photos/seed/security/800/500',
    content: [
      'Edge computing reduces latency and unlocks new user experiences, but it also increases the attack surface. Every endpoint becomes a potential access point without strong identity controls and encrypted communication.',
      'A practical approach starts with zero-trust principles: device verification, least-privilege access, and continuous policy enforcement. Security must be embedded in deployment pipelines, not layered on after launch.',
      'In 2026, resilient edge security is less about one perfect perimeter and more about distributed verification at every layer of the stack.'
    ]
  },
  {
    id: 3,
    slug: 'building-scalable-microservices-with-ainovex-plus',
    title: 'Building Scalable Microservices with Ainovex+',
    excerpt:
      'A deep dive into our latest platform updates and how they simplify the deployment of complex microservice architectures.',
    author: 'Sarah Chen',
    date: 'April 05, 2026',
    readTime: '12 min read',
    category: 'Engineering',
    image: 'https://picsum.photos/seed/code/800/500',
    content: [
      'As systems grow, microservice complexity can quickly outpace visibility and control. Ainovex+ introduces service templates, policy packs, and deployment orchestration that reduce setup overhead for engineering teams.',
      'The platform now supports progressive rollout strategies with built-in telemetry gates, so failed releases are caught early and isolated safely. Teams can ship faster without increasing operational risk.',
      'Scalable architecture is not only about adding services. It is about maintaining clear boundaries, dependable communication, and consistent ownership over time.'
    ]
  },
  {
    id: 4,
    slug: 'human-element-digital-transformation',
    title: 'The Human Element in Digital Transformation',
    excerpt:
      "Why technology alone isn't enough. Exploring the cultural shifts required for successful enterprise-wide digital adoption.",
    author: 'James Wilson',
    date: 'March 28, 2026',
    readTime: '5 min read',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/strategy/800/500',
    content: [
      'Transformation programs often fail when tools are prioritized over people. Long-term adoption depends on clarity, training, and leadership alignment across departments.',
      'Cross-functional teams that share measurable outcomes adapt faster to process changes than teams working in silos. Communication rhythms and feedback loops matter as much as technology choices.',
      'Sustainable digital change happens when organizations treat culture as a core system, not a secondary initiative.'
    ]
  },
  {
    id: 5,
    slug: 'optimizing-cloud-costs-post-saas-world',
    title: 'Optimizing Cloud Costs in a Post-SaaS World',
    excerpt:
      'Practical strategies for reducing infrastructure overhead without compromising on performance or security.',
    author: 'Elena Vance',
    date: 'March 22, 2026',
    readTime: '7 min read',
    category: 'Finance',
    image: 'https://picsum.photos/seed/cloud/800/500',
    content: [
      'Cloud waste often hides in over-provisioned resources and underused environments. A disciplined tagging strategy and weekly cost reviews provide fast visibility into unnecessary spend.',
      'Optimization should prioritize value, not just reduction. Rightsizing, autoscaling, and reserved usage planning can lower costs while preserving reliability and performance targets.',
      'Teams that combine financial governance with engineering ownership usually see the most durable savings.'
    ]
  },
  {
    id: 6,
    slug: 'quantum-computing-preparing-next-leap',
    title: 'Quantum Computing: Preparing for the Next Leap',
    excerpt:
      'While still in its infancy, quantum computing is already influencing how we think about encryption and data processing.',
    author: 'Dr. Robert Aris',
    date: 'March 15, 2026',
    readTime: '10 min read',
    category: 'Future Tech',
    image: 'https://picsum.photos/seed/quantum/800/500',
    content: [
      'Quantum progress is accelerating from research environments into practical experimentation. While widespread adoption is still ahead, security and architecture teams are preparing now.',
      'Post-quantum cryptography planning has become a strategic requirement for sectors with long data lifecycles. Early inventory work helps organizations understand where cryptographic transitions will be most complex.',
      'The most prepared teams are not waiting for full maturity. They are building flexible roadmaps that can evolve with the technology.'
    ]
  }
];

export const blogCategories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Engineering',
  'Strategy',
  'Future Tech'
];
