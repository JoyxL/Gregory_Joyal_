import Recipe from './Recipe.js';
import RecipeBook from './RecipeBook.js';

const recipeBook = new RecipeBook();

const addRecipeButton = document.getElementById('add-recipe');
const recipesDisplay = document.getElementById('recipes');

addRecipeButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value.split(',');

    const newRecipe = new Recipe(name, ingredients);
    recipeBook.addRecipe(newRecipe);

    recipesDisplay.textContent = recipeBook.displayRecipes();

   
    document.getElementById('name').value = '';
    document.getElementById('ingredients').value = '';
});