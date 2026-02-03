import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  CONFIRMATION_TYPE_CONFIGS,
  ConfirmationConfig,
  ConfirmationType,
  ConfirmationTypeConfig,
} from './confirmation-dialog.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ButtonModule, TranslateModule],
  template: `
    <p-confirmdialog #cd>
      <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        @if (message) {
          <div class="flex flex-col items-center gap-5 p-5 rounded w-[90vw] lg:w-[25vw] max-w-full">
            <div
              [class]="
                'rounded-full inline-flex justify-center items-center h-18 w-18 -mt-12 text-primary-contrast ' +
                (currentConfig?.iconColor || 'bg-primary')
              "
            >
              <i [class]="'ph text-3xl! ' + (currentConfig?.icon || 'ph-question')"></i>
            </div>
            <span class="font-semibold text-2xl">{{ currentConfig?.header | translate }}</span>
            <span class="text-center font-semibold">{{ currentConfig?.message | translate }}</span>
            <div class="grid w-full grid-cols-2 gap-2">
              <p-button
                [label]="currentConfig?.rejectLabel | translate"
                (onClick)="handleReject(onReject)"
                variant="text"
                [severity]="currentConfig?.rejectButtonSeverity"
                fluid
                [size]="'large'"
              ></p-button>

              <p-button
                [label]="currentConfig?.acceptLabel | translate"
                (onClick)="handleAccept(onAccept)"
                [raised]="true"
                [severity]="currentConfig?.acceptButtonSeverity"
                fluid
                [size]="'large'"
              ></p-button>
            </div>
          </div>
        }
      </ng-template>
    </p-confirmdialog>
  `,
  providers: [ConfirmationService],
})
export class AppConfirmationDialog {
  public currentConfig?: ConfirmationTypeConfig;
  private userOnAccept?: () => void | Promise<void>;
  private userOnReject?: () => void;

  private readonly typeConfigs: Record<ConfirmationType, ConfirmationTypeConfig> =
    CONFIRMATION_TYPE_CONFIGS;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private translateService: TranslateService,
  ) {}

  confirm(config: ConfirmationConfig): void {
    const type = config.type || 'primary';
    const baseConfig = this.typeConfigs[type];

    this.currentConfig = {
      icon: config.icon || baseConfig.icon,
      iconColor: config.iconColor || baseConfig.iconColor,
      header: config.header || baseConfig.header,
      message: config.message || baseConfig.message,
      acceptLabel: config.acceptLabel || baseConfig.acceptLabel,
      rejectLabel: config.rejectLabel || baseConfig.rejectLabel,
      acceptButtonSeverity: config.acceptButtonSeverity || baseConfig.acceptButtonSeverity,
      rejectButtonSeverity: config.rejectButtonSeverity || baseConfig.rejectButtonSeverity,
      successMessage: config.successMessage || baseConfig.successMessage,
      errorMessage: config.errorMessage || baseConfig.errorMessage,
      showSuccessToast: config.showSuccessToast ?? baseConfig.showSuccessToast,
    };

    this.userOnAccept = config.onAccept;
    this.userOnReject = config.onReject;

    this.confirmationService.confirm({
      header: this.currentConfig.header,
      message: this.currentConfig.message,
    });
  }

  async handleAccept(onAccept: () => void): Promise<void> {
    try {
      if (this.userOnAccept) {
        const result = this.userOnAccept();
        if (result instanceof Promise) {
          await result;
        }
      }

      if (this.currentConfig!.showSuccessToast) {
        this.messageService.add({
          severity: 'success',
          summary: this.translateService.instant('status.success'),
          detail: this.translateService.instant(this.currentConfig!.successMessage),
        });
      }

      onAccept();
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: this.translateService.instant('status.error'),
        detail: this.translateService.instant(this.currentConfig!.errorMessage),
      });
    }
  }

  handleReject(onReject: () => void): void {
    if (this.userOnReject) {
      this.userOnReject();
    }
    onReject();
  }
}
