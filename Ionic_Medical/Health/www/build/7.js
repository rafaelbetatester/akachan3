webpackJsonp([7],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, _myApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._myApp = _myApp;
        this.isDisabled = true;
    }
    // animate Function
    SettingPage.prototype.animateApp = function (e) {
        this._myApp.animateVarible = e.checked;
    };
    SettingPage.prototype.changeData = function (input) {
        this.isDisabled = !this.isDisabled;
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/setting/setting.html"*/'<ion-header>\n\n    <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n    <ion-buttons end>  \n        <button ion-button icon-only (click)="searchInput=!searchInput">\n            <ion-icon name="search"></ion-icon>\n        </button> \n    </ion-buttons>\n    <ion-searchbar *ngIf="searchInput" placeholder=\'\' no-margin></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <div class="water_alarm" margin-bottom>\n        <ion-item  no-padding no-lines>\n            <ion-label>Water Alarm</ion-label>\n            <ion-toggle   [(ngModel)]="wateralarm" checked></ion-toggle>\n        </ion-item>\n        <ion-item class="alarm" *ngIf="wateralarm" no-lines>\n            <ion-label hidden>Water Alarm</ion-label>\n            <ion-select>\n                <ion-option selected>Every  1  hour</ion-option>\n                <ion-option>Every  30  Minutes</ion-option>\n                <ion-option>Every  15  Minutes</ion-option>\n                <ion-option>Every  10  Minutes</ion-option>\n            </ion-select>\n        </ion-item>\n      </div>\n      <div class="personal_info">\n        <h3>Set your Login information\n            <ion-icon class="edit_data" *ngIf="isDisabled" (click)="changeData()" name="md-create"></ion-icon>\n            <ion-icon class="save_btn" *ngIf="!isDisabled" (click)="changeData()" name="checkmark"></ion-icon>\n        </h3>\n        <ion-list>\n            <ion-item no-lines> \n               <ion-icon color="thirdcolor" name="mail" item-start></ion-icon>\n               <ion-input type="email" placeholder="email" value="Lela@gmail.com" disabled="{{isDisabled}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines> \n               <ion-icon color="thirdcolor" name="person" item-start></ion-icon>\n               <ion-input type="text" placeholder="Username" value="Sam Vector" disabled="{{isDisabled}}"></ion-input>\n            </ion-item>\n            <ion-item no-lines> \n               <ion-icon color="thirdcolor" name="lock" item-start></ion-icon> \n               <ion-input type="password" placeholder="***********" value="12348hg*-r" disabled="{{isDisabled}}"></ion-input>\n            </ion-item>\n        </ion-list>\n      </div>\n      <div class="app_form">\n        <h3>Set your Fitness data</h3>\n        <ion-list>\n          <ion-item no-lines> \n              <ion-input type="number" placeholder="Age"></ion-input>\n          </ion-item>\n          <ion-item no-lines> \n              <ion-input type="number" placeholder="Weight"></ion-input>\n              <span item-end>Kg</span>\n          </ion-item>\n          <ion-item no-lines> \n              <ion-input type="number" placeholder="Height"></ion-input>\n              <span item-end>Cm</span>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class="language">\n         <h3>App Language</h3> \n         <ion-list  radio-group>\n            <ion-item no-lines>\n                <ion-label>English</ion-label>\n                <ion-radio checked="true" value="English"></ion-radio>\n            </ion-item>\n\n            <ion-item no-lines>\n                <ion-label>French</ion-label>\n                <ion-radio value="French"></ion-radio>\n            </ion-item> \n         </ion-list>\n      </div>\n      <div class="animation">\n        <h3>Animation</h3> \n        <ion-item no-lines>\n            <ion-label>Animation Availability</ion-label>\n            <ion-checkbox color="thirdcolor" (ionChange)="animateApp($event)"  checked="{{_myApp.animateVarible}}" item-end></ion-checkbox>\n        </ion-item>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=7.js.map