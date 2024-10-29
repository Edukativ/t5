import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://dummyjson.com/recipes?limit=50';

  // Получаем все рецепты
  async getRecipes(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data.recipes;
  }


  async filterRecipes(mealType: string, Difficulty: string): Promise<any[]> {
    let recipes = await this.getRecipes();
    return recipes.filter(recipe => {
      let matchesMealType = false;
      for (let i = 0; i < recipe.mealType.length; i++) {
        if (recipe.mealType[i] === mealType) {
          matchesMealType = true;
          break;
        }
      }
      const matchesDifficulty = Difficulty === 'All' || recipe.difficulty === Difficulty;
      return matchesMealType && matchesDifficulty;
    });
  }
}