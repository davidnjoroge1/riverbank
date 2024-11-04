import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProgramsPage from './pages/Programs';
import ContactPage from './pages/Contact';
import PrayerRequest from './pages/PrayerRequest';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/prayerrequest" element={<PrayerRequest />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
