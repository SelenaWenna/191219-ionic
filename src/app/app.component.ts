import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Select, Store} from '@ngxs/store';
import {HeroesState} from './state/heroes/heroes.state';
import {Observable} from 'rxjs';
import {SetSearch} from './state/heroes/heroes.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  @Select(HeroesState.search)
  search: Observable<string>;

  constructor(
    private store: Store,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  HeroesGetList(search) {
    this.store.dispatch(new SetSearch(search));
  }
}
