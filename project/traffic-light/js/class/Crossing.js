import TrafficLight from "./TrafficLight.js";

export default class Crossing {
  #north;

  #south;

  #west;

  #east;

  #container;

  #step = 0;

  #steps = [
    { duration: 2000, ns: "green", we: "red" },
    { duration: 2000, ns: "yellow", we: "red" },
    { duration: 2000, ns: "red", we: "green" },
    { duration: 2000, ns: "red", we: "yellow" },
  ];

  constructor(shape) {
    this.#north = shape.north ? new TrafficLight("north") : null;
    this.#south = shape.south ? new TrafficLight("south") : null;
    this.#west = shape.west ? new TrafficLight("west") : null;
    this.#east = shape.east ? new TrafficLight("east") : null;

    this.#container = document.getElementById("crossing");

    this.#container.append(
      ...[
        this.#north.container,
        this.#south.container,
        this.#west.container,
        this.#east.container,
      ],
    );
  }

  changeNorthSouthLamp(color) {
    this.#north.changeLamp(color);
    this.#south.changeLamp(color);
  }

  changeEastWestLamp(color) {
    this.#east.changeLamp(color);
    this.#west.changeLamp(color);
  }

  start() {
    this.changeNorthSouthLamp(this.#steps[this.#step].ns);
    this.changeEastWestLamp(this.#steps[this.#step].we);
    setTimeout(() => {
      this.#step = (this.#step + 1) % this.#steps.length;
      this.start();
    }, this.#steps[this.#step].duration);
  }
}
