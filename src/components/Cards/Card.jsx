import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Card = ({ topic, difficulty, algoName, description, link }) => {
    return (
        <div className="w-full max-w-sm p-5 bg-white rounded-xl shadow-md border hover:shadow-lg transition">

            {/* Title + Difficulty */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                    {algoName}
                </h2>

                <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                    {difficulty}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {description}
            </p>

            {/* Tag + Button */}
            <div className="flex items-center justify-between mt-5">

                {/* Tag */}
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                    {topic}
                </span>

                {/* Action Button */}
                <Link
                    to={link}
                    className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Visualize <HiArrowRight size={18} />
                </Link>

            </div>
        </div>
    );
};

export default Card;
