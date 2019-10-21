import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-commentsmodal',
  templateUrl: 'commentsmodal.html',
})
export class CommentsmodalPage {
@ViewChild('input') myInput;
comments:Array<any>;
newcomment;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
    this.comments = [
    {id:"1",name:"John arti",comment:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",_likeValue:23,_dislikeValue:12 },
    {id:"2",name:"michael kors",comment:"It has roots.",_likeValue:44,_dislikeValue:8}, 
    {id:"3",name:"John smith",comment:"It has roots in a piece of classical Latin literature.",reply:true,_likeValue:84,_dislikeValue:37},
    {id:"4",name:"James kors",comment:"Lorem Ipsum is not simply",_likeValue:55,_dislikeValue:19}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsmodalPage');
  }
  likeComment(item){
      item.likethis=!item.likethis;
      if(item.likethis){
         item._likeValue++;
          if(item.dislikethis){
          item._dislikeValue--;
          item.dislikethis=false;
          }
      }else item._likeValue--;
  }
  dislikeComment(item){
      item.dislikethis=!item.dislikethis;
      if(item.dislikethis){
        if(item.likethis){
        item._likeValue--;
        item.likethis=false;
        }
        item._dislikeValue++;
      }else item._dislikeValue--;  
  }
  reply(item){
   this.myInput.setFocus();
   this.newcomment='@'+item.name;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
