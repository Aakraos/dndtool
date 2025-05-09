import { useState } from "react";
import './App.css';
import Wiki from "./wiki";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
const toolLogo = import.meta.env.BASE_URL + 'img/ToolLogo.png';
const wikiButton = import.meta.env.BASE_URL + 'img/WikiButton.png';
const toolTitle = import.meta.env.BASE_URL + 'img/ToolTitle.png';

export default function App() {
  const [showWiki, setShowWiki] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowWiki(false); // opzionale: torna alla home
  };

  return (
    <div className={`main-container ${showWiki ? "wiki-open" : ""}`}>

{/* LOGO E TITOLO IN ALTO A SINISTRA */}
{!showWiki && (
  <div className="logo-title-wrapper" onClick={handleLogoClick}>
    <img
      src={toolLogo}
      alt="Tool Logo"
      className={`wiki-back-logo tool-logo ${showWiki ? 'wiki-mode' : 'home-mode'}`}
    />
    <img
      src={toolTitle}
      alt="Title"
      className="tool-title"
    />
  </div>
)}

      {!showWiki ? (
        <>
          <div className="menu-button-container">
            <div className={`menu-button-p ${hovered ? 'hovered' : ''}`}>
              <p>WIKI</p>
            </div>

            <img
              src={wikiButton}
              alt="Wiki Button"
              className="wiki-button-img"
              onClick={() => setShowWiki(true)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>

          <Footer />
        </>
      ) : (
        <>
          <Wiki setShowWiki={setShowWiki} />
        </>
      )}
    </div>
  );
}
