


// /Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"

// const letMeSeeYourName = (callback) => {
//     const userName = prompt("Enter your name"); 
//     callback(userName);
// }

// const greet = (name) => {
//     console.log(`Hello ${name}`);
// }

// letMeSeeYourName(greet);


// =======================================================

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// const makeProduct = (name, price, callback) => {
//     const product = {
//         name,
//         price,
//         id: Math.random(),
//     }
//     callback(product);
// }

// const showProduct = (product) => {
//     console.log(product);
// }

// makeProduct("iPhone 15", 1200, showProduct);

// =======================================================

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//     },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
// {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// треба отримати масив імен користувачив по гендеру і вік старше 27 років

// const getUsersByGenderByAge = (users, gender, age) => users
//     .filter((user) => user.gender === gender && user.age >= age)
//     .map((user) => user.name);

// const result = getUsersByGenderByAge(users, "male", 27);

// console.log(result)

// ====================MODULE 7-8======================

/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const inputData = document.querySelector("#alertInput");
// const showBtn = document.querySelector("#alertButton");
// const 

// const refs = {
//     taskTitle: document.querySelector(".taskTitle"),
//     alertButton: document.querySelector("#alertButton"),
//     alertInput: document.querySelector("#alertInput")
// };

// refs.alertButton.addEventListener("click", onAlertButtonClick => {
//     refs.taskTitle.textContent = refs.alertInput.value;
// });

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const refs = {
//     statList: document.querySelector(".statList"),
//     calcButton: document.querySelector(".calcButton"),
//     resultButton: document.querySelector("#resultButton"),
//     resultSection: document.querySelector("#resultSection")
// }

// console.log(refs);

// refs.statList.addEventListener("click", onStatListItemClick);

// let total = 0;
// const clickStat = {};

// function onStatListItemClick(event) {
//     total += Number(event.target.dataset.number);
//     clickStat[event.target.textContent] = (clickStat[event.target.textContent] || 0) +1;
//     console.log(clickStat);
// };


// *
// Завдання 9
// Видалити зі списку елементи, які позначені.
// */


/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/



/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/













