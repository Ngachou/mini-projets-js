const form = document.getElementById("form");
const btn = document.querySelector(".btn");
const input = document.getElementById("input");

function countDate(date) {
  const currentDatate = new Date().getTime();
  const newDate = date - currentDatate;
  if (newDate < 0) return console.log("Date deja passer");
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
  let span = document.createElement("span");
  form.appendChild(span);
  let date = new Date(input.value).getTime();
  console.log(input.value);

  let d = countDate(date);
  let t = setInterval(() => {
    date = new Date(date).getTime();
    d = countDate(date);

    span.innerHTML = `${d.jours} Days :${d.Heures} Hours :${d.Minute} Minute :${d.secondes} Secondes`;
  }, 1000);
  countDate(date - 1000);
});
