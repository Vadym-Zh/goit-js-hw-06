const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const element = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return liEl;
});
console.log(...element);

listEl.append(...element);

// const listEl = document.querySelector('#ingredients');
// console.log(listEl);
// listEl.innerHTML = '';

// ingredients.forEach(ingredient => {
//   listEl.innerHTML += `
//         <li class="item">${ingredient}
//         </li>
//     `;
// });
