'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error:', errorText);
        alert('Login failed: ' + errorText);
        return;
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await response.json();
        console.log(data);

        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          // router.push('/')
          // useRouter().push("/")
          console.log('Login successful');
        } else {
          alert('Login failed');
        }
      } else {
        console.error(
          'Expected JSON response but received:',
          await response.text(),
        );
        alert('Unexpected response format');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
  // const handleLogin = async () => {
  //   const response = await fetch('http://localhost:3001/auth/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   const data = await response.json();
  //   console.log(response)

  //   if (data.access_token) {
  //     localStorage.setItem('token', data.access_token);
  //     // router.push('/');
  //     console.log("success");

  //   } else {
  //     alert('Login failed');
  //   }
  // };
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error('Error:', errorText);
  //       alert('Login failed: ' + errorText);
  //       return;
  //     }

  //     const data = await response.json();
  //     console.log(response);

  //     if (data.access_token) {
  //       localStorage.setItem('token', data.access_token);
  //       // router.push('/');
  //       console.log("success");
  //     } else {
  //       alert('Login failed');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error('Error:', errorText);
  //       alert('Login failed: ' + errorText);
  //       return;
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     if (data.access_token) {
  //       localStorage.setItem('token', data.access_token);
  //       console.log("Login successful");
  //       // router.push('/');
  //     } else {
  //       console.error('Expected JSON response but received:', await response.text());
  //       alert('Unexpected response format');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // };




    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="bg-black border-white"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="bg-black border-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };


export default Login;
