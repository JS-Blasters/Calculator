import { createElement } from "../../utils/createElement";
import { createButtonNumber } from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createButtonOperator } from "../../components/button/button-operator";

export function createCalculator() {
  return createElement("div", {
    className: "calc-container",
    children: [
      createDisplay(),
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
