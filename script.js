const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const inputArea = document.getElementById("input-area");

password.addEventListener("input", () => {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;
    const hasUppercase = /[A-Z]+/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue);
    const hasNumber = /[0-9]+/.test(passwordValue);

    // if you want to see the values in the console uncomment the line below:
    // console.log(passwordValue, passwordLength, hasUppercase, hasSpecialChar, hasNumber);

    if (passwordLength >= 12 && hasUppercase && hasSpecialChar && hasNumber) {
        strength.innerHTML = "strong";
        strength.style.color = "#26d176";
        inputArea.style.borderBottomColor = "#26d176";
    } else if (passwordLength >= 6 &&  hasUppercase) {
        strength.innerHTML = "medium";
        inputArea.style.borderBottomColor = "#2687d1";
        strength.style.color = "#2687d1";
    } else {
        strength.innerHTML = "weak";
        inputArea.style.borderBottomColor = "#cc4141";
        strength.style.color = "#cc4141";
    }

    if (passwordLength > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
        inputArea.style.borderBottomColor = "#928f8f";
    }
});

function showPassword() {
    const showPasswordIcon = document.getElementById("show-password-icon");
    const inputPassword = document.getElementById("password");
    showPasswordIcon.src = showPasswordIcon.src.includes("blind") ? "./images/view.png" : "./images/blind.png";
    inputPassword.type = inputPassword.type === "password" ? "text" : "password";
}