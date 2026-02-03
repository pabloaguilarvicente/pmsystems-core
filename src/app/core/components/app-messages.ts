import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface AppMessage {
  title?: string;
  description?: string;
  code?: string;
  image?: string;
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: number;
}

@Component({
  selector: 'app-messages',
  imports: [NgClass, TranslateModule],
  template: `
    <div class="flex flex-col items-center justify-center text-center gap-4 p-6">
      @if (message().image) {
        <img [src]="message().image" [alt]="message().title || ''" [ngClass]="imageClasses()" />
      } @else {
        <i [class]="message().icon || 'ph-duotone ph-question'" [ngClass]="iconClasses()"></i>
      }

      @if (message()) {
        <div class="flex flex-col gap-1 items-center">
          @if (message().title) {
            <span class="font-black text-lg">
              {{ message().title | translate }}
            </span>
          }

          @if (message().code) {
            <span
              class="inline-block w-auto font-black!"
              [class]="'badge badge-xl badge-' + message().status"
            >
              {{ message().code }}
            </span>
          }

          @if (message().description) {
            <span class="font-thin text-gray-600">
              {{ message().description | translate }}
            </span>
          }
        </div>
      }
    </div>
  `,
})
export class AppMessages {
  public message = input.required<AppMessage>();

  protected getSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    return (this.message()?.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl') || 'xl';
  }

  protected imageClasses() {
    const sizeMap = {
      xs: 'w-12 h-12',
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32',
      xl: 'w-60 h-60',
    };
    return sizeMap[this.getSize()];
  }

  protected iconClasses() {
    const sizeMap = {
      xs: 'text-3xl',
      sm: 'text-4xl',
      md: 'text-6xl',
      lg: 'text-7xl',
      xl: 'text-9xl',
    };
    return `${sizeMap[this.getSize()]} text-primary`;
  }
}
