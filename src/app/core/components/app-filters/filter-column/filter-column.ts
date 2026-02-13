import { Component, effect, inject, input, output, signal, untracked } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PopoverModule } from 'primeng/popover';
import { FiltersService } from '../filters.service';
import { FormsModule } from '@angular/forms';
import { ColumnSelection } from '../app-filters.model';

export interface FilterColumnConfig {
  restoreParams: boolean;
  columns: ColumnSelection[];
}

@Component({
  selector: 'filter-column',
  imports: [
    ButtonModule,
    OverlayBadgeModule,
    TranslateModule,
    ListboxModule,
    PopoverModule,
    FormsModule,
  ],
  templateUrl: './filter-column.html',
})
export class FilterColumn {
  public config = input.required<FilterColumnConfig>();
  public columnsChange = output<ColumnSelection[]>();

  private readonly filtersService = inject(FiltersService);

  public allColumns = signal<ColumnSelection[]>([]);

  // ✅ Propiedad normal en lugar de signal para que [(ngModel)] funcione correctamente
  public selectedHiddenFields: string[] = [];

  public get hiddenColumnsCount(): number {
    return this.selectedHiddenFields.length;
  }

  constructor() {
    effect(() => {
      const cfg = this.config();
      const cols = cfg.columns;
      this.allColumns.set(cols);

      if (!cfg.restoreParams) {
        // Sin restoreParams: usar el estado inicial de las columnas
        this.selectedHiddenFields = cols.filter((c) => c.visible === false).map((c) => c.field);
      } else {
        // Con restoreParams: intentar restaurar desde el servicio
        const savedColumns = this.filtersService.getFilters()?.columns;
        if (savedColumns && savedColumns.length > 0) {
          this.selectedHiddenFields = savedColumns
            .filter((c) => c.visible === false)
            .map((c) => c.field);
        } else {
          // Si no hay guardado, usar el estado inicial
          this.selectedHiddenFields = cols.filter((c) => c.visible === false).map((c) => c.field);
        }
      }
    });
  }

  public onAccept(): void {
    const cfg = this.config();
    const cols = cfg.columns;
    const hiddenFields = this.selectedHiddenFields;

    // ✅ Emite todas las columnas con visible calculado según la selección
    const updatedColumns: ColumnSelection[] = cols.map((col) => ({
      field: col.field,
      header: col.header,
      visible: !hiddenFields.includes(col.field),
    }));

    // Guardar en el servicio si restoreParams es true
    if (cfg.restoreParams) {
      this.filtersService.updateColumns(updatedColumns);
    }

    this.columnsChange.emit(updatedColumns);
  }

  public onCancel(): void {
    const cfg = untracked(() => this.config());

    if (cfg.restoreParams) {
      const savedColumns = this.filtersService.getFilters()?.columns;
      if (savedColumns) {
        this.selectedHiddenFields = savedColumns
          .filter((c) => c.visible === false)
          .map((c) => c.field);
        return;
      }
    }

    this.selectedHiddenFields = cfg.columns.filter((c) => c.visible === false).map((c) => c.field);
  }
}
