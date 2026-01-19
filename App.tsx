import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import CV from './components/CV';

const HomePage: React.FC = () => {
  return (
    <>
      <div id="top"></div>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  // Determine if we are on the project detail page to conditionally render Navbar styles or visibility
  // For this simple portfolio, Navbar stays everywhere.

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-0">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© 2026 Quan UI/UX Designer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;