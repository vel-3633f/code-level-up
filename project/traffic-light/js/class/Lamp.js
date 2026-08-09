export default class Lamp {
  #color;
  #element;

  constructor(color) {
    this.#color = color;
    this.#element = Lamp.createElement();
  }

  get color() {
    return this.#color;
  }

  get element() {
    return this.#element;
  }

  static createElement() {
    const element = document.createElement("div");
    element.classList.add("light");
    return element;
  }

  on() {
    this.#element.classList.add(this.#color);
  }
  off() {
    this.#element.classList.remove(this.#color);
  }
}
