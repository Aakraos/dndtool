import descriptions from "./descriptions";

const feats = [
    {
        term: "Ability Score Improvement",
        translation: "Miglioramento Punteggio Caratteristica",
        category: "General",
        description: descriptions["ability score improvement"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Actor",
        translation: "Attore",
        category: "General",
        description: descriptions["actor"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Alert",
        translation: "Allerta",
        category: "Origin",
        description: descriptions["alert"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Archery",
        translation: "Tiro",
        category: "Fighting Style",
        description: descriptions["archery"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Athlete",
        translation: "Atleta",
        category: "General",
        description: descriptions["athlete"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Blind Fighting",
        translation: "Combattere alla Cieca",
        category: "Fighting Style",
        description: descriptions["blind fighting"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Combat Prowess",
        translation: "Dono della Maestria in Combattimento",
        category: "Epic Boon",
        description: descriptions["boon of combat prowess"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Dimensional Travel",
        translation: "Dono del Viaggio Dimensionale",
        category: "Epic Boon",
        description: descriptions["boon of dimensional travel"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Energy Resistance",
        translation: "Dono della Resistenza all'Energia",
        category: "Epic Boon",
        description: descriptions["boon of energy resistance"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Fate",
        translation: "Dono del Fato",
        category: "Epic Boon",
        description: descriptions["boon of fate"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Fortitude",
        translation: "Dono della Tempra",
        category: "Epic Boon",
        description: descriptions["boon of fortitude"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Irresistible offense",
        translation: "Dono dell'Offensiva Irresistibile",
        category: "Epic Boon",
        description: descriptions["boon of irresistible offense"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Recovery",
        translation: "Dono del Recupero",
        category: "Epic Boon",
        description: descriptions["boon of recovery"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Skill",
        translation: "Dono della Competenza nelle Abilità",
        category: "Epic Boon",
        description: descriptions["boon of skill"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Speed",
        translation: "Dono della Velocità",
        category: "Epic Boon",
        description: descriptions["boon of speed"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Spell recall",
        translation: "Dono del Richiamo degli Incantesimi",
        category: "Epic Boon",
        description: descriptions["boon of spell recall"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of the Night Spirit",
        translation: "Dono dello Spirito Notturno",
        category: "Epic Boon",
        description: descriptions["boon of the night spirit"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Boon of Truesight",
        translation: "Dono della Vista Pura",
        category: "Epic Boon",
        description: descriptions["boon of truesight"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Charger",
        translation: "Carica",
        category: "General",
        description: descriptions["charger"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Chef",
        translation: "Cuoco",
        category: "General",
        description: descriptions["chef"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Crafter",
        translation: "Costruttore?",
        category: "Origin",
        description: descriptions["crafter"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Crossbow Expert",
        translation: "Esperto di Balestre",
        category: "General",
        description: descriptions["crossbow expert"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Crusher",
        translation: "Martello Vivente",
        category: "General",
        description: descriptions["crusher"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Defense",
        translation: "Difesa",
        category: "Fighting Style",
        description: descriptions["defense"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Defensive Duelist",
        translation: "Duellante Difensivo",
        category: "General",
        description: descriptions["defensive duelist"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Dual Wielder",
        translation: "Combattente a Due Armi",
        category: "General",
        description: descriptions["dual wielder"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Dueling",
        translation: "Duellare",
        category: "Fighting Style",
        description: descriptions["dueling"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Durable",
        translation: "Tenace",
        category: "General",
        description: descriptions["durable"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Elemental Adept",
        translation: "Adepto Elementale",
        category: "General",
        description: descriptions["elemental adept"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Fey-Touched",
        translation: "Contaminazione Fatata",
        category: "General",
        description: descriptions["fey-touched"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Grappler",
        translation: "Lottatore",
        category: "General",
        description: descriptions["grappler"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Great Weapon Fighting",
        translation: "Combattimento con le Armi Possenti",
        category: "Fighting Style",
        description: descriptions["great weapon fighting"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Great Weapon Master",
        translation: "Maestro d'Armi Possenti'",
        category: "General",
        description: descriptions["great weapon master"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Healer",
        translation: "Guaritore",
        category: "Origin",
        description: descriptions["healer"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Heavily Armored",
        translation: "Corazze Pesanti",
        category: "General",
        description: descriptions["heavily armored"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Heavy Armor Master",
        translation: "Maestro delle Armature Pesanti",
        category: "General",
        description: descriptions["heavy armor master"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Inspiring Leader",
        translation: "Condottiero Ispiratore",
        category: "General",
        description: descriptions["inspiring leader"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Interception",
        translation: "Intercettazione",
        category: "Fighting Style",
        description: descriptions["interception"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Keen Mind",
        translation: "Mente Acuta",
        category: "General",
        description: descriptions["keen mind"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Lightly Armored",
        translation: "Corazze Leggere",
        category: "General",
        description: descriptions["lightly armored"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Lucky",
        translation: "Fortunato",
        category: "Origin",
        description: descriptions["lucky"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Mage Slayer",
        translation: "Sterminatore di Maghi",
        category: "General",
        description: descriptions["mage slayer"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Magic Initiate",
        translation: "Iniziato alla Magia",
        category: "Origin",
        description: descriptions["magic initiate"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Martial Weapon Training",
        translation: "Addestramento con Armi Marziali",
        category: "General",
        description: descriptions["martial weapon training"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Medium Armor Master",
        translation: "Maestro delle Armature Medie",
        category: "General",
        description: descriptions["medium armor master"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Moderately Armored",
        translation: "Corazze Medie",
        category: "General",
        description: descriptions["moderately armored"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Mounted Combatant",
        translation: "Combattere in Sella",
        category: "General",
        description: descriptions["mounted combatant"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Musician",
        translation: "Musicista",
        category: "Origin",
        description: descriptions["musician"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Observant",
        translation: "Osservatore",
        category: "General",
        description: descriptions["observant"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Piercer",
        translation: "Stile Penetrante",
        category: "General",
        description: descriptions["piercer"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Poisoner",
        translation: "Maestria dei Veleni",
        category: "General",
        description: descriptions["poisoner"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Polearm Master",
        translation: "Maestro delle Armi su Asta",
        category: "General",
        description: descriptions["polearm master"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Protection",
        translation: "Protezione",
        category: "Fighting Style",
        description: descriptions["protection"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Resilient",
        translation: "Resiliente",
        category: "General",
        description: descriptions["resilient"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Ritual Caster",
        translation: "Incantatore Rituale",
        category: "General",
        description: descriptions["ritual caster"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Savage Attacker",
        translation: "Aggressore Selvaggio",
        category: "Origin",
        description: descriptions["savage attacker"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Sentinel",
        translation: "Sentinella",
        category: "General",
        description: descriptions["sentinel"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Shadow-Touched",
        translation: "Contaminazione Ombrosa",
        category: "General",
        description: descriptions["shadow-touched"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Sharpshooter",
        translation: "Tiratore Scelto",
        category: "General",
        description: descriptions["sharpshooter"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Shield Master",
        translation: "Maestro degli Scudi",
        category: "General",
        description: descriptions["shield master"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Skilled",
        translation: "Abile",
        category: "Origin",
        description: descriptions["skilled"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Skill Expert",
        translation: "Abilità Impeccabile",
        category: "General",
        description: descriptions["skill expert"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Skulker",
        translation: "Appostato",
        category: "General",
        description: descriptions["skulker"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Slasher",
        translation: "Bisturi da Battaglia",
        category: "General",
        description: descriptions["slasher"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Speedy",
        translation: "Mobilità",
        category: "General",
        description: descriptions["speedy"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Spell Sniper",
        translation: "Cecchino Magico",
        category: "General",
        description: descriptions["spell sniper"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Tavern Brawler",
        translation: "Lottatore da Taverna",
        category: "Origin",
        description: descriptions["tavern brawler"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Telekinetic",
        translation: "Telecinesi",
        category: "General",
        description: descriptions["telekinetic"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Telepathic",
        translation: "Telepatia",
        category: "General",
        description: descriptions["telepathic"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Thrown Weapon Fighting",
        translation: "Combattere con Armi da Lancio",
        category: "Fighting Style",
        description: descriptions["thrown weapon fighting"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Tough",
        translation: "Robusto",
        category: "Origin",
        description: descriptions["tough"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Two-Weapon Fighting",
        translation: "Combattere con Due Armi",
        category: "Fighting Style",
        description: descriptions["two-weapon fighting"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Unarmed Fighting",
        translation: "Combattere Disarmato",
        category: "Fighting Style",
        description: descriptions["unarmed fighting"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "War Caster",
        translation: "Incantatore da Guerra",
        category: "General",
        description: descriptions["war caster"] || { it: "Descrizione non trovata", en: "Description not found" }
    },
    {
        term: "Weapon Master",
        translation: "Maestro d'Armi?",
        category: "General",
        description: descriptions["weapon master"] || { it: "Descrizione non trovata", en: "Description not found" }
    }
];

export default feats;