// ============================================
// FratmScript - Transpiler
// Traduce FratmScript → JavaScript
// ============================================

const { KEYWORDS, BUILTINS, SPECIAL_COMBINATIONS } = require('./keywords');

/**
 * Classe principale del transpiler FratmScript.
 * 
 * Prende codice sorgente FratmScript (.frtms) e lo traduce
 * in JavaScript valido che può essere eseguito da Node.js.
 */
class FratmTranspiler {
  constructor(options = {}) {
    this.debug = options.debug || false;
    this.sourceMap = options.sourceMap || false;
    
    // Caratteri Unicode che consideriamo parte di una "parola"
    // Include lettere accentate napoletane (à, è, ò, ù, ì, ecc.)
    this.WORD_CHAR = '[a-zA-Z0-9_$\\u00C0-\\u024F]';
    this.NOT_WORD_CHAR_BEFORE = `(?<![a-zA-Z0-9_$\\u00C0-\\u024F])`;
    this.NOT_WORD_CHAR_AFTER = `(?![a-zA-Z0-9_$\\u00C0-\\u024F])`;
    
    // Costruisce le regex per le sostituzioni
    this._buildReplacementMaps();
  }

  /**
   * Crea un pattern regex con word boundary Unicode-aware.
   * \b non funziona con caratteri accentati in JS, quindi usiamo
   * lookbehind/lookahead negativi.
   */
  _wordBoundary(pattern) {
    return `${this.NOT_WORD_CHAR_BEFORE}${pattern}${this.NOT_WORD_CHAR_AFTER}`;
  }

  /**
   * Costruisce le mappe di sostituzione ordinate per lunghezza (più lunghe prima)
   * per evitare conflitti tra keyword parziali.
   */
  _buildReplacementMaps() {
    // Combinazioni speciali (devono essere processate PRIMA delle keyword singole)
    this.specialCombinations = Object.entries(SPECIAL_COMBINATIONS)
      .sort((a, b) => b[0].length - a[0].length); // Più lunghe prima

    // Keywords ordinate per lunghezza decrescente
    this.keywords = Object.entries(KEYWORDS)
      .sort((a, b) => b[0].length - a[0].length);

    // Built-ins ordinate per lunghezza decrescente  
    this.builtins = Object.entries(BUILTINS)
      .sort((a, b) => b[0].length - a[0].length);
  }

  /**
   * Transpila codice FratmScript in JavaScript.
   * 
   * @param {string} source - Codice sorgente FratmScript
   * @returns {string} Codice JavaScript equivalente
   */
  transpile(source) {
    if (this.debug) {
      console.log('\n🔧 [DEBUG] Sorgente FratmScript originale:');
      console.log(source);
      console.log('---');
    }

    // Step 1: Tokenizza il sorgente in segmenti (stringhe, commenti, codice)
    const tokens = this._tokenize(source);

    // Step 2: Sostituisci le keyword solo nei segmenti di codice
    const translated = tokens.map(token => {
      if (token.type === 'code') {
        return this._translateCode(token.value);
      }
      return token.value; // Stringhe e commenti non vengono toccati
    }).join('');

    if (this.debug) {
      console.log('\n🔧 [DEBUG] JavaScript generato:');
      console.log(translated);
      console.log('---');
    }

    return translated;
  }

  /**
   * Tokenizza il sorgente separando stringhe, template literals,
   * commenti e codice effettivo.
   */
  _tokenize(source) {
    const tokens = [];
    let i = 0;
    let currentCode = '';

    while (i < source.length) {
      // Commento single-line: //
      if (source[i] === '/' && source[i + 1] === '/') {
        if (currentCode) {
          tokens.push({ type: 'code', value: currentCode });
          currentCode = '';
        }
        let comment = '';
        while (i < source.length && source[i] !== '\n') {
          comment += source[i];
          i++;
        }
        tokens.push({ type: 'comment', value: comment });
        continue;
      }

      // Commento multi-line: /* ... */
      if (source[i] === '/' && source[i + 1] === '*') {
        if (currentCode) {
          tokens.push({ type: 'code', value: currentCode });
          currentCode = '';
        }
        let comment = '/*';
        i += 2;
        while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) {
          comment += source[i];
          i++;
        }
        if (i < source.length) {
          comment += '*/';
          i += 2;
        }
        tokens.push({ type: 'comment', value: comment });
        continue;
      }

      // Template literal: `...`
      if (source[i] === '`') {
        if (currentCode) {
          tokens.push({ type: 'code', value: currentCode });
          currentCode = '';
        }
        let str = '`';
        i++;
        while (i < source.length && source[i] !== '`') {
          if (source[i] === '\\') {
            str += source[i] + (source[i + 1] || '');
            i += 2;
            continue;
          }
          // Gestisci ${...} dentro template literals - transpila il contenuto
          if (source[i] === '$' && source[i + 1] === '{') {
            str += '${';
            i += 2;
            let braceDepth = 1;
            let exprCode = '';
            while (i < source.length && braceDepth > 0) {
              if (source[i] === '{') braceDepth++;
              if (source[i] === '}') braceDepth--;
              if (braceDepth > 0) {
                exprCode += source[i];
              }
              i++;
            }
            // Transpila l'espressione dentro ${}
            str += this._translateCode(exprCode) + '}';
            continue;
          }
          str += source[i];
          i++;
        }
        if (i < source.length) {
          str += '`';
          i++;
        }
        tokens.push({ type: 'string', value: str });
        continue;
      }

      // Stringhe con apici singoli o doppi
      if (source[i] === '"' || source[i] === "'") {
        if (currentCode) {
          tokens.push({ type: 'code', value: currentCode });
          currentCode = '';
        }
        const quote = source[i];
        let str = quote;
        i++;
        while (i < source.length && source[i] !== quote) {
          if (source[i] === '\\') {
            str += source[i] + (source[i + 1] || '');
            i += 2;
            continue;
          }
          str += source[i];
          i++;
        }
        if (i < source.length) {
          str += quote;
          i++;
        }
        tokens.push({ type: 'string', value: str });
        continue;
      }

      // Regex literals /pattern/flags
      if (source[i] === '/' && this._isRegexStart(source, i, currentCode)) {
        if (currentCode) {
          tokens.push({ type: 'code', value: currentCode });
          currentCode = '';
        }
        let regex = '/';
        i++;
        while (i < source.length && source[i] !== '/') {
          if (source[i] === '\\') {
            regex += source[i] + (source[i + 1] || '');
            i += 2;
            continue;
          }
          regex += source[i];
          i++;
        }
        if (i < source.length) {
          regex += '/';
          i++;
          // Flags
          while (i < source.length && /[gimsuy]/.test(source[i])) {
            regex += source[i];
            i++;
          }
        }
        tokens.push({ type: 'regex', value: regex });
        continue;
      }

      // Codice normale
      currentCode += source[i];
      i++;
    }

    if (currentCode) {
      tokens.push({ type: 'code', value: currentCode });
    }

    return tokens;
  }

  /**
   * Determina se un '/' è l'inizio di una regex literal
   * (e non una divisione o un commento).
   */
  _isRegexStart(source, pos, precedingCode) {
    // Se c'è codice precedente, controlla l'ultimo carattere significativo
    const trimmed = precedingCode.trimEnd();
    if (!trimmed) return true;
    
    const lastChar = trimmed[trimmed.length - 1];
    // Dopo questi caratteri, '/' è probabilmente un operatore di divisione
    const divisionChars = '0123456789)].';
    // Dopo identificatori (variabili, etc.) è divisione
    if (/[a-zA-Z0-9_$]/.test(lastChar) && !divisionChars.includes(lastChar)) {
      // Potrebbe essere una keyword seguita da regex
      const lastWord = trimmed.match(/[a-zA-Z_$][a-zA-Z0-9_$]*$/);
      if (lastWord) {
        const regexKeywords = ['return', 'torna', 'case', 'quann', 'typeof', 'ch_è',
                               'instanceof', 'è_tipo', 'in', 'dint', 'delete', 'leva',
                               'void', 'vuot', 'throw', 'jett', 'new', 'nuov'];
        if (regexKeywords.includes(lastWord[0])) return true;
      }
      return false;
    }
    if (divisionChars.includes(lastChar)) return false;
    
    return true;
  }

  /**
   * Crea una regex per una keyword usando word boundary Unicode-aware.
   */
  _makeKeywordRegex(keyword) {
    const escaped = this._escapeRegex(keyword);
    // Se la keyword contiene caratteri Unicode (accentati), usa i custom boundaries
    const hasUnicode = /[^\x00-\x7F]/.test(keyword);
    if (hasUnicode) {
      return new RegExp(this._wordBoundary(escaped), 'g');
    }
    // Per keyword ASCII pure, \b funziona bene
    return new RegExp(`\\b${escaped}\\b`, 'g');
  }

  /**
   * Traduce un segmento di codice FratmScript in JavaScript.
   * Questa è la funzione core del transpiler.
   * 
   * Usa un sistema a placeholder: le combinazioni speciali vengono 
   * prima sostituite con placeholder unici, così le keyword/builtins
   * non possono corrompere il risultato. Alla fine i placeholder
   * vengono rimpiazzati con i valori JavaScript finali.
   */
  _translateCode(code) {
    let result = code;
    
    // Mappa placeholder → valore JavaScript finale
    const placeholders = new Map();
    let placeholderIndex = 0;

    // Step 1: Sostituisci combinazioni speciali con PLACEHOLDER
    // (così keyword/builtins non toccano parti già tradotte)
    for (const [fratm, js] of this.specialCombinations) {
      const regex = this._makeKeywordRegex(fratm);
      result = result.replace(regex, () => {
        const ph = `\x00PH${placeholderIndex++}\x00`;
        placeholders.set(ph, js);
        return ph;
      });
    }

    // Step 2: Sostituisci keyword principali
    for (const [fratm, js] of this.keywords) {
      // Per keyword molto corte o speciali, usiamo regole più restrittive
      if (fratm === 'e' || fratm === 'no' || fratm === 'fa') {
        if (fratm === 'e') {
          // Sostituisci 'e' solo quando è usato come "of" in for-of loops
          result = result.replace(/\b(pe\s*\([^)]*)\be\b/g, '$1of');
          result = result.replace(/\b(for\s*\([^)]*)\be\b/g, '$1of');
        } else if (fratm === 'fa') {
          result = result.replace(/\bfa\s*\{/g, 'do {');
          result = result.replace(/\bfa\s*$/gm, 'do');
        } else if (fratm === 'no') {
          result = result.replace(/\bno\s*\(/g, '!(');
          result = result.replace(/\bno\s+([a-zA-Z_$])/g, '!$1');
        }
        continue;
      }

      const regex = this._makeKeywordRegex(fratm);
      result = result.replace(regex, js);
    }

    // Step 3: Sostituisci built-in
    for (const [fratm, js] of this.builtins) {
      // Salta keyword di 1 solo carattere ASCII che creerebbero conflitti
      // Ma keyword con caratteri accentati (es: pò) sono sicure anche se corte
      const hasUnicode = /[^\x00-\x7F]/.test(fratm);
      if (!hasUnicode && fratm.length < 3) continue;
      
      const regex = this._makeKeywordRegex(fratm);
      result = result.replace(regex, js);
    }

    // Step 4: Ripristina i placeholder con i valori JavaScript finali
    for (const [ph, js] of placeholders) {
      result = result.split(ph).join(js);
    }

    return result;
  }

  /**
   * Escape caratteri speciali per regex.
   */
  _escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Genera una source map semplice (riga per riga).
   */
  generateSourceMap(source, transpiled) {
    const sourceLines = source.split('\n');
    const transpiledLines = transpiled.split('\n');
    
    return {
      version: 3,
      sources: ['input.frtms'],
      mappings: sourceLines.map((_, i) => ({
        original: i + 1,
        generated: i + 1,
      })),
    };
  }
}

module.exports = FratmTranspiler;
