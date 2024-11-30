function registerUser() {
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(userEmail)) {
    var emailInput = document.getElementById("userEmail");
    emailInput.classList.add("is-invalid");

    var emailValidationMessage = document.getElementById(
      "emailValidationMessage"
    );
    emailValidationMessage.classList.remove("d-none");
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var newUser = {
    name: userName,
    email: userEmail,
    password: userPassword,
  };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmail", userEmail);
  localStorage.setItem("userPassword", userPassword);

  window.location.href = "index.html";
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("userPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
