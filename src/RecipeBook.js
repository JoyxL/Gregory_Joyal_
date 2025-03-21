import Recipe from './Recipe.js';

class RecipeBook {
  constructor() {
    this.recipes = []; 
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  displayRecipes() {
    return this.recipes.map(recipe => recipe.displayRecipe()).join('\n\n');
  }
}

export default RecipeBook;