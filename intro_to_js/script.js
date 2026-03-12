// LAB2: Introduction to JavaScript

// ------------------------------
// 1. var, let, const
// ------------------------------

// var: old way to declare variables (function scoped)
var city = "Kathmandu";
console.log("City:", city);

// let: block scoped variable
let age = 21;
age = 22; // let can be updated
console.log("Age:", age);

// const: constant variable (cannot be reassigned)
const country = "Nepal";
console.log("Country:", country);


// ------------------------------
// 2. Normal Function
// ------------------------------

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Saurav"));


// ------------------------------
// 3. Arrow Function (ES6)
// ------------------------------

const add = (a, b) => {
    return a + b;
};

console.log("Sum:", add(5, 3));


// ------------------------------
// 4. Object
// ------------------------------

const student = {
    name: "Saurav",
    faculty: "Computer Engineering",
    university: "TU"
};

console.log("Student Name:", student.name);
console.log("Faculty:", student.faculty);


// ------------------------------
// 5. map() method
// Used to transform each element of an array
// ------------------------------

const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log("Squares:", squares);


// ------------------------------
// 6. filter() method
// Used to filter elements based on condition
// ------------------------------

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// ------------------------------
// 7. Spread Operator (...)
// Used to copy or combine arrays/objects
// ------------------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log("Combined Array:", combinedArray);


// Spread with object
const newStudent = {
    ...student,
    semester: 6
};

console.log("Updated Student:", newStudent);