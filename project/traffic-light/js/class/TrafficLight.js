import Lamp from './Lamp.js';
import { POSITION_STYLES, TRAFFIC_LIGHT_STYLE } from '../constants.js';

export default class TrafficLight extends EventTarget {
  #container;

  #lamps;

  #colors = ['red', 'yellow', 'green'];

  #sequence = [
    { color: 'green', duration: 2000 },
    { color: 'yellow', duration: 2000 },
  ];

  #sequenceIndex = 0;

  constructor(direction) {
    super();
    this.#container = TrafficLight.createContainerElement(direction);
    this.#lamps = this.#colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lamps.map((lamp) => lamp.element));
    this.changeLamp(this.#colors[0]);
  }

  get container() {
    return this.#container;
  }

  static createContainerElement(direction) {
    const element = document.createElement('div');
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

  start() {
    if (this.#sequenceIndex < this.#sequence.length) {
      const { color, duration } = this.#sequence[this.#sequenceIndex];
      this.changeLamp(color);
      setTimeout(() => {
        this.#sequenceIndex += 1;
        this.start();
      }, duration);
    } else {
      this.changeLamp(this.#colors[0]);
      this.#sequenceIndex = 0;
      this.dispatchEvent(new Event('finish'));
    }
  }
}
