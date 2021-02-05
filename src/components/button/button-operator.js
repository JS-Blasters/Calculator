import { createElement } from "../../utils/createElement";

export function createButtonOperator() {
  return createElement("button", {
    className: "btn--op",
    innerText: "+",
  });
}
