import { FormGroup } from '@angular/forms';

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
