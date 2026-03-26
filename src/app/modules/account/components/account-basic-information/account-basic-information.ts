import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { GENDERS } from '../../../../core/helpers/constant.helper';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { LoadingState } from '../../../../core/models/core.model';
import { UserGender } from '../../models/account.model';

@Component({
  selector: 'account-basic-information',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    InputMaskModule,
    TextareaModule,
    FormLabel,
    FormTitle,
  ],
  templateUrl: './account-basic-information.html',
})
export class AccountBasicInformation {
  private readonly toastService = inject(ToastService);

  public loading = { update: signal(false) } satisfies Partial<LoadingState>;

  public readonly genders: UserGender[] = GENDERS;

  public mainForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profile: new FormGroup({
      picture: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      bio: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
    }),
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
