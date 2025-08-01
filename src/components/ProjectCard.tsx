interface Project {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-logo">
          {project.logo.startsWith('/') ? (
            <img src={project.logo} alt={`${project.name} Logo`} />
          ) : (
            project.logo
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
