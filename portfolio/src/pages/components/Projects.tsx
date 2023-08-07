import { useEffect, useRef, useState } from "react";

class Project {
  constructor(title: string, description: string, image: string, gif: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.gif = gif;
  }

  title: string;
  description: string;
  image: string;
  gif: string;
}

const projectsLeft = [
  new Project(
    "PongSH",
    "PongSH is a web application that offers users the experience of playing modern Pong. The app includes additional features like friend management and chat functionality. With a terminal theme design, PongSH brings a nostalgic touch to the gaming interface, appealing to both retro and contemporary gaming enthusiasts.",
    "Image 1",
    "Gif 1"
  ),
  new Project(
    "Cub3D",
    "Cub3D is an interactive maze exploration project that utilizes ray-casting techniques to create a dynamic first-person view. Developed in C, the project allows users to navigate through a 3D maze, experiencing real-time rendering and interactive movement.",
    "Image 3",
    "Gif"
  ),
  new Project(
    "Push Swap",
    "Push Swap is a project that challenged sorting data on a stack using a limited set of instructions, aiming to achieve the lowest possible number of actions. I've learned to manipulate various types of sorting algorithms and choose the most appropriate and optimized solution for efficiently sorting data.",
    "Image 5",
    "Gif"
  ),
  new Project(
    "So Long",
    "So Long is a 2D game development project in C, where I've ventured into the world of game design, learning how to work with textures, sprites, and basic gameplay elements. The inclusion of enemies and sprite animations added an extra layer of challenge and immersion, showcasing my ability to implement interactive and dynamic features within a small-scale game.",
    "Image 7",
    "Gif"
  ),
];

const projectsRight = [
  new Project("Python Bots", "Description 8", "Image 8", "Gif"),
  new Project(
    "Philosopher",
    "The Philosopher project provided a valuable learning experience in multithreading and multiprocessors, where I explored concurrent programming concepts. By recreating the famous dining philosophers' problem using C, I was able to delve into the challenges of synchronizing multiple threads or processes to avoid deadlocks and ensure fair resource allocation.",
    "Image 6",
    "Gif"
  ),
  new Project(
    "Minishell",
    "Minishell is a project that involves building a lightweight shell, akin to bash. The project's comprehensive feature set includes working history, redirections, pipes, environment variables, signals, built-in functions, and advanced operators like '&&' and '||' with support for parentheses, which enables users to interact with the shell efficiently and flexibly.",
    "Image 4",
    "Gif"
  ),
  new Project(
    "Webserv",
    "Webserv is an HTTP server project written in C++ 98, drawing inspiration from Nginx configuration and behaviors. It handles common methods such as GET, POST, PUT, DELETE, and HEAD methods, cookie and session management, as well as supporting multiple Common Gateway Interface (CGI) scripts.",
    "Image 2",
    "Gif"
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
      <hr />
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
          <div className="h-[80vh] w-full m-10 border-4 rounded-xl bg-secondaryColor text-center">
            <h1 className="text-6xl pt-4 tracking-tight text-secondaryBackgroundColor">
              {project.title}
            </h1>
            {project.image}
            <p className="font-lato text-xl text-secondaryBackgroundColor mx-10">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
