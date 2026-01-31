import { ButtonSeverity } from 'primeng/button';

export type ConfirmationType = 'delete' | 'save' | 'warn' | 'info' | 'success' | 'primary';

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
  showSuccessToast?: boolean;
  onAccept?: () => void | Promise<void>;
  onReject?: () => void;
}

export interface ConfirmationTypeConfig {
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
  showSuccessToast: boolean;
}

export const CONFIRMATION_TYPE_CONFIGS: Record<ConfirmationType, ConfirmationTypeConfig> = {
  delete: {
    icon: 'pi-trash',
    iconColor: 'bg-red-500',
    header: 'confirmations.delete.header',
    message: 'confirmations.delete.message',
    acceptLabel: 'actions.delete',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'danger',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.delete.success',
    errorMessage: 'confirmations.delete.error',
    showSuccessToast: true,
  },
  save: {
    icon: 'pi-save',
    iconColor: 'bg-green-500',
    header: 'confirmations.save.header',
    message: 'confirmations.save.message',
    acceptLabel: 'actions.save',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'success',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.save.success',
    errorMessage: 'confirmations.save.error',
    showSuccessToast: true,
  },
  warn: {
    icon: 'pi-exclamation-triangle',
    iconColor: 'bg-orange-500',
    header: 'confirmations.warn.header',
    message: 'confirmations.warn.message',
    acceptLabel: 'actions.continue',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'warn',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.warn.success',
    errorMessage: 'confirmations.warn.error',
    showSuccessToast: true,
  },
  info: {
    icon: 'pi-info-circle',
    iconColor: 'bg-blue-400',
    header: 'confirmations.info.header',
    message: 'confirmations.info.message',
    acceptLabel: 'actions.accept',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'info',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.info.success',
    errorMessage: 'confirmations.info.error',
    showSuccessToast: true,
  },
  success: {
    icon: 'pi-check-circle',
    iconColor: 'bg-green-500',
    header: 'confirmations.success.header',
    message: 'confirmations.success.message',
    acceptLabel: 'actions.confirm',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'success',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.success.success',
    errorMessage: 'confirmations.success.error',
    showSuccessToast: true,
  },
  primary: {
    icon: 'pi-question',
    iconColor: 'bg-primary',
    header: 'confirmations.primary.header',
    message: 'confirmations.primary.message',
    acceptLabel: 'actions.accept',
    rejectLabel: 'actions.cancel',
    acceptButtonSeverity: 'primary',
    rejectButtonSeverity: 'secondary',
    successMessage: 'confirmations.primary.success',
    errorMessage: 'confirmations.primary.error',
    showSuccessToast: true,
  },
};
