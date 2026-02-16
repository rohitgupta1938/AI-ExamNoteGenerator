import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import TopicName from "../component/topicName";
function Notes() {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=" mx-6 mt-8 rounded-xl bg-black/80 backdrop-drop-xl border border-white/10 py-4 px-4 max-sm:mx-1 shadow-[0_25px_50px_rgba(0,0,0,0.75)]
 flex flex-wrap gap-5 items-center justify-between"
      >
        <div
          className="cursor-pointer hover:text-white/50"
          onClick={() => navigate("/")}
        >
          <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            ExamNotes AI
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            AI powered exam-oriented notes & revision
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative" onClick={() => navigate("/pricing")}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 cursor-pointer rounded-full px-4 py-2 bg-black/10 border border-white/20 text-white text-sm shadow-md"
            >
              <span>10</span>
              <span className="text-xl flex items-center">💎</span>
              <span className="flex justify-center items-center h-5 w-5 bg-white rounded-full text-black">
                ➕
              </span>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              onClick={() => navigate("/history")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-1 cursor-pointer rounded-full px-4 py-2 bg-black/10 border border-white/20 text-white text-sm shadow-md"
            >
              <span className="text-lg">📒Your Notes</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      >
        <TopicName />
      </motion.div>
    </div>
  );
}

export default Notes;
