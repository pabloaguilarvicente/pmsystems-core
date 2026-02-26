import {
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export type PictureSize  = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type PictureShape = 'round' | 'square';

const SIZE_CLASSES: Record<PictureSize, string> = {
  xs:   'w-10 h-10',
  sm:   'w-16 h-16',
  md:   'w-24 h-24',
  lg:   'w-35 h-35',
  xl:   'w-48 h-48',
  '2xl':'w-64 h-64',
};

@Component({
  selector: 'form-picture',
  imports: [ButtonModule, TranslateModule, TooltipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormPicture),
      multi: true,
    },
  ],
  template: `
    <div class="flex flex-col items-center gap-3">
      <input
        #fileInput
        type="file"
        accept="image/*"
        class="hidden"
        [disabled]="disabled()"
        (change)="onFileSelected($event)"
      />

      <div class="relative inline-block">
        <img
          [src]="previewUrl() || fallback()"
          alt="Profile picture"
          [class]="imgClasses()"
        />

        @if (mode() === 'update' && !disabled()) {
          <button
            class="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary-emphasis transition-colors cursor-pointer border-2 border-white"
            type="button"
            [pTooltip]="'actions.update' | translate"
            (click)="fileInput.click()"
          >
            <i class="ph-bold ph-pencil text-xs"></i>
          </button>
        }
      </div>

      @if (mode() === 'upload' && !disabled()) {
        <p-button
          [label]="'actions.upload' | translate"
          icon="ph-bold ph-tray-arrow-up"
          size="small"
          (onClick)="fileInput.click()"
          styleClass="w-25"
        />
      }
    </div>
  `,
})
export class FormPicture implements ControlValueAccessor {
  public readonly mode    = input<'upload' | 'update'>('upload');
  public readonly fallback = input<string>('images/user.jpg');
  public readonly size    = input<PictureSize>('lg');
  public readonly shape   = input<PictureShape>('round');

  protected readonly previewUrl = signal<string | null>(null);
  protected readonly disabled   = signal<boolean>(false);

  private onChange: (value: File | null) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly imgClasses = computed(() => {
    const sizeClass  = SIZE_CLASSES[this.size()];
    const shapeClass = this.shape() === 'round' ? 'rounded-full' : 'rounded-md';
    return `${sizeClass} ${shapeClass} object-contain border-4 border-primary`;
  });


  writeValue(value: string | null): void {
    this.previewUrl.set(value ?? null);
  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];

    if (!file) return;

    this.previewUrl.set(URL.createObjectURL(file));
    this.onChange(file);   
    this.onTouched();
    input.value = '';
  }
}