import TrafficLight from './TrafficLight.js';
import { CROSSING_STYLE } from '../constants.js';

export default class Crossing {
  #north;

  #south;

  #west;

  #east;

  constructor(shape) {
    this.#north = shape.north ? new TrafficLight('north') : null;
    this.#south = shape.south ? new TrafficLight('south') : null;
    this.#west = shape.west ? new TrafficLight('west') : null;
    this.#east = shape.east ? new TrafficLight('east') : null;

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
  }

  startNorthSouth(onFinish) {
    this.#south.start(() => {});
    this.#north.start(onFinish);
  }

  startEastWest(onFinish) {
    this.#west.start(() => {});
    this.#east.start(onFinish);
  }

  start() {
    this.startNorthSouth(() => {
      this.startEastWest(() => {
        this.start();
      });
    });
  }
}
