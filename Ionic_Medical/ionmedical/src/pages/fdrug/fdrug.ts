import { DrugdetailsPage } from './../drugdetails/drugdetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fdrug',
  templateUrl: 'fdrug.html',
})
export class FdrugPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FdrugPage');
  }

  godrugDetails()
  {
    this.navCtrl.push(DrugdetailsPage);
  }

}
