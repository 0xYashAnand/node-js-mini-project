// var generateName = require("sillyname");
import generateName from "sillyname";
var sillyName = generateName();
console.log(`My name is ${sillyName}`);

// const superheroes = require("superheroes");
import  superheroes  from "superheroes";

const name = superheroes.random();

console.log(`My name is ${name}. I am Supehero from Planet ${sillyName}.`);
