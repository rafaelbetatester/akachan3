import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
public isDisabled:boolean = true;
img='assets/img/default.png';

constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,
  private camera: Camera) {
  }

  getPhoto(){
      var buttons=[
        {
          text: 'Camera',
          handler: () => {
            this.get_camera(2);
          }
        },{
          text: 'Gallery',
          handler: () => {
              this.get_camera(1);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }

      ]
      if(this.img!='assets/img/default.png'){ 
        let butttondelete={text:'Delete',handler:()=>{this.delete_image()}}
        buttons.push(butttondelete) 
      }
      this.actionSheetCtrl.create({buttons: buttons}).present();
  }

  delete_image(){
     this.img='assets/img/profile.png';
  } 

  get_camera=function (source) {
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit:true,
        targetWidth:80,
        targetHeight:80,
        correctOrientation:true
    }

  if(source==1)options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
  else options.sourceType= this.camera.PictureSourceType.CAMERA

  this.camera.getPicture(options).then((imageData) => {
    console.log(imageData)
        this.img='data:image/jpeg;base64,' + imageData;
  }, (err) => { });
  }

  changeData(input){
    this.isDisabled =! this.isDisabled; 
  } 
   

}
