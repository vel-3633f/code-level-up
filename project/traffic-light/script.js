class Light {
  constructor() {
    this.color;
  }

  change() {
    const light = document.getElementsByClassName("light");
    this.color = "red";

    const changeColor = () => {
      light[0].style.backgroundColor = "green";
    };

    setTimeout(changeColor, 0);
    setTimeout(changeColor, 1000);
    setTimeout(changeColor, 2000);
  }
}

setInterval(new Light("red").change, 3000);
