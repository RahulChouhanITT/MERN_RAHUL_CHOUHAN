document.addEventListener("DOMContentLoaded", () => {

    const heading = document.getElementById("heading");
    const clickButton = document.getElementById("clickButton");
    const clickMessage = document.getElementById("clickMessage");
    const textInput = document.getElementById("textInput");
    const keyOutput = document.getElementById("keyOutput");
    const languageSelect = document.getElementById("languageSelect");
    const languageOutput = document.getElementById("languageOutput");
    const userForm = document.getElementById("userForm");
    const usernameInput = document.getElementById("username");

    clickButton.addEventListener("click", () => {
        clickMessage.textContent = "Button clicked successfully!";
    });

    textInput.addEventListener("keydown", (event) => {
        keyOutput.textContent = `Key pressed: ${event.key}`;
    });

    languageSelect.addEventListener("change", () => {
        languageOutput.textContent = languageSelect.value
            ? `Selected language: ${languageSelect.value}`
            : "";
    });

    userForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert(`Form submitted by: ${usernameInput.value}`);
        userForm.reset();
    });

});
