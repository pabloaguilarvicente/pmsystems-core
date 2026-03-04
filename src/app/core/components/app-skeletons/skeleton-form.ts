import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'skeleton-form',
  imports: [SkeletonModule],
  template: `
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-4">
        <div class="card">
          <div class="grid grid-cols-12 gap-x-4 gap-y-6">
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-12">
              <p-skeleton class="w-full" height="8rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-8">
        <div class="card">
          <div class="grid grid-cols-12 gap-x-4 gap-y-6">
            <div class="col-span-12 md:col-span-4">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-4">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-4">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <p-skeleton class="w-full" height="2.5rem" />
            </div>
            <div class="col-span-12">
              <p-skeleton class="w-full" height="8rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SkeletonForm {}
