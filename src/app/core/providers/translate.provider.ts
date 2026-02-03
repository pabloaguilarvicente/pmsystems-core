import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18N_PATH } from '../commons/core.constants';

export const PROVIDE_TRANSLATE = provideTranslateService({
  loader: provideTranslateHttpLoader({
    prefix: I18N_PATH,
  }),
  fallbackLang: 'es',
  lang: 'es',
});
