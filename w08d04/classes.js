// const Rectangle = class {};
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(2, 3);
console.log(myRectangle.area());

class RectangularPrism extends Rectangle {
  constructor(width, height, length) {
    super(width, height);
    this.length = length;
  }

  volume() {
    return this.area() * this.length;
  }
}

const myRectangularPrism = new RectangularPrism(3, 5, 7);

console.log(myRectangularPrism.volume());

const volume = myRectangularPrism.volume;
volume();
