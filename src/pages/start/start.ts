import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ImpressumPage } from '../impressum/impressum';
import { HilfePage } from '../hilfe/hilfe';
import { DatenschutzPage } from '../datenschutz/datenschutz';

import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  
  
    @ViewChild('uname') uname;
    @ViewChild('password') password;

    org_id: String;
    cb_status: boolean;
    loggid_in: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fire: AngularFireAuth) {

  }

  ionViewWillEnter() {        //wenn auf page navigiert wird
    if(this.loggid_in==true) {
      this.resetValues();       //Eingabedaten zurücksetzen
    }
      
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

      if (this.org_id==null && this.cb_status!=true) {     //Cb + Orgid nicht eingetragen
        this.alert('Bitte geben Sie die Organisations-ID ein und akzeptieren Sie die Datenschutzerlärung')
      }
      else if(this.org_id==null){    
        this.alert('Bitte geben Sie die Organisations-ID ein')
      }
      else {
        console.log(this.org_id);

        if(this.cb_status==true) {   //Datenschutzrichtlinien akzeptiert?

          if(this.loggid_in!=true){
            this.loggid_in=true;
            //console.log('got some data', this.fire.auth.currentUser);
            this.alert('Successfull logged in')
            //user is logged in
            this.navCtrl.push(TabsPage);
          }
          else{

          }
         
        }
        else {
          this.alert('Bitte akzeptieren Sie die Datenschutzerlärung')
        }
      }
    })
    
    .catch( error => {
      //console.log('got an error', error)    //Error ausgeben
      this.alert(error.message)
    })
    
    
  }

  updateCB() {
    console.log('new state:' + this.cb_status);
  }

  hilfe() {
    this.navCtrl.push(HilfePage);
  }

  datenschutz() {
    this.navCtrl.push(DatenschutzPage);
  }

  impressum() {
    this.navCtrl.push(ImpressumPage);
  }

  

  resetValues() {
    this.org_id ="";
    this.uname.value="";
    this.password.value="";
    this.cb_status=false;
    this.loggid_in = false;
  }

}
