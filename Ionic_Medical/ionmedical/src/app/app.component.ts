import { HomePage } from './../pages/home/home';
import { DrugdetailsPage } from './../pages/drugdetails/drugdetails';
import { FdrugPage } from './../pages/fdrug/fdrug';
import { ChatPage } from './../pages/chat/chat';
import { ClinicdetailsPage } from './../pages/clinicdetails/clinicdetails';
import { HospdetailsPage } from './../pages/hospdetails/hospdetails';
import { DoctdetailsPage } from './../pages/doctdetails/doctdetails';
import { FclinicPage } from './../pages/fclinic/fclinic';
import { FhospitalPage } from './../pages/fhospital/fhospital';
import { FdoctorPage } from './../pages/fdoctor/fdoctor';
import { PanelPage } from './../pages/panel/panel';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { DoctorlistPage } from '../pages/doctorlist/doctorlist';
import { DrugcartPage } from '../pages/drugcart/drugcart';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
