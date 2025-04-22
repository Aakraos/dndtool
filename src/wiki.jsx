import { useRef, useState, useEffect } from "react";
import "./App.css";
import descriptions from "./descriptions";
import spells from "./spells";
import rules from "./rules";
import items from "./items";
import feats from "./feats"; // Importa i talenti
import { schoolTranslations, classTranslations, rangeTranslations, castingTimeTranslations, durationTranslations } from './spells';
import ClosePane from "/public/ClosePane.svg";



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

  const [showItemsList, setShowItemsList] = useState(true); // Default: la lista è visibile
 
  // Stato per il filtro dei talenti (feats)
  const [selectedFeatCategory, setSelectedFeatCategory] = useState([]);

  // Stato per gestire gli elementi selezionati e le loro descrizioni.
  const descriptionPanelRef = useRef(null);
  const activeDescriptionRef = useRef(null);

  // Ogni item sarà un oggetto con { ...item, description, active }.
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectedNormalItemTypes, setSelectedNormalItemTypes] = useState([]);

  const [selectedRarities, setSelectedRarities] = useState([]);  // Per il filtro rarità
  const [selectedMagicItemCategories, setSelectedMagicItemCategories] = useState([]);  // Per le categorie magiche
  const [showAttunement, setShowAttunement] = useState(false);
  const [showCursed, setShowCursed] = useState(false);
  const [showSentient, setShowSentient] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="filter-buttons">
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
        const value = spell[key.toLowerCase()] || `{${key}}`;
        return language === "it"
          ? (key === "castingtime" ? castingTimeTranslations[value] :
              key === "range" ? rangeTranslations[value] :
              key === "components" ? value :
              key === "duration" ? durationTranslations[value] : value)
          : value;
      })
      .replace(/{level}/g, () => {
        if (spell.level === 0) {
          return language === "it" ? "Trucchetto" : "Cantrip";
        } else if (typeof spell.level === "number" && spell.level >= 1 && spell.level <= 9) {
          return language === "it" ? `${spell.level}° livello` : `Level ${spell.level}`;
        }
        return "{level}";
      })
      .replace(/{school}/g, spell.school
        ? (language === "it" ? schoolTranslations[spell.school] || spell.school : spell.school)
        : "{school}")
      .replace(/{classes}/g, spell.classes
        ? spell.classes
            .map((cls) => (language === "it" ? classTranslations[cls] || cls : cls))
            .sort()
            .join(", ")
        : "{classes}")
      .replace(/{source}/g, spell.source || "{source}")
      .replace(/{ritual}/g, spell.ritual ? "Sì" : "No")
      .replace(/{term}/g, `<strong class="term-highlight">${spell.term || "{term}"}</strong>`)
      .replace(/{translation}/g, spell.translation || "{translation}");
  };

  const handleItemClick = (item, event) => {
    const alreadySelected = selectedItems.some((i) => i.term === item.term);
  
    if (alreadySelected) {
      // Deseleziona l'item (rimuove la descrizione)
      setSelectedItems((prevItems) =>
        prevItems.filter((i) => i.term !== item.term)
      );
  
      // NON chiudere l'overlay: lascialo visibile
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
  
    // Aggiungi l'item con descrizione e active: true
    setSelectedItems((prevItems) => [
      ...prevItems,
      { ...item, description: descriptionText, active: true },
    ]);
  
    // Chiudi l'overlay SOLO su mobile
    if (isMobile) {
      setShowItemsList(false);
    }
  };
  
  
  // FUNZIONE PER CAMBIARE LINGUA
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
  
  useEffect(() => {
    // Delay to ensure content is rendered
    setTimeout(() => {
      document.querySelectorAll(".statblock-container").forEach((container) => {
        const title = container.querySelector(".statblock-title");
        const body = container.querySelector(".statblock-body");
  
        if (title && body) {
          // Collapse by default
          body.style.display = "none";
          title.style.cursor = "pointer";
  
          // Toggle on click
          title.onclick = () => {
            const isVisible = body.style.display === "block";
            body.style.display = isVisible ? "none" : "block";
          };
        }
      });
    }, 100); // Delay per sicurezza dopo il rendering
  }, [selectedItems, language]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1023);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(prevState => !prevState);
};

  
  // TOP PANEL HEIGHT CALC

  useEffect(() => {
    const topPanel = document.querySelector('.top-panel');
  
    const updateTopPanelHeight = () => {
      if (topPanel) {
        document.documentElement.style.setProperty('--top-panel-height', `${topPanel.offsetHeight}px`);
      }
    };
  
    updateTopPanelHeight(); // Imposta al montaggio
  
    // Monitoriamo le modifiche del DOM, per aggiornare quando cambia qualcosa
    const observer = new MutationObserver(() => {
      updateTopPanelHeight();
    });
  
    if (topPanel) {
      observer.observe(topPanel, {
        attributes: true, 
        childList: true, 
        subtree: true
      });
    }
  
    // Gestiamo il resize della finestra
    const handleResize = () => {
      updateTopPanelHeight();
    };
  
    window.addEventListener('resize', handleResize);
  
    // Pulizia al momento del dismontaggio
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array vuoto per farlo solo al montaggio
  
   // HELPER FUNC BUTTON CLICK SHOWS VOICES
   const handleMobileButtonClick = (callback) => {
    callback(); // esegue la funzione specifica del bottone
    if (isMobile && !showItemsList) {
      setShowItemsList(true);
    }
  };
  
   // FUNZIONE PER POSIZIONARE LA DESCRIPTION IN VISTA

   useEffect(() => {
    if (descriptionPanelRef.current && activeDescriptionRef.current) {
      const panel = descriptionPanelRef.current;
      const active = activeDescriptionRef.current;
  
      // Calcolo preciso del posizionamento relativo
      panel.scrollTo({
        top: Math.max(0, active.offsetTop - panel.offsetTop),
        behavior: "smooth",
      });
    }
  }, [selectedItems]);

   // START FOOTER 

   useEffect(() => {
    const footer = document.querySelector(".app-footer");
    const itemsList = document.querySelector(".items-list");
    const descriptionPanel = document.querySelector(".description-panel");
  
    const isMobile = () => window.innerWidth <= 1023;
  
    const handleScroll = (e) => {
      if (!isMobile()) return; // SOLO per mobile
  
      const target = e.target.closest(".items-list, .description-panel");
      if (!target) return;
  
      const isAtBottom =
        target.scrollTop + target.clientHeight >= target.scrollHeight - 20;
  
      if (isAtBottom) {
        footer?.classList.remove("hidden");
      } else {
        footer?.classList.add("hidden");
      }
    };
  
    itemsList?.addEventListener("scroll", handleScroll);
    descriptionPanel?.addEventListener("scroll", handleScroll);
  
    return () => {
      itemsList?.removeEventListener("scroll", handleScroll);
      descriptionPanel?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
   // RESIZE OPZIONALE

   useEffect(() => {
    const footer = document.querySelector(".app-footer");
  
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        footer?.classList.remove("hidden");
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

   // END FOOTER

// LOGIC ENDS






// STRUCTURE START

  

return (
  <div className="app-container">
    {/* HEADER: Home + Cerca */}
    <div className="top-panel">
      <div className={`header-bar ${showFiltersMobile ? "menu-open" : ""}`}>
          <img
              src="public/ToolLogo.png"
              alt="Back to Home"
              className="wiki-back-logo"
              onClick={() => setShowWiki(false)}
          />
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
            
              {/* TRANSLATE BUTTON */}

                <button onClick={toggleLanguage} className="toggle-language">
                  <img
                      src={language === "it" ? "public/UK.svg" : "public/ITA.svg"}
                  alt=""
                  className="flag-icon"
                />
                <span className="tooltip-text">
                  {language === "it" ? "Traduci in Inglese" : "Traduci in Italiano"}
                </span>
                </button>


                {/* Hamburger button inside header-bar */}
                <div className="hamburger-div">
                <button
          className={`hamburger ${showFiltersMobile ? "active" : ""}`}
          onClick={() => setShowFiltersMobile((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        </div>

{/* Categorie principali */}
{(!isMobile || showFiltersMobile) && (
  <div className="button-main-scroll-container">
    <div className="button-main-wrapper">
      {[{ key: "all", label: "Tutto" }, { key: "rules", label: "Regole" }, { key: "items", label: "Oggetti" }, { key: "spells", label: "Incantesimi" }, { key: "feats", label: "Talenti" }].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleMobileButtonClick(() => resetFiltersOnCategoryChange(key))}
          className={`button-main ${category === key ? "selected" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
)}

</div>


      {/* FILTRI PRINCIPALI E SECONDARI */}
      {(!isMobile || showFiltersMobile) && (
        <>

          {/* FINE HEADER BAR */}


{/* ITEMS */}
{category === "items" && (
  <>
    {/* Tipo oggetto */}
    <div className="filter-buttons fb-layer-1">
      {[
        { key: "all", label: "Tutti" },
        { key: "normal", label: "Normali" },
        { key: "magic", label: "Magici" },
      ].map(({ key, label }) => (
        <button
          key={key}
          onClick={() =>
            handleMobileButtonClick(() => {
              setItemTypeFilter(key);
              setSelectedNormalItemTypes([]);
            })
          }
          className={`button-secondary ${itemTypeFilter === key ? "selected" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Sottofiltri: Normal Items */}
    {itemTypeFilter === "normal" && (
      <div className="filter-buttons fb-layer-2 horizontal-scroll">
        {[
          { label: "Armature", type: "Armor" },
          { label: "Armi", type: "Weapon" },
          { label: "Eq. d'Avventura", type: "Adventuring Gear" },
          { label: "Arnesi da Artigiano", type: "Artisan's Tool" },
          { label: "Altri Strumenti", type: "Other Tool" },
        ].map(({ label, type }) => (
          <button
            key={type}
            onClick={() =>
              handleMobileButtonClick(() =>
                setSelectedNormalItemTypes((prev) =>
                  prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
                )
              )
            }
            className={`button-secondary ${selectedNormalItemTypes.includes(type) ? "selected" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
    )}

    {/* Sottofiltri: Magic Items */}
    {itemTypeFilter === "magic" && (
      <>
<div className="filter-buttons fb-layer-2 horizontal-scroll">
  {[
    { key: "Common", label: "Comune" },
    { key: "Uncommon", label: "Non comune" },
    { key: "Rare", label: "Raro" },
    { key: "Very Rare", label: "Molto raro" },
    { key: "Legendary", label: "Leggendario" },
    { key: "Artifact", label: "Artefatto" },
  ].map(({ key, label }) => (
    <button
      key={key}
      className={`button-secondary ${selectedRarities.includes(key) ? "selected" : ""}`}
      onClick={() =>
        handleMobileButtonClick(() =>
          setSelectedRarities((prev) =>
            prev.includes(key) ? prev.filter((r) => r !== key) : [...prev, key]
          )
        )
      }
    >
      {label}
    </button>
  ))}
</div>


        <div className="filter-buttons fb-layer-3 horizontal-scroll">
  {[
    { key: "Weapon", label: "Armi" },
    { key: "Armor", label: "Armature" },
    { key: "Wondrous Item", label: "Og. Meravigliosi" },
    { key: "Ring", label: "Anelli" },
    { key: "Staff", label: "Bastoni" },
    { key: "Rod", label: "Verghe" },
    { key: "Wand", label: "Bacchette" },
    { key: "Potion", label: "Pozioni" },
    { key: "Scroll", label: "Pergamene" },
    { key: "Ammunition", label: "Munizioni" },
  ].map(({ key, label }) => (
    <button
      key={key}
      className={`button-secondary ${selectedMagicItemCategories.includes(key) ? "selected" : ""}`}
      onClick={() =>
        handleMobileButtonClick(() =>
          setSelectedMagicItemCategories((prev) =>
            prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
          )
        )
      }
    >
      {label}
    </button>
  ))}
</div>


        <div className="filter-buttons fb-layer-4 horizontal-scroll">
          <button
            className={`button-secondary ${showAttunement ? "selected" : ""}`}
            onClick={() =>
              handleMobileButtonClick(() => setShowAttunement((prev) => !prev))
            }
          >
            Sintonia
          </button>
          <button
            className={`button-secondary ${showCursed ? "selected" : ""}`}
            onClick={() =>
              handleMobileButtonClick(() => setShowCursed((prev) => !prev))
            }
          >
            Maledetti
          </button>
          <button
            className={`button-secondary ${showSentient ? "selected" : ""}`}
            onClick={() =>
              handleMobileButtonClick(() => setShowSentient((prev) => !prev))
            }
          >
            Senzienti
          </button>
        </div>
      </>
    )}
  </>
)}

{/* SPELLS */}
{category === "spells" && (
  <>
    {/* Livelli e Rituale */}
    <div className="filter-buttons fb-layer-1 horizontal-scroll">
      {[...Array(10).keys()].map((level) => (
        <button
          key={level}
          className={`button-secondary level-button ${selectedLevel.includes(level) ? "selected" : ""}`}
          onClick={() =>
            handleMobileButtonClick(() =>
              setSelectedLevel((prev) =>
                prev.includes(level)
                  ? prev.filter((l) => l !== level)
                  : [...prev, level]
              )
            )
          }
        >
          {level}
        </button>
      ))}

      <div className="ritual">
        <button
          className={`button-secondary ${selectedRitual ? "selected" : ""}`}
          onClick={() =>
            handleMobileButtonClick(() =>
              setSelectedRitual((prev) => !prev)
            )
          }
        >
          Rituale
        </button>
      </div>
    </div>

    {/* Classi */}
    <div className="filter-buttons fb-layer-2 horizontal-scroll">
      {[
        { key: "Druid", label: "Druido" },
        { key: "Cleric", label: "Chierico" },
        { key: "Sorcerer", label: "Stregone" },
        { key: "Wizard", label: "Mago" },
        { key: "Paladin", label: "Paladino" },
        { key: "Ranger", label: "Ranger" },
        { key: "Warlock", label: "Warlock" },
      ].map(({ key, label }) => (
        <button
          key={key}
          className={`button-secondary ${selectedClasses.includes(key) ? "selected" : ""}`}
          onClick={() =>
            handleMobileButtonClick(() =>
              setSelectedClasses((prev) =>
                prev.includes(key)
                  ? prev.filter((c) => c !== key)
                  : [...prev, key]
              )
            )
          }
        >
          {label}
        </button>
      ))}
    </div>

    {/* Scuole di magia */}
    <div className="filter-buttons fb-layer-3 horizontal-scroll">
      {[
        { key: "Abjuration", label: "Abiurazione" },
        { key: "Conjuration", label: "Evocazione" },
        { key: "Divination", label: "Divinazione" },
        { key: "Enchantment", label: "Ammaliamento" },
        { key: "Evocation", label: "Invocazione" },
        { key: "Illusion", label: "Illusione" },
        { key: "Necromancy", label: "Necromanzia" },
        { key: "Transmutation", label: "Trasmutazione" },
      ].map(({ key, label }) => (
        <button
          key={key}
          className={`button-secondary ${selectedSchools.includes(key) ? "selected" : ""}`}
          onClick={() =>
            handleMobileButtonClick(() =>
              setSelectedSchools((prev) =>
                prev.includes(key)
                  ? prev.filter((s) => s !== key)
                  : [...prev, key]
              )
            )
          }
        >
          {label}
        </button>
      ))}
    </div>
  </>
)}


{/* FEATS */}
{category === "feats" && (
  <div className="filter-buttons fb-layer-1 horizontal-scroll">
    {["Epic Boon", "Fighting Style", "General", "Origin"].map((featCat) => (
      <button
        key={featCat}
        className={`button-secondary ${selectedFeatCategory.includes(featCat) ? "selected" : ""}`}
        onClick={() =>
          handleMobileButtonClick(() =>
            setSelectedFeatCategory((prev) =>
              prev.includes(featCat)
                ? prev.filter((cat) => cat !== featCat)
                : [...prev, featCat]
            )
          )
        }
      >
        {featCat}
      </button>
    ))}
  </div>
)}

      </>
    )}
    
    </div> {/* CHIUSURA DIV TOP-PANEL */}

   {/* LISTA OGGETTI + DESCRIZIONE */}
   <div className={`content-container ${selectedItems.some((i) => i.active) ? "with-description" : "full-width"}`}>

{isMobile ? (
  <>
    {/* Mobile: se showItemsList è true, mostra la lista overlay */}
    {showItemsList && (
      <div className="items-list overlay">
        {getItems().map((item, index) => (
          <div
            key={index}
            className={`item ${selectedItems.some((i) => i.term === item.term) ? "selected" : ""}`}
            onClick={(e) => handleItemClick(item, e)}
          >
            <p>{language === "it" ? `${item.term} ━ ${item.translation}` : item.term}</p>

            <div className="item-info">
              {item.level && <span className="item-info-symbol">Lv {item.level}</span>}
              {item.school && <span className="item-info-symbol">{item.school}</span>}
              {item.classes && item.classes.length > 0 && (
                <span className="item-info-symbol">{item.classes.join(", ")}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Mobile: quando la lista NON è visibile, mostra la descrizione a piena larghezza */}
    <div
      className="description-panel" ref={descriptionPanelRef}
      onClick={() => {
        if (showItemsList) setShowItemsList(false);
      }}
      style={{ width: "100%" }}
    >
      {selectedItems.some((i) => i.active) &&
        selectedItems
        .filter((item) => item.active)
        .map((item, idx, arr) => (
          <div
            key={item.term}
            className="description"
            ref={idx === arr.length - 1 ? activeDescriptionRef : null} // scrolla all’ultima attiva
          >
            <p dangerouslySetInnerHTML={{ __html: item.description[language] }} />
          </div>
        ))}
    </div>
  </>
) : (
  <>

    {/* Desktop: struttura in due colonne */}
    <div className="items-list">
      {getItems().map((item, index) => (
        <div
          key={index}
          className={`item ${selectedItems.some((i) => i.term === item.term) ? "selected" : ""}`}
          onClick={(e) => handleItemClick(item, e)}
        >
        <p>{language === "it" ? `${item.term} ━ ${item.translation}` : item.term}</p>
        
            {/* Simboli sotto il nome */}
          <div className="item-info">
            {item.level !== undefined && (
              <span className="item-info-symbol">
                {item.level === 0 ? "Cantrip" : `Lv ${item.level}`}
              </span>
              )}
            {item.school && <span className="item-info-symbol">{item.school}</span>}
            {item.classes && item.classes.length > 0 && (
              <span className="item-info-symbol">{item.classes.join(", ")}</span>
            )}
          </div>


        </div>
      ))}
    </div>

    
    {/* DESCRIPTION PANEL */}


    {selectedItems.some((i) => i.active) && (
      <div className="description-panel" ref={descriptionPanelRef}>
        {selectedItems
           .filter((item) => item.active)
           .map((item, idx, arr) => (
             <div
               key={item.term}
               className="description"
               ref={idx === arr.length - 1 ? activeDescriptionRef : null} // scrolla all’ultima attiva
             >
               <p dangerouslySetInnerHTML={{ __html: item.description[language] }} />
             </div>
           ))}
      </div>
    )}
  </>
)}
</div>

{/* Mobile: pulsante per mostrare la lista se non è visibile */}
{isMobile && (
  <button
    className={`toggle-items-button ${showItemsList ? "open" : "closed"}`}
    onClick={() => setShowItemsList(!showItemsList)}
  >
        <span>{showItemsList ? "Chiudi Voci" : "Apri Voci"}</span>
    <img
      src="public/OpenPane.svg"
      alt="Toggle Items"
      className={`arrow ${showItemsList ? "rotate-open" : "rotate-close"}`}
    />
  </button>
)}



  </div>
);



} // Saso non dimenticare che questa è la porcoddio di parentesi che chiude la funzione ShowWiki!
export default Wiki;
