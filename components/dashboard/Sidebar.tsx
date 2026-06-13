"use client";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: BookOpen,
    label: "Courses",
  },
  {
    icon: BarChart3,
    label: "Activity",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      hidden
      md:flex
      flex-col
      bg-white/5
      border-r
      border-white/10
      p-4
      lg:w-60
      md:w-20
      min-h-screen
    "
    >
      <div className="mb-10 text-xl font-bold">
        SD
      </div>

      <nav className="space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
  key={item.label}
  className="
    flex
    items-center
    gap-3
    w-full
    rounded-xl
    p-3
    text-white/70

    hover:text-white
    hover:bg-violet-500/20
    hover:border
    hover:border-violet-400
    hover:shadow-lg
    hover:shadow-violet-500/30
    hover:translate-x-1

    transition-all
    duration-300
  "
>
              <Icon size={20} />

              <span className="hidden lg:block">
                {item.label}
              </span>
            </button>
          );
        })}

      </nav>
    </aside>
  );
}