import { createElement } from "../../utils/createElement";

export function createButtonOperator(operator) {
  return createElement("button", {
    className: "btn--op",
    innerText: operator,
    onclick: function () {
      alert("+");
    },
  });
}
