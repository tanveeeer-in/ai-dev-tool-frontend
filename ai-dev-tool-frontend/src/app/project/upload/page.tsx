import React, { useState } from 'react';

const ProjectUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('project', file);

    const response = await fetch('/api/project/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Project uploaded successfully');
    } else {
      alert('Project upload failed');
    }
  };

  return (
    <div>
      <h1>Upload Project</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ProjectUpload;
