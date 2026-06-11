"use client";

import { motion } from "framer-motion";

type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      className="
        p-4 rounded-xl
        border border-white/10
        bg-white/5
        text-white
        transition
        hover:scale-[1.03]
        hover:border-white/30
        hover:shadow-lg
        hover:shadow-white/5
      "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      
      <h2 className="text-lg font-semibold">
        {course.title}
      </h2>

      <p className="text-sm opacity-70 mt-1">
        Progress: {course.progress}%
      </p>

      <div className="w-full h-2 bg-white/10 rounded mt-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>

    </motion.div>
  );
}