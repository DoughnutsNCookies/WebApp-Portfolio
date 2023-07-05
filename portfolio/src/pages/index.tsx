import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { BackgroundTimeline } from "./components/BackgroundTimeline";
import { Projects } from "./components/Projects";
import { LiveLocation } from "./components/LiveLocation";
import { LetsTalk } from "./components/LetsTalk";
import { Background } from "./components/Background";

export default function Home() {
  return (
    <main>
      <Background />
      <div
        className="translate-all h-full font-playfair"
        style={{ scrollBehavior: "smooth" }}
      >
        <NavBar />
        <HomePage />
        <BackgroundTimeline />
        <Projects />
        <LiveLocation />
        <LetsTalk />
      </div>
    </main>
  );
}
