import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * GENERAL DEPENDENCIES -> Main Routes
 */
import { AuthComponent} from './auth/auth.component'
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'auth',
    component: AuthComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
