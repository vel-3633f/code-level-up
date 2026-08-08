class Lamp {
  #color;
  element;

  constructor(color) {
    this.#color = color;
    this.element = document.createElement("div");
    this.element.classList.add("light");
  }

  static createList(colors) {
    return colors.map((color) => {
      return new Lamp(color);
    });
  }

  get color() {
    return this.#color;
  }

  on() {
    this.element.classList.add(this.#color);
  }
  off() {
    this.element.classList.remove(this.#color);
  }
}

class TrafficLight {
  container;
  #lights;
  #colors = ["red", "yellow", "green"];

  constructor(id) {
    this.container = document.createElement("div");

    this.container.classList.add("traffic-light");
    this.container.id = id;

    this.#lights = Lamp.createList(this.#colors);

    this.#lights.forEach((light) => {
      this.container.appendChild(light.element);
    });
  }

  change(color) {
    for (let i = 0; i < this.#lights.length; i++) {
      if (this.#lights[i].color === color) {
        this.#lights[i].on();
      } else {
        this.#lights[i].off();
      }
    }
  }
}

class Crossing {
  #north;
  #south;
  #west;
  #east;
  container;

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
    setTimeout(() => {
      this.changeEastWest("yellow");
      this.changeNorthSouth("red");
    }, 2000);
  }
}

new Crossing({ north: true, south: true, west: true, east: true }).start();
