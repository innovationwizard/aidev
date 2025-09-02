interface Project {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
  status: 'IDEA' | 'DEV' | 'POC' | 'PROD';
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusPosition = (status: string) => {
    switch (status) {
      case 'IDEA': return '30px';
      case 'DEV': return 'calc(33.33% + 10px)';
      case 'POC': return 'calc(66.66% + 10px)';
      case 'PROD': return 'calc(100% - 30px)';
      default: return '30px';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'IDEA': return 'IDEA';
      case 'DEV': return 'DEV';
      case 'POC': return 'POC';
      case 'PROD': return 'PROD';
      default: return 'IDEA';
    }
  };

  const getFullStatusText = (status: string) => {
    switch (status) {
      case 'IDEA': return 'IDEA';
      case 'DEV': return 'DEVELOPMENT';
      case 'POC': return 'PROOF OF CONCEPT';
      case 'PROD': return 'PRODUCTION';
      default: return 'IDEA';
    }
  };

  return (
    <div className="enterprise-card">
      <div className="card-glow"></div>
      <div className="card-content">
        <div className="card-header">
          <div className="logo-container">
            <div className="logo-background">
              {project.logo ? (
                <img 
                  src={project.logo.startsWith('/') ? project.logo : `/${project.logo}`} 
                  alt={`${project.name} Logo`} 
                  className="project-logo"
                />
              ) : (
                <div className="logo-placeholder">📁</div>
              )}
            </div>
            <div className="logo-shadow"></div>
          </div>
          <div className="header-content">
            <h3 className="project-title">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.name}
              </a>
            </h3>
            <div className="status-slider-container" role="group" aria-label={`This project is in: ${getFullStatusText(project.status)}`}>
              <div className="slider-hull">
                <div 
                  className="slider-button"
                  style={{ left: getStatusPosition(project.status) }}
                  aria-label={getFullStatusText(project.status)}
                >
                  <span>{getStatusLabel(project.status)}</span>
                </div>
                <div className="slider-track">
                  <div className="track-segment track-segment-1"></div>
                  <div className="track-segment track-segment-2"></div>
                  <div className="track-segment track-segment-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-description">
          <p className="description-text">{project.description}</p>
        </div>
        
        <div className="card-footer">
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Performance</span>
              <span className="metric-value">99.9%</span>
            </div>
            <div className="metric">
              <span className="metric-label">Response</span>
              <span className="metric-value">&lt;2s</span>
            </div>
            <div className="metric">
              <span className="metric-label">Scale</span>
              <span className="metric-value">Enterprise</span>
            </div>
          </div>
          {/* <div className="cta-button">
            <span>Explore Project</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
