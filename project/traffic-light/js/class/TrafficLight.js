import Lamp from "./Lamp.js";
import POSITION_STYLES from "../constants.js";

export default class TrafficLight {
  #container;

  #lamps;

  #colors = ["red", "yellow", "green"];

  constructor(direction) {
    this.#container = TrafficLight.createContainerElement(direction);
    this.#lamps = this.#colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lamps.map((light) => light.element));
  }

  get container() {
    return this.#container;
  }

  static createContainerElement(direction) {
    const element = document.createElement("div");
    element.classList.add("traffic-light");
    Object.assign(element.style, POSITION_STYLES[direction]);
    return element;
  }

  changeLamp(color) {
    this.#lamps.forEach((lamp) => {
      if (lamp.color === color) {
        lamp.on();
      } else {
        lamp.off();
      }
    });
  }
}
