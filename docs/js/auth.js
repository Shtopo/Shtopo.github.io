// docs/js/auth.js

import { API_URL } from "./config.js";

// === Авторизация (вход) ===
document.querySelector("#login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email    = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorText = await response.text();
      alert("Ошибка входа: " + errorText);
      return;
    }

    // 1) Читаем JWT как plain text
    const token = await response.text();

    // 2) Сохраняем JWT в localStorage
    localStorage.setItem("token", token);

    // 3) Раскодируем payload JWT и ставим userId
    try {
      let payloadBase64 = token.split(".")[1];
      payloadBase64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
      while (payloadBase64.length % 4) {
        payloadBase64 += "=";
      }
      const payloadJson = atob(payloadBase64);
      const payload     = JSON.parse(payloadJson);
      const userId = payload.nameid || payload.sub || payload.userId;
      if (userId) {
        localStorage.setItem("userId", String(userId));
      } else {
        console.warn("userId не знайдений в токені");
      }
    } catch {
      console.warn("Не вдалось взяти userId з токену.");
    }

    // 4) Редиректим на главную страницу
    window.location.href = "index.html";
  } catch (err) {
    console.error("Помилка при намаганні увійти:", err);
    alert("Не вдалось зв'язатись з сервером");
  }
});

// === Регистрация ===
document.querySelector("#register-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userName        = document.getElementById("userName")?.value.trim();
  const email           = document.getElementById("email")?.value.trim();
  const password        = document.getElementById("password")?.value.trim();
  const confirmPassword = document.getElementById("confirmPassword")?.value.trim();

  if (password !== confirmPassword) {
    alert("Паролі не співпадають");
    return;
  }

  try {
    // 1) Отправляем POST /Users/Register
    const response = await fetch(`${API_URL}/Users/Register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password })
    });

    if (!response.ok) {
      const errorText = await response.text();
      alert("Помилка реєстрації: " + errorText);
      return;
    }

    // 2) Ожидаем { token, userId } в JSON
    const result = await response.json();
    const token  = result.token;
    const userId = result.userId;

    // 3) Сохраняем сразу и token, и userId
    localStorage.setItem("token", token);
    localStorage.setItem("userId", String(userId));

    // 4) Редиректим на главную без alert
    window.location.href = "index.html";
  } catch (err) {
    console.error("Помилка при спробі зареєструватися:", err);
    alert("Не вдалося зв'язатись з сервером");
  }
});
