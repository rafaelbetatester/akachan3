import { FhospitalPage } from './../fhospital/fhospital';
import { FclinicPage } from './../fclinic/fclinic';
import { FdrugPage } from './../fdrug/fdrug';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FdoctorPage } from '../fdoctor/fdoctor';

/**
 * Generated class for the PanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanelPage');
  }

  goFindDoctor()
  {
    this.navCtrl.push(FdoctorPage);
  }
  goFindDrugs()
  {
    this.navCtrl.push(FdrugPage);
  }

  goFindClinic()
  {
    this.navCtrl.push(FclinicPage);
  }

  goFindHospital()
  {
    this.navCtrl.push(FhospitalPage);
  }
}
