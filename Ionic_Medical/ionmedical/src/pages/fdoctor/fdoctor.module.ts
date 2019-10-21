import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FdoctorPage } from './fdoctor';

@NgModule({
  declarations: [
    FdoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(FdoctorPage),
  ],
})
export class FdoctorPageModule {}
