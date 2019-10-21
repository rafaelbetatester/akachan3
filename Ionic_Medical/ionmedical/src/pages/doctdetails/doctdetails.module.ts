import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctdetailsPage } from './doctdetails';

@NgModule({
  declarations: [
    DoctdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctdetailsPage),
  ],
})
export class DoctdetailsPageModule {}
