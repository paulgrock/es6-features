'use strict';
var ary = [1, 2, 3, 4, 5];

// ES2015 modules
import {data as somethingGeneric} from './exported';
console.log(somethingGeneric().uno);

// Arrow functions
var squares = ary.map((item)=> item * item);
// These are functionally equivalant
// var squares = ary.map(function(item) {
//   return item * item;
// });
console.log(squares);


// Let
for (var i = 0, len = squares.length; i < len; i++) {
    let square = squares[i];
}
// console.log(square); // errors out


// CONSTANTS
const SOMETHING_YOU_CANT_CHANGE = 10;
// SOMETHING_YOU_CANT_CHANGE = 9; // Throws error


// TemplateLiterals with interpoation
// var templateLiteral = "foo " + SOMETHING_YOU_CANT_CHANGE;
var templateLiteral = `foo ${SOMETHING_YOU_CANT_CHANGE}`;
console.log(`template literal ${templateLiteral}`);


// Destructured assignment with arrays
var letters = ['a', 'b', 'c'];
var [firstLetter, secondLetter, lastLetter] = letters;
console.log(`firstLetter ${firstLetter}`);


// Multiline template literal
var multilineString = `Lorem ipsum dolor sit amet,
  consectetur adipisicing elit.
  Quam molestiae ab ipsum maiores. Dolores quos cumque animi optio,
  perspiciatis vel adipisci nostrum ipsam numquam,
  aspernatur distinctio voluptas nemo debitis, quia.`;
console.log(multilineString);


// Array from
var nodeList = document.querySelectorAll("p");
let nodeArray = Array.from(nodeList);
var tweakedEls = nodeArray.map(el=> {
  el.innerHTML = el.innerText.toUpperCase();
  return el;
});
console.log("tweakedEls: ", tweakedEls);


// for...of
let moreTweakedEls = [];
for (let el of nodeList) {
  el.innerHTML = el.innerText.toUpperCase();
  moreTweakedEls.push(el);
}
console.log("moreTweakedEls: ", moreTweakedEls);


// Spread operator
var total = function(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(`total: ${total(...ary)}`);


// Rest
let restFn = function(a, ...b) {
  return b;
}
let b = restFn(1, 2, 3, 4, 5);
console.log(b);


// Enhanced object literals
var obj1 = {
    [`foo${ary[0]}`]: 19
};
// obj1[`foo${ary[0]}`] = 19
console.log("obj1: ", obj1);


// Enhanced method signature and default params
var anotherObj = {
  double: (something = 3)=>something * 2,
  triple(num) {
    return  num * 3;
  }
};
// ES5 style
// var anotherObj = {
//   double: function double(something) {
//     if (something == null) {
//       something = 3;
//     }
//     return something * 2
//   },
//   triple: function triple(num) {
//     return  num * 3;
//   }
// };
console.log(anotherObj);
console.log(anotherObj.double());


// Object.assign similar to _.extend
let thirdObj = Object.assign({}, obj1, anotherObj);
console.log("assigned object: ", thirdObj);

// Property name shorthand
// ES5 style
// var shorthandObj = {
//   ary: ary,
//   anotherObj: anotherObj
// }
let shorthandObj = {
  ary, anotherObj
}
console.log("shorthandObj: ", shorthandObj);

class Foo {
  constructor() {

  }
}


// Promises, proper tail calls, classes, sets, maps, weaksets, weakmaps, symbols
