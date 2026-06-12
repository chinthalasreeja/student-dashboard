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
                hover:bg-white/10
                transition
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