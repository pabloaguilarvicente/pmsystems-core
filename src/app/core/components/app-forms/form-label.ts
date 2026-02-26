import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'form-label',
  imports: [TranslateModule],
  template: `
    <label [for]="for()">
      {{ label() | translate }}
      @if (required()) {
        <i class="ph-bold ph-asterisk"></i>
      }
    </label>
  `,
})
export class FormLabel {
  public readonly for = input.required<string>();
  public readonly label = input.required<string>();
  public readonly required = input(false);
}
