import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StartPage } from '../pages/start/start';
import { HomePage } from '../pages/home/home';
import { ImpressumPage } from '../pages/impressum/impressum';
import { InfoPage } from '../pages/info/info';
import { NachrichtenPage } from '../pages/nachrichten/nachrichten';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;
  email: string = "Admin";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fire: AngularFireAuth) {
   
    this.initializeApp();
    //this.email = fire.auth.currentUser.email;

    
    this.pages = [
      { title: 'Übersicht', component: HomePage },
      { title: 'Nachrichten', component: NachrichtenPage },
      { title: 'Info', component: InfoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
