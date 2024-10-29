import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { RandomRecipeComponent } from "./random-recipe/random-recipe.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RandomRecipeComponent, RandomRecipeComponent],
  standalone: true,
})
export class AppComponent {
  mealType = 'Breakfast';
  difficulty = 'All';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.mealType =  params['mealType'] || 'Breakfast';
      this.difficulty = params['difficulty'] || 'All';
      this.router.navigate([`/${this.mealType}`, this.difficulty]);
    });
  }

  mealTypeChange(selectedMealType: string) {
    this.mealType = selectedMealType;
    this.router.navigate([`/${this.mealType}`, this.difficulty]);
  }

  difficultyChange(selectedDifficulty: string) {
    this.difficulty = selectedDifficulty;
    this.router.navigate([`/${this.mealType}`, this.difficulty]);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}