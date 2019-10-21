import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { StorageHelper } from '../../global/helpers/storage.helper';
import { NotificationHelper } from '../../global/helpers/notification.helper'
import { AppSettings } from '../../global/constants/constants';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  invalidCredentials: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private storageHelper: StorageHelper,
              private notificationHelper : NotificationHelper,
              private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    
    let mail:String = this.validateForm.value.userName;
    let password:String = this.validateForm.value.password;

    this.authService.login(mail, password).subscribe(data => {
      this.storageHelper.setItem("token", data["token"]);
      this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS, 'Bienvenido!',
      'Esta es la plataforma de administración para SmartChef');
      this.router.navigate(['/content/welcome']);
    } , err => {
       if(err['status'] == 401)
          this.invalidCredentials = true;
    });
  }
}