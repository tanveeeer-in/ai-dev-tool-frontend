'use client'
import React, { useState } from 'react';

const GitOperations: React.FC = () => {
  const [path, setPath] = useState('');
  const [message, setMessage] = useState('');
  const [remote, setRemote] = useState('');
  const [branch, setBranch] = useState('');

  const handleInit = async () => {
    const response = await fetch('/api/git/init', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    });

    const data = await response.json();
    alert(data.message);
  };

  const handleCommit = async () => {
    const response = await fetch('/api/git/commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, message }),
    });

    const data = await response.json();
    alert(data.message);
  };

  const handlePush = async () => {
    const response = await fetch('/api/git/push', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, remote, branch }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h1>Git Operations</h1>
      <input type="text" placeholder="Repo Path" value={path} onChange={(e) => setPath(e.target.value)} />
      <input type="text" placeholder="Commit Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="text" placeholder="Remote" value={remote} onChange={(e) => setRemote(e.target.value)} />
      <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
      <button onClick={handleInit}>Initialize Repo</button>
      <button onClick={handleCommit}>Commit Changes</button>
      <button onClick={handlePush}>Push to Remote</button>
    </div>
  );
};

export default GitOperations;
