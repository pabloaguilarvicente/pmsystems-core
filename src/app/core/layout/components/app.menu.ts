import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu, [app-menu]',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: ` <ul class="layout-menu" #menuContainer>
    <ng-container *ngFor="let item of model; let i = index">
      <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul>`,
})
export class AppMenu {
  el: ElementRef = inject(ElementRef);

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  model: MenuItem[] = [
    {
      label: 'Dashboards',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Analytics Dashboard',
          icon: 'pi pi-fw pi-chart-pie',
          routerLink: ['/dashboard'],
        },
      ],
    },
    {
      label: 'Apps',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Blog',
          icon: 'pi pi-fw pi-comment',
          items: [
            {
              label: 'List',
              icon: 'pi pi-fw pi-image',
              routerLink: ['/apps/blog/list'],
            },
            {
              label: 'Detail',
              icon: 'pi pi-fw pi-list',
              routerLink: ['/apps/blog/detail'],
            },
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              routerLink: ['/apps/blog/edit'],
            },
          ],
        },
      ],
    },
  ];
}
