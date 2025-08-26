import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

// Project data - all projects stored here for production
const initialProjects = [
  {
    id: 1,
    name: "Carl",
    logo: "/carl-logo.PNG",
    url: "https://talktocarl.online",
    description: "Enterprise-grade RAG Chatbot that emulates Carl Sagan's persona to make complex scientific concepts accessible, powered by a custom Retrieval-Augmented Generation (RAG) architecture with <2s response time and 99.9% uptime using GPT-4o and Pinecone. Advanced semantic search and extraordinary personality consistency demonstrate expert prompt engineering, vector embeddings, and conversational AI design.\n\nBuilt with Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/UI; OpenAI GPT-4o, text-embedding-3-small, 1536-dimension embeddings, Pinecone vector DB, and Supabase, shows mastery of the complete AI development stack from conceptualization to production deployment with managed infrastructure for proven scalability."
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
