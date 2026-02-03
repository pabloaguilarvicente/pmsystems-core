import { Pipe, PipeTransform, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LayoutService } from '../layout/service/layout.service';

@Pipe({
  name: 'localeDate',
  pure: false,
  standalone: true,
})
export class LocaleDatePipe implements PipeTransform {
  private readonly layoutService = inject(LayoutService);

  transform(value: any, format: string = 'dd MMM, y'): string | null {
    if (!value) return null;

    const locale = this.layoutService.currentLanguage();
    const datePipe = new DatePipe(locale);
    return datePipe.transform(value, format, undefined, locale);
  }
}
