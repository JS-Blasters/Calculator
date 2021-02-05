import { createElement } from "../../utils/createElement";
import { displayadd } from "../../pages/Calculator/calculator";

export function createButtonNumber(number) {
  return createElement("button", {
    className: "btn--num",
    innerText: number,
    onclick: function () {
      displayadd(number);
      //   display.innerText = number;
    },
  });
}
