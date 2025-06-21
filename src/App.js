import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import ScrollHandler from "./components/ScrollHandler";
import "./App.css";

function App() {
  return ( 
    <Router>
      <ScrollHandler />
      <div className="bg-neutral-400 flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
