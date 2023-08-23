// function declaration

function func() {
  console.log("Hello");
}

// function invoke
func();

// named function assignment

let walk = function hello() {
  console.log("walk");
};

walk();

let bye = walk;
bye();

// Anonymous function assignment

let hhi = function () {
  console.log("Hemlo");
};

hhi();

// special object --> arguments { it stores extra parameters }

function funky(a, b) {
  console.log(arguments);
  return a + b;
}

funky(1, 4, 6);

// we can make our function dynamic  --> Dynamic implementation of function

function funkies(a, b) {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

let sum = funkies(1, 5, 7, 0, 7);
console.log(`Sum is ${sum}`);

// spread operator

function helto(...args) {
  console.log(args);
}

helto(1, 2, 3, 4, 5, 6);

// more example

// nya tareeka dhundna h

// function add(...args) {
//     let sum = 0;
//     sum = sum  + args;
//     return sum;
// }

// console.log(add(1, 3, 6, 8, 7));

// Getter -- Setter

// Getter -> access properties
// Setters -> to change or mutate/manipulate properties

// read only function
let person = {
  fName: "Gopesh",
  lName: "Khandelwal",
};

function read_only() {
  return `${person.fName} ${person.lName}`;
}

console.log(read_only());

// GETTER AND SETTER

let employee = {
  fname: "Ujwal",
  lname: "jain",
  get fullname() {
    return `${employee.fname} ${employee.lname}`;
  },
  set fullname(value) {
    if(typeof valye !== String) {
        throw new Error ("You have not send a string");
    }
    let parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};

// calling getter
console.log(employee.fullname);

// calling fullname
employee.fullname = "Mahendra Kumar";
console.log(employee.fullname);

// Error handling

try {
  employee.fullname = 1; 
  console.log(employee.fullname);
} 
catch (error) {
    // alert(e);
    console.log("Send number in place of name");
}
