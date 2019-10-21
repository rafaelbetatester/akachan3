webpackJsonp([12],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsmodalPageModule", function() { return CommentsmodalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commentsmodal__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsmodalPageModule = /** @class */ (function () {
    function CommentsmodalPageModule() {
    }
    CommentsmodalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__commentsmodal__["a" /* CommentsmodalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__commentsmodal__["a" /* CommentsmodalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__commentsmodal__["a" /* CommentsmodalPage */]
            ]
        })
    ], CommentsmodalPageModule);
    return CommentsmodalPageModule;
}());

//# sourceMappingURL=commentsmodal.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsmodalPage; });
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


var CommentsmodalPage = /** @class */ (function () {
    function CommentsmodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.comments = [
            { id: "1", name: "John arti", comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur", _likeValue: 23, _dislikeValue: 12 },
            { id: "2", name: "michael kors", comment: "It has roots.", _likeValue: 44, _dislikeValue: 8 },
            { id: "3", name: "John smith", comment: "It has roots in a piece of classical Latin literature.", reply: true, _likeValue: 84, _dislikeValue: 37 },
            { id: "4", name: "James kors", comment: "Lorem Ipsum is not simply", _likeValue: 55, _dislikeValue: 19 }
        ];
    }
    CommentsmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsmodalPage');
    };
    CommentsmodalPage.prototype.likeComment = function (item) {
        item.likethis = !item.likethis;
        if (item.likethis) {
            item._likeValue++;
            if (item.dislikethis) {
                item._dislikeValue--;
                item.dislikethis = false;
            }
        }
        else
            item._likeValue--;
    };
    CommentsmodalPage.prototype.dislikeComment = function (item) {
        item.dislikethis = !item.dislikethis;
        if (item.dislikethis) {
            if (item.likethis) {
                item._likeValue--;
                item.likethis = false;
            }
            item._dislikeValue++;
        }
        else
            item._dislikeValue--;
    };
    CommentsmodalPage.prototype.reply = function (item) {
        this.myInput.setFocus();
        this.newcomment = '@' + item.name;
    };
    CommentsmodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], CommentsmodalPage.prototype, "myInput", void 0);
    CommentsmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-commentsmodal',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/commentsmodal/commentsmodal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comments</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n   <ion-list  class="comments">\n      <div *ngFor="let item of comments">\n          <ion-item [hidden]="item.reply" no-lines>\n              <ion-avatar item-left>\n                  <img src="assets/img/default.png">\n              </ion-avatar>\n              <h2 no-margin>{{item.name}}<span>3 days ago</span></h2>\n              <p>{{item.comment}}</p>\n              <ion-row class="commentAction" text-center>\n                  <ion-col>\n                      <button ion-button icon-start clear small (click)="reply(item)">\n                        <ion-icon  color="primary" name="undo"></ion-icon>\n                        reply\n                      </button>\n                  </ion-col>\n                  <ion-col>\n                     <button ion-button icon-start clear small (click)="likeComment(item)">\n                        <ion-icon name="thumbs-up" color="primary" *ngIf="!item.likethis"></ion-icon>\n                        <ion-icon name="thumbs-up" color="thirdcolor" *ngIf="item.likethis"></ion-icon>\n                        {{item._likeValue}}\n                      </button>\n                  </ion-col>\n                  <ion-col>\n                      <button ion-button icon-start clear small (click)="dislikeComment(item)">\n                        <ion-icon name="thumbs-down"  color="primary"  *ngIf="!item.dislikethis"></ion-icon>\n                        <ion-icon name="thumbs-down"  color="thirdcolor" *ngIf="item.dislikethis"></ion-icon>\n                        {{item._dislikeValue}}\n                      </button>\n                   </ion-col>\n              </ion-row>\n          </ion-item>\n          <ion-item [hidden]="!item.reply" [ngClass]="{\'reply\': item.reply}" no-lines>\n              <ion-avatar item-start>\n              <img src="assets/img/default.png">\n              </ion-avatar>\n              <h2 no-margin>{{item.name}}<span>3 days ago</span></h2>\n              <p>{{item.comment}}</p>\n          </ion-item>\n      </div> \n    </ion-list> \n</ion-content>\n<ion-footer class="footer">\n    <ion-row padding>\n      <ion-col col-10 no-padding>\n              <ion-textarea rows="1" placeholder="write comment" [(ngModel)]="newcomment" #input></ion-textarea>\n      </ion-col>\n      <ion-col col-2 text-end no-padding>\n          <button ion-button icon-only clear>\n                <ion-icon color="thirdcolor" name="md-send"></ion-icon>\n          </button>\n      </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/Health/src/pages/commentsmodal/commentsmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], CommentsmodalPage);
    return CommentsmodalPage;
}());

//# sourceMappingURL=commentsmodal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map