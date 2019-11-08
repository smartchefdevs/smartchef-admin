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
import { EventosService } from '../_services/eventos.service';
import { CategoryService } from '../_services/category.service';
import { CategoryComponent } from './category/category.component';
import { EventosComponent } from './events/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContentComponent, WelcomeComponent, UserComponent, CategoryComponent, EventosComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UserService, CategoryService, EventosService ]
})
export class ContentModule { }
