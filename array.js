// ============================================================
// JAVASCRIPT ARRAYS — REVISION NOTES
// ============================================================


// ============================================================
// 1. CREATING ARRAYS
// ============================================================

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// Array with different data types
const data = ["Divyansh", 18, true, 7.27];

console.log(data);


// ⚠️ PYTHON
// Python list:
// fruits = ["Apple", "Banana", "Mango"]


// ============================================================
// 2. INDEXING
// ============================================================

const skills = ["Python", "SQL", "Machine Learning", "JavaScript"];

console.log(skills[0]); // Python
console.log(skills[1]); // SQL
console.log(skills[2]); // Machine Learning
console.log(skills[3]); // JavaScript

// Negative indexing does NOT work like Python
console.log(skills[-1]); // undefined


// ============================================================
// 3. CHANGING AN ELEMENT
// ============================================================

skills[1] = "PostgreSQL";

console.log(skills);


// ============================================================
// 4. ARRAY LENGTH
// ============================================================

console.log(skills.length);

// JavaScript:
// skills.length

// ⚠️ PYTHON:
// len(skills)


// ============================================================
// 5. ADD ELEMENT TO END — push()
// ============================================================

const languages = ["Python", "Java"];

languages.push("JavaScript");

console.log(languages);

// ["Python", "Java", "JavaScript"]

// ⚠️ PYTHON:
// languages.append("JavaScript")


// ============================================================
// 6. REMOVE LAST ELEMENT — pop()
// ============================================================

languages.pop();

console.log(languages);

// ["Python", "Java"]


// ============================================================
// 7. ADD ELEMENT TO BEGINNING — unshift()
// ============================================================

languages.unshift("C++");

console.log(languages);

// ["C++", "Python", "Java"]


// ============================================================
// 8. REMOVE FIRST ELEMENT — shift()
// ============================================================

languages.shift();

console.log(languages);

// ["Python", "Java"]


// ============================================================
// QUICK MEMORY
// ============================================================

// push()      → add to END
// pop()       → remove from END
// unshift()   → add to BEGINNING
// shift()     → remove from BEGINNING


// ============================================================
// 9. CHECK IF ELEMENT EXISTS — includes()
// ============================================================

const skills2 = ["Python", "SQL", "ML", "DL"];

console.log(skills2.includes("Python")); // true
console.log(skills2.includes("Java"));   // false

// ⚠️ PYTHON:
// "Python" in skills2


// ============================================================
// 10. FIND INDEX — indexOf()
// ============================================================

console.log(skills2.indexOf("SQL")); // 1
console.log(skills2.indexOf("ML"));  // 2

// If element doesn't exist:
console.log(skills2.indexOf("Java")); // -1


// ============================================================
// 11. TRADITIONAL FOR LOOP
// ============================================================

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// ============================================================
// 12. for...of — VALUES
// ============================================================

const subjects = ["BDM", "MLT", "MAD"];

for (const subject of subjects) {
    console.log(subject);
}


// for...of gives VALUES


// ============================================================
// 13. for...in — INDEXES
// ============================================================

for (const index in subjects) {
    console.log(index);
}

// Output:
// 0
// 1
// 2


// for...in gives KEYS / INDEXES


// ============================================================
// IMPORTANT DIFFERENCE
// ============================================================

// for...of → values
// for...in → indexes / keys


// ============================================================
// 14. while LOOP WITH ARRAY
// ============================================================

let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}


// ============================================================
// 15. slice()
// ============================================================

// slice(start, end)
// end is NOT included

const nums = [10, 20, 30, 40, 50];

const result = nums.slice(1, 4);

console.log(result);

// [20, 30, 40]


// Original array is NOT changed
console.log(nums);

// [10, 20, 30, 40, 50]


// ⚠️ PYTHON:
// nums[1:4]


// ============================================================
// 16. splice()
// ============================================================

// splice(startIndex, numberOfElements)

const tools = ["Python", "SQL", "Git", "Docker"];

tools.splice(2, 1);

console.log(tools);

// ["Python", "SQL", "Docker"]


// ============================================================
// 17. splice() — REPLACE
// ============================================================

const tools2 = ["Python", "SQL", "Git", "Docker"];

tools2.splice(1, 1, "JavaScript");

console.log(tools2);

// ["Python", "JavaScript", "Git", "Docker"]


// ⚠️ splice() MODIFIES the original array
// slice() DOES NOT modify the original array


// ============================================================
// 18. JOIN — ARRAY → STRING
// ============================================================

const words = ["I", "love", "JavaScript"];

const sentence = words.join(" ");

console.log(sentence);

// "I love JavaScript"


// ⚠️ PYTHON:
// " ".join(words)


// ============================================================
// 19. SPLIT — STRING → ARRAY
// ============================================================

const sentence2 = "I love JavaScript";

const words2 = sentence2.split(" ");

console.log(words2);

// ["I", "love", "JavaScript"]


// ============================================================
// IMPORTANT
// ============================================================

// split() → String → Array
// join()  → Array → String


// ============================================================
// 20. ARRAY OF STRINGS
// ============================================================

const names = ["Rahul", "Aman", "Divyansh", "Rohit"];

for (const name of names) {
    console.log(name);
}


// ============================================================
// 21. ARRAY OF NUMBERS
// ============================================================

const marks = [85, 72, 91, 67, 88];

let total = 0;

for (const mark of marks) {
    total += mark;
}

console.log("Total:", total);


// ============================================================
// 22. FIND MAXIMUM NUMBER
// ============================================================

const scores = [45, 78, 92, 61, 88];

let max = scores[0];

for (const score of scores) {
    if (score > max) {
        max = score;
    }
}

console.log("Maximum:", max);


// ============================================================
// 23. FIND MINIMUM NUMBER
// ============================================================

let min = scores[0];

for (const score of scores) {
    if (score < min) {
        min = score;
    }
}

console.log("Minimum:", min);


// ============================================================
// 24. COUNT EVEN NUMBERS
// ============================================================

const numbers2 = [10, 13, 22, 31, 44, 51, 60];

let evenCount = 0;

for (const num of numbers2) {

    if (num % 2 === 0) {
        evenCount++;
    }

}

console.log("Even numbers:", evenCount);


// ============================================================
// 25. SUM OF ARRAY
// ============================================================

const numbers3 = [10, 20, 30, 40];

let sum = 0;

for (const num of numbers3) {
    sum += num;
}

console.log("Sum:", sum);


// ============================================================
// 26. AVERAGE OF ARRAY
// ============================================================

const marks2 = [80, 90, 70, 85, 75];

let totalMarks = 0;

for (const mark of marks2) {
    totalMarks += mark;
}

const average = totalMarks / marks2.length;

console.log("Average:", average);


// ============================================================
// 27. REVERSE ARRAY MANUALLY
// ============================================================

const original = [1, 2, 3, 4, 5];

const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed);

// [5, 4, 3, 2, 1]


// ============================================================
// 28. NESTED ARRAYS
// ============================================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8


// ============================================================
// 29. NESTED LOOP WITH ARRAY
// ============================================================

for (const row of matrix) {

    for (const value of row) {
        console.log(value);
    }

}


// ============================================================
// 30. ARRAY + STRING PRACTICE
// ============================================================

const names2 = ["Divyansh", "Rahul", "Aman"];

for (const name of names2) {

    console.log(
        name,
        "has",
        name.length,
        "characters"
    );

}


// ============================================================
// 31. COMMON ARRAY METHODS
// ============================================================

// length
// push()
// pop()
// shift()
// unshift()
// includes()
// indexOf()
// slice()
// splice()
// join()
// split()


// ============================================================
// 32. QUICK PYTHON → JAVASCRIPT COMPARISON
// ============================================================

// Python                    JavaScript
//
// list = []              → const arr = [];
//
// list[0]                → arr[0]
//
// len(list)              → arr.length
//
// list.append(x)         → arr.push(x)
//
// list.pop()             → arr.pop()
//
// list.insert(0, x)      → arr.unshift(x)
//
// x in list              → arr.includes(x)
//
// list.index(x)          → arr.indexOf(x)
//
// list[1:4]              → arr.slice(1, 4)
//
// " ".join(list)         → arr.join(" ")
//
// text.split(" ")        → text.split(" ")


// ============================================================
// 33. IMPORTANT DIFFERENCES
// ============================================================

// ⚠️ JavaScript:

// arr.length
// NOT arr.length()

// ⚠️ JavaScript arrays use:
// 0, 1, 2, 3...

// ⚠️ JavaScript does NOT support Python-style:
// arr[-1]

// Use:
// arr[arr.length - 1]

// Example:

const nums2 = [10, 20, 30, 40];

console.log(nums2[nums2.length - 1]);

// 40


// ============================================================
// 34. MOST IMPORTANT PATTERNS
// ============================================================

// Loop through values:

for (const value of nums2) {
    console.log(value);
}


// Loop using indexes:

for (let i = 0; i < nums2.length; i++) {
    console.log(nums2[i]);
}


// Add element:

nums2.push(50);


// Check element:

console.log(nums2.includes(30));


// Find index:

console.log(nums2.indexOf(30));


// ============================================================
// END OF ARRAY REVISION
// ============================================================