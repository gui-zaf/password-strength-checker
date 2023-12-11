const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const inputArea = document.getElementById("input-area");

password.addEventListener("input", () => {
    if (password.value.length > 0){
        message.style.display = "block";
        if (password.value.length >= 8){
            strength.innerHTML = "strong";
            strength.style.color = "#6866F8";
            inputArea.style.borderBottomColor = "#6866F8";
        } else if (password.value.length >= 5){
            strength.innerHTML = "medium";
            inputArea.style.borderBottomColor = "#A67EEE";
            strength.style.color = "#A67EEE";
        } else {
            strength.innerHTML = "weak";
            inputArea.style.borderBottomColor = "#D791E8";
            strength.style.color = "#D791E8";
        }
    } else {
        message.style.display = "none";
        inputArea.style.borderBottomColor = "#928f8f";
    }
})

