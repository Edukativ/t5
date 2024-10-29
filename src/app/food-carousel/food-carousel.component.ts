import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FoodCardComponent } from '../food-card/food-card.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-carousel',
  standalone: true,
  imports: [FoodCardComponent, NotFoundComponent],
  template: `
    <div class="inline-flex mt-10">
      @if (filteredRecipes.length === 0) {
      <not-found></not-found>
      } @else { @for (recipe of filteredRecipes; track $index) {
      <food-card
        [id]="recipe.id"
        [name]="recipe.name"
        [ingredients]="recipe.ingredients"
        [instructions]="recipe.instructions"
        [prepTimeMinutes]="recipe.prepTimeMinutes"
        [cookTimeMinutes]="recipe.cookTimeMinutes"
        [image]="recipe.image"
      />
      } }
    </div>
  `,
})
export class FoodCarouselComponent {
  filteredRecipes: any[] = [];
  mealType: string = 'Breakfast';
  difficulty: string = 'All';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.mealType = params['mealType'] || 'Breakfast';
      this.difficulty = params['difficulty'] || 'All';

      this.fetchRecipes();
    });
  }

  async fetchRecipes(): Promise<void> {
    try {
      this.filteredRecipes = await this.recipeService.filterRecipes(
        this.mealType,
        this.difficulty
      );
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
}
