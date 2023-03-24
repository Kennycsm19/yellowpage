const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailInput.value.includes('@')) {
    emailError.style.display = 'inline';
  } else {
    emailError.style.display = 'none';
    window.location.href = './layout/mensajecheckout.php';
  }
});

emailInput.addEventListener('input', (event) => {
  if (!emailInput.value.includes('@')) {
    emailError.style.display = 'inline';
  } else {
    emailError.style.display = 'none';
  }
});

phoneInput.addEventListener('keypress', (event) => {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
  }
});
