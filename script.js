const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const message_error = document.querySelector('.error');
const submitBtn = document.querySelector('.submit_btn');
const dismissBtn = document.querySelector('.dismiss_btn');
const containerStart = document.querySelector('.container_start');
const containerEnd = document.querySelector('.container_end');


const validate = (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if(!isEmail(emailValue)) {
    message_error.style.display = 'block';
    emailInput.classList.add('warning');
  } else {
    message_error.style.display = 'none';
    emailInput.classList.remove('warning');
    containerStart.style.display = 'none';
    containerEnd.style.display = 'flex';
  }
};

const isEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
};

form.addEventListener('submit', validate);
submitBtn.addEventListener('click', validate);
dismissBtn.addEventListener('click', () => {
  containerStart.style.display = 'flex';
  containerEnd.style.display = 'none';
});