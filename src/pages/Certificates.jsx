import React from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const Certificates = () => {
  return (
    <section className="section animate-fadeInUp text-center py-12">
      <FadeInWhenVisible>
        <h2 className="text-4xl text-slate-600 font-bold mb-12">
          My Certificates 🎓
        </h2>
        <p className="text-gray-200 mb-12 text-2xl max-w-xl mx-auto">
          Here you can find my professional certificates and achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">
              Complete React Developer
            </h3>
            <p className="text-gray-400 mb-4">Issued by Udemy, 2023</p>
            <a
              href="/images/certificates/React.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">
              Complete JavaScript Course
            </h3>
            <p className="text-gray-400 mb-4">Issued by Udemy, 2023</p>
            <a
              href="/images/certificates/JS.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">Complete Web Developer</h3>
            <p className="text-gray-400 mb-4">Issued by Udemy, 2023</p>
            <a
              href="/images/certificates/webdev.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">Responsive Web Design</h3>
            <p className="text-gray-400 mb-4">Issued by freeCodeCamp, 2024</p>
            <a
              href="/images/certificates/responsive_fcc.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">
              JavaScript Algorithms and Data Structures
            </h3>
            <p className="text-gray-400 mb-4">Issued by freeCodeCamp, 2025</p>
            <a
              href="/images/certificates/JS_fcc.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">
              Front End Development Libraries
            </h3>
            <p className="text-gray-400 mb-4">Issued by freeCodeCamp, 2025</p>
            <a
              href="/images/certificates/frontend_fcc.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">HTML/CSS</h3>
            <p className="text-gray-400 mb-4">Issued by FructCode, 2021</p>
            <a
              href="/images/certificates/html.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">Bootstrap</h3>
            <p className="text-gray-400 mb-4">Issued by FructCode, 2021</p>
            <a
              href="/images/certificates/bootstrap.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">Linux/GIT/Hosting</h3>
            <p className="text-gray-400 mb-4">Issued by FructCode, 2021</p>
            <a
              href="/images/certificates/git.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-white mb-4">PHP/MySQL</h3>
            <p className="text-gray-400 mb-4">Issued by FructCode, 2021</p>
            <a
              href="/images/certificates/php.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Certificates;
