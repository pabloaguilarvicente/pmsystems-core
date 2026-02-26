import { Component, inject, signal } from '@angular/core';
import { User } from '../../models/users.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'user-detail-dialog',
  imports: [ButtonModule, TranslateModule, AvatarModule, TagModule, DatePipe, NgClass],
  templateUrl: './user-detail-dialog.html',
})
export class UserDetailDialog {
  public config = inject(DynamicDialogConfig<User>);
  public ref = inject(DynamicDialogRef);
  public router = inject(Router);

  public readonly user = signal<User>(this.config.data);

  public getInitials(): string {
    const first = this.user().firstName?.charAt(0) ?? '';
    const last = this.user().lastName?.charAt(0) ?? '';
    return (first + last).toUpperCase();
  }

  public close() {
    this.ref.close();
  }

  public redirectUpdate() {
    this.router.navigate(['users/update', this.user().id]);
    this.close();
  }
}
