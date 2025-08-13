import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

// Project data - all projects stored here for production
const initialProjects = [
  {
    id: 1,
    name: "Carl",
    logo: "/carl-logo.PNG",
    url: "https://carl-lyart.vercel.app/",
    description: "Carl is more than a chatbot—he's the embodiment of a revolutionary philosophy, where cosmic consciousness meets advanced science. Named after Carl Sagan, represents the convergence of two profound disciplines: astronomy, and astrophysics. Carl allows each one of us to understand the Universe our way, following our own path, at our own pace."
  },
  {
    id: 2,
    name: "IngePro",
    logo: "/ingepro_logo.png",
    url: "https://ingepro.app",
    description: "IngePro is a construction productivity platform developed using AI-assisted development. It helps construction companies track worker time with GPS, manage projects, and automatically generate billing reports, reducing the time from job completion to payment from weeks to days. The application runs on professional AWS infrastructure with Next.js and PostgreSQL, specifically designed for Spanish-speaking construction workers using mobile phones on construction sites. It pioneers AI-powered features such as automatic photo analysis for quality control, predictive project completion, and intelligent safety monitoring. It has already been deployed in production with real-world construction companies, demonstrating how collaboration with AI can generate cost-effective software at an unprecedented speed."
  },
  {
    id: 3,
    name: "Solveur",
    logo: "/solveur_logo.png",
    url: "https://solveur.pro",
    description: "Solveur is an AI-powered business problem-solving agent that companies can deploy within 24 hours to automatically handle up to 75% of their customer interactions. It uses advanced Augmented Recovery-Generation (RAG) technology with a Pinecone vector database and Next.js architecture to create intelligent agents that learn from enterprise knowledge bases and respond like expert employees. Customers can save thousands of dollars per month in support costs while improving response times from hours to seconds. State-of-the-art features include multi-agent orchestration, predictive customer support that prevents issues before they occur, and autonomous workflow automation that goes beyond answering questions to truly resolve end-to-end business processes."
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
              <img src="/ai_dev_logo.png" alt="AI Dev Logo" className="logo" />
            </div>
            <h1 className="title text-fiery">
              <div>Artificial&nbsp; Intelligence</div>
              <div>DEVELOPMENTS</div>
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
