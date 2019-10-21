import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospdetailsPage } from './hospdetails';

@NgModule({
  declarations: [
    HospdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HospdetailsPage),
  ],
})
export class HospdetailsPageModule {}
