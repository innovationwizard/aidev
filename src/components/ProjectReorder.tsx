import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface ProjectReorderProps {
  projects: Project[];
  onReorder: (reorderedProjects: Project[]) => void;
  onClose: () => void;
}

const ProjectReorder: React.FC<ProjectReorderProps> = ({ projects, onReorder, onClose }) => {
  const [reorderedProjects, setReorderedProjects] = useState([...projects]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newProjects = [...reorderedProjects];
    const draggedProject = newProjects[draggedIndex];
    
    // Remove the dragged item
    newProjects.splice(draggedIndex, 1);
    
    // Insert at the new position
    newProjects.splice(dropIndex, 0, draggedProject);
    
    setReorderedProjects(newProjects);
    setDraggedIndex(null);
  };

  const handleSave = () => {
    onReorder(reorderedProjects);
    onClose();
  };

  const moveProject = (fromIndex: number, direction: 'up' | 'down') => {
    const newProjects = [...reorderedProjects];
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    
    if (toIndex >= 0 && toIndex < newProjects.length) {
      const temp = newProjects[fromIndex];
      newProjects[fromIndex] = newProjects[toIndex];
      newProjects[toIndex] = temp;
      setReorderedProjects(newProjects);
    }
  };

  return (
    <div className="add-project-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Reorder Projects</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        
        <div className="reorder-content">
          <p className="reorder-instructions">
            Drag and drop projects to reorder them, or use the arrow buttons to move them up or down.
          </p>
          
          <div className="project-list">
            {reorderedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-item ${draggedIndex === index ? 'dragging' : ''}`}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div className="project-item-content">
                  <div className="project-item-logo">
                    {project.logo.startsWith('/') ? (
                      <img src={project.logo} alt={`${project.name} Logo`} />
                    ) : (
                      <span>📁</span>
                    )}
                  </div>
                  <div className="project-item-info">
                    <h4>{project.name}</h4>
                    <p>{project.description.substring(0, 100)}...</p>
                  </div>
                </div>
                <div className="project-item-actions">
                  <button
                    onClick={() => moveProject(index, 'up')}
                    disabled={index === 0}
                    className="move-btn up-btn"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveProject(index, 'down')}
                    disabled={index === reorderedProjects.length - 1}
                    className="move-btn down-btn"
                    title="Move down"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-actions">
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button type="button" onClick={handleSave} className="btn-primary">
            Save Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectReorder;
