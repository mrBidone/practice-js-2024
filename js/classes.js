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
// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//     #brand  // <=== ПРИВАТНА ВЛАСТИВІСТЬ! 
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }



// const tesla = new Car({
//     brand: "Tesla",
//     model: "S-model",
//     price: 30000
// });

// console.log(tesla.getPrice())
// console.log(tesla)


// console.log(changeBrand(({ brand: "Nissan", model: "Murano", price: 31700 })));


// =================== SET GET ============================

// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// =================== STATIC VALUES ============================


// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {

//     static maxPrice = 50000;
    
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (Car.maxPrice < newPrice) {
//             return;
//         }; 
//         this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =================== STATIC METODES ===========================

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if(Car.#maxPrice < price){
//       return "Error! Price exceeds the maximum";
//     } return "Success! Price is within acceptable limits";
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// =================== НАСЛІДУВАННЯ КЛАСІВ ===========================

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   }
// }

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }

    blacklist(email) {
       return this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
       return this.blacklistedEmails.includes(email);
  } 
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true






