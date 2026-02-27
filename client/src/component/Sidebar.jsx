import React from "react";

function Sidebar({result}) {
    if( !result || !result.questions.long || !result.questions.short || !result.subTopics){
        return null;
    }
  return (
    <div className=" bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-6 ">
      <div className="flex items-center gap-2">
        <span className="text-xl">📌</span>
        <span className="font-bold text-lg text-indigo-600">Quick Exam View</span>
      </div>
      <section>
        <p className="text-sm font-semibold text-gray-700 mb-3">⭐ Sub topics (Priority Wise)</p>
        {
            Object.entries(result.subTopics).map(([star ,topics])=>(
                <div key={star} className="mb-3 rounded-lg bg-gray-50 border border-gray-200 p-3">
                    <p className="text-sm font-semibold text-yellow-600 mb-1">
                        {star} Priority
                    </p>
                </div>
            ))
        }
      </section>
    </div>
  );
}

export default Sidebar;
