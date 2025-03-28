import { useState } from "react";
import Wiki from "./wiki";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [showWiki, setShowWiki] = useState(false);

  return (
    <div className={`main-container ${showWiki ? "wiki-open" : ""}`}>
      {!showWiki ? (
        <button className="wiki-button" onClick={() => setShowWiki(true)}>
          WIKI
        </button>
      ) : (
        <Wiki setShowWiki={setShowWiki} />
      )}
    </div>
  );
}