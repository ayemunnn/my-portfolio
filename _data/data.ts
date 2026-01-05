export const projects = [
  {
    name: "PaperSleuth (OCR → Summary Intelligence)",
    slug: "papersleuth",
    show: "Streamlit OCR app for scanned PDFs; extracts + summarizes meaningful info using Mistral via vLLM",
    desc: "PaperSleuth is an OCR-powered document understanding app that lets users upload scanned PDFs (handwritten or printed) and returns structured, summarized insights. Built to automate information flow for small businesses and digitize archived government documents.",
    lang: [
      "Python",
      "Streamlit",
      "pdf2image",
      "Tesseract OCR",
      "vLLM",
      "Mistral-Small-3.1-24B-Instruct",
      "Hugging Face",
    ],
    img: "papersleuth.png",
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "Scanned documents are hard to search and summarize, forcing teams to manually read and extract key details, which is slow, error-prone, and expensive at scale.",
    solution:
      "Built an end-to-end OCR + LLM pipeline that converts scanned pages into text, then generates concise, meaningful summaries and extracted insights through a Streamlit UI—reducing manual effort and speeding up document processing.",
  },

  {
    name: "Psychology Chatbot (TinyLlama SFT + DPO)",
    slug: "psychology-chatbot",
    show: "Fine-tuned TinyLlama on psychology Q/A with SFT + DPO; deployed as a chatbot",
    desc: "A domain-focused psychology assistant fine-tuned on a dataset containing good vs unwanted responses. Trained using supervised fine-tuning and preference optimization (DPO) to produce supportive, helpful outputs.",
    lang: [
      "Python",
      "Hugging Face Transformers",
      "LoRA / QLoRA",
      "SFT",
      "DPO",
      "Streamlit",
    ],
    img: "psychology-chatbot.png",
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "General chatbots can produce inconsistent tone and quality for sensitive psychological questions, which reduces trust and usefulness.",
    solution:
      "Fine-tuned a compact model using instruction tuning + preference learning to consistently produce calm, helpful responses while discouraging negative/unhelpful patterns, then wrapped it in a simple deployed chatbot interface.",
  },

  {
    name: "Detecting Fake Product Reviews (NLP + ML)",
    slug: "fake-product-reviews",
    show: "Sentiment + classification pipeline to detect fake vs true reviews (course project)",
    desc: "A text mining project to analyze review sentiment and train ML models for detecting potentially fake reviews using a labeled dataset (fake/true). Includes visualizations, evaluation, and a report aligned to course guidelines.",
    lang: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "TextBlob / VADER",
      "Matplotlib / Plotly",
    ],
    img: "fake-reviews.png",
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "Fake reviews manipulate purchase decisions and distort product ratings, making it hard for customers and businesses to trust feedback signals.",
    solution:
      "Built an NLP feature pipeline (sentiment + text features) and trained classification models to flag suspicious reviews, backed by evaluation metrics and clear visual reporting for insights and decision support.",
  },

  {
    name: "Apple Innovation & Buzz Dashboard",
    slug: "apple-innovation-dashboard",
    show: "Dashboard analyzing iPhone trends + declining buzz using Google search volume signals",
    desc: "A market-facing analytics dashboard exploring Apple's innovation narrative: iPhone revenue/sales trends, active users, and a 'buzz' proxy measured via search interest and launch attention signals.",
    lang: [
      "Power BI",
      "Python",
      "Data Modeling",
      "Dashboard Design",
      "Google Trends (or search volume data)",
    ],
    img: "apple-dashboard.png",
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "Tech narratives often rely on opinions; without data, it’s hard to quantify whether 'innovation is declining' or if demand is shifting.",
    solution:
      "Created a structured dashboard that combines financial/product signals with a measurable buzz proxy, enabling evidence-based storytelling and clearer trend interpretation.",
  },

  {
    name: "Stock Market Analysis with Azure (Pipeline + BI)",
    slug: "azure-stock-analysis",
    show: "Automated stock data ingestion + modeling + dashboarding (ADF/SQL/Python/Power BI)",
    desc: "A data engineering + BI project that automates stock data collection (e.g., via yfinance), stores it in SQL, and visualizes trends and KPI summaries in Power BI to support analysis and forecasting experiments.",
    lang: [
      "Azure Data Factory",
      "SQL",
      "Python",
      "yfinance",
      "Power BI",
      "ETL / ELT",
    ],
    img: "azure-stocks.png",
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "Manual tracking of stocks is time-consuming and inconsistent, and ad-hoc analysis makes it hard to compare trends across time reliably.",
    solution:
      "Designed an automated pipeline to ingest and model market data consistently, then built dashboards for trend exploration and repeatable reporting—setting a foundation for predictive extensions.",
  },

  {
    name: "AI EDA + Auto-Model Selector (Prototype)",
    slug: "ai-eda-model-selector",
    show: "CSV upload → automated EDA → cleaning → standardization → model suggestion (prototype flow)",
    desc: "A prototype AI agent that ingests a dataset, runs exploratory analysis, recommends cleaning steps, applies standardization methods, and suggests an appropriate ML model for the dataset type.",
    lang: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "EDA Automation",
      "LLM-assisted Analysis (Gemini/OpenAI optional)",
    ],
    img: "papersleuth.png", // Reusing this for now as placeholder
    link: "https://github.com/ayemunnn",
    git: "https://github.com/ayemunnn",
    problem:
      "Many learners and teams waste time repeating the same EDA/cleaning steps and struggle to pick a reasonable baseline model quickly.",
    solution:
      "Built a guided pipeline that automates routine EDA + preprocessing and produces a clear, opinionated model recommendation, accelerating time-to-first-result for new datasets.",
  },
];
