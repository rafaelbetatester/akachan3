webpackJsonp([5],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]),
            ],
        })
    ], StartPageModule);
    return StartPageModule;
}());

//# sourceMappingURL=start.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.isDisabled = true;
        this.img = 'assets/img/default.png';
        this.get_camera = function (source) {
            var _this = this;
            var options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                targetWidth: 80,
                targetHeight: 80,
                correctOrientation: true
            };
            if (source == 1)
                options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
            else
                options.sourceType = this.camera.PictureSourceType.CAMERA;
            this.camera.getPicture(options).then(function (imageData) {
                console.log(imageData);
                _this.img = 'data:image/jpeg;base64,' + imageData;
            }, function (err) { });
        };
    }
    StartPage.prototype.getPhoto = function () {
        var _this = this;
        var buttons = [
            {
                text: 'Camera',
                handler: function () {
                    _this.get_camera(2);
                }
            }, {
                text: 'Gallery',
                handler: function () {
                    _this.get_camera(1);
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                handler: function () { }
            }
        ];
        if (this.img != 'assets/img/default.png') {
            var butttondelete = { text: 'Delete', handler: function () { _this.delete_image(); } };
            buttons.push(butttondelete);
        }
        this.actionSheetCtrl.create({ buttons: buttons }).present();
    };
    StartPage.prototype.delete_image = function () {
        this.img = 'assets/img/profile.png';
    };
    StartPage.prototype.changeData = function (input) {
        this.isDisabled = !this.isDisabled;
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/start/start.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="user_info">\n       <div class="user_img">\n         <img src="{{img}}">\n         <span (click)="getPhoto()"><ion-icon name="ios-camera-outline"></ion-icon></span>\n       </div>\n       <ion-row class="user_name">\n            <ion-col col-10>\n                <ion-input type="text" value="Sam Vector" disabled="{{isDisabled}}" no-margin></ion-input>\n            </ion-col>\n            <ion-col col-2>\n                <ion-icon (click)="changeData()" name="md-create"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="start_info" padding>\n      <h3>Please Fill the following data</h3>\n\n      <div class="app_form">\n        <ion-list>\n\n          <ion-item no-lines> \n             <ion-input type="number" placeholder="Age"></ion-input>\n          </ion-item>\n\n          <ion-item no-lines> \n             <ion-input type="number" placeholder="Weight"></ion-input>\n             <span item-end>Kg</span>\n          </ion-item>\n\n          <ion-item no-lines> \n             <ion-input type="number" placeholder="Height"></ion-input>\n             <span item-end>Cm</span>\n          </ion-item>\n\n        </ion-list>\n\n        <button [navPush]="\'TodayActivityPage\'"  ion-button block>Confirm</button>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ })

});
//# sourceMappingURL=5.js.map