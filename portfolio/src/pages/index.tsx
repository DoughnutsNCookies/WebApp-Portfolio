import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { BackgroundTimeline } from "./components/BackgroundTimeline";
import { Projects } from "./components/Projects";
import { LiveLocation } from "./components/LiveLocation";
import { LetsTalk } from "./components/LetsTalk";
import { Background } from "./components/Background";
import EventContext from "./contexts/EventContext";
import ProjectContext from "./contexts/ProjectContext";
import ContactContext from "./contexts/ContactContext";

export default function Home() {
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [displayEvent, setDisplayEvent] = useState<boolean>(false);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [resetProject, setResetProject] = useState<boolean>(true);
  const [showContact, setShowContact] = useState<boolean>(false);

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
          <ProjectContext.Provider
            value={{
              resetProject,
              setResetProject,
              showProject,
              setShowProject,
            }}
          >
            <ContactContext.Provider value={{ showContact, setShowContact }}>
              <NavBar />
              <HomePage />
              <BackgroundTimeline />
              <Projects />
              <div className="h-[50vh]"></div>
              <LiveLocation />
              <LetsTalk />
            </ContactContext.Provider>
          </ProjectContext.Provider>
        </EventContext.Provider>
      </div>
    </main>
  );
}
