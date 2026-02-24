import { Component, effect, inject, input, linkedSignal, output, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TranslateModule } from '@ngx-translate/core';
import { FiltersService } from '../filters.service';

export interface FilterSearchConfig {
  restoreParams: boolean;
  defaultSearch?: string;
}

@Component({
  selector: 'filter-search',
  imports: [InputTextModule, InputIconModule, IconFieldModule, TranslateModule, FormsModule],
  templateUrl: './filter-search.html',
})
export class FilterSearch {
  public config = input<FilterSearchConfig>({ restoreParams: false });

  public searchChange = output<string>();

  private readonly filtersService = inject(FiltersService);
  private debounceTimer: number | undefined;

  public searchValue = linkedSignal<string>(() => {
    const cfg = this.config();
    const defaultSearch = cfg.defaultSearch ?? '';

    if (!cfg.restoreParams) return defaultSearch;
    return this.filtersService.getFilters()?.search ?? defaultSearch;
  });

  private isFirstEmit = true;

  constructor() {
    effect((onCleanup) => {
      const value = this.searchValue();

      const debounceTime = untracked(() => 500);
      const restoreParams = untracked(() => this.config().restoreParams);

      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(() => {
        if (this.isFirstEmit) {
          this.isFirstEmit = false;
          if (!value || !value.trim()) return;
        }

        this.searchChange.emit(value);

        if (restoreParams) {
          if (value && value.trim()) {
            this.filtersService.updateFilters({ search: value });
          } else {
            this.filtersService.updateFilters({ search: undefined });
          }
        }
      }, debounceTime) as unknown as number;

      onCleanup(() => {
        if (this.debounceTimer) {
          clearTimeout(this.debounceTimer);
        }
      });
    });
  }

  public onSearchInput(value: string): void {
    this.searchValue.set(value);
  }

  public onClear(): void {
    this.searchValue.set('');
  }

  ngOnDestroy(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  }
}
