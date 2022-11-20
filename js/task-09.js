function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(colorRes);
}

const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', onColorChanger);

function onColorChanger(event) {
  const colors = getRandomHexColor();
  // console.log(colors);
  colorEl.textContent = colors;

  bodyEl.style.background = colors;
}
