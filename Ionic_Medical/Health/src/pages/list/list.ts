import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { global } from '../../providers/global'; 

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
blog:Array<any>;

  constructor(
  public navCtrl: NavController, public navParams: NavParams, public global:global) {

    this.blog=[{img:"assets/img/001.png"},{img:"assets/img/002.png"},{img:"assets/img/001.png"}]

  }

}
  