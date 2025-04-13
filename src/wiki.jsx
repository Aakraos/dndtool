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
  const [itemTypeFilter, setItemTypeFilter] = useState("all"); // "all", "normal", "magic"

  // Stato per il filtro dei talenti (feats)
  const [selectedFeatCategory, setSelectedFeatCategory] = useState([]);

  // Stato per gestire gli elementi selezionati e le loro descrizioni.
  // Ogni item sarà un oggetto con { ...item, description, active }.
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectedNormalItemTypes, setSelectedNormalItemTypes] = useState([]);

  const [selectedRarities, setSelectedRarities] = useState([]);  // Per il filtro rarità
  const [selectedMagicItemCategories, setSelectedMagicItemCategories] = useState([]);  // Per le categorie magiche
  const [showAttunement, setShowAttunement] = useState(false);
  const [showCursed, setShowCursed] = useState(false);
  const [showSentient, setShowSentient] = useState(false);

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
        
          // Applica filtro normal/magic
          if (itemTypeFilter !== "all") {
            itemsToDisplay = itemsToDisplay.filter(
              (item) => item.group?.toLowerCase() === itemTypeFilter
            );

            // Applica sotto-filtro se "magic"

                  // Filtro per oggetti magici
      if (itemTypeFilter === "magic") {
        // Filtro per rarità
        if (selectedRarities.length > 0) {
          itemsToDisplay = itemsToDisplay.filter((item) =>
            selectedRarities.includes(item.rarity)
          );
        }

        // Filtro per categoria
        if (selectedMagicItemCategories.length > 0) {
          itemsToDisplay = itemsToDisplay.filter((item) =>
            selectedMagicItemCategories.includes(item.category)
          );
        }

        // Filtro per proprietà (Sintonia, Maledetti, Senzienti)
        if (showAttunement) {
          itemsToDisplay = itemsToDisplay.filter((item) => item.attunement);
        }
        
        if (showCursed) {
          itemsToDisplay = itemsToDisplay.filter((item) => item.cursed);
        }
        
        if (showSentient) {
          itemsToDisplay = itemsToDisplay.filter((item) => item.sentient);
        }
      }
          
            // Applica sotto-filtro se "normal"
            if (itemTypeFilter === "normal" && selectedNormalItemTypes.length > 0) {
              itemsToDisplay = itemsToDisplay.filter((item) => {
                const type = item.type || "";
                const isArmor = selectedNormalItemTypes.includes("Armor") && (
                  type.includes("Light Armor") ||
                  type.includes("Medium Armor") ||
                  type.includes("Heavy Armor") ||
                  type.includes("Shield")
                );
                const isWeapon = selectedNormalItemTypes.includes("Weapon") && (
                  type.includes("Simple Weapon") ||
                  type.includes("Martial Weapon") ||
                  type.includes("Ranged Weapon") ||
                  type.includes("Melee Weapon")
                );
                const isOtherTool = selectedNormalItemTypes.includes("Other Tool") && type === "Other Tool";
                const isAdvGear = selectedNormalItemTypes.includes("Adventuring Gear") && type === "Adventuring Gear";
                const isArtisan = selectedNormalItemTypes.includes("Artisan's Tool") && type === "Artisan's Tool";
          
                return isArmor || isWeapon || isOtherTool || isAdvGear || isArtisan;
              });
            }
          }
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

    {itemTypeFilter === "normal" && (
      <div className="category-buttons">
        {["Armor", "Weapon", "Tools", "Gear"].map((subtype) => (
          <button
            key={subtype}
            className={`button-secondary ${
              selectedNormalItemTypes.includes(subtype) ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedNormalItemTypes((prev) =>
                    prev.includes(subtype)
                      ? prev.filter((s) => s !== subtype)
                      : [...prev, subtype]
                  );
                }}
              >
            {subtype}
          </button>
        ))}
      </div>
    )}

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "it" ? "en" : "it"));
  };

   useEffect(() => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) => {
        const description = descriptions[item.term.toLowerCase()];
        if (!description) return item;

        return {
          ...item,
          description: {
            it: replacePlaceholders(description.it, item),
            en: replacePlaceholders(description.en, item),
          },
        };
      })
    );
  }, [language]); // Esegue l'aggiornamento quando cambia la lingua


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
    
    if (newCategory === "items") {
      setItemTypeFilter("all");
      setSelectedRarities([]);
      setSelectedMagicItemCategories([]);
      setSelectedMagicProperties([]);
    }
    resetView();
  };
  

  return (
    <div className="app-container">
        <div className="header-bar">
          <button
            className="back-button"
            onClick={() => setShowWiki(false)} // Torna alla home
          >
            Home
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
    <div className="filter-buttons">
      <button
        onClick={() => {
          setItemTypeFilter("all");
          setSelectedNormalItemTypes([]);
        }}
        className={`button-secondary ${itemTypeFilter === "all" ? "selected" : ""}`}
      >
        Tutti
      </button>
      <button
        onClick={() => {
          setItemTypeFilter("normal");
          setSelectedNormalItemTypes([]);
        }}
        className={`button-secondary ${itemTypeFilter === "normal" ? "selected" : ""}`}
      >
        Normali
      </button>
      <button
        onClick={() => {
          setItemTypeFilter("magic");
          setSelectedNormalItemTypes([]);
        }}
        className={`button-secondary ${itemTypeFilter === "magic" ? "selected" : ""}`}
      >
        Magici
      </button>
    </div>

    {/* Sottofiltro per gli oggetti normali */}
    {itemTypeFilter === "normal" && (
      <div className="filter-buttons type-buttons">
        {[
          { label: "Armature", type: "Armor" },
          { label: "Armi", type: "Weapon" },
          { label: "Eq. d'Avventura", type: "Adventuring Gear" },
          { label: "Arnesi da Artigiano", type: "Artisan's Tool" },
          { label: "Altri Strumenti", type: "Other Tool" }
        ].map(({ label, type }) => (
          <button
            key={type}
            onClick={() =>
              setSelectedNormalItemTypes((prev) =>
                prev.includes(type)
                  ? prev.filter((t) => t !== type)
                  : [...prev, type]
              )
            }
            className={`button-secondary ${selectedNormalItemTypes.includes(type) ? "selected" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
    )}

    {/* Sottofiltro per gli oggetti magici */}
    {itemTypeFilter === "magic" && (
      <>
        {/* Filtri per rarità */}
        <div className="filter-buttons rarity-buttons">
          {[
            { label: "Comune", rarity: "Common" },
            { label: "Non Comune", rarity: "Uncommon" },
            { label: "Raro", rarity: "Rare" },
            { label: "Molto Raro", rarity: "Very Rare" },
            { label: "Leggendario", rarity: "Legendary" },
            { label: "Artefatto", rarity: "Artifact" }
          ].map(({ label, rarity }) => (
            <button
              key={rarity}
              className={`button-secondary ${selectedRarities.includes(rarity) ? "selected" : ""}`}
              onClick={() => {
                setSelectedRarities((prev) =>
                  prev.includes(rarity) ? prev.filter((r) => r !== rarity) : [...prev, rarity]
                );
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Filtri per categorie */}
        <div className="filter-buttons category-buttons">
          {[
            { label: "Arma", category: "Weapon" },
            { label: "Armatura", category: "Armor" },
            { label: "Oggetto Meraviglioso", category: "Wondrous Item" },
            { label: "Anello", category: "Ring" },
            { label: "Bastone", category: "Staff" },
            { label: "Verga", category: "Rod" },
            { label: "Bacchetta", category: "Wand" },
            { label: "Pozione", category: "Potion" },
            { label: "Pergamena", category: "Scroll" },
            { label: "Munizione", category: "Ammunition" }
          ].map(({ label, category }) => (
            <button
              key={category}
              className={`button-secondary ${selectedMagicItemCategories.includes(category) ? "selected" : ""}`}
              onClick={() => {
                setSelectedMagicItemCategories((prev) =>
                  prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
                );
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Filtri per proprietà */}
        <div className="filter-buttons">
  <button
    className={`button-secondary ${showAttunement ? "selected" : ""}`}
    onClick={() => setShowAttunement((prev) => !prev)}
  >
    Sintonia
  </button>
  <button
    className={`button-secondary ${showCursed ? "selected" : ""}`}
    onClick={() => setShowCursed((prev) => !prev)}
  >
    Maledetti
  </button>
  <button
    className={`button-secondary ${showSentient ? "selected" : ""}`}
    onClick={() => setShowSentient((prev) => !prev)}
  >
    Senzienti
  </button>
</div>

        // fine filtri ulteriori
        
      </>
    )}
  </>
)}


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
  {[
    { label: "Druido", value: "Druid" },
    { label: "Chierico", value: "Cleric" },
    { label: "Stregone", value: "Sorcerer" },
    { label: "Mago", value: "Wizard" },
    { label: "Paladino", value: "Paladin" },
    { label: "Ranger", value: "Ranger" },
    { label: "Warlock", value: "Warlock" },
  ].map(({ label, value }) => (
    <button
      key={value}
      className={`button-secondary class-button ${
        selectedClasses.includes(value) ? "selected class-selected" : ""
      }`}
      onClick={() => {
        setSelectedClasses((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
      }}
    >
      {label}
    </button>
  ))}
</div>

<div className="category-buttons schools">
  {[
    { label: "Abiurazione", value: "Abjuration" },
    { label: "Evocazione", value: "Conjuration" },
    { label: "Divinazione", value: "Divination" },
    { label: "Ammaliamento", value: "Enchantment" },
    { label: "Invocazione", value: "Evocation" },
    { label: "Illusione", value: "Illusion" },
    { label: "Necromanzia", value: "Necromancy" },
    { label: "Trasmutazione", value: "Transmutation" },
  ].map(({ label, value }) => (
    <button
      key={value}
      className={`button-secondary school-button ${
        selectedSchools.includes(value) ? "selected school-selected" : ""
      }`}
      onClick={() => {
        setSelectedSchools((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
      }}
    >
      {label}
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
    </div>
  );
}

export default Wiki;
