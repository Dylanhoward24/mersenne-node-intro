// src in another file
// just like <script src="./people.js">
let people = require('./people.js');
let sonicArt = require('./sonic');
let myFavMovie = require('./movie');
let menu = require('./menu');
let add = require('./add');
let calculator = require('./calculator');
let count = require('./count');

// from sonic.js
console.log(sonicArt);

// from people.js
console.log('from people.js', people);

// from movie.js
console.log(`My favorite movie is ${myFavMovie.title}.`);

// from menu.js
console.log('drinks', menu.drinks);
console.log('food', menu.food);

// from add.js
let result = add(3, 7);
console.log('3 + 7 = ', result);

// from calculator.js
console.log('15 / 3 =', calculator.divide(15, 3));

// from count.js
console.log('count 1 =', count());
console.log('count 2 =', count());
console.log('count 3 =', count());
console.log('count 4 =', count());
console.log('count 5 =', count());

for (let person of people) {
    console.log(`Hello, ${person}! Welcome to Node-land`);

    if (person[0] === 'F') {
        console.log('Picking on Farah today');
    } //end if
} //end for