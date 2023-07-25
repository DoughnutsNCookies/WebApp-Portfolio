import { useEffect, useRef, useState } from "react";
import _ from "lodash";

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
  new Project("Project 1", "Description 1", "Image 1"),
  new Project("Project 3", "Description 3", "Image 3"),
  new Project("Project 5", "Description 5", "Image 5"),
  new Project("Project 7", "Description 7", "Image 7"),
];

const projectsRight = [
  new Project("Project 8", "Description 8", "Image 8"),
  new Project("Project 6", "Description 6", "Image 6"),
  new Project("Project 4", "Description 4", "Image 4"),
  new Project("Project 2", "Description 2", "Image 2"),
]

export const Projects = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const project = projectRef.current;
      const description = descriptionRef.current;
      if (!project || !description) return;

      const { top, bottom } = project.getBoundingClientRect();
      const translationValue = (projectsLeft.length - 1) * -window.innerHeight;

      if (top - (window.innerHeight / 3) > 0) {
        description.style.opacity = "0";
        description.style.transform = `translateY(${(translationValue + -top * 2) - (window.innerHeight / 2)}px)`;
      } else if (bottom - window.innerHeight < 0) {
        description.style.transform = `translateY(${window.innerHeight * (projectsLeft.length + 2)}px)`;
        description.style.opacity = "0";
      } else {
        description.style.opacity = "100";
        description.style.transform = `translateY(${
          (translationValue + -top * 2) - (window.innerHeight / 2)
        }px)`;
      }
    };

    const throttledHandleScroll = _.throttle(handleScroll, 50); // Adjust the delay (in milliseconds) as needed

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <section id="projects" ref={projectRef}>
      <hr />
      {/* <div className="h-[100vh]" /> */}
      <div
        className="flex flex-row justify-between"
        style={{
          height: (projectsLeft.length + 1) * 100 + "vh",
        }}
        ref={imageRef}
      >
        <div className="w-1/2 flex flex-col transition-all ease-in-out">
          {projectsLeft.map((project: Project, index: number) => (
            <div className="h-screen flex items-center" key={index}>
              <div className="h-[90vh] w-full m-10 border-4 rounded-xl bg-secondaryColor text-center">
              <h1 className="text-6xl tracking-tight text-secondaryBackgroundColor">
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
        <div
          className="w-1/2 flex flex-col transition-all ease-in-out"
          ref={descriptionRef}
        >
          {projectsRight.map((project: Project, index: number) => (
            <div className="h-screen flex items-center" key={index}>
              <div className="h-[90vh] w-full m-10 border-4 rounded-xl bg-secondaryColor text-center">
                <h1 className="text-6xl tracking-tight text-secondaryBackgroundColor">
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
      </div>
    </section>
  );
};
