import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import { 
  HardHat, BrainCircuit, RefreshCcw, TrendingUp, Coffee, Mic, 
  Briefcase, Armchair, Scale, ListChecks, FileCog, FileScan, 
  Heart, Telescope 
} from 'lucide-react';

// Project icon mapping
export const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "IngePro": <HardHat className="w-10 h-10 text-orange-500" />,
  "Solveur": <BrainCircuit className="w-10 h-10 text-purple-500" />,
  "AI Refill": <RefreshCcw className="w-10 h-10 text-blue-500" />,
  "AIROI": <TrendingUp className="w-10 h-10 text-green-500" />,
  "COFFEE": <Coffee className="w-10 h-10 text-amber-700" />,
  "DICTA": <Mic className="w-10 h-10 text-slate-600" />,
  "GIGR": <Briefcase className="w-10 h-10 text-indigo-500" />,
  "LATINA": <Armchair className="w-10 h-10 text-rose-400" />,
  "Legislazuli": <Scale className="w-10 h-10 text-blue-800" />,
  "OCD": <ListChecks className="w-10 h-10 text-teal-500" />,
  "prepAIr": <FileCog className="w-10 h-10 text-gray-500" />,
  "TRAGALDABAS": <FileScan className="w-10 h-10 text-emerald-600" />,
  "WifeApp": <Heart className="w-10 h-10 text-red-500" />,
  "Carl": <Telescope className="w-10 h-10 text-cyan-400" />
};

// Project data for cards
const initialProjects = [
  {
    id: 1,
    name: "IngePro",
    logo: "/ingepro_logo.png",
    url: "https://ingepro.app",
    status: "POC",
    description: "AI-Powered Construction Management Platform for real-time project tracking, workforce optimization, and inventory control in multiple settings. Delivers 400% ROI through 30% reduction in project management overhead and 25% reduction in material waste. IngePro exceeds industry benchmarks by integrating AI analytics and insights into the platform DNA. AI-Driven Automation provides predictive analytics for project completion timelines and resource requirements, risk assessment algorithms identifying bottlenecks before they occur, material efficiency optimization through consumption pattern analysis, and natural language insights for executive reporting. Uses Next.js 14 + TypeScript for reliability at scale, PostgreSQL with Redis caching for handling 10,000+ daily transactions, Real-time GPS tracking, automated time validation with photo verification, OpenAI GPT-3.5-turbo for expert-domain-specific analytics, built-in RBAC and GDPR-compliant audit logging for compliance, and AWS managed infrastructure for true enterprise-grade reliability. Demonstrates ability to build a complete B2B SaaS that generates immediate ROI in a billion-dollar market. Shows mastery of complex business logic, multi-tenant systems, and meaningful AI integration at scale."
  },
  {
    id: 3,
    name: "Solveur",
    logo: "/solveur_logo.png",
    url: "https://solveur.pro",
    status: "DEV",
    description: "Solveur is an AI-powered business problem-solving agent that companies can deploy within 24 hours to automatically handle up to 75% of their customer interactions. It uses advanced Augmented Recovery-Generation (RAG) technology with a Pinecone vector database and Next.js architecture to create intelligent agents that learn from enterprise knowledge bases and respond like expert employees. Customers can save thousands of dollars per month in support costs while improving response times from hours to seconds. State-of-the-art features include multi-agent orchestration, predictive customer support that prevents issues before they occur, and autonomous workflow automation that goes beyond answering questions to truly resolve end-to-end business processes."
  },
  {
    id: 5,
    name: "AI Refill",
    logo: "",
    url: "#",
    status: "PROD",
    description: "AI Refill is an enterprise-grade inventory optimization platform that uses automated forecasting, statistical optimization, and role-based intelligence to eliminate stockouts, reduce overstock, and streamline purchasing operations. Built on a modern AWS architecture with a unified Node.js API, Dagster-orchestrated ML pipelines, and Next.js dashboards, it replaces fragmented legacy systems with a single, scalable solution that predicts demand, computes optimal reorder parameters, and delivers actionable insights to purchasing, sales, warehouse, finance, and management teams. The system integrates Prophet forecasting, SageMaker model management, automated ROP/safety-stock calculation, Redis caching, and Aurora Serverless PostgreSQL to ensure fast, reliable, and explainable decision-making—resulting in higher service levels, reduced working capital, and significantly improved operational efficiency."
  },
  {
    id: 6,
    name: "AIROI",
    logo: "",
    url: "#",
    status: "POC",
    description: "AIROI is a precision-built ROI calculator that quantifies the financial impact of AI initiatives—translating automation gains, labor savings, error reduction, and revenue uplift into clear payback periods and executive-ready metrics. It provides a structured model for evaluating AI investments by combining cost baselines, operational efficiencies, and projected value creation into a transparent business case that decision-makers can trust. Designed for consultants and enterprises adopting AI, AIROI delivers fast, defensible ROI estimates that strengthen proposals, accelerate approvals, and align technical initiatives with measurable financial outcomes."
  },
  {
    id: 8,
    name: "COFFEE",
    logo: "",
    url: "#",
    status: "POC",
    description: "COFFEE is an AI-powered recommendation engine that matches users to the exact Guatemalan coffee varietal, region, and batch that best fits their taste profile. By asking a short set of preference questions—acidity, body, flavor notes, roast level—it uses a curated dataset of real farms, micro-lots, and regional characteristics to generate precise, personalized recommendations. Designed to showcase Guatemala's coffee diversity, the system helps consumers discover high-quality batches while enabling producers and roasters to connect their products with the right audiences through data-driven personalization."
  },
  {
    id: 9,
    name: "DICTA",
    logo: "",
    url: "#",
    status: "POC",
    description: "DICTA is a Spanish speech-to-text system that delivers accurate transcriptions, concise summaries, and extracted key ideas in bullet form. Built for fast information capture, it processes meetings, interviews, lectures, and voice notes with high fidelity, then distills the content into actionable insights. DICTA streamlines knowledge transfer for teams and professionals by turning unstructured audio into clean text, executive summaries, and organized takeaways within seconds."
  },
  {
    id: 10,
    name: "GIGR",
    logo: "",
    url: "#",
    status: "DEV",
    description: "GIGR is an AI-driven gig generation agent that continuously scans the web for high-value B2B opportunities and transforms them into actionable leads. It identifies companies with unmet needs, surfaces relevant projects, and matches them to a professional's capabilities using intelligent filters and semantic analysis. Designed to automate the top of the sales funnel, Gigr helps consultants and agencies uncover hidden demand, streamline outreach, and maintain a consistent pipeline of revenue-ready opportunities."
  },
  {
    id: 11,
    name: "LATINA",
    logo: "",
    url: "#",
    status: "PROD",
    description: "LATINA is an AI-powered image enhancement system built for Latina Interiors to automate the final-art finishing process. It uses concurrent machine-learning models trained on the Director of Design's aesthetic preferences—colors, textures, lighting, and composition—allowing the system to reproduce the studio's signature look automatically. By applying consistent, high-quality finishing touches at scale, LATINA reduces manual post-production labor by more than 99%, accelerates client delivery, and preserves artistic consistency across the brand's entire visual catalog."
  },
  {
    id: 12,
    name: "Legislazuli",
    logo: "",
    url: "#",
    status: "PROD",
    description: "LEGISLAZULI is a mission-critical legal data extraction system engineered for 100% accuracy by design. It processes complex legal documents using three fully independent AI models—each performing its own extraction and validation—then produces a consensus output that guarantees reliability even in high-risk workflows. Built for environments where errors are unacceptable, LEGISLAZULI delivers structured, audit-ready data from statutes, contracts, and regulatory texts, enabling legal teams to automate repetitive review tasks while maintaining absolute precision."
  },
  {
    id: 13,
    name: "OCD",
    logo: "",
    url: "#",
    status: "DEV",
    description: "OCD is an autonomous, AI-gated productivity system built to unify strategy, tasks, code, and documentation into a single operating framework that actively enforces focus and accelerates delivery. It replaces passive tools with coordinated agents—Filer, Librarian, Prioritizer, Storer, and Retriever—that classify work, detect conflicts, enforce WIP limits, integrate completed items into a continuously evolving corpus, and generate live documents on demand. Designed around reinforcement-learning architectures and strategic intent, OCD transforms fragmented notes, ideas, and projects into a coherent, ever-growing Single Source of Truth that eliminates rework, shortens idea-to-delivery time, and preserves long-term leverage across all future projects."
  },
  {
    id: 14,
    name: "prepAIr",
    logo: "",
    url: "#",
    status: "POC",
    description: "prepAIr is an R-based data-preparation toolkit that automates the most time-consuming steps of cleaning and standardizing analytical datasets. It provides modular functions for handling missing values, detecting and correcting outliers, scaling variables, and exporting reproducible preprocessing pipelines. Designed for reliability and repeatability, prepAIr streamlines the entire data-wrangling workflow so analysts and AI models receive clean, structured, analysis-ready data with minimal manual effort."
  },
  {
    id: 15,
    name: "TRAGALDABAS",
    logo: "",
    url: "#",
    status: "DEV",
    description: "TRAGALDABAS is an AI-powered universal data ingestor that transforms raw, unstructured client files into actionable business intelligence. Feed it any document—financial statements, operational reports, sales data—and the system autonomously detects the file structure, classifies the content domain, infers semantic meaning, cleans and validates the data, and persists it into a properly designed PostgreSQL schema. Beyond ETL, Tragaldabas generates executive-level insights and board-ready presentation slides, distilling complex datasets into what matters most: relevant findings, material risks, and strategic opportunities—no filler, no mock data, just the signal a CEO needs to make decisions."
  },
  {
    id: 16,
    name: "WifeApp",
    logo: "",
    url: "#",
    status: "PROD",
    description: "WifeApp is a streamlined communication and collaboration tool designed to help couples coordinate tasks and shared responsibilities with zero friction. The wife-side interface captures anything the husband needs to remember—tasks, reminders, notes—while the husband-side provides a simple, focused Kanban board for organizing and completing those tasks. Notes are stored in a searchable, filterable system, and task progress is instantly visible to both sides, ensuring clarity, reducing forgetfulness, and eliminating repeated conversations. By turning daily coordination into a clean, structured workflow, WifeApp strengthens communication and makes household collaboration effortless."
  },
  {
    id: 2,
    name: "Carl",
    logo: "/carl-logo.PNG",
    url: "https://talktocarl.online",
    status: "PROD",
    description: "Enterprise-grade RAG Chatbot that emulates Carl Sagan's persona to make complex scientific concepts accessible, powered by a custom Retrieval-Augmented Generation (RAG) architecture with <2s response time and 99.9% uptime using GPT-4o and Pinecone. Advanced semantic search and extraordinary personality consistency demonstrate expertise in prompt engineering, vector embeddings, and conversational AI design.\n\nBuilt with Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/UI; OpenAI GPT-4o, text-embedding-3-small, 1536-dimension embeddings, Pinecone vector DB, and Supabase, shows mastery of the complete AI development stack from conceptualization to production deployment with managed infrastructure for proven scalability."
  }
];

function App() {
  const [projects] = useState(initialProjects);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-wrapper">
              <video 
                src="/ai_dev_logo.mp4" 
                alt="AI Dev Logo" 
                className="logo" 
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
            <h1 className="title text-fiery">
              <div>
                <span className="ember-letter" style={{"--delay": 0}}>A</span>
                <span className="ember-letter" style={{"--delay": 1}}>r</span>
                <span className="ember-letter" style={{"--delay": 2}}>t</span>
                <span className="ember-letter" style={{"--delay": 3}}>i</span>
                <span className="ember-letter" style={{"--delay": 4}}>f</span>
                <span className="ember-letter" style={{"--delay": 5}}>i</span>
                <span className="ember-letter" style={{"--delay": 6}}>c</span>
                <span className="ember-letter" style={{"--delay": 7}}>i</span>
                <span className="ember-letter" style={{"--delay": 8}}>a</span>
                <span className="ember-letter" style={{"--delay": 9}}>l</span>
                <span>&nbsp;&nbsp;</span>
                <span className="ember-letter" style={{"--delay": 10}}>I</span>
                <span className="ember-letter" style={{"--delay": 11}}>n</span>
                <span className="ember-letter" style={{"--delay": 12}}>t</span>
                <span className="ember-letter" style={{"--delay": 13}}>e</span>
                <span className="ember-letter" style={{"--delay": 14}}>l</span>
                <span className="ember-letter" style={{"--delay": 15}}>l</span>
                <span className="ember-letter" style={{"--delay": 16}}>i</span>
                <span className="ember-letter" style={{"--delay": 17}}>g</span>
                <span className="ember-letter" style={{"--delay": 18}}>e</span>
                <span className="ember-letter" style={{"--delay": 19}}>n</span>
                <span className="ember-letter" style={{"--delay": 20}}>c</span>
                <span className="ember-letter" style={{"--delay": 21}}>e</span>
              </div>
              <div>
                <span className="ember-letter" style={{"--delay": 22}}>D</span>
                <span className="ember-letter" style={{"--delay": 23}}>E</span>
                <span className="ember-letter" style={{"--delay": 24}}>V</span>
                <span className="ember-letter" style={{"--delay": 25}}>E</span>
                <span className="ember-letter" style={{"--delay": 26}}>L</span>
                <span className="ember-letter" style={{"--delay": 27}}>O</span>
                <span className="ember-letter" style={{"--delay": 28}}>P</span>
                <span className="ember-letter" style={{"--delay": 29}}>M</span>
                <span className="ember-letter" style={{"--delay": 30}}>E</span>
                <span className="ember-letter" style={{"--delay": 31}}>N</span>
                <span className="ember-letter" style={{"--delay": 32}}>T</span>
                <span className="ember-letter" style={{"--delay": 33}}>S</span>
              </div>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p><span font-semibold tracking-wide>
              &copy; 2025 <span className="text-white" style={{ textShadow: '0 0 1px white' }}>Jorge Luis Contreras Herrera</span>. All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
