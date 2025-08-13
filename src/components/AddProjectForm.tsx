import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface AddProjectFormProps {
  onAddProject: (project: Omit<Project, 'id'>) => void;
  onClose: () => void;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({ onAddProject, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    url: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.url && formData.description) {
      onAddProject(formData);
      setFormData({ name: '', logo: '', url: '', description: '' });
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="add-project-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Project</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="add-project-form">
          <div className="form-group">
            <label htmlFor="name">Project Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter project name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="logo">Logo File Path</label>
            <input
              type="text"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="e.g., /project_logo.png"
            />
            <div className="form-hint">
              Enter the path to your logo file in the public directory (e.g., /project_logo.png)
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="url">Project URL *</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="Enter project URL"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter project description"
              rows={4}
            />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
