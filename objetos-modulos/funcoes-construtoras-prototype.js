const p1 = {
  name: "Computador",
  price: 3000.0,
  quantity: 2,
};

// Boa prática: defina propriedades dentro do construtor, e métodos no prototype.

// função construtora de um produto
// propriedades
const Product = function (name, price, quantity) {
  (this.name = name), (this.price = price), (this.quantity = quantity);
};

// métodos
Product.prototype.total = function () {
  return this.price * this.quantity;
};

const p2 = new Product("Monitor", 800.0, 10);
const p3 = new Product("Mouse", 50.0, 4);

console.log(p2.total()); // 8000

Product.prototype.add = function (amount) {
  this.quantity = this.quantity + amount;
};

Product.prototype.remove = function (amount) {
  if (this.quantity >= amount) {
    this.quantity = this.quantity - amomunt;
  }
};

Product.prototype.label = function () {
  return "Dados: " + this.name + ", " + this.price;
};

console.log(p2.add(200)); // tinha 10 e adicionou 200
console.log(p2.quantity); // 210

console.log(p2.label()); // Dados: Monitor, 800
