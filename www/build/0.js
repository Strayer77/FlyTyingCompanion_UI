webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyDetailsPageModule", function() { return FlyDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fly_details__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FlyDetailsPageModule = class FlyDetailsPageModule {
};
FlyDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fly_details__["a" /* FlyDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fly_details__["a" /* FlyDetailsPage */]),
        ],
    })
], FlyDetailsPageModule);

//# sourceMappingURL=fly-details.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fly_service_fly_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//--------------------------------------------------------------------------------------------------
let FlyDetailsPage = class FlyDetailsPage {
    //--------------------------------------------------------------------------------------------------
    constructor(navCtrl, navParams, flyService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flyService = flyService;
        this.http = http;
        this.flyDetails = this.navParams.get('fly');
    }
    //--------------------------------------------------------------------------------------------------
    ionViewDidLoad() {
        console.log('ionViewDidLoad FlyDetailsPage');
        this.flyImageURL = "/assets/imgs/FlyPictures/" + (this.flyDetails.image_url); //creates image url to display on page
        this.flyMaterials = this.flyDetails.materials; //allows us to read materials nested doc in Fly JSON data
    }
};
FlyDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-fly-details',template:/*ion-inline-start:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/fly-details/fly-details.html"*/'<ion-header no-border>\n  <ion-navbar color="white" text-center justify-content-center>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-1>\n        </ion-col>\n        <ion-col col-8>\n        </ion-col>\n        <ion-col col-3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<!------------------------------------------------------------------------------------------------------->\n<!--This contains the html code for the Fly Details Card-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <ion-col col-12 col-md-6 col-lg-46 col-xl-8>\n        <div *ngIf="flyDetails">\n          <ion-card class="fly-cards">\n            <ion-card-header>\n              <ion-card-title text-wrap text-center>{{ flyDetails.flyName }}</ion-card-title>\n            </ion-card-header>\n            <hr>\n            <h2 text-center>Fly Category - {{ flyDetails.flyCategory }}</h2>\n            <ion-card-content> \n              <img src="{{flyImageURL}}" class="flyPicture">\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div>\n          <!------------------------------------------------------------------------------------------------------->\n          <!--List of material items - ngIf only displays materials that actually exist-->\n          <!--Dynamically loads all the materials and their categories for each fly by ID-->\n          <ion-list>\n            <ion-item *ngIf="flyMaterials?.Hook"><p><b>Hook</b> : {{flyMaterials.Hook}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Thread"><p><b>Thread</b> :  {{flyMaterials.Thread}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Body"><p><b>Body</b> : {{flyMaterials.Body}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Head"><p><b>Head</b> : {{flyMaterials.Head}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Abdomen"><p><b>Abdomen</b> : {{flyMaterials.Abdomen}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Bead"><p><b>Bead</b> : {{flyMaterials.Bead}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Eyes"><p><b>Eyes</b> : {{flyMaterials.Eyes}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Overwing"><p><b>Overwing</b> : {{flyMaterials.Overwing}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Tail"><p><b>Tail</b> : {{flyMaterials.Tail}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Wing"><p><b>Wing</b> : {{flyMaterials.Wing}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Hackle"><p><b>Hackle</b> : {{flyMaterials.Hackle}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Back"><p><b>Back</b> : {{flyMaterials.Back}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Rib"><p><b>Rib</b> : {{flyMaterials.Rib}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Thorax"><p><b>Thorax</b> : {{flyMaterials.Thorax}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Tag"><p><b>Tag</b> : {{flyMaterials.Tag}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Legs"><p><b>Legs</b> : {{flyMaterials.Legs}}</p></ion-item>\n            <ion-item *ngIf="flyMaterials?.Wingcase"><p><b>Wingcase</b> : {{flyMaterials.Wingcase}}</p></ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/fly-details/fly-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fly_service_fly_service__["a" /* FlyServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], FlyDetailsPage);

//# sourceMappingURL=fly-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map