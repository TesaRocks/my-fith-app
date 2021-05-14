import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';
import * as ShoppingActions from '../shopping/store/shopping.actions';
import * as fromShopping from '../shopping/store/shopping.reducer';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor(
    // private shoppingService: ShoppingService,
    private store: Store<fromShopping.AppState>
  ) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  ingredientsToShopping(ingredients: Ingredient[]) {
    //this.shoppingService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingActions.AddIngredients(ingredients));
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
