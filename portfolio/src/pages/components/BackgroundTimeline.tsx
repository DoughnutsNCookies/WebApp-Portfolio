import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

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
        (now - new Date(2002, 4, 15).getTime())) *
        100
    );
  }

  date: Date;
  title: string;
  description: string;
}

const events = [
  new TimelineEvent(
    new Date(2002, 4, 15),
    "Hello World",
    "Hello! I was born on this date, raised in a super-loving family of five."
  ),
  new TimelineEvent(
    new Date(2007, 0),
    "My First Piano Lesson",
    "At 5 years old, I started playing the piano and I fell in love with it instantly."
  ),
  new TimelineEvent(
    new Date(2009, 0),
    "Primary School",
    "At 7 years old, I started primary school at SJK(C) Chung Hua. Life was just peaceful with the only worry being homework."
  ),
  new TimelineEvent(
    new Date(2015, 0),
    "Visi Tutor",
    "At 13 years old, I moved from primary school to Visi Tutor for my IGCSE studies."
  ),
  new TimelineEvent(
    new Date(2015, 6),
    "Church Pianist",
    "I volunteered as a pianist at my local church. Every week, we would gather to jam and practice, pushing ourselves to improve."
  ),
  new TimelineEvent(
    new Date(2018, 0),
    "College Life",
    "At 16 years old, I joined the Foundation In Arts programme at Sunway College, being the youngest in my class"
  ),
  new TimelineEvent(
    new Date(2019, 2),
    "University Life",
    "At 17 years old, I was interested in the music industry, so pursued an Audio Engineering degree at Sunway University."
  ),
  new TimelineEvent(
    new Date(2021, 4),
    "Grade 8 Piano",
    "At 19 years old, I completed my Grade 8 piano. Huge shoutout to my incredible piano teacher. She had my back since day one, the real MVP."
  ),
  new TimelineEvent(
    new Date(2021, 7),
    "Coding Adventure",
    "Wrote my first code in Python, taught myself the ropes using YouTube tutorials and reading documentation."
  ),
  new TimelineEvent(
    new Date(2021, 11),
    "Internship",
    "Sound designer intern at Vine Music Studio working on sounds for ads. I could feel my passion shifting toward coding, slowly but surely."
  ),
  new TimelineEvent(
    new Date(2022, 4),
    "42KL Piscine",
    "I took part in 42KL's intense one-month BootCamp called the Piscine. It was intense but I definitely learned a lot of things. Without a doubt, that month was the best time of my life."
  ),
  new TimelineEvent(
    new Date(2022, 6),
    "42KL Cadet",
    "I'd made it into the core programme! Marking the beginning of my journey being a cadet of 42KL. I met more awesome new friends, with more things to learn from each other."
  ),
  new TimelineEvent(
    new Date(2022, 7),
    "No Regrets",
    "My passion for sound design was at its lowest, so I ended my gig at Vine Music Studio. I knew it was time to shift gears and fully concentrate on 42KL and coding."
  ),
  new TimelineEvent(
    new Date(2023, 5),
    "Completed Cadetship",
    "At 21 years old, I become the first cadet in 42KL to complete the Core Programme in less than a year. Now, I'm diving into specialization within 42KL, ready to level up my coding skills even more."
  ),
  new TimelineEvent(
    new Date(),
    "Present",
    "Here we are now, with you looking at my portfolio. Thank you for taking the time to read through my timeline and I hope you enjoyed it!"
  ),
];

interface BackgroundTimelineProps {
  displayEvent: boolean;
  setDisplayEvent: (display: boolean) => void;
  eventIndex: number;
  setEventIndex: (index: any) => void;
}

const BackgroundTimeline = (props: BackgroundTimelineProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const movingTriangleRef = useRef<boolean>(false);
  const [date, setDate] = useState<string>("");
  const { displayEvent, setDisplayEvent, eventIndex, setEventIndex } = props;
  const [deltaY, setDeltaY] = useState<number>(0);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setDeltaY(eventData.deltaY * -1);
    },
  });

  useEffect(() => {
    const handleScroll = (event: any) => {
      setDeltaY(event.deltaY);
    }
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [])

  useEffect(() => {
    if (movingTriangleRef.current) return;

    const background = backgroundRef.current;
    const line = lineRef.current;
    const triangle = triangleRef.current;

    if (!background || !line || !triangle) return;

    const { top, bottom } = background.getBoundingClientRect();

    setDisplayEvent(true);
    if (top > 0) {
      setEventIndex(0);
      return;
    } else if (bottom < window.innerHeight) {
      setEventIndex(events.length - 1);
      return;
    }

    setEventIndex((prev: number) => {
      return deltaY < 0
        ? prev === 0
          ? prev
          : prev - 1
        : prev === events.length - 1
        ? prev
        : prev + 1;
    });
  }, [deltaY]);

  useEffect(() => {
    movingTriangleRef.current = true;
    const background = backgroundRef.current;
    const triangle = triangleRef.current;
    const line = lineRef.current;

    if (!background || !line || !triangle) return;
    const { top, bottom } = background.getBoundingClientRect();

    var index = eventIndex;
    triangle.style.marginBottom = top < (top - bottom) / 2 ? "77vh" : "0";
    if (index == 0) {
      triangle.style.marginBottom = "0";
    }

    if (index < 0)
      index = 0;
    else if (index > events.length - 1)
      index = events.length - 1;

    const target = -events[index].positionRatio / 100;
    if (index === events.length - 2) {
      window.scrollTo(
        0,
        document.getElementById("timeline" + index)?.offsetTop || 0
      );
    } else if (index === 1) {
      window.scrollTo(0, document.getElementById("timeline1")?.offsetTop || 0);
    }

    let ratio = Math.max(
      Math.min(top / (bottom - top - window.innerHeight * 2), 0),
      -1
    );
    ratio = target;

    setDate(
      index === 0
        ? "3rd May 2002"
        : index === events.length - 1
        ? "Present"
        : events[index].date.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        })
    );

    line.style.transform = `translateX(${ratio * 100}%)`;
    setTimeout(() => {
      movingTriangleRef.current = false;
    }, 300);
  }, [eventIndex]);

  return (
    <section
      id="background"
      ref={backgroundRef}
      className={`${displayEvent ? "opacity-100" : "opacity-0"} transition-all overflow-x-clip`}
    >
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
        {...handlers}
        className="text-center flex flex-col"
        style={{
          height: events.length + "00vh",
        }}
      >
        <DateIndicator
          triangleRef={triangleRef}
          date={date}
          onEvent={events[eventIndex]}
          end={eventIndex === events.length - 1}
          eventIndex={eventIndex}
          setEventIndex={setEventIndex}
        />
        <TimeLine lineRef={lineRef} onEvent={events[eventIndex]} />
      </div>
    </section>
  );
};

interface DateIndicatorProps {
  triangleRef: React.RefObject<HTMLDivElement>;
  date: string;
  onEvent: TimelineEvent | null;
  end: boolean;
  eventIndex: number;
  setEventIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DateIndicator = (props: DateIndicatorProps) => {
  const { triangleRef, date, onEvent, end, eventIndex, setEventIndex } = props;

  return (
    <div
      ref={triangleRef}
      className={`sticky top-[16vh] mb-[77vh] mt-[25vh] w-[100vw] ${end ? "h-[70px]" : "h-[50px]"}`}
      style={{
        transition: "transform 1s ease-in-out",
      }}
    >
      <p className="text-xl">{date}</p>
      <div className="ml-[50vw] -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[25px] border-t-accentColor border-r-[12px] border-r-transparent transition-all"/>
      <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 transition-all border-2 border-backgroundColor text-secondaryColor p-10 rounded-md lg:h-[80vh] flex flex-col items-center">
        <h1
          className="text-4xl lg:text-6xl tracking-tight pb-6"
          style={{
            textShadow: "10px 10px 25px #5ACEBA7D",
          }}
        >
          {onEvent?.title}
        </h1>
        <p
          className="font-lato text-xl lg:text-2xl tracking-wider w-[90vw] lg:w-[60vw] h-[30vh] lg:h-[30vh]"
          style={{
            textShadow: "2px 2px 10px #5ACEBA7D",
          }}
        >
          {onEvent?.description}
        </p>
        <div className="top-[80vh] mb-[20vh] flex flex-row justify-between w-[100vw]">
          <SkipButton eventIndex={eventIndex} setEventIndex={setEventIndex} beginning={true} />
          <SkipButton eventIndex={eventIndex} setEventIndex={setEventIndex} beginning={false} />
        </div>
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
            left: `${myEvent.positionRatio.toPrecision(3).toString()}%`,
          }}
        />
      ))}
    </div>
  );
};

interface SkipButtonProps {
  eventIndex: number;
  setEventIndex: React.Dispatch<React.SetStateAction<number>>;
  beginning: boolean;
}

const SkipButton = (props: SkipButtonProps) => {
  const { eventIndex, setEventIndex, beginning } = props;

  return (
    <div
      className="w-52 flex flex-col lg:mx-20 items-center py-1 mx-4 font-lato text-xl lg:text-2xl hover:underline bg-secondaryColor text-backgroundColor rounded-3xl transition-all"
    >
      {beginning ? (
        <div className="h-6 flex items-center w-full justify-center">
        <button
          className="w-[50%] flex flex-row justify-center transition-all scale-100 hover:scale-125"
          onClick={() => {
            setEventIndex(0)
            window.scrollTo(0, window.innerHeight * 2);
          }}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-backgroundColor"
          >
            <path d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z"/>
          </svg>
        </button>
        <div className="h-full w-[2px] bg-backgroundColor"></div>
        <button
          className="w-[50%] flex flex-row justify-center transition-all scale-100 hover:scale-125"
          onClick={() => {
            setEventIndex((prev: number) => {
              return prev === 0 ? prev : prev - 1;
            })
            let timelineIndex = eventIndex - 1 === 0 ? 1 : events.length - eventIndex - 1;
            window.scrollTo(0, (document.getElementById("timeline" + timelineIndex)?.offsetTop || 0) - window.innerHeight / 3);
          }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="fill-backgroundColor"
        >
          <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/>
        </svg>
        </button>
      </div>
      ) : (
        <div className="h-6 flex items-center w-full justify-center">
          <button
            className="w-[50%] flex flex-row justify-center transition-all scale-100 hover:scale-125"
            onClick={() => {
              if (eventIndex === events.length - 1) return;
              setEventIndex((prev: number) => {
                return prev === events.length - 1 ? events.length - 1 : prev + 1;
              })
              let timelineIndex = eventIndex + 1 === events.length - 1 ? events.length - 1 : events.length - eventIndex - 1;
              let offSetTop = eventIndex + 1 === events.length - 1 ? window.innerHeight / 3 : 0;
              window.scrollTo(0, (document.getElementById("timeline" + timelineIndex)?.offsetTop || 0) - offSetTop);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              className="fill-backgroundColor"
            >
              <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/>
            </svg>
          </button>
          <div className="h-full w-[2px] bg-backgroundColor"/>
          <button
            className="w-[50%] flex flex-row justify-center transition-all scale-100 hover:scale-125"
            onClick={() => {
              setEventIndex(events.length - 1)
              window.scrollTo(0, (document.getElementById("timeline" + (events.length - 1))?.offsetTop || 0) - window.innerHeight / 3);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="fill-backgroundColor"
            >
              <path d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundTimeline;