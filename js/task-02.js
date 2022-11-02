const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listOfIngredients = document.querySelector('ul#ingredients');
// console.log(listOfIngredients);
// listOfIngredients = []

ingredients.forEach(ingredient => {
  let aNewListItem = document.createElement('li');
  aNewListItem.textContent = ingredient;
  aNewListItem.classList.add('item');
  listOfIngredients.append(aNewListItem)
  return
})


// for (let i = 0; i < ingredients.length; i += 1) {
//   let aNewListItem = document.createElement('li');
//   aNewListItem.textContent = ingredients[i];
//   aNewListItem.classList.add('item');
//   listOfIngredients.append(aNewListItem)
  
// }
// console.log(listOfIngredients)