class Recipe {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients; 
  }

  displayRecipe() {
    return `Recipe: ${this.name}\nIngredients: ${this.ingredients.join(', ')}`;
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
}

export default Recipe;