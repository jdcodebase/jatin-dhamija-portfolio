const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Name */}
        <div>
          <h2 className="text-2xl font-bold">Jatin Dhamija</h2>
          <p className="text-gray-400 text-sm">
            MERN Stack Developer | Open to opportunities
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm flex-wrap">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 text-sm flex-wrap">
          <a
            href="https://www.linkedin.com/in/jatindhamija/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jdcodebase"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/jdcodebase/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
          <a
            href="https://www.youtube.com/@jdcodebase"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a href="mailto:jatindhamija025@gmail.com">Email</a>
        </div>

        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Jatin Dhamija. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
