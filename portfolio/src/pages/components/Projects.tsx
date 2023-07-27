import { useEffect, useRef, useState } from "react";

class Project {
  constructor(title: string, description: string, image: string) {
    this.image = image;
    this.title = title;
    this.description = description;
  }

  image: string;
  title: string;
  description: string;
}

const projectsLeft = [
  new Project("PongSH", "Description 1", "Image 1"),
  new Project("Cub3D", "Description 3", "Image 3"),
  new Project("Push Swap", "Description 5", "Image 5"),
  new Project("So Long", "Description 7", "Image 7"),
];

const projectsRight = [
  new Project("Python Bots", "Description 8", "Image 8"),
  new Project("Philosopher", "Description 6", "Image 6"),
  new Project("Minishell", "Description 4", "Image 4"),
  new Project("Web-Server", "Description 2", "Image 2"),
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
            <p className="font-lato text-xl text-secondaryBackgroundColor">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
