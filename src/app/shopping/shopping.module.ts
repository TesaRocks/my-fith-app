import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingComponent,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ShoppingModule {}
