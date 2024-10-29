import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {
  private difficulty: string = 'All';

  setDifficulty(difficulty: string) {
    this.difficulty = difficulty;
  }

  getDifficulty(): string {
    return this.difficulty;
  }
}
