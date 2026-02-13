import {
  Component,
  model,
  input,
  effect,
  computed,
  output,
  ViewChild,
  inject,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DatePicker, DatePickerModule } from 'primeng/datepicker';
import { FiltersService } from '../filters.service';

export interface FilterDateConfig {
  selectionMode: 'single' | 'range';
  showQuickFilters?: boolean;
  restoreParams: boolean;
}

export interface DateFilterOutput {
  startDate: Date | null;
  endDate: Date | null;
  singleDate: Date | null;
}

export type DateRange = Date | Date[] | null;

@Component({
  selector: 'filter-date',
  standalone: true,
  imports: [CommonModule, ButtonModule, DatePickerModule, TranslateModule, FormsModule],
  templateUrl: './filter-date.html',
})
export class FilterDate {
  @ViewChild(DatePicker) datePicker!: DatePicker;

  private readonly filtersService = inject(FiltersService);

  public config = input.required<FilterDateConfig>();
  public selectedDate = model<DateRange>(null);
  public dateChange = output<DateFilterOutput>();

  public activeQuickFilter: string | null = null;
  public shouldShowQuickFilters = computed(() => this.config().showQuickFilters !== false);

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
          }
        }
      }
    });

    // ✅ NO hay effect automático que actualice el servicio
    // Solo se actualiza al dar "Aceptar" mediante emitDateChange()
  }

  public setToday(callback: (event: Event) => void, event: Event): void {
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

  public setLastWeek(event: Event): void {
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

  public setLastMonth(event: Event): void {
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

  public setLastYear(event: Event): void {
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

  public clearDate(callback: (event: Event) => void, event: Event): void {
    this.selectedDate.set(null);
    this.activeQuickFilter = null;
    // ✅ Solo limpia en memoria, NO emite ni actualiza el servicio
    // El servicio solo se actualiza al dar "Aceptar"
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

    // ✅ Si no hay fecha, significa que se limpió - emitir null
    if (!date) {
      const emptyOutput: DateFilterOutput = {
        startDate: null,
        endDate: null,
        singleDate: null,
      };

      this.lastEmittedDate = null;

      // Actualizar servicio y emitir
      if (this.config().restoreParams) {
        this.filtersService.updateDates(emptyOutput);
      }

      this.dateChange.emit(emptyOutput);
      this.closeDatePicker();
      return;
    }

    // Validar selección de rango completa
    if (this.config().selectionMode === 'range' && Array.isArray(date)) {
      if (!date[0] || !date[1]) {
        this.closeDatePicker();
        return;
      }
    }

    // Si es la misma fecha que ya se emitió, solo cerrar
    if (this.isSameDate(date, this.lastEmittedDate)) {
      this.closeDatePicker();
      return;
    }

    // ✅ ÚNICO PUNTO donde se emite y actualiza el servicio
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
    if (!date1 && !date2) {
      return true;
    }

    if (!date1 || !date2) {
      return false;
    }

    if (Array.isArray(date1) && Array.isArray(date2)) {
      const start1 = date1[0]?.getTime();
      const end1 = date1[1]?.getTime();
      const start2 = date2[0]?.getTime();
      const end2 = date2[1]?.getTime();

      return start1 === start2 && end1 === end2;
    }

    if (date1 instanceof Date && date2 instanceof Date) {
      return date1.getTime() === date2.getTime();
    }

    return false;
  }

  private cloneDate(date: DateRange): DateRange {
    if (!date) {
      return null;
    }

    if (Array.isArray(date)) {
      return [date[0] ? new Date(date[0]) : null, date[1] ? new Date(date[1]) : null] as Date[];
    }

    return new Date(date);
  }

  public hasValidSelection(): boolean {
    const date = this.selectedDate();

    if (!date) {
      return false;
    }

    if (Array.isArray(date)) {
      return !!(date[0] || date[1]);
    }

    return true;
  }

  private closeDatePicker(): void {
    if (this.datePicker) {
      this.datePicker.overlayVisible = false;
    }
  }

  private convertDateToOutput(date: DateRange): DateFilterOutput {
    if (!date) {
      return {
        startDate: null,
        endDate: null,
        singleDate: null,
      };
    }

    if (Array.isArray(date)) {
      return {
        startDate: date[0] || null,
        endDate: date[1] || null,
        singleDate: null,
      };
    }

    return {
      startDate: null,
      endDate: null,
      singleDate: date,
    };
  }

  private convertOutputToDateRange(output: DateFilterOutput): DateRange {
    if (!output) {
      return null;
    }

    if (output.startDate || output.endDate) {
      const startDate = output.startDate ? new Date(output.startDate) : null;
      const endDate = output.endDate ? new Date(output.endDate) : null;

      if (startDate || endDate) {
        return [startDate, endDate] as Date[];
      }
    }

    if (output.singleDate) {
      return new Date(output.singleDate);
    }

    return null;
  }
}
