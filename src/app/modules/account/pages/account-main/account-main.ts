import { Component } from '@angular/core';
import { AccountVisuals } from '../../components/account-visuals/account-visuals';
import { TabsModule } from 'primeng/tabs';
import { AccountAppearence } from '../../components/account-appearence/account-appearence';
import { AccountSecurity } from '../../components/account-security/account-security';
import { AccountBasicInformation } from '../../components/account-basic-information/account-basic-information';
import { TranslateModule } from '@ngx-translate/core';
import { AccountPreferences } from '../../components/account-preferences/account-preferences';

@Component({
  selector: 'account-main',
  imports: [
    TabsModule,
    TranslateModule,
    AccountVisuals,
    AccountAppearence,
    AccountSecurity,
    AccountBasicInformation,
    AccountPreferences,
  ],
  templateUrl: './account-main.html',
})
export class AccountMain {
  public readonly tabs = [
    { title: 'account.label', value: '0', icon: 'ph ph-user', description: 'account.description' },
    { title: 'appearance.label', value: '1', icon: 'ph ph-paint-brush', description: 'appearance.description' },
    { title: 'preferences.label', value: '2', icon: 'ph ph-gear', description: 'preferences.description' },
    { title: 'security.label', value: '3', icon: 'ph ph-lock', description: 'security.description' },
  ];
}
