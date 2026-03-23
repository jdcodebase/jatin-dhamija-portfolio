import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const SkillOrbit = () => {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">
      <div className="absolute w-24 h-24 rounded-full border border-gray-700 backdrop-blur-lg bg-blue-500/20 flex items-center justify-center font-bold text-white shadow-xl z-10">
        MERN
      </div>

      <svg className="absolute w-full h-full">
        <line x1="210" y1="210" x2="210" y2="40" stroke="#374151" />
        <line x1="210" y1="210" x2="40" y2="210" stroke="#374151" />
        <line x1="210" y1="210" x2="380" y2="210" stroke="#374151" />
        <line x1="210" y1="210" x2="210" y2="380" stroke="#374151" />
      </svg>

      <div className="absolute w-full h-full animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl text-cyan-400">
          <FaReact />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-green-400">
          <SiMongodb />
        </div>
        <div className="absolute top-16 left-16 text-3xl text-yellow-400">
          <SiJavascript />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl text-gray-300">
          <SiExpress />
        </div>
        <div className="absolute top-16 right-16 text-3xl text-blue-400">
          <SiMysql />
        </div>
        <div className="absolute bottom-16 left-16 text-3xl text-orange-500">
          <FaHtml5 />
        </div>
        <div className="absolute bottom-16 right-16 text-3xl text-sky-400">
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
};

export default SkillOrbit;
