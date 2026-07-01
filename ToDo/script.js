const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const liste = document.querySelector(".liste");
let todos = [];

function ajouter(text) {
  if (text.trim() == "") {
    return alert("va chier");
  }
  const todo = {
    id: Date.now(),
    text,
  };

  const li = document.createElement("li");
  const btnsup = document.createElement("button");
  btnsup.textContent = "Supp";
  li.textContent = texte;
  li.appendChild(btnsup);
  liste.appendChild(li);
  input.value = "";
  btnsup.addEventListener("click", () => {
    li.remove();
  });
  todos.push(todo);
}
btn.addEventListener("click", () => {
  ajouter(input.value);
  console.log(input.value);
});
