// ============================================================
// JAVASCRIPT REVISION
// OPERATORS + CONDITIONAL STATEMENTS
//
// ⚠️ = DIFFERENT / IMPORTANT DIFFERENCE FROM PYTHON
// ============================================================


// ============================================================
// 1. ARITHMETIC OPERATORS
// ============================================================

let a = 10;
let b = 3;

console.log(a + b);   // Addition       → 13
console.log(a - b);   // Subtraction    → 7
console.log(a * b);   // Multiplication → 30
console.log(a / b);   // Division       → 3.333...
console.log(a % b);   // Modulus        → 1
console.log(a ** b);  // Power          → 1000


// ⚠️ DIFFERENT FROM PYTHON
// Python has floor division:
//
// 10 // 3 → 3
//
// JavaScript does NOT have // for floor division.

console.log(Math.floor(10 / 3));
// 3


// ============================================================
// 2. ASSIGNMENT OPERATORS
// ============================================================

let x = 10;

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2


// Python and JavaScript are mostly the same here:
//
// +=
// -=
// *=
// /=
// %=
// **=


// ============================================================
// 3. COMPARISON OPERATORS
// ============================================================

let num = 10;

console.log(num > 5);   // true
console.log(num < 5);   // false
console.log(num >= 10); // true
console.log(num <= 10); // true


// ============================================================
// 4. == VS ===
// ============================================================

// ⚠️ VERY IMPORTANT DIFFERENCE FROM PYTHON

// == → Loose equality
// === → Strict equality


console.log(5 == "5");
// true


console.log(5 === "5");
// false


// Why?
//
// 5   → number
// "5" → string
//
// ==  → performs type conversion
// === → checks value AND type


// ⚠️ BEST PRACTICE
// Prefer === instead of ==


// Not equal:

console.log(5 != "5");
// false

console.log(5 !== "5");
// true


// ⚠️ Prefer !== instead of !=


// ============================================================
// 5. LOGICAL OPERATORS
// ============================================================

// Python:
// and
// or
// not


// JavaScript:
// && → AND
// || → OR
// !  → NOT


let age = 20;
let isStudent = true;


// AND

console.log(age >= 18 && isStudent);
// true


// OR

console.log(age < 18 || isStudent);
// true


// NOT

console.log(!isStudent);
// false


// ⚠️ DIFFERENT FROM PYTHON
//
// Python:
// age >= 18 and isStudent
//
// JavaScript:
// age >= 18 && isStudent


// ============================================================
// 6. INCREMENT AND DECREMENT
// ============================================================

// ⚠️ DIFFERENT FROM PYTHON
// JavaScript supports ++ and --


let count = 5;

count++;

console.log(count);
// 6


count--;

console.log(count);
// 5


// Equivalent:
//
// count += 1
// count -= 1


// ============================================================
// 7. IF STATEMENT
// ============================================================

// Python:
//
// if age >= 18:
//     print("Adult")
//
//
// JavaScript:

if (age >= 18) {
    console.log("Adult");
}


// ⚠️ DIFFERENCE
//
// Python uses indentation.
//
// JavaScript uses { }


// ============================================================
// 8. IF ELSE
// ============================================================

let userAge = 16;

if (userAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Python:
//
// if age >= 18:
//     print("Adult")
// else:
//     print("Minor")


// ============================================================
// 9. IF ELSE IF ELSE
// ============================================================

// ⚠️ DIFFERENT FROM PYTHON
//
// Python:
// elif
//
// JavaScript:
// else if


let marks = 82;

if (marks >= 90) {

    console.log("Grade A");

} else if (marks >= 75) {

    console.log("Grade B");

} else if (marks >= 60) {

    console.log("Grade C");

} else {

    console.log("Grade D");

}


// ============================================================
// 10. NESTED IF
// ============================================================

let studentAge = 20;
let hasID = true;

if (studentAge >= 18) {

    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }

} else {

    console.log("Underage");

}


// ============================================================
// 11. LOGICAL OPERATORS IN CONDITIONS
// ============================================================

let userAge2 = 25;
let hasLicense = true;

if (userAge2 >= 18 && hasLicense) {
    console.log("Can drive");
}


let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}


let loggedIn = false;

if (!loggedIn) {
    console.log("Please login");
}


// ============================================================
// 12. TERNARY OPERATOR
// ============================================================

// ⚠️ IMPORTANT DIFFERENCE FROM PYTHON
//
// JavaScript has a ternary operator.
//
// condition ? value_if_true : value_if_false


let age2 = 20;

let result = age2 >= 18 ? "Adult" : "Minor";

console.log(result);


// Equivalent to:
//
// if (age2 >= 18) {
//     result = "Adult";
// } else {
//     result = "Minor";
// }


// ============================================================
// 13. SWITCH
// ============================================================

// JavaScript supports switch statements.

let dayNumber = 2;

switch (dayNumber) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


// ⚠️ IMPORTANT
// break stops execution from continuing to the next case.


// ============================================================
// 14. TRUTHY AND FALSY
// ============================================================

// ⚠️ IMPORTANT JAVASCRIPT CONCEPT
//
// These values are FALSY:
//
// false
// 0
// ""
// null
// undefined
// NaN


let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}


// Non-empty strings are TRUTHY.

let username2 = "Divyansh";

if (username2) {
    console.log("Username exists");
}


// ============================================================
// 15. PRACTICAL EXAMPLE
// ============================================================

const studentName = "Divyansh";
const studentMarks = 82;
const attendance = 85;
const present = true;

if (
    studentMarks >= 40 &&
    attendance >= 75 &&
    present
) {

    console.log(`${studentName} is eligible.`);

} else {

    console.log(`${studentName} is not eligible.`);

}


// ============================================================
// 16. OPERATOR CHEAT SHEET
// ============================================================
//
// ARITHMETIC
//
// +       Addition
// -       Subtraction
// *       Multiplication
// /       Division
// %       Modulus
// **      Power
// ++      Increment
// --      Decrement
//
//
// ASSIGNMENT
//
// =
// +=
// -=
// *=
// /=
// %=
//
//
// COMPARISON
//
// >       Greater than
// <       Less than
// >=      Greater/equal
// <=      Less/equal
// ===     Strict equality       ⚠️
// !==     Strict inequality     ⚠️
//
//
// LOGICAL
//
// &&      AND                  ⚠️
// ||      OR                   ⚠️
// !       NOT                  ⚠️
//
//
// CONDITIONALS
//
// if
// else if
// else
// switch
// ? :     Ternary              ⚠️


// ============================================================
// 17. PYTHON → JAVASCRIPT QUICK REVISION
// ============================================================
//
// Python                  JavaScript
// ------------------------------------------------------------
//
// and                  →  &&
// or                   →  ||
// not                  →  !
//
// ==                   →  ===   ⚠️ Prefer ===
// !=                   →  !==   ⚠️ Prefer !==
//
// elif                 →  else if
//
// indentation          →  { } blocks
//
// True                 →  true
// False                →  false
//
// 10 // 3              →  Math.floor(10 / 3)
//
// No ++ / --           →  ++ / -- available in JS
//
// No ternary syntax    →  condition ? x : y
//
// ============================================================


// ============================================================
// ⭐ MOST IMPORTANT THINGS TO REMEMBER
// ============================================================
//
// 1. Use === instead of ==
// 2. Use !== instead of !=
// 3. && = AND
// 4. || = OR
// 5. !  = NOT
// 6. else if = Python's elif
// 7. JavaScript uses { } instead of indentation
// 8. ++ and -- exist in JavaScript
// 9. Ternary operator: condition ? true : false
// 10. Learn truthy/falsy behavior
//
// ============================================================