export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  testimonial: {
    text: string;
    author: string;
  };
  challenge: string;
  solution: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'next-gen-fleet-management',
    client: 'AeroDynamics Corp',
    title: 'Next-Gen Fleet Management',
    description:
      'Revolutionizing global logistics with a real-time AI-driven cloud platform that optimized fuel consumption by 18% across 5,000 aircraft.',
    image:
      'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&q=80&w=800&h=500',
    stats: [
      { label: 'Efficiency Gain', value: '18%' },
      { label: 'Active Users', value: '50k+' }
    ],
    testimonial: {
      text: "Ainovex Technologies transformed our operations. Their platform isn't just software; it's a competitive advantage.",
      author: 'James Wilson, CTO'
    },
    challenge:
      'AeroDynamics needed a single system to coordinate fleet performance, monitor fuel usage, and surface operational issues before they created costly delays.',
    solution: [
      'Built a centralized fleet intelligence dashboard with live aircraft telemetry and route performance data.',
      'Introduced AI-driven recommendations for fuel usage, maintenance timing, and route efficiency.',
      'Integrated the platform with internal logistics workflows so operations teams could respond faster.'
    ],
    outcomes: [
      'Reduced overall fuel consumption by 18% across the fleet.',
      'Improved visibility for dispatch, maintenance, and executive teams from one shared platform.',
      'Scaled successfully to more than 50,000 active users across multiple regions.'
    ]
  },
  {
    slug: 'zero-trust-security-overhaul',
    client: 'FinSafe International',
    title: 'Zero-Trust Security Overhaul',
    description:
      'Implementing a comprehensive cybersecurity framework for a global banking leader, protecting $200B+ in assets from sophisticated threats.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500',
    stats: [
      { label: 'Security Score', value: '99.9' },
      { label: 'Global Nodes', value: '120' }
    ],
    testimonial: {
      text: "The most robust security implementation we've ever seen. Ainovex Technologies is in a league of their own.",
      author: 'Sarah Miller, CISO'
    },
    challenge:
      'FinSafe needed to modernize legacy security controls without disrupting banking operations across a highly regulated global environment.',
    solution: [
      'Designed a zero-trust architecture with identity-first access controls and segmented infrastructure.',
      'Rolled out centralized visibility across endpoints, networks, and critical applications.',
      'Created a staged implementation plan that minimized operational risk during rollout.'
    ],
    outcomes: [
      'Raised the client security posture score to 99.9.',
      'Secured operations across 120 global nodes with unified visibility.',
      'Protected critical infrastructure supporting more than $200B in managed assets.'
    ]
  },
  {
    slug: 'predictive-grid-maintenance',
    client: 'EcoEnergy Systems',
    title: 'Predictive Grid Maintenance',
    description:
      'Leveraging machine learning to predict power grid failures before they occur, reducing downtime by 40% for 12M households.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=500',
    stats: [
      { label: 'Downtime Reduced', value: '40%' },
      { label: 'Households', value: '12M' }
    ],
    testimonial: {
      text: "Their AI models are incredibly accurate. We've saved millions in emergency repair costs.",
      author: 'Robert Chen, Director of Ops'
    },
    challenge:
      'EcoEnergy wanted to move from reactive maintenance to predictive planning across a large and aging power distribution network.',
    solution: [
      'Developed machine learning models that flagged failure risk from grid telemetry and maintenance records.',
      'Built operational dashboards for prioritizing field interventions before outages occurred.',
      'Connected predictive insights to dispatch workflows for faster response and better resource planning.'
    ],
    outcomes: [
      'Reduced downtime by 40% across the network.',
      'Improved service reliability for 12 million households.',
      'Lowered emergency repair costs through earlier intervention and better planning.'
    ]
  }
];
