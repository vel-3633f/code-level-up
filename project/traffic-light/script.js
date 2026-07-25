class Light {
  constructor(id) {
    this.divElement = document.createElement("div");
    this.light = [];
    this.colors = ["red", "yellow", "green"];

    document.getElementsByClassName("crossing")[0].appendChild(this.divElement);
    this.divElement.classList.add("traffic-light");
    this.divElement.id = id;

    for (let i = 0; i < 3; i++) {
      this.lightDivElement = document.createElement("div");
      this.lightDivElement.classList.add("light");
      this.light.push(this.divElement.appendChild(this.lightDivElement));
    }
  }

  change(color) {
    this.light.forEach((value) => {
      value.classList.remove(...this.colors);
    });

    this.light[this.colors.indexOf(color)].classList.add(color);
  }
}

class Lights {
  constructor() {
    this.directions = ["north", "south", "west", "east"];
    this.lights = this.directions.map((direction) => {
      return new Light(direction);
    });

    this.lights.slice(0, 2).forEach((light) => {
      light.change("green");
    });
    this.lights.slice(2).forEach((light) => {
      light.change("red");
    });
  }

  start() {
    setTimeout(() => {
      this.lights.slice(0, 2).forEach((light) => {
        light.change("yellow");
      });
    }, 2000);
    setTimeout(() => {
      this.lights.slice(0, 2).forEach((light) => {
        light.change("red");
      });
    }, 4000);
    setTimeout(() => {
      this.lights.slice(2).forEach((light) => {
        light.change("green");
      });
    }, 4000);
    setTimeout(() => {
      this.lights.slice(2).forEach((light) => {
        light.change("yellow");
      });
    }, 6000);
    setTimeout(() => {
      this.lights.slice(2).forEach((light) => {
        light.change("red");
      });
    }, 8000);
    setTimeout(() => {
      this.lights.slice(0,2).forEach((light) => {
        light.change("green");
      });
    }, 8000);
  }
}

new Lights().start();
