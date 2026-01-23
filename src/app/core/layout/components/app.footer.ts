import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../service/layout.service';

@Component({
  standalone: true,
  selector: '[app-footer]',
  imports: [ButtonModule],
  template: ` <span class="font-medium text-lg text-muted-color">
      <img
        src="images/logos/{{ layoutService.isDarkTheme() ? 'WHITE01.svg' : 'BLUE01.svg' }}"
        alt="logo"
        width="50"
      />
    </span>
    <div class="flex gap-2">
      <button pButton icon="pi pi-github" rounded text severity="secondary"></button>
      <button pButton icon="pi pi-facebook" rounded text severity="secondary"></button>
      <button pButton icon="pi pi-twitter" rounded text severity="secondary"></button>
    </div>`,
  host: {
    class: 'layout-footer',
  },
})
export class AppFooter {
  layoutService = inject(LayoutService);
}
