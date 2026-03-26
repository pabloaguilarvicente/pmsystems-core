import { Component, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { ColorTwitterModule } from 'ngx-color/twitter';
import { ButtonModule } from 'primeng/button';
import { FormTitle } from '../../../../core/components/app-forms/form-title';
import { Language, LayoutService, MenuMode, MenuProfilePosition } from '../../../../core/layout/service/layout.service';
import { PRESET_COLORS } from '../../../../core/helpers/constant.helper';
import { applyPrimaryPalette } from '../../../../core/layout/preset';
import { LoadingState } from '../../../../core/models/core.model';

interface PendingConfig {
  language: Language;
  darkTheme: boolean;
  primaryColor: string;
  menuMode: MenuMode;
  menuProfilePosition: MenuProfilePosition;
}

@Component({
  selector: 'account-appearence',
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    RadioButtonModule,
    TranslateModule,
    TooltipModule,
    ColorTwitterModule,
    ButtonModule,
    FormTitle,
  ],
  templateUrl: './account-appearence.html',
})
export class AccountAppearence {
  public readonly layoutService: LayoutService = inject(LayoutService);
  public loading = { update: signal(false) } satisfies Partial<LoadingState>;
  public readonly colors: string[] = PRESET_COLORS;

  private savedConfig = signal<PendingConfig>(this.buildConfigSnapshot());
  public pending = signal<PendingConfig>(this.buildConfigSnapshot());

  public hasChanges(): boolean {
    const s = this.savedConfig();
    const p = this.pending();
    return (
      s.language !== p.language ||
      s.darkTheme !== p.darkTheme ||
      s.primaryColor !== p.primaryColor ||
      s.menuMode !== p.menuMode ||
      s.menuProfilePosition !== p.menuProfilePosition
    );
  }

  setPendingLanguage(lang: Language) {
    this.pending.update((c) => ({ ...c, language: lang }));
  }

  setPendingDarkTheme(val: boolean) {
    this.pending.update((c) => ({ ...c, darkTheme: val }));
  }

  setPendingColor(color: string) {
    this.pending.update((c) => ({ ...c, primaryColor: color }));
  }

  setPendingMenuMode(mode: MenuMode) {
    this.pending.update((c) => ({ ...c, menuMode: mode }));
  }

  setPendingMenuProfilePosition(pos: MenuProfilePosition) {
    this.pending.update((c) => ({ ...c, menuProfilePosition: pos }));
  }

  saveChanges() {
    if (!this.hasChanges()) return;
    this.loading.update.set(true);

    const p = this.pending();

    this.layoutService.changeLanguage(p.language);

    this.layoutService.layoutConfig.update((config) => ({
      ...config,
      darkTheme: p.darkTheme,
      menuTheme: p.darkTheme ? 'dark' : 'light',
      topbarTheme: p.darkTheme ? 'dark' : 'light',
      primaryColor: p.primaryColor,
      menuMode: p.menuMode,
      menuProfilePosition: p.menuProfilePosition,
    }));

    applyPrimaryPalette(p.primaryColor);

    this.savedConfig.set({ ...p });
    this.loading.update.set(false);
  }

  private buildConfigSnapshot(): PendingConfig {
    const config = this.layoutService.layoutConfig();
    return {
      language: this.layoutService.currentLanguage(),
      darkTheme: config.darkTheme,
      primaryColor: config.primaryColor,
      menuMode: config.menuMode,
      menuProfilePosition: config.menuProfilePosition,
    };
  }
}
