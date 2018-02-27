import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { StartPage } from '../start/start';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(public navCtrl: NavController, public app: App, private fire: AngularFireAuth) {
    this.email = fire.auth.currentUser.email
  }
  logout() {
    //APi-Token
    const root = this.app.getRootNav();       //speichern der Root-Page
    root.popToRoot();
    //this.navCtrl.push(StartPage);
  }
  

}
