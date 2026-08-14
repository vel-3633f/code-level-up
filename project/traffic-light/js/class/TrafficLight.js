import Lamp from './Lamp.js';
import { POSITION_STYLES, TRAFFIC_LIGHT_STYLE } from '../constants.js';

export default class TrafficLight {
  #container;

  #lamps;

  #colors = ['red', 'yellow', 'green'];

  constructor(direction) {
    this.#container = TrafficLight.createContainerElement(direction);
    this.#lamps = this.#colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lamps.map((lamp) => lamp.element));
  }

  get container() {
    return this.#container;
  }

  static createContainerElement(direction) {
    const element = document.createElement('div');
    element.classList.add('traffic-light');
    Object.assign(
      element.style,
      TRAFFIC_LIGHT_STYLE,
      POSITION_STYLES[direction],
    );
    return element;
  }

  changeLamp(color) {
    this.#lamps
      .filter((lamp) => lamp.color === color)
      .forEach((lamp) => lamp.on());
    this.#lamps
      .filter((lamp) => lamp.color !== color)
      .forEach((lamp) => lamp.off());
  }
}
