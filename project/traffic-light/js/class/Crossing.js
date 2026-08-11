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

  changeNorthSouthLight(color) {
    this.#north.changeLight(color);
    this.#south.changeLight(color);
  }

  changeEastWestLight(color) {
    this.#east.changeLight(color);
    this.#west.changeLight(color);
  }

  start() {
    this.changeNorthSouthLight(this.#steps[this.#step].ns);
    this.changeEastWestLight(this.#steps[this.#step].we);
    setTimeout(() => {
      this.#step = (this.#step + 1) % this.#steps.length;
      this.start();
    }, this.#steps[this.#step].duration);
  }
}
