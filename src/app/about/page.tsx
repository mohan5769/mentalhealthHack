"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Shield, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <header className="p-4 bg-white bg-opacity-10 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">ReachOut</Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-green-200 transition-colors">Home</Link>
            <Link href="#about" className="text-white hover:text-green-200 transition-colors">About</Link>
            <Link href="#contact" className="text-white hover:text-green-200 transition-colors">Contact</Link>
            <Link href="/signin">
              <button className="bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About ReachOut
        </motion.h1>

        <motion.p 
          className="text-xl text-white mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At ReachOut, we&#39;re committed to supporting the mental well-being of working professionals aged 30-45. Our approach is built on three core principles: Empathy, Integrity, and Self-Reflection.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heart className="h-12 w-12 mb-4 text-pink-300" />
            <h2 className="text-2xl font-bold mb-4">Empathy</h2>
            <p>We believe in the power of understanding and sharing the feelings of others. Our therapists and AI coach are trained to provide compassionate, non-judgmental support, helping you navigate the complexities of your professional and personal life.</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Shield className="h-12 w-12 mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">Integrity</h2>
            <p>Trust is at the core of our service. We uphold the highest standards of professional ethics, ensuring confidentiality and providing evidence-based treatments. Our commitment to integrity means you can rely on us for honest, transparent, and effective mental health support.</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Lightbulb className="h-12 w-12 mb-4 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Self-Reflection</h2>
            <p>We encourage and guide you through the process of self-reflection. By developing this skill, you&#39;ll gain deeper insights into your thoughts, emotions, and behaviors, leading to personal growth and improved mental well-being in both your professional and personal life.</p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-md text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl mb-6">
            ReachOut is dedicated to empowering working professionals to achieve a harmonious balance between their career aspirations and mental well-being. We strive to create a supportive environment where individuals can thrive both professionally and personally.
          </p>
          <p className="text-xl">
            Through our innovative blend of human expertise and AI-driven support, we aim to make mental health care accessible, personalized, and effective for the unique challenges faced by professionals in today&#39;s fast-paced work environment.
          </p>
        </motion.div>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">ReachOut</h3>
              <p>Your partner in professional and mental wellness</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-200 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-green-200 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-green-200 transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 ReachOut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}