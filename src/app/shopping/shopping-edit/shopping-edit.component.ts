import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
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
  constructor(
    private shoppingService: ShoppingService,
    private store: Store<fromShopping.AppState>
  ) {}

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
    // this.subscription = this.shoppingService.startedEditing.subscribe(
    //   (i: number) => {
    //     this.editMode = true;
    //     this.editedItemIndex = i;
    //     this.editedItem = this.shoppingService.getIngredient(i);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount,
    //     });
    //   }
    // );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newI = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      //this.shoppingService.updateIngredient(this.editedItemIndex, newI);
      this.store.dispatch(new ShoppingActions.UpdateIngredient(newI));
    } else {
      //this.shoppingService.addIngredient(newI);
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
    //this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
}
