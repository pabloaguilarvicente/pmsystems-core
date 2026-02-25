import { Component } from '@angular/core';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { UserRole, UserStatus } from '../../models/users.model';
import { ROLES, STATUS } from '../../../../core/helpers/constant.helper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'users-register',
  imports: [
    AppTitlePage,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './users-register.html',
})
export class UsersRegister {
  public readonly roles: UserRole[] = ROLES;
  public readonly status: UserStatus[] = STATUS;

  public mainForm = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    role: new FormControl<string>('', [Validators.required]),
    status: new FormControl<string>('', [Validators.required]),
  });

  public register() {
    console.log(this.mainForm.getRawValue());
  }
}
