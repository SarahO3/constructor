
// constructor and the new operator
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        const readStatus = this.read
            ? "already read"
            : "not read yet";

        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

const book1 = new Book("Binu", "Casy", 130, false);
console.log(book1.info())


// The this refers to the object that owns the function or method currently being executed. 
// another example where value is passed in directly 
let car = {
  brand: 'Honda',
  start: function() {
    // "this" is the car object
    console.log(this.brand + ' is starting.');
  }
};

car.start(); 


// When you call function as a method of an object, this refers to the object itself.
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda



// global object
function show() {
   console.log(this === window); // true
}

show();


// strict mode
"use strict";

function show() {
    console.log(this === undefined);
}

show(); 

function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();

// prototye 

// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');


console.log(hero1)