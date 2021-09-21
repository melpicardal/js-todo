const inputEl = document.querySelector(".input-el");
const btnEl = document.querySelector(".btn-el");
const todoList = document.querySelector(".todo-list");

btnEl.addEventListener("click", addTodo);

function addTodo() {
  const inputValue = inputEl.value;
  todoList.insertAdjacentHTML("afterbegin", `<li>${inputValue}</li>`);
  inputEl.value = "";
}

addTodo();
