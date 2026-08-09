import Lamp from "./Lamp.js";
import { POSITIONS } from "../constants.js";

export default class TrafficLight {
  #container;
  #lights;
  #colors = ["red", "yellow", "green"];
  constructor(direction) {
    this.#container = TrafficLight.createElement(direction);
    this.#lights = this.#colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lights.map((light) => light.element));
  }

  get container() {
    return this.#container;
  }
  get colors() {
    return this.#colors;
  }

  static createElement(direction) {
    const element = document.createElement("div");
    element.classList.add("traffic-light");
    Object.assign(element.style, POSITIONS[direction]);
    return element;
  }

  changeLight(color) {
    this.#lights.forEach((light) => {
      if (light.color === color) {
        light.on();
      } else {
        light.off();
      }
    });
  }
}
