import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo3 from "../../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-[#0e1525] text-gray-300 border-t border-gray-700 ">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + About */}
          <div>
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <span>
                <img src={logo3} alt="logo" height={30} width={30} />
              </span> 
              AlgoVision
            </h2>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              A platform to visualize algorithms with intuitive animations and learning-friendly explanations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/sorting" className="hover:text-blue-400">
                  Sorting Algorithms
                </Link>
              </li>
              <li>
                <Link to="/searching" className="hover:text-blue-400">
                  Searching Algorithms
                </Link>
              </li>
              <li>
                <Link to="/graph" className="hover:text-blue-400">
                  Graph Algorithms
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex items-center gap-4 text-2xl">
              <a 
                href="https://github.com/smaurya4941" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/smaurya4941/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

              <a 
                href="https://x.com/smaurya4941" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AlgoVision — Built by Sachin Maurya ❤️  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
