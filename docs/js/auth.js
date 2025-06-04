import { API_URL } from "./config.js";

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (response.ok) {
    alert("Вход выполнен! Ваш токен: " + data.token);
    localStorage.setItem("authToken", data.token);
  } else {
    alert("Ошибка: " + data.message);
  }
});
