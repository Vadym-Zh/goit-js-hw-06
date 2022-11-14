const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const outputEl = document.querySelector('#name-output');
console.log(outputEl);
inputEl.addEventListener('input', onInput);

function onInput(event) {
  outputEl.textContent = event.currentTarget.value;
  if (!outputEl.textContent) {
    outputEl.textContent = 'Anonymous';
  }
}
