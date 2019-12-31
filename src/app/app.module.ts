import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {HeroesComponent} from './pages/heroes/heroes.component';
// import {HeroDetailComponent} from './pages/hero-detail/hero-detail.component';
// import {MessagesComponent} from './components/messages/messages.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
// import {NotFoundComponent} from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
