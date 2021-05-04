import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
}
