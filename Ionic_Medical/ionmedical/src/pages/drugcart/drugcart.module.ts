import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugcartPage } from './drugcart';

@NgModule({
  declarations: [
    DrugcartPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugcartPage),
  ],
})
export class DrugcartPageModule {}
