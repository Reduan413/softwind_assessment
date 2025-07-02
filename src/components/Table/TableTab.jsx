"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const tabsData = [
  { id: "compare", label: "Compare" },
  { id: "dashboard", label: "Dashboard" },
]

const TableTab=()=> {
  const [activeTab, setActiveTab] = useState("compare")

  return (
    <div className="flex items-center justify-center  py-4 -rotate-90">
      <div className="relative   rounded-full  ">
        <div className="relative flex">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-8 py-3 text-base font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id ? "text-white" : "text-[#000000] "
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Animated background */}
          <motion.div
            className="absolute top-1 bottom-1 bg-[#00B185] rounded-full shadow-md"
            initial={false}
            animate={{
              x: activeTab === "compare" ? 4 : "calc(100% + 12px)",
              width: activeTab === "compare" ? "calc(50% - 8px)" : "calc(50% - 8px)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </div>
      </div>
    </div>
  )
}


export default TableTab