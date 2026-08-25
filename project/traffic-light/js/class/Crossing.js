import TrafficLight from './TrafficLight.js';
import { CROSSING_STYLE } from '../constants.js';

export default class Crossing {
  #north;

  #south;

  #west;

  #east;

  constructor(shape) {
    this.#north = shape.north ? new TrafficLight('north') : undefined;
    this.#south = shape.south ? new TrafficLight('south') : undefined;
    this.#west = shape.west ? new TrafficLight('west') : undefined;
    this.#east = shape.east ? new TrafficLight('east') : undefined;

    document
      .getElementById('crossing')
      .append(
        ...[
          this.#north.container,
          this.#south.container,
          this.#west.container,
          this.#east.container,
        ],

      );
    Object.assign(document
      .getElementById('crossing').style, CROSSING_STYLE);

    this.#north.addEventListener('finish', () => this.startEastWest());
    this.#east.addEventListener('finish', () => this.startNorthSouth());
  }

  startNorthSouth() {
    this.#south.start();
    this.#north.start();
  }

  startEastWest() {
    this.#west.start();
    this.#east.start();
  }

  start() {
    this.startNorthSouth();
  }
}
