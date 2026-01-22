import * as localStorageData from "./localstorage.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  let isValid = true;
  clearErrors();

  if (username.value.trim() === "") {
    showError(username, "Username is required");
    isValid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  }

  if (!isValid) return;
  const usersList = localStorageData.getList();

  const result = usersList.find(
    (user) =>
      user.username === username.value.trim() &&
      user.password === password.value.trim()
  );

  if (!result) {
    alert("Invalid username or password");
    return;
  }
  alert("Login Successful");
  window.location.href = "../HTMLFiles/imageGalleryPage.html";
});

function showError(input, message) {
  input.nextElementSibling.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(
    (err) => (err.textContent = "")
  );
}
