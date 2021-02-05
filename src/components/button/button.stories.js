import "./button.css";
import { createButtonNumber } from "./button-number";
import { createButtonOperator } from "./button-operator";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const buttonnum = () => createButtonNumber();
export const buttonop = () => createButtonOperator();
