import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  template: `
    <router-outlet />
    <p-toast position="bottom-right" [breakpoints]="breakpoints" />
  `,
})
export class App {
  public readonly breakpoints = {
    '920px': {
      width: '90%',
      right: 'auto',
      left: '5%',
    },
  };
}
