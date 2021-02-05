import { createElement } from "../../utils/createElement";
import { createButtonNumber } from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createButtonOperator } from "../../components/button/button-operator";
const display = createDisplay();
export function displayadd(number) {
  display.innerText = Number(display.innerText + number);
}
function add() {
  //zahlen auf display auslesen
  // auf plus = zahl zwischenspeichern
  //display leeren
  //
}
export function createCalculator() {
  // display.innerText = "";

  return createElement("div", {
    className: "calc-container",
    children: [
      display,
      createButtonOperator("C"),
      createButtonOperator("+/-"),
      createButtonOperator("%"),
      createButtonOperator("/"),
      createButtonNumber(7),
      createButtonNumber(8),
      createButtonNumber(9),
      createButtonOperator("x"),
      createButtonNumber(4),
      createButtonNumber(5),
      createButtonNumber(6),
      createButtonOperator("-"),
      createButtonNumber(1),
      createButtonNumber(2),
      createButtonNumber(3),
      createButtonOperator("+"),
      createElement("span", {}),
      createButtonNumber(0),
      createButtonNumber("."),
      createButtonOperator("="),
    ],
  });
}
