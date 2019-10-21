webpackJsonp([11],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
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



var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
    }
    DetailsPage.prototype.goToBottom = function () {
        var _this = this;
        setTimeout(function () { _this.content.scrollToBottom(); }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], DetailsPage.prototype, "content", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/details/details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>details</ion-title>\n    <ion-buttons end>  \n          <button ion-button icon-only (click)="searchInput=!searchInput">\n              <ion-icon name="search"></ion-icon>\n          </button> \n      </ion-buttons>\n      <ion-searchbar *ngIf="searchInput" placeholder=\'\' no-margin></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card class="main_item" no-margin>\n\n        <img src="assets/img/001.png">\n\n        <div class="detail_content">\n            <ion-card-content>\n                <ion-card-title>Best Food To lose your weight</ion-card-title>\n                <p>Is simply dummy text of the printing and type setting industry.</p>\n            </ion-card-content>\n\n            <ion-row>\n                <ion-col text-left>\n                    <button (click)="likeitem=!likeitem" ion-button icon-start clear small>\n                        <ion-icon *ngIf="!likeitem" color="thirdcolor" name="heart"></ion-icon>\n                        <ion-icon *ngIf="likeitem" color="danger" name="heart"></ion-icon>\n                        <div>12</div>\n                    </button> \n                </ion-col>\n                <ion-col  text-center>\n                    <button (click)="goToBottom()" ion-button icon-start clear small>\n                        <ion-icon color="thirdcolor" name="text"></ion-icon>\n                        <div>150 Comments</div>\n                    </button>\n                </ion-col>\n                <ion-col text-right>\n                    <button (click)="global.sharePopover($event)" ion-button icon-start clear small>\n                        <ion-icon color="thirdcolor" name="share-alt"></ion-icon>\n                        <div>245</div>\n                    </button>\n                </ion-col>\n            </ion-row>\n\n            <p class="main_parag">\n              Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </div>\n\n        <div class="comments" padding-vertical>\n            <ion-item>\n                <ion-avatar item-left>\n                    <img src="assets/img/man.png">\n                </ion-avatar>\n                <h2>Lela Edwards<span>2:17 PM</span></h2>\n                <p>Is simply dummy text of the printing and industry.</p>\n                <div class="comment_btn">\n                    <button (click)="likecomment=!likecomment" ion-button icon-start clear small>\n                        <ion-icon *ngIf="!likecomment" color="thirdcolor" name="heart"></ion-icon>\n                        <ion-icon *ngIf="likecomment" color="danger" name="heart"></ion-icon>\n                        <div>12</div>\n                    </button>\n                    <button ion-button clear small text-uppercase>\n                        reply\n                    </button>\n                </div>\n            </ion-item>\n            <ion-item class="reply">\n                <ion-avatar item-left>\n                    <img src="assets/img/man1.png">\n                </ion-avatar>\n                <h2>john wick<span>2:30 PM</span></h2>\n                <p>Is simply dummy text of the printing and industry.</p>\n            </ion-item>\n        </div>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=11.js.map