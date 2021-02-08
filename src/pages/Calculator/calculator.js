import { createElement } from "../../utils/createElement";
import {
  createButtonClear,
  createButtonNumber,
  createButtonEqual,
  createButtonsNumber,
} from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createSwitchFunction } from "../../components/switch/switch";

const display = createDisplay();
const displayResult = createDisplay();

let lastKey = "";

// /*
// Quelle: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// */

// // console.log(lastNumberPlusMinusToggle('5+3+-3566'));
// // console.log(lastNumberPlusMinusToggle('5+3+3566'));

// // let str = '5+3+-3566';
// // let str = '5+3*-3566';

// function lastNumberPlusMinusToggle (str) {
// str = str.split("").reverse().join("") ;
// str = str.replace(/(\d*)([-\\*\\+\\/]*)/, (m,p1,p2) => p1 + ((p2.length === 2 && p2[0] === '-' ) ? '' + p2[1] : '-' + p2[0]));
// str = str.split("").reverse().join("") ;
// return str;
// }

function toggleBtnLable(id) {
  const status = document.getElementById(id).checked;
  const elements = document.getElementsByClassName("btn");
  elements.forEach(
    (element) =>
      (element.style = status ? "color: var(--bg-btn-font-color)" : null)
  );
}

export function reset() {
  display.innerText = "0";
  displayResult.innerText = "0";
}
export function result(value) {
  if (value === "=") {
    display.innerText = displayResult.innerText;
    displayResult.innerText = "";
  }
  lastKey = value;
}

export function displayadd(number) {
  if (display.innerText === "0") {
    display.innerText = "";
  } else if (number === "x") {
    number = "*";
  } else if (lastKey === "=") {
    display.innerText = "";
    lastKey = number;
  }
  display.innerText += number;
  displayResult.innerText = evaluate(display.innerText);
}

function evaluate(str) {
  str = str.replace(/[^\d+-.\\/\\*]*/g, "");
  return eval(str);
}

export function createCalculator() {
  return createElement("div", {
    className: "calc-container",
    children: [
      display,
      displayResult,
      createButtonClear("C"),
      createButtonNumber("+/-"),
      createButtonClear("%"),
      createButtonNumber("/"),
      ...createButtonsNumber([7, 8, 9]),
      createButtonNumber("x"),
      ...createButtonsNumber([4, 5, 6]),
      createButtonNumber("-"),
      ...createButtonsNumber([1, 2, 3]),
      createButtonNumber("+"),
      createElement("span", {}),
      createButtonNumber(0),
      createButtonNumber("."),
      createButtonEqual("="),
      createElement("div", {
        className: "themeSwitchContainer",
        onclick: () => toggleBtnLable("themeToggle"),
        children: [
          createElement("span", {
            className: "regular-img",
            innerText: " ",
          }),
          createSwitchFunction("themeToggle"),
          createElement("span", {
            className: "leon-img",
            innerText: " ",
          }),
        ],
      }),
    ],
  });
}
