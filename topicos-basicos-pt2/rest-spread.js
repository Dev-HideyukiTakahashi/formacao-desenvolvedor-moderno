// REST: valores passados com virgula são convertidos em array

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1); // 20    converteu todos param em um array

const result2 = Math.max(2, 3, 10, 5);

console.log(result2); // 10  converteu todos param em um array e retornou o maior valor

// SPREAD: converte um array em valores separados por virgula

const result3 = Math.max(4, 7, 2);

console.log(result3); // 7

const myNumbers = [2, 3, 10, 5];
//const result4 = Math.max(myNumbers); // Nao funciona
const result4 = Math.max(...myNumbers); // convertou o array myNumbers em (2, 3, 10, 5) e trouxe o maior valor
console.log(result4); // 10

// SPREAD: objeto => membros separados por virgula

const item = {
  description: "Celular",
  price: 1499.99,
  quantity: 1,
};

const obj = item; // dessa forma o obj apenas aponta para mesma referência de item
const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 }; // clonou e acrescentou outro atributo no obj
