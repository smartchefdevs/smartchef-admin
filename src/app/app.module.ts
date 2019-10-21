import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

/**
 * MODULE GENERAL IMPORTS
 */

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';

/**
 * COMPONENT GENERAL IMPORTS
 */

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';

/**
 * NG GENERAL IMPORTS
 */

import { NzCardModule } from 'ng-zorro-antd/card';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

/**
 * SERVICES!
 */

import { AuthService} from './_services/auth.service';

/**
 * HELPERS!
 */

import { StorageHelper } from './global/helpers/storage.helper';
import { NotificationHelper } from './global/helpers/notification.helper';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ContentModule,
    NgZorroAntdModule,
    NzCardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NotificationHelper ,StorageHelper, AuthService , { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
