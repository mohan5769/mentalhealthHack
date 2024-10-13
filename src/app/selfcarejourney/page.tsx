"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Target, Calendar, Zap, Gift, Star, Briefcase, Brain, Heart, ChevronRight } from 'lucide-react';

// Define types for the rewards and goals
type Goal = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
};

type Reward = {
  id: number;
  title: string;
  points: number;
  icon: React.ElementType;
};

const initialGoals: Goal[] = [
  { id: 1, title: "Daily Meditation", description: "Practice mindfulness for 10 minutes", icon: Brain, progress: 60 },
  { id: 2, title: "Work-Life Balance", description: "Leave work on time 3 days this week", icon: Briefcase, progress: 40 },
  { id: 3, title: "Stress Management", description: "Complete a guided relaxation session", icon: Heart, progress: 80 },
];

const rewards: Reward[] = [
  { id: 1, title: "Free Therapy Session", points: 500, icon: Gift },
  { id: 2, title: "Premium Meditation Guide", points: 300, icon: Star },
  { id: 3, title: "Wellness Workshop Access", points: 750, icon: Zap },
];

const programs = [
  { id: 1, title: "Stress Management Workshop", duration: "2 weeks", category: "personal" },
  { id: 2, title: "Mindfulness for Busy Professionals", duration: "4 weeks", category: "personal" },
  { id: 3, title: "Achieving Work-Life Harmony", duration: "3 weeks", category: "personal" },
  { id: 4, title: "Mindful Leadership", duration: "4 weeks", category: "professional" },
  { id: 5, title: "Peak Productivity Techniques", duration: "2 weeks", category: "professional" },
  { id: 6, title: "Effective Communication Skills", duration: "3 weeks", category: "professional" },
];

export default function SelfCareJourney() {
  const [userPoints, setUserPoints] = useState(450);
  const [showRewardDialog, setShowRewardDialog] = useState(false);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [goals, setGoals] = useState(initialGoals);

  const handleCompleteTask = (goalId: number) => {
    setUserPoints((prevPoints) => prevPoints + 10);
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === goalId) {
          const newProgress = Math.min(goal.progress + 20, 100);
          return { ...goal, progress: newProgress };
        }
        return goal;
      })
    );
  };

  const handleRedeemReward = (reward: Reward) => {
    setSelectedReward(reward);
    setShowRewardDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col">
      <header className="bg-white bg-opacity-10 backdrop-blur-md p-4 sticky top-0 z-10">
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
            <button className="bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Self-Care Journey
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white rounded-lg p-6 h-full">
              <h2 className="text-2xl flex items-center mb-4">
                <Target className="mr-2" />
                Your Goals
              </h2>
              <p className="text-white mb-6">Track your progress and earn rewards</p>
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  className="flex items-center space-x-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <goal.icon className="h-8 w-8 text-green-700" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{goal.title}</h3>
                    <p className="text-sm text-white">{goal.description}</p>
                    <div className="mt-2 relative w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                      <span className="absolute right-0 top-[-20px] text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                        {goal.progress}%
                      </span>
                    </div>
                  </div>
                  <button
                    className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
                    onClick={() => handleCompleteTask(goal.id)}
                  >
                    Complete
                  </button>
                </motion.div>
              ))}
              <div className="mt-6">
                <button className="w-full bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">
                  Set New Goal
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white rounded-lg p-6">
              <h2 className="text-2xl flex items-center mb-4">
                <Trophy className="mr-2 text-green-700" />
                Rewards
              </h2>
              <p className="text-gray-200 mb-4">Redeem your points for exclusive benefits</p>
              <div className="text-center mb-6">
                <motion.span
                  className="text-4xl font-bold"
                  key={userPoints}
                  initial={{ scale: 1.5, color: "#4ade80" }}
                  animate={{ scale: 1, color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  {userPoints}
                </motion.span>
                <span className="text-lg ml-2">Points</span>
              </div>
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex items-center justify-between bg-white bg-opacity-10 p-3 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <reward.icon className="h-6 w-6 text-green-700" />
                      <span>{reward.title}</span>
                    </div>
                    <button
                      className={`px-4 py-2 rounded ${
                        userPoints >= reward.points
                          ? "bg-yellow-500 text-white hover:bg-yellow-600"
                          : "border-yellow-500 text-yellow-500 border"
                      }`}
                      disabled={userPoints < reward.points}
                      onClick={() => handleRedeemReward(reward)}
                    >
                      {reward.points} pts
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white rounded-lg p-6">
              <h2 className="text-2xl flex items-center mb-4">
                <Calendar className="mr-2 text-green-700" />
                Wellness Programs
              </h2>
              <p className="text-gray-200 mb-4">Tailored for busy professionals</p>
              <div className="mb-4 flex">
                <button
                  className={`flex-grow px-4 py-2 rounded-l-md ${
                    activeTab === "personal" ? "bg-blue-500 text-white" : "bg-white bg-opacity-10"
                  }`}
                  onClick={() => setActiveTab("personal")}
                >
                  Personal Growth
                </button>
                <button
                  className={`flex-grow px-4 py-2 rounded-r-md ${
                    activeTab === "professional" ? "bg-blue-500 text-white" : "bg-white bg-opacity-10"
                  }`}
                  onClick={() => setActiveTab("professional")}
                >
                  Professional Development
                </button>
              </div>

              <AnimatePresence>
                {activeTab && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {programs
                        .filter((program) => program.category === activeTab)
                        .map((program) => (
                          <div
                            key={program.id}
                            className="flex items-center space-x-2 bg-white bg-opacity-10 p-3 rounded-lg"
                          >
                            <input type="checkbox" id={`program-${program.id}`} className="mr-2" />
                            <label htmlFor={`program-${program.id}`} className="flex-grow">
                              {program.title}{" "}
                              <span className="text-sm text-gray-300">({program.duration})</span>
                            </label>
                            <ChevronRight className="h-5 w-5 text-green-700" />
                          </div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6">
                <button className="w-full bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">
                  Enroll in Program
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Empowering professionals to thrive.</p>
        </div>
      </footer>

      {showRewardDialog && selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Redeem Reward</h3>
            <p className="mb-4">Are you sure you want to redeem this reward?</p>
            <div className="py-4">
              <h3 className="font-semibold">{selectedReward.title}</h3>
              <p>Points required: {selectedReward.points}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowRewardDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  setUserPoints((prevPoints) => prevPoints - selectedReward.points);
                  setShowRewardDialog(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
