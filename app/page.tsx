"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const bgColorTheme = theme === "dark" ? "bg-black" : "bg-slate-100";
    setBgColor(bgColorTheme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen ${bgColor} transition-colors duration-300 p-2 poppins`}
    >
      <Header />
    </div>
  );
}
