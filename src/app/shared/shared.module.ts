import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FlashyDirective } from './flashy.directive';
import { BackColorDirective } from './backColor.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoadingSpinnerComponent, FlashyDirective, BackColorDirective],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    FlashyDirective,
    BackColorDirective,
    CommonModule,
  ],
})
export class SharedModule {}
