const x = 10; // const é um valor final, não pode ser alterado

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;

  console.log("Print dentro do if: ");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Print fora do if: ");
console.log(a); // Imprime normal fora do escopo em estrura de controle
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
