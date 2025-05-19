import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Wiki from "./wiki";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const toolLogo = import.meta.env.BASE_URL + 'img/ToolLogo.png';
const wikiButton = import.meta.env.BASE_URL + 'img/WikiButton.png';
const toolTitle = import.meta.env.BASE_URL + 'img/ToolTitle.png';

function Home() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Torna alla home se serve (qui siamo già in home)
  };

  const openWiki = () => {
    navigate("/wiki");
  };

  return (
    <div className="main-container home-mode">
      <div className="logo-title-wrapper" onClick={handleLogoClick}>
        <img
          src={toolLogo}
          alt="Tool Logo"
          className="wiki-back-logo tool-logo home-mode"
        />
        <img
          src={toolTitle}
          alt="Title"
          className="tool-title"
        />
      </div>

      <div className="menu-button-container">
        <div className={`menu-button-p ${hovered ? 'hovered' : ''}`}>
          <p>WIKI</p>
        </div>

        <img
          src={wikiButton}
          alt="Wiki Button"
          className="wiki-button-img"
          onClick={openWiki}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/dndtool">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        {/* qui in futuro puoi aggiungere altri path come /spells */}
      </Routes>
    </BrowserRouter>
  );
}
