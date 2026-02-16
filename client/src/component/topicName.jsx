import React, { useState } from "react";
import { motion } from "motion/react";
function TopicName() {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [revisionMode, setRevisionMode] = useState(false);
  const [includeDiagram, setIncludeDiagram] = useState(false);
  const [includeChart, setIncudeChart] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 mx-6 max-sm:mx-1 rounded-2xl bg-gradient-to-br bg-black/80 backdrop-drop-xl border border-white/10 p-8 grid grid-cols-1 gap-7"
      style={{ transformStyle: "preserve-3d" }}
    >
      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border placeholder-gray-400  border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter Topic(e.g. Web Development)"
        onChange={(e)=>setTopic(e.target.value)}
        value={topic}
      />
      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border placeholder-gray-400  border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Enter Topic(Class/Level e.g. class 10)"
        onChange={(e)=>setClassLevel(e.target.value)}
        value={classLevel}
      />
      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border placeholder-gray-400  border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder="Exam Type(e.g. CBSE, JEE, NEET)"
        onChange={(e)=>setExamType(e.target.value)}
        value={examType}
      />
    </motion.div>
  );
}

export default TopicName;
