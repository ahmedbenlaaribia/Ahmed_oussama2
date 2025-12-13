 const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const welcomeCard = document.getElementById('welcomeCard');
  const welcomeTitle = document.getElementById('welcomeTitle');
  const welcomeText = document.getElementById('welcomeText');
  const switchBtn = document.getElementById('switchBtn');

  let isLogin = true;

  // Form switch
  function switchForms() {
    if (isLogin) {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
      welcomeTitle.textContent = "Hello, Reader!";
      welcomeText.textContent = "Register now to create your library account and start exploring.";
      switchBtn.textContent = "Login";
    } else {
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      welcomeTitle.textContent = "Welcome Back!";
      welcomeText.textContent = "Login to access your library account and explore thousands of books.";
      switchBtn.textContent = "Register";
    }
    isLogin = !isLogin;
  }

  switchBtn.addEventListener('click', switchForms);

  // Password toggles
  const loginPassword = document.getElementById('loginPassword');
  const loginToggle = document.getElementById('loginToggle');

  const regPassword = document.getElementById('regPassword');
  const regToggle = document.getElementById('regToggle');

  const regConfirmPassword = document.getElementById('regConfirmPassword');
  const confirmToggle = document.getElementById('confirmToggle');

  loginToggle.addEventListener('click', () => {
    loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
  });

  regToggle.addEventListener('click', () => {
    regPassword.type = regPassword.type === 'password' ? 'text' : 'password';
  });

  confirmToggle.addEventListener('click', () => {
    regConfirmPassword.type = regConfirmPassword.type === 'password' ? 'text' : 'password';
  });