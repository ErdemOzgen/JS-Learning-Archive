/*
A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:


*/


const square = function(x) {
    return x * x;
  };
  
  console.log(square(12));
  // → 144

const makeNoise = function(){
    console.log("Pling!")
}

makeNoise()

const power = function(base,exponent){
    let result = 1;
    for( let count =0 ; count < exponent ; count++){
        result *=base;
    }

    return result;
};


console.log(power(2,90));



let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}

// y is not visible here
console.log(x + z);
// → 40

const halve = function(n) {
    return n / 2;
  };
  
  let n = 10;
  console.log(halve(100));
  // → 50
  console.log(n);
  // → 10

  const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  let safeMode=false;
  let launchMissiles = function() {
    missileSystem.launch("now");
  };
  if (safeMode) {
    launchMissiles = function() {/* do nothing */};
  }


/*
  function square(x) {
    return x * x;
  }
*/

  console.log("The future says:", future());

  function future() {
    return "You'll never have flying cars";
  }



  const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

//Optional Arguments
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));


function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5


  function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }



  function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2


function multiplier(factor) {
    return number => number * factor;
 }
  
  let twice = multiplier(2);
  console.log(twice(5));
  // → 10



  function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // → 8

  function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));
  // → (((1 * 3) + 5) * 3)






