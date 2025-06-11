// docs/js/main.js

import { API_URL } from "./config.js";

window.addEventListener("DOMContentLoaded", async () => {
  // ====== 1. Перевірка авторизації та підстановка імені користувача ======
  const token  = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Елементи в header
  const loginLink  = document.getElementById("header-login-link");
  const userInfo   = document.getElementById("header-user-info");
  const avatarImg  = document.getElementById("user-avatar");
  const userNameEl = document.getElementById("user-name");

  if (token && userId) {
    console.log("main.js: Есть token и userId. Показываем профиль.");
    // Приховуємо посилання «Войти»
    loginLink?.classList.add("visually-hidden");
    // Показуємо блок з аватаром/іменем
    userInfo?.classList.remove("visually-hidden");

    try {
      // Запитуємо дані профілю (GET /Users/GetUser?userId=...)
      const response = await fetch(
        `${API_URL}/Users/GetUser?userId=${encodeURIComponent(userId)}`,
        {
          headers: { "Authorization": "Bearer " + token }
        }
      );

      console.log("GetUser status:", response.status);
      if (response.ok) {
        const user = await response.json();
        // Підставляємо ім'я користувача
        if (userNameEl) {
          userNameEl.textContent = user.name;
        }
        // Якщо API повернув посилання на аватар (наприклад user.AvatarUrl), можна його використовувати:
        // avatarImg.src = user.AvatarUrl || "img/user-login.svg";
        if (avatarImg) {
          avatarImg.src = "img/user-login.svg";
        }
      } else if (response.status === 401 || response.status === 403) {
        console.warn("Токен прострочений або недійсний - виходимо з авторизации");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        userInfo?.classList.add("visually-hidden");
        loginLink?.classList.remove("visually-hidden");
      } else if (response.status === 404) {
        console.error("GetUser повернув 404 - користувач не знайдений (userId може бути невірний)");
      
        userInfo?.classList.add("visually-hidden");
        loginLink?.classList.remove("visually-hidden");
      } else {
        console.error("Невідома помилка GetUser:", response.status);
      }
    } catch (err) {
      console.error("Помилка під час отримання даних користувача:", err);
      // У разі мережевої помилки - скидаємо авторизацію
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      userInfo?.classList.add("visually-hidden");
      loginLink?.classList.remove("visually-hidden");
    }
  } else {
    console.log("main.js: Немає токена або userId - показуємо кнопку «Увійти»");
    // Якщо не авторизований: показуємо посилання «Увійти» і приховуємо блок з ім'ям
    loginLink?.classList.remove("visually-hidden");
    userInfo?.classList.add("visually-hidden");
  }

  // ====== 2. Гамбургер-меню (відкриття/закриття) ======
  const navBtn    = document.querySelector('.header__nav-btn');
  const navClose  = document.querySelector('.header__nav-close');
  const navList   = document.querySelector('.header__nav-list');
  const menuClose = document.querySelector('.menu--close');
  const navIcons   = document.querySelectorAll('.header__nav-icon');

  navBtn?.addEventListener('click', () => {
    navList?.classList.toggle('header__nav-list--open');
    menuClose?.classList.toggle('menu--open');
    navIcons.forEach(icon => {
      icon.classList.toggle('header__nav-icon--open');
    });
  });

  navClose?.addEventListener('click', () => {
    navList?.classList.remove('header__nav-list--open');
    menuClose?.classList.remove('menu--open');
    navIcons.forEach(icon => {
      icon.classList.remove('header__nav-icon--open');
    });
  });

  menuClose?.addEventListener('click', () => {
    navList?.classList.remove('header__nav-list--open');
    menuClose?.classList.remove('menu--open');
    navIcons.forEach(icon => {
      icon.classList.remove('header__nav-icon--open');
    });
    
  });
  

  // ====== 3. Скрол до секції при кліці на «Забронювати стіл» або «Tables» ======
  document.querySelectorAll('.booking').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = anchor.getAttribute('href');
    if (href === '#' || href.startsWith('#')) {
      e.preventDefault();

      const targetSection = document.getElementById(
        href === '#' ? 'tables' : href.slice(1)
      );
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  });
});
    // ====== 4. Обробка кнопки "Вихід" ======
  const logoutButton = document.getElementById("logout-button");

  logoutButton?.addEventListener("click", (e) => {
    e.preventDefault();

    // Видаляємо токен і userId з localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Приховуємо блок з ім'ям, показуємо кнопку «Увійти»
    userInfo?.classList.add("visually-hidden");
    loginLink?.classList.remove("visually-hidden");

    // Перенаправляємо на головну або логін (за бажанням)
    window.location.href = "index.html"; // або "login.html"
  });

  // ====== 5. Відкриття/закриття модалки броні ======
  const modal = document.getElementById("booking-modal");

  if (modal) {
    const backdrop   = modal.querySelector(".modal-backdrop");
    const closeBtn   = document.getElementById("booking-close");
    const form       = document.getElementById("booking-form");
    const nameInput  = document.getElementById("booking-name");
    const tableInput = document.getElementById("booking-table");
    const timeInput  = document.getElementById("booking-time");

    // Всі кнопки бронювання
    document.querySelectorAll(".tables__card-btn, .map__booking-btn, .map__dot-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();

        if (!tableInput || !nameInput || !timeInput) return;

        const TableId = btn.getAttribute("data-table-id") || "";
        tableInput.value = TableId;
        nameInput.value  = "";
        timeInput.value  = "";

        modal.classList.remove("hidden");
      });
    });

    // Закриття модалки
    closeBtn?.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    backdrop?.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    // Відправка форми
    form?.addEventListener("submit", async e => {
      e.preventDefault();

      if (!nameInput || !tableInput || !timeInput) return;

      const CustomerName = nameInput.value.trim();
      const TableId = parseInt(tableInput.value, 10);
      const BookingTime = timeInput.value;

      if (!CustomerName || !BookingTime || isNaN(TableId) || TableId <= 0) {
      alert("Заповніть всі поля коректно!");
      return;
    }

      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/api/Booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": "Bearer " + token })
          },
          body: JSON.stringify({ CustomerName, TableId, BookingTime })
        });

        if (!res.ok) {
          alert("Помилка сервера: " + await res.text());
        } else {
          const data = await res.json();
          alert("Бронювання успішне! ID броні: " + data.bookingId);
          modal.classList.add("hidden");
        }
      } catch (err) {
        console.error("Помилка з’єднання з сервером:", err);
        alert("Не вдалося з’єднатися із сервером");
      }
    });
  }

});
