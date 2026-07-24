class Light {
  constructor() {
    this.color;
    this.lightElement = document.getElementsByClassName("light");
  }

  change() {
    setTimeout(() => {
      this.lightElement[0].style.backgroundColor = "green";
    }, 1000);
    setTimeout(() => {
      this.lightElement[1].style.backgroundColor = "yellow";
      this.lightElement[0].style.backgroundColor = "grey";
    }, 2000);
    setTimeout(() => {
      this.lightElement[2].style.backgroundColor = "red";
      this.lightElement[1].style.backgroundColor = "grey";
    }, 3000);
  }
}

new Light("red").change();
