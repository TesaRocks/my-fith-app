import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() itemChosen = new EventEmitter<void>();
  onItem() {
    this.itemChosen.emit();
  }

  ngOnInit(): void {}
}
