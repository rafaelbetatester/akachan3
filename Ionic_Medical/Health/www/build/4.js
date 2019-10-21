webpackJsonp([4],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
            ],
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.videos = [{ id: 1 }, { id: 2 }, { id: 3 }];
    }
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/video/video.html"*/'<ion-header>\n\n  <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>videos</ion-title>\n        <ion-buttons end>  \n            <button ion-button icon-only (click)="searchInput=!searchInput">\n                <ion-icon name="search"></ion-icon>\n            </button> \n        </ion-buttons>\n        <ion-searchbar *ngIf="searchInput" placeholder=\'\' no-margin></ion-searchbar>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card class="main_item" *ngFor="let item of videos" no-margin>\n        <div class="vid_img">\n            <iframe src="https://www.youtube.com/embed/gvI2ClWqHO0" frameborder="0" width="100%" height="160"></iframe>\n        </div>\n        <ion-card-content>\n            <ion-card-title no-margin>Get Fit</ion-card-title>\n            <p>Is simply dummy text of the printing and type setting industry.</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col text-left>\n                <button (click)="global.like(item)" ion-button icon-start clear small>\n                    <ion-icon *ngIf="!item.activeLike" color="thirdcolor" name="heart"></ion-icon>\n                    <ion-icon *ngIf="item.activeLike" color="danger" name="heart"></ion-icon>\n                    <div>12</div>\n                </button> \n            </ion-col>\n            <ion-col  text-center>\n                <button (click)="global.commentModal()" ion-button icon-start clear small>\n                    <ion-icon color="thirdcolor" name="text"></ion-icon>\n                    <div>150 Comments</div>\n                </button>\n            </ion-col>\n            <ion-col text-right>\n                <button (click)="global.sharePopover($event)" ion-button icon-start clear small>\n                    <ion-icon color="thirdcolor" name="share-alt"></ion-icon>\n                    <div>245</div>\n                </button>\n            </ion-col>\n        </ion-row>\n \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=4.js.map