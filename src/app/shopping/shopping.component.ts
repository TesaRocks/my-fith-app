import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';
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
  constructor(private store: Store<fromShopping.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shopping');
  }
  onEditItem(i: number) {
    this.store.dispatch(new ShoppingActions.StartEdit(i));
  }
}
