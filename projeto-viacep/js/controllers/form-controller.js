import Adress from "../models/address.js";
import * as addressService from "../services/address-service.js";
import * as listController from "../controllers/list-controller.js";

function State() {
  // importado do arquivo address.js
  this.address = new Adress();

  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State();

export function init() {
  state.inputCep = document.forms.newAddress.cep;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;
  state.inputCity = document.forms.newAddress.city;

  state.btnSave = document.forms.newAddress.btnSave;
  state.btnClear = document.forms.newAddress.btnClear;

  state.errorCep = document.querySelector("[data-error='cep']");
  state.errorNumber = document.querySelector("[data-error='number']");

  state.inputNumber.addEventListener("change", handleInputNumberChange);
  state.inputNumber.addEventListener("keyup", handleInputNumberKeyup);
  state.btnClear.addEventListener("click", handleBtnClearClick);
  state.btnSave.addEventListener("click", handleBtnSaveClick);
  state.inputCep.addEventListener("change", handleInputCepChange);
}

function handleInputNumberKeyup(event) {
  state.address.number = event.target.value;
}
function handleInputNumberChange(event) {
  if (event.target.value == "") {
    setFormError("number", "Campo requerido");
  } else {
    setFormError("number", "");
  }
}

function handleBtnSaveClick(event) {
  event.preventDefault();

  const errors = addressService.getErrors(state.address);
  const keys = Object.keys(errors);

  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      setFormError(keys[i], errors[keys[i]]);
    }
  } else {
    listController.addCard(state.address);
    clearForm();
  }
}

async function handleInputCepChange(event) {
  const cep = event.target.value;

  try {
    const address = await addressService.findByCep(cep);

    setFormError("cep", "");
    state.inputNumber.focus();

    state.inputCity.value = address.city;
    state.inputStreet.value = address.street;
    state.address = address;
  } catch (e) {
    state.inputStreet.value = "";
    state.inputCity.value = "";
    setFormError("cep", "Informe um CEP válido");
  }
}

function handleBtnClearClick(event) {
  //evita uma possivel requisição
  event.preventDefault();
  clearForm();
}

function clearForm() {
  state.inputCep.value = "";
  state.inputCity.value = "";
  state.inputNumber.value = "";
  state.inputStreet.value = "";

  setFormError("cep", "");
  setFormError("number", "");

  state.address = new Adress();

  state.inputCep.focus();
}

function setFormError(key, value) {
  const element = document.querySelector(`[data-error='${key}']`);
  element.innerHTML = value;
}
