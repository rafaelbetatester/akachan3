import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './activity';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    ActivityPage,
  ],
  imports: [
    RoundProgressModule,
    IonicPageModule.forChild(ActivityPage),
  ],
})
export class ActivityPageModule {}
