"use client"
import React from 'react';
import { ClipboardList, BookOpen, Trophy, ArrowRight, Calendar, BarChart } from "lucide-react";
import Link from "next/link";

// Type for Progress component props
type ProgressProps = {
  value: number;
};

// Custom Progress component
const Progress: React.FC<ProgressProps> = ({ value }) => (
  <div className="relative w-full h-2 bg-gray-200 rounded">
    <div
      className="absolute top-0 h-full bg-green-400 rounded"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">ReachOut</Link>
          <nav className="flex items-center space-x-6">
            <Link href="#features" className="text-white hover:text-green-200 transition-colors">Features</Link>
            <Link href="#about" className="text-white hover:text-green-200 transition-colors">About</Link>
            <Link href="#contact" className="text-white hover:text-green-200 transition-colors">Contact</Link>
            <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Your Dashboard</h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Stress Level Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Stress Level</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Moderate</span>
              <span>65%</span>
            </div>
            <Progress value={65} />
          </div>

          {/* Work-Life Balance Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Work-Life Balance</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Improving</span>
              <span>70%</span>
            </div>
            <Progress value={70} />
          </div>

          {/* Self-Care Streak Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Self-Care Streak</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">7 days</span>
              <Trophy className="h-8 w-8 text-yellow-300" />
            </div>
          </div>
        </div>

        {/* Mental Health Journey and Upcoming Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Mental Health Journey Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Your Mental Health Journey</h3>
            </div>
            <div className="h-64 flex items-center justify-center">
              <BarChart className="h-full w-full text-white opacity-50" />
              {/* Replace with an actual chart component */}
            </div>
          </div>

          {/* Upcoming Sessions Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Upcoming Sessions</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Career Counseling</span>
                <span className="text-sm">Tomorrow, 2 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Stress Management</span>
                <span className="text-sm">Fri, 11 AM</span>
              </li>
            </ul>
            <button className="w-full mt-4 bg-white text-blue-600 hover:bg-green-100 flex items-center justify-center px-4 py-2 rounded">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Session
            </button>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mental Health Check */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded flex flex-col">
            <div className="mb-4 text-center">
              <ClipboardList className="h-16 w-16 mb-4 text-green-200 mx-auto" />
              <h3 className="text-2xl font-bold text-green-200">Mental Health Check</h3>
            </div>
            <p className="text-white text-lg mb-4">Gain insights and get personalized recommendations.</p>
            <Link href="/assessment" passHref>
              <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold flex items-center justify-center px-4 py-2 rounded">
                Start Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Mental Health Articles */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded flex flex-col">
            <div className="mb-4 text-center">
              <BookOpen className="h-16 w-16 mb-4 text-blue-200 mx-auto" />
              <h3 className="text-2xl font-bold text-blue-200">Mental Health Articles</h3>
            </div>
            <p className="text-white text-lg mb-4">Explore articles on work-related mental health topics.</p>
            <Link href="/articles" passHref>
              <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold flex items-center justify-center px-4 py-2 rounded">
                Read Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Self-Care Journey */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white p-6 rounded flex flex-col">
            <div className="mb-4 text-center">
              <Trophy className="h-16 w-16 mb-4 text-yellow-200 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-200">Self-Care Journey</h3>
            </div>
            <p className="text-white text-lg mb-4">Set goals and track your progress.</p>
            <Link href="/self-care" passHref>
              <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold flex items-center justify-center px-4 py-2 rounded">
                Begin
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Balancing your career and mental well-being.</p>
        </div>
      </footer>
    </div>
  );
}
