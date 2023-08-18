// object creation

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw : function() {
//         console.log("DRAW");
//     }
// };

// Functions to create multiple objects
// 1. factory function

// function createRectangle()  {
//     return rectangle = {
//         length: 1,
//         breadth: 2,

//         draw : function() {
//             console.log("DRAW");
//         }
//     };
// }
// let rec1 = createRectangle();

// rec1.draw();

// function createRectangle(length, breadth)  {
//     return rectangle = {
//         length,
//         breadth,

//         draw() {
//             console.log("DRAW");
//         }
//     };
// }
// let rec2 = createRectangle(1, 14);

// console.log(rec2.length);
// rec2.draw();

// 2. OCnstructor function
// follow PascalCasing

// function Rectangle() {
//     this.length = 1;
//     this.breadth = 3;
//     this.draw = function() {
//         console.log("HI");
//     }
// }

// new --> used to create new empty object
//  this --> refers current object

// let rectObj = new Rectangle();

// console.log(rectObj.length);

// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("HI");
//   };
// }

// let rectangleObj = new Rectangle(4, 8);

// dynamic behaviour of objects
// add of preperty
// rectangleObj.color = "BLUE";

// deleting a property
// delete rectangleObj.length;

// constructor of the onstructor function -> Function 

// let Rectangle1 = new Function(
//   "length", "breadth",
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function () {
//     console.log("HI");
//   }`
// );

// object creation

// let rect1 = new Rectangle1(5, 7);

// rect1

// let rectangle = {
//     length: 3,
//     breadth: 5
// };

//4. for in loop --> we can iterate through each key
// we can access value of key using bracket notation 

// for(let key in rectangle) {
//     // console.log(key);
//     console.log(key, rectangle[key]);
// }

//5. for of loop -> can be applied on iterables only

// for(let key of Object.keys(rectangle)) {
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }


// to check if a property is inside an object we use "in" keyword
// console.log("length" in rectangle)


// object cloning

// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// 1. Using iteration

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// 2. Assigning

// let dest = Object.assign({}, src);
// console.log(dest);

// 3. Spread operator

// let dest = { ... src};
// console.log(dest);

// we can copy multiple source object into one destination object

// let ser2 = {
//     value:40
// };

// let desti = Object.assign({}, src, ser2);
// console.log(desti);

