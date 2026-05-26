const Projects = () => {
  const projects = [
    {
      title: "ZenGrocery (Smart Kirana Management System)",
      description:
        "A real-world full-stack application built for kirana stores. Supports weight-based and unit-based billing, real-time price calculation, profit tracking, and bill storage with MongoDB. Designed to digitize local shop operations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/jdcodebase/ZenGrocery",
      live: "https://zen-grocery.vercel.app/",
      youtube: null,
      image: "/projects/kirana.png",
    },
    {
      title: "MERN Task Manager",
      description:
        "A full stack task manager built from scratch using the MERN stack. Taught as a 9-video YouTube series on jdcodebase covering Express server setup, MongoDB with Mongoose, REST API design, and React frontend with Tailwind CSS.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/jdcodebase/task-manager",
      live: null,
      youtube:
        "https://www.youtube.com/playlist?list=PLKIziyQytJbv0yXO5jVj58HAvquZdGjFz",
      image: "/projects/task-manager.png",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gray-300">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group w-full max-w-md bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition transform hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
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

                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm border border-red-700 text-red-400 px-4 py-2 rounded hover:bg-red-700 hover:text-white transition"
                    >
                      ▶ Watch Series
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
