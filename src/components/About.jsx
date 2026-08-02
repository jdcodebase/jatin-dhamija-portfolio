const About = () => {
  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-400 text-lg">
            <img
              src="/jatin.jpg"
              className="w-72 h-72 object-cover rounded-xl border border-gray-800"
              alt="Developer Image"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 border-b rounded-bl-xl border-cyan-500 px-2 w-fit">
            About <span className="text-gray-300">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm <span className="text-white font-semibold">Jatin Dhamija</span>,
            a Full-Stack Developer specializing in the MERN stack and modern
            JavaScript technologies. I enjoy building scalable web and mobile
            applications that solve real-world problems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            As the sole developer during my React Native internship at Comcare
            Enterprises, I built a production mobile app used by real customers
            — handling everything from the Node.js/Express backend to
            Bluetooth-based smartwatch pairing and device connection flows.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I also run a technical YouTube channel where I share tutorials on
            Web Development and Data Structures & Algorithms to help beginners
            learn modern full-stack development.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I hold a{" "}
            <span className="text-white font-medium">
              B.Tech in Computer Science Engineering
            </span>{" "}
            from PIET, Panipat (2019 – 2023).
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
