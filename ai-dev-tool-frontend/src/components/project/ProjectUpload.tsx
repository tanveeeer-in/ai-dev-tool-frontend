// 'use client'
// import React, { useState } from 'react';
// import { Button, TextField, Box } from '@mui/material';

// const ProjectUpload: React.FC = () => {
//   const [project, setProject] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setProject(event.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     // Implement the file upload logic here
//   };

//   return (
//     <Box>
//       <TextField type="file" onChange={handleFileChange} />
//       <Button variant="contained" color="primary" onClick={handleUpload}>
//         Upload Project
//       </Button>
//     </Box>
//   );
// };

// export default ProjectUpload;

// import React, { useState } from 'react';

// const ProjectUpload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await fetch('/api/project/upload', {
//       method: 'POST',
//       body: formData,
//     });

//     const result = await response.json();
//     console.log(result);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Project</button>
//     </div>
//   );
// };

// export default ProjectUpload;

import React, { useState } from 'react';

const ProjectUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/project/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Project</button>
    </div>
  );
};

export default ProjectUpload;
