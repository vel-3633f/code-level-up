class Light {
  constructor() {
    this.color;
    this.eastElement = document.getElementById("east").children;
    this.westElement = document.getElementById("west").children;;
    this.northElement = document.getElementById("north").children;;
    this.southElement = document.getElementById("south").children;;
  }

  change() {
    setTimeout(() => {
      this.eastElement[0].style.backgroundColor = "green";
    }, 1000);
    setTimeout(() => {
      this.eastElement[1].style.backgroundColor = "yellow";
      this.eastElement[0].style.backgroundColor = "grey";
    }, 2000);
    setTimeout(() => {
      this.eastElement[2].style.backgroundColor = "red";
      this.eastElement[1].style.backgroundColor = "grey";
    }, 3000);
  }
}

new Light().change();
