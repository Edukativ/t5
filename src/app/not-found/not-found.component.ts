import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="absolute right-1/2 bottom-1/2 m-20">
      <h1 class="text-4xl font-bold">Content not found!</h1>
    </div>
  `
})
export class NotFoundComponent {

}
