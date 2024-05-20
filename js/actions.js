const actionBody = document.querySelector("body");

const addActionBtn = actionBody.insertAdjacentHTML("afterbegin", '<button type="button" class="js-test-button">TEST-BUTTON</button>');

const actionBtn = document.querySelector(".js-test-button");
console.log(actionBtn);

actionBtn.classList.add("btn-style");

const darkTheme = actionBtn.addEventListener("click", () => {
    actionBody.classList.toggle(callback);
    console.log("Включилась темная тема");
    actionBtn.classList.toggle("btn-action-style");
    console.log("Включился акцентированный стиль для кнопки");
    actionBtn.textContent = "Night theme";
});


















