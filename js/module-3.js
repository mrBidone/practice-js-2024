// 
// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
// - [Kata #12](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript)

// TASK #1

// DESCRIPTION:

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

console.log("Task #1===========================================");

// function sortedStrings (array) {
//     console.log(array);

//     array.sort(function (a, b) {
//         console.log("RESULT - A:", a);
//         console.log("RESULT - B:", b);
        
//         return a.length - b.length;
//     });
//     return array;

// }


// console.log(sortedStrings(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// console.log(sortedStrings(["Mercedes", "BMW", "Audi", "Mitsubishi", "Ford", "Maseratti", "KIA", "Vaz", "VW"]));


console.log("Task #2===========================================");

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

console.log("Task #3==========================================");

// Виконай рефакторинг функції countProps(object), замінивши 
// перебір ключів за допомогою циклу for…in на метод Object.keys() 
// для отримання масиву властивостей.Функція має повернути кількість 
// властивостей в об'єкті object.
// 
// TEST:
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція використовує метод Object.keys()

// function countProps(object) {
//   let propCount = 0;
//     propCount = Object.keys(object).length;


//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}));

console.log("Task #4==========================================");

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, 
// а у змінну values - масив їх значень. 
// Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

console.log("Task #5==========================================");

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let newArray = [];

// //     for (let product of products) {

// //         Object.keys(product).includes(propName) ? newArray.push(product[propName]) : [];
// //         } 
        
//     //     return newArray;
    // =================================================================
//     // for (let product of products) {
//     //     if (Object.keys(product).includes(propName)) {
//     //        newArray.push(product[propName])
//     //    } 
        
      
//     // }
//     // console.log(newArray);
// }

// console.log(getAllPropValues("quantity"));


console.log("Task #6==========================================");


function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
    
let message = "";

    for (let product of products) {
message = product.name === productName ? product.price * product.quantity : `Product ${productName} not found!`;

    }
  return message;


}

console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Scanner"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Blaster"));
