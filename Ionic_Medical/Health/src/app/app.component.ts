import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Today Activity', component: 'TodayActivityPage', icon:"home"},
      { title: 'Favorite', component: 'FavoritePage', icon:"heart"},
      { title: 'Last Activities', component: 'LastActivityPage', icon:"stopwatch"},
      { title: 'Activities', component: 'ActivityPage', icon:"md-bicycle"},
      { title: 'Blog', component: 'ListPage', icon:"paper"},
      { title: 'Videos', component: 'VideoPage', icon:"videocam"},
      { title: 'Setting', component: 'SettingPage', icon:"settings"},
      { title: 'Logout', component: 'LoginPage', icon:"md-power"}
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

  // animate my app Function
  public animateVarible:boolean=false;  
}
