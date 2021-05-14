import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShopping from './store/shopping.reducer';
import * as ShoppingActions from './store/shopping.actions';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  //private igSubject!: Subscription;
  constructor(
    private shoppingService: ShoppingService,
    private store: Store<fromShopping.AppState>
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
    //this.shoppingService.startedEditing.next(i);
    this.store.dispatch(new ShoppingActions.StartEdit(i));
  }
  // ngOnDestroy() {
  //this.igSubject.unsubscribe();
  // }
}
