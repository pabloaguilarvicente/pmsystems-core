import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  }

  public get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error al obtener:', error);
      return null;
    }
  }

  public update<T>(key: string, updates: Partial<T>): T | null {
    const existing = this.get<T>(key);
    if (!existing) return null;
    const updated = { ...existing, ...updates };
    this.set(key, updated);
    return updated;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

  public exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
