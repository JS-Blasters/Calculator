import "./calculator.css";
import { createCalculator } from "./calculator";

export default {
  title: "Components/Calculator",
  parameters: { layout: "centered" },
};

export const calculator = () => createCalculator();
