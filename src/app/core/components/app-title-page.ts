import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title-page',
  imports: [TranslateModule],
  template: `
    <div class="grid grid-cols-12 gap-4 mb-10">
      <div class="col-span-12">
        <span class="font-bold text-4xl">{{ title() | translate }}</span>
      </div>
    </div>
  `,
})
export class AppTitlePage {
  public title = input.required<string>();
}
