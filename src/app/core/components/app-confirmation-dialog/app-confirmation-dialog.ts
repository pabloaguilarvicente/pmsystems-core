import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {
  CONFIRMATION_TYPE_CONFIGS,
  ConfirmationConfig,
  ConfirmationType,
  ConfirmationTypeConfig,
} from './confirmation-dialog.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoadingState } from '../../models/core.model';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, ButtonModule, TranslateModule],
  template: `
    @if (currentConfig) {
      <div class="flex flex-col items-center gap-5">
        <div
          [class]="
            'rounded-full inline-flex justify-center items-center h-18 w-18  text-primary-contrast ' +
            (currentConfig.iconColor || 'bg-primary')
          "
        >
          <i [class]="'ph text-3xl! ' + (currentConfig.icon || 'ph-question')"></i>
        </div>
        <span class="font-semibold text-2xl">{{ currentConfig.header | translate }}</span>
        <span class="text-center font-semibold">{{ currentConfig.message | translate }}</span>
        <div class="grid w-full grid-cols-2 gap-2">
          <p-button
            [label]="currentConfig.rejectLabel | translate"
            (onClick)="handleReject()"
            [outlined]="true"
            [severity]="currentConfig.rejectButtonSeverity"
            fluid="true"
            [size]="'large'"
            [disabled]="loading.api()"
          ></p-button>

          <p-button
            [label]="currentConfig.acceptLabel | translate"
            (onClick)="handleAccept()"
            [raised]="true"
            [severity]="currentConfig.acceptButtonSeverity"
            fluid="true"
            [size]="'large'"
            [loading]="loading.api()"
          ></p-button>
        </div>
      </div>
    }
  `,
})
export class AppConfirmationDialog implements OnInit {
  public currentConfig?: ConfirmationTypeConfig;
  public loading = { api: signal(false) } satisfies Partial<LoadingState>;

  private config!: ConfirmationConfig;
  private readonly typeConfigs: Record<ConfirmationType, ConfirmationTypeConfig> = CONFIRMATION_TYPE_CONFIGS;

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
  ) {}

  ngOnInit(): void {
    this.config = this.dialogConfig.data as ConfirmationConfig;
    const base = this.typeConfigs[this.config.type || 'primary'];

    this.currentConfig = {
      icon: this.config.icon || base.icon,
      iconColor: this.config.iconColor || base.iconColor,
      header: this.config.header || base.header,
      message: this.config.message || base.message,
      acceptLabel: this.config.acceptLabel || base.acceptLabel,
      rejectLabel: this.config.rejectLabel || base.rejectLabel,
      acceptButtonSeverity: this.config.acceptButtonSeverity || base.acceptButtonSeverity,
      rejectButtonSeverity: this.config.rejectButtonSeverity || base.rejectButtonSeverity,
      successMessage: this.config.successMessage || base.successMessage,
      errorMessage: this.config.errorMessage || base.errorMessage,
      showSuccessToast: this.config.showSuccessToast ?? base.showSuccessToast,
    };
  }

  handleAccept(): void {
    if (!this.config.action$) {
      this.ref.close(true);
      return;
    }

    this.loading.api.set(true);

    this.config.action$.subscribe({
      next: () => {
        if (this.currentConfig!.showSuccessToast) {
          this.messageService.add({
            severity: 'success',
            summary: this.translateService.instant('status.success'),
            detail: this.translateService.instant(this.currentConfig!.successMessage),
          });
        }
        this.loading.api.set(false);
        this.ref.close(true);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: this.translateService.instant('status.error'),
          detail: this.translateService.instant(this.currentConfig!.errorMessage),
        });
        this.loading.api.set(false);
      },
    });
  }

  handleReject(): void {
    if (this.config.onReject) {
      this.config.onReject();
    }
    this.ref.close(false);
  }
}
