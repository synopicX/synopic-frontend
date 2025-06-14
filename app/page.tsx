"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-background text-foreground transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className="px-10 py-6 text-4xl font-bold rounded-lg border border-border bg-primary text-primary-foreground hover:brightness-110 transition"
      >
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </main>
  );
}
