import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastActivityPage } from './last-activity';
import { CalendarModule } from "ion2-calendar";


@NgModule({
  declarations: [
    LastActivityPage,
  ],
  imports: [
    CalendarModule,
    IonicPageModule.forChild(LastActivityPage),
  ],
})
export class LastActivityPageModule {}
