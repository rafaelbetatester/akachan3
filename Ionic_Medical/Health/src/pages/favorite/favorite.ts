import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
list:Array<any>;

favoriteTabs: string = "all";   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list=[{img:"assets/img/001.png",type:"blog"},{src:"https://www.youtube.com/embed/gvI2ClWqHO0",type:"video"},{img:"assets/img/002.png",type:"blog"},
    {img:"assets/img/001.png",type:"blog"},{src:"https://www.youtube.com/embed/gvI2ClWqHO0",type:"video"}]
  }
 
  deleteItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

}  
