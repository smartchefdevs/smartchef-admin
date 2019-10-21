import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

/**
 * NG GENERAL IMPORTS
 */

import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

@NgModule({
  declarations: [ContentComponent, WelcomeComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgZorroAntdModule
  ]
})
export class ContentModule { }
