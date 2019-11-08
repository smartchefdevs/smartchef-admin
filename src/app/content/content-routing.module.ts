import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ContentComponent } from './content.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';
import { EventosComponent } from './events/events.component';

const routes: Routes = [
  { path: 'content',
    component: ContentComponent, 
    children: [{
      path: 'welcome',
      component: WelcomeComponent
   }, {
     path: 'user',
     component: UserComponent
   }, {
     path: 'category',
     component: CategoryComponent
   },
   {
    path: 'event',
    component: EventosComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
