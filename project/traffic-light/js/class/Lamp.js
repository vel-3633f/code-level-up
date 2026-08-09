export default class Lamp {
  #color;
  element;

  constructor(color) {
    this.#color = color;
    this.element = document.createElement("div");
    this.element.classList.add("light");
  }

  static createList(colors) {
    return colors.map((color) => new Lamp(color));
  }

  get color() {
    return this.#color;
  }

  on() {
    this.element.classList.add(this.#color);
  }
  off() {
    this.element.classList.remove(this.#color);
  }
}
