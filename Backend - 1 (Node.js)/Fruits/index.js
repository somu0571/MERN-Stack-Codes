// it's the main to connect all the files in present in Fruit, used for exporting directories in node.js
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruit = [apple,banana,orange];

module.exports = fruit;