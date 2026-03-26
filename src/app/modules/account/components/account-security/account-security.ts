import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TagModule } from 'primeng/tag';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { LoadingState } from '../../../../core/models/core.model';

@Component({
  selector: 'account-security',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    ToggleSwitchModule,
    TagModule,
    FormLabel,
  ],
  templateUrl: './account-security.html',
})
export class AccountSecurity {
  public loading = { update: signal(false) } satisfies Partial<LoadingState>;

  public mainForm = new FormGroup({
    emailVerified: new FormControl({ value: false, disabled: true }),
    phoneVerified: new FormControl({ value: false, disabled: true }),
    lastLoginAt: new FormControl({ value: '', disabled: true }),
    lastLoginIp: new FormControl({ value: '', disabled: true }),
    passwordChangedAt: new FormControl({ value: '', disabled: true }),
    failedLoginAttempts: new FormControl({ value: 0, disabled: true }),
    lockedUntil: new FormControl({ value: '', disabled: true }),
    twoFactorEnabled: new FormControl(false),
  });

  public saveChanges(): void {
    this.loading.update.set(true);
    const formValue = { twoFactorEnabled: this.mainForm.get('twoFactorEnabled')?.value };
    console.log(formValue);
  }
}
