import { Pipe, PipeTransform, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LayoutService } from '../layout/service/layout.service';

@Pipe({
  name: 'localeNumber',
  pure: false,
  standalone: true,
})
export class LocaleNumberPipe implements PipeTransform {
  private readonly layoutService = inject(LayoutService);

  transform(value: number | string | null | undefined, digitsInfo?: string): string | null {
    if (value == null) return null;

    const locale = this.layoutService.currentLanguage();
    const decimalPipe = new DecimalPipe(locale);
    return decimalPipe.transform(value, digitsInfo, locale);
  }
}
