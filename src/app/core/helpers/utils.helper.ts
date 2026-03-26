import { FormGroup } from '@angular/forms';
import { LOCAL_STORAGE_KEYS, PRIMARY_COLOR } from './constant.helper';

export function markAllDirty(group: FormGroup): void {
  group.markAsTouched();
  group.markAsDirty();
  Object.keys(group.controls).forEach((key) => {
    const control = group.get(key);
    if (control instanceof FormGroup) {
      markAllDirty(control);
    } else {
      control?.markAsTouched();
      control?.markAsDirty();
    }
  });
}

export function getPrimaryColor(): string {
  const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEYS.appearanceSettings);
  const color = savedSettings ? (JSON.parse(savedSettings)?.primaryColor ?? PRIMARY_COLOR) : PRIMARY_COLOR;
  return color;
}
