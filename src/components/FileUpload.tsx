import React, { useRef } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File | null, previewUrl: string) => void;
  currentValue?: string;
  accept?: string;
  placeholder?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileSelect, 
  currentValue, 
  accept = "image/*",
  placeholder = "Upload logo"
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onFileSelect(file, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null, '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="file-upload-container">
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      
      {currentValue ? (
        <div className="file-preview">
          <img src={currentValue} alt="Logo preview" className="logo-preview" />
          <div className="file-actions">
            <button type="button" onClick={handleClick} className="change-btn">
              Change
            </button>
            <button type="button" onClick={handleRemove} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="file-upload-area" onClick={handleClick}>
          <div className="upload-icon">📁</div>
          <div className="upload-text">{placeholder}</div>
          <div className="upload-hint">Click to select image (max 5MB)</div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
