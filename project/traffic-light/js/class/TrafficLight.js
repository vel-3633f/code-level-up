import Lamp from "./Lamp.js";

export default class TrafficLight {
  container;
  #lights;
  #colors = ["red", "yellow", "green"];

  constructor(id) {
    this.container = document.createElement("div");

    this.container.classList.add("traffic-light");
    this.container.id = id;

    this.#lights = Lamp.createList(this.#colors);

    this.#lights.forEach((light) => {
      this.container.appendChild(light.element);
    });
  }

  change(color) {
    for (let i = 0; i < this.#lights.length; i++) {
      if (this.#lights[i].color === color) {
        this.#lights[i].on();
      } else {
        this.#lights[i].off();
      }
    }
  }
}
