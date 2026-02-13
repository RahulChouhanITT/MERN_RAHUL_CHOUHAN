import * as localStorageData from "./localstorage.js";

const form = document.getElementById("registerForm");

form.addEventListener("click", (e) => {
  if (e.target.id === "loginBtn") {
    e.preventDefault();
    window.location.href = "../HTMLFiles/loginPage.html";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  let isValid = true;
  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (!isValid) return;

  const usersList = localStorageData.getList();

  const userExists = usersList.find(
    (user) => user.username === name.value.trim()
  );

  if (userExists) {
    alert("Username already exists");
    return;
  }

  const newUser = {
    username: name.value.trim(),
    password: password.value.trim(),
  };

  usersList.push(newUser);
  localStorageData.saveList(usersList);

  alert("Registration Successful");
  window.location.href = "../HTMLFiles/loginPage.html";
});

function clearErrors() {
  document.querySelectorAll(".error").forEach(
    (err) => (err.textContent = "")
  );
}

function showError(input, message) {
  input.nextElementSibling.textContent = message;
}
