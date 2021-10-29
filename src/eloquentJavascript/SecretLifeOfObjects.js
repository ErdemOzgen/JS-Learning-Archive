function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  var whiteRabbit = {type: "white", speak};
  var hungryRabbit = {type: "hungry", speak};
  
  
  var Rabbit = class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  
  var killerRabbit = new Rabbit("killer");
  var blackRabbit = new Rabbit("black");
  //https://www.w3schools.com/js/js_object_prototypes.asp
  Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
  };
  
  var toStringSymbol = Symbol("toString");
  
  var Matrix = class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];
  
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.content[y * width + x] = element(x, y);
        }
      }
    }
  
    get(x, y) {
      return this.content[y * this.width + x];
    }
    set(x, y, value) {
      this.content[y * this.width + x] = value;
    }
  }
  
  var MatrixIterator = class MatrixIterator {
    constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
    }
  
    next() {
      if (this.y == this.matrix.height) return {done: true};
  
      let value = {x: this.x,
                   y: this.y,
                   value: this.matrix.get(this.x, this.y)};
      this.x++;
      if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
      }
      return {value, done: false};
    }
  }
  
  Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
  };
  
  var SymmetricMatrix = class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => {
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }
  
    set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  var matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);



  // Run code here in the context of Chapter 6

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);


class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c