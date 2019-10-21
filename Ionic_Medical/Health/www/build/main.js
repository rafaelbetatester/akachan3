webpackJsonp([13],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity/activity.module": [
		269,
		2
	],
	"../pages/commentsmodal/commentsmodal.module": [
		270,
		12
	],
	"../pages/details/details.module": [
		271,
		11
	],
	"../pages/favorite/favorite.module": [
		272,
		3
	],
	"../pages/last-activity/last-activity.module": [
		273,
		0
	],
	"../pages/list/list.module": [
		274,
		10
	],
	"../pages/login/login.module": [
		275,
		9
	],
	"../pages/register/register.module": [
		276,
		8
	],
	"../pages/setting/setting.module": [
		277,
		7
	],
	"../pages/sharepopup/sharepopup.module": [
		279,
		6
	],
	"../pages/start/start.module": [
		278,
		5
	],
	"../pages/today-activity/today-activity.module": [
		280,
		1
	],
	"../pages/video/video.module": [
		281,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map'; 
var global = /** @class */ (function () {
    function global(popoverCtrl, modalCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.stroke = 3;
        this.radius = 65;
        this.medium_radius = 50;
        this.small_radius = 45;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = false;
        this.clockwise = true;
        this.color = '#a0d4ad';
        this.background = '#fff';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 0;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
    }
    global.prototype.getOverlayStyle = function () {
        var isSemi = this.semicircle;
        var transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform
        };
    };
    global.prototype.sharePopover = function (myEvent) {
        var popover = this.popoverCtrl.create('SharepopupPage', {}, { cssClass: 'share-popover' });
        popover.present({
            ev: myEvent
        });
    };
    global.prototype.like = function (item) {
        item.activeLike = !item.activeLike;
    };
    global.prototype.commentModal = function () {
        var modal = this.modalCtrl.create('CommentsmodalPage');
        modal.present();
    };
    global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], global);
    return global;
}());

;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        // animate my app Function
        this.animateVarible = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Today Activity', component: 'TodayActivityPage', icon: "home" },
            { title: 'Favorite', component: 'FavoritePage', icon: "heart" },
            { title: 'Last Activities', component: 'LastActivityPage', icon: "stopwatch" },
            { title: 'Activities', component: 'ActivityPage', icon: "md-bicycle" },
            { title: 'Blog', component: 'ListPage', icon: "paper" },
            { title: 'Videos', component: 'VideoPage', icon: "videocam" },
            { title: 'Setting', component: 'SettingPage', icon: "settings" },
            { title: 'Logout', component: 'LoginPage', icon: "md-power" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-navbar>\n      <button class="close_menu" ion-button icon-only menuClose>\n          <ion-icon name="md-close"></ion-icon>\n      </button>\n      <div class="user_info">\n        <div class="user_img">\n           <img src="assets/img/profile.png">\n        </div>\n        <p class="user_name">Sam Vector</p>\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" text-center no-lines>\n        <ion-icon name="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" [class.animateApp]="animateVarible==true"  #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var config = {
    backButtonText: '',
    backButtonIcon: 'arrow-back',
    iconMode: 'ios',
    pageTransition: 'ios',
    mode: 'ios',
    menuType: 'overlay'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'ActivityPage', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/commentsmodal/commentsmodal.module#CommentsmodalPageModule', name: 'CommentsmodalPage', segment: 'commentsmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite/favorite.module#FavoritePageModule', name: 'FavoritePage', segment: 'favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/last-activity/last-activity.module#LastActivityPageModule', name: 'LastActivityPage', segment: 'last-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sharepopup/sharepopup.module#SharepopupPageModule', name: 'SharepopupPage', segment: 'sharepopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today-activity/today-activity.module#TodayActivityPageModule', name: 'TodayActivityPage', segment: 'today-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__providers_global__["a" /* global */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map