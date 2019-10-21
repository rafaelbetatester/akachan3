import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClinicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinicdetails',
  templateUrl: 'clinicdetails.html',
})
export class ClinicdetailsPage {
  y1:any;
  brightness:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.y1 = 10;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicdetailsPage');
  }

}
