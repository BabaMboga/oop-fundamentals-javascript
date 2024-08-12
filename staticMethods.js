class CommonMath {
    static triple(number) {
      return number * number * number;
    }
  // notice the use of static
    static findHypotenuse(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }


  const num = CommonMath.triple(3);
  console.log(num);
  const c = CommonMath.findHypotenuse(3, 4);
  console.log(c);