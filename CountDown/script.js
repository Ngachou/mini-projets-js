function countDate(date) {
  const currentDatate = new Date().getTime();
  const newDate = date - currentDatate;

  if (newDate < 0) return console.log("Date deja passer");

  const d = new Date(newDate);

  return {
    jours: Math.floor(newDate / (24 * 60 * 60 * 1000)),
    Heures: Math.floor(newDate / (60 * 60 * 1000)),
    Minute: Math.floor(newDate / (60 * 1000)),
    secondes: Math.floor(newDate / 1000),
  };
}

console.log(countDate(new Date("2026-06-07T07:04:12.464Z").getTime()));
