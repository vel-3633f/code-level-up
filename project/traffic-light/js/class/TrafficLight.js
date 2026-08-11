import Lamp from "./Lamp.js";
import { POSITIONS } from "../constants.js";

export default class TrafficLight {
  #container;
  #lamps;
  #colors = ["red", "yellow", "green"];
  constructor(direction) {
    this.#container = TrafficLight.createElement(direction);
    this.#lamps = this.#colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lamps.map((light) => light.element));
  }

  get container() {
    return this.#container;
  }

  static createElement(direction) {
    const element = document.createElement("div");
    element.classList.add("traffic-light");
    Object.assign(element.style, POSITIONS[direction]);
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
