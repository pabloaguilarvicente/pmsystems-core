import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';

interface Breadcrumb {
  label: string;
  url?: string;
}

@Component({
  selector: '[app-breadcrumb]',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule, TranslateModule, TooltipModule],
  template: `
    <nav class="layout-breadcrumb">
      <ol>
        <li><i class="ph-thin ph-house"></i></li>

        @for (item of breadcrumbs$ | async; track $index) {
          <li><i class="ph ph-caret-right text-sm!"></i></li>
          <li>
            <span class="text-sm">{{ item.label | translate }}</span>
          </li>
        }
      </ol>
    </nav>
    <div class="layout-breadcrumb-buttons">
      <p-button
        variant="text"
        icon="ph-bold ph-arrow-fat-left"
        styleClass="p-0!"
        [pTooltip]="'actions.return' | translate"
      ></p-button>
    </div>
  `,
  host: {
    class: 'layout-breadcrumb-container',
  },
})
export class AppBreadcrumb {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[],
  ) {
    const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
    const breadcrumb = route.data['breadcrumb'];
    const parentBreadcrumb =
      route.parent && route.parent.data ? route.parent.data['breadcrumb'] : null;

    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
      breadcrumbs.push({
        label: route.data['breadcrumb'],
        url: '/' + routeUrl.join('/'),
      });
    }

    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }
}
