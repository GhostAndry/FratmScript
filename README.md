# 🤌 FratmScript

### JavaScript 'o napulitan!

**FratmScript** è un linguaggio di programmazione basato su JavaScript ma con sintassi completamente in **napoletano**! I file hanno estensione **`.frtms`** e vengono transpilati in JavaScript puro prima dell'esecuzione.

> *"Scerm.scriv('Uè, ciao mondo!')"* — Il primo programma FratmScript

---

## 🚀 Installazione

```bash
# Clona il repository
git clone https://github.com/tuousername/FratmScript.git
cd FratmScript

# Rendi eseguibile il CLI
chmod +x bin/fratmscript

# (Opzionale) Installa globalmente
npm link
```

## ▶️ Uso

```bash
# Esegui un file FratmScript
node bin/fratmscript examples/ciao_mondo.frtms

# Oppure se installato globalmente
fratmscript ciao_mondo.frtms
frtms ciao_mondo.frtms          # Alias corto!

# Solo transpila in JavaScript (senza eseguire)
fratmscript --transpila programma.frtms

# Transpila con output specifico
fratmscript --transpila programma.frtms -o output.js

# Modalità debug
fratmscript --debug programma.frtms

# REPL interattivo
fratmscript --repl
fratmscript              # Senza argomenti parte il REPL
```

---

## 📖 Guida al Linguaggio

### Variabili

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `uè` | `var` | Ehi! (dichiarazione informale) |
| `mett` | `let` | Metti (block-scoped) |
| `fisso` | `const` | Fisso/costante |

```javascript
// FratmScript
mett nome = "Gennaro"
fisso città = "Napoli"
uè vecchiaVar = 42
```

### Funzioni

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `funzion` | `function` | Funzione |
| `torna` | `return` | Torna/ritorna |
| `freccia` | `=>` | Arrow function |

```javascript
// FratmScript
funzion saluta(nome) {
  torna `Uè ${nome}!`
}

// Arrow function
fisso doppio = (n) freccia n * 2
```

### Controllo di Flusso

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `si` | `if` | Se (condizionale) |
| `sinnò` | `else` | Sennò/altrimenti |
| `pe` | `for` | Per (ciclo) |
| `ment` | `while` | Mentre |
| `fa` | `do` | Fai |
| `vir` | `switch` | Vedi/guarda |
| `quann` | `case` | Quando |
| `bast` | `break` | Basta! |
| `và` | `continue` | Vai avanti |

```javascript
// If/Else
si (fame) {
  scerm.scriv("Jammece a mangiare!")
} sinnò {
  scerm.scriv("So' sazio")
}

// Ciclo for
pe (mett i = 0; i < 10; i++) {
  scerm.scriv(i)
}

// While
ment (condizione) {
  scerm.scriv("Ancora...")
}
```

### Valori Speciali

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `overo` | `true` | Vero |
| `falzo` | `false` | Falso |
| `nient` | `null` | Niente |
| `boh` | `undefined` | Boh, chi lo sa? |
| `NummeroMosc` | `NaN` | Numero moscio |
| `senzafine` | `Infinity` | Senza fine |

### Classi e OOP

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `famiglia` | `class` | Famiglia (classe) |
| `vien_ra` | `extends` | Viene da (eredità) |
| `papà` | `super` | Padre (super) |
| `nuov` | `new` | Nuovo |
| `chest` | `this` | Questo |

```javascript
// Classi in FratmScript
famiglia Animale {
  constructor(nome) {
    chest.nome = nome
  }
  
  parla() {
    scerm.scriv(`${chest.nome} fa un verso!`)
  }
}

famiglia Cane vien_ra Animale {
  constructor(nome, razza) {
    papà(nome)
    chest.razza = razza
  }
  
  parla() {
    scerm.scriv(`${chest.nome} fa: Bau bau! 🐕`)
  }
}

fisso rex = nuov Cane("Rex", "Pastore Tedesco")
rex.parla()
```

### Gestione Errori

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `prova` | `try` | Prova |
| `piglia` | `catch` | Piglia/afferra |
| `allafin` | `finally` | Alla fine |
| `jett` | `throw` | Jetta/lancia |
| `Guaio` | `Error` | Guaio/errore |

```javascript
prova {
  jett nuov Guaio("Mamma mia!")
} piglia(e) {
  scerm.scriv(e.message)
} allafin {
  scerm.scriv("Alla fine va sempre bene")
}
```

### Async/Await

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `lent` | `async` | Lento (asincrono) |
| `aspett` | `await` | Aspetta |
| `Promessa` | `Promise` | Promessa |

```javascript
lent funzion caricaDati() {
  fisso dati = aspett fetch("https://api.example.com/dati")
  torna dati
}
```

### Console e I/O

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `scerm.scriv` | `console.log` | Schermo scrivi |
| `scerm.avvis` | `console.warn` | Schermo avvisa |
| `scerm.guai` | `console.error` | Schermo guai |

```javascript
scerm.scriv("Uè, ciao mondo! 🤌")
scerm.avvis("Attento fratm!")
scerm.guai("Mamma mia, un errore!")
```

### Tipi Built-in

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `Lista` | `Array` | Lista |
| `Cosa` | `Object` | Cosa/Oggetto |
| `Parola` | `String` | Parola |
| `Nummero` | `Number` | Numero |
| `SìONo` | `Boolean` | Sì o No |
| `Mappa` | `Map` | Mappa |
| `Insieme` | `Set` | Insieme |
| `Matem` | `Math` | Matematica |
| `DataOra` | `Date` | Data e Ora |

### Metodi Comuni

| FratmScript | JavaScript | Significato |
|-------------|-----------|-------------|
| `lunghezza` | `length` | Lunghezza |
| `spingi` | `push` | Spingi |
| `ogniuno` | `forEach` | Ognuno |
| `mappa` | `map` | Mappa |
| `filtra` | `filter` | Filtra |
| `riduci` | `reduce` | Riduci |
| `ordina` | `sort` | Ordina |
| `trova` | `find` | Trova |
| `contiene` | `includes` | Contiene |
| `unisci` | `join` | Unisci |
| `dividi` | `split` | Dividi |

---

## 📁 Struttura del Progetto

```
FratmScript/
├── bin/
│   └── fratmscript       # CLI eseguibile
├── src/
│   ├── index.js           # Entry point e runner
│   ├── transpiler.js      # Transpiler FratmScript → JavaScript
│   └── keywords.js        # Mappatura keyword napoletane
├── examples/
│   ├── ciao_mondo.frtms   # Hello World
│   ├── fibonacci.frtms    # Fibonacci e FizzBuzz
│   ├── classe.frtms       # Classi e OOP
│   ├── async.frtms        # Async/Await
│   └── errori.frtms       # Error handling
├── package.json
└── README.md
```

## 🧪 Esempi

```bash
# Ciao Mondo
node bin/fratmscript examples/ciao_mondo.frtms

# Fibonacci
node bin/fratmscript examples/fibonacci.frtms

# Classi e OOP
node bin/fratmscript examples/classe.frtms

# Async/Await
node bin/fratmscript examples/async.frtms

# Gestione Errori
node bin/fratmscript examples/errori.frtms

# Esegui tutti gli esempi
npm run test:all
```

## 🏗️ Come Funziona

1. **Tokenizzazione**: Il sorgente viene diviso in token (codice, stringhe, commenti)
2. **Transpilazione**: Le keyword napoletane vengono tradotte in JavaScript
3. **Esecuzione**: Il JavaScript generato viene eseguito con Node.js `vm`

Le stringhe e i commenti **non** vengono modificati, solo il codice effettivo viene tradotto.

## 🤝 Contribuire

Vuoi aggiungere nuove parole napoletane? Modifica [src/keywords.js](src/keywords.js) e aggiungi le tue traduzioni!

## 📜 Licenza

MIT - Fai chello che vuò! 🤌

---
