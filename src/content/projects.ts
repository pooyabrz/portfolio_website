export type ProjectCategory = "AI / ML" | "Web Applications" | "Research" | "Creative Coding" | "Tools";
export type Project = {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  year: number | null;
  categories: ProjectCategory[];
  featured: boolean;
  role: string;
  technologies: string[];
  art: "forecast" | "water" | "facade" | "chat" | "document" | "sampling" | "grid" | "audio" | "puzzle" | "space";
  color: "lime" | "blue" | "purple" | "orange" | "pink" | "cyan";
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  limitation: string;
  deepDive: { title: string; body: string }[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
};

// Content is deliberately independent of the JSX layout. Update, reorder or
// unpublish here without modifying components. All factual claims are grounded
// in the original supplied portfolio and CV; no performance results are invented.
export const projects: Project[] = [
  {
    id: "p01", slug: "demandcast", title: "DemandCast", kicker: "RETAIL FORECASTING", year: 2026,
    summary: "Retail forecasting that makes uncertainty as visible as the forecast itself.",
    categories: ["AI / ML", "Research"], featured: true, role: "Independent project · modeling & dashboard",
    technologies: ["Python", "LightGBM", "Streamlit", "M5 dataset"], art: "forecast", color: "lime", status: "Benchmark & dashboard",
    problem: "A point forecast can obscure important trade-offs between median accuracy, expected sales, and predictive uncertainty.",
    approach: "Compare mean- and median-oriented forecasting objectives using temporal backtesting and quantile intervals instead of evaluating accuracy in isolation.",
    implementation: "LightGBM models and a Streamlit review interface were evaluated on a sampled benchmark of 500 M5 item/store series over a 28-day forecast horizon. A separate product-cohort check examines generalization within the dataset.",
    result: "A reviewable benchmarking and dashboard workflow that exposes forecast trade-offs, quantile intervals and aggregate-sales bias. This is a sampled benchmark, not a full M5 leaderboard result.",
    limitation: "No deployed inventory service is claimed; this is an M5-sampled evaluation, not an operational retail forecasting product.",
    deepDive: [
      { title: "Why temporal evaluation matters", body: "Forecasting is evaluated with chronological splits to avoid using information from the future. The dashboard separates forecast shapes and aggregate behavior for inspection." },
      { title: "Representing uncertainty", body: "Quantile-oriented predictions make a range of plausible outcomes visible alongside mean- or median-oriented estimates. They are not a guarantee of calibrated business risk." }
    ], githubUrl: "https://github.com/pooyabrz/demandcast"
  },
  {
    id: "p02", slug: "leakscope", title: "LeakScope", kicker: "INFRASTRUCTURE RESEARCH", year: 2026,
    summary: "Where should you look for a leak when your sensor readings are sparse?",
    categories: ["AI / ML", "Research"], featured: true, role: "Research prototype · simulation & evaluation",
    technologies: ["Python", "WNTR", "EPANET", "Streamlit"], art: "water", color: "blue", status: "Research prototype",
    problem: "Sparse pressure measurements make water-network leak localization difficult, particularly when sensor coverage is limited or observations are missing.",
    approach: "Rank possible inspection areas using simulated hydraulic signatures, calibration, sensor-planning and dropout-condition analysis.",
    implementation: "A research pipeline uses the simulated BattLeDIM network and WNTR/EPANET. Controlled benchmarks compare different sensor budgets and missing-sensor scenarios.",
    result: "An inspectable research prototype with ranked investigation areas and controlled evaluation. Its sparse-sensor performance target has not yet been met.",
    limitation: "Inspection rankings are not calibrated leak probabilities. No validated field detector or reliable real-world leak-location performance is claimed.",
    deepDive: [
      { title: "Testing observability", body: "The benchmark varies available sensors and dropout conditions to test how information scarcity changes area rankings." },
      { title: "Rankings versus probabilities", body: "A useful investigation priority is not the same as a calibrated probability or a confirmed leak location; the interface must communicate that distinction." }
    ], githubUrl: "https://github.com/pooyabrz/LeakScope"
  },
  {
    id: "p03", slug: "nimbryva", title: "Nimbryva", kicker: "SCIENTIFIC SIMULATION", year: 2026,
    summary: "A rotating adaptive façade concept connecting water and solar-energy research.",
    categories: ["Research", "Creative Coding"], featured: true, role: "Concept research · modeling & simulation",
    technologies: ["Python", "Matplotlib", "Simulation", "PPO"], art: "facade", color: "purple", status: "Concept demonstrator",
    problem: "Explore whether adaptable building façades could combine supplemental water collection and solar-energy concepts within a mechanically coherent system.",
    approach: "Model a rotating façade mechanism and the proposed buffer-discharge state machine. Preserve prior water, thermal, PV and PPO-policy explorations for reproducibility.",
    implementation: "A rigid-geometry simulation and scripted water-input demo explore mechanism behavior. Earlier research runs are kept separately rather than presented as evidence for the revised device.",
    result: "A research concept demonstrator with a revisitable simulation workflow; revised-device physical performance remains unvalidated.",
    limitation: "Scripted water inputs do not predict real yield. The older simulation results do not validate the revised design or demonstrate a new reinforcement-learning advantage.",
    deepDive: [
      { title: "Mechanism first", body: "The current version separates geometric motion and a buffer-discharge control concept from broader environmental performance claims." },
      { title: "Model boundaries", body: "A demo can communicate the behavior of an idea without proving water yield, thermodynamic efficiency or manufacturing feasibility." }
    ], githubUrl: "https://github.com/pooyabrz/NIMBRYVA-ADAPTIVE-WATER-ENERGY-FACADE"
  },
  {
    id: "p04", slug: "family-messenger", title: "Family Messenger", kicker: "PRIVATE COMMUNICATION", year: 2026,
    summary: "A self-hosted communication stack built for a smaller circle.",
    categories: ["Web Applications", "Tools"], featured: true, role: "Self-hosting · integration & tooling",
    technologies: ["Matrix", "Docker", "PostgreSQL", "Tailscale", "Node.js"], art: "chat", color: "orange", status: "Self-hosted stack",
    problem: "Provide a private, controllable family messaging setup with remote access and optional shared household utilities.",
    approach: "Bring together an existing open protocol, a deployable server stack, private networking and setup tooling instead of reinventing the messaging protocol.",
    implementation: "Docker Compose coordinates a Matrix homeserver, PostgreSQL and reverse proxy; Tailscale provides private remote access. Optional MatrixRTC calling and a separate Family Hub extend the setup.",
    result: "A repository with a self-hostable messaging stack, setup process and optional family coordination components.",
    limitation: "Uses upstream Matrix/Element components; no prebuilt Android APK is provided. Matrix room encryption does not extend to separate Family Hub data.",
    deepDive: [
      { title: "Deployment composition", body: "The architecture wraps established services into an installable system: messaging service, database, reverse proxy and private networking." },
      { title: "Security boundaries", body: "Encrypted messaging rooms and a separate household coordination app should not be described as providing identical guarantees." }
    ], githubUrl: "https://github.com/pooyabrz/family-messenger"
  },
  {
    id: "p05", slug: "doculens", title: "DocuLens", kicker: "DOCUMENT INTELLIGENCE", year: 2026,
    summary: "Document Q&A where the source passage matters more than the confident answer.",
    categories: ["AI / ML", "Tools"], featured: true, role: "Prototype · retrieval & interface",
    technologies: ["Python", "BM25", "Ollama", "Streamlit"], art: "document", color: "pink", status: "v0.1 prototype",
    problem: "Document answers can seem convincing even when they are not traceable to the original evidence.",
    approach: "Put retrieved passages, page references and verbatim-quote checks at the center of a compact question-answering workflow.",
    implementation: "BM25 retrieval over text PDFs, TXT and Markdown; Persian normalization; optional local generation through Ollama; source-ID and quotation checks in the Streamlit interface.",
    result: "A source-focused prototype for exploring text documents and optional locally generated answers.",
    limitation: "Search is lexical, and memory lasts for the current session. Semantic retrieval and persistent storage are future work; validated quotes alone do not prove every claim.",
    deepDive: [
      { title: "Evidence-first retrieval", body: "The retrieval layer surfaces candidate passages and locations to encourage inspection rather than treating a generated sentence as the primary source." },
      { title: "Honest validation", body: "Quote matching verifies that a string appears in source content; it cannot independently establish the logical soundness of a generated conclusion." }
    ], githubUrl: "https://github.com/pooyabrz/doculens"
  },
  {
    id: "p06", slug: "aquasentinel", title: "AquaSentinel", kicker: "ADAPTIVE SAMPLING", year: 2026,
    summary: "Planning where to sample water quality when the budget is five tests a day.",
    categories: ["AI / ML", "Research"], featured: true, role: "Educational simulation · Bayesian planning",
    technologies: ["Python", "Bayesian planning", "WNTR", "EPANET"], art: "sampling", color: "cyan", status: "Educational simulation",
    problem: "Sampling budgets can be small relative to the number of locations that need monitoring.",
    approach: "Explore Bayesian site selection with a synthetic water network, offline dashboard and optional hydraulic simulation stage.",
    implementation: "Synthetic network and planning logic form the primary demonstrator. A WNTR/EPANET pipeline explores an additional simulated stage.",
    result: "An educational workflow for inspecting how limited sampling resources might be allocated in a simulated setting.",
    limitation: "All scenarios are synthetic and assumptions uncalibrated; this must not be used for drinking-water safety or operational decisions.",
    deepDive: [
      { title: "Limited testing budgets", body: "The illustrative scenario allows five tests each day, requiring explicit prioritization over sampling every site." },
      { title: "Simulation is not deployment", body: "A network simulator can help structure experiments, but field deployment would require calibration, validation and environmental context beyond this demo." }
    ], githubUrl: "https://github.com/pooyabrz/AquaSentinel"
  },
  {
    id: "p07", slug: "tom-jerry-rl", title: "Tom & Jerry RL", kicker: "REINFORCEMENT LEARNING", year: 2025,
    summary: "A playful grid world for understanding how a learning agent makes choices.",
    categories: ["AI / ML", "Creative Coding"], featured: false, role: "Independent educational project",
    technologies: ["Python", "Q-learning"], art: "grid", color: "purple", status: "Learning project",
    problem: "Reinforcement learning concepts can be hard to see in action without a small, controlled environment.",
    approach: "Create a grid-world pursuit game to explore rewards, exploration and tabular policy learning.",
    implementation: "A tabular Q-learning agent learns to catch a moving target in a discrete world with obstacles.",
    result: "An educational game that makes reward and exploration behavior inspectable.",
    limitation: "It is not a general planning benchmark or evidence of performance outside the toy environment.",
    deepDive: [{title: "Small environments, clear behavior", body: "Grid worlds are intentionally simplified so the training loop and exploration decisions can be examined."}],
    githubUrl: "https://github.com/pooyabrz/Tom-and-Jerry-using-RL"
  },
  {
    id: "p08", slug: "youtube-summarizer", title: "YouTube Summarizer", kicker: "SPEECH & LANGUAGE", year: 2025,
    summary: "A Telegram workflow for turning video speech into a useful short summary.",
    categories: ["AI / ML", "Tools"], featured: false, role: "Bot workflow · integration",
    technologies: ["Python", "Whisper", "DeepSeek", "Telegram"], art: "audio", color: "orange", status: "Bot project",
    problem: "Long-form video audio takes time to review when a short text overview would suffice.",
    approach: "Chain transcription and summarization in a user-facing messaging workflow.",
    implementation: "Whisper produces transcripts, a DeepSeek API integration generates summaries, and audio chunking supports longer inputs.",
    result: "A reusable repository for an end-to-end speech-to-summary Telegram bot.",
    limitation: "Requires service credentials and configuration; transcript and summary quality vary with input audio and model behavior.",
    deepDive: [{title: "Two distinct error sources", body: "Recognition errors can affect the information available to the summarization stage, which may introduce additional mistakes."}],
    githubUrl: "https://github.com/pooyabrz/YT-Summarizer"
  },
  {
    id: "p09", slug: "brain-teaser-minigames", title: "Brain Teaser Minigames", kicker: "FULL-STACK WEB", year: 2025,
    summary: "Logic, memory and puzzle minigames with a full-stack player system.",
    categories: ["Web Applications", "Creative Coding"], featured: false, role: "Full-stack developer",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"], art: "puzzle", color: "lime", status: "Web application",
    problem: "Build a coherent app connecting small interactive games to player profiles and scoreboards.",
    approach: "Pair a browser-facing React interface with an API and persistent score storage.",
    implementation: "React frontend, Node.js/Express backend and PostgreSQL for accounts, profiles and scores.",
    result: "A full-stack portfolio project with multiple minigames and player score tracking.",
    limitation: "For detailed environment setup and supported games, consult the repository documentation.",
    deepDive: [{title: "Simple game, full product stack", body: "The project connects client-side interaction with server APIs and persistent records."}],
    githubUrl: "https://github.com/pooyabrz/brain-teaser-minigames"
  },
  {
    id: "p10", slug: "space-invader", title: "Space Invader", kicker: "DESKTOP GAME", year: null,
    summary: "An old-school desktop shooter powered by C++ and Qt.",
    categories: ["Creative Coding"], featured: false, role: "Desktop game developer",
    technologies: ["C++17", "Qt 6"], art: "space", color: "blue", status: "Earlier work",
    problem: "Practice application architecture and responsive game interaction in a desktop environment.",
    approach: "Implement a scrolling space-shooter loop with waves of enemies and destructible barriers.",
    implementation: "C++17 and Qt 6 power an X-wing-inspired player craft, TIE-style waves and a scrolling starfield.",
    result: "A source-available desktop game project with build instructions.",
    limitation: "An earlier educational game project, not a commercial release.",
    deepDive: [{title: "Stateful real-time interaction", body: "The project exercises frame-based rendering, keyboard input and collision-oriented gameplay structures."}],
    githubUrl: "https://github.com/pooyabrz/space-invader"
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const categories = ["All", "AI / ML", "Web Applications", "Research", "Creative Coding", "Tools"] as const;
export function getProject(slug: string) { return projects.find(p => p.slug === slug); }
