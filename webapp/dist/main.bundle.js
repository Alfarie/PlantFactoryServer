webpackJsonp([0,3],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 3000;
        console.log('socket service');
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
        this.socket.on("error", function (error) {
            console.log("ERROR: \"" + error + "\"");
        });
    }
    SocketService.prototype.connect = function () {
        console.log("connected");
    };
    SocketService.prototype.disconnect = function () {
        console.log("disconnect");
    };
    SocketService.prototype.reconnect = function () {
        console.log("reconnect");
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/socket.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(socket) {
        var _this = this;
        this.socket = socket;
        this.socket.socket.on('SENSOR_DATA', function (data) {
            _this.temp = data['temp'];
            _this.humi = data['humi'];
            _this.wt = data['wt'];
            _this.co2 = data['co2'];
            _this.ph = data['ph'];
            _this.ec = data['ec'];
        });
        this.socket.socket.on('CHECK_CONNECTION', function (data) {
            _this.cm01 = data['cm01'];
            _this.cm02 = data['cm02'];
        });
    }
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/data.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cm01SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cm01SettingComponent = (function () {
    function Cm01SettingComponent(socket) {
        var _this = this;
        this.socket = socket;
        this.ecth = 0;
        this.phth = 0;
        this.ecfeed = 0;
        this.phfeed = 0;
        this.dt = 0;
        this.socket.socket.on('CM01_REQ_SETTING', function (data) {
            console.log(data);
            if (data != undefined || data != null) {
                _this.ecth = data.ecth;
                _this.phth = data.phth;
                _this.ecfeed = data.ecfeed;
                _this.phfeed = data.phfeed;
                _this.dt = data.dt;
            }
        });
    }
    Cm01SettingComponent.prototype.ngOnInit = function () {
    };
    Cm01SettingComponent.prototype.SaveSetting = function () {
        var data = {
            'ecth': this.ecth,
            'phth': this.phth,
            'ecfeed': this.ecfeed,
            'phfeed': this.phfeed,
            'dt': this.dt
        };
        console.log(data);
        this.socket.socket.emit('CM01_SAVE_SETTING', data);
    };
    Cm01SettingComponent.prototype.ecthUp = function () {
        this.ecth += 0.1;
        this.ecth.toFixed(2);
    };
    Cm01SettingComponent.prototype.ecthDown = function () {
        this.ecth -= 0.1;
        this.ecth.toFixed(2);
    };
    Cm01SettingComponent.prototype.phthUp = function () {
        this.phth += 0.1;
    };
    Cm01SettingComponent.prototype.phthDown = function () {
        this.phth -= 0.1;
    };
    Cm01SettingComponent.prototype.ecfeedUp = function () {
        this.ecfeed++;
    };
    Cm01SettingComponent.prototype.ecfeedDown = function () {
        this.ecfeed--;
    };
    Cm01SettingComponent.prototype.phfeedUp = function () {
        this.phfeed++;
    };
    Cm01SettingComponent.prototype.phfeedDown = function () {
        this.phfeed--;
    };
    Cm01SettingComponent.prototype.dtUp = function () {
        this.dt++;
    };
    Cm01SettingComponent.prototype.dtDown = function () {
        this.dt--;
    };
    Cm01SettingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-cm01-setting',
            template: __webpack_require__(706),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], Cm01SettingComponent);
    return Cm01SettingComponent;
    var _a;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/cm01-setting.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = (function () {
    function SummaryComponent(data) {
        this.data = data;
        this.title = "Summary";
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__(708),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], SummaryComponent);
    return SummaryComponent;
    var _a;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/summary.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 408;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(529);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/main.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cm01_setting_cm01_setting_component__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__["a" /* SummaryComponent */] },
    { path: 'cm01', component: __WEBPACK_IMPORTED_MODULE_3__cm01_setting_cm01_setting_component__["a" /* Cm01SettingComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/app-routing.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(socket) {
        this.socket = socket;
        this.title = 'Summary';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(705),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/app.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_socket_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_data_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_connection_module_connection_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cm01_setting_cm01_setting_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_app_routing_module__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__module_connection_module_connection_component__["a" /* ModuleConnectionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cm01_setting_cm01_setting_component__["a" /* Cm01SettingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_6__service_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/app.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleConnectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleConnectionComponent = (function () {
    function ModuleConnectionComponent(data) {
        this.data = data;
    }
    ModuleConnectionComponent.prototype.ngOnInit = function () {
    };
    ModuleConnectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-module-connection',
            template: __webpack_require__(707),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], ModuleConnectionComponent);
    return ModuleConnectionComponent;
    var _a;
}());
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/module-connection.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/environment.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/alfarie/project/grobot/webapp_grobot/grobotWebapp/src/polyfills.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <h1>Plant Factory Beta V 1.0 </h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" style=\"margin-top: 20px;\">\n    \t<a routerLink=\"/summary\"> \n    \t\t<button type=\"button\" class=\"btn btn-round btn-default btn-lg\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>Summary </button>\n    \t</a>\n        <a routerLink=\"/cm01\">\n        \t<button type=\"button\" class=\"btn btn-round btn-success btn-lg\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Config </button>\n        </a>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<!-- \n<app-summary></app-summary>\n<app-module-connection></app-module-connection>\n<app-cm01-setting></app-cm01-setting> -->"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<!-- <h1 style=\"margin-top: 40px;\">CM01 SETTING</h1>\n\n<label>Ph Threshold : <input type=\"number\" name=\"\" value=\"\" placeholder=\"Ph threshold\" [(ngModel)]=\"phth\"></label><br>\n<label>EC Threshold : <input type=\"number\" name=\"\" value=\"\" placeholder=\"EC threshold\" [(ngModel)]=\"ecth\"></label><br>\n<label>Ph feed time : <input type=\"number\" name=\"\" value=\"\" placeholder=\"ph detecting time\" [(ngModel)]=\"ecfeed\"></label><br>\n<label>Ec feed time: <input type=\"number\" name=\"\" value=\"\" placeholder=\"ec detecting time\" [(ngModel)]=\"phfeed\"></label><br>\n<label>Detecting time: <input type=\"number\" name=\"\" value=\"\" placeholder=\"ec detecting time\" [(ngModel)]=\"dt\"></label><br>\n<button type=\"\" (click)=\"SaveSetting()\">update</button> -->\n<div class=\"container\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n        \n    </div>\n\t<h3><b>Setting</b> </h3>\n    <form class=\"form-inline\" role=\"form\">\n        <div class=\"form-group\">\n        \t<h4>pH :</h4>\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n            <input [(ngModel)]=\"phth\" name=\"phth\" type=\"number\" class=\"form-control\" placeholder=\"Ph threshold\" disabled=\"disabled\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"phthUp()\" >+0.1</button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"phthDown()\">-0.1</button>\n        </div>\n\t\t<br>\n        <div class=\"form-group\">\n        \t<h4>EC :</h4>\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n            <input [(ngModel)]=\"ecth\" name=\"ecth\" type=\"number\" class=\"form-control\" placeholder=\"EC threshold\" disabled=\"disabled\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"ecthUp()\" >+0.1</button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"ecthDown()\" >-0.1</button>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n        \t<h4>pH Feed times :</h4>\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n            <input [(ngModel)]=\"phfeed\" name=\"phfeed\" type=\"number\" class=\"form-control\" placeholder=\"EC threshold\" disabled=\"disabled\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"phfeedUp()\">+1s</button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"phfeedDown()\">-1s</button>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n        \t<h4>EC Feed times :</h4>\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n            <input [(ngModel)]=\"ecfeed\" name=\"ecfeed\" type=\"number\" class=\"form-control\" placeholder=\"EC threshold\" disabled=\"disabled\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"ecfeedUp()\">+1s</button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"ecfeedDown()\">-1s</button>\n        </div>\n\n         <br>\n        <div class=\"form-group\">\n        \t<h4>Detecting times:</h4>\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n            <input [(ngModel)]=\"dt\" name=\"dt\" type=\"number\" class=\"form-control\" placeholder=\"EC threshold\" disabled=\"disabled\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"dtUp()\">+1s</button>\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"dtDown()\">-1s</button>\n        </div>\n        <br>\n        <button type=\"button\" class=\"btn btn-round btn-primary btn-lg\" style=\"margin-top: 20px;\" (click)=\"SaveSetting()\">Update</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<!-- <h1 style=\"margin-top: 50px;\">Module status</h1>\n<table border=\"1\">\n\t<tr>\n\t\t<td>Module01</td>\n\t\t<td *ngIf=\"data.cm01\"> <b style=\"color: green;\">Online</b></td>\n\t\t<td *ngIf=\"!data.cm01\"><b style=\"color: red;\">Offline</b></td>\n\t</tr>\n\t<tr>\n\t\t<td>Module02</td>\n\t\t<td *ngIf=\"data.cm02\"> <b style=\"color: green;\">Online</b></td>\n\t\t<td *ngIf=\"!data.cm02\"><b style=\"color: red;\">Offline</b></td>\n\t</tr>\n</table> -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n        \t<h3><b>Connection Status</b></h3>\n        </div>\n        \n    </div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    <div class=\"col-md-2 col-sm-2 box0\">\n        <div class=\"box1\">\n            <span class=\"li_cloud\"></span>\n            <h3>CM 01</h3>\n            <h4 *ngIf=\"data.cm01\"><b style=\"color: green;\">ONLINE</b></h4>\n            <h4 *ngIf=\"!data.cm01\"><b style=\"color: red;\">OFFLINE</b></h4>\n        </div>\n        <p>EC , PH MODULE</p>\n    </div>\n    <div class=\"col-md-2 col-sm-2 box0\">\n        <div class=\"box1\">\n            <span class=\"li_cloud\"></span>\n            <h3>CM 02</h3>\n            <h4 *ngIf=\"data.cm02\"><b style=\"color: green;\">ONLINE</b></h4>\n            <h4 *ngIf=\"!data.cm02\"><b style=\"color: red;\">OFFLINE</b></h4>\n        </div>\n        <p>CO2 , TEMPERATURE MODULE</p>\n    </div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n  {{title}}\n</h1>\n<table border=\"1\" *ngIf=\"data\">\n\t<tr>\n\t\t<td><b>temperature</b></td>\n\t\t<td>{{data.temp}}</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>humidity</b></td>\n\t\t<td>{{data.humi}}</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>CO2</b></td>\n\t\t<td>{{data.co2}}</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>water temp</b></td>\n\t\t<td>{{data.wt}}</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>EC</b></td>\n\t\t<td>{{data.ec}}</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>PH</b></td>\n\t\t<td>{{data.ph}}</td>\n\t</tr>\n</table>\n -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <!-- <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div> -->\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #81d45f;\">\n                    <i class=\"fa fa-bolt\"></i>\n                    <h1>{{data.ec}} ms/cm</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">EC Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #f9d367;\">\n                    <i class=\"fa fa-flask\"></i>\n                    <h1>{{data.ph}} </h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Ph Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> +3.2%</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #67f9d1;\">\n                    <i class=\"fa fa-thermometer-empty\"></i>\n                    <h1>{{data.wt}} ºC</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Sol temp</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> +3.2%</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #4298f4;\">\n                    <i class=\"fa fa-pagelines\"></i>\n                    <h1>{{data.co2}} ppm</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">CO2 Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #e87777;\">\n                    <i class=\"fa fa-thermometer-empty\"></i>\n                    <h1>{{data.temp}}º C</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Temperature Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #00c5de;\">\n                    <i class=\"fa fa-tint\"></i>\n                    <h1>{{data.humi}} %</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Humidity Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> +3.2%</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-module-connection></app-module-connection>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ })

},[732]);
//# sourceMappingURL=main.bundle.map