// Debug test per il transpiler
const FratmTranspiler = require('./src/transpiler');

const t = new FratmTranspiler({ debug: false });

// Test: cosa produce con un semplice commento
const test1 = '// commento\nscerm.scriv("ciao")';
console.log("=== Test 1 ===");
console.log("Input:", JSON.stringify(test1));
console.log("Output:", JSON.stringify(t.transpile(test1)));

// Test: cosa produce con solo un commento
const test2 = '// ============================================';
console.log("\n=== Test 2 ===");
console.log("Input:", JSON.stringify(test2));
console.log("Output:", JSON.stringify(t.transpile(test2)));

// Test: classe.frtms le prime righe
const test3 = `// commento
scerm.scriv("ciao")
famiglia Persona {
  constructor(nome) {
    chest.nome = nome
  }
}`;
console.log("\n=== Test 3 ===");
console.log("Output:", t.transpile(test3));
