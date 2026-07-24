class Light {
  constructor() {
    this.color;
  }

  change() {
    this.color = "red";

    console.log(this.color);
  }
}

new Light("red").change();
