import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      alert("Message sent & email delivered");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-gray-300">Connect</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Available for freelance projects, internships, and full-time
            opportunities. Let’s build something great together 👋
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <MdEmail className="text-xl" /> jatindhamija025@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt /> 9315021489
            </p>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com/jdcodebase"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jatindhamija/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/jdcodebase/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              LeetCode
            </a>

            <a
              href="https://www.youtube.com/@jdcodebase"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-gray-800 p-8 rounded-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-white"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-white"
          />

          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
