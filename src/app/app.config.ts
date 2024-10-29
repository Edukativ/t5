import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { provideHttpClient } from '@angular/common/http';
import { FoodCarouselComponent } from './food-carousel/food-carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FoodCarouselComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: ':mealType/:difficulty', component: FoodCarouselComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
