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
  // #directions = ["north", "south", "west", "east"];
  #north;
  #south;
  #west;
  #east;
  #lights;
  container;

  constructor(shape) {
    this.#north = shape.north;
    this.#south = shape.south;
    this.#west = shape.west;
    this.#east = shape.east;
    this.container = document.getElementsByClassName("crossing")[0];
    this.#lights = this.#directions.map((direction) => {
      return new TrafficLight(direction);
    });

    this.#lights.forEach((light) => {
      this.container.appendChild(light.container);
    });

    this.#lights.slice(0, 2).forEach((light) => {
      light.change("green");
    });
    this.#lights.slice(2).forEach((light) => {
      light.change("red");
    });
  }

  pairChange(color, num) {
    this.#lights.slice(num, num + 2).forEach((light) => {
      light.change(color);
    });
  }

  start() {
    setTimeout(() => {
      this.pairChange("yellow", 0);
    }, 2000);
    setTimeout(() => {
      this.pairChange("red", 0);
    }, 4000);
    setTimeout(() => {
      this.pairChange("green", 2);
    }, 4000);
    setTimeout(() => {
      this.pairChange("yellow", 2);
    }, 6000);
    setTimeout(() => {
      this.pairChange("red", 2);
    }, 8000);
    setTimeout(() => {
      this.pairChange("green", 0);
      this.start();
    }, 8000);
  }
}

new Crossing({ north: true, south: true, west: true, east: true }).start();
