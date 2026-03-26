import { Component, effect, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { UpdateUserRequest } from '../../models/users.model';
import { GENDERS, ROLES, STATUS } from '../../../../core/helpers/constant.helper';
import { ButtonModule } from 'primeng/button';
import { FormLabel } from '../../../../core/components/app-forms/form-label';
import { FormPicture } from '../../../../core/components/app-forms/form-picture';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { SkeletonForm } from '../../../../core/components/app-skeletons/skeleton-form';
import { LoadingState } from '../../../../core/models/core.model';
import { UserGender, UserRole, UserStatus } from '../../../account/models/account.model';

@Component({
  selector: 'users-update',
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
    SkeletonForm,
  ],
  providers: [UsersService],
  templateUrl: './users-update.html',
})
export class UsersUpdate {
  public id = input<number>();

  public readonly toastService = inject(ToastService);
  public readonly usersService = inject(UsersService);
  public readonly router = inject(Router);

  public readonly roles: UserRole[] = ROLES;
  public readonly status: UserStatus[] = STATUS;
  public readonly genders: UserGender[] = GENDERS;

  public loading = { detail: signal(false), update: signal(false) } satisfies Partial<LoadingState>;

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

  constructor() {
    effect(() => {
      if (this.id()) {
        this.detail();
      }
    });
  }

  private detail() {
    this.loading.detail.set(true);
    this.usersService.getById(this.id()!).subscribe({
      next: (response) => {
        this.mainForm.patchValue({
          ...response.data,
          profile: {
            ...response.data.profile,
            birthDate: response.data.profile.birthDate ? new Date(response.data.profile.birthDate) : null,
          },
        } as any);
        this.loading.detail.set(false);
      },
    });
  }

  public update() {
    if (this.mainForm.valid) {
      this.loading.update.set(true);
      const formValue = this.mainForm.getRawValue();

      this.usersService.update(this.id()!, formValue as unknown as UpdateUserRequest).subscribe({
        next: (response) => {
          this.toastService.success({ title: 'Éxito', description: response.message });
          this.loading.update.set(false);
          this.redirectBack();
        },
        error: (error) => {
          this.loading.update.set(false);
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
