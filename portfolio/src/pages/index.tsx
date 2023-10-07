import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import BackgroundTimeline from "./components/BackgroundTimeline";
import Projects from "./components/Projects";
import LiveLocation from "./components/LiveLocation";
import LetsTalk from "./components/LetsTalk";
import Background from "./components/Background";
import Head from "next/head";

export default function Home() {
  const [eventIndex, setEventIndex] = useState<number>(0);
  const [displayEvent, setDisplayEvent] = useState<boolean>(false);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [resetProject, setResetProject] = useState<boolean>(true);
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <main>
      <Head>
        <title>Sean Chuah</title>
        <meta name="title" content="Sean Chuah" />
        <meta name="description" content="Hi, I'm Sean! Welcome to my portfolio!" />
        <meta name="keywords" content="website portfolio sean schuah chuah tse yung shawn webpage personal" />
        <meta name="author" content="Sean Chuah Tse Yung" />
        <meta name="theme-color" content="#242424" />

        <meta property="og:title" content="Sean Chuah" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schuah.me" />
        <meta property="og:image" content="https://schuah.me/assets/MetadataImage.png" />
        <meta property="og:description" content="Hi, I'm Sean! Welcome to my portfolio!" />

        <meta property="twitter:title" content="Sean Chuah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://schuah.me" />
        <meta property="twitter:image" content="https://schuah.me/assets/MetadataImage.png" />
        <meta property="twitter:description" content="Hi, I'm Sean! Welcome to my portfolio!" />
      </Head>
      <Background />
      <div
        className="translate-all h-full w-full font-playfair"
        style={{ scrollBehavior: "smooth" }}
      >
        <NavBar setShowContact={setShowContact} resetProject={resetProject} setResetProject={setResetProject} setShowProject={setShowProject} setDisplayEvent={setDisplayEvent} setEventIndex={setEventIndex} />
        <HomePage />
        <BackgroundTimeline displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <div className="h-[40vh] lg:h-[50vh]"></div>
        <Projects resetProject={resetProject} showProject={showProject} setShowProject={setShowProject} />
        <div className="h-[20vh]"></div>
        <LiveLocation />
        <LetsTalk showContact={showContact} setShowContact={setShowContact} />
      </div>
    </main>
  );
}
