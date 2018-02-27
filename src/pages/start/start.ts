import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

    @ViewChild('orgid') org_id;
    @ViewChild('uname') uname;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  alert (message: string) {
    this.alertCtrl.create({
     
        title: 'Info',
        subTitle: message,
        buttons: ['OK']
      }).present();
    }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then (data => {      //erfolgreich eingeloggt/authentiziert

      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Successfull logged in')
      //user is logged in
      this.navCtrl.push(TabsPage);
    })
    
    .catch( error => {
      console.log('got an error', error)    //Error ausgeben
      this.alert(error.message)
    })
    
    
    
    /*if(this.org_id.value=="123" && this.uname.value=="admin" && this.password.value=="admin") {
      
      let alert = this.alertCtrl.create({
        title: 'Login Successfull!',
        subTitle: 'You are logged in',
        buttons: ['OK']
      });
      alert.present();
      
    }*/

     
    
  }

}
