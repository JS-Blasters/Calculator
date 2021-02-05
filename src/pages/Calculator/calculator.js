import { createElement } from "../../utils/createElement";
import { createButtonNumber } from "../../components/button/button-number";
import { createDisplay } from "../../components/display/display";
import { createButtonOperator } from "../../components/button/button-operator";

export function createCalculator() {
  return createElement("div", {
    children: [createDisplay(), createButtonNumber(0), createButtonNumber(1)],
  });
}
