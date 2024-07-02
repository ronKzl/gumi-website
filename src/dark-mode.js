const themeToggleBtns = document.querySelectorAll("#theme-toggle");
// state
const theme = localStorage.getItem("theme");
theme && document.body.classList.add(theme); //on mount

//handlers
const handleThemeToggle = () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
  } else {
    localStorage.removeItem("theme");
    document.body.removeAttribute("class");
  }
};

themeToggleBtns.forEach((btn) =>
  btn.addEventListener("click", handleThemeToggle)
);
