import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('pasta', 3),
    new Ingredient('flour', 23),
  ];
  constructor() {}
  onAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  ngOnInit(): void {}
}
