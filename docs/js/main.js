// docs/js/main.js

import { API_URL } from "./config.js";

window.addEventListener("DOMContentLoaded", async () => {
  // ====== 1. Проверка авторизации и подстановка имени пользователя ======
  const token  = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Элементы в header
  const loginLink  = document.getElementById("header-login-link");
  const userInfo   = document.getElementById("header-user-info");
  const avatarImg  = document.getElementById("user-avatar");
  const userNameEl = document.getElementById("user-name");

  if (token && userId) {
    // Скрываем ссылку «Войти»
    loginLink?.classList.add("hidden");
    // Показываем блок с аватаром/именем
    userInfo?.classList.remove("hidden");

    try {
      // Запрашиваем данные профиля у API
      const response = await fetch(
        `${API_URL}/Users/GetUser?userId=${encodeURIComponent(userId)}`,
        {
          headers: { "Authorization": "Bearer " + token }
        }
      );

      if (response.ok) {
        const user = await response.json();
        // Подставляем имя пользователя
        if (userNameEl) {
          userNameEl.textContent = user.Name;
        }
        // Если API вернул ссылку на аватар (например user.AvatarUrl), можно её использовать:
        // avatarImg.src = user.AvatarUrl || "img/user-login.svg";
        if (avatarImg) {
          avatarImg.src = "img/user-login.svg"; // ваша уже готовая иконка
        }
      } else {
        // Если получили ошибку (например 401), сбрасываем авторизацию:
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        userInfo?.classList.add("hidden");
        loginLink?.classList.remove("hidden");
      }
    } catch (err) {
      console.error("Ошибка при получении данных пользователя:", err);
      // При сетевой ошибке тоже сбрасываем авторизацию:
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      userInfo?.classList.add("hidden");
      loginLink?.classList.remove("hidden");
    }
  } else {
    // Если не авторизован: показываем ссылку «Войти» и скрываем блок с именем
    loginLink?.classList.remove("hidden");
    userInfo?.classList.add("hidden");
  }

  // ====== 2. Гамбургер-меню (открытие/закрытие) ======
  const navBtn    = document.querySelector('.header__nav-btn');
  const navClose  = document.querySelector('.header__nav-close');
  const navList   = document.querySelector('.header__nav-list');
  const menuClose = document.querySelector('.menu--close');

  navBtn?.addEventListener('click', () => {
    navList.classList.toggle('header__nav-list--open');
    menuClose.classList.toggle('menu--open');
  });

  navClose?.addEventListener('click', () => {
    navList.classList.remove('header__nav-list--open');
    menuClose.classList.remove('menu--open');
  });

  menuClose?.addEventListener('click', () => {
    navList.classList.remove('header__nav-list--open');
    menuClose.classList.remove('menu--open');
  });

  // ====== 3. Скролл до секции при клике на «Забронювати стіл» или «Тables» ======
  document.querySelectorAll('.booking, .tables').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.getElementById('tables');
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});
