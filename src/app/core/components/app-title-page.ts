import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title-page',
  imports: [TranslateModule],
  template: ` <span>{{ title() | translate }}</span>`,
})
export class AppTitlePage {
  public title = input.required<string>();
}
