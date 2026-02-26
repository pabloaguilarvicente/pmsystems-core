import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error' | 'contrast' | 'secondary';

export interface ToastOptions {
  title: string;
  description: string;
  translate?: boolean;
  life?: number;
  sticky?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly messageService = inject(MessageService);
  private readonly translateService = inject(TranslateService);

  public show(
    type: ToastSeverity,
    { title, description, translate = false, life = 3000, sticky = false }: ToastOptions,
  ): void {
    const summary = translate ? this.translateService.instant(title) : title;
    const detail = translate ? this.translateService.instant(description) : description;

    this.messageService.add({ severity: type, summary, detail, life, sticky });
  }

  public hide(): void {
    this.messageService.clear();
  }

  public success(options: ToastOptions): void {
    this.show('success', options);
  }

  public info(options: ToastOptions): void {
    this.show('info', options);
  }

  public warn(options: ToastOptions): void {
    this.show('warn', options);
  }

  public error(options: ToastOptions): void {
    this.show('error', options);
  }

  public contrast(options: ToastOptions): void {
    this.show('contrast', options);
  }

  public secondary(options: ToastOptions): void {
    this.show('secondary', options);
  }
}
