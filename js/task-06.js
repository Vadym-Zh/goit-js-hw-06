const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);
// console.log(inputLength);

inputEl.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
  const newInputlength = event.currentTarget.value.length;

  if (newInputlength === inputLength) {
    console.log('+');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
