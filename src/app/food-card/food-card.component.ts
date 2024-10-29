import { Component, Input } from '@angular/core';
import { InfoTailComponent } from '../info-tail/info-tail.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'food-card',
  imports: [InfoTailComponent, RouterLink],
  standalone: true,
  template: `
    <div class="w-[780px] pb-10 mt-12 ml-24">
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
        class="flex flex-col p-3 pb-8 w-[700px] h-[550px] shadow-lg border-x-[10px] border-y-[6px] border-white rounded-3xl"
      >
        <!-- Title -->
        <h2 class="arima-font text-[#404040] text-[23.98px]">
          {{ name }}
        </h2>
        <!-- Ingredients -->
        <h2 class="arima-font mt-6 mb-1 text-[#969696] text-[19.42px]">
          Ingredients
        </h2>
        <div class="flex flex-wrap gap-2 w-3/5 mt-2">
          @for (ingredient of ingredients; track $index) {
          <p
            class="text-center roboto-font text-[#404040] text-nowrap text-xs border-white border-x-[3px] border-y-[1px] p-2 shadow-md shadow-black/15 rounded-lg"
          >
            {{ ingredient }}
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
          <button routerLink="/recipe/{{ id }}" class="bg-[#408EBA] text-white w-36 mt-6 p-1 rounded-md">
            Recipe
          </button>
        </div>

        <!-- Image -->
      </div>

      <!-- Main Window -->
    </div>
  `,
})
export class FoodCardComponent {
  texts = ['Calories', 'Rating', 'Prep time minutes', 'Cook time minutes'];
  @Input() id: number = 0;
  @Input() name: string = 'Classic Margherita Pizza';
  @Input() ingredients: string[] = [
    'Eggplants, sliced',
    'Ground lamb or beef',
    'Onions, finely chopped',
    'Garlic, minced',
    'Tomatoes, crushed',
    'Red wine',
    'Cinnamon',
    'Allspice',
    'Nutmeg',
    'Olive oil',
    'Milk',
    'Flour',
    'Parmesan cheese',
    'Egg yolks',
  ];
  @Input() instructions: string[] = [
    'Preheat the oven to 475°F (245°C).',
    'Roll out the pizza dough and spread tomato sauce evenly.',
    'Top with slices of fresh mozzarella and fresh basil leaves.',
    'Drizzle with olive oil and season with salt and pepper.',
    'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
    'Slice and serve hot.',
  ];
  @Input() prepTimeMinutes: number = 20;
  @Input() cookTimeMinutes: number = 15;
  @Input() difficulty: string = 'Easy';
  @Input() caloriesPerServing: number = 300;
  @Input() image: string = 'https://cdn.dummyjson.com/recipe-images/1.webp';
  @Input() rating: number = 4.6;
  @Input() mealType: string[] = ['Dinner'];

  
}
