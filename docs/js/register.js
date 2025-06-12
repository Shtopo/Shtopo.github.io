// docs/js/register.js

import {
    API_URL
} from "./config.js";

const registerForm = document.getElementById("register-form");

registerForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("Паролі не співпадають");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/Users/Register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            alert("Помилка реєстрації: " + errorText);
            return;
        }

        // Чекаємо JSON { token, userId }
        const result = await response.json();
        const token = result.token;
        const userId = result.userId;

        // Зберігаємо відразу token та userId
        localStorage.setItem("token", token);
        localStorage.setItem("userId", String(userId));

        // Перенаправляємо на головну
        window.location.href = "index.html";
    } catch (err) {
        console.error("Помилка при спробі зареєструватися:", err);
        alert("Не вдалося зв'язатися з сервером");
    }
});
