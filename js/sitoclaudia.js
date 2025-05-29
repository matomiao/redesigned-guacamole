document.addEventListener('DOMContentLoaded', () => {
  // 1) Definizione delle gallerie per categoria
  const galleries = {
    materici: [
      { src: 'images/materico2.webp', text: '<em>Luce</em><br>2019, 50x60 cm,<br>tecnica mista materico su tela<br><br>Con il termine <em>materico</em> si intede l\'uso di matericali di vario tipo come sabbia, cenere, segatura, che l\'artista usa sulla tela per dare spessore ai volti che ritrate dando vita ai bellissimi soggetti dipinti.' },
      { src: 'images/materico1.webp', text: '<em>Ricordando Pocahontas</em><br>2019, 80x100 cm,<br>tecnica mista materico su tela' },
      { src: 'images/materico3.webp', text: '<em>Cambia-menti</em><br>2010, 70x100 cm, collezione privata,<br>tecnica mista materico su tela' },
      { src: 'images/materico4.webp', text: '<em>Frida Kalho</em><br>2016, 100x120 cm,<br>tecnica mista materico su tela <br><br>Claudia Salvadori considera Frida Kahlo un\'artista di riferimento: un esempio di forza, autenticità e resilienza. La ammira per aver combattuto per tutta la vita, non solo contro la malattia, ma anche contro le convenzioni e i limiti imposti dalla società.' },
    ],
    olio: [
      { src: 'images/olio2.webp', text: '<em>Mon c\'eri</em><br> 2022, 60X80 cm,<br>olio su tela <br><br>Pur essendo la tecnica <em>classica</em> per eccellenza, Claudia Salvadori non abbandona mai l\'uso dell\'olio su tela, declinandolo secondo diverse modalità. Qui vediamo quella della tradizione, ovvero l\'olio su tela che anima i volti e i corpi dei soggetti dipitni.' },
      { src: 'images/olio1.webp', text: '<em>Cogli la prima mela</em><br>2016, 80x100 cm,<br>olio su tela ' },
      { src: 'images/olio3.webp', text: '<em>Il sapore della pioggia</em><br>2015, 50x50 cm,<br>olio su tela ' },
      { src: 'images/olio4.webp', text: '<em>Non ho paura</em><br>2015, 50x60 cm,<br>olio su tela ' },
      { src: 'images/olio5.webp', text: '<em>Trittico</em>,<br>anno, 50x50 cm,<br>olio su tela ' },
    ],
    collage: [
      { src: 'images/collage1.webp', text: '<em>Bellezza ribelle</em><br> 2025, 60X80 cm,<br>tecnica mista: collage e olio su tela <br><br>Un\'altra modalità di recente sperimentata dall\'artista nell\'uso dell\'olio su tela è la ripresa della tecnica del collage. Tipica delle avanguardie nel Novecento, la tecnica viene sapientemente sperimentata come base per i soggetti ritratti. Dai volti e corpi di questi ultimi traspare il giornale, cartolina o, in alcuni casi, sprtiti musicali, usati come sfondo.' },
      { src: 'images/collage2.webp', text: '<em>Le donne rosse, omaggio ad Aligi Sassu</em><br> 2025, ? cm,<br>tecnica mista: collage e olio su tela' },
      { src: 'images/collage3.webp', text: '<em>La magia dell\'intesa</em><br> 2024 , 80x60 cm,<br>tecnica mista: collage e olio su tela' },
    ],
    voice: [
      { src: 'images/bemyvoice3.webp', text: '<em>Ave Maria</em><br>Via Crucis stazione IV<br>2023, 80X100 cm,<br>olio su tela <br><br>Il primo ciclo pittorico dell\'artista <em>Be my Voice</em> riprende il tema religioso della Via Crucis in chiave laica. Nella visione di Claudia Salvadori le 14 stazioni che ripercorrono le sofferenze di Cristo hanno una forma contemporanea denunciando i mali della nostra società quali la guerra, la violenza sulle donne e sui più fragili, la crisi migratoria. Ogni stazione ci porta in uno scenario in cui la sofferenza si fa da protagonista ma l\'intento di Claudia Salvadori è anche quello di veicolare un messaggio di speranza, per far sì che questi mali siano solo quelli della nostra contemporaneità e non del futuro.' },
      { src: 'images/bemyvoice1.webp', text: '<em>12 giugno</em><br>Via Crucis stazione VII<br>2023, 70x50 cm,<br>tecnica materica mista:<br>olio su tela' },
      { src: 'images/bemyvoice2.webp', text: '<em>Hikikomori</em><br>Via Crucis stazione IX<br>2023, 60X60 cm,<br>tecnica materica mista: acrilico e ruggine su tela' },
      { src: 'images/bemyvoice4.webp', text: '<em>Avrò cura di te</em><br>Via Crucis stazione V<br>2022, 80X100 cm,<br>tecnica materica mista: acrilico e ruggine su tela' },
      { src: 'images/bemyvoice5.webp', text: '<em>Mediterraneo</em><br>Via Crucis stazione III<br>2022, 200X160 cm,<br>tecnica materica mista tecnica acrilico e ruggine su tela' }
    ]
  };

  let currentCat = null,
    currentIdx = 0;

  // riferimenti DOM
  const modal = document.getElementById('galleryModal'),
    imgEl = document.getElementById('currentImage'),
    textEl = document.getElementById('galleryText'),
    closeBtn = modal.querySelector('.close'),
    prevBtn = modal.querySelector('.prev'),
    nextBtn = modal.querySelector('.next'),
    thumbBoxes = document.querySelectorAll('.thumb-box');

  function openModal(cat, idx) {
    currentCat = cat;
    currentIdx = idx;
    updateModal();
    modal.style.display = 'flex';
  }

  function updateModal() {
    const item = galleries[currentCat][currentIdx];
    imgEl.src = item.src;
    imgEl.alt = `${currentCat} ${currentIdx + 1}`;
    textEl.innerHTML = item.text;
  }

  // click sui box della griglia
  thumbBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const cat = box.getAttribute('data-cat');
      if (!galleries[cat]) return;
      openModal(cat, 0);
    });
  });

  // chiudi il modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // navigazione frecce
  prevBtn.addEventListener('click', () => {
    const arr = galleries[currentCat];
    currentIdx = (currentIdx - 1 + arr.length) % arr.length;
    updateModal();
  });
  nextBtn.addEventListener('click', () => {
    const arr = galleries[currentCat];
    currentIdx = (currentIdx + 1) % arr.length;
    updateModal();
  });
});

// fiches mostre ed eventi con galleria
document.addEventListener('DOMContentLoaded', () => {
  const fiches = document.querySelectorAll('.fiche');
  const modal = document.getElementById('ficheModal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalDescription = modal.querySelector('#modalDescription');
  const closeBtn = modal.querySelector('.close-btn');

  // elementi galleria
  const imgEl = modal.querySelector('#currentImage');
  const capEl = modal.querySelector('#currentCaption');
  const prevBtn = modal.querySelector('.gallery-nav.prev');
  const nextBtn = modal.querySelector('.gallery-nav.next');

  // dati aggiornati: ogni voce ora ha array images + captions
  const ficheData = {
    "2025-2022": {
      title: "Mostre ed eventi in Italia",
      description: `Negli ultimi anni Claudia Salvadori ha portato la sua arte in alcuni dei luoghi più prestigiosi del panorama espositivo italiano. Le mostre più recenti del 2024-2025 l’hanno vista protagonista con la sua rivisitazione contemporanea della Via Crucis, accolta da importanti istituzioni: il Museo di Correggio (novembre 2024 – febbraio 2025), il Museo Diocesano di Massa (febbraio – marzo 2025), e in precedenza il Palazzo Ducale del Gattopardo a Palma di Montechiaro (2023).
<br>Nella sua terra natale, il Trentino, è stata acclamata per la personale presso la Biblioteca di Mezzolombardo (marzo – aprile 2025) e per l’evento Incontra arti alla Manifattura Tabacchi di Rovereto (ottobre 2024).<br>A settembre 2024 a Bergamo ha partecipato alla mostra <em>Arte come incontro</em> presso la Galleria DuePuntoZero, curata dal critico Andrea Barretta.
<br>Sempre nel 2024  è coinvolta in un progetto speciale per l’inaugurazione del film <em>Free Liberi</em>di Fabrizio Maria Cortese, ritraendo l’attrice Corinne Cléry.
<br>Ha partecipato per due edizioni alla mostra <em>Il cenacolo delle donne</em>, curata dalla storica dell’arte Annalisa Puntelli Sacchetti, prima a Reggio Calabria (2023–2024) e poi all’Abbazia di San Benedetto Po (2024). Ricorrente è anche la sua presenza nella collettiva <em>Cari Maestri</em>, curata da Gianmarco Puntelli.
<br>Claudia Salvadori ha inoltre preso parte ad alcune tra le più importanti fiere d’arte italiane, come <em>ArtePadova</em> (2022) e la Fiera di Pordenone (2017).
<br>In precedenza ha partecipato alla Biennale di Milano e alla Pro Biennale di Venezia entrambe presentate da Vittorio Sgarbi. Sempre sotto la direzione di Sgarbi ha partecipato alla prestigiosa rassegna Spoleto Arte nel 2018.
<br>Nello stesso anno è stata protagonista anche del Festival del Nuovo Rinascimento a Trento, dove già nel 2013 aveva esposto in una personale al Palazzo della Regione. Seguono due personali nel 2018 e altre due nel 2019, tra cui una significativa esposizione presso l’Ambasciata Americana di Roma.
<br>Nel 2017 espone in tre città cardine dell’arte italiana: Firenze, Bologna e Roma, dove le sue opere sono state ospitate anche in sedi prestigiose come le Sale del Bramante e il Palazzo Pontificio. Nello stesso periodo espone inoltre al Palazzo Comunale di Assisi, al Palazzo delle Albere di Trento, al Palazzo dei Papi di Viterbo e al Museo della Legalità di Reggio Calabria.
<br>Dalla forza espressiva della materia alla profondità psicologica dei volti femminili che dipinge, Claudia Salvadori si è distinta in ogni occasione per la capacità di coniugare un forte impatto visivo a una poetica silenziosa, sempre fedele a una figurazione che parla direttamente all’osservatore.`,
      images: [
        "images/correggio.webp",
        "images/museomassa2.webp",
        "images/museomassa.webp",
        "images/gattopardo.webp",
        "images/mezzolomabrdo.webp",
        "images/roveretolocandina.webp",
        "images/rovereto.webp",
        "images/bergamo.webp",
        "images/corinne.webp",
        "images/cenacolo.webp",
        "images/carimestri2025.webp",
        "images/carimaestri.webp",
        "images/artepadova.webp",
        "images/biennalemilano.webp",
        "images/SgarbiSpoletoArte22018.webp",
        "images/SgarbiSpoletoArte2018.webp",
        "images/TrentoRinascimento.webp",

      ],
      captions: [
        "Locandina 'Be my Voice' al Museo Il Correggio, 2024-2025",
        "'Be my Voice' al Museo Diocesano di Massa, 2025",
        "Locandina Via Crucis Museo Diocesano di Massa, 2024-2025",
        "'Be my Voice' al Palazzo Ducale del Gattopardo, 2023",
        "Locaninda mostra alla Biblioteca di Mezzolombardo, 2025",
        "Locandina 'Incontra arti' Manifattura Tabacchi, Rovereto 2024",
        "Inaugurazione 'Incontra arti' Manifattura Tabacchi, Rovereto, 2024",
        "'Arte come incontro' galleria DuePuntoZero, 2024",
        "Claudia Salvadori e Corrine Clery con il ritratto realizzato dall'artsta",
        "Locandina Il cenacolo delle donne, 2023",
        "Inaugurazione Cari Maestri 2025",
        "Locandina Cari Maestri 2023",
        "ArtePadova edizione 2022",
        "Attestato partecipazione Biennale Milano, 2019",
        "L'artista con il critico Vittorio Sgarbi nel 2018 alla rassegna 'Spoleto Arte'",
        "'Spoleto Arte', 2018",
        "Sala del 'Festival del Nuovo Rinascimento', Trento, 2018",

      ]
    },
    "2022-2020": {
      title: "Mostre ed eventi all'estero",
      description: `Claudia Salvadori ha portato la sua arte anche oltre i confini italiani, partecipando a eventi internazionali in prestigiose sedi culturali europee e asiatiche.
      <br>Nel 2014 espone presso lo Spazio <em>Leo Ferré</em> nel Principato di Monaco, inaugurando così un percorso internazionale che si consoliderà negli anni successivi.
      <br>Nel 2016 è protagonista di due importanti mostre: una presso l’Ambasciata Italiana a Parigi, dove le sue opere ricevono particolare apprezzamento per l’equilibrio tra materia e introspezione.
      <br>Nel 2017 partecipa a una collettiva alla <em>Crypt Gallery</em> di Londra, celebre per accogliere artisti contemporanei emergenti e affermati in uno spazio espositivo unico e suggestivo.
      <br>Nel 2018 è invitata a esporre all’Istituto Italiano di Cultura di Stoccarda, successivamente nel 2019 viene invitata per una mosta a Mosca presso il Museo di Stato Vernadsky.
      <br>L'anno successivo espone a Berlino nella mostra collettiva <em>Infinity Academy</em> ideata dal curatore Gianmarco Puntelli e curata da Annalisa Puntelli Sacchetti.
      <br>Un altro importante evento che si tiene all'estero e che la vede tra i protagonisti è la mostra <em>Pace e Amore</em> ad Abu Dhabi nell’ambito dell'Expo 2022.`,
      images: [
        "images/monaco2.webp",
        "images/monaco.webp",
        "images/londra.webp",
        "images/mosca.webp",
        "images/berlino.webp",
        "images/berlino2.webp",
        "images/abud.webp",
        "images/abud2.webp"
      ],
      captions: [
        "L'artista con il catalogo presso lo spazio 'Leo Ferré' nel Principato di Monaco, 2014",
        "Lo spazio 'Leo Ferré' nel Principato di Monaco, 2014",
        "'Crypt Gallery', Londra, 2017",
        "Il museo di Stato Vernadsky, Mosca, 2019",
        "L'artista con il catalogo 'Infinity', Berlino, 2020",
        "L'artista, Gianmarco Puntelli, l'ideatore della mostra 'Infinity Academy' Berlino, 2020",
        "'Pace e Amore', dell'Expo di Abu Dhabi 2022",
        "'Pace e Amore', dell'Expo di Abu Dhabi 2022"
      ]
    },
  };

  let galleryData = [];
  let currentIdx = 0;

  function updateGallery() {
    if (!galleryData.length) return;
    const item = galleryData[currentIdx];
    imgEl.src = item.src;
    capEl.textContent = item.caption;
  }

  // Listener sulle frecce, definiti una sola volta
  prevBtn.addEventListener('click', () => {
    if (!galleryData.length) return;
    currentIdx = (currentIdx - 1 + galleryData.length) % galleryData.length;
    updateGallery();
  });
  nextBtn.addEventListener('click', () => {
    if (!galleryData.length) return;
    currentIdx = (currentIdx + 1) % galleryData.length;
    updateGallery();
  });
  // Apertura modale e popolamento galleria
  fiches.forEach(fiche => {
    fiche.addEventListener('click', () => {
      const key = fiche.getAttribute('data-year');
      const data = ficheData[key];
      if (!data) return;

      // testo
      modalTitle.textContent = data.title;
      modalDescription.innerHTML = data.description;

      // costruisci galleryData dall’array di immagini e captions
      galleryData = data.images.map((src, i) => ({
        src,
        caption: data.captions[i] || ''
      }));
      currentIdx = 0;
      updateGallery();

      // mostra la modale
      modal.style.display = 'flex';
    });
  });

  // Chiusura modale
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});


// Chiusura modale Giotto Art Prize da mettere dopo: 2024 ottiene un prestigioso riconoscimento: il primo premio al <em>International Art Prize Giotto</em> a Siracusa. Nello stesso anno

// CONTATTI //
document.querySelector('iframe[name="hidden_iframe"]')
  .addEventListener("load", function () {
    document.querySelector("#loading").classList.add("d-none");

    try {
      const iframe = document.querySelector('iframe[name="hidden_iframe"]');
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Verifica che possiamo accedere al contenuto
      if (!iframeDoc || !iframeDoc.body || !iframeDoc.body.innerText) {
        throw new Error("Contenuto iframe non accessibile");
      }

      const content = iframeDoc.body.innerText.trim();

      if (content.includes("OK")) {
        document.querySelector("#successo").classList.remove("d-none");
        document.getElementById("contatti-form").reset();
      } else {
        document.querySelector("#errore").classList.remove("d-none");
      }
    } catch (err) {
      // Fallback generico
      console.error("Errore nella gestione della risposta:", err);
      document.querySelector("#errore").classList.remove("d-none");
    }
  });
