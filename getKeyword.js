// class Square {
//     constructor(sideLength) {
//       this.sideLength = sideLength;
//     }
  
//     get area() {
//       return this.sideLength * this.sideLength;
//     }
//   }


// const square = new Square(5);
// console.log(square.sideLength);
// console.log(square.area);

class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
      // assume the below is an expensive calculation
      this.area = sideLength * sideLength;
    }
  }

const square = new Square(5);
console.log(square.sideLength);
console.log(square.area);