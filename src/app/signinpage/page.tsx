"use client";

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page navigation and avoid 404 error
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <header className="p-4 bg-white bg-opacity-10 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">ReachOut</Link>
          <div className="space-x-4">
            <Link href="#features" className="text-white hover:text-green-200 transition-colors">Features</Link>
            <Link href="/about" className="text-white hover:text-green-200 transition-colors">About</Link>
            <Link href="#contact" className="text-white hover:text-green-200 transition-colors">Contact</Link>
            <Link href="/signinpage">
              <button className="bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Sign In to ReachOut</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Mail className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex-grow p-3 focus:outline-none rounded-r-lg"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Lock className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="flex-grow p-3 focus:outline-none rounded-r-lg"
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-3"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>

            <p className="mt-6 text-center text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}