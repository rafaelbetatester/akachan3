import { DrugcartPage } from './../drugcart/drugcart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrugdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugdetails',
  templateUrl: 'drugdetails.html',
})
export class DrugdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugdetailsPage');
  }

  goCart(){
    this.navCtrl.push(DrugcartPage);
  }

}
