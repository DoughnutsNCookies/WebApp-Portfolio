import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import BackgroundTimeline from "./components/BackgroundTimeline";
import Projects from "./components/Projects";
import LiveLocation from "./components/LiveLocation";
import LetsTalk from "./components/LetsTalk";
import Background from "./components/Background";

export default function Home() {
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [displayEvent, setDisplayEvent] = useState<boolean>(false);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [resetProject, setResetProject] = useState<boolean>(true);
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <main>
      <title>Sean Chuah</title>
      <Background />
      <div
        className="translate-all h-full w-full font-playfair"
        style={{ scrollBehavior: "smooth" }}
      >
        <NavBar setShowContact={setShowContact} resetProject={resetProject} setResetProject={setResetProject} setShowProject={setShowProject} setDisplayEvent={setDisplayEvent} setEventIndex={setEventIndex} />
        <HomePage />
        <BackgroundTimeline displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <div className="h-[100vh] lg:h-[50vh]"></div>
        <Projects resetProject={resetProject} showProject={showProject} setShowProject={setShowProject} />
        <div className="h-[50vh]"></div>
        <LiveLocation />
        <LetsTalk showContact={showContact} setShowContact={setShowContact} />
      </div>
    </main>
  );
}
