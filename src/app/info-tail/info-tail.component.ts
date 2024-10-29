import { Component } from '@angular/core';

@Component({
  selector: 'info-tail',
  standalone: true,
  imports: [],
  template: `
    <p
      class="roboto-font min-w-16 max-w-[86px] h-20 text-center text-xs border-white border-x-[3px] border-y-[1px] p-2 shadow-md rounded-lg"
    >
      <ng-content></ng-content>
    </p>
  `,
})
export class InfoTailComponent {}
