import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'skeleton-paginator',
  imports: [SkeletonModule],
  template: `
    <div class="flex flex-col justify-end gap-3 px-4 py-3 md:flex-row md:items-center md:gap-4">
      <div class="flex items-center justify-center gap-2 md:justify-start">
        <p-skeleton width="13rem" height="1.5rem" />
      </div>

      <div class="flex items-center justify-center gap-1">
        <p-skeleton width="14rem" height="1.5rem" />
      </div>

      <div class="flex items-center justify-center gap-2 md:justify-start">
        <p-skeleton width="13rem" height="1.5rem" />
      </div>
    </div>
  `,
})
export class SkeletonPaginator {}
