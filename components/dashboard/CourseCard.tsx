"use client";

import { motion } from "framer-motion";

type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      p-5
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur
      text-white
      overflow-hidden
      relative
    "
    >
      <h2 className="text-lg font-semibold">
        {course.title}
      </h2>

      <p className="mt-2 text-sm text-white/60">
        Progress: {course.progress}%
      </p>

      <div className="mt-4 h-2 rounded bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="
          h-full
          rounded
          bg-gradient-to-r
          from-violet-500
          to-blue-500
        "
        />
      </div>
    </motion.article>
  );
}