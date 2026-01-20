import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'tools',
  imports:[ButtonModule],
  template: ` <div class="flex flex-wrap">
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" icon="pi pi-image"></button>
      <span>Products</span>
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
      <span>Reports</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="contrast" icon="pi pi-dollar"></button>
      <span>Balance</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="warn" icon="pi pi-cog"></button>
      <span>Settings</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="help" icon="pi pi-key"></button>
      <span>Credentials</span>
    </div>
    <div class="w-4/12 flex flex-col items-center p-4">
      <button pButton pRipple rounded class="mb-2" severity="info" icon="pi pi-sitemap"></button>
      <span>Sitemap</span>
    </div>
  </div>`,
})
export class Tools {}
