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

    const token = await response.text();
    localStorage.setItem("token", token);

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
      }
    } catch {
      console.warn("Не удалось извлечь userId из токена.");
    }

    window.location.href = "index.html";
  } catch (err) {
    console.error("Ошибка при попытке войти:", err);
    alert("Не удалось связаться с сервером");
  }
});


// === Регистрация (если форма есть) ===
document.querySelector("#register-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email    = document.querySelector("#register-email").value.trim();
  const password = document.querySelector("#register-password").value.trim();

  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorText = await response.text();
      alert("Ошибка регистрации: " + errorText);
      return;
    }

    // ✅ Убираем alert об успешной регистрации
    // ✅ Перенаправляем на главную
    window.location.href = "index.html";
  } catch (err) {
    console.error("Ошибка при попытке зарегистрироваться:", err);
    alert("Не удалось связаться с сервером");
  }
});
