import { Pagination } from '../commons/api.utils';
import { Column } from './app-table.model';
import {
  DateFilterOutput,
  FilterDateConfig,
} from '../components/app-filters/filter-date/filter-date';
import {
  FilterViewAsConfig,
  ViewAs,
} from '../components/app-filters/filter-view-as/filter-view-as';
import { FilterSearchConfig } from '../components/app-filters/filter-search/filter-search';
import { FilterMenuConfig } from '../components/app-filters/filter-menu/filter-menu';
import { FilterColumnConfig } from '../components/app-filters/filter-column/filter-column';

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
  extraFilters?: Record<string, any>;
  columns?: ColumnSelection[];
  viewAs?: 'LIST' | 'GRID';
}
