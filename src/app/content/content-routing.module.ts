import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: 'content',
    component: ContentComponent, 
    children: [{
      path: 'welcome',
      component: WelcomeComponent
   }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
