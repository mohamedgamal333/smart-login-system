function displayUserName() {
  var loggedInUserName = localStorage.getItem("loggedInUserName");
  if (loggedInUserName) {
    var welcomeMessage = "Welcome, " + loggedInUserName + "!";
    document.getElementById("welcomeMessage").textContent = welcomeMessage;
  }
}

window.onload = function () {
  displayUserName();
};

function logoutUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPassword");

  window.location.href = "index.html";
}

document.getElementById("signupForm").addEventListener("submit", registerUser);
document.getElementById("loginForm").addEventListener("submit", loginUser);
