import React, { useState } from 'react';
import { Card, Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        const result = await response.text();
        setError(result || 'Error creating user');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gray-200"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 w-96 flex flex-col items-center justify-center bg-white shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSignUp}>
          <Input
            label="Name"
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Sign Up
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
          onClick={() => navigate('/login')}
        >
          Already have an account? Log In
        </Button>
      </Card>
    </motion.div>
  );
};

export default SignUpPage;
