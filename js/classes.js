// =================== THIS ===========================
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// =================== МЕТОД CALL() ============================

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call("Hello", mango);
// greet.call(poly, "Привет");

// =================== МЕТОД APPLY() ============================

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Hallo"]);
// greet.apply(poly, ["Aloha!"]);


// =================== МЕТОД BIND() ============================

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice"
// };

// const greet = sayHello.bind(user);

// greet("Aloha");

// =================== МЕТОД BIND() with callbacks ============================

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // TypeError: Cannot read properties of undefined (reading 'firstName')

// =================== МЕТОД BIND() with callbacks ============================

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// =================== ПРОТОТИПИ ОБʼЄКТІВ ============================

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child)

// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.age);
// console.log(child.heritage);

// console.log(parent.isPrototypeOf(child));  //Перевіряє чи є обʼєкт parent прототипом для child
// console.log(child.isPrototypeOf(parent)); //Перевіряє чи є обʼєкт child прототипом для parent

// console.log(child.hasOwnProperty("surname")); //перевіряє наявність власної властивості 
// console.log(child.hasOwnProperty("age"));
// console.log(parent.hasOwnProperty("heritage")); 

// =================== ЛАНЦЮЖОК ПРОТОТИПІВ ОБʼЄКТІВ ============================

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log("A:",child);
// console.log("B:",parent);
// console.log("C:", ancestor);
// console.log(child.name);
// console.log(ancestor.name);
// console.log(parent.name);

// =================== КЛАСИ ============================














