// core/pipes/locale-currency.pipe.ts
import { Pipe, PipeTransform, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LayoutService } from '../layout/service/layout.service';

@Pipe({
  name: 'localeCurrency',
  pure: false,
  standalone: true,
})
export class LocaleCurrencyPipe implements PipeTransform {
  private readonly layoutService = inject(LayoutService);

  transform(
    value: number | string | null | undefined,
    currencyCode: string = 'USD',
    display: 'code' | 'symbol' | 'symbol-narrow' | string | boolean = 'symbol',
    digitsInfo?: string,
  ): string | null {
    if (value == null) return null;

    const locale = this.layoutService.currentLanguage();
    const currencyPipe = new CurrencyPipe(locale);
    return currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
  }
}
