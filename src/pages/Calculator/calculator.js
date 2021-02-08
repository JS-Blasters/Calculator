import { createElement } from "../../utils/createElement";
import {
  createButtonClear,
  createButtonNumber,
} from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createButtonOperator } from "../../components/button/button-operator";
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

//zahlen auf display auslesen
// auf plus = zahl zwischenspeichern
//display leeren
//

export function createCalculator() {
  // display.innerText = "";

  return createElement("div", {
    className: "calc-container",
    children: [
      display,
      displayResult,
      createButtonClear("C"),
      createButtonNumber("+/-"),
      createButtonOperator("%"),
      createButtonNumber("/"),
      createButtonNumber(7),
      createButtonNumber(8),
      createButtonNumber(9),
      createButtonNumber("x"),
      createButtonNumber(4),
      createButtonNumber(5),
      createButtonNumber(6),
      createButtonNumber("-"),
      createButtonNumber(1),
      createButtonNumber(2),
      createButtonNumber(3),
      createButtonNumber("+"),
      createElement("span", {}),
      createButtonNumber(0),
      createButtonNumber("."),
      createButtonOperator("="),
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

/*
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>


*/
