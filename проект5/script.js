console.log("Привет! Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
// Бургер-меню
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Кнопка "Показать больше"
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});