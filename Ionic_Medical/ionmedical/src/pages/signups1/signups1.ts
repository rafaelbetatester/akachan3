import { PanelPage } from './../panel/panel';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Signups1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signups1',
  templateUrl: 'signups1.html',
})
export class Signups1Page {
  @ViewChild('slides') slides: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signups1Page');
    this.slides.lockSwipes(true);
  }

  goPanel()
  {
    this.navCtrl.setRoot(PanelPage);
  }

  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
}

}
