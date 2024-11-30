function loginUser() {
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

  var user = users.find(
    (user) => user.email === userEmail && user.password === userPassword
  );
  if (user) {
    localStorage.setItem("loggedInUserName", user.name);
    window.location.href = "home.html";
  } else {
    var errorMessage = document.getElementById("text");
    errorMessage.classList.remove("d-none");
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("userPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
