import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu, [app-menu]',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `
    <ul class="layout-menu" #menuContainer>
      @for (item of model; track $index) {
        @if (!item.separator) {
          <li app-menuitem [item]="item" [index]="$index" [root]="true"></li>
        } @else {
          <li class="menu-separator"></li>
        }
      }
    </ul>
  `,
})
export class AppMenu {
  el: ElementRef = inject(ElementRef);

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  model: MenuItem[] = [
    {
      label: 'analytics.label',
      icon: 'pi pi-chart-line',
      items: [
        {
          label: 'analytics.overview',
          icon: 'pi pi-chart-pie',
          routerLink: ['/analytics/overview'],
        },
        {
          label: 'analytics.reports',
          icon: 'pi pi-file',
          routerLink: ['/analytics/reports'],
        },
        {
          label: 'analytics.realtime',
          icon: 'pi pi-clock',
          routerLink: ['/analytics/realtime'],
        },
      ],
    },

    {
      label: 'management.label',
      icon: 'pi pi-briefcase',
      items: [
        {
          label: 'users.label',
          icon: 'pi pi-users',
          items: [
            {
              label: 'users.list',
              icon: 'pi pi-list',
            },
            {
              label: 'roles.label',
              icon: 'pi pi-id-card',
            },
            {
              label: 'permissions.label',
              icon: 'pi pi-lock',
            },
          ],
        },
        {
          label: 'teams.label',
          icon: 'pi pi-sitemap',
        },
      ],
    },

    {
      label: 'apps.label',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'blog.label',
          icon: 'pi pi-comment',
          items: [
            {
              label: 'blog.list',
              icon: 'pi pi-image',
            },
            {
              label: 'blog.detail',
              icon: 'pi pi-file',
            },
            {
              label: 'blog.edit',
              icon: 'pi pi-pencil',
            },
          ],
        },
        {
          label: 'notifications.label',
          icon: 'pi pi-bell',
        },
        {
          label: 'messages.label',
          icon: 'pi pi-envelope',
        },
      ],
    },

    {
      label: 'settings.label',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'profile.label',
          icon: 'pi pi-user',
        },
        {
          label: 'preferences.label',
          icon: 'pi pi-sliders-h',
        },
        {
          label: 'security.label',
          icon: 'pi pi-shield',
        },
      ],
    },

    {
      separator: true,
    },

    {
      label: 'support.label',
      icon: 'pi pi-question-circle',
      items: [
        {
          label: 'support.documentation',
          icon: 'pi pi-book',
        },
        {
          label: 'support.contact',
          icon: 'pi pi-headphones',
        },
      ],
    },
  ];
}
