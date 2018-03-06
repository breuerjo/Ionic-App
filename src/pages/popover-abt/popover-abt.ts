import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popover-abt',
  templateUrl: 'popover-abt.html',
})
export class PopoverAbtPage {

  items = [
    'Aktive Langenbrücken',
    'FF Bad Schönborn',
    'Aktive Mingolsheim'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverAbtPage');
  }

}
