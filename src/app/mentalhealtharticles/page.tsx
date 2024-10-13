"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Briefcase, Brain, Heart } from 'lucide-react';

// Define a type for the article structure
interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: JSX.Element; // Change this to JSX.Element instead of React.ComponentType
  content: string;
  glimpse: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Work-Life Harmony",
    description: "Balancing career and well-being",
    category: "Work-Life Balance",
    icon: <Briefcase className="h-6 w-6 text-green-300" />, // Render the icon directly
    content: "In today's fast-paced work environment, achieving work-life harmony is crucial for maintaining mental health. This article explores practical strategies to balance your professional responsibilities with personal well-being, including time management techniques, setting boundaries, and prioritizing self-care.",
    glimpse: "Discover the art of balancing your career ambitions with personal well-being. Learn practical tips for managing time effectively and setting healthy boundaries."
  },
  {
    id: 2,
    title: "Beating Burnout",
    description: "Strategies for high-pressure careers",
    category: "Stress Management",
    icon: <Brain className="h-6 w-6 text-green-300" />, // Render the icon directly
    content: "Burnout is a common challenge in high-pressure careers. Learn to recognize the signs of burnout and discover effective coping mechanisms. This article provides insights into stress reduction techniques, the importance of regular breaks, and how to create a supportive work environment.",
    glimpse: "Uncover the hidden signs of burnout and learn powerful strategies to overcome it. Find out how small changes can make a big difference in your work life."
  },
  {
    id: 3,
    title: "Mindful Moments",
    description: "Quick techniques for busy days",
    category: "Mindfulness",
    icon: <Heart className="h-6 w-6 text-green-300" />, // Render the icon directly
    content: "Incorporate mindfulness into your hectic schedule with these quick and effective techniques. From short breathing exercises to mindful eating, learn how small moments of awareness can significantly reduce stress and improve focus throughout your workday.",
    glimpse: "Explore simple mindfulness techniques that can be seamlessly integrated into your busy day. Learn how brief moments of awareness can transform your work experience."
  },
  // Add more articles here
];

const categories = ["All", "Work-Life", "Stress", "Mindfulness", "Career", "Health"];

export default function MentalHealthArticles() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = articles.filter(
    (article) =>
      (activeCategory === "All" || article.category.toLowerCase().includes(activeCategory.toLowerCase())) &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col">
      <header className="bg-white bg-opacity-10 backdrop-blur-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            ReachOut
          </Link>
          <div className="space-x-4">
            <Link href="#features" className="text-white hover:text-green-200 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-white hover:text-green-200 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-green-200 transition-colors">
              Contact
            </Link>
            <Link href="/sign-in" passHref>
              <button className="bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Wellness Insights</h1>
          <p className="text-xl text-white mb-8 text-center">Empowering professionals with concise mental health strategies</p>

          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-none pl-10 py-2 rounded"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>

          <div className="mb-8 flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-white px-4 py-2 rounded ${
                  activeCategory === category ? 'bg-white text-blue-600' : 'bg-opacity-20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white hover:bg-opacity-30 transition-all duration-300 h-full flex flex-col p-6 rounded-lg">
                  <div className="pb-4">
                    <div className="flex items-center justify-between">
                      {article.icon} {/* Render the icon here */}
                    </div>
                    <h3 className="text-lg font-bold mt-2">{article.title}</h3>
                  </div>
                  <p className="flex-grow text-sm text-gray-200">{article.description}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Empowering professionals to thrive.</p>
        </div>
      </footer>

      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-gray-800 max-w-lg mx-auto p-6 rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
              <p className="text-gray-600">{selectedArticle.category}</p>
            </div>
            <p>{selectedArticle.content}</p>
            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-4 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
