import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  //private igSubject!: Subscription;
  constructor(
    private shoppingService: ShoppingService,
    private store: Store<{ shopping: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shopping');
    //this.ingredients = this.shoppingService.getIngredients();
    // this.igSubject = this.shoppingService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }
  ngOnDestroy() {
    //this.igSubject.unsubscribe();
  }
}
