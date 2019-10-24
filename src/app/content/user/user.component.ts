import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listOfData;
  constructor(private userService:UserService ) { }

  ngOnInit() {
      this.userService.getListUsers().subscribe(data => {
        console.log(data["msg"]);
        this.listOfData = data["msg"]; 
      })
  }


}
