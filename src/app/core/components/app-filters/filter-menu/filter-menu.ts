import { Component, input, output, OnInit, inject, effect, untracked } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PopoverModule } from 'primeng/popover';
import { SelectModel } from '../../../models/core.model';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FiltersService } from '../filters.service';

export interface FilterMenuConfig {
  filter: string;
  label: string;
  placeholder?: string;
  cleanable?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  tooltip?: string;
  fieldConfig?: FieldConfig;
  serviceParams?: ServiceParams;
  dataSource?: SelectModel[] | any[];
  restoreParams?: boolean;
}

export interface ServiceParams {
  route: string;
  params?: Record<string, any>;
}

export interface FieldConfig {
  id: string;
  label: string;
}

export interface FilterValues {
  [key: string]: any;
}

@Component({
  selector: 'filter-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    OverlayBadgeModule,
    TranslateModule,
    ListboxModule,
    PopoverModule,
    TooltipModule,
  ],
  templateUrl: './filter-menu.html',
})
export class FilterMenu implements OnInit {
  private fb = inject(FormBuilder);
  private readonly filtersService = inject(FiltersService);

  // Inputs
  public config = input.required<FilterMenuConfig[]>();

  // Outputs
  public filtersApplied = output<FilterValues>();

  // Form
  public filterForm!: FormGroup;

  // Estado
  public filterDataSources: { [key: string]: any[] } = {};
  public activeFiltersCount = 0;
  private lastEmittedValues: FilterValues = {};
  // Indica si alguna vez se emitieron filtros con valores reales
  private hadActiveFilters = false;

  constructor() {
    // Effect para guardar automáticamente en extraFilters cuando hay filtros con restoreParams
    effect(() => {
      const configs = untracked(() => this.config());
      const hasRestoreParams = configs.some((c) => c.restoreParams);

      if (!hasRestoreParams || !this.filterForm) return;

      // Solo actualizar si hay valores emitidos
      if (Object.keys(this.lastEmittedValues).length > 0) {
        // Obtener extraFilters actuales y hacer merge
        const currentFilters = this.filtersService.getFilters();
        const currentExtraFilters = currentFilters?.extraFilters ?? {};

        // Crear objeto con solo los filtros que tienen restoreParams y valores no vacíos
        const filtersToSave: Record<string, unknown> = { ...currentExtraFilters };

        configs.forEach((config) => {
          if (config.restoreParams) {
            const value = this.lastEmittedValues[config.filter];

            // Solo guardar si el valor no está vacío
            if (this.isValueEmpty(value)) {
              // Si está vacío, eliminar del objeto
              delete filtersToSave[config.filter];
            } else {
              // Si tiene valor, guardarlo
              filtersToSave[config.filter] = value;
            }
          }
        });

        // Si extraFilters quedó completamente vacío, actualizar con objeto vacío
        // Si tiene valores, actualizar con los filtros limpios
        this.filtersService.updateExtraFilters(filtersToSave);
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadDataSources();
    this.restoreAndEmitSavedFilters();
  }

  /**
   * Si hay filtros guardados (restoreParams), los restaura en el form,
   * actualiza lastEmittedValues y emite para que el API cargue con ellos.
   */
  private restoreAndEmitSavedFilters(): void {
    const configs = this.config();
    const savedFilters = this.filtersService.getFilters();
    const extraFilters = savedFilters?.extraFilters;

    if (!extraFilters) return;

    const restoredValues: FilterValues = {};

    configs.forEach((filterConfig) => {
      if (filterConfig.restoreParams && extraFilters[filterConfig.filter] !== undefined) {
        restoredValues[filterConfig.filter] = extraFilters[filterConfig.filter];
      }
    });

    if (Object.keys(restoredValues).length === 0) return;

    // Aplicar al form y sincronizar lastEmittedValues
    this.filterForm.patchValue(restoredValues, { emitEvent: false });
    this.lastEmittedValues = this.filterForm.getRawValue();

    // Emitir solo los valores no vacíos para que el API los reciba
    const cleanedValues: FilterValues = {};
    Object.keys(restoredValues).forEach((key) => {
      if (!this.isValueEmpty(restoredValues[key])) {
        cleanedValues[key] = restoredValues[key];
      }
    });

    this.hadActiveFilters = true;
    this.updateActiveFiltersCount();
    this.filtersApplied.emit(cleanedValues);
  }

  /**
   * Inicializa el formulario reactivo dinámicamente
   */
  private initializeForm(): void {
    const formControls: { [key: string]: any } = {};

    this.config().forEach((filterConfig) => {
      const initialValue = filterConfig.multiple ? [] : null;

      // Manejar el estado disabled en la configuración del FormControl
      if (filterConfig.disabled) {
        formControls[filterConfig.filter] = [{ value: initialValue, disabled: true }];
      } else {
        formControls[filterConfig.filter] = [initialValue];
      }
    });

    this.filterForm = this.fb.group(formControls);

    // Inicializar lastEmittedValues con el estado inicial del form
    // para que hasChanges() no detecte diferencias en la primera carga
    this.lastEmittedValues = this.filterForm.getRawValue();
  }

  /**
   * Carga los dataSource para cada filtro
   */
  private loadDataSources(): void {
    this.config().forEach((filterConfig) => {
      if (filterConfig.dataSource) {
        // DataSource estático
        this.filterDataSources[filterConfig.filter] = filterConfig.dataSource;
      } else {
        // Si no hay dataSource, inicializar como array vacío
        // En el futuro aquí se podría cargar desde servicio
        this.filterDataSources[filterConfig.filter] = [];
      }
    });
  }

  /**
   * Obtiene la configuración de campo o usa valores por defecto
   */
  public getFieldConfig(filterConfig: FilterMenuConfig): FieldConfig {
    return filterConfig.fieldConfig || { id: 'id', label: 'label' };
  }

  /**
   * Obtiene el dataSource para un filtro específico
   */
  public getDataSource(filterKey: string): any[] {
    return this.filterDataSources[filterKey] || [];
  }

  /**
   * Obtiene el control del formulario para un filtro
   */
  public getFilterControl(filterKey: string) {
    return this.filterForm.get(filterKey);
  }

  /**
   * Cuenta el número de elementos seleccionados en un filtro
   */
  public getSelectedCount(filterKey: string): number {
    const value = this.filterForm.get(filterKey)?.value;

    if (!value) return 0;

    if (Array.isArray(value)) {
      return value.length;
    }

    return 1;
  }

  /**
   * Limpia un filtro específico
   */
  public clearFilter(filterKey: string, filterConfig: FilterMenuConfig): void {
    const control = this.filterForm.get(filterKey);
    if (control) {
      const newValue = filterConfig.multiple ? [] : null;
      control.setValue(newValue);
    }
  }

  /**
   * Actualiza el contador de filtros activos basándose en los valores emitidos
   */
  private updateActiveFiltersCount(): void {
    let count = 0;

    this.config().forEach((filterConfig) => {
      const value = this.lastEmittedValues[filterConfig.filter];

      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          count += value.length > 0 ? 1 : 0;
        } else {
          count += 1;
        }
      }
    });

    this.activeFiltersCount = count;
  }

  /**
   * Verifica si hubo cambios en los filtros
   */
  private hasChanges(): boolean {
    const currentValues = this.filterForm.getRawValue();
    return JSON.stringify(currentValues) !== JSON.stringify(this.lastEmittedValues);
  }

  /**
   * Maneja el click en el botón "Aceptar"
   */
  public onAccept(popover: any): void {
    if (this.hasChanges()) {
      const filterValues = this.filterForm.getRawValue();

      // Filtrar solo los valores que no estén vacíos
      const cleanedValues: FilterValues = {};

      Object.keys(filterValues).forEach((key) => {
        const value = filterValues[key];

        if (value !== null && value !== undefined) {
          if (Array.isArray(value)) {
            if (value.length > 0) {
              cleanedValues[key] = value;
            }
          } else {
            cleanedValues[key] = value;
          }
        }
      });

      this.lastEmittedValues = { ...filterValues };
      this.updateActiveFiltersCount();

      // Guardar en extraFilters si algún filtro tiene restoreParams
      const configs = this.config();
      const hasRestoreParams = configs.some((c) => c.restoreParams);

      if (hasRestoreParams) {
        const currentFilters = this.filtersService.getFilters();
        const currentExtraFilters = currentFilters?.extraFilters ?? {};

        const filtersToSave: Record<string, unknown> = { ...currentExtraFilters };

        configs.forEach((config) => {
          if (config.restoreParams) {
            const value = filterValues[config.filter];

            if (this.isValueEmpty(value)) {
              delete filtersToSave[config.filter];
            } else {
              filtersToSave[config.filter] = value;
            }
          }
        });

        this.filtersService.updateExtraFilters(filtersToSave);
      }

      const hasValues = Object.keys(cleanedValues).length > 0;

      if (hasValues) {
        // Hay filtros activos: activar flag y emitir
        this.hadActiveFilters = true;
        this.filtersApplied.emit(cleanedValues);
      } else if (this.hadActiveFilters) {
        // No hay filtros pero antes los había: emitir vacío para limpiar el API
        this.hadActiveFilters = false;
        this.filtersApplied.emit(cleanedValues);
      }
      // Si nunca hubo filtros activos y sigue vacío: no emitir
    }

    popover.hide();
  }

  /**
   * Maneja el click en el botón "Cancelar"
   */
  public onCancel(popover: any): void {
    // Restaurar valores previos si hay cambios
    if (this.hasChanges()) {
      const configs = this.config();
      const restoreValues: FilterValues = {};

      configs.forEach((filterConfig) => {
        if (filterConfig.restoreParams) {
          // Restaurar desde extraFilters
          const savedFilters = this.filtersService.getFilters();
          const extraFilters = savedFilters?.extraFilters;

          if (extraFilters && extraFilters[filterConfig.filter] !== undefined) {
            restoreValues[filterConfig.filter] = extraFilters[filterConfig.filter];
          } else {
            // Si no hay valor guardado, usar el inicial
            restoreValues[filterConfig.filter] = filterConfig.multiple ? [] : null;
          }
        } else {
          // Restaurar desde lastEmittedValues
          if (this.lastEmittedValues[filterConfig.filter] !== undefined) {
            restoreValues[filterConfig.filter] = this.lastEmittedValues[filterConfig.filter];
          } else {
            restoreValues[filterConfig.filter] = filterConfig.multiple ? [] : null;
          }
        }
      });

      this.filterForm.patchValue(restoreValues);
    }

    popover.hide();
  }

  /**
   * Resetea todos los filtros
   */
  public resetAllFilters(): void {
    this.config().forEach((filterConfig) => {
      const initialValue = filterConfig.multiple ? [] : null;
      this.filterForm.get(filterConfig.filter)?.setValue(initialValue);
    });
  }

  /**
   * Verifica si un valor está vacío (null, undefined, array vacío)
   */
  private isValueEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return false;
  }

  /**
   * Obtiene el label traducido para mostrar en el contador
   */
  public getFilterLabel(filterConfig: FilterMenuConfig): string {
    const count = this.getSelectedCount(filterConfig.filter);
    return count > 0 ? `${filterConfig.label} (${count})` : filterConfig.label;
  }
}
