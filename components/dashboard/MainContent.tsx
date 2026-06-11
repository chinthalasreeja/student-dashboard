"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import CourseSkeleton from "./CourseSkeleton";

export default function MainContent({ courses }: any) {
  return (
    <motion.section
      className="flex-1 p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <h1 className="text-3xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="grid gap-4 lg:grid-cols-3 auto-rows-[140px]">

        {/* HERO TILE */}
        <motion.div
          className="lg:col-span-2 lg:row-span-2 p-6 rounded-xl border border-white/10 bg-white/5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-2xl font-semibold">
            Welcome back 👋
          </h2>
          <p className="text-white/60 mt-2">
            Keep going, you're doing great 🚀
          </p>
        </motion.div>

        {/* COURSES OR SKELETON */}
        {courses.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <CourseSkeleton key={i} />
            ))
          : courses.map((course: any, i: number) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}

        {/* ACTIVITY TILE */}
        <motion.div
          className="lg:col-span-1 lg:row-span-2 p-6 rounded-xl border border-white/10 bg-white/5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-lg font-semibold mb-4">
            Activity
          </h2>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="h-4 rounded bg-white/10" />
            ))}
          </div>
        </motion.div>

      </div>

    </motion.section>
  );
}