import "./display.css";
import { createDisplay } from "./display";

export default {
  title: "Components/Display",
  parameters: { layout: "centered" },
};

export const display = () => createDisplay();
