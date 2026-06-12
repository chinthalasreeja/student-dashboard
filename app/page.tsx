import { supabase } from "../lib/supabase";
import Sidebar from "@/components/dashboard/Sidebar";
import CourseCard from "@/components/dashboard/CourseCard";
import AnimatedGrid from "@/components/dashboard/AnimatedGrid";
import MobileNav from "@/components/dashboard/MobileNav";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses1")
    .select("*");

  const courses = data || [];

  if (error) {
    return (
      <main className="min-h-screen p-10 bg-black text-red-500">
        <h1 className="text-2xl font-bold">
          Supabase Error
        </h1>

        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      relative
      overflow-y-auto
    "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_35%)]
      "
      />

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <section
className="
flex-1
p-6
relative
z-10
overflow-y-auto
pb-28
"
>

        <h1 className="text-3xl font-bold mb-6">
          Student Dashboard
        </h1>

        <AnimatedGrid>

          {/* HERO TILE */}

          <article
            className="
            lg:col-span-2
            lg:row-span-2
            rounded-3xl
            bg-gradient-to-br
            from-violet-500/10
            to-blue-500/10
            border
            border-white/10
            p-8
            backdrop-blur
          "
          >
            <h2 className="text-4xl font-bold">
              Welcome back 👋
            </h2>

            <p className="mt-4 text-white/60">
              Daily Learning Streak • 14 Days
            </p>

            <div className="mt-8 flex gap-3">

              <div className="px-4 py-2 rounded-full bg-violet-500/20">
                React
              </div>

              <div className="px-4 py-2 rounded-full bg-blue-500/20">
                Next.js
              </div>

            </div>

          </article>

          {/* COURSE TILES */}

          {courses.map((course: any) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

          {/* ACTIVITY */}

          <article
            className="
            lg:col-span-1
            lg:row-span-2
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur
            p-6
            hover:border-violet-500/40
            transition
          "
          >
            <h2 className="text-lg font-semibold mb-6">
              Activity
            </h2>

            <div className="grid grid-cols-7 gap-2">

              {Array.from({
                length: 28,
              }).map((_, i) => (
                <div
                  key={i}
                  className="
                  h-5
                  rounded
                  bg-white/10
                "
                />
              ))}

            </div>

          </article>

        </AnimatedGrid>

      </section>

      <MobileNav />

    </main>
  );
}