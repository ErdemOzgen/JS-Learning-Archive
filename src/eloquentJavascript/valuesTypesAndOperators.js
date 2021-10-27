console.log(9.81);
console.log(typeof (9.81));



console.log(2.998e8); //2.998 × 108 = 299,800,000.
console.log(typeof (2.998e8));


console.log(100 + 4 * 11);


let str = `Down on the sea`;

let str2 = "Lie on the ocean";

let str3 = 'Float on the ocean';



console.log("This is the first line\nAnd this is the second");
console.log("A newline character is written like \"\\n\".");


consoel.log("con" + "cat" + "e" + "nate");


console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true Strings can be compared in the same way

console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false

console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2


/**
 * Empty values
There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information.

Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield undefined simply because they have to yield some value.

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

 * 
 * 
 */

// Automatic type conversions

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// Short-circuiting of logical operators
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

