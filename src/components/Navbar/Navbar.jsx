import React from "react";
import { FaGithub } from "react-icons/fa";
import logo3 from '../../assets/logo3.png';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="w-full border-b bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* ------ Logo ------ */}
                <div className="flex items-center space-x-2">
                    <span className="text-blue-600 text-2xl"> <img className="" src={logo3} alt="" height={40} width={40} /> </span>
                    <h1 className="text-xl font-semibold text-blue-600">
                        AlgoVision
                    </h1>
                </div>

                {/* ------ Navigation Links ------ */}
                <div className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
                    <Link to="/"  className="hover:text-blue-600 transition">
                        Home
                        {/* <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"></span> */}
                    </Link>
                    <Link to="about" className="hover:text-blue-600 transition">About</Link>
                    <Link to="sorting" className="hover:text-blue-600 transition">Sorting</Link>
                    <Link to="searching" className="hover:text-blue-600 transition">Searching</Link>
                    <Link to="graph" className="hover:text-blue-600 transition">Graph</Link>
                </div>

                {/* ------ GitHub Icon ------ */}
                <a
                    href="https://github.com/smaurya4941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition"
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
