import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { global } from '../../providers/global'; 

@IonicPage()
@Component({
  selector: 'page-today-activity',
  templateUrl: 'today-activity.html',
})
export class TodayActivityPage {
activity: string = "today";

  constructor(public navCtrl: NavController,
  public navParams: NavParams,public global:global) {
    global.current = 6350;
    global.max= 10000;
    global.sec_current = 3;
    global.sec_max = 8;
  }   
   
  incrementQty(){
    if(this.global.sec_current<8)this.global.sec_current+=1;
  } 
  decrementQty(){  
    if(this.global.sec_current>=1)this.global.sec_current-=1   
  }
}
