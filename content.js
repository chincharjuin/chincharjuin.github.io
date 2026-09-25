/* ============================================================
   CONTENT.JS — every word on this site lives in this file.

   HOW TO EDIT
   - Change the text between the quotes/backticks, save, refresh.
     No build step, no other files to touch.
   - Long strings use backticks (`...`) so you can wrap lines.
   - You may include a little HTML inside any string:
       <span class="tbadge">AWS</span>   -> small inline tech tag
       <a href="https://example.com">x</a> -> a link
   - Lists are arrays: duplicate or delete a block to add/remove.
   - Set a field to "" (empty) and it will be hidden.

   NOTE ON WHAT'S FILLED IN
   - Prose sections (hero, about, off the clock, projects) use a
     first-person rewrite as a starting point — edit freely.
   - Experience bullets are verbatim from the current site so no
     resume fact is lost while you rework the voice.
   ============================================================ */

window.CONTENT = {

  /* ---------- Page metadata (browser tab + social share cards) ---------- */
  meta: {
    title: "Char Juin Chin · Senior Data Scientist & AI Engineer",
    description: "Char Juin Chin builds production GenAI systems at Singapore Airlines — agents, retrieval, and evaluation. Also: choir, guitar, hiking, coffee.",
  },

  /* ---------- Navigation (top bar) ---------- */
  nav: [
    { label: "About", href: "#about" },
    { label: "Off the clock", href: "#offclock" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Publications", href: "#publications" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  /* ---------- Hero (top of page) ---------- */
  hero: {
    eyebrow: "Singapore · UTC+8",
    name: "Char Juin Chin",
    role: "Senior Data Scientist & AI Engineer",
    org: "Singapore Airlines",
    tagline: `I build production GenAI systems end to end — agents that can run code and remember things, retrieval for a public chatbot, and the evaluation infrastructure that keeps them trustworthy. Off the clock: choir, guitar, hiking trails, and a home Kubernetes cluster.`,
    photo: {
      src: "assets/images/personal/chincharjuin.jpg", // options: chincharjuin.jpg (5.8MB), chincharjuin2.jpg (8.3MB), sidebar.jpg (610KB)
      alt: "Portrait of Char Juin Chin",
      caption: "", // e.g. "me, probably" — leave "" to hide
    },
    ctas: [
      { label: "Read my résumé", href: "assets/pdf/chincharjuin_resume.pdf", primary: true },
      { label: "Email me", href: "mailto:chincharjuin@berkeley.edu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/chincharjuin" },
    ],
  },

  /* ---------- About ---------- */
  about: {
    heading: "The short version",
    paragraphs: [
      `I'm a senior data scientist in Singapore Airlines' IT division. I own the GenAI stack end to end: agent harnesses that can execute code and keep graph-based memory, the retrieval infrastructure behind our public chatbot, and the evaluation platform that decides whether any of it is good enough to ship.`,
      `I got here through language. BA in Computer Science and Linguistics from UC Berkeley — 4.0 GPA, Dean's List — and my first NLP paper (2017) was on predicting punctuation with a recurrent neural network: a very small question about how sentences end. It turned into gesture-annotation research for the linguistics department, document pipelines for nuclear science literature at NucScholar, and eventually production AI.`,
      `The work I didn't expect to love: emceeing the annual Singapore Airlines business meeting in front of 2,000 people, advising the Group CEO on frontier AI through our reverse-mentoring programme, and mentoring interns who end up owning real production features. I speak English, Chinese, and Japanese.`,
    ],
  },

  /* ---------- Off the clock (new section — the personal bit) ---------- */
  offclock: {
    heading: "Off the clock",
    lede: `The non-AI parts of my life, in no particular order.`,
    items: [
      { name: "Singing", text: `Music director of Nikkei Choral Ensemble — a 14-member a cappella group. I wrote a stable-matching web app so we could allocate solos by ranked-choice voting; three leadership teams have used it since. Still singing.` },
      { name: "Guitar", text: `An ongoing project. It's going the way all ongoing projects go.` },
      { name: "Games", text: `My default off switch. Ask me what I'm playing right now.` },
      { name: "Hiking", text: `Singapore has more trails than you'd think, and they're how I clear my head.` },
      { name: "Coffee", text: `I brew at home and take it a little too seriously.` },
    ],
  },

  /* ---------- Experience (bullets are verbatim from the current site) ---------- */
  experience: {
    heading: "Experience",
    lede: `Mostly Singapore Airlines, plus the research and music that got me here.`,
    entries: [

      {
        logo: "assets/images/logos/singapore-airlines.svg",
        title: "Senior Data Scientist, Singapore Airlines",
        date: "Sep 2024 – Present",
        sub: "Data Analytics, Information Technology Division",
        pillars: [
          {
            title: "Enterprise Evaluation Platform",
            bullets: [
              `Led the enterprise evaluation platform from POC to production on <span class="tbadge">AWS</span>: deterministic code checks, historical comparisons, and LLM-as-a-judge evaluations for the production agent fleet.`,
              `Built the <span class="tbadge">React</span>/<span class="tbadge">Vite</span> frontend so business users can author evaluation suites in natural language; <span class="tbadge">FastAPI</span> + <span class="tbadge">Pydantic</span> backend with <span class="tbadge">LangGraph</span> orchestration and <span class="tbadge">PostgreSQL</span> persistence.`,
              `Integrated the internal use-case registry with the <span class="tbadge">LiteLLM</span> gateway and <span class="tbadge">SigNoz</span> telemetry for cost and latency observability across enterprise GenAI applications.`,
              `Developed an SDK for centralised guardrail management and metrics monitoring on sensitive-data applications.`,
            ],
          },
          {
            title: "Agentic Acceleration",
            bullets: [
              `Designed asynchronous tool execution via webhooks in the internal agentic harness (<span class="tbadge">Google ADK</span>), enabling long-running tools.`,
              `Prototyped an agentic memory layer that explores databases (<span class="tbadge">Apache AGE</span>) and performs staff outreach to fill context gaps.`,
              `Built local testing environments (<span class="tbadge">Ministack</span> AWS emulation, internal LLM gateway) and a framework for evaluating coding models with <span class="tbadge">SonarQube</span> static analysis plus LLM-based evaluation.`,
              `Prototyped a voice-to-voice chatbot (<span class="tbadge">Gemini</span>) guiding staff through IAM password resets; ran build-vs-buy analysis across 6 vendor solutions and presented to management.`,
            ],
          },
          {
            title: "Customer-Facing Applications",
            bullets: [
              `Own the knowledge base underpinning the public customer-facing chatbot: <span class="tbadge">OpenSearch</span> hybrid search, boosting, <span class="tbadge">BGE</span> embedding and reranking. On-call engineer for P0 readiness and severity-1 incidents.`,
              `Automated knowledge-base ingestion with semantic chunking (<span class="tbadge">DynamoDB</span> persistence, <span class="tbadge">Splunk</span> alerting); a daily pipeline replacing manual effort.`,
              `Developed Smart Search: RAG over <span class="tbadge">Qdrant</span> and BM25 with <span class="tbadge">Datadog</span> monitoring, plus a web portal for business users to self-service the non-production knowledge base.`,
            ],
          },
          {
            title: "Internal Productivity",
            bullets: [
              `Built a DAG-based workflow turning natural-language queries into insights on real-time customer feedback.`,
              `Led migration of the GenAI topic-discovery application from EC2 to Lambda; local testing environments with an MLOps pipeline for Lambda orchestration.`,
              `Fine-tuned open-weight SLMs with <span class="tbadge">Unsloth</span> and <span class="tbadge">PyTorch</span> for on-premise customer feedback classification.`,
            ],
          },
          {
            title: "Leadership & Beyond",
            bullets: [
              `Advised the Group CEO on frontier AI through Singapore Airlines' reverse-mentoring programme.`,
              `Mentored 5 interns in system design and domain knowledge; they independently owned and delivered production features.`,
              `Served on the interviewing committee for data scientist and software engineer hires.`,
              `Cybersecurity liaison: advised on enterprise-wide guardrails and evaluations to detect and prevent GenAI-based attacks.`,
              `Emceed the 102nd Singapore Airlines Business Meeting; introduced the C-suite to over 2,000 staff and business partners.`,
              `Presided over the Fun Club, a 17-member corporate team planning cultural celebrations for a 600-person department.`,
            ],
          },
        ],
      },

      {
        logo: "assets/images/logos/total-wellness.svg",
        title: "Freelance Developer, Total Wellness Initiative Singapore",
        date: "Aug 2024 – Dec 2024",
        bullets: [
          `Built a full-stack web app gamifying wellness habits for a social enterprise's pilot programme (<span class="tbadge">Next.js</span>, <span class="tbadge">Mantine</span>, <span class="tbadge">Firebase</span>); since adopted for full-product development.`,
        ],
      },

      {
        logo: "assets/images/logos/nuclear-data-group.svg",
        title: "Student Researcher, NucScholar / Nuclear Data Group",
        date: "Sep 2021 – May 2023",
        bullets: [
          `Built multi-class and multi-label classification and document vectorisation pipelines for nuclear science literature: Latent Semantic Analysis, Latent Dirichlet Allocation (<span class="tbadge">Gensim</span>, <span class="tbadge">NLTK</span>).`,
          `Presented findings to over 50 attendees at the 2022 Division of Nuclear Physics conference.`,
        ],
      },

      {
        title: "Linguistics Research Apprentice Practicum, UC Berkeley",
        date: "Undergraduate research",
        bullets: [
          `Annotated over 200 television clips with gesture annotations in ELAN for co-speech gesture research.`,
        ],
      },

      {
        logo: "assets/images/logos/nikkei-choral.svg",
        title: "Music Director, Nikkei Choral Ensemble",
        date: "May 2023 – May 2024",
        bullets: [
          `Directed a 14-member a cappella group across two semesters: practices, budgeting, communications, event planning.`,
          `Developed a web application using Stable Matching to allocate solos via ranked-choice voting; used by three subsequent leadership teams.`,
        ],
      },

      {
        logo: "assets/images/logos/uc-berkeley.svg",
        title: "University of California, Berkeley",
        date: "Aug 2020 – May 2024",
        bullets: [
          `BA in Computer Science and Linguistics. 4.0 GPA, Dean's List.`,
          `CS: machine learning, NLP, databases, algorithms, security. Linguistics: phonetics, syntax, sociolinguistics, Japanese translation.`,
        ],
      },

    ],
  },

  /* ---------- Projects (descriptions are a first-person rewrite — edit freely) ---------- */
  projects: {
    heading: "Things I've built",
    lede: `What they do, and what they're built from.`,
    items: [
      {
        name: "Enterprise Evaluation Platform",
        meta: "production · enterprise",
        description: `How we know our agents are actually good: deterministic code checks, historical comparisons, and LLM-as-a-judge evaluations for the production agent fleet. Business users write evaluation suites in plain English. Took it from POC to production on AWS.`,
        tags: ["React", "Vite", "FastAPI", "LangGraph", "PostgreSQL"],
      },
      {
        name: "Agentic Harness & Memory",
        meta: "internal platform",
        description: `The internal harness our teams build agents on: async tool execution via webhooks (Google ADK), a memory layer that explores databases and even reaches out to people to fill context gaps, plus local testing environments so nobody needs the real thing to try things.`,
        tags: ["Google ADK", "MCP", "Apache AGE", "Ministack"],
      },
      {
        name: "Chatbot Knowledge Base",
        meta: "public-facing",
        description: `The retrieval layer behind our public chatbot — hybrid search, boosting, reranking — and a daily pipeline that ingests new knowledge automatically instead of someone doing it by hand.`,
        tags: ["OpenSearch", "BGE", "DynamoDB", "Splunk"],
      },
      {
        name: "Customer Feedback Intelligence",
        meta: "internal tooling",
        description: `Ask a question in plain English, get insights from real-time customer feedback. A DAG-based workflow on top, fine-tuned open-weight SLMs for on-premise classification underneath.`,
        tags: ["DAG workflows", "Unsloth", "PyTorch"],
      },
      {
        name: "Secure GenAI Guardrails",
        meta: "security",
        description: `Guardrails and evaluations to catch GenAI-based attacks before they land, plus an SDK so teams can centralise sensitive-data controls instead of reinventing them.`,
        tags: ["Guardrail SDK", "SonarQube"],
      },
      {
        name: "Personal K8s Lab",
        meta: "personal",
        description: `The fun one: a 3-node Proxmox cluster running Kubernetes at home. OpenTelemetry, VictoriaMetrics, Grafana, vLLM + Unsloth for open-weight models, Forgejo CI/CD — and a Rust-based agent memory layer I'm building.`,
        tags: ["Kubernetes", "vLLM", "Rust"],
      },
    ],
  },

  /* ---------- Skills (chips are strings; use { label, note } for special ones) ---------- */
  skills: {
    heading: "What I work with",
    lede: `The honest list — what I reach for every week.`,
    groups: [
      { name: "Frontend", chips: ["React", "Tanstack Router / Query", "Shadcn", "Tailwind", "Mantine"] },
      { name: "Backend", chips: ["FastAPI", "Pydantic"] },
      { name: "Databases", chips: ["PostgreSQL", "Apache AGE", "DynamoDB", "Redis", "Qdrant"] },
      { name: "Agentic AI", chips: ["LangGraph", "Google ADK", "RAG", "MCP"] },
      { name: "Observability", chips: ["SigNoz", "OpenTelemetry", "Datadog", "Splunk"] },
      { name: "Programming Languages", chips: ["Python", "TypeScript", "SQL", "HTML", { label: "Rust", note: "learning" }] },
      { name: "Environments", chips: ["AWS", "Kubernetes", "Docker"] },
      { name: "Spoken Languages", chips: ["English (native)", "Chinese (native)", "Japanese (conversational)"] },
    ],
  },

  /* ---------- Publications & awards ---------- */
  publications: {
    heading: "One paper, two awards",
    paper: {
      logo: "assets/images/logos/a-star-i2r.svg",
      tag: "Publication",
      title: "Punctuation prediction using a bidirectional recurrent neural network with part-of-speech tagging",
      authors: "Chin, C.J., Wei, R., D'Haro, L. & Banchs, R.",
      venue: "IEEE Region 10 Conference (TENCON), 2017, pp. 1806–1811",
      doi: { label: "doi: 10.1109/TENCON.2017.8228151", href: "https://ieeexplore.ieee.org/document/8228151" },
      note: `Bidirectional recurrent neural network in TensorFlow with an attention mechanism, biased decoding, and part-of-speech tagging. Research at A*STAR's Institute for Infocomm Research.`,
    },
    awards: {
      heading: "Awards & scholarships",
      items: [
        {
          title: "Singapore Airlines Open Overseas Scholarship",
          date: "Jul 2019",
          text: `One of two recipients of Singapore Airlines' premier full-ride overseas scholarship, in recognition of outstanding academic and extra-curricular performance.`,
        },
        {
          title: "Undergraduate Research Apprenticeship Program Summer Fellow",
          date: "Summer 2022",
          text: `Anselm MPS Fund sponsorship to perform research, in recognition of contributions to the NucScholar project.`,
        },
      ],
    },
  },

  /* ---------- Footer ---------- */
  footer: {
    name: "Char Juin Chin",
    email: "chincharjuin@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/chincharjuin",
    github: "https://github.com/chincharjuin",
    colophon: `Hand-coded HTML + CSS — no framework, no page builder.`,
    note: `Singapore · chincharjuin.github.io`,
  },

};
