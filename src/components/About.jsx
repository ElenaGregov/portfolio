import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaSass,
  FaNpm,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiPostman,
  SiExpress,
} from "react-icons/si";
import FadeInWhenVisible from "./FadeInWhenVisible";
const About = () => {
  return (
    <section id="about" className="section animate-fadeInUp text-center py-12">
      <FadeInWhenVisible>
        <h2 className="text-4xl text-slate-600 font-bold mb-12 typing-animation">
          About me
        </h2>

        <p className="text-gray-200 mb-12 max-w-xl text-2xl mx-auto text-center">
          I am a web developer with experience in building responsive and modern
          interfaces using React, JavaScript, HTML, CSS, and tools like Node.js,
          Firebase, Tailwind, GitHub, and more.
        </p>

        {/* Frontend Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-4xl md:text-5xl text-rose-400">
            <div title="React" className="transition hover:text-blue-400">
              <FaReact />
            </div>
            <div
              title="JavaScript"
              className="transition hover:text-yellow-300"
            >
              <FaJs />
            </div>
            <div title="HTML5" className="transition hover:text-orange-500">
              <FaHtml5 />
            </div>
            <div title="CSS3" className="transition hover:text-blue-500">
              <FaCss3Alt />
            </div>
            <div
              title="Tailwind CSS"
              className="transition hover:text-teal-400"
            >
              <SiTailwindcss />
            </div>
            <div title="SASS" className="transition hover:text-pink-400">
              <FaSass />
            </div>
            <div title="Bootstrap" className="transition hover:text-purple-500">
              <FaBootstrap />
            </div>
            <div title="Vite" className="transition hover:text-violet-400">
              <SiVite />
            </div>
            <div
              title="React Router"
              className="transition hover:text-blue-400"
            >
              <SiReactrouter />
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-8 text-4xl md:text-5xl text-rose-400">
            <div title="Node.js" className="transition hover:text-green-500">
              <FaNodeJs />
            </div>
            <div
              title="Express.js"
              className="transition hover:text-indigo-400"
            >
              <SiExpress />
            </div>
            <div title="Firebase" className="transition hover:text-yellow-500">
              <SiFirebase />
            </div>
          </div>
        </div>

        {/* Tools & Platforms Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-4xl md:text-5xl text-rose-400">
            <div title="npm" className="transition hover:text-red-500">
              <FaNpm />
            </div>
            <div title="GitHub" className="transition hover:text-white">
              <FaGithub />
            </div>
            <div title="Postman" className="transition hover:text-orange-400">
              <SiPostman />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/elenagregov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out border border-gray-200"
          >
            <FaGithub className="text-xl" />
            Check Out My Code
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white to-gray-100 text-rose-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out border border-gray-200"
          >
            View My Work ↓
          </a>
          <a
            href="/certificates"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white to-gray-100 text-rose-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out border border-gray-200"
          >
            🎓 Certificates
          </a>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default About;
