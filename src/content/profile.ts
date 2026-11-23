export const profile = {
  name: "Pooya Barazandeh",
  firstName: "Pooya",
  lastName: "Barazandeh",
  monogram: "pb.",
  headline: "AI engineer, researcher, and builder of useful things.",
  title: "AI Developer & Team Lead",
  tagline: "From a research question to a working system.",
  about: "I'm an AI developer and team lead working at the intersection of machine learning, software engineering, and applied research. I like understanding the model, building the system around it, and making the evidence easy to inspect.",
  location: "Tehran, Iran · Open to collaboration",
  email: "Barazandehpooya@gmail.com",
  github: "https://github.com/pooyabrz",
  // Availability is intentionally non-committal; update this after confirming your current status.
  availability: "Open to interesting conversations",
  languages: ["Persian · Native", "English · Fluent"],
  stat: [
    { value: "1st / 72", label: "Class rank at Amirkabir" },
    { value: "10+", label: "Courses assisted" },
    { value: "2026", label: "B.Sc. graduation" }
  ]
} as const;

export type TimelineEntry = {
  period: string;
  position: string;
  organization: string;
  details: string;
};

export const experience: TimelineEntry[] = [
  { period: "2024 — PRESENT", position: "AI Developer & Team Lead", organization: "Rastanovin Raya · part-time", details: "Lead a two-developer team on LLM-assisted coding and AI tooling for a cloud development environment. Its demo is used by 30+ developers." },
  { period: "2025 — 2026", position: "Computer Vision Research Assistant", organization: "NORC · Amirkabir University of Technology", details: "Worked on deep-learning-based inspection of bridge images with PyTorch, OpenCV and YOLO, alongside TUPRC." },
  { period: "2023 — 2026", position: "Teaching Assistant · 10+ courses", organization: "Amirkabir University of Technology", details: "Head TA for graduate Advanced AI, designed 15+ assignments and projects, and mentored 200+ students across semesters." },
  { period: "2025 — 2026", position: "Operating Systems Teaching Assistant", organization: "University of Tehran", details: "Supported C-based systems programming labs and mentored 40+ students." },
  { period: "2023", position: "Frontend Developer Intern", organization: "Rastanovin Raya", details: "Built React interfaces and REST API integrations for enterprise tools." }
];

export const education = [
  { period: "2022 — 2026", degree: "B.Sc. in Computer Science", institution: "Amirkabir University of Technology", detail: "Ranked 1st of 72 students · GPA 19.55 / 20 (per attached CV)" },
  { period: "JUL 2026", degree: "MLx Representation Learning & Generative AI", institution: "Oxford Machine Learning School", detail: "Completed the programme and associated assessment." }
];

export const research = [
  { eyebrow: "SUBMITTED MANUSCRIPT · 2026", title: "Communication-efficient vertical federated learning", body: "Co-authored a submitted manuscript on gradient-noise-scale-aware adaptive sampling. Experiments cover 950 runs across 10 datasets and five seeds. The manuscript is under review, not a published paper." },
  { eyebrow: "BACHELOR'S THESIS · 2025–26", title: "Deep learning for knowledge tracing", body: "Studied DKT, AKT and GKT on ASSISTments and EdNet, exploring attention mechanisms for interpreting student knowledge states." },
  { eyebrow: "APPLIED COMPUTER VISION · 2025–26", title: "Urban bridge defect detection", body: "Investigated cracks, corrosion and deformation in bridge-inspection images under the supervision of Prof. Mehdi Ghatee at NORC." }
];

export const capabilities = [
  { id: "01", title: "Intelligent systems", description: "Machine learning, LLM applications, retrieval, modeling and evaluation.", stack: ["Python", "PyTorch", "LangChain", "LightGBM", "Transformers"] },
  { id: "02", title: "Product engineering", description: "From technical architecture to usable full-stack tools and delivery.", stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"] },
  { id: "03", title: "Research & simulation", description: "Experiments that make assumptions, uncertainty and failure modes visible.", stack: ["NumPy", "pandas", "WNTR / EPANET", "Matplotlib", "Jupyter"] }
];
