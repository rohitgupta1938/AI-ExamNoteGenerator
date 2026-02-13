import React, { useState } from "react";
import { AnimatePresence, motion, scale } from "motion/react";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
function Navbar() {
  const userData = useSelector((state) => state.user.userData);
  const [showCredits, setShowCredits] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className=" mx-6 mt-8 rounded-xl bg-black/80 backdrop-drop-xl border border-white/10 py-3 px-4 max-sm:mx-1 shadow-[0_20px_45px_ragba(0,0,0,0.6)] flex items-center justify-between"
    >
      <div className="flex  items-center gap-3">
        <img src={logo} alt="Logo" className="rounded-full h-9 w-9" />
        <span className="text-lg text-white hidden md:block font-semibold">
          ExamNotes <span className="text-gray-400">Ai</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 cursor-pointer rounded-full px-4 py-2 bg-black/10 border border-white/20 text-white text-sm shadow-md"
          >
            <span>{userData.credits}</span>
            <span className="text-xl flex items-center">💎</span>
            <span
              onClick={() => {
                setShowCredits(!showCredits);
                setShowProfile(false);
              }}
              className="flex justify-center items-center h-5 w-5 bg-white rounded-full text-black"
            >
              ➕
            </span>
          </motion.div>

          {showCredits && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute -right-15 bg-black/90 mt-4 w-64 p-4 text-white rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_20px_45px_ragba(0,0,0,0.6)]"
              >
                <h1 className="font-semibold mb-2">Buy Credits</h1>
                <p className="text-base text-gray-300 mb-4">
                  Use Credit to generate Ai Notes, Diagram and PDF
                </p>
                <button
                  onClick={() => setShowCredits(false)}
                  className="w-full bg-white text-black py-2 rounded-lg cursor-pointer hover:bg-white/90"
                >
                  Buy More Credits
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="relative">
          <motion.div
          onClick={()=>{setShowProfile(!showProfile); setShowCredits(false)}}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-1 cursor-pointer rounded-full px-4 py-2 bg-black/10 border border-white/20 text-white text-sm shadow-md"
          >
            <span  className="text-lg">
              {userData.name.slice(0, 1).toUpperCase()}
            </span>
          </motion.div>
          {showProfile && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute right-0 bg-black/90 mt-4 w-50 p-4 text-white rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_20px_45px_ragba(0,0,0,0.6)]"
              >
                <h1 className="font-semibold mb-2">Buy Credits</h1>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
