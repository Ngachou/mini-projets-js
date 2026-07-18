const btn = document.getElementById("toggleBtn");
const html = document.documentElement;

btn.addEventListener("click", () => {
  const currenttheme = html.getAttribute("data-theme");
  const newTheme = currenttheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
});
