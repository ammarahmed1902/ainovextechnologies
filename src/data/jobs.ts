export type JobPost = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: JobPost[] = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / London",
    type: "Full-time",
    description: "Lead the development of our core AI-driven infrastructure using React, Node.js, and Python.",
    overview:
      "As a Senior Full Stack Engineer, you will design and scale core platform services powering enterprise customer workflows.",
    responsibilities: [
      "Architect, build, and maintain production-ready services and front-end modules.",
      "Collaborate with product and design teams to deliver new platform capabilities.",
      "Mentor engineers and drive engineering best practices across the team."
    ],
    requirements: [
      "5+ years building web applications with modern JavaScript frameworks.",
      "Strong experience with Node.js back-end services and REST APIs.",
      "Comfortable working with cloud infrastructure and CI/CD workflows."
    ]
  },
  {
    id: 2,
    title: "AI Research Scientist",
    department: "Data Science",
    location: "Remote / New York",
    type: "Full-time",
    description: "Develop and optimize large-scale machine learning models for predictive analytics.",
    overview:
      "As an AI Research Scientist, you will create practical ML systems that deliver measurable value for enterprise customers.",
    responsibilities: [
      "Design and evaluate machine learning models for production use cases.",
      "Partner with engineering teams to deploy models into scalable services.",
      "Analyze model performance and continuously improve accuracy and efficiency."
    ],
    requirements: [
      "Advanced degree in a quantitative field or equivalent practical experience.",
      "Hands-on experience with Python and modern ML frameworks.",
      "Strong understanding of model evaluation, experimentation, and optimization."
    ]
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and beautiful user experiences for our enterprise dashboard suite.",
    overview:
      "As a Product Designer, you will shape end-to-end user journeys for products used by global operations teams.",
    responsibilities: [
      "Translate business requirements into clear, user-centered design solutions.",
      "Create wireframes, prototypes, and high-fidelity UI for web products.",
      "Work closely with PMs and engineers to ship polished experiences."
    ],
    requirements: [
      "Strong portfolio demonstrating product thinking and interaction design.",
      "Experience with design tools such as Figma.",
      "Ability to communicate design decisions to technical and non-technical audiences."
    ]
  },
  {
    id: 4,
    title: "Solutions Architect",
    department: "Sales Engineering",
    location: "Singapore",
    type: "Full-time",
    description: "Bridge the gap between business needs and technical implementation for our global clients.",
    overview:
      "As a Solutions Architect, you will guide customers through technical discovery, solution design, and implementation planning.",
    responsibilities: [
      "Lead technical discovery sessions with prospective and existing clients.",
      "Design implementation architectures aligned to customer goals.",
      "Partner with delivery teams to ensure successful project execution."
    ],
    requirements: [
      "Experience designing enterprise SaaS or cloud-based architectures.",
      "Strong communication and stakeholder management skills.",
      "Ability to simplify complex technical concepts for business audiences."
    ]
  }
];
