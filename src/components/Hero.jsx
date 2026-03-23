import { TypeAnimation } from "react-type-animation";
import SkillOrbit from "./SkillOrbit";
import { useState } from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-white border-b-2 border-white pb-1">
              Jatin Dhamija
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-gray-400">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Web Developer",
                2000,
                "DSA Problem Solver",
                2000,
                "Teaching Web Dev on YouTube",
                2000,
              ]}
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            I build scalable web applications using React, Node.js, Express and
            MongoDB. I also share my learning journey and teach Web Development
            and DSA on YouTube.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:opacity-90 transition shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-500">
              View Projects
            </button>

            <button className="px-8 py-3 rounded-md border border-gray-600 hover:border-white hover:text-white text-gray-300 transition font-semibold shadow-md hover:shadow-lg hover:shadow-white shadow-white">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE TECHNOLOGY CLOUD */}

        <div className="hidden md:flex justify-center">
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
};

export default Hero;
