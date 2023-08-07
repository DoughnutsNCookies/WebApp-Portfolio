import { useEffect, useMemo, useRef, useState } from "react";

class TimelineEvent {
  constructor(date: Date, title: string, description: string) {
    this.date = date;
    this.title = title;
    this.description = description;
  }

  get positionRatio() {
    const now = new Date().getTime();
    return (
      100 -
      ((now - this.date.getTime()) /
        (now - new Date("May 3, 2002").getTime())) *
        100
    );
  }

  date: Date;
  title: string;
  description: string;
}

const events = [
  new TimelineEvent(
    new Date("May 3, 2002"),
    "Hello World",
    "Born and raised in a super-loving family of five."
  ),
  new TimelineEvent(
    new Date("January 2007"),
    "My First Piano Lesson",
    "At 5 years old, I started playing the piano and I fell in love with it."
  ),
  new TimelineEvent(
    new Date("January 2009"),
    "Primary School",
    "At 7 years old, I started primary school at SJK(C) Chung Hua. Life was just peaceful with the only worry being homework."
  ),
  new TimelineEvent(
    new Date("January 2015"),
    "Visi Tutor",
    "At 13 years old, I moved from primary school to Visi Tutor for my IGCSE studies."
  ),
  new TimelineEvent(
    new Date("July 2015"),
    "Church Pianist",
    "I volunteered as a pianist at my local church. Every week, we would gather to jam and practice, pushing ourselves to improve."
  ),
  new TimelineEvent(
    new Date("January 2018"),
    "College Life",
    "At 16 years old, I joined the Foundation In Arts programme at Sunway College, being the youngest in my class"
  ),
  new TimelineEvent(
    new Date("March 2019"),
    "University Life",
    "At 17 years old, I was interested in the music industry, so pursued an Audio Engineering degree at Sunway University."
  ),
  new TimelineEvent(
    new Date("May 2021"),
    "Grade 8 Piano",
    "At 19 years old, I completed my Grade 8 piano. Huge shoutout to my incredible piano teacher. She had my back since day one, the real MVP."
  ),
  new TimelineEvent(
    new Date("August 2021"),
    "Coding Adventure",
    "Wrote my first code in Python, taught myself the ropes using YouTube tutorials and reading documentation."
  ),
  new TimelineEvent(
    new Date("December 2021"),
    "Internship",
    "Soun designer intern at Vine Music Studio working on sounds for ads. I could feel my passion shifting toward coding, slowly but surely."
  ),
  new TimelineEvent(
    new Date("May 2022"),
    "42KL Piscine",
    "I took part in 42KL's intense one-month BootCamp called the Piscine. It was intense but I definitely learned a lot of things. Without a doubt, that month was the best time of my life."
  ),
  new TimelineEvent(
    new Date("July 2022"),
    "42KL Cadet",
    "I'd made it into the core programme! Marking the beginning of my journey being a cadet of 42KL. I met more awesome new friends, with more things to learn from each other."
  ),
  new TimelineEvent(
    new Date("August 2022"),
    "No Regrets",
    "My passion for sound design was at its lowest, so I ended my gig at Vine Music Studio. I knew it was time to shift gears and fully concentrate on 42KL and coding."
  ),
  new TimelineEvent(
    new Date("June 2023"),
    "Completed Cadetship",
    "At 21 years old, I become the first cadet in 42KL to complete the Core Programme in less than a year. Now, I'm diving into specialization within 42KL, ready to level up my coding skills even more."
  ),
  new TimelineEvent(
    new Date(),
    "Present",
    "Here we are now, with you looking at my portfolio. Thank you for taking the time to read through my timeline and I hope you enjoyed it!"
  ),
];

export const BackgroundTimeline = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const movingTriangleRef = useRef<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [eventIndex, setEventIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (movingTriangleRef.current) return;

      const background = backgroundRef.current;
      const line = lineRef.current;
      const triangle = triangleRef.current;

      if (!background || !line || !triangle) return;

      const { top, bottom } = background.getBoundingClientRect();

      if (top > 0) {
        setEventIndex(0);
        return;
      } else if (bottom < window.innerHeight) {
        setEventIndex(events.length - 1);
        return;
      }

      setEventIndex((prev) => {
        if (event.deltaY < 0) {
          return prev === 0 ? prev : prev - 1;
        } else {
          return prev === events.length - 1 ? prev : prev + 1;
        }
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    movingTriangleRef.current = true;
    const background = backgroundRef.current;
    const triangle = triangleRef.current;
    const line = lineRef.current;

    if (!background || !line || !triangle) return;
    const { top, bottom } = background.getBoundingClientRect();

    const target = -events[eventIndex].positionRatio / 100;
    if (eventIndex === events.length - 1) {
      window.scrollTo(
        0,
        (document.getElementById("timeline" + eventIndex)?.offsetTop || 0) -
          window.innerHeight / 3
      );
    } else if (eventIndex !== 0) {
      window.scrollTo(
        0,
        document.getElementById("timeline" + eventIndex)?.offsetTop || 0
      );
    }

    let ratio = Math.max(
      Math.min(top / (bottom - top - window.innerHeight * 2), 0),
      -1
    );
    ratio = target;

    let atEvent = false;
    for (let event of events) {
      if (
        -ratio * 100 >= event.positionRatio - 0.5 &&
        -ratio * 100 <= event.positionRatio + 0.5
      ) {
        atEvent = true;
        break;
      }
    }

    setDate(
      eventIndex === 0
        ? "3rd May 2002"
        : eventIndex === events.length - 1
        ? "Present"
        : events[eventIndex].date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })
    );

    line.style.transform = `translateX(${ratio * 100}%)`;
    triangle.style.marginBottom = top < (top - bottom) / 2 ? "77vh" : "0";
    setTimeout(() => {
      movingTriangleRef.current = false;
    }, 300);
  }, [eventIndex]);

  return (
    <section id="background" ref={backgroundRef}>
      {events.map((myEvent: TimelineEvent, index: number) => (
        <div
          key={index}
          id={"timeline" + index}
          className="absolute h-[100vh]"
          style={{
            top: (index + 1) * 100 + "vh",
          }}
        />
      ))}
      <div
        className="text-center flex flex-col"
        style={{
          height: events.length + "00vh",
        }}
      >
        <DateIndicator
          triangleRef={triangleRef}
          date={date}
          onEvent={events[eventIndex]}
        />
        <TimeLine
          lineRef={lineRef}
          onEvent={events[eventIndex]}
        />
      </div>
    </section>
  );
};

interface DateIndicatorProps {
  triangleRef: React.RefObject<HTMLDivElement>;
  date: string;
  onEvent: TimelineEvent | null;
}

const DateIndicator = (props: DateIndicatorProps) => {
  const { triangleRef, date, onEvent } = props;

  return (
    <div
      ref={triangleRef}
      className="sticky top-[18vh] mt-[25vh] w-[100vw]"
      style={{
        marginBottom: "77vh",
        transition: "transform 1s ease-in-out",
      }}
    >
      <p className="text-xl">{date}</p>
      <div className="ml-[50vw] -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[25px] border-t-accentColor border-r-[12px] border-r-transparent transition-all" />
      <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 transition-all border-2 border-backgroundColor bg-backgroundColor text-secondaryColor p-10 rounded-md w-[60vw]">
        <h1
          className="text-6xl tracking-tight pb-6"
          style={{
            textShadow: "10px 10px 25px #5ACEBA7D",
          }}
        >
          {onEvent?.title}
        </h1>
        <p
          className="font-lato text-2xl tracking-wider"
          style={{
            textShadow: "2px 2px 10px #5ACEBA7D",
          }}
        >
          {onEvent?.description}
        </p>
      </div>
    </div>
  );
};

interface TimelineProps {
  lineRef: React.RefObject<HTMLDivElement>;
  onEvent: TimelineEvent | null;
}

const TimeLine = (props: TimelineProps) => {
  const { lineRef, onEvent } = props;

  return (
    <div
      ref={lineRef}
      className="sticky top-[25vh] mb-[75vh] transition-all mt-[2vh] ml-[50vw] left-0 border-t-4 border-primaryColor"
      style={{
        width:
          (
            (new Date().getTime() - new Date("May 3, 2002").getTime()) /
            157680000
          ).toFixed(0) + "px",
        transform: `translateX(0)`,
        transition: "transform 1s ease-in-out",
      }}
    >
      {events.map((myEvent: TimelineEvent, index: number) => (
        <div
          key={index}
          className={`${
            onEvent === myEvent ? "w-6 h-6 -top-[14px]" : "w-4 h-4 -top-[10px]"
          } -translate-x-1/2 transition-all absolute rounded-full bg-accentColor`}
          style={{
            left: `${myEvent.positionRatio.toPrecision(6).toString()}%`,
          }}
        />
      ))}
    </div>
  );
};
