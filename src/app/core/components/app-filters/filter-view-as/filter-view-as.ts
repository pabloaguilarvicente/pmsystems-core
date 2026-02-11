import { Component, effect, inject, input, linkedSignal, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { VIEW_AS } from '../../../commons/core.constants';
import { FormsModule } from '@angular/forms';
import { SelectModel } from '../../../models/core.model';
import { AppFiltersService } from '../../../services/app-filters.service';

export type ViewAs = 'LIST' | 'GRID';

export interface FilterViewAsConfig {
  restoreParams?: boolean;
  defaultView?: ViewAs;
}

@Component({
  selector: 'filter-view-as',
  imports: [SelectButtonModule, TooltipModule, TranslateModule, FormsModule],
  templateUrl: './filter-view-as.html',
})
export class FilterViewAs {
  public config = input<FilterViewAsConfig>({ restoreParams: false });

  public viewAsChange = output<ViewAs>();

  private readonly appFiltersService = inject(AppFiltersService);

  public readonly viewAs: SelectModel[] = VIEW_AS;

  public selected = linkedSignal<ViewAs>(() => {
    const cfg = this.config();
    const defaultView = cfg.defaultView ?? 'LIST';

    if (!cfg.restoreParams) return defaultView;
    return this.appFiltersService.getFilters()?.viewAs ?? defaultView;
  });

  constructor() {
    effect(() => {
      if (this.config().restoreParams) {
        this.appFiltersService.updateFilters({ viewAs: this.selected() });
      }
    });
  }

  public onViewAsChange(value: ViewAs): void {
    this.selected.set(value);
    this.viewAsChange.emit(value);
  }
}
