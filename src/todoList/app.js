import { version } from "babel-core";

const formElement = document
  .querySelector('#form');

const inputElement = document
  .querySelector('#task');

const ulElement = document
  .querySelector('#tasks');

function onInputChange(event) {
  console.log(event.target.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) { return; }
  const liElement = createElement('li', value);
  ulElement.appendChild(liElement);
  inputElement.value = '';
}

function createElement(elementName, elementText) {
  const newElement = document
    .createElement(elementName);
  newElement.innerText = elementText;
  return newElement;
}

var ele = document.querySelector("#two");
ele.style.textDecoration ="line-through";

var ele = document.querySelector("#three");
ele.style.textDecoration ="line-through";



var ele = document.getElementById("two");
ele.style.setProperty("text-decoration", "line-through");

inputElement
  .addEventListener('input', onInputChange);


formElement
  .addEventListener('submit', onFormSubmit);

