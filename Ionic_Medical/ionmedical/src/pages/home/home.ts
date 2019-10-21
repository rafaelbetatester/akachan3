import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Signups1Page } from '../signups1/signups1';
import { PanelPage } from '../panel/panel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goSignup1(){
    this.navCtrl.push(Signups1Page);
  }

  goPanel()
  {
    this.navCtrl.setRoot(PanelPage);
  }

}
