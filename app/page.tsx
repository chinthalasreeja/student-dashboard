import { supabase } from "../lib/supabase";
import Sidebar from "@/components/dashboard/Sidebar";
import MainContent from "@/components/dashboard/MainContent";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses1")
    .select("*");

  const courses = data || [];

  if (error) {
    return (
      <main className="p-10 text-red-500">
        <h1>Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <MainContent courses={courses} />
    </main>
  );
}