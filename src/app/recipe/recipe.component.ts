import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { InfoTailComponent } from "../info-tail/info-tail.component";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [InfoTailComponent],
  template: `
    <div class="absolute top-0 left-0 w-full h-2/3 mt-20 bg-[#F0F7FF]">
    <div class="w-[780px] mx-auto my-auto mt-8">
      <!-- Main Window -->
      <img
        src="{{ image }}"
        alt="{{ name + '_image' }}"
        class="rounded-3xl absolute mt-[100px] ml-[450px] border-x-8 border-y-4 border-white"
        align="right"
        width="350px"
        height="350px"
      />
      <div
        class="flex flex-col p-3 pb-8 w-[700px] h-[600px] shadow-lg border-x-[10px] border-y-[6px] border-white rounded-3xl"
      >
        <!-- Title -->
        <h2 class="arima-font text-[#404040] text-[23.98px]">
          {{ name }}
        </h2>
        <!-- Instructions -->
        <h2 class="arima-font mt-6 mb-1 text-[#969696] text-[19.42px]">
          Instructions
        </h2>
        <div class="flex flex-wrap gap-2 w-3/5 mt-2">
          
          @for (instruction of instructions; track $index) {
          <p 
            class=" roboto-font text-[#404040] text-xs border-white border-x-[3px] border-y-[1px] p-2 shadow-md shadow-black/15 rounded-lg"
          >
            {{ $index + 1 }}. {{ instruction }}
          </p>
          }
        </div>

        <!-- Information -->
        <div class="mt-auto">
          <h2 class="arima-font mt-6 mb-1 text-[#969696] text-2xl">
            Information
          </h2>
          <div class="flex gap-4">
            <info-tail>
              <p class="text-lg">{{ caloriesPerServing }}</p>
              <p class="text-sm text-[#969696] mt-2">Calories</p>
            </info-tail>

            <info-tail>
              <p class="text-lg">{{ rating }}</p>
              <p class="text-sm text-[#969696] mt-2">Rating</p>
            </info-tail>

            <info-tail>
              <p class="text-lg">{{ prepTimeMinutes }}</p>
              <p class="text-sm text-[#969696]">Prep time minutes</p>
            </info-tail>

            <info-tail>
              <p class="text-lg">{{ cookTimeMinutes }}</p>
              <p class="text-sm text-[#969696]">Cook time minutes</p>
            </info-tail>
          </div>

          <!-- Recipe button -->
        </div>

        <!-- Image -->
      </div>

      <!-- Main Window -->
    </div>
    </div>
  `
})
export class RecipeComponent {
  recipeId: number = 0;
  parentUrl: string = '';
image: any;
name: any;
instructions: any;
caloriesPerServing: any;
rating: any;
prepTimeMinutes: any;
cookTimeMinutes: any;
id: any;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.recipeId = params['id'];
      this.parentUrl = params['parentUrl'];
    })
    this.recipeService.getRecipes().then((recipes) => {
      recipes.forEach((recipe) => {
        if (recipe.id == this.recipeId) {
          this.image = recipe.image;
          this.name = recipe.name;
          this.instructions = recipe.instructions;
          this.caloriesPerServing = recipe.caloriesPerServing;
          this.rating = recipe.rating;
          this.prepTimeMinutes = recipe.prepTimeMinutes;
          this.cookTimeMinutes = recipe.cookTimeMinutes;
          this.id = recipe.id;
        }
      })
    });
  }
}
