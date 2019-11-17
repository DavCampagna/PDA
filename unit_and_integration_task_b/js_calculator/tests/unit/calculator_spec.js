var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  // calculator.numberClick() - concatenate multiple number button clicks:
  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 26);
  })

  // calculator.operatorClick() - chain multiple operations together:
  it('can chain multiple operations together', function(){
    // calculator.runningTotal = 0;
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 2);
  })

  // // calculator.clearClick() - clear the running total without affecting the calculation:
  it('can clear the runningTotal without affecting the calculation', function(){
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  // If you divide by zero, what is the effect?
  it('cannot divide 1 by 0 and will give an output of 0', function(){
    calculator.previousTotal = 6;
    calculator.divide(0);
    assert.equal(calculator.runningTotal, 0);
  })

});
