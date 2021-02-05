import { createElement } from "../../utils/createElement";

export function createButtonNumber(number) {
  return createElement("button", {
    className: "btn--num",
    innerText: number,
  });
}
