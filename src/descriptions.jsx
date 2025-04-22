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
        // INIZIO OGGETTI NORMALI

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
    
        // FINE OGGETTI NORMALI

        // INIZIO OGGETTI MAGICI

        // FINE OGGETTI MAGICI

     // FINE OGGETTI

     // INIZIO INCANTESIMI

   "acid splash": {
    it: `
      <strong><h3>{term}</h3></strong>
      <em>{level} di {school} ({classes})</em>
      <strong>Tempo di Lancio:</strong> {castingtime}
      <strong>Gittata:</strong> {range}
      <strong>Componenti:</strong> V, S, M (una sottile striscia di tessuto bianco)
      <strong>Durata:</strong> {duration}<br>
      You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.
      <strong>Cantrip Upgrade.</strong> The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).<br>
      <em>Fonte: D&D 5e</em>
    `,
      en: `
      <strong><h3>{term}</h3></strong>
      <em>{school} {level} ({classes})</em>
      <strong>Casting Time:</strong> {castingtime}
      <strong>Range:</strong> {range}
      <strong>Components:</strong> {components}
      <strong>Duration:</strong> {duration}<br>
      You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.
      <strong>Cantrip Upgrade.</strong> The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).<br>
      <em>Source: {source}</em>
    `
  },
    "aid": {
      it: `
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (una sottile striscia di tessuto bianco)
        <strong>Durata:</strong> {duration}<br>
        Questo incantesimo rafforza il vigore e la determinazione degli alleati. L'incantatore sceglie fino a tre creature entro gittata. Il massimo dei punti ferita e i punti ferita attuali di ogni bersaglio aumentano di 5 per la durata dell'incantesimo.
        <strong>Ai Livelli Superiori:</strong> Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3° livello o superiore, i punti ferita di un bersaglio aumentano di altri 5 punti per ogni slot di livello superiore al 2°.<br>
        <em>Fonte: D&D 5e</em>
      `,
        en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
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
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (una campanella e un pezzo di pregiato filo d’argento)
        <strong>Durata:</strong> {duration}<br>
        Predisponi un allarme contro intrusioni indesiderate. Scegli una porta, una finestra o un’area a gittata che non sia più grande di un cubo di 6 metri di spigolo. Fino al termine dell’incantesimo, sarai avvertito da un allarme ogni volta che una creatura di taglia Minuscola o superiore entri in contatto o acceda all’area protetta. Quando lanci l’incantesimo, puoi indicare delle creature che non faranno scattare l’allarme. Scegli anche se l’allarme è udibile o solo mentale.        <strong>Audible Alarm</strong> The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.
        <strong>Un allarme mentale</strong>, qualora ti trovi entro 1,5 chilometri dall’area protetta, ti avverte con un rumore nella tua mente. Il rumore è in grado di svegliarti se stai dormendo.
        <strong>Un allarme udibile</strong> produce il suono di una campanella per 10 secondi, udibile entro 18 metri.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> V, S, M (a bell and a silver wire)
        <strong>Duration:</strong> {duration}<br>
        You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is audible or mental:
        <strong>Audible Alarm.</strong> The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.
        <strong>Mental Alarm.</strong> You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you're asleep.<br>
        <em>Source: D&D 2024</em>
      `
      },
    "alter self": {
      it: `
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> {components}
        <strong>Durata:</strong> {duration}<br>
        L'incantatore assume una forma diversa, scegliendo al momento del lancio dell'incantesimo una delle opzioni seguenti, i cui effetti permangono per la durata dell'incantesimo. Finché l'incantesimo permane, l'incantatore può porre fine a un'opzione con un'azione per ottenere i benefici di un'opzione diversa.
        <strong>Adattamento Acquatico.</strong> L'incantatore adatta il suo corpo a un ambiente acquatico: sviluppa le branchie e una membrana tra le dita. Può respirare sott'acqua e ottiene una velocità di nuotare pari alla sua velocità base sul terreno.
        <strong>Armi Naturali.</strong> L'incantatore sviluppa artigli, zanne, spine, corna o un'arma naturale diversa a sua scelta. I suoi colpi senz'armi infliggono 1d6 danni contundenti, perforanti o taglienti, come appropriato per l'arma naturale scelta, e l'incantatore è competente nei colpi senz'armi. Infine, l'arma naturale è magica e l'incantatore ottiene un bonus di +1 ai tiri per colpire e ai tiri per i danni che effettua quando la usa.
        <strong>Cambiare Aspetto.</strong> L'incantatore altera il suo aspetto. Decide come apparire e definisce altezza, peso, lineamenti facciali, suono della voce, lunghezza dei capelli, carnagione e tratti distintivi, se lo desidera. Può apparire come un membro di un'altra razza, ma nessuna delle sue statistiche cambia di conseguenza. Non può apparire come una creatura di taglia diversa dalla propria e la sua forma base resta la stessa; per esempio, se è bipede, non può usare questo incantesimo per diventare quadrupede. In qualsiasi momento entro la durata dell'incantesimo può usare la sua azione per cambiare di nuovo aspetto in questo modo.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        You alter your physical form. Choose one of the following options. Its effects last for the duration, during which you can take a Magic action to replace the option you chose with a different one.
        <strong>Aquatic Adaptation.</strong> You sprout gills and grow webs between your fingers. You can breathe underwater and gain a Swim Speed equal to your Speed.
        <strong>Change Appearance.</strong> You alter your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and other distinguishing characteristics. You can make yourself appear as a member of another species, though none of your statistics change. You can't appear as a creature of a different size, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. For the duration, you can take a Magic action to change your appearance in this way again.
        <strong>Natural Weapons.</strong> You grow claws (Slashing), fangs (Piercing), horns (Piercing), or hooves (Bludgeoning). When you use your Unarmed Strike to deal damage with that new growth, it deals 1d6 damage of the type in parentheses instead of dealing the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls rather than using Strength.<br>
        <em>Source: D&D 2024</em>
      `
      },
    "animal friendship": {
      it: `
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (un po’ di cibo)
        <strong>Durata:</strong> {duration}<br>
        Questo incantesimo ti permette di convincere una bestia che non vuoi arrecargli danno. Scegli una bestia a gittata che puoi vedere. Questa deve vederti e udirti. Se l’Intelligenza della bestia è 4 o più, l’incantesimo fallisce. Altrimenti, la bestia deve superare un tiro salvezza su Saggezza o restare affascinata da te per la durata dell’incantesimo. Se tu o uno dei tuoi compagni danneggiate il bersaglio, l’incantesimo ha termine.
        <strong>Ai Livelli Superiori</strong> Quando lanci questo incantesimo usando uno slot incantesimo di 2° livello o più alto, puoi agire su di una bestia aggiuntiva per ogni livello dello slot sopra il 1°.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends.
        <strong>Using a Higher-Level Spell Slot.</strong> You can target one additional Beast for each spell slot level above 1.<br>
        <em>Source: D&D 2024</em>
      `
      },
      "animal messenger": 
      {
      it: `
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (un po’ di cibo)
        <strong>Durata:</strong> {duration}<br>
        Tramite questo incantesimo, usi un animale per consegnare un messaggio. Scegli una bestia Minuscola a gittata e che puoi vedere, come uno scoiattolo, una ghiandaia o un pipistrello. Specifichi un luogo, che devi aver visitato in passato, e un destinatario che corrisponda a una descrizione generica, come “un uomo o una donna che vesta l’uniforme della guardia cittadina” o “un nano dai capelli rossi che indossa un cappello a punta”. Pronuncia anche un messaggio di massimo venticinque parole. La bestia bersaglio viaggia per la durata dell’incantesimo verso il luogo specificato,coprendo circa 75 chilometri in 24 ore per un messaggero volante, o 40 chilometri per gli altri animali. Quando il messaggero arriva a destinazione, consegna il messaggio alla creatura da te descritta, replicando il suono della tua voce. Il messaggero parla solo a una creatura corrispondente alla descrizione da te fornita. Se il messaggero non riesce a raggiungere la destinazione prima del termine dell’incantesimo, il messaggio è perduto, e la bestia ritorna verso il punto in cui hai lanciato l’incantesimo.
        <strong>Ai Livelli Superiori</strong> Quando lanci questo incantesimo usando uno slot incantesimo di 3° livello o più alto, la durata dell’incantesimo aumenta di 48 ore per ogni livello dello slot sopra il 2°.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>  
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        A Tiny Beast of your choice that you can see within range must succeed on a Charisma saving throw, or it attempts to deliver a message for you (if the target's Challenge Rating isn't 0, it automatically succeeds). You specify a location you have visited and a recipient who matches a general description, such as "a person dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat." You also communicate a message of up to twenty-five words. The Beast travels for the duration toward the specified location, covering about 25 miles per 24 hours or 50 miles if the Beast can fly.
        When the Beast arrives, it delivers your message to the creature that you described, mimicking your communication. If the Beast doesn't reach its destination before the spell ends, the message is lost, and the Beast returns to where you cast the spell.
        <strong>Using a Higher-Level Spell Slot.</strong> The spell's duration increases by 48 hours for each spell slot level above 2.<br>
        <em>Source: D&D 2024</em>
      `
      },
      "animal shapes": 
      {
      it: `
        <strong><h3>{term}</h3></strong>  
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (un po’ di cibo)
        <strong>Durata:</strong> {duration}<br>
        Trasformi magicamente altre creature in bestie. Scegli un qualsiasi numero di creature consenzienti a gittata e che puoi vedere. Trasformi ciascun bersaglio nella forma di una bestia di taglia Grande o minore con un grado di sfida 4 o inferiore. Nei turni successivi, puoi usare la tua azione per trasformare le creature soggette in nuove forme.
        La trasformazione permane per ciascun bersaglio per la durata dell’incantesimo, o finché quel bersaglio scende a 0 punti ferita o muore. Puoi scegliere una forma diversa per ciascun bersaglio. Le statistiche di gioco del bersaglio sono rimpiazzate dalle statistiche della bestia scelta, a eccezione dell’allineamento e dei punteggi di Intelligenza, Saggezza e Carisma che restano quelli del bersaglio. Il bersaglio assume i punti ferita della sua nuova forma e, quando ritorna alla sua forma normale, ritorna al numero di punti ferita che aveva prima di trasformarsi. Se si ritrasforma perché è sceso a 0 punti ferita, il danno in eccesso viene applicato alla forma originale. Purché il danno in eccesso non riduca la forma normale della creatura a 0 punti ferita, essa non è priva di sensi. La creatura è limitata nelle azioni che può svolgere dalla natura della sua nuova forma, e non può parlare né lanciare incantesimi.
        L’equipaggiamento del bersaglio si fonde nella nuova forma. Il bersaglio non può attivare, impugnare o in altro modo beneficiare del suo equipaggiamento.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        Choose any number of willing creatures that you can see within range. Each target shape-shifts into a Large or smaller Beast of your choice that has a Challenge Rating of 4 or lower. You can choose a different form for each target. On later turns, you can take a Magic action to transform the targets again.
        A target's game statistics are replaced by the chosen Beast's statistics, but the target retains its creature type; Hit Points; Hit Point Dice; alignment; ability to communicate; and Intelligence, Wisdom, and Charisma scores. The target's actions are limited by the Beast form's anatomy, and it can't cast spells. The target's equipment melds into the new form, and the target can't use any of that equipment while in that form.
        The target gains a number of Temporary Hit Points equal to the Beast form's Hit Points. The transformation lasts for the duration for each target, until the target has no Temporary Hit Points, or until the target leaves the form as a Bonus Action.<br>
        <em>Source: D&D 2024</em>
      `
      },
      "animate dead": 
      {
      it: `
        <strong><h3>{term}</h3></strong>  
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (una goccia di sangue, un pezzo di carne e un pizzico di polvere d’ossa)
        <strong>Durata:</strong> {duration}<br>
        Questo incantesimo crea un servitore non morto. Scegli una pila di ossa o un cadavere di un umanoide Medio o Piccolo a gittata. Il tuo incantesimo imbeve il bersaglio di una nefanda parvenza di vita, rianimandolo come creatura non morta. Il bersaglio diventa uno scheletro se scegli le ossa o uno zombi se scegli un cadavere. Durante ciascun tuo turno, puoi usare un’azione bonus per comandare mentalmente qualsiasi creatura da te creata con questo incantesimo che si trovi entro 18 metri da te (se controlli più creature, puoi comandarle tutte o solo alcune di loro allo stesso momento, inviando lo stesso comando a tutte). Decidi quale azione la creatura svolgerà e dove si muoverà durante il suo prossimo turno, oppure inviale un comando generale, come quello di stare di guardia a una particolare stanza o corridoio. Se non invii alcun comando, la creatura si limita a difendersi dalle creature ostili. Una volta ricevuto un ordine, la creatura continuerà a svolgerlo fino al suo compimento.
        La creatura è sotto il tuo controllo per 24 ore, dopodiché smetterà di eseguire i comandi che le impartirai. Per mantenere il controllo sulla creatura per altre 24 ore, devi lanciare di nuovo questo incantesimo su di essa prima del termine dell’attuale periodo di 24 ore. Questo impiego dell’incantesimo riafferma il tuo controllo su di un massimo di quattro creature che hai animato con questo incantesimo, piuttosto che animarne una nuova.
        <strong>Ai Livelli Superiori</strong> Quando lanci questo incantesimo usando uno slot incantesimo di 4° livello o più alto, animi o riaffermi il controllo su due creature non morte in più per ogni livello dello slot sopra il 3°. Ciascuna di queste creature deve provenire da un cadavere o pila di ossa differenti.<br>
        <em>Fonte: D&D 5e</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        Choose a pile of bones or a corpse of a Medium or Small Humanoid within range. The target becomes an Undead creature: a Skeleton if you chose bones or a Zombie if you chose a corpse.
        On each of your turns, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move on its next turn, or you can issue a general command, such as to guard a chamber or corridor. If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. Once given an order, the creature continues to follow it until its task is complete.
        The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell rather than animating a new creature.
        <strong>Using a Higher-Level Spell Slot.</strong> You animate or reassert control over two additional Undead creatures for each spell slot level above 3. Each of the creatures must come from a different corpse or pile of bones.<br>
        <em class="source">Source: D&D 2024</em>
      `
      },
      "animate objects": 
      {
      it: `
        <strong><h3>{term}</h3></strong>
        <em>{school} di {level} ({classes})</em>
        <strong>Tempo di Lancio:</strong> {castingtime}
        <strong>Gittata:</strong> {range}
        <strong>Componenti:</strong> V, S, M (una goccia di sangue, un pezzo di carne e un pizzico di polvere d’ossa)
        <strong>Durata:</strong> {duration}<br>
        Gli oggetti prendono vita al tuo comando. Scegli fino a dieci oggetti non magici a gittata e che non siano indossati o trasportati. I bersagli Medi contano come due oggetti, i bersagli Grandi contano come quattro oggetti, i bersagli Enormi contano come otto oggetti. Non puoi animare oggetti di taglia più grossa di Enorme. Ogni bersaglio si anima e diventa una creatura sotto il tuo controllo fino al termine dell’incantesimo o finché non viene ridotto a 0 punti ferita.
        Con un’azione bonus, puoi comandare mentalmente qualsiasi creatura che hai generato con questo incantesimo e che si trovi entro 150 metri da te (se controlli più creature, puoi comandarne solo alcune o tutte allo stesso tempo, impartendo lo stesso comando a ciascuna). Decidi tu quale azione intraprenderà la creatura e dove si muoverà durante il suo turno successivo, o puoi emettere un comando generico, come quello di fare la guardia a una particolare stanza o corridoio. Se non impartisci comandi, la creatura si limiterà a difendersi dalle creature ostili. Una volta dato un ordine, la creatura continuerà a seguirlo finché non avrà completato il suo compito.
        Un oggetto animato è un costrutto con CA, punti ferita, attacchi, Forza e Destrezza in base alla sua taglia. Il suo punteggio di Costituzione è 10, e i suoi punteggi di Intelligenza e Saggezza sono 3, mentre il punteggio di Carisma è 1. Ha velocità 9 metri; se l’oggetto è privo di gambe o altre appendici che può usare per muoversi, ha invece velocità di volo 9 metri e può fluttuare. Se l’oggetto è ancorato a una superficie o un oggetto più grosso, come una catena attaccata al muro, la sua velocità è 0. Possiede vista cieca con un raggio di 9 metri ed è cieco oltre questa distanza. Quando l’oggetto animato scende a 0 punti ferita, ritorna alla sua normale forma di oggetto, e tutti i danni in eccesso vengono inflitti alla sua forma originale.
        Se comandi a un oggetto di attaccare, questo può effettuare un singolo attacco da mischia contro una creatura entro 1,5 metri da esso. Effettua un attacco di schianto con un bonus di attacco e danni contundenti determinati dalla sua taglia. Il GM potrebbe determinare che a seconda della sua forma, un oggetto potrebbe invece infliggere danni taglienti o perforanti.        
        <strong>Ai livelli sueriori</strong> Quando lanci questo incantesimo usando uno slot incantesimo di 6° livello o più alto, puoi animare due oggetti aggiuntivi per ogni livello dello slot sopra il 5°.<br>
          <div class="statblock-container"><div class="col"><div class="col1"><div class="jaune"><div class="statblock-title">Oggetto Animato</div><div class="statblock-body"><div class="sansSerif"><div class="red"><div class="type-statblock">Costrutto Enorme o più piccolo, Senza Allineamento</div><strong>CA</strong> 15<br><strong>PF</strong> 10 (Media o più piccolo), 20 (Grande), 40 (Enorme)<br><strong>Velocità</strong> 9 metri
          <div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><br>
					<div class="car1">For</div><div class="car2">16</div><div class="car3">+3</div><div class="car3">+3</div><div class="car1">Des</div><div class="car2">10</div><div class="car3">+0</div><div class="car3">+0</div><div class="car1">Cos</div><div class="car2">10</div><div class="car3">+0</div><div class="car3">+0</div><br>
					<div class="car4">Int</div><div class="car5">3</div><div class="car6">-4</div><div class="car6">-4</div><div class="car4">Sag</div><div class="car5">3</div><div class="car6">-4</div><div class="car6">-4</div><div class="car4">Car</div><div class="car5">1</div><div class="car6">-5</div><div class="car6">-5</div><br><strong>Immunità</strong> Velenosi, Psichici; Incantato, Esausto, Spaventato, Paralizzato, Avvelenato
          <br><strong>Sensi</strong> Vista Cieca 9 metri, Percezione Passiva 6
          <br><strong>Linguaggi</strong> Comprende i linguaggi che conosci
          <br><strong>GS</strong> Nessuno (XP 0; BC corrisponde al tuo Bonus Competenza)</div><div class="rub">Azioni</div><div class="silv"><p><strong><em>Schianto</em></strong>. <em>Attacco per Colpire in Mischia</em>: il bonus corrisponde al tuo modificatore per gli incantesimi, gittata 1.5 metri <em>Danni</em>: 1d4 + 3 danni da Forza (Medo o più piccolo), 2d6 + 3 + il tuo Modificatore di Caratteristica da Incantatore (Grande), o 2d12 + 3 + il tuo Modificatore di Caratteristica da Incantatore (Enorme).</p></div></div></div></div></div>
        <em>Fonte: D&D 2024</em>
      `,
      en: `
        <strong><h3>{term}</h3></strong>
        <em>{level} {school} ({classes})</em>
        <strong>Casting Time:</strong> {castingtime}
        <strong>Range:</strong> {range}
        <strong>Components:</strong> {components}
        <strong>Duration:</strong> {duration}<br>
        Objects animate at your command. Choose a number of nonmagical objects within range that aren't being worn or carried, aren't fixed to a surface, and aren't Gargantuan. The maximum number of objects is equal to your spellcasting ability modifier; for this number, a Medium or smaller target counts as one object, a Large target counts as two, and a Huge target counts as three.
        Each target animates, sprouts legs, and becomes a Construct that uses the Animated Object stat block; this creature is under your control until the spell ends or until it is reduced to 0 Hit Points. Each creature you make with this spell is an ally to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours.
        Until the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form.
        <strong>Using a Higher-Level Spell Slot.</strong> The creature's Slam damage increases by 1d4 (Medium or smaller), 1d6 (Large), or 1d12 (Huge) for each spell slot level above 5.<br>
          <div class="statblock-container"><div class="col"><div class="col1"><div class="jaune"><div class="statblock-title">Animated Object</div><div class="statblock-body"><div class="sansSerif"><div class="red"><div class="type-statblock">Huge or Smaller Construct, Unaligned</div><strong>AC</strong> 15<br><strong>HP</strong> 10 (Medium or smaller), 20 (Large), 40 (Huge)<br><strong>Speed</strong> 30 ft.
          <div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><div class="car"></div><div class="car"></div><div class="car">MOD</div><div class="car">SAVE</div><br>
					<div class="car1">Str</div><div class="car2">16</div><div class="car3">+3</div><div class="car3">+3</div><div class="car1">Dex</div><div class="car2">10</div><div class="car3">+0</div><div class="car3">+0</div><div class="car1">Con</div><div class="car2">10</div><div class="car3">+0</div><div class="car3">+0</div><br>
					<div class="car4">Int</div><div class="car5">3</div><div class="car6">-4</div><div class="car6">-4</div><div class="car4">Wis</div><div class="car5">3</div><div class="car6">-4</div><div class="car6">-4</div><div class="car4">Cha</div><div class="car5">1</div><div class="car6">-5</div><div class="car6">-5</div><br><strong>Immunities</strong> Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned
          <br><strong>Senses</strong> Blindsight 30 ft., Passive Perception 6
          <br><strong>Languages</strong> Understands the languages you know
          <br><strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)</div><div class="rub">Actions</div><div class="silv"><p><strong><em>Slam</em></strong>. <em>Melee Attack Roll</em>: Bonus equals your spell attack modifier, reach 5 ft. <em>Hit</em>: Force damage equal to 1d4 + 3 (Medium or smaller), 2d6 + 3 + your spellcasting ability modifier (Large), or 2d12 + 3 + your spellcasting ability modifier (Huge).</p></div></div></div></div></div><br>
        <em>Source: D&D 2024 Player's Handbook</em>
      `
      },
          
        

      // FINE INCANTESIMI
    };
  
  export default descriptions;