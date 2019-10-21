import { DoctorlistPage } from './../doctorlist/doctorlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FdoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fdoctor',
  templateUrl: 'fdoctor.html',
})
export class FdoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FdoctorPage');
  }

  goDoctorList(){
    this.navCtrl.push(DoctorlistPage);
  }

}
