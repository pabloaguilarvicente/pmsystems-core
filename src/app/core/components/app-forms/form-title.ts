import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'form-title',
  imports: [TranslateModule, NgClass, DividerModule],
  template: `
    <div class="flex flex-col form-title">
      <p-divider align="left" type="solid" class="m-0!">
        <div class="font-bold" [ngClass]="'text-' + size()">
          {{ title() | translate }}
        </div>
      </p-divider>
      <div class="font-extralight text-justify">
        {{ description() | translate }}
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FormTitle {
  public readonly title = input.required<string>();
  public readonly description = input<string>('');
  public readonly size = input<string>('lg');
}
