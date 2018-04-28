webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/info/info.html"*/`<!--\n  Generated template for the ContactPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Contact</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="bg-image">\n      <ion-list>\n          \n              <ion-list-header>Contact through email and social media</ion-list-header>\n          \n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="https://d1hoh05jeo8jse.cloudfront.net/media/google/gmail-icon.jpg">\n                </ion-avatar>\n                <h2>Email</h2>\n                <p>erictong38@gmail.com</p>\n                </ion-item>\n          \n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="https://www.facebook.com/images/fb_icon_325x325.png">\n                  </ion-avatar>\n                  <h2>Facebook</h2>\n                  <p>Thanh Thang</p>\n                  </ion-item>\n  \n              \n      </ion-list>\n  </ion-content>`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (data) {
            console.log('got some data', _this.fire.auth.currentUser);
            _this.alert('Success! You\'re logged in');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            // user is logged in
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would sign in with ', this.user.value, this.password.value);
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.push('RegisterPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/login/login.html"*/`<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="bg-image no-scroll" padding>\n  <img src="assets/imgs/hola.png" class="logo">\n  \n    <ion-list class="list" inset> \n      <ion-item class="label">\n        <ion-label color="myWhite" style="font-size: 12px" stacked>Username</ion-label>\n        <ion-input type="text" #username placeholder="Enter Username"></ion-input>\n      </ion-item>\n      <ion-item class="label">\n          <ion-label color="myWhite" style="font-size: 12px" stacked>Password</ion-label>\n          <ion-input type="password" #password placeholder="Enter Password"></ion-input>\n        </ion-item>\n    </ion-list>\n  \n  <p class="text" style="font-family: opensans; font-size: 14px; color:#ebebeb"><span>Forgot your password?</span></p>\n  <div text-center>\n    <!--calling for Login function from button-->\n<button class="myButton" ion-button color="myWhite" round outline (click)="signInUser()">Login</button>\n<!--calling for the Register function from button-->\n<button class="myButton" ion-button color="light" color="myWhite" round outline (click)="registerUser()">Register</button>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the SkillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SkillPage = (function () {
    function SkillPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkillPage');
    };
    SkillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-skill',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/skill/skill.html"*/`<!--\n  Generated template for the ExtraPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title style="font-family: opensans; font-size: 25px; text-align:center">My Extra Activities</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n     <ion-content class="bg-image">\n          <ion-list>\n        \n            <ion-list-header style="font-family: opensans; font-size: 25px; text-align:center">Volunteer Work</ion-list-header>\n  \n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/ultrahack.jpg">\n              </ion-avatar>\n              <h2>Volunteer Ultrahack Sprint II</h2>\n              <p>Back stage staff</p>\n              <ion-note item-end>November 2017</ion-note>\n            </ion-item>\n        \n          </ion-list>\n        \n               \n  </ion-content>`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/skill/skill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SkillPage);
    return SkillPage;
}());

//# sourceMappingURL=skill.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/welcome/welcome.html"*/`<!--\n\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n\n-->\n\n<ion-slides pager>\n\n  <!-- This is first slider -->\n\n   <ion-slide style="background-color: #08dcf8">\n\n      <img src="assets/imgs/parse-resume.png"/>\n\n      <h1 style="color: #f7f1f1">Welcome to my CV</h1>\n\n      </ion-slide>\n\n\n\n   <ion-slide style="background-color: #3028a1">\n\n      <img class="img" src="assets/imgs/216808-200.png"/>\n\n    <h1 style="color: #ebebeb">Getting to know me</h1>\n\n    <p style="font-family:open-sans; font-size:16px; color:#ebebeb">My Experiences, Skills and Extra Activities </p>\n\n    </ion-slide>\n\n\n\n     <ion-slide style="background-color: #e23c3c">\n\n       <h1 style="color:#ebebeb">Please check it out!</h1>\n\n       <h2 class="padding" style="font-family: opensans; font-size: 16px; color:#ebebeb"> Find out now! </h2>\n\n     <div style="position: absolute; bottom: 120px; text-align: center; z-index: 1000; width: 100%">\n\n      <button id="welcomebtn" ion-button round outline [navPush]="nextPage">Let\'s start here!</button>\n\n    </div>\n\n    </ion-slide>\n\n  </ion-slides>`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		332,
		5
	],
	"../pages/login/login.module": [
		333,
		4
	],
	"../pages/menu/menu.module": [
		335,
		1
	],
	"../pages/register/register.module": [
		334,
		0
	],
	"../pages/skill/skill.module": [
		336,
		3
	],
	"../pages/welcome/welcome.module": [
		337,
		2
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skill_skill__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__skill_skill__["a" /* SkillPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InfoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/tabs/tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="My Experiences" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="My Skills" tabIcon="ribbon"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Extra Activities" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Contact Information" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/about/about.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n     Education and Work Experiences\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-image">\n\n    <ion-card>  \n\n    <ion-card-header style="font-family: opensans; font-size: 25px">\n\n          Education\n\n        </ion-card-header>\n\n      \n\n        <ion-item>\n\n            <ion-icon name="school" item-start></ion-icon>\n\n            Laurea UAS - Business Information Technology \n\n            <p>Espoo, Finland</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="school" item-start></ion-icon>\n\n             University of Newcastle, Australia - Marketing Management\n\n            <p>Newcastle, AustraliaAustralia </p>\n\n          </ion-item>\n\n      </ion-card>\n\n      <ion-card>  \n\n          <ion-card-header style="font-family: opensans; font-size: 25px">\n\n              Work Experiences\n\n            </ion-card-header>\n\n          \n\n            <ion-item>\n\n                <ion-icon name="git-network" item-start></ion-icon>\n\n                Project Manager - Marketing Agency\n\n                <p>PPlus Vietnam Co.Ltd </p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="git-network" item-start></ion-icon>\n\n                Marketing Manager\n\n                <p>Vu Quang Ex-import Trading Co.Ltd</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="git-network" item-start></ion-icon>\n\n                Trade Marketing Manager\n\n                <p>An Binh Telecommunication</p>\n\n            </ion-item>\n\n            \n\n            </ion-card>\n\n</ion-content>`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/contact/contact.html"*/`<ion-slides pager>\n\n    <!-- This is first slider -->\n\n     <ion-slide class="style">\n\n     <h1 style="color: #111010">Skills</h1>\n\n     <ion-item-group>\n\n        <ion-item-divider color="light">Working Skill</ion-item-divider>\n\n        <ion-item>Photoshop</ion-item>\n\n        <ion-item>HTML</ion-item>\n\n        <ion-item>CSS</ion-item>\n\n        <ion-item>Java</ion-item>\n\n        <ion-item>Office</ion-item>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group>\n\n        <ion-item-divider color="light">Others</ion-item-divider>\n\n        <ion-item>Negotiation</ion-item>\n\n        <ion-item>Project Management</ion-item>\n\n        <ion-item>Data Analysis</ion-item>\n\n        <ion-item>Sale</ion-item>\n\n        \n\n    </ion-item-group>\n\n     </ion-slide>\n\n  \n\n     <!-- This is second slider -->\n\n     <ion-slide class="style">\n\n            <h1 style="color: #221e1e">Projects</h1>\n\n      <ion-card>\n\n          <img src="http://ionicframework.com/present-ionic/slides/img/me.png"/>\n\n          <div class="card-title">Simple Mobile App</div>\n\n          <div class="card-subtitle">Create simple mobile app with Ionic 3</div>\n\n        </ion-card>\n\n      \n\n        <ion-card>\n\n          <img src="https://cdn.lynda.com/course/83603/83603-636216266356158373-16x9.jpg"/>\n\n          <div class="card-title">JAVA Project</div>\n\n          <div class="card-subtitle">Simple Java Project with GUI</div>\n\n        </ion-card>\n\n      </ion-slide>\n\n  \n\n</ion-slides>  `/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/pages/home/home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Basic Information</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-image" padding>\n\n  <h2 class="header">Getting to know me</h2>\n\n  <ion-card>\n\n      \n\n          <img src="assets/imgs/ET.jpg"/>\n\n      \n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              Hola!\n\n            </ion-card-title>\n\n            <p>\n\n              My name is THANG VINH THANH. You may call me Eric. \n\n              I have over 05 years experience in marketing agency. \n\n              I am improving my technology skill for further works in my career.\n\n                \n\n            </p>\n\n            </ion-card-content>\n\n      \n\n          <ion-item>\n\n            <ion-icon name=\'globe\' item-start style="color: #4409e6"></ion-icon>\n\n            Languages\n\n            <ion-badge item-end>English, Chinese, Spanish</ion-badge>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-icon name=\'calendar\' item-start style="color: #4409e6"></ion-icon>\n\n            DoB\n\n            <ion-badge item-end>13.11.1988</ion-badge>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'compass\' item-start style="color: #4409e6"></ion-icon>\n\n            Address\n\n            <ion-badge item-end>Espoo, Finland</ion-badge>\n\n          </ion-item>\n\n            \n\n          <ion-item>\n\n            <ion-icon name=\'call\' item-start style="color: #4409e6"></ion-icon>\n\n            Phone\n\n            <ion-badge item-end>+358452104498</ion-badge>\n\n          </ion-item>\n\n              \n\n     </ion-card>\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_skill_skill__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_info__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//authentication from firebase
var firebaseAuth = {
    apiKey: "AIzaSyBqfzmWzaoxsMuaR5M27VtmhX1sFRwI1CI",
    authDomain: "my-cv-final.firebaseapp.com",
    databaseURL: "https://my-cv-final.firebaseio.com",
    projectId: "my-cv-final",
    storageBucket: "my-cv-final.appspot.com",
    messagingSenderId: "926030078726"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_skill_skill__["a" /* SkillPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/skill/skill.module#SkillPageModule', name: 'SkillPage', segment: 'skill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_skill_skill__["a" /* SkillPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/3r1c/FinalTest/test-2/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"/Users/3r1c/FinalTest/test-2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map