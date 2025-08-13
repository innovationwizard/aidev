import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import AddProjectForm from './components/AddProjectForm';
import EditProjectForm from './components/EditProjectForm';
import ProjectReorder from './components/ProjectReorder';
import AdminLogin from './components/AdminLogin';

// Project data - easy to add more projects
const initialProjects = [
  {
    id: 1,
    name: "IngePro",
    logo: "/ingepro_logo.png",
    url: "https://ingepro.app",
    description: "IngePro is a construction productivity platform developed using AI-assisted development. It helps construction companies track worker time with GPS, manage projects, and automatically generate billing reports, reducing the time from job completion to payment from weeks to days. The application runs on professional AWS infrastructure with Next.js and PostgreSQL, specifically designed for Spanish-speaking construction workers using mobile phones on construction sites. It pioneers AI-powered features such as automatic photo analysis for quality control, predictive project completion, and intelligent safety monitoring. It has already been deployed in production with real-world construction companies, demonstrating how collaboration with AI can generate cost-effective software at an unprecedented speed."
  },
  {
    id: 2,
    name: "Solveur",
    logo: "/solveur_logo.png",
    url: "https://solveur.pro",
    description: "Solveur is an AI-powered business problem-solving agent that companies can deploy within 24 hours to automatically handle up to 75% of their customer interactions. It uses advanced Augmented Recovery-Generation (RAG) technology with a Pinecone vector database and Next.js architecture to create intelligent agents that learn from enterprise knowledge bases and respond like expert employees. Customers can save thousands of dollars per month in support costs while improving response times from hours to seconds. State-of-the-art features include multi-agent orchestration, predictive customer support that prevents issues before they occur, and autonomous workflow automation that goes beyond answering questions to truly resolve end-to-end business processes."
  }
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showReorderForm, setShowReorderForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [editingProject, setEditingProject] = useState<typeof projects[0] | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      try {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);
      } catch (error) {
        console.error('Error loading projects from localStorage:', error);
        // Fallback to initial projects if there's an error
        setProjects(initialProjects);
      }
    }
  }, []);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
  }, [projects]);

  // Check for existing admin session on component mount
  useEffect(() => {
    const checkAdminSession = () => {
      const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
      const loginTime = localStorage.getItem('adminLoginTime');
      
      if (isAuthenticated && loginTime) {
        // Check if session is still valid (24 hours)
        const sessionAge = Date.now() - parseInt(loginTime);
        const sessionValid = sessionAge < 24 * 60 * 60 * 1000; // 24 hours
        
        if (sessionValid) {
          setIsAdmin(true);
        } else {
          // Session expired, clear it
          localStorage.removeItem('adminAuthenticated');
          localStorage.removeItem('adminLoginTime');
        }
      }
    };

    checkAdminSession();
  }, []);

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowAdminLogin(false);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
  };

  const handleAddProject = (newProject: Omit<typeof projects[0], 'id'>) => {
    const projectWithId = {
      ...newProject,
      id: Math.max(...projects.map(p => p.id)) + 1
    };
    setProjects(prev => [...prev, projectWithId]);
  };

  const handleEditProject = (project: typeof projects[0]) => {
    if (!isAdmin) {
      setShowAdminLogin(true);
      return;
    }
    setEditingProject(project);
    setShowEditForm(true);
  };

  const handleUpdateProject = (updatedProject: typeof projects[0]) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
    setEditingProject(null);
  };

  const handleDeleteProject = (projectId: number) => {
    if (!isAdmin) {
      setShowAdminLogin(true);
      return;
    }
    setProjects(prev => prev.filter(p => p.id !== projectId));
  };

  const handleReorderProjects = (reorderedProjects: typeof projects) => {
    setProjects(reorderedProjects);
  };

  const handleShowAddForm = () => {
    if (!isAdmin) {
      setShowAdminLogin(true);
      return;
    }
    setShowAddForm(true);
  };

  const handleShowReorderForm = () => {
    if (!isAdmin) {
      setShowAdminLogin(true);
      return;
    }
    setShowReorderForm(true);
  };

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
          <div className="projects-header">
            <div className="project-actions">
              {isAdmin && (
                <>
                  <button 
                    onClick={handleShowReorderForm}
                    className="reorder-btn"
                    disabled={projects.length < 2}
                  >
                    ↕️ Reorder
                  </button>
                  <button 
                    onClick={handleShowAddForm}
                    className="add-project-btn"
                  >
                    + Add Project
                  </button>
                  <button 
                    onClick={handleAdminLogout}
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
                showActions={isAdmin}
              />
            ))}
          </div>
          {!isAdmin && (
            <div className="admin-section">
              <button 
                onClick={() => setShowAdminLogin(true)}
                className="admin-btn"
              >
                🔐
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Add Project Modal */}
      {showAddForm && (
        <AddProjectForm
          onAddProject={handleAddProject}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {/* Edit Project Modal */}
      {showEditForm && editingProject && (
        <EditProjectForm
          project={editingProject}
          onUpdateProject={handleUpdateProject}
          onClose={() => {
            setShowEditForm(false);
            setEditingProject(null);
          }}
        />
      )}

      {/* Reorder Projects Modal */}
      {showReorderForm && (
        <ProjectReorder
          projects={projects}
          onReorder={handleReorderProjects}
          onClose={() => setShowReorderForm(false)}
        />
      )}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}

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
