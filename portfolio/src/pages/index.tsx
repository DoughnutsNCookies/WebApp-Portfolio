import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { BackgroundTimeline } from "./components/BackgroundTimeline";
import { Projects } from "./components/Projects";
import { LiveLocation } from "./components/LiveLocation";
import { LetsTalk } from "./components/LetsTalk";
import { Background } from "./components/Background";
import EventContext from "./contexts/EventContext";

export default function Home() {
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [displayEvent, setDisplayEvent] = useState<boolean>(false);

  return (
    <main>
      <Background />
      <div
        className="translate-all h-full w-full font-playfair"
        style={{ scrollBehavior: "smooth" }}
      >
        <EventContext.Provider
          value={{ displayEvent, setDisplayEvent, eventIndex, setEventIndex }}
        >
          <NavBar />
          <HomePage />
          <BackgroundTimeline />
          <Projects />
          {/* <div className="h-screen"></div> */}
          <LiveLocation />
          <LetsTalk />
        </EventContext.Provider>
      </div>
    </main>
  );
}
