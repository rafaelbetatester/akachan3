webpackJsonp([0],{

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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FhospitalPageModule", function() { return FhospitalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fhospital__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FhospitalPageModule = /** @class */ (function () {
    function FhospitalPageModule() {
    }
    FhospitalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fhospital__["a" /* FhospitalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fhospital__["a" /* FhospitalPage */]),
            ],
        })
    ], FhospitalPageModule);
    return FhospitalPageModule;
}());

//# sourceMappingURL=fhospital.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		152
	],
	"../pages/clinicdetails/clinicdetails.module": [
		154
	],
	"../pages/doctdetails/doctdetails.module": [
		155
	],
	"../pages/doctorlist/doctorlist.module": [
		157
	],
	"../pages/drugcart/drugcart.module": [
		159
	],
	"../pages/drugdetails/drugdetails.module": [
		163
	],
	"../pages/fclinic/fclinic.module": [
		161
	],
	"../pages/fdoctor/fdoctor.module": [
		167
	],
	"../pages/fdrug/fdrug.module": [
		165
	],
	"../pages/fhospital/fhospital.module": [
		110
	],
	"../pages/hospdetails/hospdetails.module": [
		169
	],
	"../pages/panel/panel.module": [
		171
	],
	"../pages/signups1/signups1.module": [
		173
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n      <div padding>\n        <ion-item id="doctc"no-lines>\n          <ion-avatar item-start>\n              <img  src="./assets/imgs/doctors/doctlucia.png" alt="">\n          </ion-avatar>\n          <p>Hello</p>\n        </ion-item>\n\n        <ion-item id="patientc"no-lines>\n          <div class="patient" item-end padding>\n            <p>Hello Doctor</p>\n          </div>\n          </ion-item>\n\n          <ion-item id="patientc"no-lines>\n              <div class="patient" item-end padding>\n                <p>I need to schedule a consultation</p>\n              </div>\n              </ion-item>\n              <ion-item id="doctc"no-lines>\n                  <ion-avatar item-start>\n                      <img  src="./assets/imgs/doctors/doctlucia.png" alt="">\n                  </ion-avatar>\n                  <p>OK</p>\n                </ion-item>\n      </div>\n    </div>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar class="footerr">\n      <ion-item> <ion-input placeholder="Write a message"></ion-input><ion-icon name="ios-send-outline" color="primary" item-end></ion-icon></ion-item>\n     \n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicdetailsPageModule", function() { return ClinicdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinicdetails__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClinicdetailsPageModule = /** @class */ (function () {
    function ClinicdetailsPageModule() {
    }
    ClinicdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinicdetails__["a" /* ClinicdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinicdetails__["a" /* ClinicdetailsPage */]),
            ],
        })
    ], ClinicdetailsPageModule);
    return ClinicdetailsPageModule;
}());

//# sourceMappingURL=clinicdetails.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctdetailsPageModule", function() { return DoctdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctdetails__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoctdetailsPageModule = /** @class */ (function () {
    function DoctdetailsPageModule() {
    }
    DoctdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doctdetails__["a" /* DoctdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctdetails__["a" /* DoctdetailsPage */]),
            ],
        })
    ], DoctdetailsPageModule);
    return DoctdetailsPageModule;
}());

//# sourceMappingURL=doctdetails.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoctdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctdetailsPage = /** @class */ (function () {
    function DoctdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoctdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctdetailsPage');
    };
    DoctdetailsPage.prototype.goChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__chat_chat__["a" /* ChatPage */]);
    };
    DoctdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-doctdetails',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/doctdetails/doctdetails.html"*/'<!--\n  Generated template for the DoctdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Dr. Lucia Silva\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n      <ion-row>\n        <ion-item >\n              <img id="ss" item-start src="./assets/imgs/CALL.svg" alt="">\n              <img  src="./assets/imgs/doctors/doctlucia.png" alt="">\n              <img id="ss" item-end src="./assets/imgs/CHAT.svg" alt="" (click)="goChat()">\n        </ion-item>\n      </ion-row>\n        <div class="rateholder" text-center>\n           \n            <h4>  <ion-icon color="primary" item-end name="star-outline"></ion-icon> <span>4.2</span> (200 evaluations)</h4>\n        </div>\n        <div>\n          <ion-card padding>\n            <p>\n                She is a specialist in heart \n                surgery. She studied at \n                Harvard University \n                and have a postgraduate \n                degree in Cardiology\n            </p>\n          </ion-card>\n        </div>\n        <div padding-horizontal text-center>\n            <button  class="nxtstpbtn" ion-button block (click)="goPanel()">SCHEDULE CONSULTATION</button>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/doctdetails/doctdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], DoctdetailsPage);
    return DoctdetailsPage;
}());

//# sourceMappingURL=doctdetails.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorlistPageModule", function() { return DoctorlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctorlist__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoctorlistPageModule = /** @class */ (function () {
    function DoctorlistPageModule() {
    }
    DoctorlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doctorlist__["a" /* DoctorlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctorlist__["a" /* DoctorlistPage */]),
            ],
        })
    ], DoctorlistPageModule);
    return DoctorlistPageModule;
}());

//# sourceMappingURL=doctorlist.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctdetails_doctdetails__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoctorlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorlistPage = /** @class */ (function () {
    function DoctorlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoctorlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorlistPage');
    };
    DoctorlistPage.prototype.gpDocDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__doctdetails_doctdetails__["a" /* DoctdetailsPage */]);
    };
    DoctorlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-doctorlist',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/doctorlist/doctorlist.html"*/'<!--\n  Generated template for the DoctorlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Doctors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-list class="animated fadeInDown">\n            <ion-card class="itmhospital" (click)="gpDocDetails()">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <ion-avatar>\n                        <img src="./assets/imgs/doctors/doctlucia.png" alt="">\n                    </ion-avatar>\n                     \n                    </ion-thumbnail>\n                    <div class="details">\n                    <h2>Doctor 1</h2>\n                   \n                    <p>  Specilist</p>\n                  </div>\n                  <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n              </ion-item>\n            </ion-card>\n          \n            <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-avatar>\n                            <img src="./assets/imgs/doctors/doctopedro.png" alt="">\n                        </ion-avatar>\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Doctor 2</h2>\n                     \n                      <p>Surgeont</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n\n            <ion-card class="itmhospital">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <ion-avatar>\n                          <img src="./assets/imgs/doctors/doctosophia.png" alt="">\n                      </ion-avatar>\n                    </ion-thumbnail>\n                    <div class="details">\n                    <h2>Doctor 3</h2>\n                   \n                    <p>Specialist</p>\n                  </div>\n                  <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n              </ion-item>\n            </ion-card>\n\n            <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-avatar>\n                            <img src="./assets/imgs/doctors/doctorafayal.png" alt="">\n                        </ion-avatar>\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Doctor 4</h2>\n                     \n                      <p> Surgent</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n          </ion-list>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/doctorlist/doctorlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], DoctorlistPage);
    return DoctorlistPage;
}());

//# sourceMappingURL=doctorlist.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugcartPageModule", function() { return DrugcartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drugcart__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrugcartPageModule = /** @class */ (function () {
    function DrugcartPageModule() {
    }
    DrugcartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drugcart__["a" /* DrugcartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drugcart__["a" /* DrugcartPage */]),
            ],
        })
    ], DrugcartPageModule);
    return DrugcartPageModule;
}());

//# sourceMappingURL=drugcart.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DrugcartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrugcartPage = /** @class */ (function () {
    function DrugcartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DrugcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DrugcartPage');
    };
    DrugcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drugcart',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/drugcart/drugcart.html"*/'<!--\n  Generated template for the DrugcartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-list>\n            <ion-card class="itmcart">\n              <ion-item>\n                  <ion-avatar item-start>\n                      <img src="./assets/imgs/pill.svg" alt="">\n                    </ion-avatar>\n                    <div item-start class="details">\n                    <h2>Augmentin\n                        Sachet</h2>\n                  </div>\n                  <h2 padding-horizontal item-end>$4.98</h2>\n                  <div item-end>\n                    <h2>01</h2>\n                  </div>\n              </ion-item>\n            </ion-card>\n          \n            <ion-card class="itmcart">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="./assets/imgs/pillss.svg" alt="">\n                      </ion-avatar>\n                      <div item-start class="details">\n                      <h2>BoneSure</h2>\n                    </div>\n                    <h2 padding-horizontal item-end>$4.98</h2>\n                    <div item-end>\n                        <h2>01</h2>\n                      </div>\n                </ion-item>\n              </ion-card>\n\n            <ion-card class="itmcart">\n              <ion-item>\n                  <ion-avatar item-start>\n                      <img src="./assets/imgs/pill.svg" alt="">\n                    </ion-avatar>\n                    <div item-start class="details">\n                    <h2>Cetirizin \n                        hydrochlorid</h2>\n                  </div>\n                  <h2 padding-horizontal item-end>$4.98</h2>\n                  <div item-end>\n                      <h2>01</h2>\n                    </div>\n              </ion-item>\n            </ion-card>\n\n            <ion-card class="itmcart">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="./assets/imgs/pillss.svg" alt="">\n                      </ion-avatar>\n                      <div item-start class="details">\n                      <h2>Doxycyclin</h2>\n                    </div>\n                    <h2 padding-horizontal item-end>$4.98</h2>\n                    <div item-end>\n                        <h2>01</h2>\n                      </div>\n                </ion-item>\n              </ion-card>\n          </ion-list>\n\n          <div padding-horizontal text-center>\n              <button  class="nxtstpbtn" ion-button block (click)="goPanel()">Pay Now</button>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/drugcart/drugcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DrugcartPage);
    return DrugcartPage;
}());

//# sourceMappingURL=drugcart.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FclinicPageModule", function() { return FclinicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fclinic__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FclinicPageModule = /** @class */ (function () {
    function FclinicPageModule() {
    }
    FclinicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fclinic__["a" /* FclinicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fclinic__["a" /* FclinicPage */]),
            ],
        })
    ], FclinicPageModule);
    return FclinicPageModule;
}());

//# sourceMappingURL=fclinic.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FclinicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FclinicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FclinicPage = /** @class */ (function () {
    function FclinicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FclinicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FclinicPage');
    };
    FclinicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fclinic',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fclinic/fclinic.html"*/'<!--\n  Generated template for the FhospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar>\n      <ion-title>Clinics</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n      <div>\n          <img src="./assets/imgs/navbar.svg" alt="">\n      </div>\n      <div class="icontent">\n          <ion-list>\n              <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="./assets/imgs/medicine-book.svg" alt="">\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Clinic 1</h2>\n                     \n                      <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n            \n              <ion-card class="itmhospital">\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                          <img src="./assets/imgs/hospi2.svg" alt="">\n                        </ion-thumbnail>\n                        <div class="details">\n                        <h2>Clinic 2</h2>\n                       \n                        <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                      </div>\n                      <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                  </ion-item>\n                </ion-card>\n  \n              <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="./assets/imgs/medicine-book.svg" alt="">\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Clinic 3</h2>\n                     \n                      <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n  \n              <ion-card class="itmhospital">\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                          <img src="./assets/imgs/hospi2.svg" alt="">\n                        </ion-thumbnail>\n                        <div class="details">\n                        <h2>Clinic 4</h2>\n                       \n                        <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                      </div>\n                      <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                  </ion-item>\n                </ion-card>\n            </ion-list>\n      </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fclinic/fclinic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FclinicPage);
    return FclinicPage;
}());

//# sourceMappingURL=fclinic.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugdetailsPageModule", function() { return DrugdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drugdetails__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrugdetailsPageModule = /** @class */ (function () {
    function DrugdetailsPageModule() {
    }
    DrugdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drugdetails__["a" /* DrugdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drugdetails__["a" /* DrugdetailsPage */]),
            ],
        })
    ], DrugdetailsPageModule);
    return DrugdetailsPageModule;
}());

//# sourceMappingURL=drugdetails.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drugcart_drugcart__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DrugdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrugdetailsPage = /** @class */ (function () {
    function DrugdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DrugdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DrugdetailsPage');
    };
    DrugdetailsPage.prototype.goCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__drugcart_drugcart__["a" /* DrugcartPage */]);
    };
    DrugdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-drugdetails',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/drugdetails/drugdetails.html"*/'<!--\n  Generated template for the DrugdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>drugdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-row>\n            <ion-item no-lines>\n                  <h1 color="primary" item-start>$29.00</h1>\n                  <img padding-horizontal  src="./assets/imgs/drug.png" alt="">\n                  <div class="drugq" item-end>\n                      <h1>Quantity</h1>\n                      <h2 text-center>1</h2>\n                      <div class="addicon" text-center>\n                        <button ion-button clear large>   <ion-icon name="add-circle"></ion-icon></button>\n                         \n                      </div>\n                      \n                  </div>\n                  \n            </ion-item>\n          </ion-row>\n          <div class="drugdetails">\n              <ion-card class="animated bounceInRight" padding>\n                <h2 padding-vertical>What is Amoxilin?</h2>\n                <p>\n                    Amoxicillin is a semi-synthetic penicillin of moderate spectrum used in the treatment of infections…\n                </p>\n              </ion-card>\n              <ion-card class="animated bounceInLeft" padding>\n                  <h2 padding-vertical>Important information</h2>\n                  <p>It acts on the bacterial membrane ...</p>\n                </ion-card>\n            </div>\n\n            <div padding-horizontal text-center>\n                <button  class="nxtstpbtn" ion-button block (click)="goCart()">Add to cart</button>\n          </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/drugdetails/drugdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], DrugdetailsPage);
    return DrugdetailsPage;
}());

//# sourceMappingURL=drugdetails.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FdrugPageModule", function() { return FdrugPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fdrug__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FdrugPageModule = /** @class */ (function () {
    function FdrugPageModule() {
    }
    FdrugPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fdrug__["a" /* FdrugPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fdrug__["a" /* FdrugPage */]),
            ],
        })
    ], FdrugPageModule);
    return FdrugPageModule;
}());

//# sourceMappingURL=fdrug.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drugdetails_drugdetails__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FdrugPage = /** @class */ (function () {
    function FdrugPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FdrugPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FdrugPage');
    };
    FdrugPage.prototype.godrugDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__drugdetails_drugdetails__["a" /* DrugdetailsPage */]);
    };
    FdrugPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-fdrug',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fdrug/fdrug.html"*/'<!--\n  Generated template for the FdrugPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Drugs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n        <ion-grid class="catgrid animated fadeIn">\n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="godrugDetails()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/drug.svg" alt="">\n                    </div>\n                   \n                    <p>Drug 01</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/drug.svg" alt="">\n                      </div>\n                     \n                      <p>Drug 02</p>\n                    </ion-col>\n            </ion-row>\n  \n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/drug.svg" alt="">\n                    </div>\n                   \n                    <p>Drug 03</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/drug.svg" alt="">\n                      </div>\n                     \n                      <p>Drug 04</p>\n                    </ion-col>\n            </ion-row>\n  \n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/drug.svg" alt="">\n                    </div>\n                 \n                    <p>Drug 05</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/drug.svg" alt="">\n                      </div>\n                     \n                      <p>Drug 06</p>\n                    </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fdrug/fdrug.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], FdrugPage);
    return FdrugPage;
}());

//# sourceMappingURL=fdrug.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FdoctorPageModule", function() { return FdoctorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fdoctor__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FdoctorPageModule = /** @class */ (function () {
    function FdoctorPageModule() {
    }
    FdoctorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fdoctor__["a" /* FdoctorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fdoctor__["a" /* FdoctorPage */]),
            ],
        })
    ], FdoctorPageModule);
    return FdoctorPageModule;
}());

//# sourceMappingURL=fdoctor.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctorlist_doctorlist__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FdoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FdoctorPage = /** @class */ (function () {
    function FdoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FdoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FdoctorPage');
    };
    FdoctorPage.prototype.goDoctorList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__doctorlist_doctorlist__["a" /* DoctorlistPage */]);
    };
    FdoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-fdoctor',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fdoctor/fdoctor.html"*/'<!--\n  Generated template for the FdoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Doctor Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-grid class="catgrid animated fadeInUp">\n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goDoctorList()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/heart.svg" alt="">\n                    </div>\n                   \n                    <p>Cardiologist</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/smiling-baby.svg" alt="">\n                      </div>\n                     \n                      <p>Pediatrician</p>\n                    </ion-col>\n            </ion-row>\n  \n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/human-uterus.svg" alt="">\n                    </div>\n                   \n                    <p>Gynecology</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/eye.svg" alt="">\n                      </div>\n                     \n                      <p>Ophthalmology</p>\n                    </ion-col>\n            </ion-row>\n  \n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/stomach.svg" alt="">\n                    </div>\n                 \n                    <p>Endocrinology</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/brain.svg" alt="">\n                      </div>\n                     \n                      <p>Psychiatry</p>\n                    </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fdoctor/fdoctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], FdoctorPage);
    return FdoctorPage;
}());

//# sourceMappingURL=fdoctor.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospdetailsPageModule", function() { return HospdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospdetails__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HospdetailsPageModule = /** @class */ (function () {
    function HospdetailsPageModule() {
    }
    HospdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hospdetails__["a" /* HospdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hospdetails__["a" /* HospdetailsPage */]),
            ],
        })
    ], HospdetailsPageModule);
    return HospdetailsPageModule;
}());

//# sourceMappingURL=hospdetails.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HospdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HospdetailsPage = /** @class */ (function () {
    function HospdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HospdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HospdetailsPage');
    };
    HospdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospdetails',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/hospdetails/hospdetails.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>MAAS Hospital-Colombo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n      <ion-row>\n        <ion-item >\n              <img id="ss" item-start src="./assets/imgs/CALL.svg" alt="">\n              <img  id="tt" src="./assets/imgs/TheHospital.png" alt="">\n              <img id="ss" item-end src="./assets/imgs/CHAT.svg" alt="">\n        </ion-item>\n      </ion-row>\n        <div class="rateholder" text-center>\n           \n            <h4>  <ion-icon color="primary" item-end name="star-outline"></ion-icon> <span>4.2</span> (200 evaluations)</h4>\n        </div>\n        <div>\n          <ion-card padding>\n            <p>\n                The Hospital is a specialist in cardiac surgery. has more than 5 thousand employees specializes in several areas of health\n            </p>\n          </ion-card>\n        </div>\n        <div padding-horizontal text-center>\n            <button  class="nxtstpbtn" ion-button block (click)="goPanel()">View Location</button>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/hospdetails/hospdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HospdetailsPage);
    return HospdetailsPage;
}());

//# sourceMappingURL=hospdetails.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPageModule", function() { return PanelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panel__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelPageModule = /** @class */ (function () {
    function PanelPageModule() {
    }
    PanelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__panel__["a" /* PanelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__panel__["a" /* PanelPage */]),
            ],
        })
    ], PanelPageModule);
    return PanelPageModule;
}());

//# sourceMappingURL=panel.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FhospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hospdetails_hospdetails__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FhospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FhospitalPage = /** @class */ (function () {
    function FhospitalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FhospitalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FhospitalPage');
    };
    FhospitalPage.prototype.goHospitalDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__hospdetails_hospdetails__["a" /* HospdetailsPage */]);
    };
    FhospitalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-fhospital',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fhospital/fhospital.html"*/'<!--\n  Generated template for the FhospitalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Hospitals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-list>\n            <ion-card class="itmhospital" (click)="goHospitalDetails()">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="./assets/imgs/medicine-book.svg" alt="">\n                    </ion-thumbnail>\n                    <div class="details">\n                    <h2>Hospital 1</h2>\n                   \n                    <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                  </div>\n                  <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n              </ion-item>\n            </ion-card>\n          \n            <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="./assets/imgs/hospi2.svg" alt="">\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Hospital 2</h2>\n                     \n                      <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n\n            <ion-card class="itmhospital">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="./assets/imgs/medicine-book.svg" alt="">\n                    </ion-thumbnail>\n                    <div class="details">\n                    <h2>Hospital 3</h2>\n                   \n                    <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                  </div>\n                  <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n              </ion-item>\n            </ion-card>\n\n            <ion-card class="itmhospital">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="./assets/imgs/hospi2.svg" alt="">\n                      </ion-thumbnail>\n                      <div class="details">\n                      <h2>Hospital 4</h2>\n                     \n                      <p> <ion-icon name="ios-navigate-outline"></ion-icon> 0.8 km away</p>\n                    </div>\n                    <ion-icon color="primary" item-end name="star-outline"></ion-icon>\n                </ion-item>\n              </ion-card>\n          </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/fhospital/fhospital.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], FhospitalPage);
    return FhospitalPage;
}());

//# sourceMappingURL=fhospital.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signups1PageModule", function() { return Signups1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signups1__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Signups1PageModule = /** @class */ (function () {
    function Signups1PageModule() {
    }
    Signups1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signups1__["a" /* Signups1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signups1__["a" /* Signups1Page */]),
            ],
        })
    ], Signups1PageModule);
    return Signups1PageModule;
}());

//# sourceMappingURL=signups1.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signups1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panel_panel__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Signups1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signups1Page = /** @class */ (function () {
    function Signups1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Signups1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signups1Page');
        this.slides.lockSwipes(true);
    };
    Signups1Page.prototype.goPanel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__panel_panel__["a" /* PanelPage */]);
    };
    Signups1Page.prototype.nextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", Object)
    ], Signups1Page.prototype, "slides", void 0);
    Signups1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signups1',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/signups1/signups1.html"*/'\n<ion-header no-border>\n\n  <ion-navbar>\n   <ion-title text-center >Who are you</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n      <img src="./assets/imgs/navbar.svg" alt="">\n  </div>\n  <div class="icontent">\n        <ion-slides #slides>\n            <ion-slide>\n      <ion-grid class="catgrid">\n          <ion-row class="cat-rows">\n              <ion-col class="cat-box"  (click)="goPhones()">\n                  <div class="catimgholder" text-center>\n                      <img src="./assets/imgs/doctor.svg" alt="">\n                  </div>\n                  <ion-checkbox  [(ngModel)]="doctor"></ion-checkbox>\n                  <p>I\'m aIDoctor</p>\n                </ion-col>\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/hospital.svg" alt="">\n                    </div>\n                    <ion-checkbox  [(ngModel)]="hospital"></ion-checkbox>\n                    <p >I\'m a Hospital</p>\n                  </ion-col>\n          </ion-row>\n\n          <ion-row class="cat-rows">\n              <ion-col class="cat-box"  (click)="goPhones()">\n                  <div class="catimgholder" text-center>\n                      <img src="./assets/imgs/pills.svg" alt="">\n                  </div>\n                  <ion-checkbox  [(ngModel)]="doctor"></ion-checkbox>\n                  <p>I\'m a Pharmacy</p>\n                </ion-col>\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/patient.svg" alt="">\n                    </div>\n                    <ion-checkbox  [(ngModel)]="patient"></ion-checkbox>\n                    <p >I\'m a Patient</p>\n                  </ion-col>\n          </ion-row>\n\n          <ion-row class="cat-rows">\n              <ion-col class="cat-box"  (click)="goPhones()">\n                  <div class="catimgholder" text-center>\n                      <img src="./assets/imgs/clinic.svg" alt="">\n                  </div>\n                  <ion-checkbox  [(ngModel)]="doctor"></ion-checkbox>\n                  <p>I\'m a Clinic</p>\n                </ion-col>\n                <ion-col class="cat-box"  (click)="goPhones()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/chemistry.svg" alt="">\n                    </div>\n                    <ion-checkbox  [(ngModel)]="patient"></ion-checkbox>\n                    <p >I\'m a Laboratory</p>\n                  </ion-col>\n          </ion-row>\n      </ion-grid>\n      <div padding text-center>\n            <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n      </div>\n    </ion-slide>\n    <ion-slide>\n            <div class="detailsholder" text-center padding>\n                    <h1>Account</h1>\n\n                    <ion-item>\n                    <span  item-left><ion-icon name="ios-person-outline"></ion-icon> </span>\n                    <ion-input class="username" placeholder="USERNAME"> </ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                        <span  item-left><ion-icon name="ios-mail-outline"></ion-icon> </span>\n                        <ion-input class="username" placeholder="EMAIL"> </ion-input>\n                      </ion-item>\n                    <ion-item>\n                        <span  item-left><ion-icon name="ios-lock-outline"></ion-icon> </span>\n                    <ion-input  class="password"type="password" placeholder="PASSWORD"></ion-input>\n                  </ion-item>\n                  \n                  </div>\n                  <div padding text-center>\n                        <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n                  </div> \n    </ion-slide>\n\n    <ion-slide>\n            <div class="detailsholder" text-center padding>\n                    <h1>Full Name</h1>\n\n                    <ion-item>\n                    <span  item-left><ion-icon name="ios-person-outline"></ion-icon> </span>\n                    <ion-input class="username" placeholder="FULL NAME"> </ion-input>\n                  </ion-item>\n                  </div>\n                  <div padding text-center>\n                        <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n                  </div> \n    </ion-slide>\n    <ion-slide>\n            <div class="detailsholder" text-center padding>\n                    <h1>Date of Birth</h1>\n                    </div>\n            <ion-item class="DOB">\n                    <ion-label text-center>Select DOB</ion-label>\n                    <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="myDate"></ion-datetime>\n                  </ion-item>\n                  <div padding text-center>\n                        <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n                  </div> \n    </ion-slide>\n    <ion-slide>\n            <div class="detailsholder" text-center padding>\n                    <h1>Gender</h1>\n                    <ion-item>\n                            <ion-label>Select Gender</ion-label>\n                            <ion-select [(ngModel)]="gender">\n                              <ion-option value="f">Female</ion-option>\n                              <ion-option value="m">Male</ion-option>\n                            </ion-select>\n                          </ion-item>\n                    </div>\n                    <div padding text-center>\n                            <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n                      </div> \n    </ion-slide>\n    <ion-slide>\n            <div class="detailsholder" text-center padding>\n                    <h1>Weight</h1>\n                    <ion-item>\n                            <ion-label>Enter Weight</ion-label>\n                            <ion-input class="username" placeholder=""> </ion-input>\n                          </ion-item>\n                    <h1>Height</h1>\n                    <ion-item>\n                        <ion-label>Enter Height</ion-label>\n                        <ion-input class="username" placeholder=""> </ion-input>\n                    </ion-item>\n                    </div>\n                    <div padding text-center>\n                            <button  class="nxtstpbtn" color="light" ion-button block (click)="nextSlide()">NEXT STEP</button>\n                      </div>\n    </ion-slide>\n    <ion-slide>\n          <div text-center class="fillbanner">\n                <img class="animated bounce" src="./assets/imgs/iconOK.svg" alt="">\n               \n          </div>        \n          <div padding text-center>\n                <button  class="nxtstpbtn" color="light" ion-button block (click)="goPanel()">Go Panel</button>\n          </div>\n    </ion-slide>\n      </ion-slides>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/signups1/signups1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Signups1Page);
    return Signups1Page;
}());

//# sourceMappingURL=signups1.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signups1_signups1__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel_panel__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goSignup1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signups1_signups1__["a" /* Signups1Page */]);
    };
    HomePage.prototype.goPanel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__panel_panel__["a" /* PanelPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/home/home.html"*/'<!-- <ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n <div class="header-img">\n   <img src="./assets/imgs/loginupheader.svg" alt="">\n </div>\n <div class="icontent">\n    <div class="detailsholder" text-center padding>\n        <ion-item>\n        <span  item-left><ion-icon name="ios-person-outline"></ion-icon> </span>\n        <ion-input class="username" placeholder="USERNAME"> </ion-input>\n      </ion-item>\n        <ion-item>\n            <span  item-left><ion-icon name="ios-lock-outline"></ion-icon> </span>\n        <ion-input  class="password"type="password" placeholder="PASSWORD"></ion-input>\n      </ion-item>\n      </div>\n      <div class="butnsholder" padding>\n          <button  class="loginbtn" color="light" ion-button block (click)="goPanel()">LOGIN</button>\n          <button  class="fbloginbtn" color="light" ion-button block (click)="goSignup1()">SIGNUP</button>\n          \n      </div>\n      <div text-center padding class="animated fadeInUp">\n        <img src="./assets/imgs/hospitalbottomimage.svg" alt="">\n      </div>\n\n </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_fhospital_fhospital_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_clinicdetails_clinicdetails_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hospdetails_hospdetails_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_doctdetails_doctdetails_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_doctorlist_doctorlist_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_fclinic_fclinic_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signups1_signups1_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_panel_panel_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fdoctor_fdoctor_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_fdrug_fdrug_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_drugdetails_drugdetails_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_drugcart_drugcart_module__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signups1_signups1_module__["Signups1PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_panel_panel_module__["PanelPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat_module__["ChatPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_drugcart_drugcart_module__["DrugcartPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_drugdetails_drugdetails_module__["DrugdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_fdrug_fdrug_module__["FdrugPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_fdoctor_fdoctor_module__["FdoctorPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_fclinic_fclinic_module__["FclinicPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_doctorlist_doctorlist_module__["DoctorlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_doctdetails_doctdetails_module__["DoctdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_hospdetails_hospdetails_module__["HospdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_clinicdetails_clinicdetails_module__["ClinicdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_fhospital_fhospital_module__["FhospitalPageModule"],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinicdetails/clinicdetails.module#ClinicdetailsPageModule', name: 'ClinicdetailsPage', segment: 'clinicdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctdetails/doctdetails.module#DoctdetailsPageModule', name: 'DoctdetailsPage', segment: 'doctdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctorlist/doctorlist.module#DoctorlistPageModule', name: 'DoctorlistPage', segment: 'doctorlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drugcart/drugcart.module#DrugcartPageModule', name: 'DrugcartPage', segment: 'drugcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fclinic/fclinic.module#FclinicPageModule', name: 'FclinicPage', segment: 'fclinic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drugdetails/drugdetails.module#DrugdetailsPageModule', name: 'DrugdetailsPage', segment: 'drugdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fdrug/fdrug.module#FdrugPageModule', name: 'FdrugPage', segment: 'fdrug', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fdoctor/fdoctor.module#FdoctorPageModule', name: 'FdoctorPage', segment: 'fdoctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fhospital/fhospital.module#FhospitalPageModule', name: 'FhospitalPage', segment: 'fhospital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospdetails/hospdetails.module#HospdetailsPageModule', name: 'HospdetailsPage', segment: 'hospdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/panel/panel.module#PanelPageModule', name: 'PanelPage', segment: 'panel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signups1/signups1.module#Signups1PageModule', name: 'Signups1Page', segment: 'signups1', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClinicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicdetailsPage = /** @class */ (function () {
    function ClinicdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.y1 = 10;
    }
    ClinicdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClinicdetailsPage');
    };
    ClinicdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinicdetails',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/clinicdetails/clinicdetails.html"*/'<ion-header no-border>\n\n    <ion-navbar>\n      <ion-title text-center>Health Clinic</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n      <div>\n          <img src="./assets/imgs/navbar.svg" alt="">\n      </div>\n      <div class="icontent">\n        <ion-row>\n          <ion-item >\n                <img id="ss" item-start src="./assets/imgs/CALL.svg" alt="">\n                <img  id="tt" src="./assets/imgs/Theclinic.png" alt="">\n                <img id="ss" item-end src="./assets/imgs/CHAT.svg" alt="">\n          </ion-item>\n        </ion-row>\n          <div class="rateholder" text-center>\n             \n              <h4>  <ion-icon color="primary" item-end name="star-outline"></ion-icon> <span>4.2</span> (200 evaluations)</h4>\n          </div>\n          <div>\n            <ion-card padding>\n              <p>The Clinic is a specialist in cardiac surgery. has more than 5 thousand employees specializes in several areas of health</p>\n            </ion-card>\n          </div>\n          <div padding-horizontal text-center>\n              <button  class="nxtstpbtn" ion-button block (click)="goPanel()">View More</button>\n        </div>\n      </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/clinicdetails/clinicdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClinicdetailsPage);
    return ClinicdetailsPage;
}());

//# sourceMappingURL=clinicdetails.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(219);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fhospital_fhospital__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fclinic_fclinic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fdrug_fdrug__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fdoctor_fdoctor__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PanelPage = /** @class */ (function () {
    function PanelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PanelPage');
    };
    PanelPage.prototype.goFindDoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fdoctor_fdoctor__["a" /* FdoctorPage */]);
    };
    PanelPage.prototype.goFindDrugs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fdrug_fdrug__["a" /* FdrugPage */]);
    };
    PanelPage.prototype.goFindClinic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__fclinic_fclinic__["a" /* FclinicPage */]);
    };
    PanelPage.prototype.goFindHospital = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__fhospital_fhospital__["a" /* FhospitalPage */]);
    };
    PanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-panel',template:/*ion-inline-start:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/panel/panel.html"*/'<!--\n  Generated template for the PanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title text-center>Akachan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <img src="./assets/imgs/navbar.svg" alt="">\n    </div>\n    <div class="icontent">\n        <ion-grid class="catgrid animated zoomIn">\n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goFindDoctor()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/doctor.svg" alt="">\n                    </div>\n\n                    <p>Ask a Doctor</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goFindHospital()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/hospital.svg" alt="">\n                      </div>\n\n                      <p >Find a Hospital</p>\n                    </ion-col>\n            </ion-row>\n\n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goFindDrugs()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/pills.svg" alt="">\n                    </div>\n\n                    <p>Medicines</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/Schedule.svg" alt="">\n                      </div>\n\n                      <p >Schedule consultation</p>\n                    </ion-col>\n            </ion-row>\n\n            <ion-row class="cat-rows">\n                <ion-col class="cat-box"  (click)="goFindClinic()">\n                    <div class="catimgholder" text-center>\n                        <img src="./assets/imgs/smiling-baby.svg" alt="">\n                    </div>\n\n                    <p>Baby Info</p>\n                  </ion-col>\n                  <ion-col class="cat-box"  (click)="goPhones()">\n                      <div class="catimgholder" text-center>\n                          <img src="./assets/imgs/chemistry.svg" alt="">\n                      </div>\n\n                      <p >Health Indicators</p>\n                    </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rafael/Desktop/Ionic_Medical/ionmedical/src/pages/panel/panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
    ], PanelPage);
    return PanelPage;
}());

//# sourceMappingURL=panel.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map