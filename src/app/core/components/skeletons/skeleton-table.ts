import { Component, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'skeleton-table',
  imports: [SkeletonModule],
  template: `
    @for (row of skeletonRows(); track $index) {
      <tr>
        @for (col of skeletonColumns(); track $index) {
          <td>
            <p-skeleton />
          </td>
        }
      </tr>
    }
  `,
})
export class SkeletonTable {
  public readonly totalRows = input.required<number>();
  public readonly totalColumns = input.required<number>();

  public skeletonRows = () => Array.from({ length: this.totalRows() });
  public skeletonColumns = () => Array.from({ length: this.totalColumns() });
}
