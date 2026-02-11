import { Component, input, output } from '@angular/core';
import { FilterSearch } from './filter-search/filter-search';
import { FilterViewAs, ViewAs } from './filter-view-as/filter-view-as';
import { FilterColumn } from './filter-column/filter-column';
import { FilterMenu, FilterValues } from './filter-menu/filter-menu';
import { DateFilterOutput, FilterDate } from './filter-date/filter-date';
import {
  AppFiltersConfig,
  AppFiltersOutput,
  ColumnSelection,
} from '../../models/app-filters.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, FilterSearch, FilterViewAs, FilterColumn, FilterMenu, FilterDate],
  templateUrl: './app-filters.html',
})
export class AppFilters {
  /**
   * Configuración general de todos los filtros
   * Controla qué filtros se muestran y su configuración individual
   */
  public config = input.required<AppFiltersConfig>();

  /**
   * Output único que emite todos los cambios de filtros
   */
  public filtersChange = output<AppFiltersOutput>();

  /**
   * Estado interno para acumular todos los cambios
   */
  private currentFiltersState: AppFiltersOutput = {};

  /**
   * Helpers para verificar si cada filtro debe mostrarse
   */
  public get showSearch(): boolean {
    return this.config().search?.show ?? false;
  }

  public get showDate(): boolean {
    return this.config().date?.show ?? false;
  }

  public get showMenu(): boolean {
    return this.config().menu?.show ?? false;
  }

  public get showColumns(): boolean {
    return this.config().columns?.show ?? false;
  }

  public get showViewAs(): boolean {
    return this.config().viewAs?.show ?? false;
  }

  /**
   * Getters para las configuraciones individuales
   */
  public get searchConfig() {
    return this.config().search?.config;
  }

  public get dateConfig() {
    return this.config().date?.config;
  }

  public get menuConfig() {
    return this.config().menu?.config;
  }

  public get columnsConfig() {
    return this.config().columns?.config;
  }

  public get viewAsConfig() {
    return this.config().viewAs?.config;
  }

  /**
   * Handlers para cada tipo de filtro
   */
  public searchChange(search: string): void {
    this.currentFiltersState.search = search;
    this.emitFiltersChange();
  }

  public dateChange(dateFilterOutput: DateFilterOutput): void {
    this.currentFiltersState.dates = dateFilterOutput;
    this.emitFiltersChange();
  }

  public filtersApplied(filterValues: FilterValues): void {
    this.currentFiltersState.extraFilters = filterValues;
    this.emitFiltersChange();
  }

  public columnsChange(columnSelection: ColumnSelection[]): void {
    this.currentFiltersState.columns = columnSelection;
    this.emitFiltersChange();
  }

  public viewAsChange(viewAs: ViewAs): void {
    this.currentFiltersState.viewAs = viewAs;
    this.emitFiltersChange();
  }

  /**
   * Emite el estado completo de todos los filtros
   */
  private emitFiltersChange(): void {
    // Crear una copia limpia del estado actual
    const output: AppFiltersOutput = {
      ...(this.currentFiltersState.search !== undefined && {
        search: this.currentFiltersState.search,
      }),
      ...(this.currentFiltersState.dates && {
        dates: this.currentFiltersState.dates,
      }),
      ...(this.currentFiltersState.extraFilters && {
        extraFilters: this.currentFiltersState.extraFilters,
      }),
      ...(this.currentFiltersState.columns && {
        columns: this.currentFiltersState.columns,
      }),
      ...(this.currentFiltersState.viewAs && {
        viewAs: this.currentFiltersState.viewAs,
      }),
    };

    this.filtersChange.emit(output);
  }

  /**
   * Método público para resetear todos los filtros (opcional)
   */
  public resetFilters(): void {
    this.currentFiltersState = {};
    this.emitFiltersChange();
  }

  /**
   * Método público para obtener el estado actual de los filtros (opcional)
   */
  public getCurrentFilters(): AppFiltersOutput {
    return { ...this.currentFiltersState };
  }
}
