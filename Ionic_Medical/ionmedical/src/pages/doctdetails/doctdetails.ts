import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctdetails',
  templateUrl: 'doctdetails.html',
})
export class DoctdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctdetailsPage');
  }

  goChat()
  {
    this.navCtrl.push(ChatPage);
  }

}
