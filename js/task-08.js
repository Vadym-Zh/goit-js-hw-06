const inputEl = document.querySelectorAll('input');
// console.log(inputEl);

const formEl = document.querySelector('.login-form');
// console.log(formEl);

const btnEl = document.querySelector('button');
// console.log(btnEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  //   console.log(formElements);
  const email = formElements.email.value;
  // console.log(email);
  const password = formElements.password.value;
  //   console.log(password);
  if (email.length === 0 || email.password === 0) {
    alert('Всі поля повинні бути заповнені');
  }
  const data = {
    email,
    password,
  };
  console.log(data);
  formEl.reset();
}
