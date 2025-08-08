import React, { useState } from 'react'
import HomePage from './components/home.jsx'
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/about.jsx';
import ProjectsPage from './components/projects.jsx';
import ContactPage from './components/contact.jsx';

import './style/style.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App
