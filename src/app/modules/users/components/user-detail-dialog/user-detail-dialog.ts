import { Component, inject, signal } from '@angular/core';
import { User } from '../../models/users.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocaleDatePipe } from '../../../../core/pipes/locale-date-pipe.pipe';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'user-detail-dialog',
  imports: [LocaleDatePipe, ButtonModule, TranslateModule, AvatarModule],
  templateUrl: './user-detail-dialog.html',
})
export class UserDetailDialog {
  public config = inject(DynamicDialogConfig<User>);
  public ref = inject(DynamicDialogRef);
  public router = inject(Router);

  public readonly user = signal<User>(this.config.data);

  public close() {
    this.ref.close();
  }

  public redirectUpdate() {
    this.router.navigate(['users/update', this.user().id]);
    this.close();
  }
}
