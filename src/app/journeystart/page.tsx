"use client"
import { ClipboardList, BookOpen, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JourneyStart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col">
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Your Mental Health Journey</h1>
          <p className="text-xl text-white mb-12">Choose an option to begin your path to well-being:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mental Health Check */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white hover:bg-opacity-30 transition-all duration-300 flex flex-col p-6 rounded">
              <div className="mb-4">
                <ClipboardList className="h-16 w-16 mb-4 text-green-200 mx-auto" />
                <h3 className="text-2xl font-bold text-green-200">Mental Health Check</h3>
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-white text-lg mb-4">Gain insights and get personalized recommendations.</p>
                <Link href="/mentalhealthcheck" passHref>
                  <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold px-4 py-2 rounded flex items-center justify-center">
                    Start Check
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Mental Health Articles */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white hover:bg-opacity-30 transition-all duration-300 flex flex-col p-6 rounded">
              <div className="mb-4">
                <BookOpen className="h-16 w-16 mb-4 text-blue-200 mx-auto" />
                <h3 className="text-2xl font-bold text-blue-200">Mental Health Articles</h3>
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-white text-lg mb-4">Explore articles on various mental health topics.</p>
                <Link href="/mentalhealtharticles" passHref>
                  <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold px-4 py-2 rounded flex items-center justify-center">
                    Read Articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Self-Care Journey */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md border-none text-white hover:bg-opacity-30 transition-all duration-300 flex flex-col p-6 rounded">
              <div className="mb-4">
                <Trophy className="h-16 w-16 mb-4 text-yellow-200 mx-auto" />
                <h3 className="text-2xl font-bold text-yellow-200">Self-Care Journey</h3>
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="text-white text-lg mb-4">Set goals and track your progress.</p>
                <Link href="/selfcarejourney" passHref>
                  <button className="w-full bg-white text-blue-600 hover:bg-green-100 font-semibold px-4 py-2 rounded flex items-center justify-center">
                    Begin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/dashboard" passHref>
              <button className="text-white hover:text-green-200 flex items-center justify-center">
                Skip onboarding
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ReachOut. Your journey to better mental health starts here.</p>
        </div>
      </footer>
    </div>
  );
}
