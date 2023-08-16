const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




//Getting the ul list from the html
const ingrediensList = document.getElementById("ingredients");

//Adding the ingrediens 

ingredients.forEach(function (ingredientName) {

  const listItem = document.createElement("li");

  //Adding the ingrediens' names to the li

  listItem.textContent = ingredientName;

  ingrediensList.appendChild(listItem);
}

);