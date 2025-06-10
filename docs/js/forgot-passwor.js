// docs/js/forgot-password.js

import { API_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const emailInput = document.getElementById("email");
    const formMessage = document.getElementById("form-message");

    forgotPasswordForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = emailInput?.value.trim();

        if (!email) {
            formMessage.textContent = "Будь ласка, введіть ваш email.";
            formMessage.style.color = "red";
            return;
        }

        try {
            const response = await fetch(`${API_URL}/Users/ForgotPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                formMessage.textContent = "Інструкції по відновленню пароля відправлені на ваш email.";
                formMessage.style.color = "green";
                emailInput.value = "";
            } else {
                const errorText = await response.text();
                formMessage.textContent = "Помилка: " + errorText;
                formMessage.style.color = "red";
            }
        } catch (error) {
            console.error("Ошибка при отправке запроса на восстановление пароля:", error);
            formMessage.textContent = "Произошла ошибка при отправке запроса. Попробуйте ещё раз.";
            formMessage.style.color = "red";
        }
    });
});