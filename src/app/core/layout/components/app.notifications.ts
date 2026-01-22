import { Component } from '@angular/core';

@Component({
  selector: 'notifications',
  template: `
    <ul class="list-none p-0 m-0">
      <li class="px-4 py-1">
        <span>You have <b>4</b> new notifications</span>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.jpg" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold">Jerome Bell</span>
              <small>42 mins ago</small>
            </div>
            <span class="text-sm leading-normal">How to write content about your photographs?</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.jpg" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Cameron Williamson</span>
              <small>48 mins ago</small>
            </div>
            <span class="text-sm leading-normal">Start a blog to reach your creative peak.</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.jpg" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Anna Miles</span>
              <small>1 day ago</small>
            </div>
            <span class="text-sm leading-normal">Caring is the new marketing</span>
          </div>
        </div>
      </li>
      <li class="p-4">
        <div class="flex items-center">
          <img src="images/user.jpg" width="25" />
          <div class="flex flex-col ml-4 flex-1">
            <div class="flex items-center justify-between mb-1">
              <span class="fs-small font-bold">Arlene Mccoy</span>
              <small>4 day ago</small>
            </div>
            <span class="text-sm leading-normal">Starting your traveling blog with Vasco.</span>
          </div>
        </div>
      </li>
    </ul>
  `,
})
export class Notifications {}
