import { ApplicationRef, provideAppInitializer, inject } from '@angular/core';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18N_PATH } from '../commons/core.constants';

function removeTranslationTitles(): void {
  document.querySelectorAll('[title]').forEach((element) => {
    const title = element.getAttribute('title');
    if (title && title.includes('.')) {
      element.removeAttribute('title');
    }
  });
}

function initializeTranslationTitlesRemover(): void {
  const appRef = inject(ApplicationRef);

  appRef.isStable.subscribe((stable) => {
    if (stable) {
      removeTranslationTitles();

      const observer = new MutationObserver((mutations) => {
        const hasRelevantChanges = mutations.some(
          (mutation) => mutation.type === 'attributes' && mutation.attributeName === 'title',
        );

        if (hasRelevantChanges) {
          removeTranslationTitles();
        }
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['title'],
        subtree: true,
        childList: false,
        characterData: false,
      });
    }
  });
}

export const PROVIDE_TRANSLATE = [
  provideTranslateService({
    loader: provideTranslateHttpLoader({
      prefix: I18N_PATH,
    }),
    fallbackLang: 'es',
    lang: 'es',
  }),
  provideAppInitializer(initializeTranslationTitlesRemover),
];
