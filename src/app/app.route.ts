import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {VideolistComponent} from './videolist/videolist.component';
import {PlayvideoComponent} from './playvideo/playvideo.component';

export const appRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: 'videolist',
          component: VideolistComponent
        }]
}, {
   path: 'playvideo/:id',
   component: PlayvideoComponent
}
    ];
