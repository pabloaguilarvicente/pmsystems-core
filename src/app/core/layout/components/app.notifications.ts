import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'notifications',
  imports: [TranslateModule],
  template: `
    <ul class="list-none p-0 m-0">
      <li class="px-4 py-1">
        <span [innerHTML]="'notifications.count' | translate: { value: count }"> </span>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.png" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold">Jerome Bell</span>
              <small>42 min {{ 'time.ago' | translate }}</small>
            </div>
            <span class="text-sm leading-normal">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.png" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Cameron Williamson</span>
              <small>48 min {{ 'time.ago' | translate }}</small>
            </div>
            <span class="text-sm leading-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.png" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Anna Miles</span>
              <small>50 min {{ 'time.ago' | translate }}</small>
            </div>
            <span class="text-sm leading-normal">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.png" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Arlene Mccoy</span>
              <small>60 min {{ 'time.ago' | translate }}</small>
            </div>
            <span class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
          </div>
        </div>
      </li>
    </ul>
  `,
})
export class Notifications {
  public readonly count: number = 4;
}
