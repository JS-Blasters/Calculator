import { createElement } from "../../utils/createElement";
import { displayadd } from "../../pages/Calculator/calculator";
import { reset } from "../../pages/Calculator/calculator";
import { result } from "../../pages/Calculator/calculator";

export function createButtonNumber(number) {
  return createElement("button", {
    className: "btn",
    innerText: number,
    onclick: function () {
      displayadd(number);
    },
  });
}

export function createButtonClear(number) {
  return createElement("button", {
    className: "btn",
    innerText: number,
    onclick: function () {
      reset();
    },
  });
}

export function createButtonEqual(operator) {
  return createElement("button", {
    className: "btn",
    innerText: operator,
    onclick: function () {
      result(operator);
    },
  });
}
