document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {

    localStorage.setItem('isLoggedIn', 'true');

    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Usuário ou senha incorretos.";
  }
});
