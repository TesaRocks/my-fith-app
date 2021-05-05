import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Milanesa',
      'the best in town',
      'https://cdn.kiwilimon.com/recetaimagen/1654/13219.jpg',
      [new Ingredient('meat', 1), new Ingredient('bread', 3)]
    ),
    new Recipe(
      'Pizza',
      'the best in town',
      'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg',
      [new Ingredient('meat', 1), new Ingredient('flour', 3)]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  ingredientsToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
