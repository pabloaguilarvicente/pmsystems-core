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
      label: 'layout.analytics',
      icon: 'pi pi-chart-line',
      items: [
        {
          label: 'layout.overview',
          icon: 'pi pi-chart-pie',
          routerLink: ['/analytics/overview'],
        },
        {
          label: 'layout.reports',
          icon: 'pi pi-file',
          routerLink: ['/analytics/reports'],
        },
        {
          label: 'layout.realtime',
          icon: 'pi pi-clock',
          routerLink: ['/analytics/realtime'],
        },
      ],
    },

    {
      label: 'layout.management',
      icon: 'pi pi-briefcase',
      items: [
        {
          label: 'layout.users',
          icon: 'pi pi-users',
          items: [
            {
              label: 'layout.user_list',
              icon: 'pi pi-list',
            },
            {
              label: 'layout.roles',
              icon: 'pi pi-id-card',
            },
            {
              label: 'layout.permissions',
              icon: 'pi pi-lock',
            },
          ],
        },
        {
          label: 'layout.teams',
          icon: 'pi pi-sitemap',
        },
      ],
    },

    {
      label: 'layout.apps',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'layout.blog',
          icon: 'pi pi-comment',
          items: [
            {
              label: 'layout.blog_list',
              icon: 'pi pi-image',
            },
            {
              label: 'layout.blog_detail',
              icon: 'pi pi-file',
            },
            {
              label: 'layout.blog_edit',
              icon: 'pi pi-pencil',
            },
          ],
        },
        {
          label: 'layout.notifications',
          icon: 'pi pi-bell',
        },
        {
          label: 'layout.messages',
          icon: 'pi pi-envelope',
        },
      ],
    },

    {
      label: 'layout.settings',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'layout.profile',
          icon: 'pi pi-user',
        },
        {
          label: 'layout.preferences',
          icon: 'pi pi-sliders-h',
        },
        {
          label: 'layout.security',
          icon: 'pi pi-shield',
        },
      ],
    },

    {
      separator: true,
    },

    {
      label: 'layout.support',
      icon: 'pi pi-question-circle',
      items: [
        {
          label: 'layout.documentation',
          icon: 'pi pi-book',
        },
        {
          label: 'layout.contact_support',
          icon: 'pi pi-headphones',
        },
      ],
    },
  ];
}
