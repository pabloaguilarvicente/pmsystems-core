import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [TranslateModule, ButtonModule],
  template: `
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-8">
      <div class="font-bold text-4xl text-center sm:text-left w-full sm:w-auto">
        {{ title() | translate }}
      </div>
      @if (buttonLabel() || buttonIcon()) {
        <p-button
          (onClick)="handleClick()"
          [label]="buttonLabel() | translate"
          [icon]="buttonIcon()"
          iconPos="right"
          [raised]="true"
          fluid
        />
      }
    </div>
  `,
})
export class AppTitlePage {
  public title = input.required<string>();
  public buttonLabel = input<string>();
  public buttonIcon = input<string>();
  public redirectPath = input<string>();

  constructor(private router: Router) {}

  handleClick() {
    if (this.redirectPath()) {
      this.router.navigate([this.redirectPath()]);
    }
  }
}
