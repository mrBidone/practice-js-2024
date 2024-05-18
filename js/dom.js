
const car = document.querySelector(".random-image");

console.log(car)
console.log(car.src);


car.alt = "cucurusa";

console.log(car.alt);

// ==========================================================

const model = document.querySelector(".text");

const modelName = document.querySelector(".sub-text");

console.log(model.textContent);

modelName.textContent = "Mercedes-Benz";

console.log(modelName.textContent);

console.log(modelName.classList.contains("sub-text"))
console.log(modelName.classList.contains("sub"))

modelName.classList.add("model-name", "mercedes-model");
console.log(modelName.classList);

modelName.classList.remove("mercedes-model")
console.log(modelName.classList); 

modelName.classList.toggle("is-active");
console.log(modelName.classList)

modelName.classList.replace("sub-text", "model-text")
console.log(modelName.classList)

console.log(modelName.style)

modelName.style.color = "tomato";
modelName.style.fontSize = "20px";

// =================Attributes====================

console.log(modelName.hasAttribute("alt")) //false
console.log(car.hasAttribute("alt")) //true

console.log(car.getAttribute("alt"))
console.log(car.getAttribute("src"))

car.removeAttribute("alt");

console.log(car.hasAttribute("alt"))

car.setAttribute("alt", "Random picture connected with Mercedes-Benz");
console.log(car.alt);

// ==============DATA-Attributes==================

const firstButton = document.querySelector(".btn");
console.log(firstButton);

const saveBtn = firstButton.querySelector("button[data-action='save']");

console.log(firstButton.dataset.action);

firstButton.dataset.action = "update";
console.log(firstButton.dataset.action);

firstButton.dataset.role = "admin";
console.log(firstButton.dataset.role);

// ==============CREATE AND REMOVE ELEMENTS==================
// знайшли body
const body = document.querySelector("body"); 
// Створюємо контейнер і кладемо його у body
const divForTitle = document.createElement("div");
divForTitle.classList.add("js-container-create");

// Створюємо елемент з контентом, атрибутами та стилями
const mainTitle = document.createElement("h1");
mainTitle.classList.add("main_title");
mainTitle.textContent = "Main page title";
console.log(mainTitle);

// Додаємо контейнер до DOM дерева у body, після чого елемент кладемо у контейнер.

body.prepend(divForTitle);
divForTitle.append(mainTitle);

console.log(divForTitle);

// видаляємо кнопку "RESET" з DOM
const btnReset = document.querySelector(".btn-reset");
btnReset.remove();

// ============== method innerHTML==================
// Додаємо елемент у створенний раніше ДОМ-контейнер
// const secondaryTitle = document.querySelector(".js-container-create");
// secondaryTitle.innerHTML = 'New <span class="accent-color">secondary</span> title';
// // видалення елементу з контейнеру шляхом передачі пустого рядка
// secondaryTitle.innerHTML = "";

// Створення Однотипної (шаблонної) розмітки із масиву даних.
// const listCreate = document.querySelector(".js-container-create")
// listCreate.innerHTML = '<ul class="js-create-list"></ul>'

// const cars = ["BMW", "AUDI", "MERCEDES-BENZ", "VOLKSWAGEN", "OPEL"];
// const listItemsCreate = document.querySelector(".js-create-list");

// const markup = cars.map((car) => `<li class="list-item">${car}</li>`).join("");
// console.log(markup);
// listCreate.innerHTML = markup;

// ============== method insertAdjacentHTML()==================

divForTitle.style.border = "1px solid red";
divForTitle.style.width = "300px"; 



divForTitle.insertAdjacentHTML("beforebegin", '<h2 class="secondary-title">Beforebegin Title</h2>');
divForTitle.insertAdjacentHTML("afterbegin", '<h2 class="secondary-title1">AfterBegin Title</h2>');
divForTitle.insertAdjacentHTML("beforeend", '<h2 class="secondary-title2">BeforeEnd Title</h2>');
divForTitle.insertAdjacentHTML("afterend", '<h2 class="secondary-title3">AfterEnd Title</h2>');










