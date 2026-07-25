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
  }
}

new Lights();
