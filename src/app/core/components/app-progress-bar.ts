import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  template: `
    @if (progressBarService.isLoading()) {
      <div class="app-progress-bar">
        <p-progressBar mode="indeterminate" [style]="{ height: '3px' }" />
      </div>
    }
  `,
})
export class AppProgressBar {
  public readonly progressBarService = inject(ProgressBarService);
}
