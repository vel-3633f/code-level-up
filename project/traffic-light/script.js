class Light {
  constructor(color) {
    this.color = color;
    this.element = document.createElement("div");
    this.element.classList.add("light");
  }

  on() {
    this.element.classList.add(this.color);
  }
  off() {
    this.element.classList.remove(this.color);
  }
}

class Lights {
  constructor(id) {
    this.container = document.createElement("div");
    this.lights = [];
    this.colors = ["red", "yellow", "green"];

    this.container.classList.add("traffic-light");
    this.container.id = id;

    for (let i = 0; i < this.colors.length; i++) {
      this.lights.push(new Light(this.colors[i]));
      this.container.appendChild(this.lights[i].element);
    }
  }

  change(color) {
    for (let i = 0; i < this.lights.length; i++) {
      if (this.lights[i].color === color) {
        this.lights[i].on();
      } else {
        this.lights[i].off();
      }
    }
  }
}

class Crossing {
  constructor() {
    this.directions = ["north", "south", "west", "east"];
    this.container = document.getElementsByClassName("crossing")[0];
    this.lights = this.directions.map((direction) => {
      return new Lights(direction);
    });

    this.lights.forEach((light) => {
      this.container.appendChild(light.container);
    });

    this.lights.slice(0, 2).forEach((light) => {
      light.change("green");
    });
    this.lights.slice(2).forEach((light) => {
      light.change("red");
    });
  }

  pairChange(color, num) {
    this.lights.slice(num, num + 2).forEach((light) => {
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

new Crossing().start();
