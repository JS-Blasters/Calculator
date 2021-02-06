import "./switch.css";
// import { createButtonNumber } from "./button-number";
import { createSwitchFunction } from "./switch";

export default {
  title: "Components/Switch",
  parameters: { layout: "centered" },
};

export const createSwitch = () => createSwitchFunction();

