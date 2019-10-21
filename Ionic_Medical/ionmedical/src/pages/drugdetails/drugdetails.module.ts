import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugdetailsPage } from './drugdetails';

@NgModule({
  declarations: [
    DrugdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugdetailsPage),
  ],
})
export class DrugdetailsPageModule {}
