import { useState } from "react";
import "./App.css";
import descriptions from "./descriptions";
import spells from "./spells";
import rules from "./rules";
import items from "./items";
import feats from "./feats"; // Importa i talenti

function Wiki({ setShowWiki }) {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("it");
  const [selectedCategories, setSelectedCategories] = useState([]); // Per altri sottofiltri se necessari
  const [selectedLevel, setSelectedLevel] = useState([]); // Filtro per livelli (solo per spells)
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedRitual, setSelectedRitual] = useState(false);

  // Stato per il filtro dei talenti (feats)
  const [selectedFeatCategory, setSelectedFeatCategory] = useState([]);
  
  // Stato per gestire gli elementi selezionati e le loro descrizioni.
  // Ogni item sarà un oggetto con { ...item, description, active }.
  const [selectedItems, setSelectedItems] = useState([]);

  // Funzione per filtrare gli item in base alla ricerca
  const filterItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.translation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Funzione per ottenere gli items in base alla categoria e ai filtri
  const getItems = () => {
    let itemsToDisplay = [];
    switch (category) {
      case "rules":
        itemsToDisplay = rules;
        break;
      case "items":
        itemsToDisplay = items;
        break;
      case "spells":
        itemsToDisplay = spells;
        break;
      case "feats":
        itemsToDisplay = feats;
        break;
      default:
        // Categoria "all": unisci tutto
        itemsToDisplay = [...rules, ...items, ...spells, ...feats];
    }

    // Applica i filtri specifici per gli spells
    if (category === "spells") {
      itemsToDisplay = itemsToDisplay.filter((item) => item.level !== undefined);
      if (selectedLevel.length > 0) {
        itemsToDisplay = itemsToDisplay.filter((item) =>
          selectedLevel.includes(Number(item.level))
        );
      }
      if (selectedClasses.length > 0) {
        itemsToDisplay = itemsToDisplay.filter((item) =>
          selectedClasses.some((cls) => item.classes.includes(cls))
        );
      }
      if (selectedSchools.length > 0) {
        itemsToDisplay = itemsToDisplay.filter((item) =>
          selectedSchools.includes(item.school)
        );
      }
      if (selectedRitual) {
        itemsToDisplay = itemsToDisplay.filter((item) => item.ritual === true);
      }
    }

    // Applica il filtro per i feats se la categoria è "feats"
    if (category === "feats") {
      if (selectedFeatCategory.length > 0) {
        itemsToDisplay = itemsToDisplay.filter((item) =>
          selectedFeatCategory.includes(item.category)
        );
      }
    }

    return filterItems(itemsToDisplay).sort((a, b) =>
      a.term.localeCompare(b.term)
    );
  };

  // Funzione per sostituire i placeholder nelle descrizioni
  const replacePlaceholders = (description, spell) => {
    return description
      .replace(/{(castingtime|range|components|duration)}/g, (_, key) => {
        return spell[key.toLowerCase()] || `{${key}}`;
      })
      .replace(/{level}/g, spell.level ? `${spell.level}` : "{level}")
      .replace(/{school}/g, spell.school || "{school}")
      .replace(/{classes}/g, spell.classes ? spell.classes.join(", ") : "{classes}")
      .replace(/{source}/g, spell.source || "{source}")
      .replace(/{ritual}/g, spell.ritual ? "Yes" : "No")
      .replace(/{term}/g, spell.term || "{term}")
      .replace(/{translation}/g, spell.translation || "{translation}");
  };

  // Funzione per gestire il click/tap su un item
  const handleItemClick = (item, event) => {
    // Se l'elemento è già selezionato, lo rimuoviamo (e quindi anche la descrizione)
    if (selectedItems.some((i) => i.term === item.term)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((i) => i.term !== item.term)
      );
      return;
    }
    // Prepara la descrizione
    const description = descriptions[item.term.toLowerCase()];
    const descriptionText = description
      ? {
          it: replacePlaceholders(description.it, item),
          en: replacePlaceholders(description.en, item),
        }
      : {
          it: "Nessuna descrizione disponibile",
          en: "No description available",
        };

    // Aggiunge l'elemento selezionato con active: true (stile temporaneo)
    setSelectedItems((prevItems) => [
      ...prevItems,
      { ...item, description: descriptionText, active: true },
    ]);

    // Se il dispositivo è mobile (pointer: coarse), dopo 300ms impostiamo active a false
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTimeout(() => {
        setSelectedItems((prevItems) =>
          prevItems.map((i) =>
            i.term === item.term ? { ...i, active: false } : i
          )
        );
      }, 300);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "it" ? "en" : "it"));
  };

  const resetView = () => {
    setSelectedItems([]);
  };

  // Quando si cambia categoria, resetta anche i filtri specifici
  const resetFiltersOnCategoryChange = (newCategory) => {
    setCategory(newCategory);
    if (newCategory !== "spells") {
      setSelectedLevel([]);
      setSelectedClasses([]);
      setSelectedSchools([]);
      setSelectedRitual(false);
    }
    if (newCategory !== "feats") {
      setSelectedFeatCategory([]);
    }
    resetView();
  };

  return (
    <div className="app-container">
      <button
        className="back-button"
        onClick={() => setShowWiki(false)} // Torna alla home
      >
        Torna alla home
      </button>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Cerca..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            resetView();
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => resetFiltersOnCategoryChange("all")}
          className={`button-main ${category === "all" ? "selected" : ""}`}
        >
          Tutto
        </button>
        <button
          onClick={() => resetFiltersOnCategoryChange("rules")}
          className={`button-main ${category === "rules" ? "selected" : ""}`}
        >
          Regole
        </button>
        <button
          onClick={() => resetFiltersOnCategoryChange("items")}
          className={`button-main ${category === "items" ? "selected" : ""}`}
        >
          Oggetti
        </button>
        <button
          onClick={() => resetFiltersOnCategoryChange("spells")}
          className={`button-main ${category === "spells" ? "selected" : ""}`}
        >
          Incantesimi
        </button>
        <button
          onClick={() => resetFiltersOnCategoryChange("feats")}
          className={`button-main ${category === "feats" ? "selected" : ""}`}
        >
          Talenti
        </button>
      </div>

      {category === "spells" && (
        <>
          <div className="category-buttons levels">
            {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((level) => (
              <button
                key={level}
                className={`button-secondary level-button ${
                  selectedLevel.includes(Number(level))
                    ? "selected level-selected"
                    : ""
                }`}
                onClick={() => {
                  setSelectedLevel((prev) =>
                    prev.includes(Number(level))
                      ? prev.filter((item) => item !== Number(level))
                      : [...prev, Number(level)]
                  );
                }}
              >
                {level}
              </button>
            ))}
          </div>
          
          <div className="category-buttons classes">
            {["Druid", "Cleric", "Sorcerer", "Wizard", "Paladin", "Ranger", "Warlock"].map((cls) => (
              <button
                key={cls}
                className={`button-secondary class-button ${
                  selectedClasses.includes(cls) ? "selected class-selected" : ""
                }`}
                onClick={() => {
                  setSelectedClasses((prev) =>
                    prev.includes(cls)
                      ? prev.filter((item) => item !== cls)
                      : [...prev, cls]
                  );
                }}
              >
                {cls}
              </button>
            ))}
          </div>

          <div className="category-buttons schools">
            {["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"].map((school) => (
              <button
                key={school}
                className={`button-secondary school-button ${
                  selectedSchools.includes(school)
                    ? "selected school-selected"
                    : ""
                }`}
                onClick={() => {
                  setSelectedSchools((prev) =>
                    prev.includes(school)
                      ? prev.filter((item) => item !== school)
                      : [...prev, school]
                  );
                }}
              >
                {school}
              </button>
            ))}
          </div>

          <div className="category-buttons ritual">
            <button
              className={`button-secondary ritual-button ${
                selectedRitual ? "selected ritual-selected" : ""
              }`}
              onClick={() => setSelectedRitual((prev) => !prev)}
            >
              Rituale
            </button>
          </div>
        </>
      )}

      {category === "feats" && (
        <div className="category-buttons">
          {["Epic Boon", "Fighting Style", "General", "Origin"].map((featCat) => (
            <button
              key={featCat}
              className={`button-secondary ${
                selectedFeatCategory.includes(featCat)
                  ? "selected secondary-selected"
                  : ""
              }`}
              onClick={() => {
                setSelectedFeatCategory((prev) =>
                  prev.includes(featCat)
                    ? prev.filter((cat) => cat !== featCat)
                    : [...prev, featCat]
                );
              }}
            >
              {featCat}
            </button>
          ))}
        </div>
      )}

      <div className="items-list">
        {getItems().map((item, index) => {
          const selectedObj = selectedItems.find((i) => i.term === item.term);
          return (
            <div
              key={index}
              className={`item ${
                selectedObj ? (selectedObj.active ? "active" : "selected") : ""
              }`}
            >
              <p onClick={(e) => handleItemClick(item, e)}>
                {item.term} ━ {item.translation}
              </p>
              {selectedObj && (
                <div className="description">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: selectedObj.description[language],
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wiki;
