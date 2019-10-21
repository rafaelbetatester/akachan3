import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { global } from '../../providers/global'; 

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
videos:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:global) {
    this.videos=[{id:1},{id:2},{id:3}]
  }
}
