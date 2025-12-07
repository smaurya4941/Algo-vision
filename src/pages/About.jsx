import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0e1525] text-gray-300 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">About AlgoVision</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          AlgoVision is an interactive algorithm visualization platform designed to help 
          students, developers, and tech enthusiasts understand complex Data Structures 
          and Algorithms through clear, step-by-step visual animations. 
          With AlgoVision, learning algorithms becomes intuitive, engaging, and far easier 
          than traditional textbook-based approaches.
        </p>

        {/* Purpose Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Our Purpose</h2>
          <p className="text-gray-400 leading-relaxed">
            Understanding how algorithms work internally can be challenging when relying only 
            on code or theoretical explanations. AlgoVision bridges this gap by providing a 
            hands-on, visual learning experience. Each algorithm is demonstrated with 
            animations, pseudocode highlighting, and clear execution flow—helping learners 
            truly grasp the logic, comparisons, swaps, and decisions made at every step.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Key Features</h2>

          <ul className="space-y-3 text-gray-300">
            <li>✨ Interactive, step-by-step visualization of algorithms</li>
            <li>📊 Supports Sorting & Searching algorithms for stronger DSA fundamentals</li>
            <li>🎯 Pseudocode highlighting for clear understanding of each executed step</li>
            <li>⚡ Clean, modern UI with category-based organization</li>
            <li>🧠 Designed for students, developers, and interview preparation</li>
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
            <span className="px-4 py-2 bg-gray-800 rounded-lg text-center">Algorithm Logic Module</span>
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
