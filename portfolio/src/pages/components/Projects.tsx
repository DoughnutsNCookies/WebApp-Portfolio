import { useEffect, useRef, useState } from "react";
import Image from "next/image";

class Project {
  constructor(title: string, description: string, link: string) {
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
    "PongSH is a web application that offers users the experience of playing modern Pong. The app includes features like friend management and chat functionality, and with a terminal theme design, it brings a nostalgic touch to the gaming interface.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Ft_transcendence"
  ),
  new Project(
    "Cub3D",
    "Cub3D is an interactive maze exploration project that utilizes ray-casting techniques to create a dynamic first-person view. Developed in C, the project allows users to navigate through a 3D maze, experiencing real-time rendering and interactive movement.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Cub3d"
  ),
  new Project(
    "Push Swap",
    "Push Swap challenges sorting data on a stack using a limited set of instructions in C, aiming to achieve the lowest possible number of actions. I've learned to manipulate various types of sorting algorithms and choose the most appropriate and optimized solution for efficient data sorting.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Push_Swap"
  ),
];

const projectsRight = [
  new Project(
    "Philosophers",
    "Philosophers provided a learning experience in multithreading and multiprocessors in C. By recreating the dining philosophers' problem, I was able to delve into the challenges of synchronizing multiple threads or processes to avoid deadlocks and ensure fair resource allocation.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Philosophers"
  ),
  new Project(
    "Minishell",
    "Minishell involves building a shell in C, akin to bash. The project's includes working history, redirections, pipes, environment variables, signals, built-in functions, and advanced operators like '&&' and '||' with support for parentheses.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Minishell"
  ),
  new Project(
    "WebServ",
    "WebServ is an HTTP server project written in C++ 98, drawing inspiration from Nginx configuration and behaviors. It handles common methods such as GET, POST, PUT, DELETE, and HEAD methods, cookie and session management, as well as supporting multiple Common Gateway Interface (CGI) scripts.",
    "https://github.com/DoughnutsNCookies/42KL-CP-Webserv"
  ),
];

interface ProjectsProps {
  resetProject: boolean;
  showProject: boolean;
  setShowProject: (showProject: boolean) => void;
}

const Projects = (props: ProjectsProps) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { resetProject, showProject, setShowProject } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = (event: any) => {
      const mobileMode = window.innerWidth < window.innerHeight
      setIsMobile(mobileMode);
      const project = projectRef.current;
      const left = leftRef.current;
      const right = rightRef.current;
      if (!project || !left || !right) return;

      const { top, bottom } = project.getBoundingClientRect();
      
      if (top > 0) {
        left.style.top = `100vh`;
        right.style.bottom = `100vh`;
        setShowProject(false);
      } else if (bottom < window.innerHeight) {
        left.style.top = `-${window.innerHeight * ((mobileMode ? projectsRight.length : 0) + projectsLeft.length)}px`;
        right.style.bottom = `-${window.innerHeight * ((mobileMode ? projectsRight.length : 0) + projectsLeft.length)}px`;
        if (bottom < window.innerHeight * 2) setShowProject(false);
      }

      setTimeout(() => {
        left.style.transform = `translateY(0%)`;
        right.style.transform = `translateY(0%)`;
      }, 300);
      right.style.transform = `translateY(${event.deltaY > 0 ? 10 : -10}px)`;
      left.style.transform = `translateY(${event.deltaY > 0 ? -10 : 10}px)`;

      for (let i = 0; i < (mobileMode ? projectsRight.length : 0) + projectsLeft.length; i++) {
        if (
          -top > window.innerHeight * i &&
          -top < window.innerHeight * (i + 1)
        ) {
          left.style.top = `-${window.innerHeight * i}px`;
          right.style.bottom = `-${window.innerHeight * i}px`;
          setShowProject(true);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const project = projectRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!project || !left || !right) return;
    
    left.style.top = `0px`;
    right.style.bottom = `0px`;
  }, [resetProject])

  useEffect(() => {
    const project = projectRef.current;

    if (!project) return;
    project.style.opacity = showProject ? "1" : "0";
  }, [showProject])

  return (
    <section id="projects" ref={projectRef} className="transition-all">
      <div
        className="flex flex-row justify-between transition-all mt-[20vh]"
        style={{
          height: ((isMobile ? projectsRight.length : 0) + projectsLeft.length + 1) * 100 + "vh",
        }}
      >
        <ProjectCards projects={isMobile ? [...projectsLeft, ...projectsRight] : projectsRight} reff={rightRef} left={false} isMobile={isMobile}/>
        <ProjectCards projects={isMobile ? [...projectsLeft, ...projectsRight] : projectsLeft} reff={leftRef} left={true} isMobile={isMobile}/>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  projects: Project[];
  reff: React.RefObject<HTMLDivElement>;
  left: boolean;
  isMobile: boolean;
}

const ProjectCards = (props: ProjectCardProps) => {
  const { projects, reff, left, isMobile } = props;
  const [hover, setHover] = useState(false);

  const style = left ? { top: "100vh" } : { bottom: "100vh" };

  let width = 1920, height = 1080;
  useEffect(() => {
    width = window.innerWidth;
    height = window.innerHeight;
  }, [isMobile])

  return (
    <div
      className={`${
        left ? "left-0" : "right-0"
      } ${
        isMobile ? "w-full" : "w-1/2"
      } ${
        !left && isMobile ? "hidden" : ""
      } fixed flex flex-col transition-all duration-300`}
      style={style}
      ref={reff}
    >
      {projects.map((project: Project, index: number) => (
        <div className="h-screen flex items-center" key={index}>
          <div className="flex flex-col justify-between h-[85vh] lg:h-[80vh] w-[100vw] m-5 lg:m-10 border-4 rounded-xl bg-secondaryColor text-center px-5 lg:px-10">
            <div>
              <h1 className="text-5xl lg:text-6xl py-4 tracking-tight text-secondaryBackgroundColor">
                {project.title}
              </h1>
              <Image
                src={hover ? `/assets/${project.title}-gif.gif` : `/assets/${project.title}-image.png`}
                alt={`${project.title} Image`}
                width={width}
                height={height}
                className="rounded-xl"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                priority
              />
              <p className="font-lato text-lg lg:text-xl text-secondaryBackgroundColor pt-4">
                {project.description}
              </p>
            </div>
            <button className="my-3 mx-[15vw] lg:mx-[5vw] p-2 scale-100 hover:scale-110 transition-all border-4 border-backgroundColor rounded-lg bg-backgroundColor">
              <a
                href={project.link}
                target="_blank"
                className="text-2xl font-lato text-secondaryColor hover:underline font-extrabold"
              >
                Project GitHub
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;