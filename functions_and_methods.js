// ============================================================
// JAVASCRIPT — FUNCTIONS & METHODS
// REVISION FILE
// ============================================================


// ============================================================
// 1. WHAT IS A FUNCTION?
// ============================================================

// A function is a reusable block of code.

function greet() {
    console.log("Hello!");
}

// Calling the function
greet();
greet();


// ============================================================
// 2. FUNCTION SYNTAX
// ============================================================

// function functionName(parameters) {
//     code
// }

function sayHello() {
    console.log("Hello Divyansh!");
}

sayHello();


// ============================================================
// 3. FUNCTION WITH PARAMETERS
// ============================================================

function greetUser(name) {
    console.log("Hello", name);
}

greetUser("Divyansh");
greetUser("Rahul");
greetUser("Aman");


// Parameter → variable inside function
// Argument  → actual value passed to function


// ============================================================
// 4. MULTIPLE PARAMETERS
// ============================================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);


// ============================================================
// 5. RETURN
// ============================================================

// return sends a value back from the function.

function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(10, 20);

console.log(result);


// ============================================================
// 6. console.log() vs return
// ============================================================

// console.log() → displays something
// return        → sends a value back

function test1(a, b) {
    console.log(a + b);
}

function test2(a, b) {
    return a + b;
}

test1(10, 20);

const answer = test2(10, 20);

console.log(answer);


// ============================================================
// 7. RETURN CAN BE USED IN CALCULATIONS
// ============================================================

function square(num) {
    return num * num;
}

const x = square(5);

console.log(x);
console.log(square(10) + 5);


// ============================================================
// 8. RETURN STOPS THE FUNCTION
// ============================================================

function checkNumber(num) {

    if (num > 0) {
        return "Positive";
    }

    if (num < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));


// ============================================================
// 9. FUNCTION WITH CONDITIONS
// ============================================================

function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }

}

console.log(checkAge(20));
console.log(checkAge(15));


// ============================================================
// 10. FUNCTION WITH LOOP
// ============================================================

function findSum(numbers) {

    let sum = 0;

    for (const num of numbers) {
        sum += num;
    }

    return sum;
}

const numbers = [10, 20, 30, 40];

console.log(findSum(numbers));


// ============================================================
// 11. FUNCTION TO FIND MAXIMUM
// ============================================================

function findMax(numbers) {

    let max = numbers[0];

    for (const num of numbers) {

        if (num > max) {
            max = num;
        }

    }

    return max;
}

console.log(findMax([10, 50, 20, 90, 30]));


// ============================================================
// 12. FUNCTION TO FIND MINIMUM
// ============================================================

function findMin(numbers) {

    let min = numbers[0];

    for (const num of numbers) {

        if (num < min) {
            min = num;
        }

    }

    return min;
}

console.log(findMin([10, 50, 20, 90, 30]));


// ============================================================
// 13. FUNCTION TO CHECK EVEN NUMBER
// ============================================================

function isEven(num) {

    return num % 2 === 0;

}

console.log(isEven(10)); // true
console.log(isEven(7));  // false


// ============================================================
// 14. FUNCTION DECLARATION
// ============================================================

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));


// ============================================================
// 15. FUNCTION EXPRESSION
// ============================================================

// A function can be stored inside a variable.

const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));


// ============================================================
// 16. ARROW FUNCTIONS
// ============================================================

// Normal function:

function add1(a, b) {
    return a + b;
}


// Arrow function:

const add2 = (a, b) => {
    return a + b;
};

console.log(add2(10, 20));


// ============================================================
// 17. SHORT ARROW FUNCTION
// ============================================================

// If there is only one expression,
// return can be written implicitly.

const add3 = (a, b) => a + b;

console.log(add3(10, 20));


// ============================================================
// 18. ARROW FUNCTION — ONE PARAMETER
// ============================================================

const square2 = num => num * num;

console.log(square2(5));


// Can also write:

const square3 = (num) => num * num;

console.log(square3(6));


// ============================================================
// 19. ARROW FUNCTION — NO PARAMETERS
// ============================================================

const hello = () => {
    console.log("Hello!");
};

hello();


// ============================================================
// 20. DEFAULT PARAMETERS
// ============================================================

function greet2(name = "User") {
    console.log("Hello", name);
}

greet2("Divyansh");
greet2();


// ============================================================
// 21. FUNCTION RETURNING BOOLEAN
// ============================================================

function isPositive(num) {
    return num > 0;
}

console.log(isPositive(10));
console.log(isPositive(-5));


// ============================================================
// 22. FUNCTION RETURNING AN ARRAY
// ============================================================

function getEvenNumbers(numbers) {

    const evenNumbers = [];

    for (const num of numbers) {

        if (num % 2 === 0) {
            evenNumbers.push(num);
        }

    }

    return evenNumbers;
}

console.log(
    getEvenNumbers([1, 2, 3, 4, 5, 6])
);


// ============================================================
// 23. WHAT IS A METHOD?
// ============================================================

// A method is a function that belongs to an object/value.

// Example:

const name = "Divyansh";

console.log(name.toUpperCase());


// toUpperCase() is a STRING METHOD.


// ============================================================
// 24. STRING METHODS
// ============================================================

const text = "  JavaScript  ";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim());
console.log(text.includes("Java"));
console.log(text.indexOf("Script"));
console.log(text.slice(2, 12));


// ============================================================
// 25. ARRAY METHODS
// ============================================================

const fruits = ["Apple", "Banana", "Mango"];


// Add to end
fruits.push("Orange");


// Remove from end
fruits.pop();


// Add to beginning
fruits.unshift("Grapes");


// Remove from beginning
fruits.shift();


// Check whether element exists
console.log(fruits.includes("Apple"));


// Find index
console.log(fruits.indexOf("Banana"));


// ============================================================
// 26. OBJECT METHODS
// ============================================================

const student = {

    name: "Divyansh",
    age: 18,

    greet() {
        console.log("Hello!");
    }

};

student.greet();


// greet() is a METHOD of student.


// ============================================================
// 27. METHOD USING OBJECT DATA
// ============================================================

const student2 = {

    name: "Divyansh",
    age: 18,

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }

};

student2.introduce();


// ============================================================
// 28. FUNCTION vs METHOD
// ============================================================

// FUNCTION

function greet3() {
    console.log("Hello");
}

greet3();


// METHOD

const username = "Divyansh";

username.toUpperCase();


// FUNCTION:
// greet3()


// METHOD:
// username.toUpperCase()


// ============================================================
// 29. BUILT-IN FUNCTIONS
// ============================================================

console.log(Number("100"));

console.log(String(100));

console.log(Boolean(1));


// These are built-in functions.


// ============================================================
// 30. BUILT-IN METHODS
// ============================================================

const language = "JavaScript";

console.log(language.toUpperCase());


// toUpperCase() is a method.


// ============================================================
// 31. FUNCTION + ARRAY + LOOP
// ============================================================

function countEven(numbers) {

    let count = 0;

    for (const num of numbers) {

        if (num % 2 === 0) {
            count++;
        }

    }

    return count;
}

console.log(
    countEven([2, 5, 8, 11, 14, 20])
);


// ============================================================
// 32. FUNCTION + STRING + LOOP
// ============================================================

function countVowels(text) {

    let count = 0;

    for (const char of text.toLowerCase()) {

        if ("aeiou".includes(char)) {
            count++;
        }

    }

    return count;
}

console.log(countVowels("JavaScript"));


// ============================================================
// 33. FUNCTION + PROMPT
// ============================================================

function checkNumber(num) {

    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }

}

const userNumber = Number(
    prompt("Enter a number:")
);

console.log(checkNumber(userNumber));


// ============================================================
// 34. IMPORTANT FUNCTION RULES
// ============================================================

// 1. Define function:

function example() {
    console.log("Hello");
}


// 2. Call function:

example();


// 3. Parameters:

function example2(name) {
    console.log(name);
}


// 4. Arguments:

example2("Divyansh");


// 5. Return:

function example3(a, b) {
    return a + b;
}


// ============================================================
// 35. COMMON MISTAKES
// ============================================================


// ❌ Forgetting to call the function

function greet4() {
    console.log("Hello");
}

// Nothing happens until:
greet4();


// ❌ Confusing console.log with return

function wrong(a, b) {
    console.log(a + b);
}


// Better when you need the result:

function correct(a, b) {
    return a + b;
}


// ❌ Calling a method without its object

const word = "hello";

// Correct:
word.toUpperCase();


// ============================================================
// 36. PYTHON → JAVASCRIPT
// ============================================================


// Python:
// def add(a, b):
//     return a + b


// JavaScript:

function add4(a, b) {
    return a + b;
}


// Python:
// print()


// JavaScript:
// console.log()


// Python:
// len(arr)


// JavaScript:
// arr.length


// Python:
// arr.append(x)


// JavaScript:
// arr.push(x)


// Python:
// text.upper()


// JavaScript:
// text.toUpperCase()


// ============================================================
// 37. QUICK REVISION
// ============================================================


// Function:

function greet5() {
    console.log("Hello");
}


// Parameter:

function greet6(name) {
    console.log(name);
}


// Return:

function add5(a, b) {
    return a + b;
}


// Function expression:

const subtract = function(a, b) {
    return a - b;
};


// Arrow function:

const multiply2 = (a, b) => a * b;


// Method:

const arr = [1, 2, 3];

arr.push(4);


// ============================================================
// 38. CORE CONCEPT TO REMEMBER
// ============================================================


// FUNCTION
//
// function add(a, b) {
//     return a + b;
// }
//
// add(10, 20);


// METHOD
//
// arr.push(10);
// text.toUpperCase();


// Function → called directly
// Method   → belongs to an object/value


// ============================================================
// END OF FUNCTIONS & METHODS REVISION
// ============================================================ 