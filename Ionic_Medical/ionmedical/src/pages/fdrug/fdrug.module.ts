import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FdrugPage } from './fdrug';

@NgModule({
  declarations: [
    FdrugPage,
  ],
  imports: [
    IonicPageModule.forChild(FdrugPage),
  ],
})
export class FdrugPageModule {}
