const container = document.getElementById("container");
const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

function countDate(date) {
  const currentDatate = new Date().getTime();
  const newDate = date - currentDatate;
  if (newDate < 0) return;
  console.log();
  const d = new Date(newDate);
  return {
    jours: Math.floor(newDate / (24 * 60 * 60 * 1000)),
    Heures: Math.floor((newDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
    Minute: Math.floor((newDate % (60 * 60 * 1000)) / (60 * 1000)),
    secondes: Math.floor((newDate % (60 * 1000)) / 1000),
  };
}

btn.addEventListener("click", () => {
  let date = new Date(input.value).getTime();
  console.log(input.value);

  let d = countDate(date);
  let t = setInterval(() => {
    date = new Date(date).getTime();
    d = countDate(date);
    day.innerHTML = `${d.jours} Days `;
    hours.innerHTML = ` :${d.Heures} Hours`;
    minutes.innerHTML = ` :${d.Minute} Minute `;
    secondes.innerHTML = ` :${d.secondes} Secondes`;
  }, 1000);
  countDate(date - 1000);
});
