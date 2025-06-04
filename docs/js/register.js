// docs/js/register.js

import { API_URL } from "./config.js";

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Значення полів форми
  const userName        = document.getElementById("userName").value.trim();
  const email           = document.getElementById("email").value.trim();
  const password        = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Перевірка на заповненість полів
  if (password !== confirmPassword) {
    alert("Паролі не співпадають");
    return;
  }

  try {
    // Основний fetch-запит на реєстрацію
    const response = await fetch(`${API_URL}/Users/CreateUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password })
    });

    const data = await response.text(); // сервер повертає plain-text з ID або помилку

    if (response.ok) {
      alert("Реєстрація успішна! Ваш ID: " + data);
      window.location.href = "login.html";
    } else {
      alert("Помилка реєстрації: " + data);
    }
  } catch (err) {
    console.error("Помилка при спробі зареєструватися:", err);
    alert("Не вдалося зв'язатися з сервером");
  }
});
