import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { LoadingState } from '../../../../core/models/core.model';
import { TIMEZONES } from '../../../../core/helpers/constant.helper';

@Component({
  selector: 'account-preferences',
  imports: [ReactiveFormsModule, TranslateModule, ButtonModule, SelectModule, ToggleSwitchModule, FormLabel, FormTitle],
  templateUrl: './account-preferences.html',
})
export class AccountPreferences {
  private readonly toastService = inject(ToastService);

  public loading = { update: signal(false) } satisfies Partial<LoadingState>;

  public readonly timezones = TIMEZONES;

  public mainForm = new FormGroup({
    timezone: new FormControl('', [Validators.required]),
    notificationsEnabled: new FormControl(false),
    emailNotifications: new FormControl(false),
  });

  public saveChanges(): void {
    if (this.mainForm.valid) {
      this.loading.update.set(true);
      const formValue = this.mainForm.getRawValue();
      console.log(formValue);
    } else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm(): void {
    markAllDirty(this.mainForm);
    this.toastService.error({ title: 'status.pending', description: 'form.invalid', translate: true });
  }
}
