import descriptions from "./descriptions";

const items = [
    
    // START WEAPONS

    {
        term: "Battleaxe",
        translation: "Ascia da Battaglia",
        type: "Martial Melee Weapons",
        damage: "1d8 Slashing",
        properties: ["Versatile (1d10)"],
        mastery: "Topple",
        weight: "4 lb.",
        cost: "10 GP",
        description: descriptions["battleaxe"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Blowgun",
        translation: "Cerbottana",
        type: "Martial Ranged Weapons",
        damage: "1 Piercing",
        properties: ["Ammunition (Range 25/100); Needle", "Loading"],
        mastery: "Vex",
        weight: "1 lb.",
        cost: "10 GP",
        description: descriptions["blowgun"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Club",
        translation: "Randello",
        type: "Simple Melee Weapons",
        damage: "1d4 Bludgeoning",
        properties: ["Light"],
        mastery: "Slow",
        weight: "2 lb.",
        cost: "1 SP",
        description: descriptions["club"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Dagger",
        translation: "Pugnale",
        type: "Simple Melee Weapons",
        damage: "1d4 Piercing",
        properties: ["Finesse", "Light", "Thrown (Range 20/60)"],
        mastery: "Nick",
        weight: "1 lb.",
        cost: "2 GP",
        description: descriptions["dagger"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Dart",
        translation: "Dardo",
        type: "Simple Ranged Weapons",
        damage: "1d4 Bludgeoning",
        properties: ["Finesse", "Thrown (Range 20/60)"],
        mastery: "Vex",
        weight: "1/4 lb.",
        cost: "5 CP",
        description: descriptions["dart"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Flail",
        translation: "Mazzafrusto",
        type: "Martial Melee Weapons",
        damage: "1d8 Bludgeoning",
        properties: [],
        mastery: "Sap",
        weight: "2 lb.",
        cost: "10 GP",
        description: descriptions["flail"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Glaive",
        translation: "Falcione",
        type: "Martial Melee Weapons",
        damage: "1d10 Slashing",
        properties: ["Heavy", "Reach", "Two-Handed"],
        mastery: "Graze",
        weight: "6 lb.",
        cost: "20 GP",
        description: descriptions["glaive"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Greataxe",
        translation: "Ascia Bipenne",
        type: "Martial Melee Weapons",
        damage: "1d12 Slashing",
        properties: ["Heavy", "Two-Handed"],
        mastery: "Cleave",
        weight: "7 lb.",
        cost: "30 GP",
        description: descriptions["greataxe"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Greatclub",
        translation: "Randello Pesante",
        type: "Simple Melee Weapons",
        damage: "1d8 Bludgeoning",
        properties: ["Two-Handed"],
        mastery: "Push",
        weight: "10 lb.",
        cost: "2 SP",
        description: descriptions["greatclub"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Greatsword",
        translation: "Spadone",
        type: "Martial Melee Weapons",
        damage: "2d6 Slashing",
        properties: ["Heavy", "Two-Handed"],
        mastery: "Graze",
        weight: "6 lb.",
        cost: "50 GP",
        description: descriptions["greatsword"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Halberd",
        translation: "Alabarda",
        type: "Martial Melee Weapons",
        damage: "1d10 Slashing",
        properties: ["Heavy", "Reach", "Two-Handed"],
        mastery: "Cleave",
        weight: "6 lb.",
        cost: "20 GP",
        description: descriptions["halberd"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Hand Crossbow",
        translation: "Balestra a Mano",
        type: "Martial Ranged Weapons",
        damage: "1d6 Piercing",
        properties: ["Ammunition (Range 30/120); Bolt", "Light", "Loading"],
        mastery: "Vex",
        weight: "3 lb.",
        cost: "75 GP",
        description: descriptions["hand_crossbow"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Handaxe",
        translation: "Ascia",
        type: "Simple Melee Weapons",
        damage: "1d6 Slashing",
        properties: ["Light", "Thrown (Range 20/60)"],
        mastery: "Vex",
        weight: "2 lb.",
        cost: "5 GP",
        description: descriptions["handaxe"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Javelin",
        translation: "Giavellotto",
        type: "Simple Ranged Weapons",
        damage: "1d6 Piercing",
        properties: ["Thrown (Range 30/120)"],
        mastery: "Flex",
        weight: "2 lb.",
        cost: "5 SP",
        description: descriptions["javelin"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Heavy Crossbow",
        translation: "Balestra Pesante",
        type: "Martial Ranged Weapons",
        damage: "1d10 Piercing",
        properties: ["Ammunition (Range 100/400); Bolt", "Heavy", "Loading", "Two-Handed"],
        mastery: "Push",
        weight: "18 lb.",
        cost: "50 GP",
        description: descriptions["heavy_crossbow"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Lance",
        translation: "Lancia da Cavaliere",
        type: "Martial Melee Weapons",
        damage: "1d10 Piercing",
        properties: ["Heavy", "Reach", "Two-Handed"],
        mastery: "Topple",
        weight: "6 lb.",
        cost: "10 GP",
        description: descriptions["lance"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Light Crossbow",
        translation: "Balestra Leggera",
        type: "Simple Ranged Weapons",
        damage: "1d8 Piercing",
        properties: ["Ammunition (Range 80/320); Bolt", "Loading", "Two-Handed"],
        mastery: "Slow",
        weight: "5 lb.",
        cost: "25 GP",
        description: descriptions["light_crossbow"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Light Hammer",
        translation: "Martello Leggero",
        type: "Simple Melee Weapons",
        damage: "1d4 Bludgeoning",
        properties: ["Light", "Thrown (Range 20/60)"],
        mastery: "Nick",
        weight: "2 lb.",
        cost: "2 GP",
        description: descriptions["light_hammer"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Longbow",
        translation: "Arco Lungo",
        type: "Martial Ranged Weapons",
        damage: "1d8 Piercing",
        properties: ["Ammunition (Range 150/600); Arrow", "Heavy", "Two-Handed"],
        mastery: "Slow",
        weight: "2 lb.",
        cost: "50 GP",
        description: descriptions["longbow"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Longsword",
        translation: "Spada Lunga",
        type: "Martial Melee Weapons",
        damage: "1d8 Slashing",
        properties: ["Versatile (1d10)"],
        mastery: "Sap",
        weight: "3 lb.",
        cost: "15 GP",
        description: descriptions["longsword"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Mace",
        translation: "Mazza",
        type: "Simple Melee Weapons",
        damage: "1d6 Bludgeoning",
        properties: [],
        mastery: "Sap",
        weight: "4 lb.",
        cost: "5 GP",
        description: descriptions["mace"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Maul",
        translation: "Maglio",
        type: "Martial Melee Weapons",
        damage: "2d6 Bludgeoning",
        properties: ["Heavy", "Two-Handed"],
        mastery: "Topple",
        weight: "10 lb.",
        cost: "10 GP",
        description: descriptions["maul"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Morningstar",
        translation: "Morning Star",
        type: "Martial Melee Weapons",
        damage: "1d8 Piercing",
        properties: [],
        mastery: "Sap",
        weight: "4 lb.",
        cost: "15 GP",
        description: descriptions["morningstar"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Musket",
        translation: "Moschetto?",
        type: "Martial Ranged Weapons",
        damage: "1d12 Piercing",
        properties: ["Ammunition (Range 40/120); Bullet", "Loading", "Two-Handed"],
        mastery: "Slow",
        weight: "10 lb.",
        cost: "500 GP",
        description: descriptions["musket"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Pike",
        translation: "Picca",
        type: "Martial Melee Weapons",
        damage: "1d10 Piercing",
        properties: ["Heavy", "Reach", "Two-Handed"],
        mastery: "Push",
        weight: "18 lb.",
        cost: "5 GP",
        description: descriptions["pike"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Pistol",
        translation: "Pistola?",
        type: "Martial Ranged Weapons",
        damage: "1d10 Piercing",
        properties: ["Ammunition (Range 30/90); Bullet", "Loading"],
        mastery: "Vex",
        weight: "3 lb.",
        cost: "250 GP",
        description: descriptions["pistol"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Quarterstaff",
        translation: "Bastone Ferrato",
        type: "Simple Melee Weapons",
        damage: "1d6 Bludgeoning",
        properties: ["Versatile (1d8)"],
        mastery: "Topple",
        weight: "4 lb.",
        cost: "2 SP",
        description: descriptions["quarterstaff"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Rapier",
        translation: "Stocco",
        type: "Martial Melee Weapons",
        damage: "1d8 Piercing",
        properties: ["Finesse"],
        mastery: "Vex",
        weight: "2 lb.",
        cost: "25 GP",
        description: descriptions["rapier"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Scimitar",
        translation: "Scimitarra",
        type: "Martial Melee Weapons",
        damage: "1d6 Slashing",
        properties: ["Finesse", "Light"],
        mastery: "Nick",
        weight: "3 lb.",
        cost: "25 GP",
        description: descriptions["scimitar"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Shortbow",
        translation: "Arco Corto",
        type: "Simple Ranged Weapons",
        damage: "1d6 Piercing",
        properties: ["Ammunition (Range 80/320); Arrow", "Two-Handed"],
        mastery: "Vex",
        weight: "2 lb.",
        cost: "25 GP",
        description: descriptions["shortbow"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Shortsword",
        translation: "Spada Corta",
        type: "Martial Melee Weapons",
        damage: "1d6 Piercing",
        properties: ["Finesse", "Light"],
        mastery: "Vex",
        weight: "2 lb.",
        cost: "10 GP",
        description: descriptions["shortsword"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Sickle",
        translation: "Falcetto",
        type: "Simple Melee Weapons",
        damage: "1d4 Slashing",
        properties: ["Light"],
        mastery: "Nick",
        weight: "2 lb.",
        cost: "1 GP",
        description: descriptions["sickle"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Sling",
        translation: "Fionda",
        type: "Simple Ranged Weapons",
        damage: "1d4 Bludgeoning",
        properties: ["Ammunition (Range 30/120); Bullet"],
        mastery: "Slow",
        weight: "",
        cost: "1 SP",
        description: descriptions["sling"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Spear",
        translation: "Lancia",
        type: "Simple Melee Weapons",
        damage: "1d6 Piercing",
        properties: ["Thrown (Range 20/60)", "Versatile (1d8)"],
        mastery: "Sap",
        weight: "3 lb.",
        cost: "1 GP",
        description: descriptions["spear"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Trident",
        translation: "Tridente",
        type: "Martial Melee Weapons",
        damage: "1d8 Piercing",
        properties: ["Thrown (Range 20/60)", "Versatile (1d10)"],
        mastery: "Topple",
        weight: "4 lb.",
        cost: "5 GP",
        description: descriptions["trident"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Warhammer",
        translation: "Martello da Guerra",
        type: "Martial Melee Weapons",
        damage: "1d8 Bludgeoning",
        properties: ["Versatile (1d10)"],
        mastery: "Push",
        weight: "5 lb.",
        cost: "15 GP",
        description: descriptions["warhammer"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "War Pick",
        translation: "Piccone da Guerra",
        type: "Martial Melee Weapons",
        damage: "1d8 Piercing",
        properties: ["Versatile (1d10)"],
        mastery: "Sap",
        weight: "2 lb.",
        cost: "5 GP",
        description: descriptions["war_pick"] || { it: "Descrizione non trovata", en: "Description not found" },
    },
    {
        term: "Whip",
        translation: "Frusta",
        type: "Martial Melee Weapons",
        damage: "1d4 Slashing",
        properties: ["Finesse", "Reach"],
        mastery: "Slow",
        weight: "3 lb.",
        cost: "2 GP",
        description: descriptions["whip"] || { it: "Descrizione non trovata", en: "Description not found" },
    },

    // END WEAPONS

    // START ARMORS

    {
        term: "Breastplate",
        translation: "Corazza di Piastre",
        type: "Medium Armor",
        armor_class: "14 + Dex modifier (max 2)",
        strenght: "",
        stealth: "",
        weight: "20 lb.",
        cost: "400 GP",
        description: descriptions["breastplate"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Chain Mail",
        translation: "Cotta di Maglia",
        type: "Heavy Armor",
        armor_class: "16",
        strenght: "Str 13",
        stealth: "Disadvantage",
        weight: "55 lb.",
        cost: "75 GP",
        description: descriptions["chain mail"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Chain Shirt",
        translation: "Giaco di Maglia",
        type: "Medium Armor",
        armor_class: "13 + Dex modifier (max 2)",
        strenght: "",
        stealth: "",
        weight: "20 lb.",
        cost: "50 GP",
        description: descriptions["chain shirt"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Half Plate Armor",
        translation: "Mezza Armatura",
        type: "Medium Armor",
        armor_class: "15 + Dex modifier (max 2)",
        strenght: "",
        stealth: "Disadvantage",
        weight: "40 lb.",
        cost: "750 GP",
        description: descriptions["half plate armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Hide Armor",
        translation: "Pelle",
        type: "Medium Armor",
        armor_class: "12 + Dex modifier (max 2)",
        strenght: "",
        stealth: "",
        weight: "12 lb.",
        cost: "10 GP",
        description: descriptions["hide armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Leather Armor",
        translation: "Cuoio",
        type: "Light Armor",
        armor_class: "11 + Dex modifier",
        strenght: "",
        stealth: "",
        weight: "10 lb.",
        cost: "10 GP",
        description: descriptions["leather armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Padded Armor",
        translation: "Imbottita",
        type: "Light Armor",
        armor_class: "11 + Dex modifier",
        strenght: "",
        stealth: "Disadvantage",
        weight: "8 lb.",
        cost: "5 GP",
        description: descriptions["padded armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Plate Armor",
        translation: "Armatura Completa",
        type: "Heavy Armor",
        armor_class: "18",
        strenght: "Str 15",
        stealth: "Disadvantage",
        weight: "65 lb.",
        cost: "1,500 GP",
        description: descriptions["plate armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Ring Mail",
        translation: "Corazza ad Anelli",
        type: "Heavy Armor",
        armor_class: "14",
        strenght: "",
        stealth: "Disadvantage",
        weight: "40 lb.",
        cost: "30 GP",
        description: descriptions["ring mail"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Scale Mail",
        translation: "Corazza di Scaglie",
        type: "Medium Armor",
        armor_class: "14 + Dex modifier (max 2)",
        strenght: "",
        stealth: "Disadvantage",
        weight: "45 lb.",
        cost: "50 GP",
        description: descriptions["scale mail"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Shield",
        translation: "Scudo",
        type: "Shield",
        armor_class: "+2",
        strenght: "",
        stealth: "",
        weight: "6 lb.",
        cost: "10 GP",
        description: descriptions["shield"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Splint Armor",
        translation: "Corazza a Strisce",
        type: "Heavy Armor",
        armor_class: "17",
        strenght: "Str 15",
        stealth: "Disadvantage",
        weight: "60 lb.",
        cost: "200 GP",
        description: descriptions["splint armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Studded Leather Armor",
        translation: "Cuoio Borchiato",
        type: "Light Armor",
        armor_class: "12 + Dex modifier",
        strenght: "",
        stealth: "",
        weight: "13 lb.",
        cost: "45 GP",
        description: descriptions["studded leather armor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },

    // END ARMORS

    // START TOOLS

        // START ARTISAN'S TOOLS

    {
        term: "Alchemist's Supplies",
        translation: "Scorte da Alchimista",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Intelligence",
        utilize: "Identify a substance (DC 15), or start a fire (DC 15)",
        craft: ["Acid", "Alchemist's Fire", "Component Pouch", "Oil", "Paper", "Perfume"],
        weight: "8 lb.",
        cost: "50 GP",
        description: descriptions["alchemist's supplies"] || { it: "Oggetti utilizzati per preparare sostanze chimiche, identificate o avviare un fuoco.", en: "Items used to prepare substances or start a fire." }
    },
    {
        term: "Brewer's Supplies",
        translation: "Scorte da Mescitore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Intelligence",
        utilize: "Detect poisoned drink (DC 15), or identify alcohol (DC 10)",
        craft: ["Antitoxin"],
        weight: "9 lb.",
        cost: "20 GP",
        description: descriptions["brewer's supplies"] || { it: "Oggetti usati per rilevare bevande avvelenate o identificare alcol.", en: "Items used to detect poisoned drinks or identify alcohol." }
    },
    {
        term: "Calligrapher's Supplies",
        translation: "Scorte da Calligrafo",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Write text with impressive flourishes that guard against forgery (DC 15)",
        craft: ["Ink", "Spell Scroll"],
        weight: "5 lb.",
        cost: "15 GP",
        description: descriptions["calligrapher's supplies"] || { it: "Strumenti utilizzati per scrivere testi con decorazioni che proteggono contro la falsificazione.", en: "Items used to write text with flourishes that guard against forgery." }
    },
    {
        term: "Carpenter's Tools",
        translation: "Strumenti da Falegname",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Strength",
        utilize: "Seal or pry open a door or container (DC 20)",
        craft: ["Club", "Greatclub", "Quarterstaff", "Barrel", "Chest", "Ladder", "Pole", "Portable Ram", "Torch"],
        weight: "6 lb.",
        cost: "8 GP",
        description: descriptions["carpenter's tools"] || { it: "Strumenti per sigillare o forzare porte o contenitori.", en: "Tools used to seal or pry open doors or containers." }
    },
    {
        term: "Cartographer's Tools",
        translation: "Strumenti da Cartografo",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Wisdom",
        utilize: "Draft a map of a small area (DC 15)",
        craft: ["Map"],
        weight: "6 lb.",
        cost: "15 GP",
        description: descriptions["cartographer's tools"] || { it: "Strumenti utilizzati per tracciare mappe di piccole aree.", en: "Tools used to draft maps of small areas." }
    },
    {
        term: "Cobbler's Tools",
        translation: "Strumenti da Calzolaio",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Modify footwear to give Advantage on the next wearer's next Dexterity (Acrobatics) check (DC 10)",
        craft: ["Climber's Kit"],
        weight: "5 lb.",
        cost: "5 GP",
        description: descriptions["cobbler's tools"] || { it: "Strumenti per modificare le calzature per dare vantaggio su una prova di destrezza.", en: "Tools used to modify footwear for Advantage on Dexterity checks." }
    },
    {
        term: "Cook's Utensils",
        translation: "Utensili da Cuoco",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Wisdom",
        utilize: "Improve food's flavor (DC 10), or detect spoiled or poisoned food (DC 15)",
        craft: ["Rations"],
        weight: "8 lb.",
        cost: "1 GP",
        description: descriptions["cook's utensils"] || { it: "Utensili per migliorare il sapore del cibo o rilevare cibo avariato o avvelenato.", en: "Utensils used to improve food flavor or detect spoiled/poisoned food." }
    },
    {
        term: "Glassblower's Tools",
        translation: "Strumenti da Soffiatore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Intelligence",
        utilize: "Discern what a glass object held in the past 24 hours (DC 15)",
        craft: ["Glass Bottle", "Magnifying Glass", "Spyglass", "Vial"],
        weight: "5 lb.",
        cost: "30 GP",
        description: descriptions["glassblower's tools"] || { it: "Strumenti per discernere gli oggetti di vetro usati negli ultimi 24 ore.", en: "Tools used to discern glass objects held in the past 24 hours." }
    },
    {
        term: "Jeweler's Tools",
        translation: "Strumenti da Gioielliere",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Intelligence",
        utilize: "Discern a gem's value (DC 15)",
        craft: ["Arcane Focus", "Holy Symbol"],
        weight: "2 lb.",
        cost: "25 GP",
        description: descriptions["jeweler's tools"] || { it: "Strumenti per discernere il valore di una gemma.", en: "Tools used to discern a gem's value." }
    },
    {
        term: "Leatherworker's Tools",
        translation: "Strumenti da Conciatore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Add a design to a leather item (DC 10)",
        craft: ["Sling", "Whip", "Hide Armor", "Leather Armor", "Studded Leather Armor", "Backpack", "Crossbow Bolt Case", "Map or Scroll Case", "Parchment", "Pouch", "Quiver", "Waterskin"],
        weight: "5 lb.",
        cost: "5 GP",
        description: descriptions["leatherworker's tools"] || { it: "Strumenti utilizzati per aggiungere un design a un oggetto di pelle.", en: "Tools used to add a design to a leather item." }
    },
    {
        term: "Mason's Tools",
        translation: "Strumenti da Costruttore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Strength",
        utilize: "Chisel a symbol or hole in stone (DC 10)",
        craft: ["Block and Tackle"],
        weight: "8 lb.",
        cost: "10 GP",
        description: descriptions["mason's tools"] || { it: "Strumenti per scolpire simboli o fori nella pietra.", en: "Tools used to chisel symbols or holes in stone." }
    },
    {
        term: "Painter's Supplies",
        translation: "Strumenti da Pittore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Wisdom",
        utilize: "Paint a recognizable image of something you've seen (DC 10)",
        craft: ["Druidic Focus", "Holy Symbol"],
        weight: "5 lb.",
        cost: "10 GP",
        description: descriptions["painter's supplies"] || { it: "Strumenti per dipingere immagini riconoscibili di qualcosa che hai visto.", en: "Tools used to paint recognizable images of something you've seen." }
    },
    {
        term: "Potter's Tools",
        translation: "Strumenti da Vasaio",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Intelligence",
        utilize: "Discern what a ceramic object held in the past 24 hours (DC 15)",
        craft: ["Jug", "Lamp"],
        weight: "3 lb.",
        cost: "10 GP",
        description: descriptions["potter's tools"] || { it: "Strumenti per discernere oggetti ceramici usati negli ultimi 24 ore.", en: "Tools used to discern ceramic objects held in the past 24 hours." }
    },
    {
        term: "Smith's Tools",
        translation: "Strumenti da Fabbro",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Strength",
        utilize: "Pry open a door or container (DC 20)",
        craft: ["Any Melee weapon (except Club, Greatclub, Quarterstaff, and Whip)", "Medium armor (except Hide)", "Heavy armor", "Ball Bearings", "Bucket", "Caltrops", "Chain", "Crowbar", "Firearm Bullets", "Grappling Hook", "Iron Pot", "Iron Spikes", "Sling Bullets"],
        weight: "8 lb.",
        cost: "20 GP",
        description: descriptions["smith's tools"] || { it: "Strumenti da fabbro usati per forzare porte o contenitori.", en: "Tools used by blacksmiths to pry open doors or containers." }
    },
    {
        term: "Tinker's Tools",
        translation: "Strumenti da Inventore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20)",
        craft: ["Musket", "Pistol", "Bell", "Bullseye Lantern", "Flask", "Hooded Lantern", "Hunting Trap", "Lock", "Manacles", "Mirror", "Shovel", "Signal Whistle", "Tinderbox"],
        weight: "10 lb.",
        cost: "50 GP",
        description: descriptions["tinker's tools"] || { it: "Strumenti per assemblare oggetti di scarto che si rompono in 1 minuto.", en: "Tools used to assemble tiny items from scrap that fall apart in 1 minute." }
    },
    {
        term: "Weaver's Tools",
        translation: "Strumenti da Tessitore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10)",
        craft: ["Padded Armor", "Basket", "Bedroll", "Blanket", "Fine Clothes", "Net", "Robe", "Rope", "Sack", "String", "Tent", "Traveler's Clothes"],
        weight: "5 lb.",
        cost: "1 GP",
        description: descriptions["weaver's tools"] || { it: "Strumenti per riparare strappi nei vestiti o cucire piccoli disegni.", en: "Tools used to mend tears in clothing or sew tiny designs." }
    },
    {
        term: "Woodcarver's Tools",
        translation: "Strumenti da Intagliatore",
        type: "Tool",
        subtype: "Artisan's",
        ability: "Dexterity",
        utilize: "Carve a pattern in wood (DC 10)",
        craft: ["Club", "Greatclub", "Quarterstaff", "Ranged weapons (except Pistol, Musket, and Sling)", "Arcane Focus", "Arrows", "Bolts", "Druidic Focus", "Ink Pen", "Needles"],
        weight: "5 lb.",
        cost: "1 GP",
        description: descriptions["woodcarver's tools"] || { it: "Strumenti per intagliare un disegno nel legno.", en: "Tools used to carve a pattern in wood." }
    },
    
    // END ARTISAN'S TOOLS

    // START OTHER TOOLS

    {
        term: "Disguise Kit",
        translation: "Trucchi per il Camuffamento",
        type: "Tool",
        subtype: "Other",
        ability: "Charisma",
        utilize: "Apply makeup (DC 10)",
        craft: ["Costume"],
        weight: "3 lb.",
        cost: "25 GP",
        description: descriptions["disguise kit"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Forgery Kit",
        translation: "Arnesi da Falsario",
        type: "Tool",
        subtype: "Other",
        ability: "Dexterity",
        utilize: "Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20)",
        craft: [],
        weight: "5 lb.",
        cost: "15 GP",
        description: descriptions["forgery kit"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Gaming Set",
        translation: "Giochi",
        type: "Tool",
        subtype: "Other",
        ability: "Wisdom",
        utilize: "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
        variants: ["Dice (1 SP)", "Dragonchess (1 GP)", "Playing Cards (5 SP)", "Three Dragon Ante (1 GP)"],
        weight: "",
        cost: "Varies",
        description: descriptions["gaming set"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Herbalism Kit",
        translation: "Borsa da Erborista",
        type: "Tool",
        subtype: "Other",
        ability: "Intelligence",
        utilize: "Identify a plant (DC 10)",
        craft: ["Antitoxin", "Candle", "Healer's Kit", "Potion of Healing"],
        weight: "3 lb.",
        cost: "5 GP",
        description: descriptions["herbalism kit"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Musical Instrument",
        translation: "Strumento Musicale",
        type: "Tool",
        subtype: "Other",
        ability: "Charisma",
        utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
        variants: ["Bagpipes (30 GP, 6 lb.)", "Drum (6GP, 3 lb.)", "Dulcimer (25 GP, 10 lb.)", "Flute (2 GP, 1 lb.)", "Horn (3 GP, 2 lb.)", "Lute (35 GP, 2 lb.)", "Lyre (30 GP, 2 lb.)", "Pan Flute (12 GP, 2 lb.)", "Shawm (2 GP, 1 lb.)", "Viol (30 GP, 1 lb.)"],
        weight: "Varies",
        cost: "Varies",
        description: descriptions["musical instrument"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Navigator's Tools",
        translation: "Arnesi da Navigatore",
        type: "Tool",
        subtype: "Other",
        ability: "Wisdom",
        utilize: "Plot a course (DC 10), or determine position by stargazing (DC 15)",
        craft: [],
        weight: "2 lb.",
        cost: "25 GP",
        description: descriptions["navigator's tools"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Poisoner's Kit",
        translation: "Sostanze da Avvelenatore",
        type: "Tool",
        subtype: "Other",
        ability: "Intelligence",
        utilize: "Detect a poisoned object (DC 10)",
        craft: ["Basic Poison"],
        weight: "2 lb.",
        cost: "50 GP",
        description: descriptions["poisoner's kit"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Thieves' Tools",
        translation: "Arnesi da Scasso",
        type: "Tool",
        subtype: "Other",
        ability: "Dexterity",
        utilize: "Pick a lock (DC 15), or disarm a trap (DC 15)",
        craft: ["Antitoxin", "Candle", "Healer's Kit", "Potion of Healing"],
        weight: "1 lb.",
        cost: "25 GP",
        description: descriptions["thieves' tools"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    
        // END OTHER TOOLS
        
        // START ADVENTURING GEAR

        {
            term: "Acid",
            translation: "Acido (fiala)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "25 GP",
            description: descriptions["acid"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Alchemist's Fire",
            translation: "Fuoco dell'Alchimista (ampolla)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "50 GP",
            description: descriptions["alchemist's fire"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Ammunition",
            translation: "Munizioni",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "Varies",
            cost: "Varies",
            description: descriptions["ammunition"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Antitoxin",
            translation: "Antitossina (fiala)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "50 GP",
            description: descriptions["antitoxin"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Arcane Focus",
            translation: "Focus Arcano",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "10 GP",
            description: descriptions["arcane focus"] || { it: "Oggetto che aiuta a concentrare e potenziare le magie arcane", en: "An item used to focus and amplify arcane magic" }
        },
        {
            term: "Backpack",
            translation: "Zaino",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "2 GP",
            description: descriptions["backpack"] || { it: "Zaino per trasportare oggetti", en: "A bag used to carry items" }
        },
        {
            term: "Ball Bearings",
            translation: "Sfere Metalliche (sacchetto da 1,000)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "1 GP",
            description: descriptions["ball bearings"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Barrel",
            translation: "Barile",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "70 lb.",
            cost: "2 GP",
            description: descriptions["barrel"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Basket",
            translation: "Canestro",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "4 SP",
            description: descriptions["basket"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Bedroll",
            translation: "Giaciglio",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "7 lb.",
            cost: "1 GP",
            description: descriptions["bedroll"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Bell",
            translation: "Campanella",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "1 GP",
            description: descriptions["bell"] || { it: "Campanella che emette un suono", en: "A bell that makes a sound" }
        },
        {
            term: "Blanket",
            translation: "Coperta",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "3 lb.",
            cost: "5 SP",
            description: descriptions["blanket"] || { it: "Coperta per proteggersi dal freddo", en: "A blanket used for warmth" }
        },
        {
            term: "Block and Tackle",
            translation: "Carrucola e Paranco",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "1 GP",
            description: descriptions["block and tackle"] || { it: "Sistema di pulleys per sollevare oggetti pesanti", en: "A system of pulleys used to lift heavy objects" }
        },
        {
            term: "Book",
            translation: "Libro",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "25 GP",
            description: descriptions["book"] || { it: "Libro contenente conoscenza o storie", en: "A book containing knowledge or stories" }
        },
        {
            term: "Bottle, Glass",
            translation: "Bottiglia di Vetro",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "2 GP",
            description: descriptions["bottle, glass"] || { it: "Contenitore per liquidi", en: "A container for liquids" }
        },
        {
            term: "Bucket",
            translation: "Secchio",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "5 CP",
            description: descriptions["bucket"] || { it: "Secchio per raccogliere o trasportare oggetti", en: "A container for carrying or collecting items" }
        },
        {
            term: "Burglar's Pack",
            translation: "Zaino del Ladro?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "42 lb.",
            cost: "16 GP",
            description: descriptions["burglar's pack"] || { it: "Zaino per ladri, contenente attrezzi utili per scassinare", en: "A pack designed for thieves, containing tools for burglary" }
        },
        {
            term: "Caltrops",
            translation: "Triboli (saccetto da 20)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "1 GP",
            description: descriptions["caltrops"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Candle",
            translation: "Candela",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "1 CP",
            description: descriptions["candle"] || { it: "Candela per illuminare", en: "A candle used for lighting" }
        },
        {
            term: "Case, Crossbow Bolt",
            translation: "Custodia per Quadrelli da Balestra",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "1 GP",
            description: descriptions["case, crossbow bolt"] || { it: "Custodia per contenere dardi da balestra", en: "A case used to hold crossbow bolts" }
        },
        {
            term: "Case, Map or Scroll",
            translation: "Custodia per Mappe o Pergamene",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "1 GP",
            description: descriptions["case, map or scroll"] || { it: "Custodia per contenere una mappa o pergamena", en: "A case used to hold a map or scroll" }
        },
        {
            term: "Chain",
            translation: "Catena (3 metri)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "10 lb.",
            cost: "5 GP",
            description: descriptions["chain"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Chest",
            translation: "Forziere",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "25 lb.",
            cost: "5 GP",
            description: descriptions["chest"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Climber's Kit",
            translation: "Attrezzi da Scalatore",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "12 lb.",
            cost: "25 GP",
            description: descriptions["climber's kit"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Clothes, Fine",
            translation: "Abito, Pregiato",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "6 lb.",
            cost: "15 GP",
            description: descriptions["clothes, fine"] || { it: "Abiti di alta qualità per occasioni formali", en: "High-quality clothes for formal occasions" }
        },
        {
            term: "Clothes, Traveler's",
            translation: "Abito, da Viaggiatore",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "4 lb.",
            cost: "2 GP",
            description: descriptions["clothes, traveler's"] || { it: "Abiti comodi e pratici per i viaggi", en: "Comfortable and practical clothes for traveling" }
        },
        {
            term: "Component Pouch",
            translation: "Borsa per Componenti",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "25 GP",
            description: descriptions["component pouch"] || { it: "Borsa contenente componenti magici per incantesimi", en: "A pouch containing magical components for spellcasting" }
        },
        {
            term: "Costume",
            translation: "Abito, Costume",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "4 lb.",
            cost: "5 GP",
            description: descriptions["costume"] || { it: "Abbigliamento per travestirsi o per eventi", en: "Clothing for disguise or events" }
        },
        {
            term: "Crowbar",
            translation: "Piede di Porco",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "2 GP",
            description: descriptions["crowbar"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Diplomat's Pack",
            translation: "Zaino del Diplomatico?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "39 lb.",
            cost: "39 GP",
            description: descriptions["diplomat's pack"] || { it: "Zaino contenente attrezzi utili per attività diplomatiche", en: "A pack containing tools useful for diplomatic endeavors" }
        },
        {
            term: "Druidic Focus",
            translation: "Focus Druidico",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "Varies",
            cost: "Varies",
            description: descriptions["druidic focus"] || { it: "Oggetto usato per concentrare la magia druidica", en: "An item used to focus druidic magic" }
        },
        {
            term: "Dungeoneer's Pack",
            translation: "Zaino del Sotterraneo?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "55 lb.",
            cost: "12 GP",
            description: descriptions["dungeoneer's pack"] || { it: "Zaino contenente attrezzi per esplorazioni sotterranee", en: "A pack containing tools for dungeon exploration" }
        },
        {
            term: "Entertainer's Pack",
            translation: "Zaino dell'Intrattenitore?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "58,5 lb.",
            cost: "40 GP",
            description: descriptions["entertainer's pack"] || { it: "Zaino contenente attrezzi per attività di intrattenimento", en: "A pack containing tools for entertainment activities" }
        },
        {
            term: "Explorer's Pack",
            translation: "Zaino dell'Esploratore?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "55 lb.",
            cost: "10 GP",
            description: descriptions["explorer's pack"] || { it: "Zaino contenente attrezzi per l'esplorazione", en: "A pack containing tools for exploration" }
        },
        {
            term: "Flask",
            translation: "Ampolla o Boccale",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "2 CP",
            description: descriptions["flask"] || { it: "Contenitore per liquidi", en: "A container for liquids" }
        },
        {
            term: "Grappling Hook",
            translation: "Rampino",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "4 lb.",
            cost: "2 GP",
            description: descriptions["grappling hook"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Healer's Kit",
            translation: "Borsa del Guaritore",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "3 lb.",
            cost: "5 GP",
            description: descriptions["healer's kit"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Holy Symbol",
            translation: "Simbolo Sacro",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "Varies",
            cost: "Varies",
            description: descriptions["holy symbol"] || { it: "Simbolo sacro usato da chierici e paladini per il loro culto", en: "A holy symbol used by clerics and paladins for their faith" }
        },
        {
            term: "Holy Water",
            translation: "Acqua Santa (ampolla)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "25 GP",
            description: descriptions["holy water"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Hunting Trap",
            translation: "Tagliola",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "25 lb.",
            cost: "5 GP",
            description: descriptions["hunting trap"] || { it: "Trappola usata per catturare animali", en: "A trap used to catch animals" }
        },
        {
            term: "Ink",
            translation: "Inchiostro (boccetta da 30 grammi)",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "10 GP",
            description: descriptions["ink"] || { it: "Inchiostro per scrivere", en: "Ink used for writing" }
        },
        {
            term: "Ink Pen",
            translation: "Pennino",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "2 CP",
            description: descriptions["ink pen"] || { it: "Penna usata con inchiostro per scrivere", en: "A pen used with ink for writing" }
        },
        {
            term: "Jug",
            translation: "Brocca o Caraffa",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "4 lb.",
            cost: "2 CP",
            description: descriptions["jug"] || { it: "Brocca usata per contenere liquidi", en: "A jug used to hold liquids" }
        },
        {
            term: "Ladder",
            translation: "Scala a Pioli (3 metri)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "25 lb.",
            cost: "1 SP",
            description: descriptions["ladder"] || { it: "Strumento usato per salire su superfici alte", en: "A tool used to climb to higher surfaces" }
        },
        {
            term: "Lamp",
            translation: "Lampada",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "5 SP",
            description: descriptions["lamp"] || { it: "Lampada a olio per illuminare", en: "An oil lamp for lighting" }
        },
        {
            term: "Lantern, Bullseye",
            translation: "Lanterna a Lente Sporgente",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "10 GP",
            description: descriptions["lantern, bullseye"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Lantern, Hooded",
            translation: "Lanterna Schermabile",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "5 GP",
            description: descriptions["lantern, hooded"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Lock",
            translation: "Serratura",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "10 GP",
            description: descriptions["lock"] || { it: "Lucchetto per chiudere porte o bauli", en: "A lock used to secure doors or chests" }
        },
        {
            term: "Magnifying Glass",
            translation: "Lente d'Ingrandimento",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "100 GP",
            description: descriptions["magnifying glass"] || { it: "Lente per ingrandire oggetti piccoli", en: "A lens used to magnify small objects" }
        },
        {
            term: "Manacles",
            translation: "Manette",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "6 lb.",
            cost: "2 GP",
            description: descriptions["manacles"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Map",
            translation: "Mappa",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "1 GP",
            description: descriptions["map"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Mirror",
            translation: "Specchio Piccolo di Metallo",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "0.5 lb.",
            cost: "5 GP",
            description: descriptions["mirror"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Net",
            translation: "Rete",
            type: "Weapon",
            subtype: "Adventuring Gear",
            weight: "3 lb.",
            cost: "1 GP",
            description: descriptions["net"] || { it: "Rete usata per intrappolare le creature", en: "A net used to entangle creatures" }
        },
        {
            term: "Oil",
            translation: "Olio (ampolla)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "1 SP",
            description: descriptions["oil"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Paper",
            translation: "Carta (un foglio)",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "2 SP",
            description: descriptions["paper"] || { it: "Foglio di carta per scrivere o disegnare", en: "A sheet of paper for writing or drawing" }
        },
        {
            term: "Parchment",
            translation: "Pergamena (un foglio)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "1 SP",
            description: descriptions["parchment"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Perfume",
            translation: "Profumo (fiala)",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "5 GP",
            description: descriptions["perfume"] || { it: "Profumo per uso personale", en: "A fragrance used for personal scent" }
        },
        {
            term: "Poison, Basic",
            translation: "Veleno, base (fiala)",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "100 GP",
            description: descriptions["poison, basic"] || { it: "Veleno comune, può essere usato per avvelenare armi o cibo", en: "A basic poison, can be used to poison weapons or food" }
        },
        {
            term: "Pole",
            translation: "Asta (3 metri)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "7 lb.",
            cost: "5 CP",
            description: descriptions["pole"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Pot, Iron",
            translation: "Vaso di Ferro",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "10 lb.",
            cost: "2 GP",
            description: descriptions["pot, iron"] || { it: "Pentola di ferro per cucinare", en: "An iron pot used for cooking" }
        },
        {
            term: "Potion of Healing",
            translation: "Pozione di Guarigione",
            type: "Consumable",
            subtype: "Potion",
            weight: "0,5 lb.",
            cost: "50 GP",
            description: descriptions["potion of healing"] || { it: "Pozione che guarisce ferite", en: "A potion that heals wounds" }
        },
        {
            term: "Pouch",
            translation: "Borsa",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "5 SP",
            description: descriptions["pouch"] || { it: "Piccola borsa per contenere oggetti", en: "A small bag used to hold items" }
        },
        {
            term: "Priest's Pack",
            translation: "Zaino del Prete?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "29 lb.",
            cost: "33 GP",
            description: descriptions["priest's pack"] || { it: "Zaino contenente attrezzi religiosi", en: "A pack containing religious tools" }
        },
        {
            term: "Quiver",
            translation: "Faretra",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "1 GP",
            description: descriptions["quiver"] || { it: "Contenitore per frecce", en: "A container used to hold arrows" }
        },
        {
            term: "Ram, Portable",
            translation: "Ariete Portatile",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "35 lb.",
            cost: "4 GP",
            description: descriptions["ram, portable"] || { it: "Attrezzo usato per sfondare porte o muri", en: "A tool used to break down doors or walls" }
        },
        {
            term: "Rations",
            translation: "Razioni (1 giornata)",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "2 lb.",
            cost: "5 SP",
            description: descriptions["rations"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Robe",
            translation: "Veste",
            type: "Adventuring Gear",
            subtype: "Clothing",
            weight: "4 lb.",
            cost: "1 GP",
            description: descriptions["robe"] || { it: "Abito lungo, generalmente usato da maghi e stregoni", en: "A long garment, usually worn by wizards and sorcerers" }
        },
        {
            term: "Rope",
            translation: "Corda",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "1 GP",
            description: descriptions["rope"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Sack",
            translation: "Sacco",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "0,5 lb.",
            cost: "1 CP",
            description: descriptions["sack"] || { it: "Sacco usato per trasportare oggetti", en: "A bag used to carry items" }
        },
        {
            term: "Scholar's Pack",
            translation: "Zaino dello Studioso?",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "22 lb.",
            cost: "40 GP",
            description: descriptions["scholar's pack"] || { it: "Zaino contenente attrezzi utili per gli studiosi", en: "A pack containing tools useful for scholars" }
        },
        {
            term: "Shovel",
            translation: "Vanga o Badile",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb.",
            cost: "2 GP",
            description: descriptions["shovel"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Signal Whistle",
            translation: "Fischietto da Richiamo",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "5 CP",
            description: descriptions["signal whistle"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Spell Scroll (Cantrip)",
            translation: "Pergamena Magica (Cantrip)",
            type: "Consumable",
            subtype: "Scroll",
            weight: "—",
            cost: "30 GP",
            description: descriptions["spell scroll (cantrip)"] || { it: "Pergamena che contiene un cantrip, può essere usata per lanciare l'incantesimo", en: "A scroll containing a cantrip, can be used to cast the spell" }
        },
        {
            term: "Spell Scroll (Level 1)",
            translation: "Pergamena Magica (Livello 1)",
            type: "Consumable",
            subtype: "Scroll",
            weight: "—",
            cost: "50 GP",
            description: descriptions["spell scroll (level 1)"] || { it: "Pergamena che contiene un incantesimo di livello 1, può essere usata per lanciare l'incantesimo", en: "A scroll containing a 1st-level spell, can be used to cast the spell" }
        },
        {
            term: "Spikes, Iron",
            translation: "Spuntoni, Ferro (10)",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "5 lb.",
            cost: "1 GP",
            description: descriptions["spikes, iron"] || { it: "Chiodi di ferro usati per bloccare passaggi o creare ostacoli", en: "Iron nails used to block passages or create obstacles" }
        },
        {
            term: "Spyglass",
            translation: "Cannocchiale",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "1 lb.",
            cost: "100 GP",
            description: descriptions["spyglass"] || { it: "Strumento usato per osservare oggetti a lunga distanza", en: "A tool used to view objects at a great distance" }
        },
        {
            term: "String",
            translation: "Filo?",
            type: "Adventuring Gear",
            subtype: "Tool",
            weight: "—",
            cost: "1 SP",
            description: descriptions["string"] || { it: "Filo utilizzato per varie funzioni", en: "String used for various purposes" }
        },
        {
            term: "Tent",
            translation: "Tenda, per Due Persone",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "20 lb.",
            cost: "2 GP",
            description: descriptions["tent"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Tinderbox",
            translation: "Acciarino e Pietra Focaia",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "5 SP",
            description: descriptions["tinderbox"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Torch",
            translation: "Torcia",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "1 lb.",
            cost: "1 CP",
            description: descriptions["torch"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Vial",
            translation: "Fiala",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "—",
            cost: "1 GP",
            description: descriptions["vial"] || { it: "Descrizione non trovata", en: "Description not found" }
        },
        {
            term: "Waterskin",
            translation: "Otre",
            type: "Tool",
            subtype: "Adventuring Gear",
            weight: "5 lb. (full)",
            cost: "2 SP",
            description: descriptions["waterskin"] || { it: "Descrizione non trovata", en: "Description not found" }
        },

        // END ADVENTURING GEAR

    // END TOOLS
];
// INSTRUMENTS TRANSLATIONS

const instrumentTranslations = {
    "Bagpipes (30 GP, 6 lb.)": "Cornamusa (30 MO, 3 kg)",
    "Drum (6GP, 3 lb.)": "Tamburo (6 MO, 1,5 kg)",
    "Dulcimer (25 GP, 10 lb.)": "Dulcimer (25 MO, 5 kg)",
    "Flute (2 GP, 1 lb.)": "Flauto (2 MO, 0,5 kg)",
    "Horn (3 GP, 2 lb.)": "Corno (3 MO, 1 kg)",
    "Lute (35 GP, 2 lb.)": "Liuto (35 GP, 1 kg)",
    "Lyre (30 GP, 2 lb.)": "Lira (30 GP, 1 kg)",
    "Pan Flute (12 GP, 2 lb.)": "Flauto di Pan (12 MO, 1 kg)",
    "Shawm (2 GP, 1 lb.)": "Ciaramella (2 MO, 0,5 kg)",
    "Viol (30 GP, 1 lb.)": "Viola (30 MO, 0,5 kg)",
  };
  const gamesTranslations = {
    "Dice (1 SP)": "Dadi (1 MA)",
    "Dragonchess (1 GP)": "Scacchi dei Draghi (1 MO)",
    "Playing Cards (5 SP)": "Mazzo di Carte (5 MA)",
    "Three Dragon Ante (1 GP)": "Tre Draghi al Buio (1 MO)",
  };
export default items;