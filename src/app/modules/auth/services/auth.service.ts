import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '../../../core/helpers/constant.helper';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { AppAuth } from '../../../core/models/core.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly localStorageService = inject(LocalStorageService);
  private readonly router = inject(Router);

  public isAuthenticated(): boolean {
    const auth = this.getAuth();
    if (!auth) return false;
    if (auth.expiresAt && Date.now() > auth.expiresAt) {
      this.logout();
      return false;
    }
    return true;
  }

  public getAuth(): AppAuth | null {
    return this.localStorageService.get<AppAuth>(LOCAL_STORAGE_KEYS.auth);
  }

  public getToken(): string | null {
    return this.getAuth()?.token ?? null;
  }

  public setAuth(auth: AppAuth): void {
    this.localStorageService.set(LOCAL_STORAGE_KEYS.auth, auth);
  }

  public logout(): void {
    this.localStorageService.remove(LOCAL_STORAGE_KEYS.auth);
    this.router.navigate(['/auth']);
  }
}
