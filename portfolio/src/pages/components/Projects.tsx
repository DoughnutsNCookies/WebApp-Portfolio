import { useEffect, useRef, useState } from "react";

class Project {
  constructor(
    title: string,
    description: string,
    link: string
  ) {
    this.title = title;
    this.description = description;
    this.link = link;
  }

  title: string;
  description: string;
  link: string;
}

const projectsLeft = [
  new Project(
    "PongSH",
    "PongSH is a web application that offers users the experience of playing modern Pong. The app includes additional features like friend management and chat functionality. With a terminal theme design, PongSH brings a nostalgic touch to the gaming interface, appealing to both retro and contemporary gaming enthusiasts.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Ft_transcendence"
  ),
  new Project(
    "Cub3D",
    "Cub3D is an interactive maze exploration project that utilizes ray-casting techniques to create a dynamic first-person view. Developed in C, the project allows users to navigate through a 3D maze, experiencing real-time rendering and interactive movement.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Cub3d"
  ),
  new Project(
    "Push Swap",
    "Push Swap is a project that challenged sorting data on a stack using a limited set of instructions in C, aiming to achieve the lowest possible number of actions. I've learned to manipulate various types of sorting algorithms and choose the most appropriate and optimized solution for efficiently sorting data.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Push_Swap"
  ),
];

const projectsRight = [
  new Project(
    "Philosophers",
    "The Philosopher project provided a valuable learning experience in multithreading and multiprocessors in C, where I explored concurrent programming concepts. By recreating the famous dining philosophers' problem using C, I was able to delve into the challenges of synchronizing multiple threads or processes to avoid deadlocks and ensure fair resource allocation.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Philosophers"
  ),
  new Project(
    "Minishell",
    "Minishell is a project that involves building a lightweight shell in C, akin to bash. The project's comprehensive feature set includes working history, redirections, pipes, environment variables, signals, built-in functions, and advanced operators like '&&' and '||' with support for parentheses, which enables users to interact with the shell efficiently and flexibly.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Minishell"
  ),
  new Project(
    "Webserv",
    "Webserv is an HTTP server project written in C++ 98, drawing inspiration from Nginx configuration and behaviors. It handles common methods such as GET, POST, PUT, DELETE, and HEAD methods, cookie and session management, as well as supporting multiple Common Gateway Interface (CGI) scripts.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Webserv"
  ),
];

export const Projects = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const project = projectRef.current;
      const left = leftRef.current;
      const right = rightRef.current;
      if (!project || !left || !right) return;

      const { top, bottom } = project.getBoundingClientRect();

      if (top > 0) {
        left.style.top = `100vh`;
        right.style.bottom = `100vh`;
      } else if (bottom < window.innerHeight) {
        left.style.top = `-${window.innerHeight * projectsLeft.length}px`;
        right.style.bottom = `-${window.innerHeight * projectsLeft.length}px`;
      }

      setTimeout(() => {
        left.style.transform = `translateY(0%)`;
        right.style.transform = `translateY(0%)`;
      }, 300);
      right.style.transform = `translateY(${event.deltaY > 0 ? 10 : -10}px)`;
      left.style.transform = `translateY(${event.deltaY > 0 ? -10 : 10}px)`;

      for (let i = 0; i < projectsLeft.length; i++) {
        if (
          -top > window.innerHeight * i &&
          -top < window.innerHeight * (i + 1)
        ) {
          left.style.top = `-${window.innerHeight * i}px`;
          right.style.bottom = `-${window.innerHeight * i}px`;
          break;
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section id="projects" ref={projectRef}>
      <div
        className="flex flex-row justify-between"
        style={{
          height: (projectsLeft.length + 1) * 100 + "vh",
        }}
      >
        <ProjectCards projects={projectsLeft} reff={leftRef} left={true} />
        <ProjectCards projects={projectsRight} reff={rightRef} left={false} />
      </div>
    </section>
  );
};

interface ProjectCardProps {
  projects: Project[];
  reff: React.RefObject<HTMLDivElement>;
  left: boolean;
}

const ProjectCards = (props: ProjectCardProps) => {
  const { projects, reff, left } = props;

  const style = left ? { top: "100vh" } : { bottom: "100vh" };
  return (
    <div
      className={`${
        left ? "left-0" : "right-0"
      } fixed w-1/2 flex flex-col transition-all duration-300`}
      style={style}
      ref={reff}
    >
      {projects.map((project: Project, index: number) => (
        <div className="h-screen flex items-center" key={index}>
          <div className="h-[80vh] w-full m-10 border-4 rounded-xl bg-secondaryColor text-center px-10">
            <h1 className="text-6xl py-4 tracking-tight text-secondaryBackgroundColor">
              {project.title}
            </h1>
            <Image
              projectName={project.title}
              image={`assets/${project.title}-image.png`}
              gif={`assets/${project.title}-gif.gif`}
            />
            <p className="font-lato text-xl text-secondaryBackgroundColor py-4">
              {project.description}
            </p>
            <a href={project.link} target="_blank" className="font-lato text-2xl text-secondaryBackgroundColor py-4 underline font-extrabold">
              Project GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ImageProps {
  projectName: string;
  image: string;
  gif: string;
}

const Image = (props: ImageProps) => {
  const { projectName, image, gif } = props;
  const [hover, setHover] = useState(false);

  return (
    <div>
      <img
        src={hover ? gif : image}
        alt={`${projectName} Image`}
        className="w-full h-[40vh] rounded-xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};
