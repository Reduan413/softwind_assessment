"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const tabsData = [
  { id: "variants", label: "Variants" },
  { id: "brands", label: "Brands" },
]

const Tabs=()=> {
  const [activeTab, setActiveTab] = useState("variants")

  return (
    <div className="flex items-center justify-center  ">
      <div className="relative bg-[#ffffff8f] backdrop-blur-sm rounded-full  shadow-lg border border-[#00B185]">
        <div className="relative flex">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-6 py-3 text-base font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id ? "text-white" : "text-[#00B185] "
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
              x: activeTab === "variants" ? 4 : "calc(100% + 12px)",
              width: activeTab === "variants" ? "calc(50% - 8px)" : "calc(50% - 8px)",
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


export default Tabs