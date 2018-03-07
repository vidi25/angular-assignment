import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {appRoutes} from './app.route';
import {HomeService} from './home/home.service';
import {HttpClientModule} from '@angular/common/http';
import {VideolistComponent} from './videolist/videolist.component';
import {PlayvideoComponent} from './playvideo/playvideo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideolistComponent,
    PlayvideoComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
