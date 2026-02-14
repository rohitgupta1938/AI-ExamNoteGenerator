import React from "react";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <motion.footer
      className="bg-black/90 text-white pt-12 pb-6 px-6 rounded-t-2xl"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 15 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-2xl font-bold">AI Exam Notes Generator</h2>
            <p className="text-gray-300 mt-3 text-sm">
              Generate exam-ready notes instantly with AI.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer">
                f
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 cursor-pointer">
                t
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 cursor-pointer">
                in
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 cursor-pointer">
                yt
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Study Tips</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get updates & new features.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-2 pr-5 py-2 rounded-lg border border-white outline-none"
              />
              <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AI Exam Notes Generator. All Rights
          Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
