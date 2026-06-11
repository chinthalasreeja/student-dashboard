"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = ["Home", "Courses", "Activity"];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside className="h-screen w-56 p-4 border-r border-white/10 bg-black text-white">
      
      <h2 className="text-xl font-bold mb-6">
        Dashboard
      </h2>

      <nav className="space-y-2 text-sm relative">
        {items.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className="relative p-2 cursor-pointer"
          >
            {active === item && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded"
              />
            )}

            <span className="relative z-10">{item}</span>
          </div>
        ))}
      </nav>

    </aside>
  );
}