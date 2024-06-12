'use client'
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const ProjectUpload: React.FC = () => {
  const [project, setProject] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setProject(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Implement the file upload logic here
  };

  return (
    <Box>
      <TextField type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload Project
      </Button>
    </Box>
  );
};

export default ProjectUpload;
