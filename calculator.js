class Calculator {
  constructor(param1) {
    this.param1 = param1;
    // this.param2 = param2;
    // this.pi = 3.14;
  }
  
  add(param2) {
    this.param1 += param2;
    return this;
  }
  
  substract(param2) {
    this.param1 -= param2;
    return this;
  }
  
  multiply(param2) {
    this.param1 *= param2;
    return this;
  }
  
  divide(param2) {
    this.param1 /= param2;
    return this;
  }
  
  square() {
    (this.param1)**=2;
    return this;
  }
  
  squareRoot() {
    Math.sqrt(this.param1);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

module.exports = Calculator;
