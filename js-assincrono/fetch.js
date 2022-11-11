// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
// https://www.w3schools.com/js/js_api_fetch.asp

const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  .then((response) => {
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    json
      .then((response) => {
        console.log("SUCESSO NO JSON", response);
      })
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });
