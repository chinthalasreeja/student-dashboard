"use client";

import {
  Home,
  BookOpen,
  User,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
      fixed
      bottom-0
      left-0
      right-0
      md:hidden
      bg-black/80
      backdrop-blur
      border-t
      border-white/10
      flex
      justify-around
      p-4
    "
    >
      <Home />
      <BookOpen />
      <User />
    </nav>
  );
}