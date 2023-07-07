import { useEffect, useRef } from "react";

export const BackgroundTimeline = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const element = backgroundRef.current;
      const line = lineRef.current;
      if (element && line) {
        const { top, bottom } = element.getBoundingClientRect();
        const ratio = Math.max(Math.min(top / (bottom - top - window.innerHeight), 0), -1);
        line.style.transform = `translateX(${ratio * 100}%)`;
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section id="background" ref={backgroundRef}>
      <div
        className="h-screen items-center justify-center"
        style={{
          height: "2100vh",
        }}
      >
        <div
          ref={lineRef}
          className={`sticky top-[25vh] mt-[25vh] mb-[75vh] ml-[50vw] left-0 duration-300 border-2 w-[2100px]`}
        />
      </div>
    </section>
  );
};
