import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StartPage } from '../start/start';
import { PopoverAbtPage } from '../popover-abt/popover-abt';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(public navCtrl: NavController, public app: App, private fire: AngularFireAuth, public popoverCtrl: PopoverController) {
    this.email = fire.auth.currentUser.email;
    
  }
  logout() {
    //APi-Token
    //const root = this.app.getRootNav();       //speichern der Root-Page
    //root.popToRoot();
    this.navCtrl.push(StartPage);
  }
  

  showPopoverAbt() {
    let popover = this.popoverCtrl.create(PopoverAbtPage);
    popover.present();
    console.log("POPover");
  }

}
