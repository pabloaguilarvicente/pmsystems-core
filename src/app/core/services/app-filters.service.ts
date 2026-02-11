import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.service';
import { ColumnSelection, RouteFilters, RouteFiltersState } from '../models/app-filters.model';
import { AppSettings } from '../models/core.model';
import { LOCAL_STORAGE_KEYS } from '../commons/core.constants';
import { Pagination } from '../commons/api.utils';
import { DateFilterOutput } from '../components/app-filters/filter-date/filter-date';
import { ViewAs } from '../components/app-filters/filter-view-as/filter-view-as';
import { Column } from '../models/app-table.model';

@Injectable({
  providedIn: 'root',
})
export class AppFiltersService {
  private readonly router = inject(Router);
  private readonly localStorageService = inject(LocalStorageService);

  // ─────────────────────────────────────────────
  // Helpers internos
  // ─────────────────────────────────────────────

  /** Devuelve la ruta URL actual o la que se pase manualmente */
  private resolvePath(path?: string): string {
    return path ?? this.router.url.split('?')[0];
  }

  /** Lee el mapa completo de filtros desde localStorage */
  private readFiltersState(): RouteFiltersState {
    const appSettings = this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings);
    return appSettings?.filters ?? {};
  }

  /** Persiste el mapa completo de filtros en localStorage */
  private writeFiltersState(state: RouteFiltersState): void {
    const appSettings =
      this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings) ?? {};
    this.localStorageService.set(LOCAL_STORAGE_KEYS.appSettings, {
      ...appSettings,
      filters: state,
    });
  }

  // ─────────────────────────────────────────────
  // Lectura
  // ─────────────────────────────────────────────

  /**
   * Devuelve los filtros para la ruta indicada (o la URL actual).
   * Retorna null si aún no se han guardado filtros para esa ruta.
   */
  public getFilters(path?: string): RouteFilters | null {
    const key = this.resolvePath(path);
    const state = this.readFiltersState();
    return state[key] ?? null;
  }

  /**
   * Devuelve los filtros de la ruta actual si existen;
   * de lo contrario, guarda los valores por defecto proporcionados y los retorna.
   */
  public getOrInitFilters(defaults: RouteFilters, path?: string): RouteFilters {
    const key = this.resolvePath(path);
    const existing = this.getFilters(key);
    if (existing) return existing;
    this.setFilters(defaults, key);
    return defaults;
  }

  // ─────────────────────────────────────────────
  // Escritura
  // ─────────────────────────────────────────────

  /**
   * Guarda un objeto RouteFilters completo para la ruta indicada (o la URL actual).
   * Sobreescribe cualquier entrada existente para esa ruta.
   */
  public setFilters(filters: RouteFilters, path?: string): void {
    const key = this.resolvePath(path);
    const state = this.readFiltersState();
    this.writeFiltersState({ ...state, [key]: filters });
  }

  /**
   * Actualiza parcialmente los filtros de una ruta dada (o la URL actual).
   * Si no existe entrada para esa ruta, crea una con los campos proporcionados.
   */
  public updateFilters(updates: Partial<RouteFilters>, path?: string): RouteFilters {
    const key = this.resolvePath(path);
    const state = this.readFiltersState();
    const existing = state[key] ?? {};
    const updated = { ...existing, ...updates } as RouteFilters;
    this.writeFiltersState({ ...state, [key]: updated });
    return updated;
  }

  // ─────────────────────────────────────────────
  // Actualizadores granulares (uno por campo de RouteFilters)
  // ─────────────────────────────────────────────

  /** Actualiza únicamente la paginación para la ruta indicada */
  public updatePagination(pagination: Pick<Pagination, 'currentPage' | 'pageSize'>, path?: string): RouteFilters {
    return this.updateFilters({ pagination }, path);
  }

  /** Actualiza únicamente el término de búsqueda para la ruta indicada */
  public updateSearch(search: string, path?: string): RouteFilters {
    return this.updateFilters({ search }, path);
  }

  /** Actualiza únicamente el rango de fechas para la ruta indicada */
  public updateDates(dates: DateFilterOutput, path?: string): RouteFilters {
    return this.updateFilters({ dates }, path);
  }

  /** Actualiza únicamente el modo viewAs para la ruta indicada */
  public updateViewAs(viewAs: ViewAs, path?: string): RouteFilters {
    return this.updateFilters({ viewAs }, path);
  }

  /** Actualiza únicamente las columnas visibles para la ruta indicada */
  public updateColumns(columns: ColumnSelection[], path?: string): RouteFilters {
    // Si columns está vacío, eliminarlo del objeto RouteFilters
    if (!columns || columns.length === 0) {
      const key = this.resolvePath(path);
      const state = this.readFiltersState();
      const existing = state[key] ?? {};

      // Crear una copia sin columns
      const { columns: _, ...updatedFilters } = existing as RouteFilters & {
        columns?: ColumnSelection[];
      };

      this.writeFiltersState({ ...state, [key]: updatedFilters as RouteFilters });
      return updatedFilters as RouteFilters;
    }

    return this.updateFilters({ columns }, path);
  }

  /** Actualiza únicamente los filtros extras para la ruta indicada */
  public updateExtraFilters(extraFilters: Record<string, unknown>, path?: string): RouteFilters {
    // Si extraFilters está vacío, eliminarlo del objeto RouteFilters
    if (Object.keys(extraFilters).length === 0) {
      const key = this.resolvePath(path);
      const state = this.readFiltersState();
      const existing = state[key] ?? {};

      // Crear una copia sin extraFilters
      const { extraFilters: _, ...updatedFilters } = existing as RouteFilters & {
        extraFilters?: Record<string, unknown>;
      };

      this.writeFiltersState({ ...state, [key]: updatedFilters as RouteFilters });
      return updatedFilters as RouteFilters;
    }

    return this.updateFilters({ extraFilters }, path);
  }

  /** Actualiza un filtro específico dentro de extraFilters */
  public updateExtraFilter(key: string, value: unknown, path?: string): RouteFilters {
    const currentFilters = this.getFilters(path);
    const currentExtraFilters = currentFilters?.extraFilters ?? {};
    return this.updateFilters({ extraFilters: { ...currentExtraFilters, [key]: value } }, path);
  }

  // ─────────────────────────────────────────────
  // Eliminación
  // ─────────────────────────────────────────────

  /** Elimina los filtros guardados para la ruta indicada (o la URL actual) */
  public removeFilters(path?: string): void {
    const key = this.resolvePath(path);
    const state = this.readFiltersState();
    const { [key]: _, ...rest } = state;
    this.writeFiltersState(rest);
  }

  /** Borra todos los filtros de todas las rutas */
  public clearAllFilters(): void {
    this.writeFiltersState({});
  }

  // ─────────────────────────────────────────────
  // Utilidades
  // ─────────────────────────────────────────────

  /** Retorna true si existen filtros guardados para la ruta indicada (o la URL actual) */
  public hasFilters(path?: string): boolean {
    return this.getFilters(path) !== null;
  }
  
}
