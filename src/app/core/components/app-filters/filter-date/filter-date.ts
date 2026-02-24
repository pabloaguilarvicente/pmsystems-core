import {
  Component,
  model,
  input,
  effect,
  computed,
  output,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DatePicker, DatePickerModule } from 'primeng/datepicker';
import { FiltersService } from '../filters.service';

export interface FilterDateConfig {
  selectionMode: 'single' | 'range';
  showQuickFilters?: boolean;
  restoreParams: boolean;
  format?: string;
}

export interface DateFilterOutput {
  startDate: string | null;
  endDate: string | null;
  singleDate: string | null;
}

export type DateRange = Date | Date[] | null;

@Component({
  selector: 'filter-date',
  standalone: true,
  imports: [CommonModule, ButtonModule, DatePickerModule, TranslateModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './filter-date.html',
})
export class FilterDate {
  @ViewChild(DatePicker) datePicker!: DatePicker;

  private readonly filtersService = inject(FiltersService);
  private readonly datePipe = inject(DatePipe);

  public config = input.required<FilterDateConfig>();
  public selectedDate = model<DateRange>(null);
  public dateChange = output<DateFilterOutput>();

  public activeQuickFilter: string | null = null;
  public shouldShowQuickFilters = computed(() => this.config().showQuickFilters !== false);

  public primeNgDateFormat = computed(() => {
    const format = this.config().format ?? 'dd/MM/yyyy';
    return format
      .replace('MM', 'mm')
      .replace('yyyy', 'yy')
      .replace(/(?<!y)yy(?!y)/, 'y');
  });

  private lastEmittedDate: DateRange = null;

  constructor() {
    effect(() => {
      const date = this.selectedDate();
      if (date && !this.isQuickFilterActive()) {
        this.activeQuickFilter = null;
      }
    });

    effect(() => {
      const cfg = this.config();

      if (cfg.restoreParams) {
        const savedFilters = this.filtersService.getFilters();
        const savedDates = savedFilters?.dates;

        if (savedDates) {
          const restoredDate = this.convertOutputToDateRange(savedDates);

          if (restoredDate) {
            this.selectedDate.set(restoredDate);
            this.lastEmittedDate = this.cloneDate(restoredDate);
            this.dateChange.emit(savedDates);
          }
        }
      }
    });
  }

  public setToday(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.config().selectionMode === 'range') {
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);
      this.selectedDate.set([today, endOfDay]);
    } else {
      this.selectedDate.set(today);
    }

    this.activeQuickFilter = 'today';
  }

  public setLastWeek(): void {
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    lastWeek.setHours(0, 0, 0, 0);

    if (this.config().selectionMode === 'range') {
      this.selectedDate.set([lastWeek, today]);
    } else {
      this.selectedDate.set(lastWeek);
    }

    this.activeQuickFilter = 'lastWeek';
  }

  public setLastMonth(): void {
    const today = new Date();
    const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    startOfLastMonth.setHours(0, 0, 0, 0);

    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    endOfLastMonth.setHours(23, 59, 59, 999);

    if (this.config().selectionMode === 'range') {
      this.selectedDate.set([startOfLastMonth, endOfLastMonth]);
    } else {
      this.selectedDate.set(startOfLastMonth);
    }

    this.activeQuickFilter = 'lastMonth';
  }

  public setLastYear(): void {
    const today = new Date();
    const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
    startOfLastYear.setHours(0, 0, 0, 0);

    const endOfLastYear = new Date(today.getFullYear() - 1, 11, 31);
    endOfLastYear.setHours(23, 59, 59, 999);

    if (this.config().selectionMode === 'range') {
      this.selectedDate.set([startOfLastYear, endOfLastYear]);
    } else {
      this.selectedDate.set(startOfLastYear);
    }

    this.activeQuickFilter = 'lastYear';
  }

  public clearDate(): void {
    this.selectedDate.set(null);
    this.activeQuickFilter = null;
  }

  public getButtonSeverity(filter: string): 'secondary' | 'primary' {
    return this.activeQuickFilter === filter ? 'primary' : 'secondary';
  }

  public isButtonOutlined(filter: string): boolean {
    return this.activeQuickFilter === filter;
  }

  private isQuickFilterActive(): boolean {
    return this.activeQuickFilter !== null;
  }

  public emitDateChange(): void {
    const date = this.selectedDate();

    if (!date) {
      const emptyOutput: DateFilterOutput = {
        startDate: null,
        endDate: null,
        singleDate: null,
      };

      this.lastEmittedDate = null;

      if (this.config().restoreParams) {
        this.filtersService.updateDates(emptyOutput);
      }

      this.dateChange.emit(emptyOutput);
      this.closeDatePicker();
      return;
    }

    if (this.config().selectionMode === 'range' && Array.isArray(date)) {
      if (!date[0] || !date[1]) {
        this.closeDatePicker();
        return;
      }
    }

    if (this.isSameDate(date, this.lastEmittedDate)) {
      this.closeDatePicker();
      return;
    }

    const output = this.convertDateToOutput(date);

    this.lastEmittedDate = this.cloneDate(date);

    if (this.config().restoreParams) {
      this.filtersService.updateDates(output);
    }

    this.dateChange.emit(output);
    this.closeDatePicker();
  }

  public cancelDateSelection(): void {
    if (this.config().restoreParams) {
      const savedFilters = this.filtersService.getFilters();
      const savedDates = savedFilters?.dates;

      if (savedDates) {
        const restoredDate = this.convertOutputToDateRange(savedDates);
        if (restoredDate) {
          this.selectedDate.set(restoredDate);
        } else {
          this.selectedDate.set(null);
        }
      } else {
        this.selectedDate.set(null);
      }
    } else {
      if (this.lastEmittedDate) {
        this.selectedDate.set(this.cloneDate(this.lastEmittedDate));
      } else {
        this.selectedDate.set(null);
      }
    }

    this.closeDatePicker();
  }

  private isSameDate(date1: DateRange, date2: DateRange): boolean {
    if (!date1 && !date2) return true;
    if (!date1 || !date2) return false;

    if (Array.isArray(date1) && Array.isArray(date2)) {
      return (
        date1[0]?.getTime() === date2[0]?.getTime() && date1[1]?.getTime() === date2[1]?.getTime()
      );
    }

    if (date1 instanceof Date && date2 instanceof Date) {
      return date1.getTime() === date2.getTime();
    }

    return false;
  }

  private cloneDate(date: DateRange): DateRange {
    if (!date) return null;

    if (Array.isArray(date)) {
      return [date[0] ? new Date(date[0]) : null, date[1] ? new Date(date[1]) : null] as Date[];
    }

    return new Date(date);
  }

  public hasValidSelection(): boolean {
    const date = this.selectedDate();
    if (!date) return false;
    if (Array.isArray(date)) return !!(date[0] || date[1]);
    return true;
  }

  private closeDatePicker(): void {
    if (this.datePicker) {
      this.datePicker.overlayVisible = false;
    }
  }

  private formatDate(date: Date | null): string | null {
    if (!date) return null;
    const format = this.config().format ?? 'dd/MM/yyyy';
    return this.datePipe.transform(date, format);
  }

  /**
   * Parsea un string con el formato configurado a un objeto Date.
   * Necesario porque new Date('15/01/2025') con formato dd/MM/yyyy devuelve NaN.
   * Soporta separadores / - . y los tokens: dd, MM, yyyy, yy
   */
  private parseDate(dateStr: string | null): Date | null {
    if (!dateStr) return null;

    const format = this.config().format ?? 'dd/MM/yyyy';

    // Detectar separador (/ - .)
    const separatorMatch = format.match(/[\/\-\.]/);
    const separator = separatorMatch ? separatorMatch[0] : '/';

    const formatParts = format.split(separator);
    const dateParts = dateStr.split(separator);

    if (formatParts.length !== dateParts.length) return null;

    let day = 1,
      month = 0,
      year = new Date().getFullYear();

    formatParts.forEach((token, i) => {
      const value = parseInt(dateParts[i], 10);
      if (isNaN(value)) return;

      if (token === 'dd') day = value;
      else if (token === 'MM')
        month = value - 1; // Date usa 0-indexed
      else if (token === 'yyyy') year = value;
      else if (token === 'yy') year = value + (value >= 50 ? 1900 : 2000); // pivote estándar
    });

    const date = new Date(year, month, day);

    // Validar que la fecha resultante sea coherente
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
      return null;
    }

    return date;
  }

  private convertDateToOutput(date: DateRange): DateFilterOutput {
    if (!date) {
      return { startDate: null, endDate: null, singleDate: null };
    }

    if (Array.isArray(date)) {
      return {
        startDate: this.formatDate(date[0] ?? null),
        endDate: this.formatDate(date[1] ?? null),
        singleDate: null,
      };
    }

    return {
      startDate: null,
      endDate: null,
      singleDate: this.formatDate(date),
    };
  }

  private convertOutputToDateRange(output: DateFilterOutput): DateRange {
    if (!output) return null;

    if (output.startDate || output.endDate) {
      const startDate = this.parseDate(output.startDate);
      const endDate = this.parseDate(output.endDate);

      if (startDate || endDate) {
        return [startDate, endDate] as Date[];
      }
    }

    if (output.singleDate) {
      return this.parseDate(output.singleDate);
    }

    return null;
  }
}
