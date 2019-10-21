import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar'
import moment from 'moment'; 


@IonicPage()
@Component({
  selector: 'page-last-activity',
  templateUrl: 'last-activity.html',
})
export class LastActivityPage {
items:Array<any>;
selecteddate='';
dateRange: { from: string; to: string; };
type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
optionsRange: CalendarComponentOptions = {
  pickMode: 'range'
};   

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.items=[{img:"assets/img/01.png", title:"Runing", date:"Jul 20"},
    {img:"assets/img/02.png", title:"Bike riding", date:"Jul 18"},
    {img:"assets/img/03.png", title:"Bing Bong", date:"Jul 17"},
    {img:"assets/img/01.png", title:"Runing", date:"Jul 12"},
    {img:"assets/img/03.png", title:"Bing Bong", date:"Jul 17"}]   
    this.selecteddate=moment().format('DD . MMM . YYYY');

  }

   onChange(date) {
      this.selecteddate=moment(date).format('DD . MMM . YYYY');
  }

}
   