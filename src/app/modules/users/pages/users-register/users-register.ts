import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CreateUserRequest, UserGender, UserRole, UserStatus } from '../../models/users.model';
import { GENDERS, ROLES, STATUS } from '../../../../core/helpers/constant.helper';
import { ButtonModule } from 'primeng/button';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { FormPicture } from '../../../../core/components/app-forms/form-picture';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

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
  providers: [UsersService],
  templateUrl: './users-register.html',
})
export class UsersRegister {
  public readonly toast = inject(MessageService);
  public readonly toastService = inject(ToastService);
  public readonly usersService = inject(UsersService);
  public readonly router = inject(Router);

  public loading = signal<boolean>(false);

  public readonly roles: UserRole[] = ROLES;
  public readonly status: UserStatus[] = STATUS;
  public readonly genders: UserGender[] = GENDERS;

  public mainForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    profile: new FormGroup({
      picture: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      bio: new FormControl(''),
    }),
  });

  public register() {
    if (this.mainForm.valid) {
      this.loading.set(true);
      const formValue = this.mainForm.getRawValue();

      this.usersService.create(formValue as unknown as CreateUserRequest).subscribe({
        next: (response) => {
          this.toastService.success({ title: 'Éxito', description: response.message });
          this.loading.set(false);
          this.redirectBack();
        },
        error: (error) => {
          this.loading.set(false);
          this.toastService.error({ title: 'Error', description: error.error.message });
        },
      });
    } else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm() {
    markAllDirty(this.mainForm);
    this.toastService.error({ title: 'status.pending', description: 'form.invalid', translate: true });
  }

  private redirectBack() {
    this.router.navigate(['/users']);
  }
}
