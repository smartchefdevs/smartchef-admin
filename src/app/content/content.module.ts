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
import { UserComponent } from './user/user.component';
import { UserService } from '../_services/user.service';
import { CategoryService } from '../_services/category.service';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [ContentComponent, WelcomeComponent, UserComponent, CategoryComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgZorroAntdModule
  ],
  providers: [ UserService, CategoryService ]
})
export class ContentModule { }
