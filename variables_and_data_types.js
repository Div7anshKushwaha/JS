// ==========================================
// 1. VARIABLES
// ==========================================

// let → value can be changed
let age = 18;
age = 19;

console.log(age); // 19


// const → cannot be reassigned
const name = "Divyansh";

console.log(name); // Divyansh

// name = "Rahul"; // ❌ Error


// var → old way of declaring variables
var city = "Indore";
city = "Delhi";

console.log(city); // Delhi



// ==========================================
// 2. STRING
// ==========================================

let firstName = "Divyansh";
let language = 'JavaScript';

console.log(firstName);
console.log(language);

console.log(typeof firstName);
// string



// ==========================================
// 3. NUMBER
// ==========================================

let age2 = 18;
let height = 172.5;
let marks = -10;

console.log(age2);
console.log(height);

console.log(typeof age2);
// number

console.log(typeof height);
// number



// ==========================================
// 4. BOOLEAN
// ==========================================

let isStudent = true;
let hasJob = false;

console.log(isStudent);
console.log(hasJob);

console.log(typeof isStudent);
// boolean



// ==========================================
// 5. UNDEFINED
// ==========================================

// Variable declared but no value assigned

let salary;

console.log(salary);
// undefined

console.log(typeof salary);
// undefined



// ==========================================
// 6. NULL
// ==========================================

// Intentionally empty value

let selectedModel = null;

console.log(selectedModel);
// null

console.log(typeof selectedModel);
// object
// ⚠️ This is a historical JavaScript quirk



// ==========================================
// 7. ARRAY
// ==========================================

const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "JavaScript"
];

console.log(skills);

console.log(skills[0]);
// Python

console.log(skills[2]);
// Machine Learning

console.log(typeof skills);
// object

console.log(Array.isArray(skills));
// true



// ==========================================
// 8. OBJECT
// ==========================================

const student = {
    name: "Divyansh",
    age: 18,
    course: "Data Science",
    isStudent: true
};

console.log(student);

console.log(student.name);
// Divyansh

console.log(student.age);
// 18

console.log(typeof student);
// object



// ==========================================
// 9. BIGINT
// ==========================================

// For very large integers

const bigNumber = 12345678901234567890n;

console.log(bigNumber);

console.log(typeof bigNumber);
// bigint



// ==========================================
// 10. SYMBOL
// ==========================================

const id = Symbol("userID");

console.log(typeof id);
// symbol



// ==========================================
// 11. typeof
// ==========================================

console.log(typeof "Hello");
// string

console.log(typeof 100);
// number

console.log(typeof 3.14);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined

console.log(typeof null);
// object ⚠️

console.log(typeof {});
// object

console.log(typeof []);
// object