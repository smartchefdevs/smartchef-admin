import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationHelper {

    /*
    * Simple notification. 
    */
    buildNotification(type: string, title:string, content:string): void {
        this.notification.create(
          type,
          title,
          content
        );
      }

    constructor(private notification: NzNotificationService){}
}