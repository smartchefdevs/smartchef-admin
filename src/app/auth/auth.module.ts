import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth.component';

/**
 * NG GENERAL IMPORTS
 */

import { NzCardModule } from 'ng-zorro-antd/card';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/**
 * Helpers!
 */

 import { NotificationHelper } from '../global/helpers/notification.helper';
 import { StorageHelper } from '../global/helpers/storage.helper';


@NgModule({
  declarations: [ AuthComponent ,LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzCardModule,
    NgZorroAntdModule
    ],
  providers: [NotificationHelper, StorageHelper , { provide: NZ_I18N, useValue: es_ES }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthModule { }
