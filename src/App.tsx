import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

// Project data - all projects stored here for production
const initialProjects = [
  {
    id: 1,
    name: "Carl",
    logo: "/carl-logo.PNG",
    url: "https://carl-lyart.vercel.app/",
    description: "Carl is much more than an AI chatbot. Carl is a space detective! Talk to him to uncover the secrets of stars, black holes, and entire galaxies. He can explain how the universe was born, how it changes, and maybe even where new worlds that could hold life are hiding. If you talk to Carl, you'll never look at the night sky the same way again."
  },
  {
    id: 2,
    name: "IngePro",
    logo: "/ingepro_logo.png",
    url: "https://ingepro.app",
    description: "The AI-Powered Insights system turns IngePro from a simple construction app into your smartest construction advisor. It doesn’t just collect information—it interprets it in real time, predicting problems before they happen, recommending targeted actions to boost efficiency, and fine-tuning resource allocation and timelines. With AI-driven expertise built into the platform, IngePro delivers the kind of insights that used to take seasoned consultants years to provide. The result? Smarter decisions, fewer surprises, and projects that run like clockwork!"
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
