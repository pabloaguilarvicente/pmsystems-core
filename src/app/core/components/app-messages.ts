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
  statusText?: string;
  message?: string;
  url?: string;
  timestamp?: string;
}

@Component({
  selector: 'app-messages',
  imports: [NgClass, TranslateModule],
  template: `
    <div class="flex flex-col items-center justify-center text-center p-6">
      @if (message().image) {
        <img [src]="message().image" [alt]="message().title || ''" [ngClass]="imageClasses()" />
      } @else {
        <i [class]="message().icon || 'ph-bold ph-question'" [ngClass]="iconClasses()"></i>
      }

      @if (message()) {
        @if (message().title || message().code || message().description) {
          <div class="flex flex-col items-center max-w-2xl mt-2">
            @if (message().title) {
              <span class="font-black text-2xl text-gray-800">
                {{ message().title | translate }}
              </span>
            }

            @if (message().code) {
              <span
                class="inline-block w-auto font-black! mt-2"
                [class]="'badge badge-xl badge-' + message().status"
              >
                {{ message().code }}
              </span>
            }

            @if (message().description) {
              <p class="text-base text-gray-600 mt-2">
                {{ message().description | translate }}
              </p>
            }
          </div>
        }

        @if (isErrorMessage()) {
          <div class="w-full max-w-2xl mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div class="flex flex-col gap-2 text-sm text-left">
              @if (message().statusText) {
                <div class="flex items-start gap-2">
                  <span class="font-black min-w-24">{{ 'errors.labels.status' | translate }}:</span>
                  <span class="text-gray-600 font-mono">{{ message().statusText }}</span>
                </div>
              }

              @if (message().status) {
                <div class="flex items-start gap-2">
                  <span class="font-black min-w-24">{{ 'errors.labels.code' | translate }}:</span>
                  <span class="text-gray-600 font-mono">{{ message().status }}</span>
                </div>
              }

              @if (message().message) {
                <div class="flex items-start gap-2">
                  <span class="font-black min-w-24"
                    >{{ 'errors.labels.message' | translate }}:</span
                  >
                  <span class="text-gray-600 font-mono">{{ message().message }}</span>
                </div>
              }

              @if (message().url) {
                <div class="flex items-start gap-2">
                  <span class="font-black min-w-24">{{ 'errors.labels.url' | translate }}:</span>
                  <span class="text-gray-600 font-mono">{{ message().url }}</span>
                </div>
              }

              @if (message().timestamp) {
                <div class="flex items-start gap-2">
                  <span class="font-black  min-w-24"
                    >{{ 'errors.labels.timestamp' | translate }}:</span
                  >
                  <span class="text-gray-600 font-mono">{{ message().timestamp }}</span>
                </div>
              }
            </div>
          </div>
        }
      }
    </div>
  `,
})
export class AppMessages {
  public message = input.required<AppMessage>();

  protected getSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    return (this.message()?.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl') || 'lg';
  }

  protected isErrorMessage(): boolean {
    const msg = this.message();
    return !!(msg.status || msg.statusText || msg.message || msg.url || msg.timestamp);
  }

  protected imageClasses() {
    const sizeMap = {
      xs: 'w-12',
      sm: 'w-16',
      md: 'w-24',
      lg: 'w-32',
      xl: 'w-60',
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
