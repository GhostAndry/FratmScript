// ============================================
// FratmScript - Mappatura Keywords
// JavaScript 'o napulitan! 🤌
// ============================================

/**
 * Mappatura completa delle parole chiave FratmScript → JavaScript
 * 
 * Ogni keyword napoletana viene tradotta nel suo equivalente JavaScript.
 * Le chiavi sono le parole napoletane, i valori sono le keyword JS.
 */

// Keyword principali del linguaggio
const KEYWORDS = {
  // --- Dichiarazioni di variabili ---
  'uè':           'var',          // uè = ehi, per dichiarare variabili (informale)
  'mett':         'let',          // mett = metti, per dichiarare variabili (block-scoped)
  'fisso':        'const',        // fisso = fisso/costante

  // --- Funzioni ---
  'funzion':      'function',     // funzion = funzione
  'torna':        'return',       // torna = ritorna/torna indietro
  'freccia':      '=>',           // freccia = arrow function (=>)

  // --- Controllo di flusso ---
  'si':           'if',           // si = se (condizionale)
  'sinnò':        'else',         // sinnò = altrimenti
  'pe':           'for',          // pe = per (ciclo for)
  'ment':         'while',        // ment = mentre (ciclo while)
  'fa':           'do',           // fa = fai (do-while)
  'vir':          'switch',       // vir = vedi/guarda
  'quann':        'case',         // quann = quando (case)
  'bast':         'break',        // bast = basta! (break)
  'và':           'continue',     // và = vai avanti (continue)

  // --- Valori speciali ---
  'overo':        'true',         // overo = vero
  'falzo':        'false',        // falzo = falso
  'nient':        'null',         // nient = niente
  'boh':          'undefined',    // boh = boh, chi lo sa? (undefined)
  'NummeroMosc':  'NaN',          // NummeroMosc = numero moscio (Not a Number)
  'senzafine':    'Infinity',     // senzafine = senza fine

  // --- Oggetti e Classi ---
  'famiglia':     'class',        // famiglia = famiglia (classe)
  'vien_ra':      'extends',      // vien_ra = viene da (extends)
  'papà':         'super',        // papà = padre (super)
  'nuov':         'new',          // nuov = nuovo
  'chest':        'this',         // chest = questo (this)

  // --- Gestione errori ---
  'prova':        'try',          // prova = prova (try)
  'piglia':       'catch',        // piglia = piglia/afferra (catch)
  'allafin':      'finally',      // allafin = alla fine
  'jett':         'throw',        // jett = jetta/lancia (throw)

  // --- Operatori e tipi ---
  'ch_è':         'typeof',       // ch_è = che cos'è? (typeof)
  'è_tipo':       'instanceof',   // è_tipo = è tipo di (instanceof)
  'leva':         'delete',       // leva = leva/togli (delete)
  'dint':         'in',           // dint = dentro (in)
  'e':            'of',           // e = di (of) -- careful with this one
  'vuot':         'void',         // vuot = vuoto (void)

  // --- Async ---
  'lent':         'async',        // lent = lento (async, perché aspetta)
  'aspett':       'await',        // aspett = aspetta (await)
  'caccia':       'yield',        // caccia = caccia fuori (yield)

  // --- Moduli ---
  'piglia_ra':    'import',       // piglia_ra = piglia da (import from)
  'esporta':      'export',       // esporta = esporta/manda fuori
  'normale':      'default',      // normale = normale/default

  // --- Debug ---
  'fermati':      'debugger',     // fermati = fermati! (debugger)

  // --- Costrutti avanzati ---
  'cu':           'with',         // cu = con (with)
  'genera':       'function*',    // genera = genera (generator function)

  // --- Operatori logici come parole ---
  'e_pure':       '&&',           // e_pure = e pure (AND)
  'o_sinnò':      '||',           // o_sinnò = o sennò (OR)
  'no':           '!',            // no = no! (NOT) -- used carefully
};

// Oggetti built-in napoletani
const BUILTINS = {
  // --- Console ---
  'scerm':        'console',      // scerm = schermo
  'scriv':        'log',          // scriv = scrivi
  'avvis':        'warn',         // avvis = avvisa
  'guai':         'error',        // guai = guai! (error)

  // --- Tipi built-in ---
  'Lista':        'Array',        // Lista = lista/array
  'Cosa':         'Object',       // Cosa = cosa/oggetto
  'Parola':       'String',       // Parola = parola/stringa
  'Nummero':      'Number',       // Nummero = numero
  'SìONo':        'Boolean',      // SìONo = sì o no (boolean)
  'Promessa':     'Promise',      // Promessa = promessa
  'Guaio':        'Error',        // Guaio = guaio/errore
  'Mappa':        'Map',          // Mappa = mappa
  'Insieme':      'Set',          // Insieme = insieme
  'Simbol':       'Symbol',       // Simbol = simbolo
  'DataOra':      'Date',         // DataOra = data e ora
  'Matem':        'Math',         // Matem = matematica
  'JSON':         'JSON',         // JSON resta JSON (universale)
  'RegExpressio': 'RegExp',       // RegExpressio = espressione regolare

  // --- Metodi comuni ---
  'lunghezza':    'length',       // lunghezza = lunghezza
  'spingi':       'push',         // spingi = spingi (push)
  'leva_ultimo':  'pop',          // leva_ultimo = togli l'ultimo (pop)
  'unisci':       'join',         // unisci = unisci (join)
  'taglia':       'slice',        // taglia = taglia (slice)
  'dividi':       'split',        // dividi = dividi (split)
  'cerca':        'indexOf',      // cerca = cerca (indexOf)
  'contiene':     'includes',     // contiene = contiene (includes)
  'ogniuno':      'forEach',      // ogniuno = ognuno (forEach)
  'mappa':        'map',          // mappa = mappa (map)
  'filtra':       'filter',       // filtra = filtra (filter)
  'riduci':       'reduce',       // riduci = riduci (reduce)
  'ordina':       'sort',         // ordina = ordina (sort)
  'trova':        'find',         // trova = trova (find)
  'chiavi':       'keys',         // chiavi = chiavi (keys)
  'valori':       'values',       // valori = valori (values)
  'piatto':       'flat',         // piatto = piatto (flat)
  'pò':           'then',         // pò = poi (then, per le Promise)
  'acchiappa':    'catch',        // acchiappa = acchiappa (catch per Promise)
  'stringify':    'stringify',    // stringify resta uguale

  // --- Metodi Math ---
  'paviment':     'floor',        // paviment = pavimento (floor)
  'soffitto':     'ceil',         // soffitto = soffitto (ceil)
  'arrotonni':    'round',        // arrotonni = arrotonda (round)
  'caso':         'random',       // caso = a caso (random)
  'massimo':      'max',          // massimo = massimo
  'minimo':       'min',          // minimo = minimo
  'potenza':      'pow',          // potenza = potenza (pow)
  'radic':        'sqrt',         // radic = radice (sqrt)
  'assoluto':     'abs',          // assoluto = assoluto (abs)

  // --- Metodi String ---
  'maiuscol':     'toUpperCase',  // maiuscol = maiuscolo
  'minuscol':     'toLowerCase',  // minuscol = minuscolo
  'accorcia':     'trim',         // accorcia = accorcia (trim)
  'rimpiazza':    'replace',      // rimpiazza = rimpiazza (replace)
  'comm_a':       'startsWith',   // comm_a = comincia a/come a (startsWith)
  'fernesc_cu':   'endsWith',     // fernesc_cu = finisce con (endsWith)
  'ripeti':       'repeat',       // ripeti = ripeti (repeat)

  // --- Timer ---
  'dopp':         'setTimeout',   // dopp = dopo (setTimeout)
  'ognittant':    'setInterval',  // ognittant = ogni tanto (setInterval)

  // --- JSON ---
  'leggi':        'parse',        // leggi = leggi (parse)

  // --- Processo ---
  'processo':     'process',      // processo = processo
  'argomenti':    'argv',         // argomenti = argomenti
  'esci':         'exit',         // esci = esci (exit)
  'ambiente':     'env',          // ambiente = ambiente (env)

  // --- require/module ---
  'richiedi':     'require',      // richiedi = richiedi (require)
  'modulo':       'module',       // modulo = modulo
  'esportazioni': 'exports',      // esportazioni = esportazioni
};

// Combinazioni speciali che devono essere trattate come blocchi unici
const SPECIAL_COMBINATIONS = {
  'scerm.scriv':    'console.log',
  'scerm.avvis':    'console.warn',
  'scerm.guai':     'console.error',
  'Matem.paviment': 'Math.floor',
  'Matem.soffitto': 'Math.ceil',
  'Matem.arrotonni':'Math.round',
  'Matem.caso':     'Math.random',
  'Matem.massimo':  'Math.max',
  'Matem.minimo':   'Math.min',
  'Matem.potenza':  'Math.pow',
  'Matem.radic':    'Math.sqrt',
  'Matem.assoluto': 'Math.abs',
  'Matem.PI':       'Math.PI',
  'JSON.stringify': 'JSON.stringify',
  'JSON.leggi':     'JSON.parse',

  // --- Smorfia built-in (proteggi i metodi dalla traduzione!) ---
  'Smorfia.che':              'Smorfia.che',
  'Smorfia.nummero':          'Smorfia.nummero',
  'Smorfia.cerca':            'Smorfia.cerca',
  'Smorfia.random':           'Smorfia.random',
  'Smorfia.tutti':            'Smorfia.tutti',
  'Smorfia.gioca':            'Smorfia.gioca',
  'Smorfia.stampa':           'Smorfia.stampa',
  'Smorfia.stampaBiglietto':  'Smorfia.stampaBiglietto',
  'Smorfia.interpretaSogno':  'Smorfia.interpretaSogno',
};

// Messaggi di errore in napoletano
const ERROR_MESSAGES = {
  fileNotFound:     'Uè! Nun trovo \'o file: ',
  syntaxError:      'Mamma mia! Errore \'e sintassi: ',
  runtimeError:     'Ué, guaio! Errore durante l\'esecuzione: ',
  noFile:           'Uè! Damme nu file .frtms pe favore!',
  wrongExtension:   'Uè! \'O file adda essere .frtms!',
  version:          'FratmScript v1.0.0 - JavaScript \'o napulitan! 🤌',
};

module.exports = {
  KEYWORDS,
  BUILTINS,
  SPECIAL_COMBINATIONS,
  ERROR_MESSAGES,
};
