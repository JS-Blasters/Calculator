import { createElement } from "../../utils/createElement";
import { result } from "../../pages/Calculator/calculator";

export function createButtonOperator(operator) {
  return createElement("button", {
    className: "btn btn--op",
    innerText: operator,
    onclick: function () {
      result(operator);
    },
  });
}
