class Light {
  constructor(id) {
    this.divElement = document.createElement("div");

    document.getElementsByClassName("crossing")[0].appendChild(this.divElement);
    this.divElement.classList.add("traffic-light");
    this.divElement.id = id;

    for (let i = 0; i < 3; i++) {
      this.lightDivElement = document.createElement("div");
      this.lightDivElement.classList.add("light");
      this.divElement.appendChild(this.lightDivElement);
    }
  }

  change_red() {}
}

class Lights {}

new Light("north");
