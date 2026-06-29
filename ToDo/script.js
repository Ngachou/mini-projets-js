const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const tache = [];
function Addtask(texte) {
  if (texte.trim() == "") return alert("tes noyaux");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.textContent = texte;
  button.textContent = "Supp";
  li.appendChild(span);
  li.appendChild(button);
  list.appendChild(li);
}
btn.addEventListener("click", () => {
  const t = tache.push(Addtask(input.value));
  console.log(t);
});
