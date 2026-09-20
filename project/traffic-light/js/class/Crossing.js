import PedestrianLight from './PedestrianLight.js';
import TrafficLight from './TrafficLight.js';
import { CROSSING_STYLE } from '../constants.js';

export default class Crossing {
  static DIRECTION = ['north', 'south', 'west', 'east'];

  #sides = {};

  constructor(shape) {
    Crossing.DIRECTION.filter((direction) => shape[direction]).forEach((direction) => {
      this.#sides[direction] = Crossing.createSideLights(direction);
    });

    document
      .getElementById('crossing')
      .append(
        ...Object.values(this.#sides)
          .map((side) => ([side.traffic, ...side.pedestrians]))
          .flat()
          .map((light) => (light.container)),
      );
    Object.assign(document
      .getElementById('crossing').style, CROSSING_STYLE);

    this.#sides.north.traffic.addEventListener('finish', () => this.startEastWest());
    this.#sides.east.traffic.addEventListener('finish', () => this.startNorthSouth());
  }

  static createSideLights(direction) {
    return {
      traffic: new TrafficLight(direction),
      pedestrians: [
        new PedestrianLight(direction, 'right'),
        new PedestrianLight(direction, 'left'),
      ],
    };
  }

  startNorthSouth() {
    ['north', 'south'].forEach((direction) => {
      this.#sides[direction].traffic.start();
    });
    ['west', 'east'].forEach((direction) => {
      this.#sides[direction].pedestrians.forEach((light) => light.start());
    });
  }

  startEastWest() {
    ['west', 'east'].forEach((direction) => {
      this.#sides[direction].traffic.start();
    });
    ['north', 'south'].forEach((direction) => {
      this.#sides[direction].pedestrians.forEach((light) => light.start());
    });
  }

  start() {
    this.startNorthSouth();
  }
}
