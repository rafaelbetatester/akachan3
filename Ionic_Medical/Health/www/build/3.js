webpackJsonp([3],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_Pipe_module__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FavoritePageModule = /** @class */ (function () {
    function FavoritePageModule() {
    }
    FavoritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* FavoritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* FavoritePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_Pipe_module__["a" /* PipeModule */]
            ],
        })
    ], FavoritePageModule);
    return FavoritePageModule;
}());

//# sourceMappingURL=favorite.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
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


var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteTabs = "all";
        this.list = [{ img: "assets/img/001.png", type: "blog" }, { src: "https://www.youtube.com/embed/gvI2ClWqHO0", type: "video" }, { img: "assets/img/002.png", type: "blog" },
            { img: "assets/img/001.png", type: "blog" }, { src: "https://www.youtube.com/embed/gvI2ClWqHO0", type: "video" }];
    }
    FavoritePage.prototype.deleteItem = function (item) {
        this.list.splice(this.list.indexOf(item), 1);
    };
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorite',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/favorite/favorite.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n    <ion-buttons end>  \n        <button ion-button icon-only (click)="searchInput=!searchInput">\n            <ion-icon name="search"></ion-icon>\n        </button> \n    </ion-buttons>\n    <ion-searchbar *ngIf="searchInput" placeholder=\'\' no-margin></ion-searchbar>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="favoriteTabs">\n    <ion-segment-button value="all">\n      All\n    </ion-segment-button>\n    <ion-segment-button value="blog">\n      Blog\n    </ion-segment-button>\n    <ion-segment-button value="video">\n      Videos\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="favoriteTabs">\n      <ion-list *ngSwitchCase="\'all\'" no-margin>\n        <ion-item *ngFor="let item of list" no-lines>\n          <img *ngIf="item.type==\'blog\'" src="{{item.img}}">\n          <iframe *ngIf="item.type==\'video\'" class="vid_img" [src]="item.src | safeurl" frameborder="0" width="100%" height="220"></iframe>\n          <h3>Best Food To lose your weight</h3>\n          <span class="delete_item" (click)="deleteItem(item)">\n             <ion-icon color="light" name="ios-trash-outline"></ion-icon>\n          </span> \n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'blog\'" no-margin>\n        <ion-item *ngFor="let item of list  | filter:{type:\'blog\'}" no-lines> \n            <img src="{{item.img}}">\n            <h3>Best Food To lose your weight</h3>\n            <span class="delete_item" (click)="deleteItem(item)">\n               <ion-icon color="light" name="ios-trash-outline"></ion-icon>\n            </span> \n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'video\'" no-margin>\n        <ion-item *ngFor="let item of list | filter:{type:\'video\'}" no-lines>\n            <iframe class="vid_img" [src]="item.src | safeurl" frameborder="0" width="100%" height="220"></iframe>\n            <h3>Best Food To lose your weight</h3>\n            <span  class="delete_item"  (click)="deleteItem(item)">\n               <ion-icon color="light" name="ios-trash-outline"></ion-icon>\n            </span> \n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/favorite/favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FavoritePage);
    return FavoritePage;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SafePipe__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_filter_pipe__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__SafePipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__array_filter_pipe__["a" /* ArrayFilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__SafePipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__array_filter_pipe__["a" /* ArrayFilterPipe */]]
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=Pipe.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeurl' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=SafePipe.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayFilterPipe = /** @class */ (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (items, conditions) {
        if (items != undefined) {
            return items.filter(function (item) {
                for (var field in conditions) {
                    if (item[field] !== conditions[field]) {
                        return false;
                    }
                }
                return true;
            });
        }
    };
    ArrayFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "filter",
            pure: false
        })
    ], ArrayFilterPipe);
    return ArrayFilterPipe;
}());

//# sourceMappingURL=array-filter.pipe.js.map

/***/ })

});
//# sourceMappingURL=3.js.map