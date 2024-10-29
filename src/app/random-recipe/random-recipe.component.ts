import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'random-recipe',
  standalone: true,
  imports: [],
  template: `
    <div 
      class="roboto-font text-center text-xs w-40 h-36  mt-8 border-white border-x-[3px] border-y-[1px] p-2 shadow-md rounded-lg"
    >
      <img
        src="{{ image }}"
        alt="{{ name + '_image' }}"
        class="rounded-3xl mx-auto -mt-10 border-x-4 border-white"
        width="100px"
        height="100px"
      />
      <div class="">
        <p class="text-[#404040] text-[15.11px] py-3 overflow-clip">{{ name }}</p>
        <p class="text-[#969696] text-[12.95px]">
          {{ cooktime }} min cooktime
        </p>
      </div>
    </div>
  `,
})
export class RandomRecipeComponent {
  name: string = 'Random Recipe';
  cooktime: number = 0;
  image: string = 'https://source.unsplash.com/random/350x350/?food';
  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().then((recipes) => {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      this.name = randomRecipe.name;
      this.cooktime = randomRecipe.cookTimeMinutes;
      this.image = randomRecipe.image;
    });
  }
}
