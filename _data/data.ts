export type Highlight = {
  metric: string;
  label: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  slug: string;
  category: string;
  featuredMetric: string;
  show: string;
  desc: string;
  lang: string[];
  img?: string;
  link?: string;
  git?: string;
  problem: string;
  solution: string;
  impact: string[];
};

export const profile = {
  name: "Aman Kumar",
  title: "Data Analyst, BI Developer & Automation Builder",
  location: "Ottawa, Canada",
  email: "amankumark4@gmail.com",
  phone: "250-815-0878",
  github: "https://github.com/ayemunnn",
  linkedin: "https://www.linkedin.com/in/aman-kumar-a9550520b/",
  resume: "/Resume.pdf",
  summary:
    "Analyst with hands-on experience building end-to-end data pipelines, dashboards, machine learning models, and market research workflows that turn messy data into clear business decisions.",
  intro:
    "I work across analytics, reporting, and automation, combining SQL, Python, Power BI, and data validation practices to improve accuracy, speed up decision-making, and make data easier for teams to trust.",
};

export const highlights: Highlight[] = [
  {
    metric: "40-55%",
    label: "manual review effort reduced",
    detail: "PaperSleuth transformed unstructured documents into validated JSON outputs.",
  },
  {
    metric: "25%",
    label: "faster stakeholder review cycles",
    detail: "Structured reporting at Insight Weavers cut review time and improved clarity.",
  },
  {
    metric: "1,500+",
    label: "employee records analyzed",
    detail: "HR analytics reporting surfaced attrition and workforce trends for decision-making.",
  },
  {
    metric: "1,000+",
    label: "events processed per hour",
    detail: "A Kafka and PostgreSQL pipeline enabled near real-time analytics with sub-5 second latency.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Tools",
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Oracle",
      "Power BI (DAX)",
      "Tableau",
      "Excel",
    ],
  },
  {
    title: "Analytics & BI",
    items: [
      "KPI development",
      "Trend analysis",
      "Variance analysis",
      "Dashboard development",
      "Data visualization",
      "Stakeholder reporting",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL / ELT",
      "Data validation",
      "Apache Kafka",
      "Real-time processing",
      "Pipeline design",
      "Workflow automation",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Regression",
      "Classification",
      "NLP",
      "Sentiment analysis",
      "LLM integration",
      "RAG pipelines",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Kloudtech Solutions",
    role: "Software Developer Intern | Data & Process Automation",
    location: "Remote",
    date: "Dec 2025 - Mar 2026",
    bullets: [
      "Built and maintained ETL pipelines using Python and SQL to clean and validate multi-source datasets.",
      "Developed Power BI dashboards supporting internal and client-facing analytics.",
      "Automated data validation workflows to improve reporting accuracy and efficiency.",
      "Deployed and monitored static web apps using Microsoft Azure.",
      "Collaborated with cross-functional teams to align data outputs with business needs.",
    ],
  },
  {
    company: "Insight Weavers",
    role: "Business Analyst",
    location: "Ottawa, Canada",
    date: "Sep 2025 - Dec 2025",
    bullets: [
      "Generated weekly and ad-hoc reports using SQL and Excel for operational insights.",
      "Conducted trend and variance analysis to identify anomalies and performance shifts.",
      "Reduced stakeholder review time by 25% through structured reporting formats.",
      "Implemented validation checks to improve consistency and data accuracy.",
      "Translated business requirements into practical reporting and analytics outputs.",
    ],
  },
  {
    company: "Lambton College",
    role: "Team Lead",
    location: "Ottawa, Canada",
    date: "May 2025 - Sep 2025",
    bullets: [
      "Coordinated schedules, milestones, and deliverables for a $25K initiative.",
      "Managed documentation, meeting updates, and stakeholder communication.",
      "Presented progress summaries to technical and non-technical audiences.",
      "Improved project visibility and reporting clarity by approximately 15%.",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "Customer Support Executive",
    location: "Noida, India",
    date: "Jul 2023 - Apr 2024",
    bullets: [
      "Analyzed high-volume transactional data to identify recurring issues and root causes.",
      "Tracked issue trends and supported operational improvements through reporting.",
      "Documented workflows and defects to improve process consistency.",
      "Collaborated with technical teams to resolve data discrepancies.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "PaperSleuth",
    slug: "papersleuth",
    category: "OCR automation",
    featuredMetric: "40-55% less manual review effort",
    show:
      "OCR and analytics automation workflow that converts unstructured documents into structured JSON and usable summaries.",
    desc:
      "PaperSleuth is an end-to-end document intelligence project built to process scanned files, extract useful text, validate the result, and shape outputs for analytics, audit, and compliance-style workflows.",
    lang: [
      "Python",
      "Streamlit",
      "Tesseract OCR",
      "pdf2image",
      "NLP",
      "JSON pipelines",
    ],
    img: "papersleuth.png",
    link: "https://papersleuth.streamlit.app/",
    git: "https://github.com/ayemunnn/OCR",
    problem:
      "Teams lose time when important information is trapped inside scanned or poorly structured documents that cannot be searched, validated, or summarized quickly.",
    solution:
      "I built a pipeline that extracts text from scanned PDFs, validates outputs, summarizes the content, and turns raw documents into structured JSON that can flow into reporting and downstream analytics.",
    impact: [
      "Reduced manual document review effort by 40-55%.",
      "Added validation and error handling to improve output reliability.",
      "Designed outputs for audit, compliance, and analytics workflows.",
    ],
  },
  {
    name: "HR Analytics & Workforce Reporting",
    slug: "hr-analytics-workforce-reporting",
    category: "Business intelligence",
    featuredMetric: "1,500+ employee records analyzed",
    show:
      "Power BI reporting project focused on workforce trends, attrition signals, and cleaner people analytics.",
    desc:
      "This project explored workforce and attrition data to surface operational patterns, improve reporting quality, and support business decision-making through clear dashboards and validation-driven reporting.",
    lang: ["Power BI", "Excel", "SQL", "Data validation", "Workforce analytics"],
    problem:
      "HR teams often struggle to see attrition patterns clearly when workforce data is spread across inconsistent records and static reports.",
    solution:
      "I cleaned and validated employee data, analyzed trend patterns, and built Power BI dashboards that made workforce reporting easier to interpret and act on.",
    impact: [
      "Analyzed 1,500+ employee records to identify attrition and workforce trends.",
      "Improved data accuracy by 35% through stronger validation processes.",
      "Created dashboards to support reporting and decision-making.",
    ],
  },
  {
    name: "PDF Querying System Using NLP & LangChain",
    slug: "pdf-querying-system",
    category: "RAG and NLP",
    featuredMetric: "Interactive document querying workflow",
    show:
      "Retrieval-style document analysis system for extracting insights from complex PDF collections.",
    desc:
      "An AI document querying workflow built to make dense PDF collections easier to search, summarize, and explore through natural-language questions.",
    lang: ["Python", "LangChain", "NLP", "RAG", "Document chunking"],
    git: "https://github.com/ayemunnn/Pdf-Question-Answering-App",
    problem:
      "Dense PDF documents are difficult to review quickly, especially when users need specific answers buried across many pages.",
    solution:
      "I built a retrieval-oriented workflow that extracts document content, prepares it for search, and allows users to ask targeted questions to uncover key insights faster.",
    impact: [
      "Automated document analysis workflows to improve review efficiency.",
      "Extracted insights from legal and financial documents using NLP techniques.",
      "Built an interactive interface for natural-language PDF querying.",
    ],
  },
  {
    name: "Apple Product Market Research Dashboard",
    slug: "apple-product-market-research",
    category: "Market intelligence",
    featuredMetric: "10,000+ data points analyzed",
    show:
      "Market intelligence dashboard measuring product engagement, sentiment, and declining buzz signals.",
    desc:
      "A research-driven dashboard examining Apple product performance through search interest, engagement proxies, and trend modeling to support product and marketing decisions with clearer evidence.",
    lang: [
      "Power BI",
      "Python",
      "Trend modeling",
      "Sentiment analysis",
      "Dashboard design",
    ],
    img: "apple-dashboard.png",
    problem:
      "Product conversations often rely on opinions, making it hard to quantify whether consumer interest is actually weakening or simply changing form.",
    solution:
      "I combined market signals, sentiment cues, and trend analysis in a dashboard that translated scattered data into a clearer story about product engagement.",
    impact: [
      "Analyzed 10,000+ data points across multiple sources.",
      "Identified an estimated 30% decline in engagement.",
      "Delivered insight to support product and marketing strategy decisions.",
    ],
  },
  {
    name: "Real-time Market Dashboard",
    slug: "real-time-market-dashboard",
    category: "Streaming analytics",
    featuredMetric: "1,000+ events per hour under 5s latency",
    show:
      "Real-time analytics pipeline using Kafka, PostgreSQL, and Python for fast operational monitoring.",
    desc:
      "A streaming data project that ingested market-style events, stored them in PostgreSQL, and enabled near real-time analytics for monitoring and dashboarding use cases.",
    lang: [
      "Apache Kafka",
      "PostgreSQL",
      "Python",
      "Streaming pipelines",
      "Real-time analytics",
    ],
    git: "https://github.com/ayemunnn/Stock-Dashboard",
    problem:
      "Traditional batch reporting can hide rapid changes in fast-moving datasets and delays visibility when teams need timely signals.",
    solution:
      "I designed a Kafka-based ingestion flow and database pipeline that supported frequent event processing and made near real-time analytics possible.",
    impact: [
      "Processed 1,000+ events per hour with latency under 5 seconds.",
      "Enabled near real-time monitoring and analytics dashboards.",
      "Strengthened my hands-on experience with event-driven data pipelines.",
    ],
  },
  {
    name: "Stock Market Analysis with Azure",
    slug: "azure-stock-analysis",
    category: "Data engineering",
    featuredMetric: "Automated ingestion and reporting pipeline",
    show:
      "Azure-based stock data workflow connecting ingestion, SQL modeling, and Power BI reporting.",
    desc:
      "A data engineering and BI project that automated stock data collection, modeled it in SQL, and exposed trends and KPI views in Power BI to support repeatable analysis.",
    lang: [
      "Azure Data Factory",
      "SQL",
      "Python",
      "yfinance",
      "Power BI",
      "ETL / ELT",
    ],
    img: "azure-stocks.png",
    problem:
      "Manual market tracking is inconsistent and difficult to scale when analysts need repeatable reports across multiple time periods and securities.",
    solution:
      "I designed an automated ingestion and modeling flow that standardized the data and connected it to dashboards for ongoing analysis.",
    impact: [
      "Automated stock data collection and transformation workflows.",
      "Created SQL-backed reporting models and KPI views.",
      "Built a foundation for forecasting and extension work.",
    ],
  },
  {
    name: "Detecting Fake Product Reviews",
    slug: "fake-product-reviews",
    category: "NLP and ML",
    featuredMetric: "Classification pipeline for suspicious reviews",
    show:
      "Sentiment and text classification workflow for identifying potentially fake product reviews.",
    desc:
      "A text mining and machine learning project that combined sentiment analysis, feature engineering, and model evaluation to classify fake versus genuine reviews.",
    lang: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "VADER / TextBlob",
      "Matplotlib",
    ],
    img: "fake-reviews.png",
    problem:
      "Fake reviews distort customer trust and make product ratings less reliable for both buyers and businesses.",
    solution:
      "I built an NLP feature pipeline with sentiment and classification models to flag suspicious reviews and support more trustworthy decision-making.",
    impact: [
      "Combined sentiment and text features into a usable ML pipeline.",
      "Benchmarked models with clear evaluation outputs.",
      "Translated findings into simple visual reporting.",
    ],
  },
  {
    name: "Psychology Chatbot",
    slug: "psychology-chatbot",
    category: "LLM fine-tuning",
    featuredMetric: "SFT and DPO workflow on a compact model",
    show:
      "Support-oriented psychology assistant fine-tuned with supervised and preference-based training.",
    desc:
      "A domain-focused chatbot project built by fine-tuning TinyLlama on psychology-style Q&A data, using both supervised fine-tuning and DPO to improve tone and response quality.",
    lang: ["Python", "Transformers", "LoRA / QLoRA", "SFT", "DPO", "Streamlit"],
    img: "psychology-chatbot.png",
    problem:
      "General chatbots can be inconsistent when responding to sensitive questions where tone, clarity, and helpfulness matter.",
    solution:
      "I fine-tuned a compact model on domain-focused data and wrapped it in a simple interface to produce more stable, supportive responses.",
    impact: [
      "Explored preference optimization with DPO.",
      "Applied fine-tuning methods on a compact open model.",
      "Built a usable chatbot interface for testing and iteration.",
    ],
  },
];

export const education = [
  {
    school: "Lambton College",
    credential: "Post Graduate Diploma in Business Analytics",
    location: "Ottawa, Canada",
    date: "Dec 2025",
  },
  {
    school: "Ambedkar Institute of Technology (GGSIPU)",
    credential: "Bachelor of Computer Applications",
    location: "New Delhi, India",
    date: "Jul 2023",
  },
];

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "Lean Six Sigma White Belt",
  "Certified Scrum Master",
];
