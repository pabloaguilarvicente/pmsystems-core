import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private _isLoading = signal<boolean>(false);
  public readonly isLoading = this._isLoading.asReadonly();

  private activeRequests = 0;

  public show(): void {
    this.activeRequests++;
    this._isLoading.set(true);
  }

  public hide(): void {
    this.activeRequests--;

    if (this.activeRequests <= 0) {
      this.activeRequests = 0;
      this._isLoading.set(false);
    }
  }

  public forceHide(): void {
    this.activeRequests = 0;
    this._isLoading.set(false);
  }
}
