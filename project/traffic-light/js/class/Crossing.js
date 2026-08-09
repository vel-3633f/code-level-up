import TrafficLight from "./TrafficLight.js";

export default class Crossing {
  #north;
  #south;
  #west;
  #east;
  container;
  #step = 0;
  static #steps = [
    { ns: "green", we: "red", duration: 2000 },
    { ns: "yellow", we: "red", duration: 2000 },
    { ns: "red", we: "green", duration: 2000 },
    { ns: "red", we: "yellow", duration: 2000 },
  ];

  constructor(shape) {
    this.#north = shape.north ? new TrafficLight("north") : null;
    this.#south = shape.south ? new TrafficLight("south") : null;
    this.#west = shape.west ? new TrafficLight("west") : null;
    this.#east = shape.east ? new TrafficLight("east") : null;

    this.container = document.getElementsByClassName("crossing")[0];

    this.container.appendChild(this.#north.container);
    this.container.appendChild(this.#south.container);
    this.container.appendChild(this.#west.container);
    this.container.appendChild(this.#east.container);
  }

  changeNorthSouth(color) {
    this.#north.change(color);
    this.#south.change(color);
  }

  changeEastWest(color) {
    this.#east.change(color);
    this.#west.change(color);
  }

  start() {
    this.changeNorthSouth(Crossing.#steps[this.#step].ns);
    this.changeEastWest(Crossing.#steps[this.#step].we);
    setTimeout(() => {
      this.#step = (this.#step + 1) % 4;
      this.start();
    }, Crossing.#steps[this.#step].duration);
  }
}
