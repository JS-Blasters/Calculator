import { createElement } from "../../utils/createElement";
import { createButtonNumber } from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createButtonOperator } from "../../components/button/button-operator";

const display = createDisplay();
const displayResult = createDisplay();

let lastKey = "";

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
  display.innerText = display.innerText + number;
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
      createButtonOperator("C"),
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
    ],
  });
}
