const Adder = require("./Adder.js");

let a = new Adder({
    a: 12,
    b: 5
});

a.sum();

console.log(a.render());