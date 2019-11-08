import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listOfData;
  //Modal CREATE
  isVisibleModalCreate = false;
  isOkLoadingModalCreate = false;

  constructor(private userService:UserService ) { }

  ngOnInit() {
      this.userService.getListUsers().subscribe(data => {
        console.log(data["msg"]);
        this.listOfData = data["msg"]; 
      })
  }

  handleDisableUser(e){
      this.userService.disableUser(e["id"]).subscribe(data => {
          console.log(data);
      });
  }

  /**
   * Modal Create
   */

  showModalCreate(): void {
    this.isVisibleModalCreate = true;
  }

  handleOkModalCreate(): void {
    this.isOkLoadingModalCreate = true;
    setTimeout(() => {
      this.isVisibleModalCreate = false;
      this.isOkLoadingModalCreate = false;
    }, 3000);
  }

  handleCancelModalCreate(): void {
    this.isVisibleModalCreate = false;
  }


}
