function State() {
  this.listSection = null;
}

export function init() {
  state.listSection = document.querySelector("#list-section");
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}

const state = new State();

function createCard(address) {
  const div = document.createElement("div");
  div.classList.add("card-list-item");

  const h3 = document.createElement("h3");
  h3.innerHTML = address.city;

  const line = document.createElement("p");
  line.classList.add("address-line");
  line.innerHTML = `${address.street}, ${address.number}`;

  const cep = document.createElement("p");
  cep.classList.add("address-cep");
  cep.innerHTML = address.cep;

  div.appendChild(h3);
  div.appendChild(line);
  div.appendChild(cep);

  return div;
}
/* <div class="card-list-item">
<h3>São Paulo</h3>
<p class="address-line">Rua dos Jardins, 720</p>
<p class="address-cep">11200-345</p>
</div> */
