const errorMsg = document.querySelector(".password-error");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordInput = document.getElementById("password");

confirmPasswordInput.addEventListener("keyup", () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMsg.textContent = "*Passwords do not match";
        passwordInput.classList.add("invalid-input");
        confirmPasswordInput.classList.add("invalid-input");
    } else {
        errorMsg.textContent = "";
        passwordInput.classList.remove("invalid-input");
        confirmPasswordInput.classList.remove("invalid-input");
    }
});