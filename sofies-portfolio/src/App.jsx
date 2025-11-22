import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Projekt from './components/Projekt.jsx';
import SkolProjekt from './components/SkolProjekt.jsx';
import PrivatProjekt from './components/PrivatProjekt.jsx';
import FotografProjekt from './components/FotografProjekt.jsx';
import Foton from './components/Foton.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className='content-area'>
        <Routes>
          {/* Startsidan */}
          <Route path="/" element={<MainContent />} />
          
          {/* Andra sidor */}
          <Route path="/contact" element={<Contact />} /> 

          {/* Om-sidan */}
          <Route path="/about" element={<About />} />

          {/* Projekt-sidorna */}
          <Route path="/projekt" element={<Projekt />} />

          <Route path="/skolprojekt" element={<SkolProjekt />} />

          <Route path="/privata-projekt" element={<PrivatProjekt />} />

          <Route path="/fotograf-projekt" element={<FotografProjekt />} />

          <Route path="/foton" element={<Foton />} />

          {/* 404-sida */}
          <Route path="*" element={<h1>404: Sidan hittades inte</h1>} />
        </Routes>
        
      </main>
      <Footer />
    </>
  );
}

export default App
