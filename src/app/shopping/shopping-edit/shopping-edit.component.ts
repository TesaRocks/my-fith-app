import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingActions from '../store/shopping.actions';
import * as fromShopping from '../store/shopping.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItem!: Ingredient;
  constructor(private store: Store<fromShopping.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shopping').subscribe((stateData) => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newI = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingActions.UpdateIngredient(newI));
    } else {
      this.store.dispatch(new ShoppingActions.AddIngredient(newI));
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
  onDelete() {
    this.store.dispatch(new ShoppingActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
}
