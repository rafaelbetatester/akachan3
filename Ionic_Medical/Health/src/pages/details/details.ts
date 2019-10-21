import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { global } from '../../providers/global'; 

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:global) {
  }
  goToBottom(){
    setTimeout(()=>{this.content.scrollToBottom();},200);
  }

}
   