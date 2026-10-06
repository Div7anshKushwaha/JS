// ============================================================
// JAVASCRIPT REVISION
// LOOPS + STRINGS
//
// ⚠️ = IMPORTANT DIFFERENCE FROM PYTHON
// ============================================================


// ============================================================
// 1. FOR LOOP
// ============================================================

// Python:
// for i in range(5):
//     print(i)

// JavaScript:
// ⚠️ JavaScript does not have Python's built-in range()

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4


// Structure:
//
// for (initialization; condition; update) {
//     code
// }


// ============================================================
// 2. FOR LOOP WITH ARRAY
// ============================================================

const skills = ["Python", "SQL", "ML", "JavaScript"];

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}

// ⚠️ Python:
// len(skills)
//
// JavaScript:
// skills.length


// ============================================================
// 3. FOR...OF LOOP
// ============================================================

// Very useful for arrays.

const languages = ["Python", "JavaScript", "Java"];

for (const language of languages) {
    console.log(language);
}


// Python:
//
// for language in languages:
//     print(language)


// ⚠️ REMEMBER:
//
// for...of → values


// ============================================================
// 4. FOR...IN LOOP
// ============================================================

// Mainly used to iterate over object keys.

const student = {
    name: "Divyansh",
    age: 18,
    course: "Data Science"
};

for (const key in student) {
    console.log(key);
}

// Output:
// name
// age
// course


// Get both key and value:

for (const key in student) {
    console.log(key, student[key]);
}


// ⚠️ REMEMBER:
//
// for...in → keys
// for...of → values


// ============================================================
// 5. WHILE LOOP
// ============================================================

// Python:
//
// i = 0
// while i < 5:
//     print(i)
//     i += 1


let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}


// ⚠️ Make sure the condition eventually becomes false.
// Otherwise, you can create an infinite loop.


// ============================================================
// 6. DO...WHILE LOOP
// ============================================================

// ⚠️ JavaScript-specific loop you'll encounter.

let number = 0;

do {
    console.log(number);
    number++;
} while (number < 5);


// The code executes AT LEAST ONCE.


// Example:

let x = 10;

do {
    console.log(x);
} while (x < 5);

// Output:
// 10

// Even though x < 5 is false,
// the code runs once.


// ============================================================
// 7. BREAK
// ============================================================

// break → completely stops the loop.

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4


// Python also uses:
// break


// ============================================================
// 8. CONTINUE
// ============================================================

// continue → skips current iteration.

for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}

// Output:
// 0
// 1
// 3
// 4


// Python also uses:
// continue


// ============================================================
// 9. NESTED LOOPS
// ============================================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }
}


// ============================================================
// 10. STRING BASICS
// ============================================================

const name = "Divyansh";

console.log(name);


// Three ways to create strings:

const str1 = "Hello";
const str2 = 'Hello';

// ⚠️ Backticks are used for template literals.
const str3 = `Hello`;


// ============================================================
// 11. STRING INDEXING
// ============================================================

const text = "JavaScript";

console.log(text[0]);  // J
console.log(text[1]);  // a
console.log(text[2]);  // v
console.log(text[3]);  // a


// JavaScript uses zero-based indexing,
// just like Python.


// ============================================================
// 12. STRING LENGTH
// ============================================================

const message = "Hello";

console.log(message.length);

// Output:
// 5


// ⚠️ DIFFERENT FROM PYTHON
//
// Python:
// len(message)
//
// JavaScript:
// message.length


// ============================================================
// 13. TO LOWERCASE
// ============================================================

const text2 = "JavaScript";

console.log(text2.toLowerCase());

// javascript


// Python:
// text.lower()


// ============================================================
// 14. TO UPPERCASE
// ============================================================

console.log(text2.toUpperCase());

// JAVASCRIPT


// Python:
// text.upper()


// ============================================================
// 15. TRIM
// ============================================================

const username = "   Divyansh   ";

console.log(username.trim());

// Divyansh


// Python:
// username.strip()


// ============================================================
// 16. INCLUDES
// ============================================================

const sentence = "I am learning JavaScript";

console.log(sentence.includes("JavaScript"));
// true

console.log(sentence.includes("Python"));
// false


// ⚠️ DIFFERENT FROM PYTHON
//
// Python:
// "JavaScript" in sentence
//
// JavaScript:
// sentence.includes("JavaScript")


// ============================================================
// 17. INDEXOF
// ============================================================

const language = "JavaScript";

console.log(language.indexOf("Java"));

// 0


console.log(language.indexOf("Script"));

// 4


console.log(language.indexOf("Python"));

// -1


// -1 means the value was not found.


// ============================================================
// 18. SLICE
// ============================================================

const word = "JavaScript";

console.log(word.slice(0, 4));

// Java


// Python:
//
// word[0:4]


// Another example:

console.log(word.slice(4));

// Script


// ============================================================
// 19. SPLIT
// ============================================================

const sentence2 = "Python JavaScript SQL";

const words = sentence2.split(" ");

console.log(words);

// ["Python", "JavaScript", "SQL"]


// Python:
//
// sentence.split(" ")


// ============================================================
// 20. JOIN
// ============================================================

const skills2 = ["Python", "SQL", "Machine Learning"];

console.log(skills2.join(" "));

// Python SQL Machine Learning


// ⚠️ DIFFERENT SYNTAX FROM PYTHON
//
// Python:
// " ".join(skills2)
//
// JavaScript:
// skills2.join(" ")


// ============================================================
// 21. TEMPLATE LITERALS
// ============================================================

// ⚠️ IMPORTANT JAVASCRIPT CONCEPT
// Uses backticks ` `

const studentName = "Divyansh";
const age = 18;

console.log(`My name is ${studentName}`);
console.log(`I am ${age} years old`);


// Multiple variables:

console.log(
    `My name is ${studentName} and I am ${age} years old.`
);


// Python:
//
// f"My name is {studentName} and I am {age} years old."


// ============================================================
// 22. LOOP THROUGH STRING
// ============================================================

const name2 = "Divyansh";

for (let i = 0; i < name2.length; i++) {
    console.log(name2[i]);
}

// Output:
// D
// i
// v
// y
// a
// n
// s
// h


// ============================================================
// 23. LOOP THROUGH STRING USING FOR...OF
// ============================================================

// Cleaner way:

for (const character of name2) {
    console.log(character);
}


// Python:
//
// for character in name2:
//     print(character)


// ============================================================
// 24. COUNT CHARACTERS
// ============================================================

const word2 = "javascript";

let count = 0;

for (const character of word2) {
    count++;
}

console.log(count);

// 10


// ============================================================
// 25. COUNT A SPECIFIC CHARACTER
// ============================================================

const word3 = "banana";

let aCount = 0;

for (const character of word3) {

    if (character === "a") {
        aCount++;
    }

}

console.log(aCount);

// 3


// ============================================================
// 26. REVERSE A STRING
// ============================================================

const original = "JavaScript";

let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

console.log(reversed);

// tpircSavaJ


// ============================================================
// 27. CHECK PALINDROME
// ============================================================

const word4 = "madam";

let reverseWord = "";

for (let i = word4.length - 1; i >= 0; i--) {
    reverseWord += word4[i];
}

if (word4 === reverseWord) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}


// ============================================================
// 28. FIND EVEN NUMBERS USING LOOP
// ============================================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


// ============================================================
// 29. SUM OF NUMBERS
// ============================================================

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// 55


// ============================================================
// 30. PRACTICAL EXAMPLE
// ============================================================

const skills3 = [
    "Python",
    "SQL",
    "Machine Learning",
    "JavaScript"
];

for (const skill of skills3) {

    if (skill.includes("Machine")) {
        console.log(`${skill} found!`);
    } else {
        console.log(skill);
    }

}


// ============================================================
// PYTHON → JAVASCRIPT QUICK REVISION
// ============================================================
//
// LOOPS
//
// Python                      JavaScript
// ------------------------------------------------------------
//
// for i in range(5)       →   for (let i = 0; i < 5; i++)
//
// for x in arr            →   for (const x of arr)
//
// while condition:        →   while (condition) { }
//
// break                   →   break
//
// continue                →   continue
//
//
// STRINGS
//
// Python                      JavaScript
// ------------------------------------------------------------
//
// len(text)               →   text.length
//
// text.lower()            →   text.toLowerCase()
//
// text.upper()            →   text.toUpperCase()
//
// text.strip()            →   text.trim()
//
// "x" in text             →   text.includes("x")
//
// text.find("x")          →   text.indexOf("x")
//
// text[0:4]               →   text.slice(0, 4)
//
// text.split(" ")         →   text.split(" ")
//
// " ".join(arr)           →   arr.join(" ")
//
// f"{name}"               →   `${name}`
//
//
// ============================================================
// ⭐ MOST IMPORTANT THINGS TO REMEMBER
// ============================================================
//
// 1. JavaScript doesn't have Python's range().
// 2. for...of → values.
// 3. for...in → keys.
// 4. while works almost the same as Python.
// 5. do...while executes at least once.
// 6. break stops the loop.
// 7. continue skips an iteration.
// 8. .length instead of len().
// 9. .includes() instead of Python's "in".
// 10. .slice() for extracting strings.
// 11. .split() converts string → array.
// 12. .join() converts array → string.
// 13. Template literals use backticks.
// 14. Strings use zero-based indexing.
// 15. Strings can be iterated using for...of.
//
// ============================================================