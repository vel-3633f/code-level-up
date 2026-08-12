import { LAMP_OFF_COLOR, LAMP_STYLE } from "../constants.js";

export default class Lamp {
  #color;

  #element;

  constructor(color) {
    this.#color = color;
    this.#element = Lamp.createLampElement();
  }

  get color() {
    return this.#color;
  }

  get element() {
    return this.#element;
  }

  static createLampElement() {
    const element = document.createElement("div");
    Object.assign(element.style, LAMP_STYLE);
    return element;
  }

  on() {
    this.#element.style.backgroundColor = this.#color;
  }

  off() {
    this.#element.style.backgroundColor = LAMP_OFF_COLOR;
  }
}
