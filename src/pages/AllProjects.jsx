import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Jiří Krátký Artist Portfolio",
    description:
      "A personal portfolio website showcasing the artwork of Czech painter Jiří Krátký. Features his unique oil paintings, biography, and exhibitions. Built as a static, responsive website to present his journey from martial arts to fine arts, including his charity work and art auctions.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.jirikratky.com/En/index-en",
    repo: null,
    image: "/images/jiri-kratky.png",
  },
  {
    title: "WorldWise App",
    description:
      "A travel companion app for tracking cities you've visited or want to explore. Built with React and Vite, it allows users to add, view, and delete locations on an interactive map. Includes custom hooks, client-side routing, and a JSON server for persistent data. Mobile-responsive and user-friendly.",
    tech: ["React", "Vite", "JavaScript", "Hooks", "json-server"],
    link: "https://worldwise-eg.netlify.app/",
    repo: "https://github.com/ElenaGregov/WorldWise",
    image: "/images/worldwise.png",
  },
  {
    title: "React Quiz App",
    description:
      "An interactive quiz application where users answer timed multiple-choice questions. Built with React and a custom reducer for state management, it uses a JSON server backend for dynamic question data. Features a points system, countdown timer, progress tracking, and responsive layout. Great for testing knowledge or creating mini games.",
    tech: ["React", "JavaScript", "Hooks", "JSON Server"],
    link: "https://react-quiz-el.onrender.com/",
    repo: "https://github.com/ElenaGregov/React-Quiz",
    image: "/images/quiz.png",
  },
  {
    title: "Employees App",
    description:
      "Simple employees' list app used to manage, filter, and display staff information in a clean interface. Supports search and responsive design.",
    tech: ["React", "JavaScript"],
    link: "https://employee-list-elen.netlify.app/",
    repo: "https://github.com/ElenaGregov/Employee-List-App",
    image: "/images/employees.png",
  },
  {
    title: "React SPA Marvel",
    description:
      "Displays Marvel characters using React and Marvel API. Includes pagination, search, and detail pages with smooth UI transitions and mobile responsiveness.",
    tech: ["React", "API", "HTML/CSS"],
    link: "https://marvel-api-6v82.onrender.com/",
    repo: "https://github.com/ElenaGregov/Marvel-API",
    image: "/images/Marvel.png",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather updates with OpenWeather API. Supports multiple cities, temperature units, and responsive design. Built with modern React hooks.",
    tech: ["React", "API", "HTML/CSS"],
    link: "https://classy-weather-app.onrender.com/",
    repo: "https://github.com/ElenaGregov/Classy-weather-app",
    image: "/images/weatherApp.png",
  },
];

const AllProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-8 bg-neutral-400 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-rose-400 mb-16">
        Explore Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const shortDescription =
            project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description;

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-rose-200 text-rose-600 font-semibold px-2 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                    {project.tech.join(", ")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-rose-500 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm leading-relaxed">
                  {isExpanded ? project.description : shortDescription}
                </p>
                {project.description.length > 100 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}

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
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-medium"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllProjects;
