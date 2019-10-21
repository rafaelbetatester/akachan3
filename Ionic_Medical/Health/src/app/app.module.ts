import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import {global} from '../providers/global'; 


var config = {
    backButtonText: '',
    backButtonIcon: 'arrow-back',
    iconMode: 'ios',
    pageTransition: 'ios',
    mode:'ios',
    menuType: 'overlay'
    };

@NgModule({
  declarations: [
    MyApp
  ],    
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    global,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
