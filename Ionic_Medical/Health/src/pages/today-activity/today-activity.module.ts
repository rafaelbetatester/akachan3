import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayActivityPage } from './today-activity';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    TodayActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayActivityPage),
    RoundProgressModule
  ],
})
export class TodayActivityPageModule {}
