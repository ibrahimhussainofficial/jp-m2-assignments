// Global Scope:

// var age = 20
// let name = "Ibrahim"
// const email = "ibrahimhussain.dev@gmail.com"
// console.log(name, age, email);
// yes, they are accessible globally

// Function Scope:

// function func() {
//     var address = "Karachi"
//     let firstName = "Ibrahim"
//     const lastName = "Hussain"
// }
// console.log(firstName, lastName, address);
// they are not accessible outside of the function
// ReferenceError in all

// Block Scope:

// if (true) {
//     var abc = "abc"
//     let efg = "efg"
//     const hij = "hij"
// }
// console.log(abc); // accessible outside of block
// console.log(efg); // ReferenceError
// console.log(hij); // ReferenceError

// Hoisting with var:

// console.log(address);
// var address = "Karachi"
// undefined

// Hoisting with let and const:

// console.log(firstName);
// ReferenceError: Cannot access 'fisrtNmae' before initialization
// console.log(lastName);
// ReferenceError: Cannot access 'lastName' before initialization
// let firstName = "Ibrahim"
// const lastName = "Hussain"

// Re-declaration:

// var var1 = "var1"
// var var1 = "var1"
// nothing happened

// let let1 = "let1"
// let let1 = "let1"
// SyntaxError: let1 already decleared

// const const1 = "const1"
// const const1 = "const1"
// SyntaxError: const1 already decleared

// Re-assignment:

// var var1 = "var1"
// var1 = "var11"
// works fine

// let let1 = "let1"
// let1 = "let11"
// works fine

// const const1 = "const1"
// const1 = "const11"
// TypeError: Assignment to constant variable.

// Temporal Dead Zone (TDZ):

// {
//     console.log(let2);
//     let let2 = "let2"
// }
// {
//     console.log(const2);
//     let const2 = "const2"
// }
// ReferenceError : TDZ is the “no-access zone” for let and const before their declaration line is reached.

// When to use var, let, and const:

// Good use case for var
// Function-scoped variable (accessible anywhere inside the function)
// function func() {
//   var message = "Hello";
//   if (true) {
//     var message = "Re-declared inside block";
//   }
//   console.log(message); // "Re-declared inside block"
// }
// func();

// Good use case for let
// Block-scoped variable (separate scope inside the block)
// function func() {
//   let count = 1;
//   if (true) {
//     let count = 2; // different variable (block scope)
//     console.log("Inside block:", count); // 2
//   }
//   console.log("Outside block:", count); // 1
// }
// func();

// Good use case for const
// Constant values that should never change
// const API_URL = "https://api.example.com";
// const PI = 3.14159;

// String Interpolation:

// let firstName = "Ibrahim"
// let lastName = "Hussain"
// console.log(`${firstName} ${lastName}`);

// Multi-line Strings:

// let address = `
// House No. 123, Block 1
// Karachi, Pakistan
// Postal Code: 12345
// `
// console.log(address);

// Simple Expressions:

// let num1 = 12
// let num2 = 23
// console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);

// Function Calls:

// function sum(num1, num2) {
//   return (sum = num1 + num2);
// };
// console.log(`the sum of 5 and 7 is ${sum(5, 7)}`);

// Creating a Tagged Template:

// function tag(str) {
//   console.log(str);
// }
// let name = "Ali"
// tag(`Hello ${name}`)

// Formatting:

// function tag(str) {
//   console.log(str.toUpperCase());
// }
// let name = "Ali"
// tag(`hello ${name}`)

// Conditional Logic:

// let currentHour = new Date().getHours()
// console.log(`Good ${currentHour < 12 ? "morning" : "afternoon"}! The currnt hour is ${currentHour}`);

// Loops within Template Literals:

// const list = ["milk", "egg", "apple", "mango"]
// console.log(`
//     <ul>
//         ${list.map(item=>`<li>${item}</li>`).join("")}
//     </ul>
//     `);

// Escaping Backticks:

// let str = `we can use backtick \` like this`
// console.log(str);

// Nested Template Literals:

// let table = `
// <table>
//     <tr>
//         <td>Name</td>
//         <td>Ibrahim</td>
//     </tr>
//     <tr>
//         <td>Name</td>
//         <td>Ali</td>
//     </tr>
//     <tr>
//         <td>Name</td>
//         <td>Zaid</td>
//     </tr>
// </table>
// `
// console.log(table);

// Simple Condition:

// let age = 18
// let canVote = (age >= 18) ? "Yes" : "No"
// console.log(canVote);

// Even or Odd:

// let number = 4
// let evenOrOdd = !(number % 2) ? "Even" : "Odd"
// console.log(evenOrOdd);

// Grade Evaluation:

// let score = 78
// let grade = (score >= 90) ? "A" :
//             (score >= 80) ? "B" :
//             (score >= 70) ? "C" :
//             (score >= 60) ? "D" :
//             "F"
// console.log(grade);

// Login Status:

// let isLoggedIn = true
// let statusMessage = (isLoggedIn && true) ? "Welcome back!" : "Please log in"
// console.log(statusMessage);

// Discount Eligibility:

// let isMember = true
// let purchaseAmount = 120
// let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.1 : 0
// console.log(discount);

// Determine Max Value:

// function maxValue(a, b) {
//     return (a>b) ? a : b
// }
// console.log(maxValue(43, 32));

// Greeting Message:

// function greet(name) {
//     return (name == undefined || name == "") ? `Hello, guest!` : `Hello, ${name}!`
// }
// console.log(greet("Ibrahim"));
// console.log(greet(""));
// console.log(greet());

// Mapping Values:

// const arr = [3, 4, 2, 5, 1]
// let newArr = arr.map(num => (
//     (num % 2 === 0) ? num * 2 : num * 3
// ))
// console.log(newArr);

// Filtering Values:

// let str = ["abc", "hello", "hi", "Karachi"]
// let newStr = str.filter(item => (item.length > 3 ? true : false))
// console.log(newStr);

// Copying an Array:

// const originalArray = ["abc", "xyz", "hi"]
// const copiedArray = [...originalArray]
// console.log(originalArray);
// console.log(copiedArray);

// Merging Arrays:

// const array1 = [1, 4, 8]
// const array2 = [2, 5, 9]
// const mergedArray = [...array1, ...array2]
// console.log(mergedArray);

// Adding Elements to an Array:

// const numbers = [1, 5, 6, 2, 9];
// const updatedNumbers = [2, ...numbers, 7]
// console.log(updatedNumbers);

// Copying an Object:

// const originalObject = {
//   name: "Asad",
//   age: 22,
// };
// const copiedObject = { ...originalObject };
// console.log(originalObject);
// console.log(copiedObject);

// Merging Objects:

// const object1 = {name:"Asad", city:"Karachi"}
// const object2 = {name:"Zaid", age:19}
// const mergedObject = {...object1, ...object2}
// console.log(mergedObject);
// // Object 2 overwrite object 1

// Updating Object Properties:

// const user = { name: "Ali", age: 21, email: "abc@gmail.com" };
// const updatedUser = {...user, email:"xyz@gmail.com", address:"Pakistan"}
// console.log(updatedUser);

// Passing Array Elements as Arguments:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [2, 5, 7];
// console.log(sum(...numbers));

// Combining Multiple Arrays:

// function combineArrays(...arrays) {
//     return [...arrays.flat()]
// }
// console.log(combineArrays([1,2],[3,6],[4,7],[2,1]));

// Rest Parameter with Spread Operator:

// function multiply(num, ...nums) {
//   return nums.map((number) => number * num);
// }
// console.log(multiply(2, 1, 2, 3, 4, 5));

// Spread Operator with Nested Structures:

// const nestedArray = [1, 4, [2, 3], 6, [5, 7]]
// const copiedArray = [...nestedArray]
// copiedArray[2][0] = 4
// copiedArray[4].push(9)

// console.log(nestedArray);
// console.log(copiedArray);
// // inner arrays are still shared

// Sum Function:

// function sum(...nums) {
//   let total = 0
//   for (const num of nums) {
//     total += num
//   }
//   return total
// }
// console.log(sum(2,5,3,10));
// console.log(sum(3,7,3,2));

// Average Function:

// function average(...nums) {
//     let totalSum = 0
//     let totalNum = 0
//     for (const num of nums) {
//         totalSum += num
//         totalNum ++
//     }
//     return numsAverage = totalSum / totalNum
// }
// console.log(average(2,3,5,10));
// console.log(average(2,3));

// First and Rest:

// const numbers = ["first", "second", "3rd", "4th", "rest"]
// let [first, ...rest] = numbers
// console.log(first);
// console.log(rest);

// Skip and Rest:

// const colors = ["red", "white", "black", "pink", "green"]
// let [, , ...remainingColors] = colors
// console.log(remainingColors);

// Basic Destructuring:

// const person = {
//     name: "Ali",
//     age: 21,
//     email: "abc@gmail.com",
//     address: "Karachi"
// }
// let {name, email, ...rest} = person
// console.log(name);
// console.log(email);
// console.log(rest);

// Nested Destructuring:

// const student = {
//     id: 123,
//     name: "Asad",
//     grade: "A",
//     info: {
//         age: 21,
//         major: "Computer Science"
//     }
// }
// let {id, name, info:{major}, ...rest} = student
// console.log(id);
// console.log(name);
// console.log(major);
// console.log(rest);

// Filter Even Numbers:

// function filterEven(...nums) {
//     return nums.filter(num => !(num%2))
// }
// console.log(filterEven(2,3,4,5,6));
// console.log(filterEven(2,3,4));

// Combine and Sort Arrays:

// function combineAndSort(...arrays) {
//     let combined = [...arrays.flat()]
//     return combined.sort((a, b) => a-b)
// }
// console.log(combineAndSort([3, 1], [2, 5], [7, 3]));
// console.log(combineAndSort([9, 3, 7], [1, 8]));

// Basic Destructuring:

// const fruits = ["apple", "banana", "cherry"]
// let [firstFruit, secondFruit, thirdFruit] = fruits
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// Skipping Elements:

// const colors = ["red", "green", "blue", "yellow"]
// let [primaryColor, , tertiaryColor,] = colors
// console.log(primaryColor);
// console.log(tertiaryColor);

// Rest Operator:

// const numbers = [1, 2, 3, 4, 5]
// let [firstNumber, ...remainingNumbers] = numbers
// console.log(firstNumber);
// console.log(remainingNumbers);

// Basic Destructuring:

// const person = {
//     name: "Zaid",
//     age: 19,
//     city: "Karachi"
// }
// let {name, age, city} = person
// console.log(name);
// console.log(age);
// console.log(city);

// Renaming Variables:

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2024,
// };
// let { make: carMake, model: carModel, year: carYear } = car;
// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

// Default Values:

// const settings = {
//     theme: "dark",
//     language: "English"
// }
// let {theme, language = "English"} = settings
// console.log(theme);
// console.log(language);

// Array of Arrays:

// const nestedArray = [[1, 2], [3, 4], [5, 6]]
// let [[a], [b], [c]] = nestedArray
// console.log(a);
// console.log(b);
// console.log(c);

// Object within an Object:

// const profile = {
//     username: "Ali",
//     details: {
//         email: "abc@gmail.com",
//         address: "Karachi"
//     }
// }
// let {username, details:{email, address}} = profile
// console.log(username);
// console.log(email);
// console.log(address);

// Mix of Arrays and Objects:

// const data = {
//     id: 321,
//     info: [
//         {name: "Alice"},
//         {age: 25}
//     ]
// }
// let {id, info:[{name},{age}]} = data
// console.log(id);
// console.log(name);
// console.log(age);

// Array Parameters:

// function printCoordinates([x, y]) {
//     console.log(x);
//     console.log(y);
// }
// printCoordinates([2,5])
// printCoordinates([6,1])

// Object Parameters:

// function displayUser({name, age}) {
//     console.log(name);
//     console.log(age);
// }
// displayUser({name: "Ali", age: 23})
// displayUser({name: "Asad", age: 21})

// List Property Names:

// const book = {
//     title: "JavaScript Basics",
//     author: "Ali Khan",
//     year: 2022
// }
// console.log(Object.keys(book));

// Count Properties:

// const student = {
//     name: "Zaid",
//     age: 19,
//     grade: "A",
//     school: "ABC"
// }
// let numberOfProperties = Object.keys(student).length
// console.log(numberOfProperties);

// Iterate Over Keys:

// const product = {
//     name: "nike",
//     price: 2999,
//     category: "shoes"
// }
// Object.keys(product).forEach(key => {
//     console.log(`${key}: ${product[key]}`);
// })

// List Property Values:

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   genre: "Science Fiction"
// }
// console.log(Object.values(movie));

// Sum Values:

// const scores = {
//   math: 85,
//   science: 90,
//   english: 78
// };
// let values = Object.values(scores)
// let total = 0
// values.forEach(item => {
//   total += item
// })
// console.log(total);

// Iterate Over Values:

// const user = {
//   username: "Ali",
//   email: "abc@gmail.com",
//   location: "Karachi"
// }
// const values = Object.values(user)
// values.forEach(value => {
//   console.log(value);
// })

// List Entries:

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2024,
// }
// console.log(Object.entries(car));

// Convert Object to Array:

// const person = {
//   firstName: "Ibrahim",
//   lastName: "Hussain",
//   age: 20
// }
// console.log(Object.entries(person));

// Iterate Over Entries:

// const settings = {
//   theme: "dark",
//   notifications: true,
//   privacy: "high"
// }
// const entries = Object.entries(settings)
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// })

// Filter Keys:

// const inventory = {
//   apples: 6,
//   bananas: 12,
//   oranges: 4,
//   grapes: 18
// }
// const filtered = Object.keys(inventory).filter((key) => inventory[key] > 10)
// console.log(filtered);

// Transform Values:

// const temperatures = {
//   morning: 32,
//   afternoon: 29,
//   evening: 25
// }
// const convertion = Object.entries(temperatures).map(([key, value]) => [
//   key, 
//   (value*9) / 5 + 32
// ])
// const transformed = Object.fromEntries(convertion)
// console.log(transformed);

// Key-Value Swap:

// const roles = {
//   admin: "Ali",
//   editor: "Asad",
//   viewer: "Zaid"
// }
// const swapped = Object.fromEntries(
//   Object.entries(roles).map(([key, value]) => [value, key])
// )
// console.log(swapped);

// Filter and Map:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function filterAndMap(arr, filterFunc, mapFunc) {
//   return arr.filter(filterFunc).map(mapFunc)
// }
// console.log(filterAndMap(
//   numbers, 
//   num => num % 2 !== 0, 
//   num => num * num
// ));

// Sort and Reduce:

// const words = ["apple", "banana", "cherry", "date"]
// function sortAndReduce(arr, sortFunc, reduceFunc, initialValue) {
//   return arr.sort(sortFunc).reduce(reduceFunc, initialValue)
// }
// console.log(sortAndReduce(
//   words,
//   (a, b) => a.localeCompare(b),
//   (acc, word) => acc + word,
//   ""  
// ));

// Simple Callback:

// function greet(name, Callback) {
//   Callback(`Hello ${name}`)
// }
// function printGreeting(msg) {
//   console.log(msg);
// }
// greet("Ibrahim", printGreeting)

// Asynchronous Callback:

// function fetchData(displayData) {
//   setTimeout(() => {
//     const data = {name: "Ali", age: 21}
//     displayData(data)
//   }, 3000);
// }
// function displayData(data) {
//   console.log(data);
// }
// fetchData(displayData)

// Simple Arrow Function:

// let add = (a, b) => a + b // short
// // let add = (a, b) => {
// //   return a + b
// // }
// console.log(add(3, 5));

// Arrow Function with Array Methods:

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.map(num => num*num));

// Variable Scope:

// function outer() {
//   let x = "xyz"
//   function inner() {
//     console.log(x);
//   }
//   inner()
// }
// outer()

// Closure:

// function createCounter() {
//   let counter = 0
//   return function() {
//     counter++
//     console.log(counter);
//   }
// }
// let counter1 = createCounter()
// let counter2 = createCounter()
// counter1()
// counter1()
// counter2()

// Simple Default Parameters:

// function greet(name, greetMsg = "Hello") {
//   console.log(`${greetMsg}, ${name}`);
// }
// greet("Ibrahim", "Hi")
// greet("Ibrahim")

// Default Parameters with Other Arguments:

// function calculateArea(width = 10, height= 5) {
//   return area = width * height
// }
// console.log(calculateArea(20, 10));
// console.log(calculateArea());

// Square Numbers:

// const numbers = [1, 2, 3, 4, 5]
// const squaredNum = numbers.map(num => num*num)
// console.log(squaredNum);

// Convert to Uppercase:

// const words = ["apple", "banana", "cherry"]
// const uppercase = words.map(word => word.toUpperCase())
// console.log(uppercase);

// Filter Even Numbers:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNums = numbers.filter(num => !(num % 2))
// console.log(evenNums);

// Filter Long Words:

// const words = ["apple", "banana", "cherry", "date"]
// const longWords = words.filter(word => word.length > 5)
// console.log(longWords);

// Log Numbers:

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => console.log(num))

// Log Word Lengths:

// const words = ["apple", "banana", "cherry"]
// words.forEach(word => console.log(word.length))

// Sum of Numbers:

// const numbers = [1, 2, 3, 4, 5]
// let sum = numbers.reduce((acc, num) => acc + num, 0)
// console.log(sum);

// Concatenate Strings:

// const words = ["Hello", "world", "this", "is", "JavaScript"]
// let str = words.reduce((acc, word) => acc + " " + word, "")
// console.log(str);

// Check for Even Number:

// const numbers = [1, 3, 5, 7, 8]
// let evenCheck = numbers.some(num => !(num%2))
// console.log(evenCheck);

// Check for Long Word:

// const words = ["apple", "banana", "cherry", "date"]
// let longWord = words.some(word => word.length > 5)
// console.log(longWord);

// Check All Even Numbers:

// const numbers = [2, 4, 6, 8, 10]
// let allEven = numbers.every(num => !(num%2))
// console.log(allEven);

// Check All Long Words:

// const words = ["elephant", "giraffe", "hippopotamus"]
// let allLong = words.every(word => word.length > 5)
// console.log(allLong);

// Find First Even Number:

// const numbers = [1, 3, 5, 7, 8]
// let firstEven = numbers.find(num => !(num%2))
// console.log(firstEven);

// Find Long Word:

// const words = ["apple", "banana", "cherry", "date"]
// let firstLong = words.find(word => word.length > 5)
// console.log(firstLong);

// Find Index of First Even Number:

// const numbers = [1, 3, 5, 7, 8]
// let evenIndex = numbers.findIndex(num => !(num%2))
// console.log(evenIndex);

// Find Index of Long Word:

// const words = ["apple", "banana", "cherry", "date"]
// let longIndex = words.findIndex(word => word.length > 5)
// console.log(longIndex);

// Simple Promise:

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
// delay(2000).then(() => {
//   console.log("Hello, world!");
// })

// Promise Chain:

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({name: "Asad", role: "Developer"})
//     }, 1000)
//   })
// }
// fetchData().then(data => {
//   console.log(data);
// })

// Error Handling:

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {name: "Ali"}
//       if (user.age) {
//         resolve(user)
//       } else {
//         reject("Error: User data is missing the age property.")
//       }
//     }, 1000)
//   })
// }
// fetchUserData().then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// })

// Simulate Network Request:

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.5
//       if (success) {
//         resolve({ city: "Karachi", temperature: 32, condition: "Sunny" })
//       } else {
//         reject("Network Error: Failed to fetch weather data.")
//       }
//     }, 1000)
//   })
// }
// getWeather().then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// })

// Simple async Function:

// delay function from Task 1
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function sayHello() {
//   await delay(2000)
//   console.log("Hello, world!");
// }
// sayHello()

// Fetch Data with async/await:

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {name: "Ali"}
//       if (user.age) {
//         resolve(user)
//       } else {
//         reject("Error: User data is missing the age property.")
//       }
//     }, 1000)
//   })
// }
// async function getUserData() {
//   try {
//     let user = await fetchUserData()
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserData()

// Fetch and Process Data:

// function fetchUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({id: 1, name: "Asad", age:22})
//     }, 1000)
//   })
// }
// function fetchPosts(userId) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         { id: 101, userId, title: "first post" },
//         { id: 102, userId, title: "Learning JavaScript" }
//       ]);
//     }, 1000)
//   })
// }
// async function getUserAndPosts() {
//     const user = await fetchUser()
//     console.log(user);
//     const posts = await fetchPosts(user.id)
//     console.log(posts);
// }
// getUserAndPosts()

// Error Handling in async/await:

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = null;
//       if (user) {
//         resolve(user);
//       } else {
//         reject("Error: User not found.");
//       }
//     }, 1000);
//   });
// }
// async function getUserInfo() {
//   try {
//     const user = await fetchUser();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserInfo()

// Simulate API Calls:

// function apiCall() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.round(Math.random() * 2000 + 500)
//     setTimeout(() => {
//       let success = Math.random() > 0.2
//       if (success) {
//         resolve({name: "Ali", age: 21})
//       } else {
//         reject("error fetching data")
//       }
//     }, delay)
//   })
// }
// async function getData() {
//   try {
//     let data1 = await apiCall()
//     console.log(data1);

//     let data2 = await apiCall()
//     console.log(data2);

//     let data3 = await apiCall()
//     console.log(data3);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData()