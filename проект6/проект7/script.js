console.log("Привет! Скрипт подключен и работает.");

// ===== Массив проектов и генерация карточек =====
const projects = [
  { id: 1, title: "Лендинг кофейни", category: "frontend", description: "Адаптивная вёрстка на Flexbox и Grid" },
  { id: 2, title: "Бот для Telegram", category: "backend", description: "Python + aiogram, обработка заказов" },
  { id: 3, title: "Игра 2048", category: "frontend", description: "Логика на чистом JS с анимациями" },
  { id: 4, title: "Логотип для бренда", category: "design", description: "Создание фирменного стиля и айдентики" },
  { id: 5, title: "Сайт-портфолио", category: "frontend", description: "Персональный сайт с фильтрацией и поиском" },
  { id: 6, title: "База данных клиентов", category: "backend", description: "SQL + Node.js, REST API" },
];

function createCard(project) {
  return `
    <article class="project-card" data-category="${project.category}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `;
}

function renderProjects(list) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = list.map(createCard).join("");
}

renderProjects(projects);

// ===== Фильтрация =====
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    const filtered = filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

    renderProjects(filtered);
  });
});

// ===== Поиск =====
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProjects(filtered);
});

// ===== Дата в подвале =====
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// ===== Подсветка активного пункта меню =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== Бургер-меню =====
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===== Кнопка "Показать больше" =====
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});

// ===== Переключение темы =====
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// ===== Валидация формы =====
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset();
  }
});