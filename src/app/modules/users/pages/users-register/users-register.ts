import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { UserGender, UserRole, UserStatus } from '../../models/users.model';
import {
  GENDERS,
  ROLES,
  STATUS,
} from '../../../../core/helpers/constant.helper';
import { ButtonModule } from 'primeng/button';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { FormPicture } from '../../../../core/components/app-forms/form-picture';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { markAllDirty } from '../../../../core/helpers/utils.helper';

@Component({
  selector: 'users-register',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    FormLabel,
    FormPicture,
    FormTitle,
    DatePickerModule,
    InputMaskModule,
    TextareaModule,
  ],
  templateUrl: './users-register.html',
})
export class UsersRegister {
  public readonly toast = inject(MessageService);
  public readonly translateService = inject(TranslateService);

  public readonly roles: UserRole[] = ROLES;
  public readonly status: UserStatus[] = STATUS;
  public readonly genders: UserGender[] = GENDERS;

  public mainForm = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    role: new FormControl<string>('', [Validators.required]),
    status: new FormControl<string>('', [Validators.required]),
    profile: new FormGroup({
      picture: new FormControl<string>(''),
      birthDate: new FormControl<string>(''),
      gender: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>(''),
      bio: new FormControl<string>(''),
    }),
  });

  public register() {
    if (this.mainForm.valid) {
      console.log(this.mainForm.getRawValue());
    } else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm() {
    markAllDirty(this.mainForm);
    this.toast.add({
      severity: 'error',
      summary: this.translateService.instant('status.pending'),
      detail: this.translateService.instant('form.invalid'),
    });
  }
}
