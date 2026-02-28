// ============================================
// FratmScript - Entry Point
// JavaScript 'o napulitan! 🤌
// ============================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const FratmTranspiler = require('./transpiler');
const { ERROR_MESSAGES } = require('./keywords');
const { Smorfia } = require('./smorfia');

/**
 * Classe principale FratmScript.
 * Gestisce il caricamento, la transpilazione e l'esecuzione
 * di file .frtms (FratmScript).
 */
class FratmScript {
  constructor(options = {}) {
    this.transpiler = new FratmTranspiler(options);
    this.debug = options.debug || false;
  }

  /**
   * Esegui un file .frtms
   * 
   * @param {string} filePath - Percorso del file .frtms
   * @returns {*} Risultato dell'esecuzione
   */
  runFile(filePath) {
    // Risolvi il percorso assoluto
    const absolutePath = path.resolve(filePath);

    // Controlla che il file esista
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`${ERROR_MESSAGES.fileNotFound}${absolutePath}`);
    }

    // Controlla l'estensione
    const ext = path.extname(absolutePath);
    if (ext !== '.frtms') {
      throw new Error(ERROR_MESSAGES.wrongExtension);
    }

    // Leggi il file sorgente
    const source = fs.readFileSync(absolutePath, 'utf-8');

    // Transpila e esegui
    return this.run(source, absolutePath);
  }

  /**
   * Transpila e esegui codice FratmScript da stringa.
   * 
   * @param {string} source - Codice sorgente FratmScript
   * @param {string} [filename] - Nome file per error reporting
   * @returns {*} Risultato dell'esecuzione
   */
  run(source, filename = '<fratmscript>') {
    // Transpila FratmScript → JavaScript
    const jsCode = this.transpiler.transpile(source);

    // Esegui il JavaScript generato
    return this._execute(jsCode, filename);
  }

  /**
   * Solo transpila senza eseguire.
   * Utile per debug o per generare file .js
   * 
   * @param {string} source - Codice sorgente FratmScript
   * @returns {string} Codice JavaScript
   */
  transpile(source) {
    return this.transpiler.transpile(source);
  }

  /**
   * Transpila un file .frtms e salva il risultato come .js
   * 
   * @param {string} inputPath - Percorso file .frtms
   * @param {string} [outputPath] - Percorso file .js (opzionale)
   * @returns {string} Percorso del file generato
   */
  transpileFile(inputPath, outputPath) {
    const absoluteInput = path.resolve(inputPath);
    
    if (!fs.existsSync(absoluteInput)) {
      throw new Error(`${ERROR_MESSAGES.fileNotFound}${absoluteInput}`);
    }

    const source = fs.readFileSync(absoluteInput, 'utf-8');
    const jsCode = this.transpiler.transpile(source);

    // Se non specificato, usa lo stesso nome con estensione .js
    if (!outputPath) {
      outputPath = absoluteInput.replace(/\.frtms$/, '.js');
    }

    const absoluteOutput = path.resolve(outputPath);
    fs.writeFileSync(absoluteOutput, jsCode, 'utf-8');

    return absoluteOutput;
  }

  /**
   * Esegui codice JavaScript in un contesto sandbox con accesso
   * ai moduli Node.js necessari.
   */
  _execute(jsCode, filename) {
    try {
      // Crea un wrapper per il modulo (come fa Node.js)
      // Smorfia viene iniettata come built-in globale!
      const moduleWrapper = `
        (function(exports, require, module, __filename, __dirname, Smorfia) {
          ${jsCode}
        });
      `;

      // Crea il contesto di esecuzione
      const dirname = path.dirname(filename);
      const moduleObj = { exports: {} };

      // Funzione require custom che risolve i percorsi relativi al file .frtms
      const customRequire = (modulePath) => {
        // Se è un percorso relativo, risolvilo rispetto al file sorgente
        if (modulePath.startsWith('.') || modulePath.startsWith('/')) {
          const resolved = path.resolve(dirname, modulePath);
          // Se il modulo richiesto è un .frtms, transpilalo prima
          if (resolved.endsWith('.frtms') || 
              (fs.existsSync(resolved + '.frtms') && !fs.existsSync(resolved))) {
            const frtmsPath = resolved.endsWith('.frtms') ? resolved : resolved + '.frtms';
            const frtmsSource = fs.readFileSync(frtmsPath, 'utf-8');
            const frtmsJs = this.transpiler.transpile(frtmsSource);
            
            const childModule = { exports: {} };
            const childRequire = (p) => {
              if (p.startsWith('.') || p.startsWith('/')) {
                return require(path.resolve(path.dirname(frtmsPath), p));
              }
              return require(p);
            };
            
            const childFn = vm.runInThisContext(
              `(function(exports, require, module, __filename, __dirname) { ${frtmsJs} });`,
              { filename: frtmsPath }
            );
            childFn(childModule.exports, childRequire, childModule, frtmsPath, path.dirname(frtmsPath));
            return childModule.exports;
          }
          return require(resolved);
        }
        // Moduli Node.js built-in o node_modules
        return require(modulePath);
      };

      // Compila e esegui
      const compiledFn = vm.runInThisContext(moduleWrapper, {
        filename: filename,
        lineOffset: -2, // Offset per il wrapper
      });

      compiledFn(moduleObj.exports, customRequire, moduleObj, filename, dirname, Smorfia);

      return moduleObj.exports;
    } catch (error) {
      // Migliora il messaggio di errore
      if (error instanceof SyntaxError) {
        const enhancedError = new SyntaxError(
          `${ERROR_MESSAGES.syntaxError}${error.message}`
        );
        enhancedError.stack = error.stack;
        throw enhancedError;
      }
      
      if (this.debug) {
        console.error('\n🔴 [DEBUG] Codice JavaScript che ha causato l\'errore:');
        console.error(jsCode);
      }

      const enhancedError = new Error(
        `${ERROR_MESSAGES.runtimeError}${error.message}`
      );
      enhancedError.originalError = error;
      enhancedError.stack = error.stack;
      throw enhancedError;
    }
  }
}

module.exports = FratmScript;
