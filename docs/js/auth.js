// docs/js/auth.js

import { API_URL } from "./config.js";

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.text();

    if (response.ok) {
      alert("Вход выполнен! Ваш токен: " + data);
      localStorage.setItem("authToken", data);
    } else {
      alert("Ошибка: " + data);
    }
  } catch (err) {
    console.error("Ошибка при попытке войти:", err);
    alert("Не удалось связаться с сервером");
  }
});
