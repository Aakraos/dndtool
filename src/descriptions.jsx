import './App.css';

const descriptions = {
    
     // INIZIO REGOLE

    "heavily obscured": {
      it: "Un'area pesantemente oscurata come una notte senza luna, una nebbia densa o una foresta fitta blocca completamente la vista. Una creatura in un'area oscurata è effettivamente accecata...",
      en: "A heavily obscured area—such as darkness, opaque fog, or dense foliage—blocks vision entirely. A creature in a heavily obscured area effectively suffers from the blinded condition...",
    },
    "cover": {
      it: "Pareti, alberi, creature e altri ostacoli possono fornire copertura durante il combattimento, rendendo un bersaglio più difficile da colpire. Un bersaglio può beneficiare della copertura solo quando un attacco o altro effetto origina dall’altro lato della copertura. Ci sono tre gradi di copertura. Se un bersaglio si trova dietro più fonti di copertura, applica solo la forma di copertura migliore. Per esempio, se un bersaglio si trova dietro una creatura che dà metà copertura e un tronco d’albero che dà tre quarti di copertura, il bersaglio ha tre quarti di copertura. \n \nUn bersaglio con mezza copertura ha un bonus di +2 alla CA e ai tiri salvezza su Destrezza. Un bersaglio ha metà copertura se un ostacolo blocca almeno metà del suo corpo. L’ostacolo potrebbe essere un muro basso, un grosso pezzo di mobilio, un albero dal tronco stretto o una creatura, che sia amica o nemica. \n \nUn bersaglio con tre quarti di copertura ha un bonus di +5 alla CA e ai tiri salvezza su Destrezza. Un bersaglio ha tre quarti di copertura se è coperto almeno per tre quarti da un ostacolo. L’ostacolo può essere una grata, una feritoia o un albero dal tronco largo. \n \nUn bersaglio con copertura totale non può essere bersaglio di un attacco o incantesimo, sebbene alcuni incantesimi possano colpire comunque un simile bersaglio includendolo nella loro area di effetto. Un bersaglio ha copertura totale se è completamente nascosto da un ostacolo.",
      en: "Walls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm. A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. There are three degrees of cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren't added together. For example, if a target is behind a creature that gives half cover and a tree trunk that gives three-quarters cover, the target has three-quarters cover. \n \nA target with half cover has a +2 bonus to AC and Dexterity saving throws. A target has half cover if an obstacle blocks at least half of its body. The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend. \n \nA target with three-quarters cover has a +5 bonus to AC and Dexterity saving throws. A target has three-quarters cover if about three-quarters of it is covered by an obstacle. The obstacle might be a portcullis, an arrow slit, or a thick tree trunk. \n \nA target with total cover can't be targeted directly by an attack or a spell, although some spells can reach such a target by including it in an area of effect. A target has total cover if it is completely concealed by an obstacle.",
    },
     
     //FINE REGOLE

     // INIZIO OGGETTI

    "dagger": {
      it: "Un'arma corta",
      en: "A short weapon",
    },
    "scimitar": {
      it: "Un'arma curva",
      en: "A curved weapon",
    },
    "parchment": {
      it: "Un foglio di carta",
      en: "A sheet of paper",
    },
    
     // FINE OGGETTI

     // INIZIO INCANTESIMI

    "aid": {
      it: `
        <em>{school} di {level}° livello ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> {components}
        <strong>Durata:</strong> {duration}<br>
        Questo incantesimo rafforza il vigore e la determinazione degli alleati. L'incantatore sceglie fino a tre creature entro gittata. Il massimo dei punti ferita e i punti ferita attuali di ogni bersaglio aumentano di 5 per la durata dell'incantesimo.
        <strong>Ai Livelli Superiori:</strong> Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3° livello o superiore, i punti ferita di un bersaglio aumentano di altri 5 punti per ogni slot di livello superiore al 2°.<br>
        <em>Fonte: D&D 5e</em>
      `,
        en: `
        <em>Level {level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.
        <strong>Using a Higher-Level Spell Slot:</strong> Each target's Hit Points increase by 5 for each spell slot level above 2.<br>
        <em>Source: {source}</em>
      `
    },
    "alarm": {
      it: `
        <em>{school} di {level}° livello ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> {components}
        <strong>Durata:</strong> {duration}<br>
        Questo incantesimo rafforza il vigore e la determinazione degli alleati. L'incantatore sceglie fino a tre creature entro gittata. Il massimo dei punti ferita e i punti ferita attuali di ogni bersaglio aumentano di 5 per la durata dell'incantesimo.
        <strong>Ai Livelli Superiori:</strong> Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3° livello o superiore, i punti ferita di un bersaglio aumentano di altri 5 punti per ogni slot di livello superiore al 2°.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <em>Level {level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> V, S, M (a bell)
        <strong>Duration:</strong> 8 hours<br><br>
        You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is audible or mental:
        <strong>Audible Alarm</strong> The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.
        <strong>Mental Alarm</strong> You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you're asleep.<br>
        <em>Source: D&D 2024</em>
      `
      },

      // FINE INCANTESIMI
    };
  
  export default descriptions;