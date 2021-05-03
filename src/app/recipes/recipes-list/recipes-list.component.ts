import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Milanesa',
      'the best in town',
      'https://cdn.kiwilimon.com/recetaimagen/1654/13219.jpg'
    ),
    new Recipe(
      'Pizza',
      'the best in town',
      'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg'
    ),
  ];

  constructor() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {}
}
