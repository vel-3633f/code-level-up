import { LAMP_OFF_COLOR, LAMP_STYLE } from '../constants.js';

export default class Lamp {
  static STATE = {
    OFF: 'off',
    ON: 'on',
    BLINKING: 'blinking',
  };

  #color;

  #element;

  #state = Lamp.STATE.OFF;

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

  get state() {
    return this.#state;
  }

  static createLampElement() {
    const element = document.createElement('div');
    Object.assign(element.style, LAMP_STYLE);
    return element;
  }

  changeState(state) {
    if (this.state === state) {
      return;
    }
    this.#state = state;

    this.element.getAnimations().forEach((animation) => animation.cancel());

    this.#element.style.backgroundColor = state === Lamp.STATE.ON ? this.#color : LAMP_OFF_COLOR;

    if (state === Lamp.STATE.BLINKING) {
      this.#element.animate([
        { backgroundColor: this.#color, offset: 0 },
        { backgroundColor: this.#color, offset: 0.5 },
        { backgroundColor: LAMP_OFF_COLOR, offset: 0.5 },
        { backgroundColor: LAMP_OFF_COLOR, offset: 1 }], {
        duration: 500,
        iterations: Infinity,
      });
    }
  }
}
