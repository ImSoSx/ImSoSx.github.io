const btn = document.querySelector(".tooglethm");

btn.addEventListener("click", function () {
  const list = document.querySelectorAll(
    ".light-theme, .content, header, #footer, html"
  );
  for (const item of list) {
    item.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  }
});

if (localStorage.getItem("darkMode") == "enabled") {
  const list = document.querySelectorAll(
    ".light-theme, .content, header, #footer, html"
  );
  for (const item of list) {
    item.classList.toggle("dark-theme");
  }
}
