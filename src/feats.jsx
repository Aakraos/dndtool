import descriptions from "./descriptions";

const feats = [
    {
        term: "Ability Score Improvement",
        translation: "Miglioramento Punteggio Caratteristica",
        category: "General",
        description: descriptions["ability score improvement"]
    },
    {
        term: "Actor",
        translation: "Attore",
        category: "General",
        description: descriptions["actor"]
    },
    {
        term: "Alert",
        translation: "Allerta",
        category: "Origin",
        description: descriptions["alert"]
    },
    {
        term: "Archery",
        translation: "Tiro",
        category: "Fighting Style",
        description: descriptions["archery"]
    },
    {
        term: "Athlete",
        translation: "Atleta",
        category: "General",
        description: descriptions["athlete"]
    },
    {
        term: "Blind Fighting",
        translation: "Combattere alla Cieca",
        category: "Fighting Style",
        description: descriptions["blind fighting"]
    },
    {
        term: "Boon of Combat Prowess",
        translation: "Dono della Maestria in Combattimento",
        category: "Epic Boon",
        description: descriptions["boon of combat prowess"]
    },
    {
        term: "Boon of Dimensional Travel",
        translation: "Dono del Viaggio Dimensionale",
        category: "Epic Boon",
        description: descriptions["boon of dimensional travel"]
    },
    {
        term: "Boon of Energy Resistance",
        translation: "Dono della Resistenza all'Energia",
        category: "Epic Boon",
        description: descriptions["boon of energy resistance"]
    },
    {
        term: "Boon of Fate",
        translation: "Dono del Fato",
        category: "Epic Boon",
        description: descriptions["boon of fate"]
    },
    {
        term: "Boon of Fortitude",
        translation: "Dono della Tempra",
        category: "Epic Boon",
        description: descriptions["boon of fortitude"]
    },
    {
        term: "Boon of Irresistible offense",
        translation: "Dono dell'Offensiva Irresistibile",
        category: "Epic Boon",
        description: descriptions["boon of irresistible offense"]
    },
    {
        term: "Boon of Recovery",
        translation: "Dono del Recupero",
        category: "Epic Boon",
        description: descriptions["boon of recovery"]
    },
    {
        term: "Boon of Skill",
        translation: "Dono della Competenza nelle Abilità",
        category: "Epic Boon",
        description: descriptions["boon of skill"]
    },
    {
        term: "Boon of Speed",
        translation: "Dono della Velocità",
        category: "Epic Boon",
        description: descriptions["boon of speed"]
    },
    {
        term: "Boon of Spell recall",
        translation: "Dono del Richiamo degli Incantesimi",
        category: "Epic Boon",
        description: descriptions["boon of spell recall"]
    },
    {
        term: "Boon of the Night Spirit",
        translation: "Dono dello Spirito Notturno",
        category: "Epic Boon",
        description: descriptions["boon of the night spirit"]
    },
    {
        term: "Boon of Truesight",
        translation: "Dono della Vista Pura",
        category: "Epic Boon",
        description: descriptions["boon of truesight"]
    },
    {
        term: "Charger",
        translation: "Carica",
        category: "General",
        description: descriptions["charger"]
    },
    {
        term: "Chef",
        translation: "Cuoco",
        category: "General",
        description: descriptions["chef"]
    },
    {
        term: "Crafter",
        translation: "Costruttore?",
        category: "Origin",
        description: descriptions["crafter"]
    },
    {
        term: "Crossbow Expert",
        translation: "Esperto di Balestre",
        category: "General",
        description: descriptions["crossbow expert"]
    },
    {
        term: "Crusher",
        translation: "Martello Vivente",
        category: "General",
        description: descriptions["crusher"]
    },
    {
        term: "Defense",
        translation: "Difesa",
        category: "Fighting Style",
        description: descriptions["defense"]
    },
    {
        term: "Defensive Duelist",
        translation: "Duellante Difensivo",
        category: "General",
        description: descriptions["defensive duelist"]
    },
    {
        term: "Dual Wielder",
        translation: "Combattente a Due Armi",
        category: "General",
        description: descriptions["dual wielder"]
    },
    {
        term: "Dueling",
        translation: "Duellare",
        category: "Fighting Style",
        description: descriptions["dueling"]
    },
    {
        term: "Durable",
        translation: "Tenace",
        category: "General",
        description: descriptions["durable"]
    },
    {
        term: "Elemental Adept",
        translation: "Adepto Elementale",
        category: "General",
        description: descriptions["elemental adept"]
    },
    {
        term: "Fey-Touched",
        translation: "Contaminazione Fatata",
        category: "General",
        description: descriptions["fey-touched"]
    },
    {
        term: "Grappler",
        translation: "Lottatore",
        category: "General",
        description: descriptions["grappler"]
    },
    {
        term: "Great Weapon Fighting",
        translation: "Combattimento con le Armi Possenti",
        category: "Fighting Style",
        description: descriptions["great weapon fighting"]
    },
    {
        term: "Great Weapon Master",
        translation: "Maestro d'Armi Possenti'",
        category: "General",
        description: descriptions["great weapon master"]
    },
    {
        term: "Healer",
        translation: "Guaritore",
        category: "Origin",
        description: descriptions["healer"]
    },
    {
        term: "Heavily Armored",
        translation: "Corazze Pesanti",
        category: "General",
        description: descriptions["heavily armored"]
    },
    {
        term: "Heavy Armor Master",
        translation: "Maestro delle Armature Pesanti",
        category: "General",
        description: descriptions["heavy armor master"]
    },
    {
        term: "Inspiring Leader",
        translation: "Condottiero Ispiratore",
        category: "General",
        description: descriptions["inspiring leader"]
    },
    {
        term: "Interception",
        translation: "Intercettazione",
        category: "Fighting Style",
        description: descriptions["interception"]
    },
    {
        term: "Keen Mind",
        translation: "Mente Acuta",
        category: "General",
        description: descriptions["keen mind"]
    },
    {
        term: "Lightly Armored",
        translation: "Corazze Leggere",
        category: "General",
        description: descriptions["lightly armored"]
    },
    {
        term: "Lucky",
        translation: "Fortunato",
        category: "Origin",
        description: descriptions["lucky"]
    },
    {
        term: "Mage Slayer",
        translation: "Sterminatore di Maghi",
        category: "General",
        description: descriptions["mage slayer"]
    },
    {
        term: "Magic Initiate",
        translation: "Iniziato alla Magia",
        category: "Origin",
        description: descriptions["magic initiate"]
    },
    {
        term: "Martial Weapon Training",
        translation: "Addestramento con Armi Marziali",
        category: "General",
        description: descriptions["martial weapon training"]
    },
    {
        term: "Medium Armor Master",
        translation: "Maestro delle Armature Medie",
        category: "General",
        description: descriptions["medium armor master"]
    },
    {
        term: "Moderately Armored",
        translation: "Corazze Medie",
        category: "General",
        description: descriptions["moderately armored"]
    },
    {
        term: "Mounted Combatant",
        translation: "Combattere in Sella",
        category: "General",
        description: descriptions["mounted combatant"]
    },
    {
        term: "Musician",
        translation: "Musicista",
        category: "Origin",
        description: descriptions["musician"]
    },
    {
        term: "Observant",
        translation: "Osservatore",
        category: "General",
        description: descriptions["observant"]
    },
    {
        term: "Piercer",
        translation: "Stile Penetrante",
        category: "General",
        description: descriptions["piercer"]
    },
    {
        term: "Poisoner",
        translation: "Maestria dei Veleni",
        category: "General",
        description: descriptions["poisoner"]
    },
    {
        term: "Polearm Master",
        translation: "Maestro delle Armi su Asta",
        category: "General",
        description: descriptions["polearm master"]
    },
    {
        term: "Protection",
        translation: "Protezione",
        category: "Fighting Style",
        description: descriptions["protection"]
    },
    {
        term: "Resilient",
        translation: "Resiliente",
        category: "General",
        description: descriptions["resilient"]
    },
    {
        term: "Ritual Caster",
        translation: "Incantatore Rituale",
        category: "General",
        description: descriptions["ritual caster"]
    },
    {
        term: "Savage Attacker",
        translation: "Aggressore Selvaggio",
        category: "Origin",
        description: descriptions["savage attacker"]
    },
    {
        term: "Sentinel",
        translation: "Sentinella",
        category: "General",
        description: descriptions["sentinel"]
    },
    {
        term: "Shadow-Touched",
        translation: "Contaminazione Ombrosa",
        category: "General",
        description: descriptions["shadow-touched"]
    },
    {
        term: "Sharpshooter",
        translation: "Tiratore Scelto",
        category: "General",
        description: descriptions["sharpshooter"]
    },
    {
        term: "Shield Master",
        translation: "Maestro degli Scudi",
        category: "General",
        description: descriptions["shield master"]
    },
    {
        term: "Skilled",
        translation: "Abile",
        category: "Origin",
        description: descriptions["skilled"]
    },
    {
        term: "Skill Expert",
        translation: "Abilità Impeccabile",
        category: "General",
        description: descriptions["skill expert"]
    },
    {
        term: "Skulker",
        translation: "Appostato",
        category: "General",
        description: descriptions["skulker"]
    },
    {
        term: "Slasher",
        translation: "Bisturi da Battaglia",
        category: "General",
        description: descriptions["slasher"]
    },
    {
        term: "Speedy",
        translation: "Mobilità",
        category: "General",
        description: descriptions["speedy"]
    },
    {
        term: "Spell Sniper",
        translation: "Cecchino Magico",
        category: "General",
        description: descriptions["spell sniper"]
    },
    {
        term: "Tavern Brawler",
        translation: "Lottatore da Taverna",
        category: "Origin",
        description: descriptions["tavern brawler"]
    },
    {
        term: "Telekinetic",
        translation: "Telecinesi",
        category: "General",
        description: descriptions["telekinetic"]
    },
    {
        term: "Telepathic",
        translation: "Telepatia",
        category: "General",
        description: descriptions["telepathic"]
    },
    {
        term: "Thrown Weapon Fighting",
        translation: "Combattere con Armi da Lancio",
        category: "Fighting Style",
        description: descriptions["thrown weapon fighting"]
    },
    {
        term: "Tough",
        translation: "Robusto",
        category: "Origin",
        description: descriptions["tough"]
    },
    {
        term: "Two-Weapon Fighting",
        translation: "Combattere con Due Armi",
        category: "Fighting Style",
        description: descriptions["two-weapon fighting"]
    },
    {
        term: "Unarmed Fighting",
        translation: "Combattere Disarmato",
        category: "Fighting Style",
        description: descriptions["unarmed fighting"]
    },
    {
        term: "War Caster",
        translation: "Incantatore da Guerra",
        category: "General",
        description: descriptions["war caster"]
    },
    {
        term: "Weapon Master",
        translation: "Maestro d'Armi?",
        category: "General",
        description: descriptions["weapon master"]
    }
];

export default feats;