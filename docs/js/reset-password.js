// docs/js/reset-password.js

import { API_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
    const resetPasswordForm = document.getElementById("reset-password-form");
    const newPasswordInput = document.getElementById("newPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const formMessage = document.getElementById("form-message");

    // Извлекаем токен из URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
        formMessage.textContent = "Недійсний або відсутній токен сброса пароля.";
        formMessage.style.color = "red";
        // Можливо, перенаправити користувача на forgot-password.html
        // setTimeout(() => { window.location.href = "forgot-password.html"; }, 3000);
        return;
    }

    resetPasswordForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const newPassword = newPasswordInput?.value.trim();
        const confirmPassword = confirmPasswordInput?.value.trim();

        if (!newPassword || !confirmPassword) {
            formMessage.textContent = "Будь ласка, введіть обидва поля пароля.";
            formMessage.style.color = "red";
            return;
        }

        if (newPassword !== confirmPassword) {
            formMessage.textContent = "Паролі не співпадають.";
            formMessage.style.color = "red";
            return;
        }

        try {
            const response = await fetch(`${API_URL}/Users/ResetPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, newPassword, confirmPassword })
            });

            if (response.ok) {
                formMessage.textContent = "Пароль успішно скинуто! Ви будете перенаправлені на сторінку входу.";
                formMessage.style.color = "green";
     
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 3000);
            } else {
                const errorText = await response.text();
                formMessage.textContent = "Помилка: " + errorText;
                formMessage.style.color = "red";
            }
        } catch (error) {
            console.error("Помилка під час надсилання запиту на скидання пароля:", error);
            formMessage.textContent = "Сталася помилка під час скидання пароля. Спробуйте ще раз.";
            formMessage.style.color = "red";
        }
    });
});