import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { finalize } from 'rxjs/operators';
import { markAllDirty } from '../../../../core/helpers/utils.helper';
import { ToastService } from '../../../../core/services/toast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.model';
import { Role } from '../../../account/models/account.model';
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { LOCAL_STORAGE_KEYS } from '../../../../core/helpers/constant.helper';
import { AppSettings, LoadingState } from '../../../../core/models/core.model';
import { environment } from '../../../../../environments/environment.development';

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
  private readonly localStorageService = inject(LocalStorageService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  private readonly appSettings = this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings);
  public readonly version = environment.version;

  public readonly Role = Role;
  public loading = { api: signal(false) } satisfies Partial<LoadingState>;
  public imageVisible = signal(true);

  public mainForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl<boolean>(this.appSettings?.global?.rememberMe ?? false, { nonNullable: true }),
    role: new FormControl<Role>(Role.User, { nonNullable: true }),
  });

  public get roleImage() {
    return this.mainForm.controls.role.value === Role.Admin ? 'images/login/admin.jpg' : 'images/login/user.jpg';
  }

  public forgotPassword() {}

  public setRole(role: Role) {
    this.imageVisible.set(false);
    setTimeout(() => {
      this.mainForm.controls.role.setValue(role);
      this.imageVisible.set(true);
    }, 250);
  }

  public login() {
    if (this.mainForm.valid) {
      this.loading.api.set(true);
      const payload: LoginRequest = {
        email: this.mainForm.controls.email.value!,
        password: this.mainForm.controls.password.value!,
        rememberMe: this.mainForm.controls.rememberMe.value,
        role: this.mainForm.controls.role.value,
      };

      this.authService
        .login(payload)
        .pipe(finalize(() => this.loading.api.set(false)))
        .subscribe({
          next: () => {
            this.persistRememberMe();
            this.router.navigate(['/analytics']);
          },
          error: (err) => {
            this.toastService.error({
              title: 'auth.error',
              description: err?.message ?? 'auth.invalid_credentials',
              translate: true,
            });
          },
        });
    } else {
      markAllDirty(this.mainForm);
      this.toastService.error({ title: 'status.pending', description: 'form.invalid', translate: true });
    }
  }

  private persistRememberMe() {
    const rememberMe = this.mainForm.controls.rememberMe.value;
    const current = this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings);

    this.localStorageService.set(LOCAL_STORAGE_KEYS.appSettings, {
      ...current,
      global: {
        ...current?.global,
        rememberMe,
      },
    });
  }
}
