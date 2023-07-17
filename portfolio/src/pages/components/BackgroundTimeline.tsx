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
    "I was born and raised in a super-loving family of five, with my early years being full of mischief and wild adventures like any other kid. But as I got older, I learned that stepping out of my comfort zone and owning up to my actions was important."
  ),
  new TimelineEvent(
    new Date("January 2007"),
    "My First Piano Lesson",
    "When I was 5 years old, I jumped into the world of piano playing. Long story short: I had minor ADHD and my parents thought that playing the piano would help me focus. It did, and I fell in love with it."
  ),
  new TimelineEvent(
    new Date("January 2009"),
    "Primary School",
    "When I was around 7 years old, I started primary school at SJK(C) Chung Hua. I was quite the playful troublemaker back then (maybe even now hehe). Grades? Oh, they were solidly above average, and life was just peaceful with the only worry being homework. Looking back, those carefree days of childhood still make me smile."
  ),
  new TimelineEvent(
    new Date("January 2015"),
    "Visi Tutor",
    "At the age of 13 years old, I moved from primary school to Visi Tutor for my IGCSE studies. I made such strong bonds with my close pals, to some I would even consider them as family. I managed to finish my IGCSE in just three years, way quicker than the norm. If I had the chance, I'd totally relive those high school years, as they definitely hold a special place in my heart."
  ),
  new TimelineEvent(
    new Date("July 2015"),
    "Church Pianist",
    "I volunteered as a pianist at my local church. Every week, we would gather to jam and practice, pushing ourselves to improve. It was an absolute thrill when we decided to take part in two talent nights and we even snagged first place in our very first show! As my skills grew, I was appointed as the bandleader and have even started teaching little kids how to play the piano."
  ),
  new TimelineEvent(
    new Date("January 2018"),
    "College Life",
    "I wanted to dive headfirst into the music industry. So at the age of 16 years old, I joined the Foundation In Arts programme at Sunway College. Being the youngest in my class turned out to be pretty fun, I got to hang out with older folks and learn from their wisdom. I graduated college with an above-average grade, earning myself a scholarship for my university studies."
  ),
  new TimelineEvent(
    new Date("March 2019"),
    "University Life",
    "At the age of 17 years old, I started university. I learned a lot of things from all sorts of subjects, but it was sound-designing that truly captured my interest, making me realize that being a sound designer for games was my true calling. I got to dive into some cool projects and was pretty proud of the results. I graduated from university with First class honours, thanks to my dedication and hard work."
  ),
  new TimelineEvent(
    new Date("May 2021"),
    "Grade 8 Piano",
    "I was 19 years old when I completed my Grade 8 piano, reaching this milestone felt like a massive win. I gotta give a huge shoutout to my incredible piano teacher. She had my back since day one, supporting me through the whole journey. Her guidance was priceless, and I seriously can't thank her enough for making this adventure unforgettable. She's the real MVP."
  ),
  new TimelineEvent(
    new Date("August 2021"),
    "Coding Adventure",
    "My coding journey began when a good friend introduced me to the world of programming, and man, did I find it fun! Recognizing that most sound designers in the gaming industry require coding skills, I became determined to dedicate more time to learning this valuable skill set. Python became my first programming language and taught myself the ropes using YouTube tutorials and reading documentation."
  ),
  new TimelineEvent(
    new Date("December 2021"),
    "Internship",
    "I landed a gig at Vine Music Studio as a sound designer intern in the media industry, working on those flashy ads you see online like on YouTube. I was a bit bummed that I couldn't find any internships in sound design for games, but hey, the internship turned out to be pretty sweet. After the internship, I stuck around as a part-timer for the extra cash, but I could feel my passion shifting toward coding, slowly but surely."
  ),
  new TimelineEvent(
    new Date("May 2022"),
    "42KL Piscine",
    "I discovered 42KL, a free coding school without teachers or classes. Intrigued, I decided to take part in their intense one-month BootCamp called the Piscine. It was a wild experience. In just a month, I have learned so much about programming. The BootCamp was intense, with weekly exams and an 8-hour final exam marathon. I met people from diverse backgrounds, and we learned from each other. It was an exhilarating journey packed with thrilling learning experiences. Without a doubt, that month was the best time of my life."
  ),
  new TimelineEvent(
    new Date("July 2022"),
    "42KL Cadet",
    "After waiting for a whole month to hear back about our results, the day arrived — the most important email came into my inbox, and there it wrote that I'd made it into the core programme! Marking the beginning of my journey being a cadet of 42KL. I met more awesome new friends, each with their own unique background and story, with more things to learn from each other."
  ),
  new TimelineEvent(
    new Date("August 2022"),
    "No Regrets",
    "My passion for sound design for the media was at its lowest, so I ended my gig at Vine Music Studio and I knew it was time to shift gears and fully concentrate on 42KL and coding. It was a big risk since sacrificing this job would mean sacrificing the income that comes with it and I was already struggling financially. But you know what? I'm determined to make it work because this coding journey is something I'm willing to hustle for."
  ),
  new TimelineEvent(
    new Date("June 2023"),
    "Completed Cadetship",
    "Boom! At the age of 21 years old, I finally wrapped up the final project of the core programme and crushed the final exam, becoming the first cadet in 42KL to complete the Core Programme in less than a year. My final project was so good that we even got to showcase it to lecturers, students, the esteemed board of directors, and even representatives of the Malaysian Qualifications Agency (MQA). Now, I'm diving into specialization within 42KL, ready to level up my coding skills even more."
  ),
  new TimelineEvent(
    new Date(),
    "Present",
    "Here we are now, with you are looking at my portfolio. Thank you for taking the time to read through my timeline and I hope you enjoyed it!"
  ),
];

export const BackgroundTimeline = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const movingTriangleRef = useRef<boolean>(false);
  const [onEvent, setOnEvent] = useState<TimelineEvent | null>(null);
  const [initRatio, setInitRatio] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [displayCard, setDisplayCard] = useState<boolean>(false);
  const [eventIndex, setEventIndex] = useState<number>(0);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;
    const { top, bottom } = background.getBoundingClientRect();
    setInitRatio(
      Math.max(Math.min(top / (bottom - top - window.innerHeight), 0), -1)
    );
  }, []);

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
      } else if (bottom < 0) {
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

    const target = -events[eventIndex].positionRatio / 100;
    if (eventIndex === events.length - 1) {
      window.scrollTo(0, (document.getElementById("timeline" + (eventIndex))?.offsetTop || 0) - (window.innerHeight / 2));
    } else if (eventIndex === 0) {
      window.scrollTo(0, (document.getElementById("timeline" + (eventIndex))?.offsetTop || 0));
    } else {
    window.scrollTo(0, document.getElementById("timeline" + (eventIndex))?.offsetTop || 0);
    }
    if (!background || !line || !triangle) return;
    const { top, bottom } = background.getBoundingClientRect();
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

    if (atEvent === false) {
      setDisplayCard(false);
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          setOnEvent(null);
          timeoutRef.current = null;
        }, 300);
      }
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setOnEvent(events[eventIndex]);
      setDisplayCard(true);
    }

    const birthDay = new Date("May 3, 2002").getTime();
    setDate(
      atEvent === false
        ? new Date(
            birthDay + -ratio * (new Date().getTime() - birthDay)
          ).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })
        : eventIndex === 0
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
          displayCard={displayCard}
          onEvent={onEvent}
        />
        <TimeLine lineRef={lineRef} initRatio={initRatio} onEvent={onEvent} />
      </div>
    </section>
  );
};

interface DateIndicatorProps {
  triangleRef: React.RefObject<HTMLDivElement>;
  date: string;
  displayCard: boolean;
  onEvent: TimelineEvent | null;
}

const DateIndicator = (props: DateIndicatorProps) => {
  const { triangleRef, date, displayCard, onEvent } = props;

  return (
    <div
      ref={triangleRef}
      className="sticky top-[18vh] mt-[25vh] w-[100vw]"
      style={{
        marginBottom: "77vh",
        transition: "transform 1s ease-in-out",
      }}
    >
      {date === "" ? (
        <p className="text-xl whitespace-pre"> </p>
      ) : (
        <p className="text-xl">{date}</p>
      )}
      <div className="ml-[50vw] -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[25px] border-t-accentColor border-r-[12px] border-r-transparent transition-all" />
      <div
        className={`${
          displayCard ? "" : "opacity-0"
        } absolute top-[20vh] left-1/2 -translate-x-1/2 transition-all border-2 border-backgroundColor bg-backgroundColor text-secondaryColor p-10 rounded-md w-[60vw]`}
      >
        <h1
          className="text-6xl tracking-tight pb-6"
          style={{
            textShadow: "10px 10px 25px #5ACEBA7D",
          }}
        >
          {onEvent?.title}
        </h1>
        <p
          className="font-lato text-xl tracking-wide"
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
  initRatio: number;
  onEvent: TimelineEvent | null;
}

const TimeLine = (props: TimelineProps) => {
  const { lineRef, initRatio, onEvent } = props;

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
        transform: `translateX(${initRatio * 100}%)`,
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
