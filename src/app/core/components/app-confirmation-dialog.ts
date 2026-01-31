import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';

export type ConfirmationType = 'delete' | 'save' | 'warn' | 'info' | 'success' | 'custom';

export interface ConfirmationConfig {
  type?: ConfirmationType;
  header?: string;
  message?: string;
  icon?: string;
  iconColor?: string;
  acceptLabel?: string;
  rejectLabel?: string;
  acceptButtonSeverity?: ButtonSeverity;
  rejectButtonSeverity?: ButtonSeverity;
  successMessage?: string;
  errorMessage?: string;
  onAccept?: () => void | Promise<void>;
  onReject?: () => void;
}

interface ConfirmationTypeConfig {
  icon: string;
  iconColor: string;
  header: string;
  message: string;
  acceptLabel: string;
  rejectLabel: string;
  acceptButtonSeverity: ButtonSeverity;
  rejectButtonSeverity: ButtonSeverity;
  successMessage: string;
  errorMessage: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ButtonModule],
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
              <i [class]="'pi text-3xl! ' + (currentConfig?.icon || 'pi-question')"></i>
            </div>
            <span class="font-bold text-2xl">{{ currentConfig?.header }}</span>
            <span class="text-center">{{ currentConfig?.message }}</span>
            <div class="grid w-full grid-cols-2 gap-2">
              <p-button
                [label]="currentConfig?.rejectLabel || 'Cancelar'"
                (onClick)="handleReject(onReject)"
                [outlined]="true"
                [severity]="currentConfig?.rejectButtonSeverity"
                fluid
                [size]="'large'"
              ></p-button>

              <p-button
                [label]="currentConfig?.acceptLabel || 'Aceptar'"
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
export class AppConfirmationDialogComponent {
  public currentConfig?: ConfirmationTypeConfig;
  private userOnAccept?: () => void | Promise<void>;
  private userOnReject?: () => void;

  public defaultBreakpoints = {
    '640px': '90vw',
    '1024px': '35vw',
  };

  private readonly typeConfigs: Record<ConfirmationType, ConfirmationTypeConfig> = {
    delete: {
      icon: 'pi-trash',
      iconColor: 'bg-red-500',
      header: 'Confirmar eliminación',
      message: '¿Está seguro que desea eliminar este elemento? Esta acción no se puede deshacer.',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'danger',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Elemento eliminado correctamente',
      errorMessage: 'Error al eliminar el elemento',
    },
    save: {
      icon: 'pi-save',
      iconColor: 'bg-green-500',
      header: 'Guardar cambios',
      message: '¿Está seguro que desea guardar los cambios realizados?',
      acceptLabel: 'Guardar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'success',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Cambios guardados correctamente',
      errorMessage: 'Error al guardar los cambios',
    },
    warn: {
      icon: 'pi-exclamation-triangle',
      iconColor: 'bg-orange-500',
      header: 'Advertencia',
      message: 'Esta acción requiere confirmación. ¿Desea continuar?',
      acceptLabel: 'Continuar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'warn',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Acción completada correctamente',
      errorMessage: 'Error al completar la acción',
    },
    info: {
      icon: 'pi-info-circle',
      iconColor: 'bg-blue-400 ',
      header: 'Información',
      message: '¿Desea proceder con esta acción?',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'info',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Acción completada',
      errorMessage: 'Error al procesar',
    },
    success: {
      icon: 'pi-check-circle',
      iconColor: 'bg-green-500 ',
      header: 'Confirmación',
      message: '¿Desea confirmar esta acción?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'success',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Operación exitosa',
      errorMessage: 'Error en la operación',
    },
    custom: {
      icon: 'pi-question',
      iconColor: 'bg-primary',
      header: 'Confirmación',
      message: '¿Desea continuar?',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      acceptButtonSeverity: 'primary',
      rejectButtonSeverity: 'secondary',
      successMessage: 'Operación completada',
      errorMessage: 'Error al procesar',
    },
  };

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  confirm(config: ConfirmationConfig): void {
    const type = config.type || 'custom';
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

      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: this.currentConfig!.successMessage,
      });

      onAccept();
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.currentConfig!.errorMessage,
      });
      console.error('Error in confirmation accept:', error);
    }
  }

  handleReject(onReject: () => void): void {
    if (this.userOnReject) {
      this.userOnReject();
    }
    onReject();
  }
}
