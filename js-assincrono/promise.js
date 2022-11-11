function f(g, h) {
  setTimeout(() => {
    if (10 > 0) {
      g("P"); // chamando essa função 'g', o estado da promise muda para 'fulfilled'(resolvida)
    }

    h("Q"); // chamando essa função 'h', o estado da promise muda para 'rejected'(rejeitada)
  }, 3000);
}

// uma promise precisa ter uma função como parametro
// que por sua vez precisa ter outras funções 'g' e 'h'(h é opcional)
const minhaPromise = new Promise(f);

function executarSeResolver(valor) {
  console.log("Resolveu com o valor: " + valor);
}

function executarSeRejeitar(valor) {
  console.log("Rejeitada com o valor: " + valor);
}

//não é muito comum, apenas para fins didáticos
// minhaPromise.then(executarSeResolver);

//execute o teste na promise e chama 'then' ou 'catch'
minhaPromise
  .then((result) => {
    console.log("Resolveu com o valor: " + result);
  })
  .catch((result) => {
    console.log("Rejeitada com o valor: " + result);
  });

// a promise começa em status pending, para depois ir para fulfilled ou rejected
console.log(minhaPromise);
