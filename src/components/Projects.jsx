import React from "react";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Jiří Krátký Artist Portfolio",
    description:
      "A personal portfolio website showcasing the artwork of Czech painter Jiří Krátký. Features oil paintings, biography, exhibitions, and charity work. Built as a responsive static site.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.jirikratky.com/En/index-en",
    repo: null,
  },
  {
    title: "WorldWise App",
    description:
      "A travel companion app to track cities visited or to explore. Built with React and Vite, it includes interactive maps, location CRUD, and client-side routing with persistent data.",
    tech: ["React", "Vite", "JavaScript", "Hooks", "json-server"],
    link: "https://worldwise-eg.netlify.app/",
    repo: "https://github.com/ElenaGregov/WorldWise",
  },
   {
    title: "Face Recognition App",
    description:
      "A full-stack web app that detects faces in images using the Clarifai API. Built with React for the frontend and Node.js/Express with PostgreSQL for the backend, deployed on Render.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Clarifai API"],
    link: "https://facerecapp-gikx.onrender.com/",
    repo: "https://github.com/ElenaGregov/face-recognition-brain-front-end",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-16 flex flex-col justify-center px-4 py-20 bg-gray-100"
    >
      <FadeInWhenVisible>
        <h2 className="text-4xl font-bold mb-12 text-center text-rose-500">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-rose-50 rounded-xl shadow-md p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <h3 className="text-xl font-semibold text-rose-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-rose-100 text-rose-600 px-3 py-1 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-rose-500 hover:underline font-medium"
                >
                  View Project →
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* Explore Featured Projects Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="group inline-block bg-rose-500 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-600 transition-colors duration-300"
            title="Посмотреть избранные проекты"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Featured Projects
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Projects;

