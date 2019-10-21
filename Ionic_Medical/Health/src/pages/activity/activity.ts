import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { global } from '../../providers/global'; 

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
list:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global:global) {
    global.current_min = 42;
    global.max_min= 70;
    global.current_cal = 114;
    global.max_cal = 160;
    global.current_km = 2;
    global.max_km = 3;

    this.list=[
    {icon:"app-run", time:"42 Mins", cal:"114 Cal | 2 Km",active:true},
    {icon:"app-bike", time:"0 Mins", cal:"0 Cal | 0 Km"},
    {icon:"app-ping-pong", time:"0 Mins", cal:"0 Cal"}]   
    
  }


}
