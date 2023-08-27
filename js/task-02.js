const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingrediensList = document.querySelector("#ingredients");
console.log(ingrediensList);

const listElements = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('ingredient');
  return list;
});

ingrediensList.append(...listElements);
