// melhorando o fetch

const cep = "01001000";
const path = `https://viacep.com.br/ws/${cep}/json/`;

async function getJsonResponse(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

getJsonResponse(path).then((result) => {
  console.log(result);
});

// console.log não é um método assincrono
async function showData(cep) {
  const json = await getJsonResponse(path);
  console.log(json);
}
showData("01001000");
