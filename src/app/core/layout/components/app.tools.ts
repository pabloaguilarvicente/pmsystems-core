import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'tools',
  imports: [ButtonModule, TranslateModule],
  template: ` <div class="flex flex-wrap">
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" icon="pi pi-image"></button>
      <span>{{ 'layout.products' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button
        pButton
        pRipple
        rounded
        class="mb-2"
        severity="success"
        icon="pi pi-file-pdf"
      ></button>
      <span>{{ 'layout.reports' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="contrast" icon="pi pi-dollar"></button>
      <span>{{ 'layout.balance' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="warn" icon="pi pi-cog"></button>
      <span>{{ 'layout.settings' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="help" icon="pi pi-key"></button>
      <span>{{ 'layout.credentials' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="info" icon="pi pi-sitemap"></button>
      <span>{{ 'layout.teams' | translate }}</span>
    </div>
  </div>`,
})
export class Tools {}
