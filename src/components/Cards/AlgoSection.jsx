import React from "react";

const AlgoSection = ({ title, viewAllLink, children }) => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">

      {/* Heading + View All */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <a
          href={viewAllLink}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          View All
        </a>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default AlgoSection;
