// docs/js/register.js

import { API_URL } from "./config.js";

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userName        = document.getElementById("userName").value.trim();
  const email           = document.getElementById("email").value.trim();
  const password        = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password !== confirmPassword) {
    alert("Паролі не співпадають");
    return;
  }

  try {
    // Виклик маршруту Register
    const response = await fetch(`${API_URL}/Users/Register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password })
    });

    // Чекаємо JSON { token, userId }
    const result = await response.json();

    if (response.ok) {
      // Зберігаємо отриманий token та userId
      localStorage.setItem("token", result.token);
      localStorage.setItem("userId",  result.userId);

      alert("Реєстрація успішна! Ви автоматично увійшли до системи.");
      window.location.href = "index.html";
    } else {
      alert("Помилка реєстрації: " + (result.message || JSON.stringify(result)));
    }
  } catch (err) {
    console.error("Помилка при спробі зареєструватися:", err);
    alert("Не вдалося зв'язатися з сервером");
  }
});
