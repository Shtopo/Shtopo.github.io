// docs/js/auth.js

import { API_URL } from "./config.js";

document.querySelector("#login-form").addEventListener("submit", async (event) => {
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

    // Получаем JWT-токен
    const token = await response.text();

    // Сохраняем токен в localStorage под ключом "token"
    localStorage.setItem("token", token);

    // Пытаемся извлечь userId из payload JWT
    try {
      // Берём вторую часть JWT (payload)
      let payloadBase64 = token.split(".")[1];
      // Заменяем URL-безопасные символы, если они есть
      payloadBase64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
      // Добавляем недостающие знаки "=" для корректного Base64
      while (payloadBase64.length % 4) {
        payloadBase64 += "=";
      }
      const payloadJson = atob(payloadBase64);
      const payload     = JSON.parse(payloadJson);

      // В зависимости от вашей реализации JWT, может быть поле "nameid", "sub" или "userId"
      const userId = payload.nameid || payload.sub || payload.userId;
      if (userId) {
        localStorage.setItem("userId", String(userId));
      }
    } catch {
      // Если не получилось извлечь userId из токена, игнорируем
      console.warn("Не удалось извлечь userId из токена.");
    }

    // Перенаправляем на главную страницу (index.html)
    window.location.href = "index.html";
  } catch (err) {
    console.error("Ошибка при попытке войти:", err);
    alert("Не удалось связаться с сервером");
  }
});
