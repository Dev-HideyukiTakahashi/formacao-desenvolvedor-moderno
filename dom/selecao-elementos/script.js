// items ---------------
const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML); // Item 1 (conteúdo html dentro de li)
console.log(item1.outerHTML); // <li>Item 1</li> (todo conteúdo html)

const items = document.querySelectorAll("li");
console.log(items);

// cards ---------------
const card1 = document.querySelector(".card");

console.log(card1);

// adicionando tag a uma div
const paragrafo = document.createElement("p"); // criando um elemento <p>
paragrafo.innerHTML = "Descrição"; // <p>Descrição</p>
card1.appendChild(paragrafo); // adicionando a tag p dentro da div card1

// manipulando css
card1.classList.add("super-border"); // adicionando a classe de borda vermelha

const cards = document.querySelectorAll(".card");
console.log(cards);

// o queryselector retorna um nodeList(não é array)
// convertendo para array
Array.from(cards).map((item) => {
  console.log(item.innerHTML);
});
