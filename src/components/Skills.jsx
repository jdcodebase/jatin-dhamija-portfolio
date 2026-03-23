import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-400",
        },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
        { name: "REST API", icon: <FaServer />, color: "text-gray-300" },
        { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-pink-400" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 md:mb-20">
          My <span className="text-gray-300">Skills</span>
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-8 text-gray-200 w-fit border-b rounded-bl-xl border-cyan-500 px-2">
                {category.title}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 shadow-sm shadow-white hover:shadow-md hover:shadow-white transition-all duration-300"
                  >
                    <div
                      className={`text-5xl mb-4 ${skill.color} drop-shadow-lg group-hover:scale-110 transition`}
                    >
                      {skill.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
