import { Component, HostListener, signal } from '@angular/core';
import { FormPicture } from '../../../../core/components/app-forms/form-picture';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'account-visuals',
  imports: [FormPicture, ReactiveFormsModule, ButtonModule, TranslateModule],
  templateUrl: './account-visuals.html',
})
export class AccountVisuals {
  public readonly profilePictureControl = new FormControl<File | string | null>(null);
  public readonly coverPreviewUrl = signal<string | null>(null);
  public readonly user = {
    fullName: 'Pablo Aguilar',
    role: 'Software Developer',
    location: 'San Francisco, CA',
  };
  public isSmallScreen = window.innerWidth < 1024;

  @HostListener('window:resize')
  onResize(): void {
    this.isSmallScreen = window.innerWidth < 1024;
  }

  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.coverPreviewUrl.set(URL.createObjectURL(file));
    input.value = '';
  }
}
