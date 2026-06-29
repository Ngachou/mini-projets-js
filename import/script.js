import { some } from "./utils.js";
const tab = [3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 88, 0];
function Moy() {
  console.log(some(tab) / tab.length);
}

document.getElementById("btn").addEventListener("click", Moy);
