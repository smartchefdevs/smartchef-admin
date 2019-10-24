import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ContentComponent } from './content.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';

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
   }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
