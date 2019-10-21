import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
public isDisabled:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _myApp:MyApp) {
  }
  
  // animate Function
  animateApp(e:any){ 
    this._myApp.animateVarible = e.checked;
  }

 changeData(input){
   this.isDisabled =! this.isDisabled; 
 }
}
