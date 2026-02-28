// ============================================
// FratmScript - 'A Smorfia Napulitana 🎰
// Tutti 'e 90 nummeri cu 'o significato!
// ============================================

/**
 * 'A Smorfia Napulitana - La tradizione secolare che associa
 * i numeri da 1 a 90 a significati, sogni e figure.
 * Usata pe' ggiucà 'o lotto!
 * 
 * Tutti i significati sono in napoletano autentico.
 */

const SMORFIA = {
  1:  { nummero: 1,  significato: "'A Italia",           descrizione: "L'Italia, 'a patria" },
  2:  { nummero: 2,  significato: "'A criatura",          descrizione: "'A piccerella, 'o nennillo" },
  3:  { nummero: 3,  significato: "'A jatta",             descrizione: "'O gatto, animale 'e casa" },
  4:  { nummero: 4,  significato: "'O puorco",            descrizione: "'O puorco, 'o maiale" },
  5:  { nummero: 5,  significato: "'A mano",              descrizione: "'A mano, 'e ddete" },
  6:  { nummero: 6,  significato: "Chella che guarda 'nterra", descrizione: "'A cosa 'e femmena" },
  7:  { nummero: 7,  significato: "'O vasetto",           descrizione: "'O vaso, 'o vasetto" },
  8:  { nummero: 8,  significato: "'A Maronna",           descrizione: "'A Madonna, 'a Vergine Maria" },
  9:  { nummero: 9,  significato: "'A figliata",          descrizione: "'A prole, 'e figlie" },
  10: { nummero: 10, significato: "'E fasule",            descrizione: "'E fagioli" },
  11: { nummero: 11, significato: "'E suricille",         descrizione: "'E topolini, 'e sorci" },
  12: { nummero: 12, significato: "'E surdate",           descrizione: "'E soldati" },
  13: { nummero: 13, significato: "Sant'Antonio",         descrizione: "Sant'Antonio abate" },
  14: { nummero: 14, significato: "'O mbriaco",           descrizione: "'O mbriaco, chillo ca beve" },
  15: { nummero: 15, significato: "'O guaglione",         descrizione: "'O ragazzo, 'o picciotto" },
  16: { nummero: 16, significato: "'O culo",              descrizione: "'O culo, 'o deretano" },
  17: { nummero: 17, significato: "'A disgrazia",         descrizione: "'A sfurtuna, 'a jella" },
  18: { nummero: 18, significato: "'O sangue",            descrizione: "'O sangue" },
  19: { nummero: 19, significato: "'A risata",            descrizione: "'A risata, 'e rrise" },
  20: { nummero: 20, significato: "'A festa",             descrizione: "'A festa, 'a celebrazzione" },
  21: { nummero: 21, significato: "'A femmena annura",    descrizione: "'A donna senza vestiti" },
  22: { nummero: 22, significato: "'O pazzo",             descrizione: "'O pazzo, chillo ca è scemo" },
  23: { nummero: 23, significato: "'O scemo",             descrizione: "'O scemo, 'o tonto" },
  24: { nummero: 24, significato: "'E gguardie",          descrizione: "'E guardie, 'e puliziotti" },
  25: { nummero: 25, significato: "Natale",               descrizione: "'O Santo Natale, 'o 25 dicembre" },
  26: { nummero: 26, significato: "Nanninella",           descrizione: "Anna, Nanninella" },
  27: { nummero: 27, significato: "'O cantero",           descrizione: "'O pitale, 'o vaso 'a notte" },
  28: { nummero: 28, significato: "'E zzizze",            descrizione: "'E sise, 'o petto 'e femmena" },
  29: { nummero: 29, significato: "'O pate d''e criature", descrizione: "'O padre dei bambini" },
  30: { nummero: 30, significato: "'E ppalle d''o tenente", descrizione: "'E palle dell'ufficiale" },
  31: { nummero: 31, significato: "'O padrone 'e casa",   descrizione: "'O proprietario, 'o padrone" },
  32: { nummero: 32, significato: "'O capitone",          descrizione: "'O capitone, 'o pesce 'e Natale" },
  33: { nummero: 33, significato: "L'anne 'e Cristo",     descrizione: "Gli anni di Gesù Cristo" },
  34: { nummero: 34, significato: "'A capa",              descrizione: "'A capa, 'a testa" },
  35: { nummero: 35, significato: "L'aucelluzz",          descrizione: "L'uccellino, 'o passerotto" },
  36: { nummero: 36, significato: "'E castagnelle",       descrizione: "'E nacchere, 'e castagnette" },
  37: { nummero: 37, significato: "'O monaco",            descrizione: "'O monaco, 'o frate" },
  38: { nummero: 38, significato: "'E mazzate",           descrizione: "'E botte, 'e cazzuotte" },
  39: { nummero: 39, significato: "'A funa 'nganna",      descrizione: "'A corda al collo, l'impiccato" },
  40: { nummero: 40, significato: "'A tavernella",        descrizione: "'A tavernella, l'ernia" },
  41: { nummero: 41, significato: "'O curtiello",         descrizione: "'O coltello" },
  42: { nummero: 42, significato: "'O ccafè",             descrizione: "'O cafè, 'a tazzulella" },
  43: { nummero: 43, significato: "'A femmena 'ncopp 'o balcone", descrizione: "'A donna sul balcone (onna 'e piacere)" },
  44: { nummero: 44, significato: "'E ccancelle",         descrizione: "'A prigione, 'e sbarre" },
  45: { nummero: 45, significato: "'O vino bbuono",       descrizione: "'O vino buono" },
  46: { nummero: 46, significato: "'E denare",            descrizione: "'E soldi, 'e denari" },
  47: { nummero: 47, significato: "'O muorto",            descrizione: "'O morto, 'o defunto" },
  48: { nummero: 48, significato: "'O muorto che pparla", descrizione: "'O morto che parla" },
  49: { nummero: 49, significato: "'O piezzo 'e carne",   descrizione: "'O pezzo di carne" },
  50: { nummero: 50, significato: "'O ppane",             descrizione: "'O pane" },
  51: { nummero: 51, significato: "'O ciardino",          descrizione: "'O giardino" },
  52: { nummero: 52, significato: "'A mamma",             descrizione: "'A mamma, 'a madre" },
  53: { nummero: 53, significato: "'O viecchio",          descrizione: "'O vecchio" },
  54: { nummero: 54, significato: "'O cappello",          descrizione: "'O cappello" },
  55: { nummero: 55, significato: "'A museca",            descrizione: "'A musica" },
  56: { nummero: 56, significato: "'A caruta",            descrizione: "'A caduta" },
  57: { nummero: 57, significato: "'O scartellato",       descrizione: "'O gobbo" },
  58: { nummero: 58, significato: "'O paccotto",          descrizione: "'O pacco, 'a fregatura" },
  59: { nummero: 59, significato: "'E pile",              descrizione: "'E peli" },
  60: { nummero: 60, significato: "Se lagna",             descrizione: "'O lamento, chillo ca se lagna" },
  61: { nummero: 61, significato: "'O cacciatore",        descrizione: "'O cacciatore" },
  62: { nummero: 62, significato: "'O muorto acciso",     descrizione: "'O morto ammazzato" },
  63: { nummero: 63, significato: "'A sposa",             descrizione: "'A sposa, 'a zita" },
  64: { nummero: 64, significato: "'A sciammeria",        descrizione: "'A marsina, 'a giacca elegante" },
  65: { nummero: 65, significato: "'O chianto",           descrizione: "'O pianto" },
  66: { nummero: 66, significato: "'E ddoie zetelle",     descrizione: "'E due zitelle" },
  67: { nummero: 67, significato: "'O totano int''a chitarra", descrizione: "'O totano nella chitarra" },
  68: { nummero: 68, significato: "'A zuppa cotta",       descrizione: "'A zuppa cotta" },
  69: { nummero: 69, significato: "Sott'e'ncoppa",       descrizione: "Sottosopra" },
  70: { nummero: 70, significato: "'O palazzo",           descrizione: "'O palazzo, l'edificio" },
  71: { nummero: 71, significato: "L'ommo 'e merda",     descrizione: "L'uomo spregevole" },
  72: { nummero: 72, significato: "'A meraviglia",        descrizione: "'A meraviglia, 'o stupore" },
  73: { nummero: 73, significato: "'O spitale",           descrizione: "L'ospedale" },
  74: { nummero: 74, significato: "'A grotta",            descrizione: "'A grotta, 'a caverna" },
  75: { nummero: 75, significato: "Pulicenella",          descrizione: "Pulcinella, 'a maschera napulitana" },
  76: { nummero: 76, significato: "'A funtana",           descrizione: "'A fontana" },
  77: { nummero: 77, significato: "'E diavule",           descrizione: "'E diavoli" },
  78: { nummero: 78, significato: "'A bella figliola",    descrizione: "'A bella ragazza" },
  79: { nummero: 79, significato: "'O mariuolo",          descrizione: "'O ladro, 'o delinquente" },
  80: { nummero: 80, significato: "'A vocca",             descrizione: "'A bocca" },
  81: { nummero: 81, significato: "'E sciure",            descrizione: "'E fiori" },
  82: { nummero: 82, significato: "'A tavula apparecchiata", descrizione: "'A tavola imbandita" },
  83: { nummero: 83, significato: "'O maletiempo",        descrizione: "'O maltempo, 'a tempesta" },
  84: { nummero: 84, significato: "'A chiesa",            descrizione: "'A chiesa" },
  85: { nummero: 85, significato: "L'anema d''o priatorio", descrizione: "L'anima del purgatorio" },
  86: { nummero: 86, significato: "'A puteca",            descrizione: "'A bottega, 'o negozio" },
  87: { nummero: 87, significato: "'E perucchie",         descrizione: "'E pidocchi" },
  88: { nummero: 88, significato: "'E casecavalle",       descrizione: "'E caciocavalli" },
  89: { nummero: 89, significato: "'A vecchia",           descrizione: "'A vecchia" },
  90: { nummero: 90, significato: "'A paura",             descrizione: "'A paura, 'o spavento" },
};

/**
 * Classe Smorfia - Built-in di FratmScript
 * 
 * Uso in FratmScript:
 *   Smorfia.che(77)           → "'E diavule"
 *   Smorfia.nummero(77)       → { nummero: 77, significato: "'E diavule", descrizione: "..." }
 *   Smorfia.cerca("muorto")   → [{ nummero: 47, ... }, { nummero: 48, ... }]
 *   Smorfia.random()          → Un numero a caso con significato
 *   Smorfia.tutti()           → Tutti 'e 90 numeri
 *   Smorfia.stampa()          → Stampa tutta 'a Smorfia a schermo
 *   Smorfia.gioca()           → 5 numeri a caso pe' giucà 'o lotto!
 */
class SmorfiaClass {
  constructor() {
    this.numeri = SMORFIA;
  }

  /**
   * Torna 'o significato 'e nu nummero.
   * @param {number} n - Nummero da 1 a 90
   * @returns {string} 'O significato
   */
  che(n) {
    if (n < 1 || n > 90) {
      throw new Error(`Uè! 'A Smorfia va da 1 a 90, no ${n}!`);
    }
    return this.numeri[n].significato;
  }

  /**
   * Torna tutt''e informazioni 'e nu nummero.
   * @param {number} n - Nummero da 1 a 90
   * @returns {object} Oggetto cu nummero, significato e descrizione
   */
  nummero(n) {
    if (n < 1 || n > 90) {
      throw new Error(`Uè! 'A Smorfia va da 1 a 90, no ${n}!`);
    }
    return { ...this.numeri[n] };
  }

  /**
   * Cerca nu significato dint''a Smorfia.
   * @param {string} parola - Parola da cercare
   * @returns {Array} Lista 'e risultati
   */
  cerca(parola) {
    const p = parola.toLowerCase();
    const risultati = [];
    for (let i = 1; i <= 90; i++) {
      const entry = this.numeri[i];
      if (entry.significato.toLowerCase().includes(p) || 
          entry.descrizione.toLowerCase().includes(p)) {
        risultati.push({ ...entry });
      }
    }
    return risultati;
  }

  /**
   * Torna nu nummero a caso cu 'o significato.
   * @returns {object} Nummero random cu significato
   */
  random() {
    const n = Math.floor(Math.random() * 90) + 1;
    return { ...this.numeri[n] };
  }

  /**
   * Torna tutti 'e 90 numeri.
   * @returns {Array} Lista completa
   */
  tutti() {
    const lista = [];
    for (let i = 1; i <= 90; i++) {
      lista.push({ ...this.numeri[i] });
    }
    return lista;
  }

  /**
   * Estrai 5 numeri a caso pe' giucà 'o lotto!
   * @param {number} [quanti=5] - Quanti numeri estrarre
   * @returns {Array} Numeri estratti cu significato
   */
  gioca(quanti = 5) {
    const estratti = new Set();
    while (estratti.size < Math.min(quanti, 90)) {
      estratti.add(Math.floor(Math.random() * 90) + 1);
    }
    return Array.from(estratti)
      .sort((a, b) => a - b)
      .map(n => ({ ...this.numeri[n] }));
  }

  /**
   * Stampa tutta 'a Smorfia a schermo.
   */
  stampa() {
    console.log("\n🎰 ═══════════════════════════════════════════");
    console.log("   'A SMORFIA NAPULITANA");
    console.log("   Tutti 'e 90 nummeri cu 'o significato!");
    console.log("═══════════════════════════════════════════════\n");
    for (let i = 1; i <= 90; i++) {
      const entry = this.numeri[i];
      const pad = i < 10 ? ' ' : '';
      console.log(`  ${pad}${i}. ${entry.significato}  —  ${entry.descrizione}`);
    }
    console.log("\n═══════════════════════════════════════════════");
    console.log("  🤌 Bona fortuna cu 'o lotto!");
    console.log("═══════════════════════════════════════════════\n");
  }

  /**
   * Stampa 'e numeri estratti in formato bello.
   * @param {Array} estratti - Risultato di gioca()
   */
  stampaBiglietto(estratti) {
    if (!estratti) estratti = this.gioca();
    console.log("\n🎰 ╔═══════════════════════════════════════╗");
    console.log("   ║     BIGLIETTO D''O LOTTO 'E NAPULE    ║");
    console.log("   ╠═══════════════════════════════════════╣");
    for (const e of estratti) {
      const pad = e.nummero < 10 ? ' ' : '';
      console.log(`   ║  ${pad}${e.nummero} - ${e.significato.padEnd(32)}║`);
    }
    console.log("   ╠═══════════════════════════════════════╣");
    console.log("   ║        🤌 Bona fortuna, fratm!        ║");
    console.log("   ╚═══════════════════════════════════════╝\n");
  }

  /**
   * Interpreta un sogno: prendi le parole chiave e trova i numeri.
   * @param {string} sogno - Descrizione del sogno
   * @returns {Array} Numeri associati al sogno
   */
  interpretaSogno(sogno) {
    const parole = sogno.toLowerCase().split(/\s+/);
    const trovati = new Map();
    
    for (const parola of parole) {
      if (parola.length < 3) continue;
      for (let i = 1; i <= 90; i++) {
        const entry = this.numeri[i];
        if (entry.significato.toLowerCase().includes(parola) || 
            entry.descrizione.toLowerCase().includes(parola)) {
          if (!trovati.has(i)) {
            trovati.set(i, { ...entry, parolaChiave: parola });
          }
        }
      }
    }
    
    return Array.from(trovati.values()).sort((a, b) => a.nummero - b.nummero);
  }
}

// Istanza singleton
const Smorfia = new SmorfiaClass();

module.exports = { Smorfia, SmorfiaClass, SMORFIA };
