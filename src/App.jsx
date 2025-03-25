import { useState } from "react";
import Wiki from "./wiki";

export default function App() {
  const [showWiki, setShowWiki] = useState(false);

  return (
    <div>
      {!showWiki ? (
        <button onClick={() => setShowWiki(true)}>Accedi alla Wiki</button>
      ) : (
        <Wiki setShowWiki={setShowWiki} />
      )}
    </div>
  );
}
