import {Injectable} from '@angular/core'
import { PopoverController, ModalController } from 'ionic-angular';

// import 'rxjs/add/operator/map'; 

@Injectable()  
export class global  {
    
/*round-progressbar*/
current: number;
max: number;
sec_current: number;
sec_max: number;
current_min: number;
max_min: number;
current_cal: number;
max_cal: number;
current_km: number;
max_km: number;
stroke: number = 3;
radius: number = 65;
medium_radius: number = 50;
small_radius: number = 45;
semicircle: boolean = false;
rounded: boolean = false;
responsive: boolean = false;
clockwise: boolean = true;
color: string = '#a0d4ad';
background: string = '#fff';
duration: number = 800;
animation: string = 'easeOutCubic';
animationDelay: number = 0;
animations: string[] = [];
gradient: boolean = false;
realCurrent: number = 0;

public constructor(public popoverCtrl: PopoverController, public modalCtrl: ModalController){}

    getOverlayStyle() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
        'top': isSemi ? 'auto' : '50%',
        'bottom': isSemi ? '5%' : 'auto',
        'left': '50%',
        'transform': transform,
        '-moz-transform': transform,
        '-webkit-transform': transform
        };
    }
   sharePopover(myEvent) {
    let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
    popover.present({
        ev: myEvent     
    });   
  }
  like(item){
    item.activeLike = !item.activeLike;
  }
  commentModal() {
    let modal = this.modalCtrl.create('CommentsmodalPage');
    modal.present();
  }
   
};