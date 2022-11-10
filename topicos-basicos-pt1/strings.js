console.log("Um string literal pode ficar entre aspas duplas");
console.log("Um string literal pode ficar entre aspas simples");
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
const str1 = num.toString(); // converte 14.5 para String
console.log(`Tipo de ${str1}: ${typeof str1}`); // out: Tipo de 14.5: string

const str2 = num.toFixed(2); // toFixed(param) define o número de casas decimais
console.log(`Tipo de ${str2}: ${typeof str2}`); // Tipo de 14.50: string

const num1 = Number("14.5"); // converte String para número
console.log(`Tipo de ${num1}: ${typeof num1}`); // Tipo de 14.5: number

const num2 = parseInt("21", 10); // converte String para número e o segundo argumento pode ser a base
console.log(`Tipo de ${num2}: ${typeof num2}`); // Tipo de 21: number

const num3 = parseInt("21", 16); // base hexadecimal
console.log(`Tipo de ${num3}: ${typeof num3}`); // Tipo de 33: number

const num4 = parseFloat("21.34", 10); // conversão em float com base 10
console.log(`Tipo de ${num4}: ${typeof num4}`); // Tipo de 21.34: number

console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`); // const str = "Maria Silva  "

console.log(`toLowerCase: ${str.toLowerCase()}`); // toLowerCase: maria silva
console.log(`toUpperCase: ${str.toUpperCase()}`); // toUpperCase: MARIA SILVA
console.log(`charAt: ${str.charAt(3)}`); // charAt: i
console.log(`replace (primeiro): ${str.replace("i", "$")}`); // replace (primeiro): Mar$a Silva
console.log(`replace (todos): ${str.replace(/i/g, "$")}`); // replace (todos): Mar$a S$lva
console.log(`length: ${str.length}`); // length: 13
console.log(`indexOf: ${str.indexOf("i")}`); // indexOf: 3
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`); // lastIndexOf: 7
console.log(`subtring: ${str.substring(3, 8)}`); // subtring: ia Si
console.log(`trim: ${str.trim()}`); // trim: Maria Silva (removeu o espaço em branco)
