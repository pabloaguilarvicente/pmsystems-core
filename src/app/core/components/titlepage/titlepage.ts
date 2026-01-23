import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'titlepage',
  imports: [TranslateModule],
  template: ` <span>{{ title() | translate }}</span>`,
})
export class Titlepage {
  public title = input.required<string>();
}
