import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  @Input() recipe!: Recipe;
  ngOnInit(): void {}
  toShopping() {
    this.recipeService.ingredientsToShopping(this.recipe.ingredients);
  }
}
