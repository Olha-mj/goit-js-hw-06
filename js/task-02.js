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

const array = [];

ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('ingredient');

  array.push(list);
});

ingrediensList.append(...array);
