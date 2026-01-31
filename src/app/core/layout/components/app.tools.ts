import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'tools',
  imports: [ButtonModule, TranslateModule],
  template: ` <div class="flex flex-wrap">
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" icon="ph ph-image"></button>
      <span>{{ 'products.label' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button
        pButton
        pRipple
        rounded
        class="mb-2"
        severity="success"
        icon="ph ph-file-pdf"
      ></button>
      <span>{{ 'analytics.reports' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="contrast" icon="ph ph-money"></button>
      <span>{{ 'balance.label' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="warn" icon="ph ph-gear"></button>
      <span>{{ 'settings.label' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="help" icon="ph ph-key"></button>
      <span>{{ 'security.credentials' | translate }}</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="info" icon="ph ph-circles-three"></button>
      <span>{{ 'teams.label' | translate }}</span>
    </div>
  </div>`,
})
export class Tools {}
