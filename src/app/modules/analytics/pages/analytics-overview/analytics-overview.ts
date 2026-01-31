import { Component, ViewChild } from '@angular/core';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { AppConfirmationDialogComponent } from '../../../../core/components/confirmation-dialog/app-confirmation-dialog';
@Component({
  selector: 'analytics-overview',
  imports: [AppTitlePage, ConfirmDialogModule, ButtonModule, AppConfirmationDialogComponent],
  templateUrl: './analytics-overview.html',
})
export class AnalyticsOverview {
  @ViewChild(AppConfirmationDialogComponent) confirmDialog!: AppConfirmationDialogComponent;

  confirmDelete(): void {
    this.confirmDialog.confirm({
      type: 'primary',
    });
  }
}
