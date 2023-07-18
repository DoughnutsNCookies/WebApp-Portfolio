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

const projects = [
  new Project("Project 1", "Description 1", "Image 1"),
  new Project("Project 2", "Description 2", "Image 2"),
  new Project("Project 3", "Description 3", "Image 3"),
  new Project("Project 4", "Description 4", "Image 4"),
  new Project("Project 5", "Description 5", "Image 5"),
  new Project("Project 6", "Description 6", "Image 6"),
  new Project("Project 7", "Description 7", "Image 7"),
  new Project("Project 8", "Description 8", "Image 8"),
];

export const Projects = () => {
  return (
    <section id="projects">
      <hr />
      <div
        className="flex flex-row justify-between"
        style={{
          height: projects.length * 100 + "vh",
        }}
      >
        <div className="w-1/2 flex flex-col">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="h-screen m-10 border-4 rounded-xl bg-secondaryColor text-center"
            >
              {project.image}
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-col">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="h-screen m-10 border-4 rounded-xl bg-secondaryColor text-center"
            >
              <h1 className="text-6xl tracking-tight text-secondaryBackgroundColor">
                {project.title}
              </h1>
              <p className="font-lato text-xl text-secondaryBackgroundColor">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
