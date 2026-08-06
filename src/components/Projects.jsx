const Projects = () => {
  const projects = [
    {
      title: "Authentication System",
      description:
        "A full-stack MERN authentication system with secure JWT-based authentication, HttpOnly cookies, access & refresh tokens, protected routes, automatic session restoration, and a responsive React frontend. Deployed with Vercel, Render, and MongoDB Atlas.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/jdcodebase/authentication-system",
      live: "https://authentication-system-eta-five.vercel.app/",
      image: "/projects/authentication-system.png",
    },
    {
      title: "Task Manager Web App",
      description:
        "A full-stack MERN task management app with separately deployed frontend and backend connected to MongoDB Atlas. Features task creation, editing, deletion, completion toggling, search by title, filtering by status/priority/due date, a real-time progress bar, and priority levels with due dates.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/jdcodebase/task-manager-web-app",
      live: "https://task-manager-web-app-roan.vercel.app/",
      image: "/projects/task-manager-web-app.png",
    },
    {
      title: "Notes Web App",
      description:
        "A full-stack notes application with complete CRUD functionality — create notes via modal, read, edit, delete, and search. Built with a fully responsive, mobile-friendly UI and deployed live on Vercel.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/jdcodebase/notes-web-app",
      live: "https://notes-web-app-nine.vercel.app/",
      image: "/projects/notes-web-app.png",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gray-300">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group w-full max-w-md bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition transform hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border border-gray-700 px-4 py-2 rounded hover:border-white transition"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm bg-white text-black px-4 py-2 rounded hover:opacity-90 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
