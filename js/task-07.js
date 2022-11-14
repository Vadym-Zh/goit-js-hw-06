const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onSwitcher);

function onSwitcher(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
