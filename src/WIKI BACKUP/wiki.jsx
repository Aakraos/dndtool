import { useState, useEffect } from "react";
import "./App.css";
import descriptions from "./descriptions";
import spells from "./spells";
import rules from "./rules";
import items from "./items";
import feats from "./feats"; // Importa i talenti
import { schoolTranslations, classTranslations, rangeTranslations, castingTimeTranslations, durationTranslations } from './spells';

function Wiki({ setShowWiki }) {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [selectedCategories, setSelectedCategories] = useState([]); // Per altri sottofiltri se necessari
  const [selectedLevel, setSelectedLevel] = useState([]); // Filtro per livelli (solo per spells)
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedRitual, setSelectedRitual] = useState(false);
  const [selectedFeatCategory, setSelectedFeatCategory] = useState([]);  // Stato per il filtro dei talenti (feats)
  const [selectedItems, setSelectedItems] = useState([]);  // Stato per gestire gli elementi selezionati e le loro descrizioni.
  const [itemGroup, setItemGroup] = useState([]); // Stato per gestire il filtro tra "Normal" e "Magic"
  const [showArmorWeapon, setShowArmorWeapon] = useState(false); // Stato per mostrare o nascondere i bottoni "Armor" e "Weapon"

  // Funzione per filtrare gli item in base alla ricerca
  const filterItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.translation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Funzione per ottenere le voci in base alla categoria e ai filtri
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


// Filtro per il gruppo "Normal", "Magic" o le nuove categorie
if (itemGroup !== "all") {
  const weaponTypes = [
    "Simple Melee Weapon",
    "Simple Ranged Weapon",
    "Martial Melee Weapon",
    "Martial Ranged Weapon",
  ];
  const armorTypes = [
    "Light Armor",
    "Medium Armor",
    "Heavy Armor",
    "Shield",
  ];

  if (itemGroup === "Armor") {
    itemsToDisplay = itemsToDisplay.filter(item => armorTypes.includes(item.type));
  } else if (itemGroup === "Weapon") {
    itemsToDisplay = itemsToDisplay.filter(item => weaponTypes.includes(item.type));
  } else if (itemGroup === "AdvGear") {
    itemsToDisplay = itemsToDisplay.filter(item => item.type === "Adventuring Gear");
  } else if (itemGroup === "ArtisanTool") {
    itemsToDisplay = itemsToDisplay.filter(item => item.type === "Artisan's Tool");
  } else if (itemGroup === "OtherTool") {
    itemsToDisplay = itemsToDisplay.filter(item => item.type === "Other Tool");
  } else {
    itemsToDisplay = itemsToDisplay.filter(item => item.group === itemGroup);
  }
}
    // Funzione per selezionare più categorie di Normal Items alla volta
    const toggleItemGroup = (group) => {
      setItemGroup((prev) =>
        prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
      );
    };

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
        // Recupera il valore corrispondente e restituisce la traduzione o il valore di default
        const value = spell[key.toLowerCase()] || `{${key}}`;
        return language === "it"
          ? (key === "castingtime" ? castingTimeTranslations[value] :
              key === "range" ? rangeTranslations[value] :
              key === "components" ? value : // I componenti potrebbero non richiedere una traduzione
              key === "duration" ? durationTranslations[value] : value)
          : value;
      })
      .replace(/{level}/g, spell.level ? `${spell.level}` : "{level}")
      .replace(/{school}/g, spell.school
        ? (language === "it" ? schoolTranslations[spell.school] || spell.school : spell.school)
        : "{school}")
      .replace(/{classes}/g, spell.classes
        ? spell.classes
            .map((cls) => (language === "it" ? classTranslations[cls] || cls : cls)) // Traduci le classi
            .sort() // Ordina alfabeticamente
            .join(", ") // Unisci in una stringa
        : "{classes}")
      .replace(/{source}/g, spell.source || "{source}")
      .replace(/{ritual}/g, spell.ritual ? "Sì" : "No")
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

// Funzione per alternare la lingua tra italiano (it) e inglese (en)
const toggleLanguage = () => {
  setLanguage((prevLanguage) => (prevLanguage === "it" ? "en" : "it"));
};

// Eseguito ogni volta che la lingua cambia
useEffect(() => {
  // Aggiorna gli oggetti selezionati
  setSelectedItems((prevItems) =>
    prevItems.map((item) => {
      // Cerca la descrizione per l'oggetto nella lingua selezionata
      const description = descriptions[item.term.toLowerCase()];
      if (!description) return item; // Se non esiste una descrizione, restituisce l'oggetto senza modifiche

      return {
        ...item, // Mantiene le altre proprietà dell'oggetto
        description: {
          it: replacePlaceholders(description.it, item), // Sostituisce i segnaposto nella descrizione in italiano
          en: replacePlaceholders(description.en, item), // Sostituisce i segnaposto nella descrizione in inglese
        },
      };
    })
  );
}, [language]); // Si attiva ogni volta che cambia la lingua

// Funzione per resettare la vista, svuotando gli oggetti selezionati
const resetView = () => {
  setSelectedItems([]); // Rimuove tutti gli oggetti dalla selezione
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
  
      {category === "items" && (
        <>
          <div className="category-buttons group">
            <button
              onClick={() => {
                setItemGroup(["Normal"]);
                setShowArmorWeapon(true);
              }}
              className={`button-secondary ${itemGroup.includes("Normal") ? "selected" : ""}`}
            >
              Normal
            </button>
            <button
              onClick={() => {
                setItemGroup(["Magic"]);
                setShowArmorWeapon(false);
              }}
              className={`button-secondary ${itemGroup.includes("Magic") ? "selected" : ""}`}
            >
              Magic
            </button>
            <button
              onClick={() => {
                setItemGroup([]);
                setShowArmorWeapon(false);
              }}
              className={`button-secondary ${itemGroup.length === 0 ? "selected" : ""}`}
            >
              Tutti
            </button>
          </div>
  
          {showArmorWeapon && (
            <div className="category-buttons sub-filters">
              <button
                onClick={() => toggleItemGroup("Armor")}
                className={`button-secondary ${itemGroup.includes("Armor") ? "selected" : ""}`}
              >
                Armor
              </button>
              <button
                onClick={() => toggleItemGroup("Weapon")}
                className={`button-secondary ${itemGroup.includes("Weapon") ? "selected" : ""}`}
              >
                Weapon
              </button>
              <button
                onClick={() => toggleItemGroup("AdvGear")}
                className={`button-secondary ${itemGroup.includes("AdvGear") ? "selected" : ""}`}
              >
                Adventuring Gear
              </button>
              <button
                onClick={() => toggleItemGroup("ArtisanTool")}
                className={`button-secondary ${itemGroup.includes("ArtisanTool") ? "selected" : ""}`}
              >
                Artisan's Tool
              </button>
              <button
                onClick={() => toggleItemGroup("OtherTool")}
                className={`button-secondary ${itemGroup.includes("OtherTool") ? "selected" : ""}`}
              >
                Other Tool
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );


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
  {getItems().map((item) => {
    const selectedObj = selectedItems.find((i) => i.term === item.term);
    
    return (
      <div
        key={item.term} // Usa `item.term` come chiave univoca
        className={`item ${selectedObj ? (selectedObj.active ? "active" : "selected") : ""}`}
      >
        <p onClick={(e) => handleItemClick(item, e)}>
          {item.term} ━ {item.translation}
        </p>
        {selectedObj && (
          <div className="description">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedObj.description ? selectedObj.description[language] : "Descrizione non disponibile",
              }}
            />
            <div className="translate-button-container">
              <button onClick={toggleLanguage} className="toggle-language">
                {language === "it" ? "Inglese" : "Italiano"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>
}
export default Wiki;
