import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FclinicPage } from './fclinic';

@NgModule({
  declarations: [
    FclinicPage,
  ],
  imports: [
    IonicPageModule.forChild(FclinicPage),
  ],
})
export class FclinicPageModule {}
