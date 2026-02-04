import { Component, signal } from '@angular/core';
import { AppMessage, AppMessages } from './app-messages';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ERROR_IMAGE } from '../commons/core.constants';

export interface ErrorData {
  title: string;
  description: string;
  code: string;
  status: number;
  statusText: string;
  message: string;
  url: string;
  timestamp: string;
}

@Component({
  selector: 'error-page',
  imports: [AppMessages],
  template: `
    <div class="card">
      <div class="full-screen">
        <app-messages [message]="errorMessage()" />
      </div>
    </div>
  `,
})
export class ErrorPage {
  public errorMessage = signal<AppMessage>({});

  constructor(
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras?.state || this.location.getState();

    if (state && typeof state === 'object' && 'error' in state) {
      const errorData = (state as any).error as ErrorData;

      this.errorMessage.set({
        title: errorData.title,
        description: errorData.description,
        code: errorData.code,
        status: errorData.status,
        statusText: errorData.statusText,
        message: errorData.message,
        url: errorData.url,
        timestamp: errorData.timestamp,
        image: ERROR_IMAGE,
        size: 'xl',
      });
    }
  }
}
