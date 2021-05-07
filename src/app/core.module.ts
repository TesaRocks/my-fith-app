import { NgModule } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingService } from './shopping/shopping.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    RecipeService,
    ShoppingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
