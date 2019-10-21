webpackJsonp([9],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.swipeEnable(false);
    }
    LoginPage.prototype.forgotPassword = function () {
        var forgotpas = this.alertCtrl.create({
            title: 'Forgot password',
            message: "Enter your email address and we'll help you reset your password",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'E-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                    }
                }
            ]
        });
        forgotpas.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/login/login.html"*/'<ion-content class="login_register">\n    <div class="logo">\n      <h3 text-center no-margin>Health & Fit</h3>\n    </div> \n    <div class="app_form">\n        <ion-list>\n\n          <ion-item no-lines> \n            <ion-icon name="md-person" item-start></ion-icon>\n            <ion-input type="text" placeholder="Username/Email"></ion-input>\n          </ion-item>\n\n          <ion-item no-lines> \n            <ion-icon name="key" item-start></ion-icon>\n            <ion-input type="password" placeholder="Password"></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n        <button [navPush]="\'StartPage\'"  ion-button block>Login</button>\n        <button class="for_psw" (click)="forgotPassword()" color="dark" ion-button small clear>Forgot password?</button>\n    </div>\n    <div class="social_icon">\n        <p text-center>Login with</p>\n        <ion-row padding-bottom>\n            <ion-col col-4>\n                <span><i class="app-facebook"></i></span>\n            </ion-col>\n            <ion-col col-4>\n                <span><i class="app-twitter"></i></span>\n            </ion-col>\n            <ion-col col-4>     \n                <span><i class="app-gplus"></i></span>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <button [navPush]="\'RegisterPage\'"  color="secondary"  ion-button block>Sign up</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map