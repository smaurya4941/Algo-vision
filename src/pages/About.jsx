import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0e1525] text-gray-300 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">About AlgoAnimator</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          AlgoAnimator is an interactive algorithm visualization platform designed to help 
          students, developers, and tech enthusiasts understand complex algorithms through 
          intuitive step-by-step animations. Whether you're preparing for coding interviews or 
          building strong problem-solving skills, AlgoAnimator makes learning algorithms easy and enjoyable.
        </p>

        {/* Vision Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Our Purpose</h2>
          <p className="text-gray-400 leading-relaxed">
            Understanding algorithms can be difficult when learning only from textbooks.  
            AlgoAnimator bridges this gap by providing a hands-on, visual learning experience.  
            Each algorithm is presented with animations, explanations, difficulty level, and examples 
            so learners can fully grasp the logic behind the operations.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Key Features</h2>

          <ul className="space-y-3 text-gray-300">
            <li>✨ Step-by-step algorithm visualizations</li>
            <li>📊 Covers Sorting, Searching and more categories</li>
            <li>🎯 Difficulty levels (Easy, Medium, Hard)</li>
            <li>⚡ Clean, modern UI with category-based organization</li>
            <li>🧠 Ideal for students, developers, and interview preparation</li>
          </ul>
        </section>

        {/* Technology Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Tech Stack</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">React.js</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">JavaScript ES6</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">React Router</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">Algorithm Logic</span>
          </div>
        </section>

        {/* Developer Section */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Built By</h2>
          <p className="text-gray-300 text-xl font-medium">Sachin Maurya</p>
          <p className="text-gray-500 mt-1">
            B.Tech CSE | Developer • Problem Solver • Algorithm Enthusiast
          </p>

          <div className="mt-4">
            <a
              href="https://github.com/smaurya4941"
              target="_blank"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Visit GitHub Profile
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
