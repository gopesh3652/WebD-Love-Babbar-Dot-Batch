let date  = new Date();
console.log(date);

let date2 = new Date('June 20 1998 07:15');
console.log(date2);

// call back function

let courses = [
    {no:1, naam:"BCA"},
    {no:2, naam:"MCA"}
];

let course = courses.find(function(hi){
    return hi.naam === "MCA";
});

console.log(course);

// we can write above function in short by using arrow function { => }

let result = courses.find(hi => hi.naam === "MCA");

console.log(result);

// spread operator

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];

let combined = [...first, ...second];
console.log(combined);

// Iterating in array using for-of loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(let num of arr) {
    console.log(num);
}

console.log("---------------");

// Iterating through forEach loop
// forEach loop requires callback function

let numb = [1, 2, 3, 4, 5, 6, 7, 8];

numb.forEach(function(number) {
    console.log(number);
});

// forEach loop using arrow function

console.log("forEach with arrow function");

numb.forEach(number => console.log(number));

// Joining array

let iterator = [10, 20, 30, 50];

const joined = iterator.join(",");
console.log(joined);

// splitting

let msg = "This is a joined string";
let parts = msg.split(" ");
console.log(parts);

console.log("----------------------------------");

let joinedd = parts.join("_");
console.log(joinedd);

// sorting
// it sorting method is different  ->  test by changing example
// *internally sort function converts into strings* 
let sorty = [23, 76, 23, 55, 75];

// sorty.sort();
console.log(sorty);

// for reversing array
sorty.reverse()

console.log(sorty);

// filters in array

let filtering  =[1, 4, -3, -9, 7];

let filtered = filtering.filter(number => {return number >= 0});
console.log(filtered);

let filtererd = filtering.filter(value => {return value < 0});
console.log(filtererd);

// Mapping of array using .map method

let roll_no = [1, 2, 3, 4, 5];
let mapping = roll_no.map(value => {return `Student roll_no: ` + value});
console.log(mapping);

// mapping obect

let numbers = [1, 3, 5, 7, 9, -6, -3, -6, -1, -7, 0];

// let filterin = numbers.filter(value => {return value >= 0});

let mappign = numbers.filter(value => {return value >= 0}).map(objectify => {return {value: objectify}});

console.log(mappign);

