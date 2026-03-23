const Projects = () => {
  const projects = [
    {
      title: "MERN E-Commerce",
      description:
        "Full-stack e-commerce application with authentication, product management and shopping cart system.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "#",
      live: "#",
      image: "/projects/ecommerce.png",
    },
    {
      title: "Realtime Chat App",
      description:
        "Real-time chat application using WebSockets for instant messaging between users.",
      tech: ["React", "Node", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      image: "/projects/chat.png",
    },
    {
      title: "Task Manager",
      description:
        "Productivity app for managing daily tasks with authentication and CRUD operations.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      github: "#",
      live: "#",
      image: "/projects/task.png",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gray-300">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition transform hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            >
              {/* Image */}
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

                {/* Tech stack */}
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

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-sm border border-gray-700 px-4 py-2 rounded hover:border-white transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="text-sm bg-white text-black px-4 py-2 rounded hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
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
