import Lamp from './Lamp.js';
import { TRAFFIC_LIGHT_STYLE, TRAFFIC_POSITION_STYLES } from '../constants.js';

export default class TrafficLight extends EventTarget {
  #container;

  #lamps;

  #sequenceIndex = 0;

  constructor(direction, side) {
    super();
    this.#container = this.createContainerElement(direction, side);
    this.#lamps = this.colors.map((color) => new Lamp(color));
    this.#container.append(...this.#lamps.map((lamp) => lamp.element));
    this.changeLamp(this.colors[0]);
  }

  get container() {
    return this.#container;
  }

  get colors() {
    return ['red', 'yellow', 'green'];
  }

  get sequence() {
    return [
      { color: 'green', duration: 2000 },
      { color: 'yellow', duration: 2000 },
    ];
  }

  createContainerElement(direction, _side) {
    const element = document.createElement('div');
    Object.assign(
      element.style,
      TRAFFIC_LIGHT_STYLE,
      TRAFFIC_POSITION_STYLES[direction],
    );
    return element;
  }

  changeLamp(color, state = Lamp.STATE.ON) {
    this.#lamps.forEach((lamp) => {
      lamp.changeState(lamp.color === color ? state : Lamp.STATE.OFF);
    });
  }

  start() {
    if (this.#sequenceIndex < this.sequence.length) {
      const { color, state, duration } = this.sequence[this.#sequenceIndex];
      this.changeLamp(color, state);
      setTimeout(() => {
        this.#sequenceIndex += 1;
        this.start();
      }, duration);
    } else {
      this.changeLamp(this.colors[0]);
      this.#sequenceIndex = 0;
      this.dispatchEvent(new Event('finish'));
    }
  }
}
