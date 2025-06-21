import React from "react";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center text-center gap-6 text-gray-700 dark:text-gray-300 text-lg">
      <a
        href="mailto:elena@gregov.cz"
        className="flex items-center gap-3 hover:text-rose-300 transition"
      >
        <FaEnvelope className="text-2xl" />
        elena@gregov.cz
      </a>

      <a
        href="https://github.com/elenagregov"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-rose-300 transition"
      >
        <FaGithub className="text-2xl" />
        github.com/elenagregov
      </a>

      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-xl text-rose-600" />
        Prague, Czech Republic
      </div>
    </div>
  );
};

export default Contact;
