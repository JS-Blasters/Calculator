import { createElement } from "../../utils/createElement";

export function createDisplay() {
  return createElement("div", {
    className: "display",
    innerText: 0,
  });
}
