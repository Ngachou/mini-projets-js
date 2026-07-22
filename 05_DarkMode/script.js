const btn = document.getElementById("toggleBtn");
const html = document.documentElement;
const currenttheme = localStorage.getItem("mode") || "light";
html.setAttribute("data-theme", currenttheme);
btn.addEventListener("click", () => {
  const currenttheme = html.getAttribute("data-theme");
  const newTheme = currenttheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("mode", newTheme);
});
