import { Pagination } from '../../helpers/api.helper';
import { Column } from '../app-table/app-table.model';
import { FilterColumnConfig } from './filter-column/filter-column';
import { DateFilterOutput, FilterDateConfig } from './filter-date/filter-date';
import { FilterMenuConfig } from './filter-menu/filter-menu';
import { FilterSearchConfig } from './filter-search/filter-search';
import { FilterViewAsConfig, ViewAs } from './filter-view-as/filter-view-as';

export type RouteFiltersState = Record<string, RouteFilters>;

export interface RouteFilters {
  pagination: Pick<Pagination, 'currentPage' | 'pageSize'>;
  search: string;
  dates: DateFilterOutput;
  viewAs: ViewAs;
  columns: ColumnSelection[];
  extraFilters: Record<string, unknown>;
}

export type ColumnSelection = Pick<Column, 'field' | 'header' | 'visible'>;

export interface AppFiltersConfig {
  search: {
    show: boolean;
    config: FilterSearchConfig;
  };
  date: {
    show: boolean;
    config: FilterDateConfig;
  };
  menu: {
    show: boolean;
    config: FilterMenuConfig[];
  };
  columns: {
    show: boolean;
    config: FilterColumnConfig;
  };
  viewAs: {
    show: boolean;
    config: FilterViewAsConfig;
  };
}

export interface AppFiltersOutput {
  search?: string;
  dates?: {
    startDate: Date | null;
    endDate: Date | null;
    singleDate: Date | null;
  };
  extraFilters?: ExtraFilters;
  columns?: ColumnSelection[];
  viewAs?: 'LIST' | 'GRID';
}

export type ExtraFilters = Record<string, unknown>;
