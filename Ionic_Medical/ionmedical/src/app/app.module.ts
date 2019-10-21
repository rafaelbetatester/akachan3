import { FhospitalPageModule } from './../pages/fhospital/fhospital.module';
import { ClinicdetailsPageModule } from './../pages/clinicdetails/clinicdetails.module';
import { HospdetailsPageModule } from './../pages/hospdetails/hospdetails.module';
import { DoctdetailsPageModule } from './../pages/doctdetails/doctdetails.module';
import { DoctorlistPageModule } from './../pages/doctorlist/doctorlist.module';
import { FclinicPageModule } from './../pages/fclinic/fclinic.module';
import { ClinicdetailsPage } from './../pages/clinicdetails/clinicdetails';
import { HospdetailsPage } from './../pages/hospdetails/hospdetails';
import { DoctdetailsPage } from './../pages/doctdetails/doctdetails';
import { DoctorlistPage } from './../pages/doctorlist/doctorlist';
import { FclinicPage } from './../pages/fclinic/fclinic';
import { FhospitalPage } from './../pages/fhospital/fhospital';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Signups1PageModule } from '../pages/signups1/signups1.module';
import { PanelPageModule } from '../pages/panel/panel.module';
import { FdoctorPageModule } from '../pages/fdoctor/fdoctor.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { FdrugPageModule } from '../pages/fdrug/fdrug.module';
import { DrugdetailsPageModule } from '../pages/drugdetails/drugdetails.module';
import { DrugcartPageModule } from '../pages/drugcart/drugcart.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    Signups1PageModule,
    PanelPageModule,
    ChatPageModule,
    DrugcartPageModule,
    DrugdetailsPageModule,
    FdrugPageModule,
    FdoctorPageModule,
    FclinicPageModule,
    DoctorlistPageModule,
    DoctdetailsPageModule,
    HospdetailsPageModule,
    ClinicdetailsPageModule,
    FhospitalPageModule,

    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
