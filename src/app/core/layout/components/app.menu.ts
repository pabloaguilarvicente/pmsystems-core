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
  public readonly el: ElementRef = inject(ElementRef);

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  model: MenuItem[] = [
    {
      label: 'analytics.label',
      icon: 'ph-thin ph-chart-bar',
      items: [
        {
          label: 'analytics.overview',
          icon: 'ph-thin ph-chart-pie-slice',
          routerLink: ['/analytics/overview'],
        },
        {
          label: 'analytics.reports',
          icon: 'ph-thin ph-chart-bar',
          routerLink: ['/analytics/reports'],
        },
        {
          label: 'analytics.realtime',
          icon: 'ph-thin ph-presentation-chart',
          routerLink: ['/analytics/realtime'],
        },
      ],
    },

    {
      label: 'management.label',
      icon: 'ph-thin ph-briefcase',
      items: [
        {
          label: 'user.plural.label',
          icon: 'ph-thin ph-users',
          routerLink: '/users',
        },
        {
          label: 'teams.label',
          icon: 'ph-thin ph-tree-structure',
          routerLink: '',
        },
      ],
    },

    {
      label: 'apps.label',
      icon: 'ph-thin ph-grid-four',
      items: [
        {
          label: 'blog.label',
          icon: 'ph-thin ph-chat-circle-text',
          items: [
            {
              label: 'blog.list',
              icon: 'ph-thin ph-image',
              routerLink: '',
            },
            {
              label: 'blog.detail',
              icon: 'ph-thin ph-file-text',
              routerLink: '',
            },
            {
              label: 'blog.edit',
              icon: 'ph-thin ph-pencil',
              routerLink: '',
            },
          ],
        },
        {
          label: 'notifications.label',
          icon: 'ph-thin ph-bell',
          routerLink: '',
        },
        {
          label: 'messages.label',
          icon: 'ph-thin ph-envelope',
          routerLink: '',
        },
      ],
    },

    {
      label: 'settings.label',
      icon: 'ph-thin ph-gear',
      items: [
        {
          label: 'profile.label',
          icon: 'ph-thin ph-user',
          routerLink: '',
        },
        {
          label: 'preferences.label',
          icon: 'ph-thin ph-sliders',
          routerLink: '',
        },
        {
          label: 'security.label',
          icon: 'ph-thin ph-shield',
          routerLink: '',
        },
      ],
    },

    {
      separator: true,
    },

    {
      label: 'support.label',
      icon: 'ph-thin ph-question',
      items: [
        {
          label: 'support.documentation',
          icon: 'ph-thin ph-book',
          routerLink: '',
        },
        {
          label: 'support.contact',
          icon: 'ph-thin ph-headset',
          routerLink: '',
        },
      ],
    },
  ];
}
