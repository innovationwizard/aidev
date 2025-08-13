interface Project {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (projectId: number) => void;
  showActions?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete, showActions = false }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${project.name}"?`)) {
      onDelete(project.id);
    }
  };

  // Debug: Log the logo value
  console.log(`Project "${project.name}" logo:`, project.logo);

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-header">
          <div className="project-logo">
            {project.logo && (project.logo.startsWith('/') || project.logo.startsWith('data:')) ? (
              <img src={project.logo} alt={`${project.name} Logo`} />
            ) : (
              <span>📁</span>
            )}
          </div>
          {showActions && (
            <div className="project-actions">
              <button 
                onClick={() => onEdit(project)}
                className="action-btn edit-btn"
                title="Edit project"
              >
                ✏️
              </button>
              <button 
                onClick={handleDelete}
                className="action-btn delete-btn"
                title="Delete project"
              >
                🗑️
              </button>
            </div>
          )}
        </div>
        <div className="project-description">
          <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#ffffff', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff6b35'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              {project.name}
            </a>
          </h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
