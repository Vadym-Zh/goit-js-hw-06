const categorieNumbers = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categorieNumbers}`);

const categorieNames = document.querySelectorAll('.item ul').forEach(nameEl => {
  console.log(`Category: ${nameEl.previousElementSibling.textContent}
  Elements: ${nameEl.children.length}
  `);
});
