import React, { useState } from 'react';
import { Card, Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Handle token storage or authentication
        navigate('/dashboard'); // Redirect after successful login
      } else {
        const result = await response.text();
        setError(result || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gray-200"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 w-96 flex flex-col items-center justify-center bg-white shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Log In</h2>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="mt-6" fullWidth type="submit">
            Log In
          </Button>
        </form>
        <Button
          className="mt-4 w-full"
          color="lightBlue"
          onClick={() => navigate('/')}
        >
          Back to Homepage
        </Button>
        <Button
          className="mt-4 w-full"
          color="lightBlue"
          onClick={() => navigate('/signup')}
        >
          Don't have an account? Sign Up
        </Button>
      </Card>
    </motion.div>
  );
};

export default LoginPage;
