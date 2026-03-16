import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { Router } from '@angular/router';

export const Role = {
  Admin: 'ADMIN',
  User: 'USER',
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
  role: Role;
}

@Component({
  selector: 'auth-login',
  imports: [
    ReactiveFormsModule,
    NgClass,
    TranslateModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
  ],
  templateUrl: './auth-login.html',
})
export class AuthLogin {
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  public readonly Role = Role;
  public loading = signal(false);

  public mainForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl<boolean>(false, { nonNullable: true }),
    role: new FormControl<Role>(Role.User, { nonNullable: true }),
  });

  public setRole(role: Role) {
    this.mainForm.controls.role.setValue(role);
  }

  public login() {
    if (this.mainForm.valid) {
      this.loading.set(true);
      const payload: LoginRequest = {
        email: this.mainForm.controls.email.value!,
        password: this.mainForm.controls.password.value!,
        rememberMe: this.mainForm.controls.rememberMe.value,
        role: this.mainForm.controls.role.value,
      };
      console.log(payload);
      this.router.navigate(['/analytics']);
    } else {
      markAllDirty(this.mainForm);
      this.toastService.error({ title: 'status.pending', description: 'form.invalid', translate: true });
    }
  }

  public forgotPassword() {}
}
