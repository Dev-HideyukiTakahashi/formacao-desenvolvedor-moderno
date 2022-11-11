const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ["MARIA", "JOAO", "ANABELA"];

// ------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original,
// retornando uma nova coleção com os elementos alterados

function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map((x) => x * 2);

console.log("MAP ------------------------");
// [1, 2, 3, 4];
console.log(m1); // [ 2, 4, 6, 8 ]  dobro
console.log(m2); // [ 3, 6, 9, 12 ]  triplo
console.log(m3); // [ 2, 4, 6, 8 ]   dobro com lambda

// ------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas
// aqueles elementos da coleção original que
// satisfazem um dado predicado

function par(x) {
  return x % 2 == 0;
}
// [1, 2, 3, 4];
const f1 = list1.filter(par);
const f2 = list1.filter((x) => x % 2 == 0);
const f3 = list1.filter((x) => x > 2);
lambda;

console.log("FILTER ------------------------");
console.log(f1); // [ 2, 4 ]
console.log(f2); // [ 2, 4 ]  par usando lambda
console.log(f3); // [ 3, 4 ]  maiores que '2' usando

// -------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de
// uma coleção, retornando o resultado final cumulativo.
// * você pode informar, opcionalmente, um valor inicial como
// parâmetro (necessário para coleção vazia).

function soma(x, y) {
  return x + y;
}

function produto(x, y) {
  return x * y;
}
// [1, 2, 3, 4];
const r1 = list1.reduce(soma);
const r2 = list2.reduce(soma, 0); // lista vazia, obrigado a passar o segundo elemento neutro na soma é 0
const r3 = list1.reduce(produto, 1); //elemento neutro opcional, na multiplicação é 1

console.log("REDUCE ------------------------");
console.log(r1); // 10       1+2+3+4
console.log(r2); // 0        lista vazia
console.log(r3); //24        1*2=2  2*3=6  6*4=24

// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação
// informada como parâmetro

function compararPorTamanho(s1, s2) {
  return s1.length - s2.length;
}

console.log("SORT -----------------------------");
// const nomes = ["MARIA", "JOAO", "ANABELA"];
const s1 = nomes.sort();
console.log(s1); // [ 'ANABELA', 'JOAO', 'MARIA' ]

const s2 = [...nomes].sort(compararPorTamanho);
console.log(s2); // [ 'JOAO', 'MARIA', 'ANABELA' ]  compara pelo tamanho de caracteres

const s3 = [...nomes].sort((x, y) => x.length - y.length);
console.log(s3); // [ 'JOAO', 'MARIA', 'ANABELA' ]   igual exemplo acima com lambda
