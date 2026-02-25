import { Component, input, output } from '@angular/core';
import { FilterSearch } from './filter-search/filter-search';
import { FilterViewAs, ViewAs } from './filter-view-as/filter-view-as';
import { FilterColumn } from './filter-column/filter-column';
import { FilterMenu, FilterValues } from './filter-menu/filter-menu';
import { DateFilterOutput, FilterDate } from './filter-date/filter-date';
import { CommonModule } from '@angular/common';
import { AppFiltersConfig, AppFiltersOutput, ColumnSelection } from './app-filters.model';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, FilterSearch, FilterViewAs, FilterColumn, FilterMenu, FilterDate],
  templateUrl: './app-filters.html',
})
export class AppFilters {
  /**
   * Configuración general de todos los filtros.
   * Solo se muestran los filtros cuya propiedad esté declarada en el config.
   */
  public config = input.required<AppFiltersConfig>();

  /**
   * Output único que emite todos los cambios de filtros
   */
  public filtersChange = output<AppFiltersOutput>();

  /**
   * Estado interno para acumular todos los cambios.
   * Solo se usa para exponer getCurrentFilters() y resetFilters().
   */
  private currentFiltersState: AppFiltersOutput = {};

  public searchChange(search: string): void {
    this.currentFiltersState.search = search;
    this.filtersChange.emit({ search });
  }

  public dateChange(dateFilterOutput: DateFilterOutput): void {
    this.currentFiltersState.dates = dateFilterOutput;
    this.filtersChange.emit({ dates: dateFilterOutput });
  }

  public filtersApplied(filterValues: FilterValues): void {
    this.currentFiltersState.extraFilters = filterValues;
    this.filtersChange.emit({ extraFilters: filterValues });
  }

  public columnsChange(columnSelection: ColumnSelection[]): void {
    this.currentFiltersState.columns = columnSelection;
    this.filtersChange.emit({ columns: columnSelection });
  }

  public viewAsChange(viewAs: ViewAs): void {
    this.currentFiltersState.viewAs = viewAs;
    this.filtersChange.emit({ viewAs });
  }
}
