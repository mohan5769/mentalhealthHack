"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, BarChart, Info } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by your work responsibilities?",
    options: ["Rarely", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 2,
    question: "How well do you maintain a work-life balance?",
    options: ["Very well", "Somewhat well", "Not very well", "Poorly"],
  },
  {
    id: 3,
    question: "How often do you experience work-related stress outside of work hours?",
    options: ["Rarely", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 4,
    question: "How satisfied are you with your career progression?",
    options: ["Very satisfied", "Somewhat satisfied", "Somewhat dissatisfied", "Very dissatisfied"],
  },
  {
    id: 5,
    question: "How often do you feel energized and motivated at work?",
    options: ["Almost always", "Often", "Sometimes", "Rarely"],
  },
];

export default function MentalHealthCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const scoreMap: { [questionId: number]: { [answer: string]: number } } = {
      1: { "Rarely": 3, "Sometimes": 2, "Often": 1, "Almost always": 0 },
      2: { "Very well": 3, "Somewhat well": 2, "Not very well": 1, "Poorly": 0 },
      3: { "Rarely": 3, "Sometimes": 2, "Often": 1, "Almost always": 0 },
      4: { "Very satisfied": 3, "Somewhat satisfied": 2, "Somewhat dissatisfied": 1, "Very dissatisfied": 0 },
      5: { "Almost always": 3, "Often": 2, "Sometimes": 1, "Rarely": 0 }
    };

    return answers.reduce((total, answer, index) => total + (scoreMap[index + 1][answer] || 0), 0);
  };

  const getRecommendation = (score: number) => {
    if (score >= 12) {
      return "Your mental well-being seems to be in a good place. Keep up the great work and continue to prioritize self-care!";
    } else if (score >= 8) {
      return "You're doing okay, but there's room for improvement. Consider incorporating more stress-management techniques into your daily routine.";
    } else {
      return "It looks like you're experiencing significant work-related stress. We recommend speaking with a mental health professional for personalized support.";
    }
  };

  const getScoreExplanation = (score: number) => {
    if (score >= 12) {
      return "12-15: Excellent work-life balance and mental well-being. You're effectively managing your professional life and stress levels.";
    } else if (score >= 8) {
      return "8-11: Good work-life balance, but with some areas for improvement. You may benefit from additional stress management strategies.";
    } else {
      return "0-7: Your work-life balance and stress levels need attention. It's important to prioritize your mental health and seek support.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col">
      <header className="bg-white bg-opacity-10 backdrop-blur-md p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-3xl font-bold text-white">
            ReachOut
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg p-6">
          {!showResults ? (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(currentQuestion + 1) / questions.length * 100}%` }}></div>
              </div>
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="radio"
                        id={`option-${index}`}
                        name={`question-${currentQuestion}`}
                        value={option}
                        onChange={() => handleAnswer(option)}
                        className="mr-2"
                        checked={answers[currentQuestion] === option}
                      />
                      <label htmlFor={`option-${index}`} className="cursor-pointer">{option}</label>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2 rounded ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'}`}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Your Well-being Score</h2>
              <div className="flex items-center justify-center mb-6">
                <BarChart className="h-16 w-16 text-green-300 mr-4" />
                <span className="text-4xl font-bold">{calculateScore()} / 15</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-md mb-6">
                <div className="flex items-center mb-2">
                  <Info className="h-5 w-5 mr-2 text-yellow-300" />
                  <h3 className="text-lg font-semibold">What does your score mean?</h3>
                </div>
                <p>{getScoreExplanation(calculateScore())}</p>
              </div>
              <p className="text-lg mb-6">{getRecommendation(calculateScore())}</p>
              <h3 className="text-xl font-semibold mb-4">Next Steps:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Schedule a consultation with one of our work-life balance specialists</li>
                <li>Explore our tailored stress management techniques for professionals</li>
                <li>Join our community forums to connect with peers facing similar challenges</li>
              </ul>
              <Link href="/dashboard">
                <button className="w-full bg-white text-blue-600 hover:bg-green-100 px-4 py-2 rounded">View Personalized Dashboard</button>
              </Link>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Your partner in professional mental wellness.</p>
        </div>
      </footer>
    </div>
  );
}
