const Experience = () => {
  const experiences = [
    {
      role: "Technical Content Creator",
      company: "JDCodebase (YouTube)",
      period: "Aug 2025 – Present",
      points: [
        "Created and published 150+ educational videos on MERN Stack and Data Structures & Algorithms.",
        "Maintained consistency by uploading daily content focused on web development and problem-solving.",
        "Built a structured Web Development series covering the complete MERN Stack (MongoDB, Express, React, Node.js).",
        "Designed beginner-friendly learning roadmaps instead of random content delivery.",
        "Simplified complex programming concepts using a concept-first teaching approach.",
      ],
    },
    {
      role: "React Native Intern",
      company: "Comcare Enterprises",
      period: "Jul 2024 – Oct 2024",
      points: [
        "Developed a production-level mobile application using React Native, Node.js, Express, and Firebase.",
        "Independently handled Android development while collaborating with a senior developer for iOS.",
        "Built core features including UI screens, navigation, and real-time data synchronization.",
        "Designed and integrated backend APIs for seamless frontend–database communication.",
        "Quickly adapted to React Native with no prior experience, leveraging React and backend knowledge.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-gray-300">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white/5 border border-gray-800 rounded-xl p-6 backdrop-blur-md shadow-sm shadow-white hover:shadow-md hover:shadow-white transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400 mb-4">
                {exp.company} | {exp.period}
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
