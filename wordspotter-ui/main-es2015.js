(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"main-header\" color=\"primary\">\r\n    <span>Word Spotter UI</span>\r\n    <!-- <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field> -->\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"main-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"main-sidenav\" fixedInViewport=\"false\">\r\n        <mat-nav-list>\r\n            <a mat-list-item >Task Overview</a><!--href=\"\"-->\r\n            <a mat-list-item >Task Results</a><!--href=\"\"-->\r\n            <a mat-list-item >Settings</a><!--href=\"\"-->\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content role=\"region\">\r\n        <!-- <router-outlet></router-outlet> -->\r\n        <!-- <app-spot-table></app-spot-table> -->\r\n        <app-table-with-chart></app-table-with-chart>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spot-table/spot-table.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spot-table/spot-table.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"controls-container\" [formGroup]=\"controlTableFormGroup\">\r\n    <mat-form-field >\r\n        <span matPrefix><mat-icon>search</mat-icon></span>\r\n        <input matInput type=\"text\" placeholder=\"Keyword\" formControlName=\"keyword\" min=\"0\" max=\"100\" >\r\n        <!-- (change)=\"keywordPattern = $event.target.value\" -->\r\n        <mat-error *ngIf=\"controlTableFormGroup.get('keyword')?.invalid\">Invalid value</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Min Score\" formControlName=\"minScore\" value=\"\" min=\"0\" max=\"100\">\r\n        <!-- (change)=\"minScore = $event.target.value\" -->\r\n        <mat-error *ngIf=\"controlTableFormGroup.get('minScore')?.invalid\">Invalid value</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Mode</mat-label>\r\n        <mat-select formControlName=\"filterMode\" (valueChange)=\"onFilterModeChanged($event)\">\r\n          <mat-option *ngFor=\"let mode of filterModes\" [value]=\"mode.value\">\r\n            {{mode.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n</form>\r\n\r\n\r\n<div class=\"container mat-elevation-z8\">\r\n    <div class=\"loading-shade\" *ngIf=\"loadingSubject | async\">\r\n        <mat-spinner *ngIf=\"loadingSubject | async\"></mat-spinner>\r\n    </div>\r\n\r\n    <div class=\"table-container\">\r\n        <table mat-table class=\"full-width-table\" matSort aria-label=\"Spot table\" [trackBy]=\"trackByFn\">\r\n\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.index + 1}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"source\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Source </th>\r\n                <td mat-cell *matCellDef=\"let row\" [matTooltip]=\"row.filename\" matTooltipPosition=\"below\"> {{row.filename | truncate:15:true }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"score\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Score </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.score}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"timeFrom\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> TimeFrom </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.timeFrom | time100us }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"timeTo\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> TimeTo </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.timeTo | time100us }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"keyword\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Keyword </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.keyword}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef></th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <!-- <button mat-mini-fab color=\"primary\" (click)=\"playAudio(row.index)\">Play</button> -->\r\n                    <button mat-icon-button>\r\n                        <mat-icon class=\"play\" aria-hidden=\"false\" aria-label=\"play\">play_circle_outline</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <!-- Header and Row Declarations -->\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onRowClicked(row)\" [ngClass]=\"{\r\n                'highlight': row.filtered\r\n            }\"></tr>\r\n        </table>\r\n    </div>\r\n\r\n    <mat-paginator #paginator [length]=\"filteredDataLength\" [pageIndex]=\"0\" [pageSize]=\"50\"\r\n        [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons>\r\n    </mat-paginator>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _spot_table_spot_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-table/spot-table.component */ "./src/app/spot-table/spot-table.component.ts");




const routes = [
    { path: '', pathMatch: 'full', component: _spot_table_spot_table_component__WEBPACK_IMPORTED_MODULE_3__["SpotTableComponent"] } // redirectTo: 'heroes' },
    // { path: '**', component: NotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  position: absolute;\n  top: 60px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.main-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(175, 175, 175, 0.5);\n}\n\n.main-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n@media (max-width: 599px) {\n  .main-container {\n    top: 56px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF9fcHJvamVjdHNcXHdvcmRzcG90dGVyLXVpL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNJO0lBQ0UsU0FBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm1haW4tc2lkZW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuNSk7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgIHRvcDogNTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLmZvb3RlciB7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5tYWluLXNpZGVuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuNSk7XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgdG9wOiA1NnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor(
    // private spotReaderService: SpotReaderService,
    // private audioPlayerService: AudioPlayerService
    ) {
        this.title = 'wordspotter-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _spot_table_spot_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spot-table/spot-table.component */ "./src/app/spot-table/spot-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _pipes_time100us_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/time100us.pipe */ "./src/app/pipes/time100us.pipe.ts");
/* harmony import */ var _pipes_filepath_to_name_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filepath-to-name.pipe */ "./src/app/pipes/filepath-to-name.pipe.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _spot_chart_spot_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spot-chart/spot-chart.component */ "./src/app/spot-chart/spot-chart.component.ts");
/* harmony import */ var _table_with_chart_table_with_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-with-chart/table-with-chart.component */ "./src/app/table-with-chart/table-with-chart.component.ts");
/* harmony import */ var src_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/material-design/material-design.module */ "./src/material-design/material-design.module.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _spot_table_spot_table_component__WEBPACK_IMPORTED_MODULE_5__["SpotTableComponent"],
            _pipes_time100us_pipe__WEBPACK_IMPORTED_MODULE_7__["Time100usPipe"],
            _pipes_filepath_to_name_pipe__WEBPACK_IMPORTED_MODULE_8__["FilepathToNamePipe"],
            _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__["TruncatePipe"],
            _spot_chart_spot_chart_component__WEBPACK_IMPORTED_MODULE_11__["SpotChartComponent"],
            _table_with_chart_table_with_chart_component__WEBPACK_IMPORTED_MODULE_12__["TableWithChartComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            src_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_13__["MaterialDesignModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pipes/filepath-to-name.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filepath-to-name.pipe.ts ***!
  \************************************************/
/*! exports provided: FilepathToNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilepathToNamePipe", function() { return FilepathToNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilepathToNamePipe = class FilepathToNamePipe {
    transform(value, ...args) {
        return null;
    }
};
FilepathToNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filepathToName'
    })
], FilepathToNamePipe);



/***/ }),

/***/ "./src/app/pipes/time100us.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/time100us.pipe.ts ***!
  \*****************************************/
/*! exports provided: Time100usPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time100usPipe", function() { return Time100usPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Time100usPipe = class Time100usPipe {
    transform(t) {
        const h = Math.floor(t / 36000000);
        t -= (h * 36000000);
        const m = Math.floor(t / 600000);
        t -= (m * 600000);
        const s = Math.floor(t / 10000);
        t -= (s * 10000);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${t.toString().padStart(4, '0')}`;
    }
};
Time100usPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'time100us'
    })
], Time100usPipe);



/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TruncatePipe = class TruncatePipe {
    transform(value, maxLength = 50, left = false, ellipsis = true) {
        if (value.length > maxLength) {
            if (left) {
                if (ellipsis) {
                    return `…${value.slice(value.length - maxLength, value.length)}`;
                }
                return value.slice(value.length - maxLength, value.length);
            }
            else {
                if (ellipsis) {
                    return `${value.slice(0, maxLength)}…`;
                }
                return value.slice(0, maxLength);
            }
        }
        return value;
    }
};
TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/services/audio-player.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/audio-player.service.ts ***!
  \**************************************************/
/*! exports provided: AudioPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function() { return AudioPlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudioPlayerService = 
/*
 TODO - try to use single "source" instance
*/
class AudioPlayerService {
    constructor() {
        //this.ctx = new AudioContext(); // instance after a user gesture
        this.source = null;
        // this.onended = () => {};
    }
    play(buffer, sampleRate) {
        if (!this.ctx) {
            this.ctx = new AudioContext();
        }
        const newArrayBuffer = this.ctx.createBuffer(1, buffer.length, sampleRate);
        newArrayBuffer.copyToChannel(buffer, 0);
        const source = this.ctx.createBufferSource();
        // this.onEnded$ = fromEvent(source, 'ended');
        source.connect(this.ctx.destination);
        source.buffer = newArrayBuffer;
        source.start();
        this.source = source;
    }
    stop() {
        if (this.source) {
            this.source.stop();
        }
    }
};
AudioPlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /*
     TODO - try to use single "source" instance
    */
], AudioPlayerService);



/***/ }),

/***/ "./src/app/services/word-spotter-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/word-spotter-data.service.ts ***!
  \*******************************************************/
/*! exports provided: WordSpotterDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordSpotterDataService", function() { return WordSpotterDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_parse_spot_file_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/parse-spot-file-data */ "./src/app/utils/parse-spot-file-data.ts");
/* harmony import */ var _spot_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spot-mock.data */ "./src/app/spot-mock.data.ts");






let WordSpotterDataService = class WordSpotterDataService {
    //private dataSubject = new BehaviorSubject<Spot[]>([]);
    constructor() {
        this.wordspotterUrl = 'api/data';
    }
    getData() {
        //return this.dataSubject. asObservable();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getMockData())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getMockData() {
        const spots = Object(_utils_parse_spot_file_data__WEBPACK_IMPORTED_MODULE_4__["parseSpotFileData"])(_spot_mock_data__WEBPACK_IMPORTED_MODULE_5__["spotMock"]);
        return spots;
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
WordSpotterDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WordSpotterDataService);



/***/ }),

/***/ "./src/app/spot-chart/spot-chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/spot-chart/spot-chart.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n\ncanvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvdC1jaGFydC9EOlxcX19wcm9qZWN0c1xcd29yZHNwb3R0ZXItdWkvc3JjXFxhcHBcXHNwb3QtY2hhcnRcXHNwb3QtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nwb3QtY2hhcnQvc3BvdC1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUdBLHVCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9zcG90LWNoYXJ0L3Nwb3QtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwiLi4vLi4vX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyAkYXBwLXdhcm47XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/spot-chart/spot-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/spot-chart/spot-chart.component.ts ***!
  \****************************************************/
/*! exports provided: SpotChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotChartComponent", function() { return SpotChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");





// A chart is a graphical representation of data, in which "the data is represented by symbols,
/*
double click - zoom out
drag - brush zoom

*/
let SpotChartComponent = class SpotChartComponent {
    constructor() {
        this.margin = { top: 0, right: 0, bottom: 0, left: 0 };
        this.loading = false;
        this.width = 1500;
        this.height = 220;
        window['spotChart'] = this;
        window['d3'] = d3__WEBPACK_IMPORTED_MODULE_4__;
    }
    ngOnChanges() {
        if (!this.x) {
            return;
        }
        if (!this.spots) {
            return;
        }
        this.x.domain(this.domain);
        this.x2.domain(this.domain);
        console.log('ng changes, spots: ', this.spots);
        this.drawChart();
    }
    ngAfterViewInit() {
        const canvasEl = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d');
        canvasEl.width = this.width;
        canvasEl.height = this.height; // boundingRect.height; // this.height;
        //setupCanvasResizing(canvasEl, window);
        // (canvasEl as any).resize();
        // const mouse = setupCanvasMouse(canvasEl);
        // this.ctx.lineWidth = 3;
        // this.ctx.lineCap = 'round';
        // this.ctx.strokeStyle = '#000';
        // this.captureEvents(canvasEl);
        this.resizeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100)).subscribe((event) => {
            console.log('resize event', event);
            this.onResize();
            this.loading = false;
        });
        this.x = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().range([0, this.width]);
        this.y = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().range([this.height, 0]).domain([-50, 50]);
        this.x2 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().range([0, this.width]);
        this.y2 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().range([this.height, 0]).domain([-10, 10]);
        // x.domain(d3.extent<Spot, number>(spots, d => d.timeFrom));
        // y.domain([-50, 50]);
        this.zoom = d3__WEBPACK_IMPORTED_MODULE_4__["zoom"]()
            .scaleExtent([1, Infinity])
            .translateExtent([[0, 0], [canvasEl.width, canvasEl.height]])
            .extent([[0, 0], [canvasEl.width, canvasEl.height]])
            // .translateExtent([[-100, -100], [canvas.width + 90, canvas.height + 100]])
            .on('zoom', () => this.zoomed());
        d3__WEBPACK_IMPORTED_MODULE_4__["select"](this.canvas.nativeElement).call(this.zoom);
    }
    onResize() {
        const canvasEl = this.canvas.nativeElement;
        // this.width;
        // this.height;
        this.drawChart();
    }
    drawChart() {
        // x ... 100us - unit of time
        const canvas = this.canvas.nativeElement;
        const ctx = this.ctx;
        const margin = this.margin;
        const audioSamples = this.audioSamples;
        // const audioSampleRate = this.audioSampleRate;
        const spots = this.spots;
        const highlightedSpots = this.highlightedSpots;
        console.log('drawing spot chart', this.spots);
        const width = canvas.width - margin.left - margin.right;
        const height = canvas.height - margin.top - margin.bottom;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(margin.left, margin.top);
        ctx.strokeStyle = 'gray';
        ctx.fillStyle = 'black';
        this.drawXAxis(this.x, 70);
        ctx.fillStyle = '#52d1cd';
        spots.forEach((spot) => {
            const xp = this.x(spot.timeFrom);
            const xw = this.x(spot.timeTo) - xp;
            ctx.fillRect(xp, 80, xw, 30);
        });
        ctx.fillStyle = '#000';
        ctx.font = '18px Roboto Mono';
        // if (minDomain) {
        spots.forEach((spot) => {
            const xp = this.x(spot.timeFrom) + 20;
            ctx.fillText(spot.keyword, xp, 50);
        });
    }
    drawXAxis(x, height) {
        const ctx = this.ctx;
        const tickCount = 5;
        const tickSize = 60;
        const ticks = x.ticks(tickCount);
        const tickFormat = x.tickFormat();
        ctx.beginPath();
        ticks.forEach((d) => {
            ctx.moveTo(x(d), height);
            ctx.lineTo(x(d), height + tickSize);
        });
        // ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ticks.forEach((d) => {
            ctx.fillText(tickFormat(d), x(d), height + tickSize);
        });
    }
    zoomed() {
        console.log(`transform: `, d3__WEBPACK_IMPORTED_MODULE_4__["event"]);
        if (d3__WEBPACK_IMPORTED_MODULE_4__["event"].sourceEvent && d3__WEBPACK_IMPORTED_MODULE_4__["event"].sourceEvent.type === 'brush') {
            return; // ignore zoom-by-brush
        }
        const t = d3__WEBPACK_IMPORTED_MODULE_4__["event"].transform;
        this.x.domain(t.rescaleX(this.x2).domain());
        // console.log(this.x.domain());
        this.drawChart();
        // focus.select(".area").attr("d", area);
        // focus.select(".axis--x").call(xAxis);
        // context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
], SpotChartComponent.prototype, "canvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotChartComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotChartComponent.prototype, "spots", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotChartComponent.prototype, "highlightedSpots", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotChartComponent.prototype, "audioSamples", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotChartComponent.prototype, "domain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpotChartComponent.prototype, "clicked", void 0);
SpotChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spot-chart',
        template: `
            <canvas #canvas></canvas>
        `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spot-chart.component.scss */ "./src/app/spot-chart/spot-chart.component.scss")).default]
    })
], SpotChartComponent);



/***/ }),

/***/ "./src/app/spot-mock.data.ts":
/*!***********************************!*\
  !*** ./src/app/spot-mock.data.ts ***!
  \***********************************/
/*! exports provided: spotMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spotMock", function() { return spotMock; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const spotMock = String.raw `
FilenameS                             KeywordS             ScoreN 	TimeFromT 	TimeToT 	FrameFromN 	DurationN 	AuxScoreN 	FillerS
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav vítej*               100.00 0:00:03.02 0:00:03.55       302  54   0.000000 vítejte
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav hudební*             100.00 0:00:03.65 0:00:04.03       365  39   0.000000 hudebňíX
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav masakr*               98.33 0:00:04.07 0:00:04.51       407  45   2.406250 masakr
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav tentokrát            100.00 0:00:05.43 0:00:06.15       543  73   0.000000 tentokrát
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav dnešní*               61.56 0:00:07.20 0:00:07.55       720  36  44.592773 nešňíh
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav kter*                 72.88 0:00:09.03 0:00:09.35       903  33  24.678711 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav česk*                 85.13 0:00:10.00 0:00:10.36      1000  37  15.610352 českí
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav interpret*            95.31 0:00:10.41 0:00:11.06      1041  66  14.898438 interpretú
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav řekn*                 77.35 0:00:11.91 0:00:12.31      1191  41  33.640625 rekteme
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav jejich                90.71 0:00:16.81 0:00:17.11      1681  31   8.128906 jejíX
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav poměrně              100.00 0:00:25.36 0:00:25.93      2536  58   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav přesně               100.00 0:00:26.13 0:00:26.58      2613  46   0.000000 pŘesňe
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav někteří              100.00 0:00:27.61 0:00:27.98      2761  38   0.000000 ňekteří
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav hudební*              81.14 0:00:29.35 0:00:29.71      2935  37  25.462891 udebňí
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav ještě                 49.98 0:00:40.80 0:00:41.03      4080  24  35.010742 ešťe
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav přesně               100.00 0:00:47.10 0:00:47.51      4710  42   0.000000 pŘesňe
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav cédé*                 29.34 0:00:52.35 0:00:52.80      5235  46  78.432617 Řeedéé
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav nějakým              100.00 0:00:52.98 0:00:53.40      5298  43   0.000000 ňejakím
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav Michal*              100.00 0:00:55.92 0:00:56.23      5592  32   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav David*               100.00 0:00:56.27 0:00:56.57      5627  31   0.000000 davit
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav někdy                100.00 0:01:15.35 0:01:15.60      7535  26   0.000000 ňegdi
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav hezky                 74.28 0:01:28.60 0:01:29.08      8860  49  36.014648 eski
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav pozor                 68.68 0:01:29.80 0:01:30.10      8980  31  27.401855 pozor
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav nějakým               50.55 0:01:33.12 0:01:33.36      9312  25  34.612793 akím
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav interpret*           100.00 0:01:33.35 0:01:33.96      9335  62   0.000000 interpreta
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav interpret*            96.91 0:01:35.10 0:01:35.76      9510  67  10.027344 enterpretsa
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav znov*                 67.03 0:01:39.17 0:01:39.40      9917  24  21.927734 znavu
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav cédé*                 99.41 0:01:40.36 0:01:41.13     10036  78   1.669922 cédéčko
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav potom                100.00 0:01:41.73 0:01:41.96     10173  24   0.000000 potom
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav cédé*                 61.59 0:01:45.96 0:01:46.35     10596  40  55.314453 édačka
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav Michal*              100.00 0:01:47.21 0:01:47.62     10721  42   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav Michal*               99.47 0:01:48.87 0:01:49.28     10887  42   0.715820 miXalat
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav David*                93.98 0:01:49.27 0:01:49.72     10927  46   8.915039 davida
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav dokonce              100.00 0:01:49.76 0:01:50.23     10976  48   0.000000 dokonce
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav dokonce               99.34 0:01:54.01 0:01:54.37     11401  37   0.895508 dokonci
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav velice                58.94 0:01:54.47 0:01:54.80     11447  34  44.347656 dalice
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav cédé*                 91.93 0:01:54.71 0:01:55.51     11471  81  23.599609 édéčko
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav kter*                 94.79 0:01:55.56 0:01:55.81     11556  26   3.825684 terí
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav jmenuje               99.61 0:01:55.96 0:01:56.57     11596  62   0.783203 menuje
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav plán*                 49.64 0:02:03.07 0:02:03.48     12307  42  68.491211 ne
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav dnes*                 34.60 0:02:05.46 0:02:05.75     12546  30  62.783691 beck
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav vždy*                 99.56 0:02:07.12 0:02:07.47     12712  36   0.444336 dicki
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav velk*                100.00 0:02:07.46 0:02:07.78     12746  33   0.000000 velkím
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav interpret*            93.80 0:02:08.90 0:02:09.65     12890  76  22.673828 eterpreta
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav někdy                 36.95 0:02:10.68 0:02:10.93     13068  26  46.341797 ňegde
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav malinko               59.30 0:02:11.72 0:02:12.23     13172  52  76.926758 maliNk
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav znov*                 88.22 0:02:19.43 0:02:19.75     13943  33  10.720703 znova
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav korun*                98.67 0:02:21.42 0:02:21.65     14142  24   0.884766 konun
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav takovej               30.65 0:02:22.02 0:02:22.28     14202  27  68.652832 zekllik
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav cédé*                 98.56 0:02:22.65 0:02:23.12     14265  48   2.522461 cédéčko
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav interpret*            98.84 0:02:23.62 0:02:24.36     14362  75   4.169922 iiterpreta
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav hudební*             100.00 0:02:26.48 0:02:26.78     14648  31   0.000000 hudebňí
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav prostě                88.16 0:02:26.81 0:02:27.10     14681  30  11.364746 prosťi
d:\WordSpotting\DATA\Stream\HudMasakry_7cc4ca0b62308a7f_360p.wav příště               100.00 0:02:28.75 0:02:29.06     14875  32   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav vítej*               100.00 0:00:03.37 0:00:03.90       337  54   0.000000 vítejte
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hudební*              78.59 0:00:04.01 0:00:04.47       401  47  40.670898 budebňíX
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav masakr*               99.23 0:00:04.45 0:00:05.17       445  73   2.259766 masakreX
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav dnes*                100.00 0:00:05.81 0:00:06.27       581  47   0.000000 dneska
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hudební*              89.33 0:00:09.21 0:00:09.57       921  37  14.407227 hudebňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav vůbec                100.00 0:00:09.68 0:00:09.95       968  28   0.000000 vúbec
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav nejsou                62.88 0:00:09.97 0:00:10.46       997  50  59.395508 nijsou
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav velmi                 34.80 0:00:11.66 0:00:11.88      1166  23  43.356445 vldmi
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               57.11 0:00:11.77 0:00:12.08      1177  32  44.610352 mihlad
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                92.29 0:00:12.07 0:00:12.43      1207  37   9.253906 davida
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav například             77.00 0:00:16.43 0:00:17.15      1643  73  73.359375 ňapŘíklat
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                 27.16 0:00:19.85 0:00:20.15      1985  31  63.730957 krae
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav jaksi                 52.70 0:00:20.76 0:00:21.08      2076  33  44.695313 Xsid
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav dokonce              100.00 0:00:21.06 0:00:21.45      2106  40   0.000000 dokonce
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               67.00 0:00:21.52 0:00:21.80      2152  29  26.563965 miXoé
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*               100.00 0:00:21.83 0:00:22.16      2183  34   0.000000 davidem
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav někdy                 23.27 0:00:35.23 0:00:35.50      3523  28  59.080078 di
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav ukážem*               97.62 0:00:35.63 0:00:36.07      3563  45   3.862305 ukážeme
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav ještě                 47.23 0:00:36.08 0:00:36.33      3608  26  38.785645 ešťe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav teďka                 97.17 0:00:37.80 0:00:38.06      3780  27   2.180664 teťka
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*              100.00 0:00:41.15 0:00:41.42      4115  28   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*               100.00 0:00:41.43 0:00:41.63      4143  21   0.000000 davit
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav budem*                44.83 0:00:44.65 0:00:45.05      4465  41  63.725586 budet
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav stát*                 80.96 0:00:45.15 0:00:45.42      4515  28  13.139648 stat
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav tisíc*               100.00 0:00:46.03 0:00:46.36      4603  34   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav osobně                51.84 0:00:49.68 0:00:50.12      4968  45  69.348633 osamí
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                83.72 0:00:51.96 0:00:52.18      5196  23  10.829102 davi
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               82.13 0:00:54.71 0:00:55.07      5471  37  21.449219 iXala
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                100.00 0:00:55.52 0:00:55.73      5552  22   0.000000 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav takových              64.26 0:00:56.26 0:00:56.67      5626  42  54.678711 takovd
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*              100.00 0:01:14.02 0:01:14.57      7402  56   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                100.00 0:01:14.68 0:01:15.06      7468  39   0.000000 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav rychle                27.54 0:01:17.58 0:01:17.88      7758  31  63.400391 rXla
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                80.72 0:01:17.87 0:01:18.17      7787  31  19.284180 davida
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav nějaká                54.74 0:01:20.51 0:01:20.93      8051  43  47.523438 ňák
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav takže                 42.29 0:01:26.13 0:01:26.43      8613  31  50.493164 daše
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav jednoho               63.18 0:01:26.77 0:01:27.15      8677  39  51.369141 edn4
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav teďka                 21.47 0:01:30.56 0:01:30.95      9056  40  87.953125 toeťňi
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               20.50 0:01:39.05 0:01:39.32      9905  28  73.137207 miXla
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                78.25 0:01:39.35 0:01:39.88      9935  54  38.283203 bavida4
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav jejich               100.00 0:01:43.71 0:01:43.92     10371  22   0.000000 jejih
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*              100.00 0:01:59.48 0:01:59.77     11948  30   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                99.66 0:01:59.81 0:02:00.38     11981  58   0.645508 davida
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav velice                38.38 0:02:01.60 0:02:01.96     12160  37  73.944336 dalice
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav cédé*                 55.90 0:02:01.87 0:02:02.25     12187  39  61.524414 eřečko
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                100.00 0:02:03.63 0:02:04.05     12363  43   0.000000 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav velk*                100.00 0:02:04.18 0:02:04.50     12418  33   0.000000 velkou
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav chvíle                23.09 0:02:05.00 0:02:05.21     12500  22  48.454590 Řťíli
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav další*                91.30 0:02:09.58 0:02:10.22     12958  65  18.101563 alším4
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hlavně               100.00 0:02:12.26 0:02:12.65     13226  40   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav pokud                 40.05 0:02:14.52 0:02:14.91     13452  40  67.149414 pokrl
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hlavně               100.00 0:02:17.08 0:02:17.53     13708  46   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav další*                45.01 0:02:18.10 0:02:18.47     13810  38  68.191406 alšíX
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hezky                 62.67 0:02:24.60 0:02:25.08     14460  49  52.264648 eski
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav tisíc*               100.00 0:02:27.38 0:02:27.70     14738  33   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav tisíc*               100.00 0:02:30.75 0:02:31.06     15075  32   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav cédé*                 37.33 0:02:31.11 0:02:31.31     15111  21  31.960938 éda
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav prostě               100.00 0:02:35.07 0:02:35.50     15507  44   0.000000 prosťe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav vidět                 85.90 0:02:47.32 0:02:47.58     16732  27  10.854004 viďe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav interpret*            93.15 0:02:49.83 0:02:50.30     16983  48  14.309570 interpret
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                 90.92 0:02:51.27 0:02:51.56     17127  30   7.627930 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               51.66 0:02:52.38 0:02:52.68     17238  31  48.341797 miXla
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                95.61 0:02:52.67 0:02:53.25     17267  59   8.251953 vavida
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav poměrně               95.47 0:02:53.58 0:02:54.06     17358  49   8.829102 pomňerňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hlavně                68.55 0:02:55.53 0:02:55.87     17553  35  35.222656 hlavň
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav takových             100.00 0:02:56.87 0:02:57.31     17687  45   0.000000 takovíX
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav čast*                100.00 0:02:58.47 0:02:58.77     17847  31   0.000000 často
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*              100.00 0:03:00.23 0:03:00.58     18023  36   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*               100.00 0:03:00.61 0:03:00.86     18061  26   0.000000 davit
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav anebo                 57.48 0:03:03.23 0:03:03.58     18323  36  43.160156 nebor
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav nějakým              100.00 0:03:03.66 0:03:03.96     18366  31   0.000000 ňejakím
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav měst*                 99.96 0:03:04.17 0:03:04.75     18417  59   0.073242 mňesto
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav takovej              100.00 0:03:07.68 0:03:08.06     18768  39   0.000000 takovej
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav Michal*               45.60 0:03:09.80 0:03:10.06     18980  27  41.887695 miXl
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav David*                80.78 0:03:10.10 0:03:10.37     19010  28  17.682129 vebedap
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav potom                 91.42 0:03:10.36 0:03:10.63     19036  28   6.904785 potom
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav skutečně             100.00 0:03:10.91 0:03:11.28     19091  38   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav věc*                  45.12 0:03:15.76 0:03:16.10     19576  35  53.780273 j4
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav kter*                100.00 0:03:22.13 0:03:22.48     20213  36   0.000000 které
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav potom                100.00 0:03:22.78 0:03:23.06     20278  29   0.000000 potom
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav česk*                100.00 0:03:24.40 0:03:24.83     20440  44   0.000000 českeé
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav prostě               100.00 0:03:25.41 0:03:25.71     20541  31   0.000000 prosťe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav hlavně               100.00 0:03:27.32 0:03:27.75     20732  44   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav letech                47.41 0:03:29.76 0:03:30.00     20976  25  36.810059 letrn
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav masakr*              100.00 0:03:30.01 0:03:30.38     21001  38   0.000000 masakr
d:\WordSpotting\DATA\Stream\HudMasakry_982a8fbe7de15ee8_360p.wav příště               100.00 0:03:31.26 0:03:31.56     21126  31   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vítej*               100.00 0:00:03.08 0:00:03.60       308  53   0.000000 vítejte
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav hudební*             100.00 0:00:03.76 0:00:04.17       376  42   0.000000 hudebňíX
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav masakr*               99.04 0:00:04.21 0:00:04.98       421  78   3.037109 masakreX
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav hudební*              93.95 0:00:06.98 0:00:07.33       698  36   7.893555 hudebňí
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav David*               100.00 0:00:08.21 0:00:08.52       821  32   0.000000 davit
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav pojďme               100.00 0:00:09.08 0:00:09.56       908  49   0.000000 poťme
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav věc*                  22.01 0:00:10.12 0:00:10.30      1012  19  35.093750 vicz
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav pojďme               100.00 0:00:21.83 0:00:22.22      2183  40   0.000000 poťme
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav jejich               100.00 0:00:24.31 0:00:24.66      2431  36   0.000000 jejiX
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav česk*                 96.75 0:00:28.13 0:00:28.51      2813  39   4.036133 českin
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vždy*                 23.05 0:00:28.97 0:00:29.32      2897  36  78.101563 ticki
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vlád*                 35.23 0:00:29.41 0:00:29.75      2941  35  63.472656 vládo
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav jemně                 39.05 0:00:31.83 0:00:32.15      3183  33  55.468750 emňe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav svah*                 30.02 0:00:34.06 0:00:34.43      3406  38  65.079102 svá
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav věc*                 100.00 0:00:47.61 0:00:47.88      4761  28   0.000000 vjec
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav kter*                 98.98 0:00:49.75 0:00:50.00      4975  26   0.751953 kerá
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vlastně               92.53 0:00:50.00 0:00:50.28      5000  29   7.169922 vlasťň
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav dnes*                 53.09 0:00:51.40 0:00:51.53      5140  14  16.886475 ne
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav nicméně               96.16 0:00:54.76 0:00:55.26      5476  51   7.076172 ňicméňe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vlastně               97.36 0:01:00.93 0:01:01.21      6093  29   2.425293 vlasňň
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav prostě                80.39 0:01:08.77 0:01:09.22      6877  46  29.016602 posťe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav kter*                100.00 0:01:28.91 0:01:29.25      8891  35   0.000000 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav ještě                 52.17 0:01:29.81 0:01:30.03      8981  23  31.806152 uošťí
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav pokud                100.00 0:01:31.15 0:01:31.42      9115  28   0.000000 pokut
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav chvíle                45.43 0:01:32.31 0:01:32.56      9231  26  40.109375 Xvího
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav másl*                 44.36 0:01:34.42 0:01:34.86      9442  45  70.103516 mááfsto
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav cédé*                 94.09 0:01:36.91 0:01:37.70      9691  80  17.019531 cédéčka
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav tisíc*                88.98 0:01:38.51 0:01:38.86      9851  36  11.185547 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav věc*                  32.26 0:01:58.18 0:01:58.33     11818  16  26.419434 jet
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav Praha                 97.05 0:01:59.10 0:01:59.42     11910  33   2.787109 praha
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav měst*                100.00 0:02:01.60 0:02:02.17     12160  58   0.000000 mňesto
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav Praha                 46.44 0:02:05.25 0:02:05.50     12525  26  39.369629 pro
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav všechn*               40.87 0:02:08.88 0:02:09.32     12888  45  85.150391 ťeX4
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav osobně                97.57 0:02:15.66 0:02:16.01     13566  36   2.814453 osobňe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav věc*                 100.00 0:02:20.58 0:02:20.87     14058  30   0.000000 vjeci
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vůbec                 23.59 0:02:21.92 0:02:22.12     14192  21  45.466797 obez
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav velmi                100.00 0:02:25.87 0:02:26.28     14587  42   0.000000 velmi
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav velk*                 29.65 0:02:27.15 0:02:27.41     14715  27  61.907227 orkou
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav protože              100.00 0:02:33.31 0:02:33.63     15331  33   0.000000 protože
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vlastně               42.34 0:02:34.28 0:02:34.55     15428  28  50.744141 jásňe
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav nejsou                30.12 0:02:35.23 0:02:35.48     15523  26  58.698730 nejse
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav tohle                 35.97 0:02:42.16 0:02:42.41     16216  26  47.063477 dlé
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav kter*                 27.93 0:02:43.73 0:02:43.95     16373  23  51.888184 ťerov
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav vidět                 38.62 0:02:43.91 0:02:44.12     16391  22  38.671875 vňit
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav česk*                100.00 0:02:44.37 0:02:44.82     16437  46   0.000000 české
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav svoji                 77.03 0:02:47.15 0:02:47.65     16715  51  32.956055 ovoji4
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav nebyl*                36.15 0:02:53.68 0:02:53.95     17368  28  49.162598 rbil
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav teďka                 90.65 0:02:56.70 0:02:57.18     17670  49  13.089844 teťka
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav David*                98.20 0:03:00.88 0:03:01.17     18088  30   1.726563 davida
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav takže                 42.31 0:03:03.77 0:03:04.17     18377  41  66.628906 tagŘ
d:\WordSpotting\DATA\Stream\HudMasakry_9a8fd7b165ab08d4_360p.wav příště                92.38 0:03:04.07 0:03:04.60     18407  54  13.104492 Říšťe
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vítej*                98.15 0:00:03.35 0:00:03.97       335  63   4.238281 títejte
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav hudební*              99.90 0:00:03.97 0:00:04.47       397  51   0.209961 gudebňíX
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav masakr*               93.65 0:00:04.46 0:00:04.91       446  46   9.390625 pasakr
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav dnešní*              100.00 0:00:05.80 0:00:06.15       580  36   0.000000 dnešňí
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vždy*                100.00 0:00:12.08 0:00:12.41      1208  34   0.000000 dicki
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav anebo                 42.45 0:00:15.41 0:00:15.71      1541  31  50.353516 ebo
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav způsob*               96.12 0:00:19.70 0:00:20.23      1970  54   7.679688 fpúsobú
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav médi*                100.00 0:00:21.38 0:00:21.73      2138  36   0.000000 médiji
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav nicméně              100.00 0:00:23.63 0:00:24.06      2363  44   0.000000 ňicméňe
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav letech               100.00 0:00:24.76 0:00:25.07      2476  32   0.000000 leteX
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav krásn*                40.33 0:00:28.38 0:00:28.82      2838  45  85.925781 krátta
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav velk*                 80.29 0:00:33.03 0:00:33.42      3303  40  22.075195 belka
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav kter*                100.00 0:00:33.93 0:00:34.30      3393  38   0.000000 která
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav dnes*                 55.53 0:00:35.71 0:00:35.98      3571  28  30.685547 mis0
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav otázk*               100.00 0:00:38.73 0:00:39.17      3873  45   0.000000 otáska
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vajíčk*               35.74 0:00:40.27 0:00:40.63      4027  37  77.108398 vaška
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takových              59.34 0:00:40.72 0:00:41.12      4072  41  60.373047 takovj
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav jaksi                 24.85 0:00:41.06 0:00:41.37      4106  32  68.386719 jakci
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vůbec                100.00 0:00:42.21 0:00:42.47      4221  27   0.000000 vúbec
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takto                 70.07 0:01:02.65 0:01:02.93      6265  29  25.144043 taktah
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav smlouv*               25.20 0:01:03.47 0:01:03.78      6347  32  87.518555 amovj
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav věc*                  24.50 0:01:03.70 0:01:03.95      6370  26  47.564453 véct
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav česk*                 92.72 0:01:04.23 0:01:04.58      6423  36   8.443359 českím
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav anebo                 61.08 0:01:08.15 0:01:08.63      6815  49  54.483398 inebo
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav osobně                42.95 0:01:10.51 0:01:10.85      7051  35  63.893555 oceabňu
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav řekn*                 42.57 0:01:12.05 0:01:12.32      7205  28  46.232422 řikll
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav rychle                45.29 0:01:31.27 0:01:31.50      9127  24  36.379395 riXle
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav letech               100.00 0:01:31.42 0:01:31.72      9142  31   0.000000 leteX
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav plán*                 21.79 0:01:31.92 0:01:32.17      9192  26  49.269531 pllav
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav stát*                 20.86 0:01:33.78 0:01:34.07      9378  30  56.977539 ftát
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav věc*                 100.00 0:01:35.93 0:01:36.08      9593  16   0.000000 bjec
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav dnes*                 38.93 0:01:44.62 0:01:45.02     10462  41  80.613281 ka
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav dnes*                 45.43 0:01:52.43 0:01:52.86     11243  44  76.403320 kal
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav smlouv*               38.88 0:01:54.61 0:01:54.91     11461  31  68.754395 mmlouvj
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav věc*                 100.00 0:01:54.85 0:01:55.10     11485  26   0.000000 vjec
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vlád*                 25.79 0:01:57.18 0:01:57.47     11718  30  62.334473 lab
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav kvůli                 72.61 0:02:02.43 0:02:02.63     12243  21  16.298828 kvúli
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav ukážem*              100.00 0:02:19.50 0:02:19.96     13950  47   0.000000 ukážeme
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav jaksi                 63.96 0:02:20.00 0:02:20.23     14000  24  25.229980 jakse
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav poměrně              100.00 0:02:20.43 0:02:20.87     14043  45   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav věc*                 100.00 0:02:21.56 0:02:21.83     14156  28   0.000000 vjec
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav někteří              100.00 0:02:23.81 0:02:24.26     14381  46   0.000000 ňekteří
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav možná                100.00 0:02:24.55 0:02:24.83     14455  29   0.000000 možná
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takže                 24.74 0:02:30.00 0:02:30.36     15000  37  79.026367 gi
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav znov*                 43.14 0:02:30.43 0:02:30.67     15043  25  39.805176 nvo
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav tohoto                25.53 0:02:30.47 0:02:30.77     15047  31  74.466309 
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav letech               100.00 0:02:38.51 0:02:38.76     15851  26   0.000000 leteX
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav nebyl*                37.20 0:02:40.37 0:02:40.62     16037  26  46.156738 bil
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav stran*                41.32 0:02:42.65 0:02:42.91     16265  27  51.641602 stanin
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav nebyl*                63.30 0:02:44.06 0:02:44.58     16406  53  55.227539 ebill
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takovej               89.64 0:02:44.70 0:02:45.01     16470  32  12.121094 takoji
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav pokud                 72.25 0:02:45.01 0:02:45.32     16501  32  25.256836 pokus
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav teďka                 21.80 0:02:48.17 0:02:48.50     16817  34  73.898438 teť
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav potom                 99.96 0:02:50.05 0:02:50.32     17005  28   0.028809 potom
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav tohle                 94.04 0:03:05.01 0:03:05.26     18501  26   4.380371 tohle
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takových              82.33 0:03:05.43 0:03:05.78     18543  36  23.059570 takoví
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav kter*                100.00 0:03:07.86 0:03:08.20     18786  35   0.000000 kterí
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav vůbec                 41.89 0:03:09.43 0:03:09.66     18943  24  38.644531 ubed
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav nejsou                30.80 0:03:09.68 0:03:09.96     18968  29  63.662598 nesouz
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav kter*                 45.43 0:03:12.83 0:03:13.08     19283  26  45.838867 tpirú
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav další*               100.00 0:03:13.08 0:03:13.45     19308  38   0.000000 další
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav takže                 36.89 0:03:16.62 0:03:16.96     19662  35  61.844727 tagče
d:\WordSpotting\DATA\Stream\HudMasakry_9d41f46c66eb9fb9_360p.wav příště                77.45 0:03:16.86 0:03:17.33     19686  48  35.185547 čišťe
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav vítej*               100.00 0:00:03.27 0:00:03.72       327  46   0.000000 vítejte
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav hudební*              80.89 0:00:03.87 0:00:04.31       387  45  34.402344 lebňíX
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav masakr*              100.00 0:00:04.30 0:00:04.80       430  51   0.000000 masakraeX
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav dnešní*              100.00 0:00:05.50 0:00:05.83       550  34   0.000000 dnešňí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav budem*                58.90 0:00:06.27 0:00:06.60       627  34  38.841797 bude
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav velk*                100.00 0:00:06.58 0:00:06.93       658  36   0.000000 velkí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav chvíle                87.20 0:00:08.40 0:00:08.65       840  26   9.405273 šíedi
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav měst*                 91.84 0:00:10.68 0:00:11.08      1068  41  10.767578 mňesckíX
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tohle                100.00 0:00:15.90 0:00:16.27      1590  38   0.000000 tohle
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav takovej              100.00 0:00:16.31 0:00:16.75      1631  45   0.000000 takovej
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav kter*                 64.31 0:00:17.83 0:00:18.05      1783  23  25.696777 kvrím
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav měst*                100.00 0:00:22.23 0:00:22.56      2223  34   0.000000 mňesto
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav takových             100.00 0:00:26.26 0:00:26.62      2626  37   0.000000 takovíX
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav vlastně               31.96 0:00:28.25 0:00:28.57      2825  33  82.672852 alasťňe
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav anebo                 63.82 0:00:29.76 0:00:30.20      2976  45  45.592773 nebo
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav anebo                 42.09 0:00:30.80 0:00:31.13      3080  34  56.751953 nebo
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tohle                 23.88 0:00:32.81 0:00:33.00      3281  20  42.628906 odle
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav potom                100.00 0:00:33.15 0:00:33.41      3315  27   0.000000 potom
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav téhle                 42.13 0:00:52.63 0:00:52.90      5263  28  44.556152 ihle
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav čast*                100.00 0:00:53.82 0:00:54.16      5382  35   0.000000 často
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav protože              100.00 0:00:54.92 0:00:55.36      5492  45   0.000000 protože
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav zároveň              100.00 0:00:55.97 0:00:56.30      5597  34   0.000000 zároveň
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav kter*                 43.12 0:00:59.62 0:00:59.86      5962  25  39.813965 cfarí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav nějakým               55.73 0:01:06.96 0:01:07.28      6696  33  53.791992 ňeekí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav interpret*           100.00 0:01:15.66 0:01:16.25      7566  60   0.000000 interpretu
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav pokud                 76.68 0:01:32.50 0:01:32.88      9250  39  26.118164 pokon
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav nějaká                40.66 0:01:36.56 0:01:36.81      9656  26  37.381348 ňá4
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav pojďme                97.96 0:01:55.52 0:01:55.96     11552  45   2.567383 pojťme
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tisíc*                85.54 0:01:57.60 0:01:57.85     11760  26  10.629395 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav jaksi                 42.22 0:02:00.38 0:02:00.58     12038  21  34.380859 žeksi
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav David*                89.80 0:02:02.83 0:02:03.10     12283  28   7.853516 davi
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav Debat*                30.27 0:02:03.08 0:02:03.40     12308  33  72.519531 demati
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tisíc*                84.98 0:02:04.26 0:02:04.52     12426  27  11.565918 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav David*                75.38 0:02:08.80 0:02:09.25     12880  46  40.989258 davide
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav Debat*                48.28 0:02:09.15 0:02:09.47     12915  33  55.861328 demate
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tisíc*                85.27 0:02:10.28 0:02:10.52     13028  25  10.309570 ťisíc
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav Michal*              100.00 0:02:11.60 0:02:12.03     13160  44   0.000000 miXal
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav David*                55.10 0:02:12.03 0:02:12.21     13203  19  23.572754 lavet
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav tisíc*                69.99 0:02:15.58 0:02:15.82     13558  25  21.004883 ťisCz
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav vlád*                 54.10 0:02:17.88 0:02:18.12     13788  25  32.130371 lára
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav naopak                66.27 0:02:24.35 0:02:24.92     14435  58  63.419922 noopak
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav čast*                100.00 0:02:27.68 0:02:27.96     14768  29   0.000000 často
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav Praze                 94.83 0:02:28.11 0:02:28.63     14811  53   7.775391 praze
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav důležit*             100.00 0:02:29.21 0:02:29.71     14921  51   0.000000 dúležití
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav nějakým               97.18 0:02:30.88 0:02:31.25     15088  38   3.807617 ňejakím
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav měst*                100.00 0:02:31.81 0:02:32.25     15181  45   0.000000 mňesto
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav takto                100.00 0:02:35.83 0:02:36.12     15583  30   0.000000 takto
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav prostě               100.00 0:02:36.15 0:02:36.45     15615  31   0.000000 prosťe
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav takovej              100.00 0:02:39.15 0:02:39.56     15915  42   0.000000 takovej
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav anebo                 83.41 0:02:40.41 0:02:40.77     16041  37  17.416992 nebo
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav takových             100.00 0:02:41.23 0:02:41.55     16123  33   0.000000 takovíX
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav peníze               100.00 0:02:42.67 0:02:43.00     16267  34   0.000000 peňíze
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav David*                21.25 0:02:43.08 0:02:43.30     16308  23  49.610840 avi
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav chvíle                24.04 0:02:43.36 0:02:43.58     16336  23  50.511230 pelí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav interpret*            93.60 0:02:43.58 0:02:44.05     16358  48  13.385742 interpret
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav jejich                37.75 0:02:48.56 0:02:48.85     16856  30  52.292969 ejiXr
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav kter*                 78.62 0:02:49.88 0:02:50.28     16988  41  24.695313 gerí
d:\WordSpotting\DATA\Stream\HudMasakry_de350d2ea4cca6fb_360p.wav příště                67.14 0:02:53.41 0:02:53.83     17341  43  46.007813 ťišťe4
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav tohle                 95.23 0:00:27.45 0:00:27.82      2745  38   5.170898 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav otázk*                86.87 0:00:30.53 0:00:30.93      3053  41  17.336914 otáske
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav tohle                 94.37 0:00:31.38 0:00:31.66      3138  29   4.531250 tohla
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dobře                 28.90 0:00:31.81 0:00:32.02      3181  22  44.791504 opře
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav proti                 33.63 0:00:32.85 0:00:33.28      3285  44  83.631836 proč
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nebyl*                21.65 0:00:36.78 0:00:37.01      3678  24  52.101074 nemeo
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                 40.21 0:00:38.62 0:00:38.88      3862  27  46.035156 firoj
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nějaká                94.65 0:00:40.96 0:00:41.36      4096  41   7.056641 ňejáká
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav letech                20.19 0:00:42.42 0:00:42.68      4242  27  61.457031 leti
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav opravdu              100.00 0:00:46.47 0:00:46.91      4647  45   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                100.00 0:00:52.01 0:00:52.38      5201  38   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav pojďme                94.16 0:00:57.73 0:00:58.22      5773  50   8.180664 pojťme
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav především            100.00 0:01:01.51 0:01:02.02      6151  52   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velk*                100.00 0:01:02.07 0:01:02.47      6207  41   0.000000 velkí
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav svoji                 49.90 0:01:04.93 0:01:05.17      6493  25  35.071289 svúj
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nějaká                40.60 0:01:18.08 0:01:18.43      7808  36  68.905273 ňejag
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav takže                100.00 0:01:19.77 0:01:20.06      7977  30   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav vlastně               81.80 0:01:20.23 0:01:20.60      8023  38  21.845703 vlasťňed
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dobře                100.00 0:01:20.57 0:01:20.86      8057  30   0.000000 dobře
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav především            100.00 0:01:22.41 0:01:22.91      8241  51   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav další*               100.00 0:01:28.16 0:01:28.48      8816  33   0.000000 další
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav věc*                  34.37 0:01:28.50 0:01:28.65      8850  16  25.594727 vje
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naprosto              67.49 0:01:38.47 0:01:38.98      9847  52  68.278320 aprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav další*                72.54 0:01:42.48 0:01:42.85     10248  38  28.832031 delší
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav proti                100.00 0:01:45.60 0:01:45.88     10560  29   0.000000 proťi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav někteří              100.00 0:01:47.53 0:01:47.93     10753  41   0.000000 ňekteří
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nejsou                41.57 0:01:50.03 0:01:50.30     11003  28  51.420898 nesou
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                100.00 0:01:58.18 0:01:58.47     11818  30   0.000000 kterou
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nějakým               41.89 0:02:05.42 0:02:05.76     12542  35  73.222656 ňejagsk
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav někdo                 31.26 0:02:06.12 0:02:06.48     12612  37  72.172852 ňit4na
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naopak               100.00 0:02:06.35 0:02:06.85     12635  51   0.000000 naopak
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                100.00 0:02:07.68 0:02:07.93     12768  26   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav pokud                100.00 0:02:14.96 0:02:15.27     13496  32   0.000000 pokud
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav minut*                44.25 0:02:17.48 0:02:17.78     13748  31  55.751953 menut
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav budem*                32.32 0:02:18.21 0:02:18.47     13821  27  52.111328 bude
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav chvíle               100.00 0:02:19.15 0:02:19.53     13915  39   0.000000 Xvíli
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav jednoho               50.14 0:02:24.18 0:02:24.57     14418  40  71.798828 jetua
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav věc*                 100.00 0:02:24.92 0:02:25.21     14492  30   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                 84.70 0:02:30.67 0:02:31.07     15067  41  17.666992 které
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav vlád*                 28.59 0:02:31.12 0:02:31.33     15112  22  44.987305 vlera
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav způsob*               56.34 0:02:34.81 0:02:35.22     15481  42  66.797852 púsobí
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav tohle                 35.37 0:02:35.78 0:02:36.12     15578  35  63.333984 tone
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dokonce               34.43 0:02:37.56 0:02:37.90     15756  35  82.614258 dokodul
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav prostě               100.00 0:02:38.66 0:02:39.05     15866  40   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav malinko               80.35 0:02:39.12 0:02:39.50     15912  39  27.407227 mariNko
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav prostě               100.00 0:02:45.21 0:02:45.61     16521  41   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav vlastně               56.77 0:02:47.80 0:02:48.23     16780  44  62.246094 vlasťňe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav stran*                66.31 0:02:49.46 0:02:49.80     16946  35  42.444336 stranu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav skutečně             100.00 0:02:53.75 0:02:54.28     17375  54   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                100.00 0:02:54.32 0:02:54.58     17432  27   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav především            100.00 0:03:00.01 0:03:00.51     18001  51   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                100.00 0:03:00.53 0:03:00.83     18053  31   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav především            100.00 0:03:04.08 0:03:04.61     18408  54   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                 94.84 0:03:08.60 0:03:08.91     18860  32   4.691406 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naftov*               99.59 0:03:11.07 0:03:11.57     19107  51   0.848633 naftovou
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav česk*                 24.22 0:03:11.61 0:03:11.93     19161  33  71.609375 šestve
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav třicet*               78.12 0:03:14.36 0:03:14.65     19436  30  21.001465 tŘizet
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav budem*                41.74 0:03:18.12 0:03:18.40     19812  29  46.901855 gudel
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav vůbec                 26.52 0:03:21.68 0:03:21.96     20168  29  59.147949 vúbet
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav jednoho               65.45 0:03:23.56 0:03:23.83     20356  28  35.762695 jednuo
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                 35.04 0:03:24.30 0:03:24.53     20430  24  45.470703 beni
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav korun*                49.98 0:03:24.65 0:03:24.88     20465  24  35.013672 konun
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dnes*                 55.79 0:03:24.85 0:03:25.05     20485  21  22.549316 nest
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav evrop*                56.30 0:03:26.13 0:03:26.48     20613  36  50.697266 troXu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav takže                 61.52 0:03:27.32 0:03:27.91     20732  60  64.644531 že
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav volb*                 35.42 0:03:30.12 0:03:30.52     21012  41  74.592773 uba5
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav takovej               47.88 0:03:31.98 0:03:32.31     21198  34  63.328125 takové
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav evrop*                81.08 0:03:32.42 0:03:32.98     21242  57  34.805664 propu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav přesně                30.42 0:03:33.57 0:03:33.93     21357  37  83.494141 pŘestn
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velice                73.12 0:03:36.03 0:03:36.36     21603  34  29.035156 aňco
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav opravdu               60.87 0:03:36.36 0:03:36.65     21636  30  42.262207 krode
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav minut*                21.13 0:03:41.28 0:03:41.58     22128  31  69.009277 vinutf
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav kter*                 98.23 0:03:50.71 0:03:51.07     23071  37   1.858398 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav jemně                 69.89 0:03:51.72 0:03:51.96     23172  25  21.074219 jéemňe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav plyn*                 83.63 0:03:52.33 0:03:52.57     23233  25  11.458008 plinu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                 88.21 0:03:55.41 0:03:55.68     23541  28   9.493652 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav plyn*                 77.47 0:03:56.87 0:03:57.16     23687  30  18.925781 plinu
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav takže                100.00 0:03:57.95 0:03:58.23     23795  29   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                100.00 0:03:58.92 0:03:59.20     23892  29   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav jemně                 79.79 0:03:59.46 0:03:59.88     23946  43  24.762695 jemňe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav rychle                62.10 0:04:03.68 0:04:03.92     24368  25  26.532227 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav měst*                 21.42 0:04:07.40 0:04:07.66     24740  27  60.505859 vňes
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav vlád*                 83.14 0:04:08.08 0:04:08.35     24808  28  12.983887 vlád
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav pokud                 91.87 0:04:20.08 0:04:20.45     26008  38   8.532227 pokut
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav stran*                22.41 0:04:20.41 0:04:20.67     26041  27  68.275879 tena
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naopak               100.00 0:04:20.55 0:04:20.93     26055  39   0.000000 naopak
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav budem*                37.03 0:04:23.85 0:04:24.21     26385  37  75.558594 didemid
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dnes*                 35.85 0:04:27.08 0:04:27.37     26708  30  46.186035 trest
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nikdy                 34.72 0:04:29.08 0:04:29.33     26908  26  47.977539 igdi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav možná                100.00 0:04:30.12 0:04:30.42     27012  31   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav věc*                  99.98 0:04:30.58 0:04:30.87     27058  30   0.013184 vjeci
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav tohoto                70.36 0:04:35.00 0:04:35.26     27500  27  26.085938 doloto
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav nějakým               31.30 0:04:36.48 0:04:36.78     27648  31  77.285645 ňerkím
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav letech                39.00 0:04:44.87 0:04:45.15     28487  29  49.106934 letre
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav čast*                 43.76 0:04:45.45 0:04:45.92     28545  48  76.766602 dasto
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav takže                 42.38 0:04:46.68 0:04:46.93     28668  26  42.354004 takj
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav tohoto                24.51 0:04:46.97 0:04:47.26     28697  30  72.473633 tohon
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav cédé*                 51.70 0:04:48.52 0:04:48.96     28852  45  78.251953 évečko
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav možná                 45.30 0:04:49.42 0:04:49.78     28942  37  57.435547 úšnáh
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav možná                100.00 0:04:52.50 0:04:52.78     29250  29   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav případě               97.48 0:04:54.85 0:04:55.30     29485  46   4.190430 pŘípaďe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav velmi                100.00 0:04:58.62 0:04:58.88     29862  27   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav zároveň               98.32 0:05:02.81 0:05:03.22     30281  42   2.571289 zároveň
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav dokonce              100.00 0:05:07.11 0:05:07.55     30711  45   0.000000 dokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naftov*              100.00 0:05:08.07 0:05:08.48     30807  42   0.000000 naftoví
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav další*                94.14 0:05:10.46 0:05:10.81     31046  36   6.796875 delšíX
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav měst*                 97.25 0:05:12.20 0:05:12.72     31220  53   4.736328 mňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_466c2cc868c34ab7_360p.wav naprosto             100.00 0:05:18.25 0:05:18.80     31825  56   0.000000 naprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav evrop*                97.85 0:00:12.31 0:00:12.68      1231  38   2.997070 evropje
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav jmenuje               38.41 0:00:13.85 0:00:14.21      1385  37  73.904297 minulé
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav velice                74.73 0:00:28.63 0:00:29.05      2863  43  34.372070 nolice
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav velmi                100.00 0:00:31.70 0:00:31.93      3170  24   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 86.68 0:00:36.63 0:00:36.93      3663  31  11.651855 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav důležit*             100.00 0:00:40.23 0:00:40.80      4023  58   0.000000 dúležitá
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                 93.18 0:00:43.85 0:00:44.13      4385  29   5.728516 které
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vlastně              100.00 0:00:51.48 0:00:51.78      5148  31   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav jednoho               64.87 0:00:51.82 0:00:52.23      5182  42  53.751953 jedno
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav protože              100.00 0:00:56.96 0:00:57.36      5696  41   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 22.66 0:01:01.41 0:01:01.63      6141  23  51.431641 tone
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav nejsou                26.16 0:01:03.97 0:01:04.25      6397  29  67.936523 lejsou
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav úpln*                 94.77 0:01:06.78 0:01:07.12      6678  35   5.125977 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav rozhodně             100.00 0:01:10.97 0:01:11.47      7097  51   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav způsob*               46.93 0:01:11.62 0:01:12.02      7162  41  78.802734 púsobí
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                 61.11 0:01:13.55 0:01:13.83      7355  29  32.669922 které
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav určitě               100.00 0:01:15.52 0:01:15.98      7552  47   0.000000 určiťe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav možná                100.00 0:01:20.80 0:01:21.12      8080  33   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 92.28 0:01:21.96 0:01:22.25      8196  30   6.482422 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav poměrně              100.00 0:01:24.40 0:01:24.77      8440  38   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav svoji                 58.86 0:01:29.05 0:01:29.36      8905  32  37.437500 svoje
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav někteří              100.00 0:01:30.56 0:01:31.07      9056  52   0.000000 ňekteří
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav možná                100.00 0:01:31.65 0:01:31.93      9165  29   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vlád*                 97.98 0:01:35.91 0:01:36.23      9591  33   2.185547 vládne
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav David*                38.75 0:01:36.40 0:01:36.66      9640  27  47.162598 daviž
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                100.00 0:01:47.95 0:01:48.22     10795  28   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vždy*                100.00 0:01:49.43 0:01:49.86     10943  44   0.000000 vždicki
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav zároveň              100.00 0:01:51.63 0:01:52.11     11163  49   0.000000 zároveň
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 35.17 0:01:52.15 0:01:52.43     11215  29  54.460938 tooled
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav dobře                100.00 0:01:53.80 0:01:54.07     11380  28   0.000000 dobře
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav především            100.00 0:01:55.92 0:01:56.55     11592  64   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 95.93 0:02:02.76 0:02:03.00     12276  25   2.852051 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav zároveň              100.00 0:02:03.22 0:02:03.66     12322  45   0.000000 zároveň
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav velmi                100.00 0:02:04.02 0:02:04.40     12402  39   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vidět                 24.03 0:02:06.92 0:02:07.15     12692  24  50.518555 rďid
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav potom                100.00 0:02:08.45 0:02:08.77     12845  33   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav rychle                75.69 0:02:09.88 0:02:10.20     12988  33  22.123047 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav evrop*                59.35 0:02:12.47 0:02:12.76     13247  30  43.904785 avrlsk
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav prostě                98.22 0:02:14.60 0:02:14.92     13460  33   1.920898 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                 89.93 0:02:20.11 0:02:20.43     14011  33   9.513672 které
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav jemně                 68.86 0:02:22.61 0:02:22.93     14261  33  29.425781 jemňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav možná                 52.29 0:02:24.03 0:02:24.31     14403  29  38.409668 možné
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav život*               100.00 0:02:31.72 0:02:32.11     15172  40   0.000000 životu
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav uvidíte               45.81 0:02:53.36 0:02:53.72     17336  37  73.157227 vziďíte
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav David*                20.21 0:03:00.87 0:03:01.10     18087  24  53.062012 nevi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav ještě                 85.50 0:03:02.71 0:03:02.98     18271  28  11.670898 vešťi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav samozřejmě            75.72 0:03:05.56 0:03:06.13     18556  58  68.471680 samozřejmh
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav možná                 38.73 0:03:06.47 0:03:06.73     18647  27  47.179688 možno
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav velmi                100.00 0:03:12.56 0:03:12.88     19256  33   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav téhle                100.00 0:03:14.81 0:03:15.18     19481  38   0.000000 téhle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav velmi                100.00 0:03:28.26 0:03:28.53     20826  28   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                 95.25 0:03:30.37 0:03:30.66     21037  30   3.987305 které
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav ulic*                 65.50 0:03:35.38 0:03:35.83     21538  46  44.676758 olici
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav téhle                 37.75 0:03:36.25 0:03:36.52     21625  28  50.114746 iehle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav čast*                100.00 0:03:36.82 0:03:37.12     21682  31   0.000000 často
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav jinak                 30.02 0:03:45.56 0:03:45.88     22556  33  66.129883 jjag
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav přesně                46.92 0:03:49.11 0:03:49.43     22911  33  57.329102 pŘes
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav rozhodně             100.00 0:03:54.60 0:03:54.97     23460  38   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav krásn*                99.96 0:04:02.27 0:04:02.75     24227  49   0.057617 krásňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vždy*                100.00 0:04:05.46 0:04:05.81     24546  36   0.000000 vždicki
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav pokud                 52.53 0:04:12.38 0:04:12.67     25238  30  39.873047 poku
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav úpln*                 31.20 0:04:14.80 0:04:15.06     25480  27  52.979004 uplné
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav pokud                 85.30 0:04:24.42 0:04:24.76     26442  35  14.409180 pokut
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav nejsou                75.31 0:04:24.87 0:04:25.20     26487  34  26.668945 lejsou
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav jaksi                 40.72 0:04:25.58 0:04:25.96     26558  39  64.324219 eksi
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav možná                100.00 0:04:26.07 0:04:26.45     26607  39   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                 38.14 0:04:34.41 0:04:34.65     27441  25  43.299316 teríX
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohoto                34.10 0:04:38.45 0:04:38.75     27845  31  65.898926 tohodd
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav žádn*                100.00 0:04:46.53 0:04:46.93     28653  41   0.000000 žádná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav žádn*                100.00 0:04:48.83 0:04:49.17     28883  35   0.000000 žádná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav žádn*                 95.38 0:04:52.46 0:04:52.82     29246  37   4.850586 žádná
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav kter*                100.00 0:04:53.80 0:04:54.06     29380  27   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vlastně               97.03 0:04:55.80 0:04:56.11     29580  32   3.092773 vlasťňe
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav vůbec                100.00 0:04:56.13 0:04:56.40     29613  28   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav tohle                 94.19 0:04:58.43 0:04:58.91     29843  49   7.926758 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_62c88a041978d46e_240p.wav nějaká                31.04 0:05:00.60 0:05:00.97     30060  38  85.513672 ňejak
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                100.00 0:00:08.42 0:00:08.92       842  51   0.000000 dneska
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:00:10.02 0:00:10.36      1002  35   0.000000 kterím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav velmi                 29.77 0:00:14.05 0:00:14.38      1405  34  68.829102 béev
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 71.64 0:00:14.77 0:00:14.98      1477  22  17.866699 kera
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav minut*                33.88 0:00:15.58 0:00:15.81      1558  24  43.968262 minul
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:00:17.25 0:00:17.53      1725  29   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:00:20.50 0:00:20.88      2050  39   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav myslíte              100.00 0:00:23.81 0:00:24.33      2381  53   0.000000 mislíte
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ještě                100.00 0:00:26.66 0:00:26.92      2666  27   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                100.00 0:00:26.95 0:00:27.22      2695  28   0.000000 dneska
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav rozhodně             100.00 0:00:29.08 0:00:29.50      2908  43   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože               87.52 0:00:30.90 0:00:31.35      3090  46  20.779297 prtože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                 95.91 0:00:31.40 0:00:31.71      3140  32   3.724609 todle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jejich                99.44 0:00:38.03 0:00:38.35      3803  33   0.508789 jejih
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vidět                100.00 0:00:39.50 0:00:39.80      3950  31   0.000000 viďet
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně              100.00 0:00:41.40 0:00:41.71      4140  32   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav česk*                 88.36 0:00:42.36 0:00:42.80      4236  45  16.765625 česku
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:00:48.85 0:00:49.18      4885  34   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav přístup*              80.43 0:00:54.10 0:00:54.85      5410  76  59.689453 pŘistupu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějakým               93.21 0:00:57.43 0:00:57.93      5743  51  12.530273 ňejakím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav letech                52.34 0:00:58.33 0:00:58.56      5833  24  31.695313 letij
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nebyl*               100.00 0:01:03.18 0:01:03.77      6318  60   0.000000 nebil
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                100.00 0:01:04.46 0:01:04.78      6446  33   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vítej*                23.92 0:01:05.97 0:01:06.30      6597  34  71.899414 víte
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                 93.06 0:01:07.05 0:01:07.31      6705  27   5.343750 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  42.40 0:01:10.08 0:01:10.31      7008  24  32.833008 vic
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vždy*                 33.54 0:01:12.76 0:01:13.06      7276  31  58.156250 icki
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:01:13.88 0:01:14.23      7388  36   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:01:15.10 0:01:15.37      7510  28   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav evrop*                98.97 0:01:15.65 0:01:15.98      7565  34   1.299805 evropje
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                100.00 0:01:25.42 0:01:25.68      8542  27   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jinak                100.00 0:01:25.70 0:01:26.00      8570  31   0.000000 jinak
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 74.43 0:01:28.08 0:01:28.77      8808  70  50.109375 nebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 83.67 0:01:29.70 0:01:30.10      8970  41  18.865234 hnebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě                97.91 0:01:32.16 0:01:32.73      9216  58   3.936523 trosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav trošk*               100.00 0:01:37.31 0:01:37.66      9731  36   0.000000 trošku
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav naprosto              54.75 0:01:41.67 0:01:42.02     10167  36  65.619141 nprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav evrop*                76.46 0:01:45.20 0:01:45.60     10520  41  34.958984 evropsk
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 81.83 0:01:46.87 0:01:47.16     10687  30  15.258789 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takovej               47.43 0:01:51.25 0:01:51.58     11125  34  66.235352 takové
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:01:53.71 0:01:54.01     11371  31   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě           100.00 0:01:54.37 0:01:54.92     11437  56   0.000000 samozřejňňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav velmi                 99.39 0:01:58.75 0:01:59.06     11875  32   0.559570 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav zároveň               95.28 0:02:00.11 0:02:00.60     12011  50   8.497070 zároveň
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jakoby                24.33 0:02:02.16 0:02:02.47     12216  32  78.700195 jakot
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav všechn*               94.82 0:02:07.21 0:02:07.55     12721  35   5.802734 fšeXno
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav velmi                 90.42 0:02:08.61 0:02:08.82     12861  22   6.035156 elmi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                 29.60 0:02:08.73 0:02:09.06     12873  34  57.023438 mes
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jaksi                 52.36 0:02:09.22 0:02:09.41     12922  20  26.678711 eks
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ještě                100.00 0:02:11.91 0:02:12.16     13191  26   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                 97.35 0:02:12.37 0:02:12.76     13237  40   2.966797 úplňi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav hlavně               100.00 0:02:13.75 0:02:14.05     13375  31   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 79.60 0:02:14.58 0:02:14.81     13458  24  13.564453 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 94.88 0:02:23.20 0:02:23.45     14320  26   3.760742 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jinak                 30.45 0:02:27.27 0:02:27.48     14727  22  43.815430 ína
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dokonce              100.00 0:02:30.51 0:02:30.90     15051  40   0.000000 dokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vítej*                34.74 0:02:35.95 0:02:36.23     15595  29  54.822266 víte
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 48.55 0:02:38.07 0:02:38.26     15807  20  28.812500 vagž
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:02:38.65 0:02:38.91     15865  27   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 29.16 0:02:42.72 0:02:42.97     16272  26  52.066895 takšn
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav někdo                100.00 0:02:45.73 0:02:46.06     16573  34   0.000000 ňegdo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav možná                100.00 0:02:47.07 0:02:47.36     16707  30   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                 89.49 0:02:48.01 0:02:48.20     16801  20   5.043945 dne
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnešní*               99.88 0:02:48.76 0:02:49.05     16876  30   0.113770 dnešňí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav způsob*               65.17 0:02:51.63 0:02:52.03     17163  41  57.464844 tpúsobek
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:02:52.43 0:02:52.83     17243  41   0.000000 kterím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav možná                100.00 0:02:54.85 0:02:55.13     17485  29   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                100.00 0:02:55.63 0:02:55.87     17563  25   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  93.79 0:02:56.01 0:02:56.33     17601  33   5.865234 vjeci
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav život*                51.08 0:02:57.10 0:02:57.43     17710  34  47.946289 žot4
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě            99.22 0:03:02.90 0:03:03.41     18290  52   2.117188 samozřejjmňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:03:06.08 0:03:06.38     18608  31   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 86.29 0:03:15.47 0:03:15.76     19547  30  11.519043 teré
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takovej               29.92 0:03:19.98 0:03:20.32     19998  35  88.299805 takové
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav trošk*                29.80 0:03:20.33 0:03:20.63     20033  31  70.204590 trokú
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav měst*                 94.14 0:03:21.22 0:03:21.67     20122  46   8.679688 mňeské
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav žádn*                100.00 0:03:21.86 0:03:22.23     20186  38   0.000000 žádní
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav velk*                100.00 0:03:22.26 0:03:22.48     20226  23   0.000000 velkí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                100.00 0:03:24.51 0:03:24.76     20451  26   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav měst*                 99.62 0:03:24.80 0:03:25.41     20480  62   0.763672 ňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                 91.33 0:03:26.68 0:03:27.06     20668  39   9.411133 úpldá
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav především            100.00 0:03:29.07 0:03:29.71     20907  65   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dobře                 78.07 0:03:31.93 0:03:32.23     21193  31  19.185059 robře
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav způsob*               99.23 0:03:33.81 0:03:34.38     21381  58   1.624023 spúsobu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:03:35.70 0:03:35.92     21570  23   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav měst*                 96.03 0:03:41.07 0:03:41.47     22107  41   5.246094 mňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:03:41.66 0:03:41.95     22166  30   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav především            100.00 0:03:42.27 0:03:42.68     22227  42   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav možná                 42.14 0:03:44.43 0:03:44.80     22443  38  60.753906 možn
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav pokud                100.00 0:03:47.66 0:03:48.01     22766  36   0.000000 pokud
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav budem*                24.31 0:03:49.17 0:03:49.36     22917  20  42.384277 bude
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože               63.48 0:03:49.82 0:03:50.17     22982  36  47.663086 protluži
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                100.00 0:03:53.30 0:03:53.60     23330  31   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě           100.00 0:03:53.77 0:03:54.20     23377  44   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  85.79 0:03:56.32 0:03:56.61     23632  30  10.229980 bjeC
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 29.49 0:04:03.12 0:04:03.38     24312  27  54.291504 tagie
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                 100.00 0:04:06.76 0:04:06.98     24676  23   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nechat                98.08 0:04:11.15 0:04:11.47     25115  33   1.818359 nneXat
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav stát*                 96.98 0:04:11.52 0:04:11.95     25152  44   3.171875 stát
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav pokud                 98.44 0:04:14.12 0:04:14.57     25412  46   2.021484 pokut
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takovej               32.63 0:04:15.13 0:04:15.43     25513  31  75.791504 takovo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  49.74 0:04:15.83 0:04:16.15     25583  33  45.736328 bjecí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav další*               100.00 0:04:19.95 0:04:20.25     25995  31   0.000000 další
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav David*                46.10 0:04:20.76 0:04:21.03     26076  28  43.387207 avit
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nikdy                 42.62 0:04:22.05 0:04:22.31     26205  27  44.183105 ňigde
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě           100.00 0:04:22.33 0:04:22.82     26233  50   0.000000 samozřejňňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nechat                85.92 0:04:28.56 0:04:28.86     26856  31  12.322266 deXat
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav stát*                 90.95 0:04:28.86 0:04:29.21     26886  36   7.876953 sdád
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav opravdu              100.00 0:04:29.17 0:04:29.61     26917  45   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dokonce               97.17 0:04:30.67 0:04:30.97     27067  31   3.185547 rokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav další*                51.80 0:04:34.37 0:04:34.68     27437  32  43.859375 delší
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jaksi                 50.06 0:04:37.27 0:04:37.55     27727  29  40.197754 aksi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav někdy                 30.56 0:04:37.53 0:04:37.77     27753  25  48.609375 ňegde
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav chvíle               100.00 0:04:41.06 0:04:41.56     28106  51   0.000000 Xvíli
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jejich                34.34 0:04:41.88 0:04:42.13     28188  26  48.262207 její
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav všechn*              100.00 0:04:48.26 0:04:48.58     28826  33   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                 68.32 0:04:48.88 0:04:49.26     28888  39  34.377930 otomz
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav velk*                 70.58 0:04:50.11 0:04:50.42     29011  32  30.599609 akím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav opravdu              100.00 0:04:57.40 0:04:57.77     29740  38   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně               71.89 0:04:57.91 0:04:58.26     29791  36  32.613281 vlasťňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav čast*                100.00 0:04:59.60 0:04:59.93     29960  34   0.000000 často
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:05:03.61 0:05:03.97     30361  37   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav skutečně              99.75 0:05:05.05 0:05:05.55     30505  51   0.521484 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav přesně               100.00 0:05:07.95 0:05:08.38     30795  44   0.000000 pŘesňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                 46.15 0:05:11.03 0:05:11.22     31103  20  25.846680 dnes
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav Praha                 27.87 0:05:12.72 0:05:12.98     31272  27  55.540527 prahi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav Praha                 24.18 0:05:14.80 0:05:15.03     31480  24  53.075684 prah
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav Praha                 47.73 0:05:17.85 0:05:18.13     31785  29  43.909668 panaa
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ulic*                 52.44 0:05:18.31 0:05:18.72     31831  42  56.600586 lice0
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav plyn*                 50.82 0:05:19.35 0:05:19.71     31935  37  51.635742 plidenik
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav Praha                100.00 0:05:22.91 0:05:23.16     32291  26   0.000000 praha
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav minut*                21.75 0:05:25.45 0:05:25.66     32545  22  49.300293 imoor
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějakým               65.27 0:05:25.63 0:05:26.01     32563  39  37.676758 ňákíh
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 86.33 0:05:27.36 0:05:27.60     32736  25   9.567383 tagžeí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav minut*                37.92 0:05:31.15 0:05:31.41     33115  27  47.801270 minul
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 34.25 0:05:31.82 0:05:32.05     33182  24  43.727051 pežd
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dálnic*               76.80 0:05:34.80 0:05:35.27     33480  48  40.718750 dálňic
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav další*                96.16 0:05:36.62 0:05:37.00     33662  39   4.756836 dalším
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav situac*               59.40 0:05:36.98 0:05:37.43     33698  46  67.606445 situase
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože               99.04 0:05:37.70 0:05:37.98     33770  29   1.032715 protož
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jemně                 42.53 0:05:46.33 0:05:46.80     34633  48  76.430664 imňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějakým               99.72 0:05:51.92 0:05:52.52     35192  61   0.488281 ňeákím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav řekn*                100.00 0:05:52.53 0:05:53.02     35253  50   0.000000 řekňeme
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dálnic*               97.46 0:05:55.26 0:05:55.76     35526  51   4.688477 dálňice
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ulic*                 43.46 0:05:56.01 0:05:56.50     35601  50  79.153320 lice5
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 99.14 0:05:58.66 0:05:58.88     35866  23   0.568848 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě                99.23 0:06:00.11 0:06:00.53     36011  43   1.084961 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:06:02.95 0:06:03.27     36295  33   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takových              43.15 0:06:06.71 0:06:06.97     36671  27  56.284668 takovít
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav měst*                 54.07 0:06:07.40 0:06:07.66     36740  27  40.414551 mňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav třicet*               99.78 0:06:07.87 0:06:08.47     36787  61   0.436523 pŘicet
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně               55.22 0:06:10.10 0:06:10.38     37010  29  42.992188 goasťem
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě           100.00 0:06:12.36 0:06:12.95     37236  60   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě               100.00 0:06:12.98 0:06:13.32     37298  35   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav třicet*              100.00 0:06:13.56 0:06:13.93     37356  38   0.000000 tŘicet
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:06:14.35 0:06:14.63     37435  29   0.000000 todle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav třicet*               99.42 0:06:15.13 0:06:15.46     37513  34   0.621094 tŘice
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav pokud                100.00 0:06:17.42 0:06:17.76     37742  35   0.000000 pokud
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tisíc*                60.53 0:06:20.27 0:06:20.77     38027  51  72.818359 tvucemí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takových              67.87 0:06:21.27 0:06:21.57     38127  31  36.147461 takoví
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jakoby                88.76 0:06:23.93 0:06:24.28     38393  36  13.041016 jakobi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                 100.00 0:06:24.53 0:06:24.72     38453  20   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějaká                51.74 0:06:24.86 0:06:25.08     38486  23  36.680664 ňejak
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav jaksi                 29.98 0:06:28.10 0:06:28.37     38810  28  56.366211 az5
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně               98.85 0:06:29.45 0:06:29.67     38945  23   0.871582 vloaze
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav určitě                50.86 0:06:34.62 0:06:34.88     39462  27  43.245117 rčito
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takto                100.00 0:06:36.68 0:06:36.92     39668  25   0.000000 takto
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ještě                 48.60 0:06:38.78 0:06:39.02     39878  25  35.977539 ešťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně               22.18 0:06:39.32 0:06:39.58     39932  27  68.479004 dlasl
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav svoji                 63.44 0:06:41.85 0:06:42.23     40185  39  40.947266 svúj
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:06:45.81 0:06:46.16     40581  36   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ještě                 49.69 0:06:48.46 0:06:48.75     40846  30  42.261719 ešťef
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 61.13 0:06:53.17 0:06:53.43     41317  27  29.926270 které
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav příště                71.47 0:06:53.62 0:06:54.01     41362  40  36.517578 pŘíšťí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 96.98 0:06:54.96 0:06:55.27     41496  32   2.750977 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav budem*                86.45 0:06:55.48 0:06:55.77     41548  30  13.009277 budeme
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože               98.02 0:06:56.67 0:06:57.01     41667  35   2.490234 prrotože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav Praze                 97.18 0:07:00.43 0:07:00.75     42043  33   2.566406 praze
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav rychle               100.00 0:07:04.96 0:07:05.30     42496  35   0.000000 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav rychle                76.14 0:07:06.27 0:07:06.51     42627  25  16.701660 riXla
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějakým               55.02 0:07:08.33 0:07:08.71     42833  39  62.750000 ňejakí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav opravdu               76.51 0:07:11.51 0:07:12.11     43151  61  51.790039 pravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě               100.00 0:07:15.68 0:07:16.08     43568  41   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav všechn*               83.34 0:07:20.30 0:07:20.65     44030  36  19.323242 fšiXni
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  32.12 0:07:23.00 0:07:23.27     44300  28  54.642578 bjeci
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takovej              100.00 0:07:24.75 0:07:25.13     44475  39   0.000000 takovej
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav řekn*                 50.09 0:07:25.20 0:07:25.43     44520  24  34.934082 řekl
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě               100.00 0:07:30.86 0:07:31.23     45086  38   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 98.25 0:07:31.28 0:07:32.07     45128  80   3.927734 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav budem*                20.31 0:07:32.88 0:07:33.10     45288  23  50.206543 bude
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 34.83 0:07:34.43 0:07:34.70     45443  28  50.180176 nebu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 37.50 0:07:36.60 0:07:36.83     45660  24  43.749512 enebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav věc*                  61.24 0:07:38.40 0:07:38.57     45840  18  17.443359 vječ
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vždy*                 20.66 0:07:40.53 0:07:40.70     46053  18  33.321777 ždi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nebyl*                57.94 0:07:44.45 0:07:44.72     46445  28  38.697754 nebudou
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějaká                59.59 0:07:45.56 0:07:45.92     46556  37  36.365234 háka
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav přesně                87.24 0:07:46.45 0:07:46.78     46645  34  14.286133 řezňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vítej*                62.42 0:07:48.60 0:07:48.98     46860  39  42.094727 vítej
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kvůli                 65.96 0:07:49.70 0:07:50.16     46970  47  45.271484 vúli
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nějakým               39.65 0:07:51.01 0:07:51.31     47101  31  67.891113 ňejakn
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav zákon*                76.19 0:07:54.01 0:07:54.42     47401  42  28.337891 žáákl
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:08:00.95 0:08:01.31     48095  37   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                100.00 0:08:02.32 0:08:02.66     48232  35   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav úpln*                100.00 0:08:02.85 0:08:03.17     48285  33   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                 20.77 0:08:05.52 0:08:05.82     48552  31  69.323242 otomhl
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav opravdu              100.00 0:08:09.02 0:08:09.37     48902  36   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                100.00 0:08:12.56 0:08:12.92     49256  37   0.000000 anebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 68.96 0:08:15.33 0:08:15.57     49533  25  24.833984 kterím
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav téhle                100.00 0:08:17.71 0:08:18.03     49771  33   0.000000 téhle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav opravdu              100.00 0:08:20.17 0:08:20.57     50017  41   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav skutečně             100.00 0:08:20.61 0:08:21.07     50061  47   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav abychom               40.48 0:08:22.12 0:08:22.50     50212  39  73.801758 ábiXto
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav možná                100.00 0:08:23.03 0:08:23.36     50303  34   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 75.55 0:08:24.23 0:08:24.76     50423  54  36.804688 nebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav někteří               50.17 0:08:26.45 0:08:26.85     50645  41  73.997070 ďikteří
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože              100.00 0:08:28.36 0:08:28.80     50836  45   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:08:28.93 0:08:29.16     50893  24   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože               89.96 0:08:29.67 0:08:30.02     50967  36  13.102539 protožu
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav někdy                100.00 0:08:34.81 0:08:35.05     51481  25   0.000000 ňegdi
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav svoji                 98.94 0:08:35.28 0:08:35.56     51528  29   0.849609 svoji
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:08:41.41 0:08:41.81     52141  41   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav stran*                63.19 0:08:43.67 0:08:43.96     52367  30  35.336426 stran
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav možná                100.00 0:08:46.22 0:08:46.63     52622  42   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože              100.00 0:08:47.90 0:08:48.32     52790  43   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 45.81 0:08:51.77 0:08:52.07     53177  31  47.419434 zgere
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože              100.00 0:08:54.52 0:08:55.00     53452  49   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav další*                88.93 0:08:59.66 0:08:59.95     53966  30   9.296387 delší
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:09:00.91 0:09:01.17     54091  27   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                100.00 0:09:04.45 0:09:04.72     54445  28   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tisíc*               100.00 0:09:07.26 0:09:07.58     54726  33   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                100.00 0:09:11.90 0:09:12.10     55190  21   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav život*                21.70 0:09:15.01 0:09:15.25     55501  25  54.812012 ďovo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohoto                54.34 0:09:16.38 0:09:16.72     55638  35  51.140625 kauto
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav naftov*               83.84 0:09:24.82 0:09:25.25     56482  44  25.454102 naftové
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav protože              100.00 0:09:26.02 0:09:26.37     56602  36   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav budem*               100.00 0:09:26.63 0:09:26.88     56663  26   0.000000 budeme
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav přesně                99.68 0:09:29.91 0:09:30.28     56991  38   0.392578 pŘesňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav přesně                97.08 0:09:33.35 0:09:33.61     57335  27   2.573730 pŘesňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:09:33.82 0:09:34.05     57382  24   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav tohle                 41.47 0:09:34.08 0:09:34.30     57408  23  36.871582 tudle
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:09:34.51 0:09:34.75     57451  25   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav samozřejmě           100.00 0:09:35.88 0:09:36.38     57588  51   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                100.00 0:09:50.61 0:09:51.08     59061  48   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                100.00 0:09:51.90 0:09:52.22     59190  33   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 35.64 0:09:55.60 0:09:55.83     59560  24  45.048828 nebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav potom                100.00 0:09:55.82 0:09:56.02     59582  21   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vlastně              100.00 0:09:57.22 0:09:57.55     59722  34   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav energi*              100.00 0:09:59.37 0:09:59.98     59937  62   0.000000 energije
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vítej*                68.85 0:10:03.37 0:10:03.76     60337  40  34.886719 vítej
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav ještě                100.00 0:10:04.02 0:10:04.35     60402  34   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nejsou                24.40 0:10:05.96 0:10:06.22     60596  27  66.526367 nejse
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav vůbec                100.00 0:10:06.20 0:10:06.50     60620  31   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav téhle                 34.18 0:10:08.18 0:10:08.42     60818  25  46.072754 tihlé
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav čast*                100.00 0:10:08.83 0:10:09.11     60883  29   0.000000 často
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav prostě               100.00 0:10:09.83 0:10:10.13     60983  31   0.000000 prosťe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav minut*                50.66 0:10:12.83 0:10:13.21     61283  39  61.175781 5ti
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav poměrně              100.00 0:10:15.21 0:10:15.70     61521  50   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav nechat                60.69 0:10:16.75 0:10:17.02     61675  28  31.645020 deXad
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav myslíte               96.73 0:10:18.92 0:10:19.57     61892  66   7.798828 mislíte
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav život*                68.72 0:10:21.87 0:10:22.11     62187  25  21.895996 živr
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav poměrně               74.17 0:10:23.76 0:10:24.21     62376  46  47.779297 pomňeňe
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav anebo                 44.21 0:10:28.01 0:10:28.27     62801  27  42.955078 nebo
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav situac*               69.12 0:10:29.67 0:10:30.33     62967  67  75.027344 situence
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav kter*                 93.68 0:10:38.83 0:10:39.13     63883  31   5.528320 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takže                 45.88 0:10:41.25 0:10:41.50     64125  26  39.781738 taki
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav letech                94.92 0:10:43.85 0:10:44.23     64385  39   5.690430 leteXt
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav dnes*                 42.16 0:10:46.48 0:10:46.83     64648  36  50.318359 es
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav svoji                100.00 0:10:47.21 0:10:47.45     64721  25   0.000000 svoji
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav takto                 36.28 0:10:49.42 0:10:49.75     64942  34  60.214844 tašsto
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav někdy                 86.70 0:10:53.46 0:10:53.71     65346  26   9.777832 ňegde
d:\WordSpotting\DATA\Stream\MeziPlyn_703e7b5f04e95242_360p.wav příště               100.00 0:10:53.75 0:10:54.12     65375  38   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav dnes*                100.00 0:00:05.02 0:00:05.41       502  40   0.000000 dneska
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav abychom               81.74 0:00:05.38 0:00:05.67       538  30  17.532227 abiXom
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav potom                 28.98 0:00:07.06 0:00:07.40       706  35  69.596680 otom
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav protože              100.00 0:00:10.63 0:00:11.02      1063  40   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                100.00 0:00:15.80 0:00:16.06      1580  27   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 41.68 0:00:16.26 0:00:16.52      1626  27  44.905273 teré
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav opravdu              100.00 0:00:16.71 0:00:17.15      1671  45   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav abychom              100.00 0:00:24.82 0:00:25.16      2482  35   0.000000 abiXom
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav budem*                99.41 0:00:31.70 0:00:32.03      3170  34   0.656250 budeme
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav velk*                 87.50 0:00:32.62 0:00:32.96      3262  35  13.997070 velkém
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav žádn*                100.00 0:00:44.88 0:00:45.36      4488  49   0.000000 žádná
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav dokonce               99.09 0:00:47.85 0:00:48.52      4785  68   2.259766 dokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav žádn*                100.00 0:00:49.06 0:00:49.42      4906  37   0.000000 žádní
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav důležit*              64.41 0:00:50.92 0:00:51.35      5092  44  62.278320 dúležiť
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                100.00 0:00:57.17 0:00:57.60      5717  44   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav možná                100.00 0:01:02.80 0:01:03.15      6280  36   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav věc*                  68.07 0:01:03.96 0:01:04.20      6396  25  19.158203 vjeC
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav všechn*               97.19 0:01:12.36 0:01:12.67      7236  32   2.918945 fšeXni
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                100.00 0:01:15.62 0:01:15.87      7562  26   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav nemaj*               100.00 0:01:15.92 0:01:16.22      7592  31   0.000000 nemají
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav korun*                40.93 0:01:16.97 0:01:17.28      7697  32  53.750977 konú
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav ještě                100.00 0:01:25.43 0:01:25.71      8543  29   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav krásn*                88.16 0:01:27.28 0:01:27.75      8728  48  17.993164 krásní
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav protože               97.53 0:01:32.07 0:01:32.82      9207  76   6.791016 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav nějakým               84.68 0:01:38.75 0:01:39.13      9875  39  22.061523 ňejakňi
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav tisíc*               100.00 0:01:39.18 0:01:39.55      9918  38   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav žádn*                 52.17 0:01:40.91 0:01:41.26     10091  36  55.481445 žeoním
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vůbec                100.00 0:01:41.21 0:01:41.58     10121  38   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vůbec                100.00 0:01:42.07 0:01:42.41     10207  35   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav samozřejmě           100.00 0:01:43.97 0:01:44.40     10397  44   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav rychle                40.82 0:01:53.88 0:01:54.22     11388  35  58.000000 riXlo
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav třicet*               98.62 0:01:54.43 0:01:54.81     11443  39   1.714844 tŘicet
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav takže                100.00 0:01:59.11 0:01:59.48     11911  38   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav samozřejmě           100.00 0:02:04.08 0:02:04.56     12408  49   0.000000 samozřejmňňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav anebo                100.00 0:02:06.52 0:02:06.92     12652  41   0.000000 anebo
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kvůli                100.00 0:02:09.72 0:02:10.01     12972  30   0.000000 kvúli
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav možná                 69.94 0:02:21.61 0:02:21.91     14161  31  26.303223 možno
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav jaksi                 33.82 0:02:24.70 0:02:25.00     14470  31  57.909180 jakjé
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vlastně              100.00 0:02:25.12 0:02:25.41     14512  30   0.000000 vlasťňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav protože              100.00 0:02:29.02 0:02:29.42     14902  41   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 48.93 0:02:34.92 0:02:35.26     15492  35  50.043945 teré
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav komentář*             99.97 0:02:38.17 0:02:38.72     15817  56   0.060547 komentář
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 61.65 0:02:43.30 0:02:43.57     16330  28  30.868164 nteré
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav takže                100.00 0:02:45.00 0:02:45.42     16500  43   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 45.10 0:02:50.80 0:02:51.03     17080  24  38.430664 teré
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vlastně               97.58 0:02:51.02 0:02:51.32     17102  31   2.416016 vlasťňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav měst*                 71.38 0:02:51.32 0:02:51.90     17132  59  53.813477 mňescké
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav evrop*                23.93 0:02:58.63 0:02:58.95     17863  33  79.109375 uvrepo
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vlád*                 87.54 0:03:02.81 0:03:03.11     18281  31  10.902344 vláda
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav naprosto             100.00 0:03:03.22 0:03:03.67     18322  46   0.000000 naprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav všechn*              100.00 0:03:03.68 0:03:04.06     18368  39   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                100.00 0:03:08.28 0:03:08.58     18828  31   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 97.19 0:03:09.07 0:03:09.36     18907  30   2.364258 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vůbec                 99.21 0:03:10.98 0:03:11.30     19098  33   0.716797 vúbeC
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav život*                62.19 0:03:11.51 0:03:11.70     19151  20  21.175781 živo
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vždy*                 52.95 0:03:18.25 0:03:18.51     19825  27  36.225586 gickí
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav tohle                 68.65 0:03:19.36 0:03:19.60     19936  25  21.948242 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav všechn*               94.33 0:03:21.07 0:03:21.45     20107  39   7.036133 fšeXno
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 62.86 0:03:23.13 0:03:23.43     20313  31  32.496582 tere
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav ulic*                 41.31 0:03:25.30 0:03:25.55     20530  26  36.975586 olit4
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav anebo                 68.17 0:03:27.82 0:03:28.22     20782  41  36.766602 ebo
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav jejich                20.32 0:03:32.01 0:03:32.30     21201  30  66.929199 íiX
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav opravdu              100.00 0:03:33.15 0:03:33.52     21315  38   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav situac*               99.85 0:03:33.83 0:03:34.51     21383  69   0.363281 situace
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav pouze                 29.63 0:03:38.63 0:03:38.96     21863  34  66.499023 lúuza
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav trošk*                91.98 0:03:42.06 0:03:42.35     22206  30   7.701660 tršku
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav protože              100.00 0:03:44.70 0:03:45.08     22470  39   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav korun*                24.63 0:03:46.11 0:03:46.38     22611  28  60.668945 kalún
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav věc*                 100.00 0:03:51.11 0:03:51.32     23111  22   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav věc*                 100.00 0:03:52.11 0:03:52.30     23211  20   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 96.36 0:03:56.26 0:03:56.58     23626  33   3.444336 Xteré
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vlád*                 72.97 0:03:56.72 0:03:57.12     23672  41  35.683594 vládn
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav skutečně             100.00 0:03:57.68 0:03:58.12     23768  45   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav někdy                 27.46 0:03:58.02 0:03:58.21     23802  20  40.621094 ňígdi
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav takto                100.00 0:04:00.23 0:04:00.53     24023  31   0.000000 takto
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 96.92 0:04:01.25 0:04:01.55     24125  31   2.694336 které
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav skutečně              95.47 0:04:02.43 0:04:02.81     24243  39   7.027344 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav kter*                 98.10 0:04:05.81 0:04:06.11     24581  31   1.661621 která
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav měst*                 93.86 0:04:06.76 0:04:07.18     24676  43   8.591797 mňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav dnes*                 29.56 0:04:07.70 0:04:07.83     24770  14  25.356689 jes
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav téhle                 59.43 0:04:08.53 0:04:08.77     24853  25  28.395508 tahla
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav velk*                 80.79 0:04:09.11 0:04:09.48     24911  38  20.845703 belka
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav svoji                 91.93 0:04:10.17 0:04:10.45     25017  29   6.500000 svoj
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav vítej*                28.28 0:04:18.65 0:04:18.93     25865  29  60.242188 víten
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav třicet*               36.40 0:04:23.37 0:04:23.78     26337  42  86.499023 tŘice
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav jednoho               69.28 0:04:32.31 0:04:32.73     27231  43  48.377930 jedno4
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav všechn*              100.00 0:04:34.62 0:04:35.00     27462  39   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav pokud                100.00 0:04:35.12 0:04:35.43     27512  32   0.000000 pokut
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav otázk*               100.00 0:04:36.58 0:04:37.06     27658  49   0.000000 otáski
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav komentář*             88.68 0:04:38.35 0:04:39.12     27835  78  39.214844 koméntářú
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav teďka                 35.62 0:04:43.15 0:04:43.51     28315  37  67.597656 tečka
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav plyn*                 55.37 0:04:43.77 0:04:43.95     28377  19  20.084961 tleň
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav teďka                 37.77 0:04:43.97 0:04:44.31     28397  35  60.990234 tačka
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav měst*                 31.02 0:04:47.22 0:04:47.47     28722  26  50.698242 jest
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav stát*                 79.96 0:04:48.33 0:04:48.68     28833  36  17.435547 stát
d:\WordSpotting\DATA\Stream\MeziPlyn_73b5fc6afc39669d_360p.wav svoji                 98.48 0:04:49.61 0:04:49.93     28961  33   1.440430 svoji
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav protože              100.00 0:00:12.33 0:00:12.73      1233  41   0.000000 protože
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav Debat*               100.00 0:00:14.13 0:00:14.60      1413  48   0.000000 debatu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rychle                69.41 0:00:18.31 0:00:18.53      1831  23  20.339844 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vlastně               95.05 0:00:19.31 0:00:19.70      1931  40   6.339844 vlasťň
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav dokonce               98.61 0:00:27.60 0:00:27.95      2760  36   1.810547 dokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav dokonce               95.75 0:00:32.22 0:00:32.82      3222  61   9.370117 dokonce
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav velmi                100.00 0:00:32.81 0:00:33.11      3281  31   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav česk*                 37.84 0:00:48.58 0:00:48.93      4858  36  72.104492 iskím
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav skutečně             100.00 0:00:49.46 0:00:49.97      4946  52   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav proti                 40.80 0:00:53.32 0:00:53.62      5332  31  51.797363 proč
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*             100.00 0:00:53.81 0:00:54.32      5381  52   0.000000 dúležité
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav například             97.06 0:01:09.26 0:01:09.73      6926  48   6.311523 napŘíklat
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav tisíc*                72.48 0:01:10.92 0:01:11.20      7092  29  22.153320 ťisí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav třicet*              100.00 0:01:11.63 0:01:12.02      7163  40   0.000000 tŘicet
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav samozřejmě           100.00 0:01:21.81 0:01:22.33      8181  53   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav další*                99.97 0:01:23.13 0:01:23.66      8313  54   0.038086 delší
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav jinak                100.00 0:01:32.18 0:01:32.45      9218  28   0.000000 jinak
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav všechn*              100.00 0:01:34.06 0:01:34.52      9406  47   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav způsob*               90.33 0:01:35.13 0:01:35.62      9513  50  17.406250 spúsobu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav ještě                100.00 0:01:41.13 0:01:41.41     10113  29   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav věc*                 100.00 0:01:42.87 0:01:43.10     10287  24   0.000000 vjeci
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 94.22 0:01:43.13 0:01:43.38     10313  26   4.248047 která
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav především            100.00 0:01:44.90 0:01:45.36     10490  47   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*              98.42 0:01:45.41 0:01:45.97     10541  57   3.641602 dúležitá
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vždy*                 49.57 0:01:54.78 0:01:55.23     11478  46  65.304688 ticki
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav další*               100.00 0:02:04.47 0:02:04.82     12447  36   0.000000 další
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav nikdy                 98.07 0:02:07.65 0:02:07.92     12765  28   1.554199 ňigdi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 77.67 0:02:10.00 0:02:10.22     13000  23  14.850098 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav pokud                 70.48 0:02:14.32 0:02:14.68     13432  37  30.992188 poku
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav dnes*                 29.39 0:02:14.96 0:02:15.28     13496  33  57.192383 nes4
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav především            100.00 0:02:21.62 0:02:22.12     14162  51   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav potom                100.00 0:02:22.15 0:02:22.45     14215  31   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav jejich                81.00 0:02:22.73 0:02:22.98     14273  26  13.968262 íX
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rychle                49.36 0:02:22.98 0:02:23.30     14298  33  46.086914 triXní
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav skutečně             100.00 0:02:24.58 0:02:25.17     14458  60   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav věc*                 100.00 0:02:26.93 0:02:27.10     14693  18   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 95.16 0:02:27.13 0:02:27.36     14713  24   3.681152 kterou
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav proti                 78.26 0:02:40.65 0:02:41.02     16065  38  23.583008 proťi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav ještě                100.00 0:02:42.60 0:02:43.02     16260  43   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav třicet*               97.46 0:02:45.16 0:02:45.58     16516  43   3.555664 tŘice
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*              66.18 0:02:46.32 0:02:46.80     16632  49  65.953125 dúležiťe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav další*               100.00 0:02:48.55 0:02:48.92     16855  38   0.000000 další
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav především            100.00 0:02:51.78 0:02:52.35     17178  58   0.000000 pŘedefším
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vždy*                 67.44 0:02:52.82 0:02:53.07     17282  26  23.933105 nickí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav velmi                100.00 0:03:01.61 0:03:01.90     18161  30   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav jakoby                30.61 0:03:04.70 0:03:05.06     18470  37  83.268555 jakozd
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav dnes*                 26.09 0:03:05.05 0:03:05.22     18505  18  33.261719 djes
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav proti                 50.50 0:03:09.31 0:03:09.60     18931  30  41.577148 proďje
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav způsob*               57.66 0:03:10.50 0:03:10.93     19050  44  68.597656 púsobí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav nějaká                63.46 0:03:10.92 0:03:11.27     19092  36  42.386719 ňejag
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rozhodně              74.89 0:03:11.53 0:03:11.88     19153  36  36.409180 rozoňin
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*             100.00 0:03:12.77 0:03:13.35     19277  59   0.000000 dúležitím
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav aktivně               48.98 0:03:16.17 0:03:16.55     19617  39  71.179688 aktivňí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vůbec                 33.69 0:03:16.71 0:03:16.96     19671  26  48.737305 vo4
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav volb*                100.00 0:03:18.08 0:03:18.33     19808  26   0.000000 volbi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav naprosto             100.00 0:03:34.62 0:03:35.25     21462  64   0.000000 naprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rychle               100.00 0:03:35.73 0:03:36.10     21573  38   0.000000 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav potom                100.00 0:03:38.86 0:03:39.11     21886  26   0.000000 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rychle                83.82 0:03:41.77 0:03:42.20     22177  44  19.817383 riXle
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav tohoto                76.00 0:03:50.82 0:03:51.11     23082  30  23.041504 tohoto
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 63.00 0:03:53.42 0:03:53.72     23342  31  32.372070 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*              69.38 0:04:01.65 0:04:02.11     24165  47  63.995117 dorežeííg
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav volb*                 47.59 0:04:08.40 0:04:08.67     24840  28  42.187012 holuvi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav Michal*               85.52 0:04:09.66 0:04:10.17     24966  52  21.286133 meXal
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav krásn*               100.00 0:04:12.40 0:04:12.92     25240  53   0.000000 krásní
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav pouze                 34.85 0:04:14.50 0:04:14.77     25450  28  52.443359 pouzď
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav krásn*                99.71 0:04:17.18 0:04:17.68     25718  51   0.481445 krásňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav věc*                  23.81 0:04:22.17 0:04:22.48     26217  32  69.331055 vecít
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav prostě                37.07 0:04:22.48 0:04:22.72     26248  25  50.344727 la
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav plán*                 20.76 0:04:26.97 0:04:27.17     26697  21  40.413574 plác
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kvůli                 47.68 0:04:32.01 0:04:32.26     27201  26  38.458496 koli
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav budem*               100.00 0:04:32.51 0:04:32.71     27251  21   0.000000 budem
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav důležit*             100.00 0:04:41.57 0:04:42.10     28157  54   0.000000 dúležité
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav tohle                100.00 0:04:49.83 0:04:50.22     28983  40   0.000000 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav téhle                100.00 0:05:00.13 0:05:00.43     30013  31   0.000000 téhle
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav všechn*               96.36 0:05:09.72 0:05:09.96     30972  25   2.909668 fšeXne
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav komentář*             99.03 0:05:10.08 0:05:10.73     31008  66   2.816406 komentáře
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav opravdu              100.00 0:05:17.90 0:05:18.35     31790  46   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav možná                 99.92 0:05:20.05 0:05:20.38     32005  34   0.079102 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                100.00 0:05:21.27 0:05:21.55     32127  29   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav způsob*               65.11 0:05:27.51 0:05:28.00     32751  50  69.785156 púsobit
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rozhodně             100.00 0:05:32.83 0:05:33.20     33283  38   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vůbec                100.00 0:05:38.13 0:05:38.46     33813  34   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav stát*                 69.25 0:05:44.90 0:05:45.20     34490  31  26.905273 áti
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav nejsou                28.37 0:05:45.53 0:05:45.81     34553  29  65.902832 llisou
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav měst*                 93.34 0:05:51.98 0:05:52.36     35198  39   8.252930 mňesťe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav dálnic*               62.94 0:05:52.68 0:05:53.13     35268  46  61.698242 dálňic
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav opravdu              100.00 0:05:58.50 0:05:58.92     35850  43   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav vůbec                100.00 0:06:04.21 0:06:04.60     36421  40   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav plyn*                100.00 0:06:11.11 0:06:11.41     37111  31   0.000000 plinu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 96.25 0:06:14.42 0:06:14.70     37442  29   3.022461 terí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                100.00 0:06:17.37 0:06:17.61     37737  25   0.000000 kterí
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                100.00 0:06:22.91 0:06:23.18     38291  28   0.000000 která
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav budem*                67.99 0:06:35.00 0:06:35.23     39500  24  22.403809 bude
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav naprosto             100.00 0:06:35.22 0:06:35.72     39522  51   0.000000 naprosto
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav proti                 37.89 0:06:38.05 0:06:38.30     39805  26  45.647461 proďe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav věc*                  63.89 0:06:52.26 0:06:52.48     41226  23  20.585449 vjeC
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav volb*                100.00 0:06:52.76 0:06:53.11     41276  36   0.000000 volba
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav poměrně               93.39 0:06:55.25 0:06:55.73     41525  49  13.217773 pomňerňe
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav takže                100.00 0:06:56.76 0:06:57.10     41676  35   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav opravdu              100.00 0:06:57.31 0:06:57.70     41731  40   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav trošk*                79.18 0:06:58.96 0:06:59.37     41896  42  28.321289 ofska
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav moravsk*              51.40 0:06:58.97 0:06:59.36     41897  40  77.761719 ofska
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav kter*                 21.35 0:07:05.41 0:07:05.68     42541  28  63.315918 ktá
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav velmi                 99.61 0:07:06.55 0:07:06.88     42655  34   0.377930 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav velmi                100.00 0:07:08.11 0:07:08.40     42811  30   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_a2715c719d7aebe8_360p.wav rychle                93.46 0:07:08.42 0:07:08.72     42842  31   5.726563 riXlé
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                100.00 0:00:12.68 0:00:12.95      1268  28   0.000000 kterou
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav potom                 40.46 0:00:15.48 0:00:15.81      1548  34  56.260742 tom
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav dnes*                100.00 0:00:16.15 0:00:16.45      1615  31   0.000000 dneska
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav úpln*                100.00 0:00:17.36 0:00:17.66      1736  31   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav jednoho              100.00 0:00:18.53 0:00:18.86      1853  34   0.000000 jednoho
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav možná                100.00 0:00:22.37 0:00:22.67      2237  31   0.000000 možná
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav věc*                  20.91 0:00:27.36 0:00:27.71      2736  36  68.811523 vije
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tohle                 99.25 0:00:28.67 0:00:29.08      2867  42   0.890625 tohle
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav skutečně             100.00 0:00:29.17 0:00:29.65      2917  49   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav úpln*                100.00 0:00:29.76 0:00:30.20      2976  45   0.000000 úplňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tohle                 59.55 0:00:33.73 0:00:33.97      3373  25  28.316895 todle
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav nebyl*                40.65 0:00:37.16 0:00:37.45      3716  30  56.972656 nemvla
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav takže                100.00 0:00:37.75 0:00:38.05      3775  31   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav velk*                100.00 0:00:45.46 0:00:45.76      4546  31   0.000000 velkí
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav rozhodně             100.00 0:00:47.96 0:00:48.37      4796  42   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav ulic*                100.00 0:00:52.65 0:00:52.98      5265  34   0.000000 ulici
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav skutečně             100.00 0:00:54.33 0:00:54.83      5433  51   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vůbec                100.00 0:01:17.45 0:01:17.78      7745  34   0.000000 vúbeC
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav žádn*                100.00 0:01:17.81 0:01:18.13      7781  33   0.000000 žádné
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav ulic*                 51.33 0:01:29.12 0:01:29.47      8912  36  49.401367 olící
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav třicet*               97.34 0:01:32.02 0:01:32.35      9202  34   2.871094 tŘice
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                 65.04 0:01:33.67 0:01:33.91      9367  25  24.475098 které
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav všechn*               46.77 0:01:35.16 0:01:35.52      9516  37  63.872070 fšeXk
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav skutečně             100.00 0:01:39.48 0:01:40.00      9948  53   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vůbec                100.00 0:01:49.77 0:01:50.07     10977  31   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav minut*                52.34 0:01:51.70 0:01:52.08     11170  39  68.629883 nuto
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav ukážem*               60.21 0:01:52.07 0:01:52.50     11207  44  55.711914 ukáže
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav takto                 46.99 0:02:09.30 0:02:09.53     12930  24  37.109375 taktn
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                100.00 0:02:17.47 0:02:17.76     13747  30   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav žádn*                 98.99 0:02:20.58 0:02:20.87     14058  30   0.852539 žádnn
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav minut*                34.19 0:02:22.71 0:02:23.00     14271  30  63.173828 binutí
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav potom                 39.56 0:02:23.80 0:02:24.08     14380  29  50.772461 kotou
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tisíc*                89.03 0:02:32.08 0:02:32.42     15208  35  10.748047 ťisí
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav takže                100.00 0:02:34.00 0:02:34.42     15400  43   0.000000 tagže
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tisíc*               100.00 0:02:35.78 0:02:36.08     15578  31   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav korun*                91.32 0:02:36.12 0:02:36.61     15612  50  12.157227 korun
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vždy*                 20.23 0:02:40.70 0:02:40.88     16070  19  44.672852 ické
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav dokonce               50.55 0:02:41.48 0:02:41.85     16148  38  66.751953 ukonce
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav prostě                23.73 0:02:44.82 0:02:45.15     16482  34  82.375000 prosl
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tohoto                91.14 0:02:47.50 0:02:47.78     16750  29   8.500977 tohoto
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                 74.47 0:02:48.41 0:02:48.67     16841  27  19.657715 derá
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav velmi                100.00 0:02:49.53 0:02:49.78     16953  26   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav pozor                100.00 0:02:50.35 0:02:50.75     17035  41   0.000000 pozor
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav tohoto                99.35 0:02:52.32 0:02:52.81     17232  50   1.033203 tohot
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vůbec                100.00 0:02:55.35 0:02:55.65     17535  31   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav potom                 61.81 0:03:00.48 0:03:00.77     18048  30  32.079590 potom
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav Michal*               59.09 0:03:02.43 0:03:02.68     18243  26  30.070313 miXa
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav nikdy                 66.07 0:03:05.15 0:03:05.40     18515  26  24.938965 igdi
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav věc*                  21.41 0:03:06.41 0:03:06.58     18641  18  35.366699 nec
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav protože               48.35 0:03:10.97 0:03:11.35     19097  39  72.050781 protojo
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav evrop*                80.31 0:03:15.12 0:03:15.51     19512  40  28.346680 evrops
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav velk*                 63.68 0:03:15.97 0:03:16.25     19597  29  29.237793 belki
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav znov*                 31.05 0:03:18.82 0:03:19.11     19882  30  57.914551 nova
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav stát*                100.00 0:03:30.05 0:03:30.40     21005  36   0.000000 stát
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav jakoby                24.48 0:03:32.95 0:03:33.21     21295  27  66.460938 jakopr
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav věc*                 100.00 0:03:34.13 0:03:34.36     21413  24   0.000000 vjec
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav naopak                89.74 0:03:35.15 0:03:35.53     21515  39  13.134766 neopak
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vůbec                100.00 0:03:37.82 0:03:38.17     21782  36   0.000000 vúbec
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav budem*                21.89 0:03:40.06 0:03:40.31     22006  26  57.414063 bude
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav ještě                100.00 0:03:49.13 0:03:49.43     22913  31   0.000000 ješťe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav velmi                100.00 0:03:54.02 0:03:54.27     23402  26   0.000000 velmi
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav dobře                100.00 0:04:02.35 0:04:02.57     24235  23   0.000000 dobře
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                100.00 0:04:04.30 0:04:04.56     24430  27   0.000000 které
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav osobně               100.00 0:04:09.35 0:04:09.85     24935  51   0.000000 osobňe
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav komentář*             96.26 0:04:16.35 0:04:17.17     25635  83  13.787109 kumentářú
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav podívejte            100.00 0:04:20.21 0:04:20.62     26021  42   0.000000 poďívejte
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav teďka                 57.86 0:04:21.63 0:04:21.97     26163  35  41.298828 tečka
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav teďka                 61.71 0:04:22.38 0:04:22.66     26238  29  30.820801 tečk
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav všechn*              100.00 0:04:24.12 0:04:24.50     26412  39   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav kter*                 59.64 0:04:27.17 0:04:27.42     26717  26  29.663574 které
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav opravdu              100.00 0:04:27.65 0:04:28.02     26765  38   0.000000 opravdu
d:\WordSpotting\DATA\Stream\MeziPlyn_cee86236bcac0052_360p.wav vidět                 34.02 0:04:32.87 0:04:33.12     27287  26  48.491699 viďen
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav velmi                100.00 0:00:04.40 0:00:04.68       440  29   0.000000 velmi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav kter*                 93.62 0:00:05.97 0:00:06.28       597  32   6.637695 kterím
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vlád*                 39.58 0:00:41.66 0:00:42.05      4166  40  77.340820 lado
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav prostě                77.87 0:00:43.21 0:00:43.50      4321  30  21.248535 prosťl
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav nikdy                 33.31 0:00:44.62 0:00:44.85      4462  24  44.349609 mgří
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vidět                 66.00 0:00:44.77 0:00:45.12      4477  36  34.506836 říďed
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav ulic*                 34.45 0:00:45.68 0:00:45.91      4568  24  37.363770 ilic
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav nějaká                34.05 0:00:47.21 0:00:47.48      4721  28  60.672363 jot
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                 94.18 0:00:47.38 0:00:47.80      4738  43   6.923828 tagže
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takto                100.00 0:00:49.07 0:00:49.45      4907  39   0.000000 takto
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takto                 94.91 0:00:49.61 0:00:49.87      4961  27   3.919434 takto
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav stran*                34.60 0:00:51.63 0:00:51.91      5163  29  60.167969 ctrňi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                 39.35 0:00:52.11 0:00:52.30      5211  20  33.965332 tagza
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dnes*                 59.65 0:00:52.55 0:00:52.71      5255  17  16.947754 znec
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                 74.83 0:00:53.82 0:00:54.03      5382  22  15.857422 naže
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav přesně                76.03 0:00:54.15 0:00:54.50      5415  36  27.810547 pŘesťe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav budem*                33.19 0:00:54.56 0:00:54.78      5456  23  50.775391 knemo
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takovej               68.96 0:00:55.26 0:00:55.60      5526  35  39.112305 takleji
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jinak                 87.43 0:00:55.55 0:00:55.75      5555  21   7.478027 jinat
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                100.00 0:01:01.23 0:01:01.55      6123  33   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav přesně               100.00 0:01:03.17 0:01:03.55      6317  39   0.000000 pŘesňe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dobře                 98.32 0:01:03.88 0:01:04.16      6388  29   1.354980 dovře
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav tisíc*                39.96 0:01:07.18 0:01:07.43      6718  26  50.430176 sňíci
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav trošk*               100.00 0:01:07.62 0:01:08.02      6762  41   0.000000 trošku
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav nebyl*                88.55 0:01:11.38 0:01:11.71      7138  34  12.364258 nebol
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jakoby                33.48 0:01:12.42 0:01:12.70      7242  29  61.194336 akobi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav tohle                 40.37 0:01:14.85 0:01:15.08      7485  24  41.742676 ohle
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jaksi                 85.18 0:01:15.37 0:01:15.65      7537  29  11.932129 jakse
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vůbec                 37.73 0:01:15.68 0:01:15.88      7568  21  37.050781 mbec
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav věc*                 100.00 0:01:16.33 0:01:16.62      7633  30   0.000000 vjeci
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav potom                 25.33 0:01:23.31 0:01:23.60      8331  30  62.721680 tom
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav další*                97.30 0:01:24.90 0:01:25.33      8490  44   3.407227 další
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takových              65.36 0:01:28.05 0:01:28.41      8805  37  46.767578 takoví
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav osobně                40.43 0:01:28.80 0:01:29.11      8880  32  61.948242 osobi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav naopak               100.00 0:01:31.52 0:01:32.02      9152  51   0.000000 naopag
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav další*               100.00 0:01:32.06 0:01:32.36      9206  31   0.000000 další
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takovej              100.00 0:01:35.13 0:01:35.51      9513  39   0.000000 takovej
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav všechn*              100.00 0:01:37.61 0:01:37.90      9761  30   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav másl*                 45.46 0:01:40.27 0:01:40.60     10027  34  58.907227 náslev
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav tohle                 35.79 0:01:46.31 0:01:46.63     10631  33  60.676758 tol
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dnes*                100.00 0:01:59.40 0:01:59.61     11940  22   0.000000 dnes
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav pokud                 49.59 0:02:00.08 0:02:00.38     12008  31  44.104980 poku
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav protože               71.71 0:02:14.93 0:02:15.27     13493  35  35.639648 prtož
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav velmi                 61.04 0:02:21.01 0:02:21.23     14101  23  25.909180 lme
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav všechn*              100.00 0:02:28.67 0:02:29.00     14867  34   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav způsob*               75.93 0:02:29.80 0:02:30.28     14980  49  48.145508 úsobe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vlastně               98.21 0:02:31.25 0:02:31.82     15125  58   3.364258 vlasťňe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takovej               34.19 0:02:42.28 0:02:42.60     16228  33  76.995117 takév
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vidět                 92.48 0:02:42.57 0:02:42.86     16257  30   6.313477 liďet
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dnes*                 55.81 0:02:45.90 0:02:46.18     16590  29  31.816406 res
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jakoby                90.28 0:02:52.46 0:02:52.83     17246  38  12.051758 akobji
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav všechn*              100.00 0:03:17.70 0:03:18.11     19770  42   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav úpln*                 77.43 0:03:26.62 0:03:27.00     20662  39  24.489258 úpeň
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                100.00 0:03:32.70 0:03:33.06     21270  37   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav velmi                 97.89 0:03:33.87 0:03:34.17     21387  31   1.843750 velmi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav protože               95.89 0:03:36.80 0:03:37.41     21680  62   9.238281 protože
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jejich                81.93 0:03:39.57 0:03:39.98     21957  42  21.506836 eiX
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vidět                 98.00 0:03:40.86 0:03:41.13     22086  28   1.607910 viďet
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav velk*                100.00 0:03:41.12 0:03:41.43     22112  32   0.000000 velkí
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav ulic*                 25.65 0:03:43.00 0:03:43.35     22300  36  75.463867 lici
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav kvůli                 52.04 0:03:44.75 0:03:45.05     22475  31  41.967773 púlli
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav velice                87.97 0:03:49.97 0:03:50.31     22997  35  13.471680 nadice
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dobře                 98.43 0:03:50.30 0:03:50.53     23030  24   1.099121 dobře
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav prostě                23.97 0:04:02.20 0:04:02.48     24220  29  72.989258 prosi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav dnes*                 28.84 0:04:02.68 0:04:02.90     24268  23  38.426270 gde
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav nechat                91.02 0:04:07.35 0:04:07.63     24735  29   7.541992 řeXat
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav určitě                67.61 0:04:08.10 0:04:08.66     24810  57  59.590820 uřeťe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vlastně              100.00 0:04:10.40 0:04:10.63     25040  24   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav nebyl*                31.56 0:04:17.45 0:04:17.71     25745  27  52.699219 lembil
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takových              71.70 0:04:17.70 0:04:18.06     25770  37  38.208984 takoví
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takže                100.00 0:04:21.28 0:04:21.52     26128  25   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jaksi                 50.05 0:04:24.88 0:04:25.08     26488  21  29.719238 eťsi
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav vlastně              100.00 0:04:27.92 0:04:28.27     26792  36   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav takto                 74.98 0:04:31.02 0:04:31.43     27102  42  29.774414 takco
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav jaksi                 59.19 0:04:31.52 0:04:31.77     27152  26  29.994141 jakti
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav kter*                 92.68 0:04:41.55 0:04:41.77     28155  23   4.867188 erí
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav určitě               100.00 0:04:45.45 0:04:45.82     28545  38   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav budem*                57.87 0:04:52.47 0:04:52.71     29247  25  29.489746 budem
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav plátki                64.43 0:04:54.78 0:04:55.17     29478  40  45.524414 plátki
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav teďka                100.00 0:04:56.45 0:04:56.80     29645  36   0.000000 teťka
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav další*               100.00 0:05:02.50 0:05:02.75     30250  26   0.000000 další
d:\WordSpotting\DATA\Stream\Plastika_1fc8bbff03d64840_360p.wav příště               100.00 0:05:06.71 0:05:07.03     30671  33   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav případě              100.00 0:00:04.63 0:00:05.03       463  41   0.000000 pŘípaďe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav úpln*                100.00 0:00:06.51 0:00:06.86       651  36   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav dnes*                100.00 0:00:07.75 0:00:08.16       775  42   0.000000 dnes
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jaksi                 50.83 0:00:42.93 0:00:43.21      4293  29  39.583008 eksa
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav takže                 54.20 0:00:55.50 0:00:55.76      5550  27  35.263672 tage
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav hlavně                93.19 0:00:56.98 0:00:57.28      5698  31   6.812500 hlavň
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kter*                 23.82 0:00:57.96 0:00:58.26      5796  31  66.656250 ktoroé
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jemně                 77.64 0:00:58.20 0:00:58.48      5820  29  18.779785 émňe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav věc*                  87.01 0:00:58.52 0:00:58.80      5852  29   8.962891 vjet
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav nebyl*                20.13 0:00:59.15 0:00:59.35      5915  21  47.524902 ivre
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav ukážem*               45.07 0:01:00.25 0:01:00.72      6025  48  85.694336 ukážu
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav opravdu               47.26 0:01:08.76 0:01:09.11      6876  36  68.831055 epravdav
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav takto                 26.97 0:01:11.85 0:01:12.15      7185  31  63.897949 takp
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav takže                 84.86 0:01:12.58 0:01:12.90      7258  33  13.775391 tag
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav znov*                 24.45 0:01:12.88 0:01:13.08      7288  21  44.950195 dovo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jakoby                36.13 0:01:14.73 0:01:15.05      7473  33  66.427734 jakože
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav život*                62.64 0:01:14.97 0:01:15.28      7497  32  33.998047 žepot
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav anebo                 62.21 0:01:15.66 0:01:16.17      7566  52  55.555664 nebo4
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav hlavně                23.64 0:01:18.33 0:01:18.61      7833  29  70.248535 hlavi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav hlavně                39.94 0:01:18.97 0:01:19.26      7897  30  57.655273 hlavi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav takže                 53.76 0:01:23.12 0:01:23.38      8312  27  35.606934 ogže
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav dobře                 81.96 0:01:23.82 0:01:24.17      8382  36  18.313477 úbže
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav letech                23.87 0:01:24.81 0:01:25.13      8481  33  71.943359 letk
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav třicet*               36.18 0:01:25.50 0:01:25.83      8550  34  71.483398 pocet4
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav anebo                 99.52 0:01:27.38 0:01:27.66      8738  29   0.386719 nebo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav svoji                 68.07 0:01:30.40 0:01:30.72      9040  33  30.175781 zbojí
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kter*                 53.98 0:01:31.00 0:01:31.23      9100  24  36.816406 kfiro
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav plán*                 48.08 0:01:31.28 0:01:31.58      9128  31  45.434082 kanú
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav hlavně                91.84 0:01:33.73 0:01:34.02      9373  30   7.831055 hlavňé
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav život*                25.99 0:01:34.47 0:01:34.71      9447  25  51.804688 řívo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav potom                100.00 0:01:36.50 0:01:36.82      9650  33   0.000000 potom
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav protože               52.98 0:01:36.88 0:01:37.22      9688  35  59.242188 hřidři
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav budem*                30.15 0:01:37.25 0:01:37.47      9725  23  46.452148 vnom
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav potom                 98.47 0:01:39.98 0:01:40.46      9998  49   2.094727 potom
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav svah*                 51.89 0:01:42.28 0:01:42.56     10228  29  38.732422 Xvaji
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav letech                53.33 0:01:44.87 0:01:45.15     10487  29  37.573242 letvi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav protože              100.00 0:02:18.55 0:02:18.93     13855  39   0.000000 protože
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav takže                100.00 0:02:34.00 0:02:34.26     15400  27   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav opravdu               39.05 0:02:35.36 0:02:35.71     15536  36  79.539063 oporalt
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav další*                51.97 0:02:38.12 0:02:38.42     15812  31  42.024414 alši
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav trošk*                31.13 0:02:40.86 0:02:41.17     16086  32  71.622070 trafn
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav chvíle                44.52 0:02:41.08 0:02:41.33     16108  26  40.777832 neňíX
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kter*                 66.50 0:02:42.37 0:02:42.60     16237  24  22.278809 tiík
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vlastně               62.65 0:02:42.73 0:02:43.05     16273  33  38.838867 blasťi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav velk*                 24.80 0:02:44.60 0:02:44.83     16460  24  52.640625 iuk
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav teďka                 42.05 0:02:55.83 0:02:56.08     17583  26  42.595703 teťk
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vlastně               56.05 0:02:58.85 0:02:59.20     17885  36  50.978516 nasí
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kter*                100.00 0:03:21.07 0:03:21.40     20107  34   0.000000 kterou
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav ještě                100.00 0:03:24.66 0:03:25.11     20466  46   0.000000 ješťe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav řekn*                 53.80 0:03:44.98 0:03:45.22     22498  25  32.338379 Řiknu
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav nějakým               43.29 0:04:02.63 0:04:02.93     24263  31  63.800293 ťjakíX
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kvůli                 27.10 0:04:02.97 0:04:03.17     24297  21  43.374023 koli
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vlastně               75.23 0:04:07.62 0:04:08.00     24762  39  30.710938 vlasťňi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vždy*                 33.87 0:04:12.20 0:04:12.53     25220  34  64.803711 ickij
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jednoho               21.47 0:04:22.88 0:04:23.15     26288  28  77.742188 dooo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav krásn*                32.65 0:04:27.73 0:04:28.07     26773  35  75.432617 kjásní
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vlastně              100.00 0:04:28.45 0:04:28.77     26845  33   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jaksi                 87.38 0:04:32.87 0:04:33.17     27287  31  11.046875 jaksi
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav budem*                56.26 0:04:37.72 0:04:37.96     27772  25  30.620117 podeb
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav vůbec                100.00 0:04:39.30 0:04:39.63     27930  34   0.000000 vúbec
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav anebo                 40.54 0:04:39.73 0:04:40.00     27973  28  45.780762 anemvo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jaksi                 39.52 0:04:46.10 0:04:46.47     28610  38  65.625000 jake
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav nějaká                98.10 0:04:48.48 0:04:48.97     28848  50   3.043945 jaká
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav anebo                 27.51 0:04:49.18 0:04:49.46     28918  29  58.357910 snebo
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav úpln*                100.00 0:04:54.62 0:04:55.05     29462  44   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav velice                42.03 0:04:57.80 0:04:58.13     29780  34  64.927734 dencea
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav kter*                 33.78 0:05:02.55 0:05:02.76     30255  22  41.716309 teri
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav jaksi                 77.94 0:05:04.01 0:05:04.21     30401  21  13.125977 jakse
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav letech                42.60 0:05:04.61 0:05:04.91     30461  31  50.223633 lati
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav určitě               100.00 0:05:06.11 0:05:06.58     30611  48   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav určitě               100.00 0:05:06.82 0:05:07.25     30682  44   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav krásn*                92.57 0:05:12.03 0:05:12.41     31203  39   9.208984 krásnn
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav protože               71.09 0:05:13.87 0:05:14.17     31387  31  32.528320 prtože
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav měst*                 40.38 0:05:18.90 0:05:19.27     31890  38  73.926758 esta
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav měst*                 46.37 0:05:19.80 0:05:20.02     31980  23  35.661621 mďec
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav minut*                21.13 0:05:22.73 0:05:22.98     32273  26  57.971680 mjenouut
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav ještě                 31.24 0:05:24.05 0:05:24.28     32405  24  48.130859 šťe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav dnes*                100.00 0:05:24.67 0:05:24.96     32467  30   0.000000 dneska
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav krásn*               100.00 0:05:28.73 0:05:29.16     32873  44   0.000000 krásňe
d:\WordSpotting\DATA\Stream\Plastika_2543ed01972fadeb_360p.wav příště               100.00 0:05:30.10 0:05:30.42     33010  33   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav ještě                100.00 0:00:00.20 0:00:00.53        20  34   0.000000 ješťe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav dnes*                100.00 0:00:00.68 0:00:00.93        68  26   0.000000 dnes
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav někdo                100.00 0:00:01.15 0:00:01.37       115  23   0.000000 ňegdo
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav řekn*                100.00 0:00:04.41 0:00:04.73       441  33   0.000000 řekňeme
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav jaksi                 39.34 0:00:09.57 0:00:09.83       957  27  46.708984 deXsi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav plyn*                 22.09 0:00:13.58 0:00:13.81      1358  24  51.810059 lini
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav jejich               100.00 0:00:18.51 0:00:18.72      1851  22   0.000000 jejiX
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vždy*                100.00 0:00:45.36 0:00:45.62      4536  27   0.000000 vždi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav tisíc*                90.49 0:00:47.17 0:00:47.53      4717  37   9.988281 ťisíc
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kter*                 92.25 0:01:07.13 0:01:07.48      6713  36   7.862305 které
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nikdo                100.00 0:01:08.68 0:01:09.05      6868  38   0.000000 ňigdo
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav řekn*                 48.81 0:01:16.37 0:01:16.78      7637  42  60.917969 eknú
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vlastně               44.63 0:01:17.82 0:01:18.13      7782  32  57.583984 vásnée
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav pozor                 36.74 0:01:18.25 0:01:18.52      7825  28  50.927734 pozva
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav dobře                 99.36 0:01:23.80 0:01:24.23      8380  44   0.811523 dobře
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav myslíte               36.87 0:01:25.18 0:01:25.58      8518  41  93.745117 mislíšs
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vlastně               27.94 0:01:29.02 0:01:29.35      8902  34  77.828125 rafťní
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav jaksi                 44.63 0:01:29.56 0:01:29.85      8956  30  46.512695 jaktr
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav takže                 35.88 0:01:29.77 0:01:29.97      8977  21  38.148438 tože
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nikdy                 77.18 0:01:33.32 0:01:33.66      9332  35  22.365234 ndi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kvůli                 95.99 0:01:37.46 0:01:37.66      9746  21   2.385742 kvúli
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kter*                 37.16 0:01:37.93 0:01:38.20      9793  28  55.299316 trím
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav přesně                74.90 0:01:39.86 0:01:40.28      9986  43  35.142578 pŘesňí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav řekn*                 39.00 0:01:41.46 0:01:41.73     10146  28  56.121094 taknúu
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav měst*                 29.20 0:01:43.38 0:01:43.77     10338  40  79.292969 ňecs
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav tohoto                32.48 0:01:47.73 0:01:48.05     10773  33  70.220703 vhoto
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav trošk*               100.00 0:01:58.22 0:01:58.47     11822  26   0.000000 trošku
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav letech                34.73 0:02:02.60 0:02:03.00     12260  41  75.384766 ateX
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nebyl*                48.79 0:02:04.27 0:02:04.56     12427  30  43.019043 nemr
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav budem*                21.13 0:02:04.45 0:02:04.66     12445  22  56.784180 muremo
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav samozřejmě            95.93 0:02:06.21 0:02:06.83     12621  63  13.492188 samozřejmňe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kter*                100.00 0:02:17.67 0:02:17.97     13767  31   0.000000 kterí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav anebo                 71.11 0:02:39.30 0:02:39.65     15930  36  29.325195 nebo
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav jmenuje               27.96 0:02:40.38 0:02:40.70     16038  33  74.916992 mené
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav hlavně                33.70 0:02:40.71 0:02:41.03     16071  33  71.609375 áavňí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nechat                30.67 0:02:46.28 0:02:46.63     16628  36  70.371094 neXám
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav třicet*               39.08 0:02:48.26 0:02:48.62     16826  37  73.103516 tŘiet
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kter*                 91.99 0:02:48.60 0:02:48.98     16860  39   8.972656 kkeré
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav stát*                 45.44 0:02:57.70 0:02:57.87     17770  18  24.552246 seát
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav potom                 96.77 0:02:58.03 0:02:58.38     17803  36   3.277344 fotom
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nebyl*                29.97 0:03:01.27 0:03:01.61     18127  35  78.429688 odila
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav chvíle                43.12 0:03:02.73 0:03:02.98     18273  26  41.804199 Ximi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav osobně                56.95 0:03:06.23 0:03:06.52     18623  30  41.324707 ossobňe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav evrop*                48.35 0:03:06.67 0:03:06.95     18667  29  47.520020 krlopr
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav prostě                29.86 0:03:07.75 0:03:08.05     18775  31  70.135254 prssň
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav krásn*                97.94 0:03:10.51 0:03:11.03     19051  53   3.544922 krásňe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav politik*              91.74 0:03:19.76 0:03:20.20     19976  45  13.381836 politij
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav dokonce               79.01 0:03:27.80 0:03:28.21     20780  42  32.117188 ukonce
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nějakým               72.30 0:03:29.81 0:03:30.07     20981  27  27.420410 ňejakí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav budem*                30.01 0:03:31.97 0:03:32.16     21197  20  39.191895 bude
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav hezky                 48.88 0:03:32.68 0:03:33.06     21268  39  55.465820 hesk
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav přesně                73.04 0:03:37.10 0:03:37.46     21710  37  32.354492 pŘesed
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav stran*                39.74 0:03:37.33 0:03:37.62     21733  30  57.847168 sedáne
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav dobře                 44.82 0:03:48.78 0:03:49.06     22878  29  44.421387 rpŘe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav plán*                 27.90 0:04:09.96 0:04:10.28     24996  33  77.869141 pane
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav kvůli                 39.56 0:04:10.48 0:04:10.73     25048  26  44.419922 olif
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nějakým               61.10 0:04:21.43 0:04:21.71     26143  29  40.264648 jeakí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav volb*                 44.16 0:04:24.62 0:04:24.93     26462  32  50.816406 olň
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav velk*                 48.06 0:04:25.33 0:04:25.63     26533  31  45.451660 llkh
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav anebo                 36.73 0:04:25.62 0:04:25.86     26562  25  44.288086 ani4
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav nějakým               51.94 0:04:27.26 0:04:27.67     26726  42  73.539063 ňákí
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav život*                97.72 0:04:30.40 0:04:30.90     27040  51   3.734375 života
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav život*                98.89 0:04:32.00 0:04:32.30     27200  31   0.972656 život
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav jaksi                 69.38 0:04:36.45 0:04:36.71     27645  27  23.574707 jakse
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav takto                 60.21 0:04:39.03 0:04:39.37     27903  35  38.990234 takti
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vždy*                 81.05 0:04:40.91 0:04:41.66     28091  76  40.468750 ckvis
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav velmi                100.00 0:04:42.08 0:04:42.35     28208  28   0.000000 velmi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav dobře                 97.90 0:04:42.38 0:04:42.95     28238  58   3.388672 dobře
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vždy*                 30.23 0:04:43.41 0:04:43.72     28341  32  63.495117 icki
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav ještě                 77.06 0:04:43.68 0:04:43.97     28368  30  19.272461 ešťe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav tisíc*                44.54 0:05:17.73 0:05:18.10     31773  38  58.235352 ics
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav úpln*                 35.45 0:05:20.30 0:05:20.65     32030  36  65.515625 plňez
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav přístup*              44.20 0:05:24.96 0:05:25.27     32496  32  65.290039 Řistup
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav politik*              60.96 0:05:27.42 0:05:27.83     32742  42  59.726563 politr
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav další*                97.41 0:05:34.41 0:05:34.76     33441  36   2.625000 další
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav naprosto              73.52 0:05:37.25 0:05:37.67     33725  43  46.333984 naprost
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav vidět                 40.64 0:05:43.77 0:05:44.02     34377  26  43.631836 viďe
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav někdy                100.00 0:05:44.47 0:05:44.75     34447  29   0.000000 ňegdi
d:\WordSpotting\DATA\Stream\Plastika_302eeb40e1b11180_360p.wav příště               100.00 0:05:44.77 0:05:45.23     34477  47   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav samozřejmě           100.00 0:00:08.45 0:00:09.10       845  66   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav opravdu              100.00 0:00:13.50 0:00:14.00      1350  51   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav kter*                 90.76 0:00:46.60 0:00:46.98      4660  39  10.352539 kterí
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav zákon*                45.13 0:00:50.62 0:00:51.01      5062  40  61.457031 zákr
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nechat                87.29 0:00:53.52 0:00:53.81      5352  30  10.680176 neXad
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav věc*                  92.36 0:00:55.61 0:00:55.93      5561  33   7.216797 víeci
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav dnes*                 58.05 0:00:59.36 0:00:59.56      5936  21  21.396973 4z
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav vlastně               97.03 0:01:00.62 0:01:01.02      6062  41   3.916016 vlasťňe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velk*                 40.51 0:01:01.13 0:01:01.43      6113  31  52.056152 lokí
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nebyl*                94.36 0:01:02.91 0:01:03.21      6291  31   5.635254 nebilo
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nějaká                24.52 0:01:04.10 0:01:04.45      6410  36  87.555664 jak
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav letech                26.48 0:01:05.13 0:01:05.48      6513  36  74.621094 eteX
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nikdy                100.00 0:01:05.45 0:01:05.76      6545  32   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nebyl*                24.19 0:01:05.92 0:01:06.18      6592  27  66.708984 nebá
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                100.00 0:01:07.10 0:01:07.32      6710  23   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takto                 32.51 0:01:14.95 0:01:15.27      7495  33  63.773438 tagk
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav zvíř*                 47.12 0:01:19.66 0:01:20.01      7966  36  69.006836 ehřato
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav někteří               42.46 0:01:20.32 0:01:20.70      8032  39  80.270508 eťeří
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velk*                 78.21 0:01:40.36 0:01:40.68     10036  33  20.592773 llké
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav budem*               100.00 0:01:55.11 0:01:55.37     11511  27   0.000000 budeme
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav samozřejmě            81.63 0:01:55.52 0:01:55.96     11552  45  39.685547 saazřeňe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav pokud                100.00 0:01:56.40 0:01:56.65     11640  26   0.000000 pokut
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav jejich                31.08 0:01:57.56 0:01:57.87     11756  32  62.713867 ji
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav věc*                  44.91 0:01:58.12 0:01:58.38     11812  27  36.359375 vjet
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav kter*                 85.45 0:02:24.96 0:02:25.22     14496  27  11.207031 ktéré
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav vlád*                 35.54 0:02:30.58 0:02:30.86     15058  29  51.890137 vváďi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav řekn*                 31.87 0:02:35.50 0:02:35.73     15550  24  47.691406 řikuňe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav třicet*               95.54 0:02:36.58 0:02:36.93     15658  36   5.174805 tŘicet
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nejsou                49.51 0:02:41.23 0:02:41.57     16123  35  56.550781 nijsou
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav budem*               100.00 0:02:42.58 0:02:42.87     16258  30   0.000000 budeme
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav plán*                 94.61 0:03:02.75 0:03:03.30     18275  56  13.328125 plánovaní
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav třicet*               97.44 0:03:07.01 0:03:07.33     18701  33   2.765625 tŘicet
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav budem*                77.86 0:03:09.40 0:03:09.65     18940  26  16.276367 budem
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav měst*                 39.51 0:03:13.63 0:03:14.01     19363  39  75.009766 esťe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav třicet*               86.69 0:03:14.00 0:03:14.38     19400  39  17.034180 tŘic4
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                 68.05 0:03:14.65 0:03:14.90     19465  26  23.481445 tagdi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav krásn*                34.33 0:03:17.25 0:03:17.61     19725  37  78.800781 rozné
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav ještě                 73.70 0:03:17.57 0:03:17.81     19757  25  18.407715 ešťr
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav potom                 48.52 0:03:17.86 0:03:18.15     19786  30  43.241699 potl
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav měst*                 36.95 0:03:18.63 0:03:18.96     19863  34  68.095703 jeste
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                 41.08 0:03:20.00 0:03:20.31     20000  32  53.616211 egXi4
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav smlouv*               55.81 0:03:21.82 0:03:22.13     20182  32  51.703125 lovj
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav věc*                  90.33 0:03:22.05 0:03:22.38     20205  34   9.478516 jecn
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav plyn*                 34.36 0:03:22.65 0:03:22.86     20265  22  35.447754 lin
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav život*               100.00 0:03:23.23 0:03:23.57     20323  35   0.000000 život
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav kter*                 71.46 0:03:24.33 0:03:24.57     20433  25  19.978516 ktere
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                 91.27 0:03:25.03 0:03:25.28     20503  26   6.413574 tag4
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav kter*                 50.90 0:03:37.93 0:03:38.16     21793  24  27.986816 kere
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                 73.05 0:03:39.45 0:03:39.63     21945  19  15.092773 agží
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav uvidíte               45.57 0:03:39.42 0:03:39.81     21942  40  78.376953 agžíte
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav potom                 24.67 0:03:40.40 0:03:40.63     22040  24  52.728027 adom
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav všechn*               57.42 0:03:45.36 0:03:45.61     22536  26  35.767090 šeha
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav hlavně                49.80 0:03:45.51 0:03:45.75     22551  25  40.161621 havi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav česk*                 38.90 0:03:46.06 0:03:46.41     22606  36  62.018555 čekjá
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velk*                 24.26 0:03:46.41 0:03:46.73     22641  33  71.571289 tekéj
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav teďka                 25.67 0:03:47.06 0:03:47.40     22706  35  72.847656 teťj
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav žádn*                 54.75 0:03:57.33 0:03:57.82     23733  50  72.392578 ženou4
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav řekn*                 71.42 0:04:12.95 0:04:13.32     25295  38  39.870117 řagžade
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav jaksi                 55.56 0:04:13.40 0:04:13.60     25340  21  26.440918 jakse
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav dobře                100.00 0:04:16.32 0:04:16.63     25632  32   0.000000 dobře
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav jaksi                 59.30 0:04:20.68 0:04:20.92     26068  25  28.493164 jakse
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velmi                 80.51 0:04:28.26 0:04:28.63     26826  38  21.144531 veálmň
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav žádn*                100.00 0:04:29.57 0:04:29.83     26957  27   0.000000 žádním
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                100.00 0:04:30.65 0:04:31.17     27065  53   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav jaksi                 69.07 0:04:33.23 0:04:33.45     27323  23  19.486328 ekse
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav potom                 49.92 0:04:37.72 0:04:38.03     27772  32  45.576172 otom
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nikdo                100.00 0:04:40.63 0:04:40.95     28063  33   0.000000 ňigdo
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav někdo                 79.81 0:04:40.63 0:04:41.02     28063  40  22.608398 ňigdo
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav prostě                85.99 0:04:42.12 0:04:42.75     28212  64  28.580078 prsťe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav tohle                 46.32 0:04:42.93 0:04:43.22     28293  30  45.095215 ilzna
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nikdo                 99.32 0:04:43.62 0:04:43.88     28362  27   0.522949 ňegdo
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav někdo                 88.11 0:04:43.62 0:04:43.88     28362  27   9.157227 ňegdo
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav třicet*               27.28 0:04:46.07 0:04:46.37     28607  31  72.724121 cisoid
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav žádn*                 76.83 0:04:46.38 0:04:46.68     28638  31  23.168457 ijadním
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav protože               64.95 0:04:47.07 0:04:47.40     28707  34  42.587891 prože
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav samozřejmě            92.48 0:04:47.88 0:04:48.35     28788  48  17.137695 samozřeji
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav všechn*               82.67 0:04:49.00 0:04:49.36     28900  37  20.791016 fšiXňi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                100.00 0:04:50.00 0:04:50.36     29000  37   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav někdo                 91.42 0:04:50.38 0:04:50.62     29038  25   6.005859 ňegda
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nikdy                100.00 0:04:52.50 0:04:52.80     29250  31   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav někdy                 67.16 0:04:52.51 0:04:53.03     29251  53  49.429688 ňigdi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takových              70.60 0:04:54.25 0:04:54.76     29425  52  55.569336 takoví
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nějakým               64.75 0:04:54.75 0:04:55.07     29475  33  42.827148 ňejakí
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav kter*                100.00 0:04:57.23 0:04:57.52     29723  30   0.000000 které
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav jakoby                38.50 0:04:59.71 0:05:00.08     29971  38  76.264648 jakovi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav určitě               100.00 0:05:01.53 0:05:02.05     30153  53   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav protože               91.83 0:05:03.01 0:05:04.00     30301 100  29.414063 prtože
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                100.00 0:05:06.81 0:05:07.31     30681  51   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav určitě               100.00 0:05:08.21 0:05:08.63     30821  43   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav David*                46.84 0:05:10.78 0:05:11.01     31078  24  35.349121 davit
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nějakým               36.35 0:05:13.11 0:05:13.41     31311  31  55.689453 jákú
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velk*                 74.00 0:05:36.70 0:05:37.00     33670  31  22.749512 marké
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav dnešní*               96.22 0:05:37.37 0:05:37.70     33737  34   4.078125 dnešňe
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav ještě                 86.64 0:05:38.22 0:05:38.52     33822  31  11.687012 ješťa
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav protože               72.96 0:05:39.05 0:05:39.42     33905  38  37.725586 prtože
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav takže                100.00 0:05:49.12 0:05:49.50     34912  39   0.000000 tagže
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav nebyl*                38.65 0:05:49.65 0:05:49.96     34965  32  63.806641 ebili
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav přesně                57.33 0:05:52.17 0:05:52.60     35217  44  59.734375 pŘesne
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav velmi                100.00 0:05:53.20 0:05:53.45     35320  26   0.000000 velmi
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav dobře                 92.77 0:05:53.48 0:05:54.07     35348  60  12.146484 dobře
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav opravdu              100.00 0:06:00.10 0:06:00.65     36010  56   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Plastika_7b1138b1d3a6dfef_360p.wav příště               100.00 0:06:04.17 0:06:04.57     36417  41   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vítej*               100.00 0:00:00.20 0:00:00.78        20  59   0.000000 vítejte
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav dnes*                 38.31 0:00:03.58 0:00:03.81       358  24  35.165527 nes
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav krásn*               100.00 0:00:08.86 0:00:09.35       886  50   0.000000 krásné
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vždy*                100.00 0:00:14.85 0:00:15.07      1485  23   0.000000 vždi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav všechn*              100.00 0:00:16.42 0:00:16.73      1642  32   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav potom                 31.67 0:00:18.92 0:00:19.30      1892  39  74.142578 tom
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                100.00 0:00:34.78 0:00:35.18      3478  41   0.000000 která
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav velk*                 38.73 0:00:40.87 0:00:41.11      4087  25  42.891113 rlkín
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav zákon*                22.41 0:00:43.15 0:00:43.50      4315  36  78.757813 zákro
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 66.37 0:00:43.53 0:00:43.78      4353  26  24.716797 kteri
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav minut*                27.63 0:00:44.43 0:00:44.73      4443  31  72.366211 menopa
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 38.54 0:00:45.41 0:00:45.65      4541  25  43.022461 pere
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vždy*                 47.32 0:00:46.73 0:00:46.88      4673  16  20.545410 dí
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav řekn*                 38.82 0:00:47.45 0:00:47.72      4745  28  56.282715 řiknll
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav příště                34.34 0:00:49.20 0:00:49.55      4920  36  76.170898 žíškéj
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vlastně              100.00 0:00:49.82 0:00:50.05      4982  24   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav téhle                 25.20 0:00:51.80 0:00:52.06      5180  27  57.594238 tedla
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vlastně               88.24 0:00:56.05 0:00:56.33      5605  29  11.293457 vlvzňí
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                 52.48 0:00:57.13 0:00:57.40      5713  28  36.592773 ešťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav anebo                 48.19 0:01:03.81 0:01:04.08      6381  28  41.703613 ebov
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vůbec                100.00 0:01:04.06 0:01:04.37      6406  32   0.000000 vúbec
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nějakým               94.09 0:01:04.46 0:01:04.81      6446  36   7.709961 ňejakím
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav život*                65.48 0:01:05.37 0:01:05.70      6537  34  32.622070 živoeC
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nejsou               100.00 0:01:09.51 0:01:09.97      6951  47   0.000000 nejsou
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav úpln*                100.00 0:01:09.95 0:01:10.28      6995  34   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav teďka                100.00 0:01:11.33 0:01:11.60      7133  28   0.000000 teťka
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 97.93 0:01:12.56 0:01:12.86      7256  31   1.815430 ktera
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav teďka                 31.39 0:01:12.87 0:01:13.22      7287  36  69.639648 pekti
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav úpln*                100.00 0:01:14.01 0:01:14.41      7401  41   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jaksi                 90.89 0:01:17.36 0:01:17.67      7736  32   8.287109 jaksi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav tisíc*                40.62 0:01:17.72 0:01:18.02      7772  31  51.959961 ťešít
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jaksi                 87.37 0:01:23.13 0:01:23.35      8313  23   7.958008 jegsi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav plyn*                 43.65 0:01:23.87 0:01:24.23      8387  37  76.072266 pinovi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav úpln*                100.00 0:01:25.73 0:01:26.05      8573  33   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav rozhodně             100.00 0:01:31.13 0:01:31.65      9113  53   0.000000 rozhoďňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav svah*                 52.35 0:01:37.35 0:01:37.71      9735  37  57.185547 svedm
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav svah*                 76.23 0:01:42.25 0:01:42.68     10225  44  29.952148 sválu
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 90.78 0:01:43.37 0:01:43.73     10337  37   9.683594 terí
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jmenuje               97.55 0:01:44.41 0:01:44.95     10441  55   4.847656 menuje
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav minut*                83.75 0:01:45.35 0:01:45.61     10535  27  12.512695 minod
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav tohoto                20.63 0:01:51.35 0:01:51.60     11135  26  66.672852 tohhr
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav pokud                 65.11 0:01:51.81 0:01:52.06     11181  26  25.640625 tokut
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav svah*                 43.16 0:01:52.23 0:01:52.60     11223  38  59.677734 svalvu
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav plán*                 30.65 0:01:56.88 0:01:57.13     11688  26  43.691406 pné
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nějakým               76.14 0:01:57.53 0:01:58.01     11753  49  41.873047 ťím
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takže                 46.19 0:01:58.61 0:01:58.86     11861  26  39.546875 taghl
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav stát*                 44.31 0:01:58.90 0:01:59.17     11890  28  38.424805 stá
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav minut*                90.00 0:02:11.13 0:02:11.36     13113  24   6.650879 minud
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vždy*                 88.98 0:02:14.00 0:02:14.46     13400  47  14.653320 licki
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav stát*                 46.83 0:02:15.70 0:02:16.13     13570  44  57.420898 stá
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav znov*                 81.87 0:02:18.25 0:02:18.52     13825  28  14.595703 znouu
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav případě              100.00 0:02:19.23 0:02:19.61     13923  39   0.000000 pŘípaďe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                 86.79 0:02:20.06 0:02:20.41     14006  36  13.413086 ešťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav dnes*                 90.15 0:02:22.17 0:02:22.50     14217  34   7.976563 mes
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav abychom              100.00 0:02:24.22 0:02:24.52     14422  31   0.000000 abiXom
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vždy*                 20.01 0:02:25.40 0:02:25.65     14540  26  58.794922 itkit
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 63.73 0:02:26.45 0:02:26.66     14645  22  22.851563 fer
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav stran*                93.41 0:02:27.32 0:02:27.90     14732  59  13.931641 staranáX
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav budem*                29.73 0:02:29.48 0:02:29.70     14948  23  50.593262 rlojé
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav samozřejmě            94.70 0:02:30.27 0:02:30.67     15027  41  10.498047 tamozřejňi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav tohoto                91.94 0:02:30.70 0:02:31.01     15070  32   8.385742 tohoto
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                 86.86 0:02:35.96 0:02:36.25     15596  30  11.037109 ešťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav dokonce               59.01 0:02:49.70 0:02:50.18     16970  49  73.790039 dokonče
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takže                 66.45 0:02:51.30 0:02:51.51     17130  22  21.137695 toďji
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav příště                33.10 0:02:54.86 0:02:55.18     17486  33  72.256836 říštv
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                 88.39 0:02:55.71 0:02:55.98     17571  28   9.342773 verí
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                100.00 0:03:07.87 0:03:08.13     18787  27   0.000000 ješťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav uvidíte               82.20 0:03:08.58 0:03:09.11     18858  54  34.447266 uviďíteX
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav anebo                 26.64 0:03:15.68 0:03:16.00     19568  33  66.753906 nobl
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav chvíle                40.71 0:03:21.12 0:03:21.41     20112  30  49.802734 ťele
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav minut*                34.55 0:03:22.63 0:03:23.05     20263  43  77.881836 í4ú
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                 96.44 0:03:24.21 0:03:24.52     20421  32   3.240234 ješťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav měst*                 28.92 0:03:45.70 0:03:45.92     22570  23  47.270996 mňec
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nebyl*               100.00 0:03:47.17 0:03:47.55     22717  39   0.000000 nebil
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav žádn*                100.00 0:03:47.58 0:03:47.97     22758  40   0.000000 žádní
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vidět                 91.39 0:03:52.76 0:03:53.02     23276  27   6.628906 viďet
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vždy*                 92.07 0:03:56.48 0:03:56.90     23648  43   9.435547 dicki
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav evrop*                36.49 0:04:06.63 0:04:06.95     24663  33  66.046875 lropu
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav další*                93.37 0:04:07.06 0:04:07.38     24706  33   6.268555 další
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav otázk*               100.00 0:04:18.82 0:04:19.20     25882  39   0.000000 otáska
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jaksi                100.00 0:04:19.92 0:04:20.12     25992  21   0.000000 jaksi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav hlavně               100.00 0:04:23.45 0:04:23.75     26345  31   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav naprosto              96.54 0:04:24.83 0:04:25.27     26483  45   6.224609 naprost
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vlastně              100.00 0:04:29.27 0:04:29.56     26927  30   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nebyl*                74.55 0:04:32.20 0:04:32.51     27220  32  26.463867 nebira
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav hlavně               100.00 0:04:33.87 0:04:34.18     27387  32   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jaksi                 58.26 0:04:34.92 0:04:35.21     27492  30  35.060547 eaksi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav úpln*                 29.31 0:04:35.36 0:04:35.66     27536  31  61.854004 plň
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav měst*                 30.53 0:04:41.91 0:04:42.26     28191  36  80.582031 mestv
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav svoji                 36.13 0:04:42.20 0:04:42.42     28220  23  42.473633 voj
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav letech                50.21 0:04:46.63 0:04:46.93     28663  31  43.566895 et2
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav chvíle                34.28 0:04:50.47 0:04:50.75     29047  29  52.906250 X5l
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav ještě                 87.94 0:04:53.13 0:04:53.45     29313  33  10.971680 ešťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav kter*                100.00 0:04:54.58 0:04:54.87     29458  30   0.000000 kterí
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takže                 22.79 0:04:55.66 0:04:55.87     29566  22  48.640625 taki
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takovej               86.79 0:04:57.06 0:04:57.37     29706  32  15.451172 takoej
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav David*                21.55 0:05:00.23 0:05:00.55     30023  33  71.386719 demved
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav jejich                36.67 0:05:00.43 0:05:00.77     30043  35  62.067383 edi4
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takže                 54.21 0:05:00.72 0:05:01.01     30072  30  38.466309 tagi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav určitě                57.62 0:05:03.22 0:05:03.47     30322  26  35.598145 učťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav určitě               100.00 0:05:04.35 0:05:04.75     30435  41   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav velk*                 46.15 0:05:06.95 0:05:07.28     30695  34  60.312500 elkem
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav nebyl*                40.67 0:05:08.72 0:05:08.93     30872  22  37.375488 nebr
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav plyn*                 20.41 0:05:09.12 0:05:09.42     30912  31  79.588867 tlnen
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav takže                 62.13 0:05:12.41 0:05:12.61     31241  21  22.533203 tagi
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav vlastně               95.72 0:05:18.40 0:05:18.98     31840  59   8.208008 vlasťňe
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav uvidíte               66.78 0:05:19.63 0:05:20.16     31963  54  64.278320 iviďíte
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav potom                100.00 0:05:22.42 0:05:22.67     32242  26   0.000000 potom
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav pokud                100.00 0:05:28.97 0:05:29.32     32897  36   0.000000 pokut
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav budem*                32.54 0:05:29.43 0:05:29.68     32943  26  56.668945 budete
d:\WordSpotting\DATA\Stream\Plastika_802a5c658308e9d1_360p.wav příště                94.28 0:05:29.95 0:05:30.26     32995  32   5.952148 pŘíšťe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takže                 27.80 0:00:20.40 0:00:20.78      2040  39  80.863281 takŘ
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav letech                26.60 0:00:21.05 0:00:21.30      2105  26  53.951172 léde
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav letech                49.72 0:00:23.90 0:00:24.28      2390  39  56.310547 jete4
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav kvůli                100.00 0:00:26.80 0:00:27.03      2680  24   0.000000 kvúli
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 92.22 0:00:28.12 0:00:28.92      2812  81  17.697266 váslo
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav trošk*                97.68 0:00:30.21 0:00:30.67      3021  47   3.526367 troškv
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav kvůli                 79.07 0:00:30.56 0:00:30.91      3056  36  21.247070 kvúoli
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav samozřejmě           100.00 0:00:32.32 0:00:32.81      3232  50   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav kter*                 77.20 0:00:33.61 0:00:33.83      3361  23  12.997559 kerí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav tisíc*               100.00 0:00:34.58 0:00:34.96      3458  39   0.000000 ťisíc
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav způsob*               89.85 0:00:35.00 0:00:35.57      3500  58  21.463867 púsodu
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vlád*                 81.55 0:00:38.57 0:00:38.85      3857  29  14.850098 vláva
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav jaksi                 74.06 0:00:39.82 0:00:40.17      3982  36  26.325195 jakst
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav trošk*                77.18 0:00:43.52 0:00:43.77      4352  26  19.167480 troXu
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav dobře                 49.36 0:00:43.91 0:00:44.20      4391  30  42.537598 lbřjje
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vajíčk*               99.39 0:00:48.08 0:00:48.83      4808  76   1.683594 vajíčka
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav protože               89.62 0:00:50.45 0:00:51.15      5045  71  26.625000 prtože
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav anebo                 59.74 0:00:53.32 0:00:53.72      5332  41  46.500000 and
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav dnes*                 93.81 0:00:53.63 0:00:54.46      5363  84  16.601563 dnheska
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav důležit*              97.95 0:00:58.13 0:00:58.76      5813  64   5.230469 úležití
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav abychom               41.67 0:00:59.11 0:00:59.53      5911  43  81.655273 abidám
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav prostě                35.23 0:01:00.05 0:01:00.28      6005  24  51.812012 tosv
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vajíčk*               81.06 0:01:02.06 0:01:02.38      6206  33  23.006836 vajčká
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav měst*                 27.16 0:01:02.52 0:01:02.73      6252  22  45.891602 lest
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav situac*               56.81 0:01:03.93 0:01:04.40      6393  48  73.857422 ituat
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takže                 50.80 0:01:04.82 0:01:05.01      6482  20  27.552734 tagi
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav věc*                  43.21 0:01:07.83 0:01:08.05      6783  23  35.775391 vejc
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav skutečně              96.71 0:01:16.61 0:01:16.98      7661  38   5.100586 zkutečňe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav velk*                 78.00 0:01:17.41 0:01:17.75      7741  35  21.558594 gerkí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav důležit*             100.00 0:01:21.10 0:01:21.57      8110  48   0.000000 dúležití
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav česk*                 81.06 0:01:21.95 0:01:22.51      8195  57  30.487305 čecko
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav hezky                 88.05 0:01:23.05 0:01:23.30      8305  26   8.786621 heskí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav protože               98.20 0:01:24.12 0:01:24.45      8412  34   2.191406 protože
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav rychle                95.70 0:01:25.38 0:01:25.76      8538  39   4.668945 riXle
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav potom                100.00 0:01:27.15 0:01:27.40      8715  26   0.000000 potom
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav chvíle               100.00 0:01:28.61 0:01:28.97      8861  37   0.000000 Xvíli
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav jejich                50.53 0:01:30.22 0:01:30.47      9022  26  36.362793 ejik
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav věc*                 100.00 0:01:31.67 0:01:31.98      9167  32   0.000000 vjeci
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vajíčk*               86.33 0:01:33.22 0:01:33.58      9322  37  18.450195 vajíčka
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav rychle                62.77 0:01:35.22 0:01:35.50      9522  29  29.967773 riXl
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav hezky                 82.06 0:01:35.51 0:01:36.08      9551  58  29.517578 jski
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav žádn*                 30.34 0:01:47.97 0:01:48.20     10797  24  46.325195 dán
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav tohle                 51.93 0:01:48.88 0:01:49.22     10888  35  47.111328 teohale
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vždy*                 60.21 0:01:49.35 0:01:49.56     10935  22  25.070801 mickí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 36.78 0:01:49.72 0:01:50.13     10972  42  75.228516 vásl
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takže                 67.51 0:01:50.67 0:01:50.92     11067  26  23.881348 rže
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 55.54 0:01:52.56 0:01:52.95     11256  40  56.914063 másleer
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav samozřejmě            94.61 0:01:53.00 0:01:53.45     11300  46  11.964844 samozřejie
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav velk*                 25.42 0:01:53.53 0:01:53.85     11353  33  67.872070 plekl
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav nějakým               71.79 0:01:54.83 0:01:55.13     11483  31  24.680664 ákí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav cibul*                44.64 0:01:55.03 0:01:55.36     11503  34  59.784180 ivule
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 99.86 0:01:59.81 0:02:00.35     11981  55   0.213867 másl
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav premiér*              38.28 0:02:05.58 0:02:05.92     12558  35  77.767578 preme
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav abychom               33.63 0:02:09.95 0:02:10.28     12995  34  74.330078 abisn
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav Michal*               34.07 0:02:10.07 0:02:10.42     13007  36  76.480469 bisínál
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav dobře                100.00 0:02:10.41 0:02:10.66     13041  26   0.000000 dobře
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav protože               68.61 0:02:11.26 0:02:11.56     13126  31  35.316406 prože
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav velice                85.29 0:02:12.11 0:02:12.41     13211  31  14.712402 veljcij
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav opravdu               61.36 0:02:12.61 0:02:12.97     13261  37  52.167969 lhrahu
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav rychle                33.53 0:02:12.98 0:02:13.30     13298  33  60.488281 viX4
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vajíčk*               94.86 0:02:14.42 0:02:14.78     13442  37   6.938477 vajíčka
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav rozhodně              90.72 0:02:17.51 0:02:17.83     13751  33  12.526367 hozhoňe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vidět                 97.07 0:02:21.18 0:02:21.46     14118  29   2.360352 viďen
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav letech                54.71 0:02:21.93 0:02:22.23     14193  31  39.627441 tateX
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav věc*                  44.34 0:02:22.31 0:02:22.61     14231  31  41.742188 ajec4
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 90.72 0:02:24.28 0:02:24.60     14428  33   8.448242 áslo
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav ulic*                 27.25 0:02:26.96 0:02:27.37     14696  42  74.206055 ivic
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav hezky                 77.77 0:02:28.93 0:02:29.16     14893  24  14.780273 hesk
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav prostě                33.05 0:02:29.28 0:02:29.58     14928  31  66.947754 prostŘe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav teďka                 43.92 0:02:33.41 0:02:33.91     15341  51  80.473633 teť4
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav možná                 35.85 0:02:40.21 0:02:40.47     16021  27  49.396973 možní
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav trošk*                79.35 0:02:48.62 0:02:48.90     16862  29  19.000488 tosku
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav dnešní*               44.35 0:03:01.03 0:03:01.37     18103  35  62.331055 aešmíX
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav velice                37.26 0:03:01.61 0:03:01.91     18161  31  62.737793 vejce
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav jinak                 54.31 0:03:06.45 0:03:06.66     18645  22  28.785645 jinak
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav prostě                37.45 0:03:07.05 0:03:07.33     18705  29  60.051758 pusťi
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav dobře                 29.60 0:03:07.56 0:03:07.96     18756  41  81.316406 to4á
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav másl*                 78.08 0:03:07.85 0:03:08.43     18785  59  36.827148 áslá
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav nechat                22.87 0:03:10.18 0:03:10.53     19018  36  78.283203 neXá
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav opravdu               27.22 0:03:16.28 0:03:16.57     19628  30  78.604004 pravňí
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav způsob*               93.11 0:03:22.86 0:03:23.36     20286  51  14.114258 púsobem
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takto                 28.87 0:03:25.36 0:03:25.62     20536  27  54.771973 taga
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav jakoby               100.00 0:03:25.71 0:03:26.03     20571  33   0.000000 jakobi
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav budem*                93.09 0:03:28.91 0:03:29.11     20891  21   4.109375 budem
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav znov*                 45.35 0:03:33.45 0:03:33.73     21345  29  45.906738 nola
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav tohle                 23.98 0:03:42.20 0:03:42.51     22220  32  69.177734 lohle
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav teďka                 97.28 0:03:44.86 0:03:45.47     22486  62   4.757813 eťka
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav kter*                 28.18 0:03:49.66 0:03:49.87     22966  22  38.781250 kem
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav důležit*              98.17 0:03:49.81 0:03:50.32     22981  52   3.842773 múležití
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vlád*                 30.42 0:03:50.90 0:03:51.18     23090  29  58.445801 máďi
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takových              63.75 0:03:51.17 0:03:51.60     23117  44  57.085938 zakoví
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav nebyl*                50.39 0:03:54.48 0:03:54.75     23448  28  43.658203 vivola
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav Praha                 58.68 0:03:55.76 0:03:56.20     23576  45  52.057617 práav
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takže                 46.56 0:04:02.95 0:04:03.20     24295  26  39.279785 tegže
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav vajíčk*               81.15 0:04:03.28 0:04:03.58     24328  31  21.203125 vajíško
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav ještě                 67.24 0:04:04.11 0:04:04.33     24411  23  21.785645 ešťi
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav takže                 79.43 0:04:07.32 0:04:07.70     24732  39  22.316406 agže
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav skutečně             100.00 0:04:08.90 0:04:09.41     24890  52   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav myslíte               52.98 0:04:10.42 0:04:10.83     25042  42  71.938477 mislíb
d:\WordSpotting\DATA\Stream\Prakul_3c51411bd3194ca5_360p.wav letech                23.42 0:04:15.80 0:04:16.05     25580  26  56.287109 lag4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                33.57 0:00:20.82 0:00:21.17      2082  36  77.058594 ciguo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                95.01 0:00:22.53 0:00:22.85      2253  33   5.193359 pudeme
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                95.76 0:00:23.62 0:00:24.30      2362  69   9.328125 ceboli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*               100.00 0:00:26.73 0:00:27.16      2673  44   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav másl*                 76.66 0:00:28.25 0:00:28.97      2825  73  48.187500 páslo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 65.26 0:00:30.75 0:00:31.13      3075  39  38.910156 nebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav plyn*                 26.74 0:00:32.96 0:00:33.15      3296  20  35.162598 ple
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav velk*                 48.64 0:00:37.48 0:00:37.91      3748  44  62.921875 rkif4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                30.19 0:00:38.88 0:00:39.10      3888  23  50.259766 budeje
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav věc*                  96.28 0:00:39.92 0:00:40.17      3992  26   2.345703 vjec
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohoto                37.85 0:00:42.91 0:00:43.15      4291  25  49.716797 tohopr
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                99.66 0:00:48.20 0:00:48.51      4820  32   0.348633 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav másl*                 95.55 0:00:48.50 0:00:48.98      4850  49   6.232422 máslh
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                90.27 0:00:52.62 0:00:53.01      5262  40  12.456055 cimuli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ulic*                 47.53 0:00:52.90 0:00:53.06      5290  17  22.037598 ulic
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav nějaká                74.10 0:00:53.16 0:00:53.42      5316  27  17.092285 nákr
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav plátki                94.33 0:00:53.81 0:00:54.22      5381  42   7.708008 plátk
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                85.04 0:01:00.03 0:01:00.38      6003  36  17.354492 kráskí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ulic*                 49.07 0:01:05.16 0:01:05.40      6516  25  35.652832 olize
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav úpln*                100.00 0:01:08.05 0:01:08.32      6805  28   0.000000 úplňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                100.00 0:01:08.95 0:01:09.20      6895  26   0.000000 tagže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav žádn*                100.00 0:01:09.45 0:01:09.88      6945  44   0.000000 žádní
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 80.59 0:01:11.86 0:01:12.07      7186  22  12.228027 búli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ulic*                 39.28 0:01:11.93 0:01:12.15      7193  23  38.250488 úlisi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 48.42 0:01:12.81 0:01:13.35      7281  55  79.438477 iski
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav zákon*                43.37 0:01:18.02 0:01:18.36      7802  35  55.495117 zákm
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav másl*                 96.89 0:01:18.30 0:01:18.83      7830  54   4.783203 máaslo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vždy*                 89.37 0:01:21.06 0:01:21.35      8106  30   8.926758 djeski
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 81.11 0:01:21.95 0:01:22.48      8195  54  29.093750 tagžee
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*               100.00 0:01:24.47 0:01:24.81      8447  35   0.000000 cibude
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav malinko               60.73 0:01:29.07 0:01:29.38      8907  32  45.948242 hlanNko
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav znov*                 27.03 0:01:29.66 0:01:29.98      8966  33  68.959961 cňeval
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pokud                 68.51 0:01:30.17 0:01:30.45      9017  29  25.349121 okud
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav evrop*                47.40 0:01:30.68 0:01:31.00      9068  33  61.541992 evrrCi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                68.02 0:01:36.38 0:01:36.67      9638  30  30.702637 tibujé
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle                23.49 0:01:42.67 0:01:42.92     10267  26  56.233398 íle
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                62.71 0:01:51.88 0:01:52.42     11188  55  65.627930 4íšku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 92.14 0:01:54.12 0:01:54.43     11412  32   7.154297 vúvec
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 51.52 0:01:54.43 0:01:54.63     11443  21  28.847168 nebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohoto                37.20 0:01:54.83 0:01:55.12     11483  30  60.283203 toho
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                91.82 0:01:55.70 0:01:56.08     11570  39  10.475586 cibule
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*               100.00 0:01:56.11 0:01:56.36     11611  26   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 58.05 0:01:57.50 0:01:57.70     11750  21  24.960449 tagi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav dobře                100.00 0:01:58.03 0:01:58.35     11803  33   0.000000 dobře
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                94.39 0:01:59.55 0:01:59.88     11955  34   6.280273 trosku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav stát*                 79.08 0:02:00.47 0:02:00.76     12047  30  15.062988 stat
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kter*                 52.95 0:02:00.75 0:02:00.98     12075  24  32.934082 krí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                100.00 0:02:01.91 0:02:02.23     12191  33   0.000000 tagže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav teďka                100.00 0:02:02.93 0:02:03.17     12293  25   0.000000 teťka
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle                47.47 0:02:06.53 0:02:06.81     12653  29  42.286621 filí4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                92.19 0:02:08.18 0:02:08.53     12818  36   9.054688 civule
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav minut*                25.25 0:02:09.07 0:02:09.28     12907  22  47.093750 miít
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takových             100.00 0:02:09.56 0:02:09.91     12956  36   0.000000 takovíX
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav třicet*               74.64 0:02:10.86 0:02:11.30     13086  45  36.514648 tŘice
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav minut*                91.90 0:02:11.95 0:02:12.37     13195  43   9.925781 minuut
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav důležit*              87.77 0:02:14.76 0:02:15.20     13476  45  22.012695 dnležiďí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav skutečně              64.50 0:02:15.32 0:02:15.75     13532  44  62.119141 zddrčňed
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohle                 37.51 0:02:15.73 0:02:15.95     13573  23  39.369629 túle
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav měst*                 68.67 0:02:17.75 0:02:18.06     13775  32  32.581055 nesta
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                23.19 0:02:19.43 0:02:19.67     13943  25  53.764648 bude
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                56.49 0:02:19.91 0:02:20.17     13991  27  33.502441 bude
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                99.35 0:02:21.07 0:02:21.55     14107  49   1.007813 ciguli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                81.50 0:02:25.03 0:02:25.73     14503  71  47.441406 cimuuka
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jaksi                 58.89 0:02:25.82 0:02:26.07     14582  26  30.216309 aksim
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vlastně               97.74 0:02:30.56 0:02:30.97     15056  42   3.078125 vlasťňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                30.07 0:02:33.61 0:02:33.92     15361  32  72.729492 šku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*               100.00 0:02:34.80 0:02:35.12     15480  33   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jednoho               45.89 0:02:38.56 0:02:38.83     15856  28  56.000977 jednod
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 48.68 0:02:48.62 0:02:48.96     16862  35  50.297852 nebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pouze                 45.67 0:02:49.07 0:02:49.36     16907  30  45.640625 ouze
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takovej               78.36 0:02:50.71 0:02:51.11     17071  41  32.137695 takoví
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 72.36 0:03:00.13 0:03:00.32     18013  20  15.477051 kúli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ulic*                 84.66 0:03:04.00 0:03:04.33     18400  34  15.029297 olice
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav svoji                 89.43 0:03:04.32 0:03:04.56     18432  25   7.401855 svolí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                100.00 0:03:09.87 0:03:10.11     18987  25   0.000000 potom
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 57.29 0:03:10.50 0:03:10.70     19050  21  25.414551 púli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 99.33 0:03:16.07 0:03:16.76     19607  70   1.304688 áeski
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav další*                95.67 0:03:20.51 0:03:20.88     20051  38   5.367188 dalším
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kter*                 66.56 0:03:22.25 0:03:22.46     20225  22  21.069336 kerou
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle                77.62 0:03:27.21 0:03:27.55     20721  35  21.930664 bílí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 37.06 0:03:27.90 0:03:28.13     20790  24  44.056641 nebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krajsk*               89.03 0:03:29.37 0:03:29.76     20937  40  15.796875 klajskí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takovej               97.35 0:03:35.83 0:03:36.20     21583  38   3.573242 takovej
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav protože               55.75 0:03:41.23 0:03:41.51     22123  29  45.801758 prže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ještě                 64.55 0:03:46.82 0:03:47.10     22682  29  28.535645 ešťe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav řekn*                 93.25 0:03:47.21 0:03:47.52     22721  32   7.902344 řeknee
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav malinko               79.09 0:03:47.51 0:03:47.87     22751  37  28.222656 malíNho
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                 81.66 0:03:47.80 0:03:48.12     22780  33  17.330078 holtom
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                 93.63 0:03:49.86 0:03:50.32     22986  47   8.478516 potom
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vždy*                 33.45 0:03:51.55 0:03:51.80     23155  26  48.913574 fki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takovej               20.46 0:03:51.78 0:03:52.06     23178  29  82.327148 takleo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav čast*                 36.13 0:03:52.13 0:03:52.38     23213  26  46.946289 čassu
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 27.20 0:03:52.42 0:03:52.63     23242  22  45.861328 polif
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 93.94 0:03:57.60 0:03:57.77     23760  18   3.184082 kvúli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav měst*                 42.98 0:04:00.36 0:04:00.60     24036  25  39.912109 mňesc
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav téhle                 51.25 0:04:01.77 0:04:02.27     24177  51  69.958984 ehle4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav věc*                  49.40 0:04:03.37 0:04:03.81     24337  45  63.761719 jecí4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takovej               48.24 0:04:04.60 0:04:04.87     24460  28  53.574219 akoae
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                90.10 0:04:04.88 0:04:05.45     24488  58  18.219727 cigule
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 79.90 0:04:05.95 0:04:06.17     24595  23  13.366211 úbes
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav samozřejmě           100.00 0:04:07.01 0:04:07.45     24701  45   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 55.72 0:04:09.62 0:04:09.85     24962  24  29.445801 kvali
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 26.58 0:04:15.41 0:04:15.66     25541  26  53.961914 rebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jakoby                97.89 0:04:19.57 0:04:20.00     25957  44   2.952148 jagobi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ještě                 94.82 0:04:19.98 0:04:20.27     25998  30   4.353516 ešťe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav česk*                100.00 0:04:25.26 0:04:25.61     26526  36   0.000000 české
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav nějakým               53.72 0:04:30.48 0:04:30.83     27048  36  46.974609 ákíz
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav anebo                 26.22 0:04:31.58 0:04:31.82     27158  25  51.645020 tebo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav věc*                  37.53 0:04:32.32 0:04:32.71     27232  40  79.962891 bje4em
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jmenuje               57.92 0:04:32.58 0:04:32.86     27258  29  38.709961 4euli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takovej               72.46 0:04:33.05 0:04:33.46     27305  42  42.128906 takoli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takových              53.37 0:04:34.00 0:04:34.37     27400  38  65.052734 kapuvík
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav dobře                 56.55 0:04:34.41 0:04:34.72     27441  32  39.535156 obuří
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                38.34 0:04:35.33 0:04:35.61     27533  29  56.727539 boje4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 98.34 0:04:37.12 0:04:37.58     27712  47   2.201172 agže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav plátki                98.14 0:04:39.28 0:04:40.05     27928  78   4.607422 plátki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav možná                 59.48 0:04:40.21 0:04:40.48     28021  28  32.616699 ožno
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav plátki                64.43 0:04:40.51 0:04:40.83     28051  33  38.417969 plácú
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                 66.63 0:04:41.62 0:04:42.13     28162  52  49.046875 fotom
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav prostě                77.65 0:04:43.38 0:04:43.70     28338  33  23.246094 posťe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 77.59 0:04:51.21 0:04:51.42     29121  22  14.118652 heckí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav politik*              45.17 0:04:54.82 0:04:55.21     29482  40  78.953125 oliki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohle                 24.80 0:04:55.25 0:04:55.48     29525  24  52.637207 puhled
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle               100.00 0:04:55.56 0:04:55.90     29556  35   0.000000 Xvíli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle                81.30 0:04:59.93 0:05:00.21     29993  29  15.054199 Xvíle
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 35.05 0:05:01.82 0:05:02.01     30182  20  36.371582 tašsi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav situac*               71.53 0:05:01.92 0:05:02.31     30192  40  41.000977 šsizací
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                24.64 0:05:02.16 0:05:02.46     30216  31  75.361328 cíbilo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                59.23 0:05:07.15 0:05:07.45     30715  31  40.771484 cíbulí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav komis*                40.86 0:05:09.71 0:05:10.05     30971  35  66.234375 abisim
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav znov*                 61.67 0:05:14.78 0:05:15.03     31478  26  28.168945 znou
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav třicet*               80.39 0:05:19.22 0:05:19.56     31922  35  21.960938 tŘice
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav minut*               100.00 0:05:20.11 0:05:20.45     32011  35   0.000000 minut
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*               100.00 0:05:21.85 0:05:22.25     32185  41   0.000000 cibule
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                94.32 0:05:24.18 0:05:24.73     32418  56  10.219727 krásňí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                99.74 0:05:35.22 0:05:35.82     33522  61   0.581055 troškou
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav řekn*                 94.85 0:05:39.11 0:05:39.46     33911  36   6.723633 řekňeme
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav velmi                 42.83 0:05:39.67 0:05:39.95     33967  29  46.020508 dámi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav samozřejmě           100.00 0:05:40.98 0:05:41.48     34098  51   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*               100.00 0:05:41.90 0:05:42.20     34190  31   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jejich                78.97 0:05:43.70 0:05:43.93     34370  24  14.722656 éjiX
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav úpln*                 69.87 0:05:51.13 0:05:51.38     35113  26  22.147949 plňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav důležit*             100.00 0:05:52.81 0:05:53.21     35281  41   0.000000 dúležití
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav samozřejmě            85.34 0:05:53.32 0:05:53.78     35332  47  36.218750 samozvímňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav stát*                 43.93 0:05:53.96 0:05:54.27     35396  32  58.315430 zátek
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav česk*                 39.21 0:05:54.65 0:05:54.97     35465  33  57.450195 řickal
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav volb*                 24.22 0:05:55.60 0:05:55.80     35560  21  45.088867 oorvi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                98.73 0:06:02.91 0:06:03.31     36291  41   1.677734 krásňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav život*                37.69 0:06:03.97 0:06:04.28     36397  32  64.806641 llota
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                37.35 0:06:04.32 0:06:04.62     36432  31  62.652344 cígula
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav někdo                 22.50 0:06:05.86 0:06:06.17     36586  32  70.526367 ňedo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jakoby                95.25 0:06:07.73 0:06:08.33     36773  61   9.310547 akobi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav protože               91.07 0:06:10.63 0:06:11.21     37063  59  18.883789 prtože
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takových              74.92 0:06:12.27 0:06:12.63     37227  37  33.858398 jakoví
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav věc*                  25.34 0:06:13.93 0:06:14.26     37393  34  70.556641 vici
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav cibul*                82.99 0:06:14.05 0:06:14.52     37405  48  26.532227 cikle
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav prostě                71.12 0:06:14.71 0:06:15.02     37471  32  30.036133 rsťej
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav úpln*                100.00 0:06:21.42 0:06:21.70     38142  29   0.000000 úplňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav politik*              45.41 0:06:23.15 0:06:23.50     38315  36  71.235352 polipu
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 50.29 0:06:25.65 0:06:25.90     38565  26  36.538574 úbe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*                99.93 0:06:31.51 0:06:31.95     39151  45   0.100586 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                90.22 0:06:44.70 0:06:45.02     40470  33  10.565430 krásňí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav další*                95.00 0:06:45.97 0:06:46.27     40597  31   4.378906 delší
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav jejich                61.60 0:06:50.22 0:06:50.41     41022  20  21.504883 jiX
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav řekn*                 30.76 0:06:51.43 0:06:51.66     41143  24  46.043945 Řeťi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vítej*                40.43 0:06:53.48 0:06:53.82     41348  35  75.059570 vítete
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vždy*                100.00 0:06:55.45 0:06:55.68     41545  24   0.000000 dicki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 73.87 0:06:56.06 0:06:56.62     41606  57  42.075195 ágže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav naopak                90.26 0:06:59.55 0:07:00.08     41955  54  17.139648 naopak
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav úpln*                 91.43 0:07:01.88 0:07:02.16     42188  29   6.898926 uplňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 29.52 0:07:03.08 0:07:03.31     42308  24  46.867188 opbes
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 94.27 0:07:06.27 0:07:06.72     42627  46   7.415039 agže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                 34.00 0:07:08.30 0:07:08.55     42830  26  48.510742 tutom
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav malinko               62.28 0:07:08.52 0:07:08.82     42852  31  42.432129 maNNgu
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                25.43 0:07:10.53 0:07:10.81     43053  29  68.601563 bujeme
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav znov*                 42.66 0:07:10.83 0:07:11.11     43083  29  46.156738 slmo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav žádn*                100.00 0:07:11.27 0:07:11.57     43127  31   0.000000 žádní
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 58.54 0:07:14.22 0:07:14.45     43422  24  27.571289 jskí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kter*                 38.43 0:07:20.63 0:07:20.86     44063  24  35.094727 kje
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hlavně                34.86 0:07:22.91 0:07:23.30     44291  40  83.379883 hohabi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav trošk*               100.00 0:07:39.35 0:07:39.67     45935  33   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav korun*                54.60 0:07:45.01 0:07:45.41     46501  41  52.431641 koaruú
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takových              80.64 0:07:46.25 0:07:46.57     46625  33  23.525391 akovid
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav minut*                75.29 0:07:46.90 0:07:47.30     46690  41  28.541016 minul
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav politik*              63.57 0:07:51.00 0:07:51.41     47100  42  61.935547 polifba
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ukážem*              100.00 0:08:00.23 0:08:00.67     48023  45   0.000000 ukážeme
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav ulic*                 32.40 0:08:01.03 0:08:01.25     48103  23  36.503906 ulít
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohle                 73.02 0:08:03.31 0:08:03.53     48331  23  17.942871 tudle
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav znov*                 59.00 0:08:04.23 0:08:04.71     48423  49  55.964844 dova
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pouze                 69.38 0:08:04.71 0:08:04.95     48471  25  21.434082 úuze
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kter*                 30.76 0:08:06.31 0:08:06.65     48631  35  67.850586 r
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav samozřejmě            84.26 0:08:06.67 0:08:07.28     48667  62  47.205078 oořejňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 89.72 0:08:12.02 0:08:12.28     49202  27   7.914551 heski
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav protože               36.65 0:08:13.61 0:08:13.93     49361  33  76.969727 tíd
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav volb*                 47.46 0:08:15.03 0:08:15.46     49503  44  64.355469 i
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pokud                 90.63 0:08:21.28 0:08:21.56     50128  29   7.541504 okud
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 32.44 0:08:23.78 0:08:24.12     50378  35  66.209961 ubé
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pokud                 99.95 0:08:24.23 0:08:24.47     50423  25   0.036621 pokut
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav potom                 44.23 0:08:26.12 0:08:26.41     50612  30  46.846191 atvo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav korun*                30.03 0:08:43.08 0:08:43.37     52308  30  58.770996 kolo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav David*                45.79 0:08:44.73 0:08:45.03     52473  31  47.434570 rávite
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pozor                 80.36 0:08:45.07 0:08:45.30     52507  24  13.063477 pozor
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav chvíle                30.23 0:08:45.75 0:08:45.97     52575  23  46.397949 bílih
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takto                 68.51 0:08:47.72 0:08:48.22     52772  51  45.186523 takt
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vždy*                 20.76 0:08:49.76 0:08:50.02     52976  27  61.011719 icki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav tohle                 21.99 0:08:50.33 0:08:50.58     53033  26  57.337402 tuali
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vlastně               88.48 0:08:52.71 0:08:53.03     53271  33  12.443359 vlasťňe
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav teďka                100.00 0:08:56.18 0:08:56.58     53618  41   0.000000 teťka
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav plátki                90.31 0:08:57.63 0:08:57.98     53763  36  11.245117 plátki
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav zároveň              100.00 0:08:59.23 0:08:59.70     53923  48   0.000000 zároveň
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 32.30 0:09:04.72 0:09:05.06     54472  35  66.350586 ggiže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vždy*                 42.23 0:09:08.01 0:09:08.21     54801  21  34.373047 skí
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 41.25 0:09:11.42 0:09:11.67     55142  26  43.182617 taksi
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                 56.92 0:09:12.11 0:09:12.41     55211  31  37.694824 drže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav stran*                34.61 0:09:12.86 0:09:13.22     55286  37  78.473633 stvjž
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav život*                27.38 0:09:15.61 0:09:15.88     55561  28  58.461914 ivod
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kter*                 82.39 0:09:18.71 0:09:18.91     55871  21  10.478516 kérou
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav vůbec                 31.14 0:09:18.85 0:09:19.08     55885  24  48.204590 ouuje
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav malinko               46.79 0:09:19.92 0:09:20.26     55992  35  67.039063 valepo
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav teďka                 94.03 0:09:21.85 0:09:22.16     56185  32   5.432617 teťka
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hezky                 93.00 0:09:22.78 0:09:23.06     56278  29   5.632813 hesk
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav řekn*                 91.31 0:09:25.35 0:09:25.75     56535  41  10.036133 řeknu
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav budem*                32.08 0:09:26.43 0:09:26.65     56643  23  42.788086 budem
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                81.19 0:09:26.82 0:09:27.22     56682  41  24.826172 krásnu
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav takže                100.00 0:09:31.77 0:09:32.01     57177  25   0.000000 tagže
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav kvůli                 22.19 0:09:32.13 0:09:32.35     57213  23  49.019043 boli
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav krásn*                93.74 0:09:40.80 0:09:41.66     58080  87  17.521484 krásňe4
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav pozor                 99.00 0:09:54.55 0:09:54.93     59455  39   1.118164 pozor
d:\WordSpotting\DATA\Stream\PraKul_8b022d56df9692ff_360p.wav hlavně                77.51 0:09:59.81 0:10:00.12     59981  32  23.386719 hlvň4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav kter*                 59.53 0:00:25.85 0:00:26.05      2585  21  24.081543 kení
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav samozřejmě           100.00 0:00:26.70 0:00:27.12      2670  43   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav velice                57.12 0:00:27.28 0:00:27.83      2728  56  77.187500 vejce
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                80.53 0:00:29.21 0:00:29.78      2921  58  41.180664 civolkoú
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav muškátový*            68.46 0:00:29.81 0:00:30.32      2981  52  72.849609 muškádobi
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav másl*                100.00 0:00:30.83 0:00:31.25      3083  43   0.000000 máslo
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav řekn*                 60.24 0:00:35.86 0:00:36.18      3586  33  48.310547 šmme
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav malinko               70.25 0:00:37.31 0:00:37.93      3731  63  68.285156 maNNkohl
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                74.12 0:00:40.41 0:00:41.17      4041  77  72.193359 cígúku4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav samozřejmě            72.94 0:00:43.80 0:00:44.23      4380  44  63.313477 amzúžejmí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vždy*                 31.56 0:00:44.85 0:00:45.20      4485  36  89.309570 4itk
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav teďka                 69.58 0:00:44.92 0:00:45.38      4492  47  40.462891 itka
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vůbec                 47.99 0:00:49.71 0:00:49.95      4971  25  36.410156 fbrt
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav másl*                 76.67 0:00:53.63 0:00:54.05      5363  43  27.766602 máslu
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                88.37 0:00:55.35 0:00:56.02      5535  68  28.792969 cimllkvu
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                58.25 0:00:56.23 0:00:56.58      5623  36  54.486328 cibugum
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav malinko               96.79 0:00:56.91 0:00:57.26      5691  36   4.195313 baliNko
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vlád*                 21.11 0:01:01.03 0:01:01.27      6103  25  55.226074 laďí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav stát*                 59.35 0:01:02.38 0:01:02.76      6238  39  37.807617 stá4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav budem*                43.27 0:01:03.60 0:01:03.82      6360  23  37.722656 pldev
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav potom                100.00 0:01:07.47 0:01:07.88      6747  42   0.000000 potom
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vůbec                 75.02 0:01:09.81 0:01:10.46      6981  66  46.335938 vaec
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav plán*                 34.92 0:01:37.11 0:01:37.32      9711  22  35.143555 plám
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav krásn*                56.55 0:01:40.86 0:01:41.28     10086  43  60.823242 král
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav otázk*                83.87 0:01:41.25 0:01:42.05     10125  81  41.947266 ásku
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav svoji                 32.09 0:01:49.16 0:01:49.47     10916  32  61.798828 svorí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav přesně                40.65 0:01:52.25 0:01:52.57     11225  33  64.098633 pŘesk
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav česk*                 59.88 0:01:52.35 0:01:52.76     11235  42  47.748047 Řeská
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav velk*                 99.26 0:01:53.88 0:01:54.43     11388  56   1.327148 velkou
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav protože               44.33 0:01:55.38 0:01:55.73     11538  36  72.647461 4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav muškátový*            85.02 0:02:15.78 0:02:16.37     13578  60  39.559570 úskátuví
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav další*                62.89 0:02:40.67 0:02:41.06     16067  40  47.506836 aloším
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav protože               30.96 0:02:41.22 0:02:41.53     16122  32  80.772461 oftož
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav tisíc*                53.31 0:02:45.88 0:02:46.31     16588  44  57.196289 síC
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vlád*                 69.70 0:02:57.70 0:02:58.01     17770  32  27.576172 vláďi
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                81.69 0:02:59.32 0:03:00.00     17932  69  45.308594 cebukul
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav znov*                 47.76 0:03:03.31 0:03:03.58     18331  28  42.049805 ovap
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav takže                 84.71 0:03:15.22 0:03:15.48     19522  27  11.771973 tagže
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav hezky                 46.54 0:03:16.05 0:03:16.41     19605  37  56.130859 éŘskí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav hezky                 97.75 0:03:22.41 0:03:22.93     20241  53   3.379883 heski
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav cibul*                98.09 0:03:27.63 0:03:28.08     20763  46   2.821289 cibuli
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav úpln*                100.00 0:03:28.07 0:03:28.38     20807  32   0.000000 úplňe
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav úpln*                 79.86 0:03:29.98 0:03:30.25     20998  28  15.506836 plňe
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav trošk*               100.00 0:03:39.35 0:03:39.80     21935  46   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav všechn*              100.00 0:03:42.41 0:03:42.92     22241  52   0.000000 fšeXni
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav krásn*                56.10 0:03:48.28 0:03:48.67     22828  40  56.188477 krásno
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav vlád*                 29.51 0:03:49.21 0:03:49.51     22921  31  61.677246 uláďí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav hlavně                53.58 0:03:54.40 0:03:54.83     23440  44  66.845703 orňee
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav stran*                44.88 0:04:05.32 0:04:05.65     24532  34  59.529297 stran
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav měst*                 20.34 0:04:08.05 0:04:08.37     24805  33  75.283203 vňňeŘ
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav plán*                 50.17 0:04:20.31 0:04:20.62     26031  32  38.866211 plň
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav řekn*                 27.29 0:04:22.91 0:04:23.23     26291  33  78.528320 ŘeXtou
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav úpln*                 35.17 0:04:23.68 0:04:23.98     26368  31  64.833496 plňí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav jinak                 52.79 0:04:29.06 0:04:29.30     26906  25  33.050293 inak
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav hezky                 30.73 0:04:33.96 0:04:34.32     27396  37  72.731445 sk4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav velk*                 24.64 0:04:38.16 0:04:38.45     27816  30  72.349609 dvakou
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav másl*                 38.15 0:04:38.68 0:04:39.15     27868  48  82.261719 nác4
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav minut*               100.00 0:04:43.75 0:04:44.02     28375  28   0.000000 minut
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav možná                 30.05 0:05:00.41 0:05:00.66     30041  26  51.416016 žno
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav krásn*                93.92 0:05:01.40 0:05:01.85     30140  46   9.003906 krásň
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav hezky                 23.58 0:05:19.87 0:05:20.21     31987  35  74.894531 skí
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav žádn*                 55.37 0:05:29.01 0:05:29.35     32901  35  49.986328 ehadnol
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav trošk*                83.28 0:05:29.35 0:05:29.65     32935  31  16.719727 troško
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav másl*                 87.33 0:05:29.72 0:05:30.33     32972  62  22.176758 másla
d:\WordSpotting\DATA\Stream\PraKul_a60bfd6500350a69_360p.wav krásn*                95.17 0:05:39.41 0:05:39.75     33941  35   5.406250 krásní
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav letech                61.31 0:00:24.51 0:00:24.80      2451  30  32.499023 mete
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav teďka                 32.41 0:00:24.62 0:00:24.97      2462  36  68.599609 teť4
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takže                 30.52 0:00:25.35 0:00:25.61      2535  27  53.500977 aže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav budem*               100.00 0:00:25.60 0:00:25.87      2560  28   0.000000 budeme
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav másl*                 79.20 0:00:27.63 0:00:28.30      2763  68  39.312500 áslo
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav muškátový*            73.03 0:00:31.37 0:00:32.03      3137  67  80.111328 muškátoae
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav věc*                  78.19 0:00:33.36 0:00:33.83      3336  48  29.775391 řjecí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav trošk*                79.37 0:00:36.78 0:00:37.08      3678  31  20.633301 tušku
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav protože               33.37 0:00:37.07 0:00:37.36      3707  30  71.957520 perže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav důležit*              89.49 0:00:42.81 0:00:43.25      4281  45  18.922852 guežití
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav volb*                 49.31 0:00:45.67 0:00:46.05      4567  39  70.715820 lutbavi
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav někdy                 42.58 0:00:46.33 0:00:46.61      4633  29  46.220703 ňegd
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav anebo                 80.68 0:00:46.73 0:00:47.18      4673  46  25.015625 nebo
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav hlavně               100.00 0:00:48.17 0:00:48.48      4817  32   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav česk*                 90.81 0:00:49.16 0:00:49.51      4916  36   9.329102 česke
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav žádn*                 96.66 0:00:50.02 0:00:50.55      5002  54   5.737305 žádnú
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav znov*                 33.13 0:00:51.47 0:00:51.75      5147  29  53.827148 hrova
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takže                100.00 0:00:54.06 0:00:54.37      5406  32   0.000000 tagže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav másl*                 97.75 0:00:56.37 0:00:56.81      5637  45   2.837891 máslá
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takže                 86.51 0:00:59.71 0:00:59.95      5971  25   9.443359 žgže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vždy*                 69.49 0:01:02.31 0:01:02.76      6231  46  39.512695 vicki
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav stát*                 49.75 0:01:11.53 0:01:11.82      7153  30  42.207520 kát
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav prostě                30.93 0:01:17.42 0:01:17.76      7742  35  77.357422 prosí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takže                 76.38 0:01:19.67 0:01:20.16      7967  50  33.061523 gže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav žádn*                 84.58 0:01:21.02 0:01:21.40      8102  39  16.734375 žárná
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav žádn*                 48.36 0:01:22.17 0:01:22.52      8217  36  59.900391 žárou
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav všechn*               23.49 0:01:24.93 0:01:25.16      8493  24  58.147461 čňegne
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav trošk*               100.00 0:01:30.18 0:01:30.50      9018  33   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vajíčk*               66.78 0:01:38.13 0:01:38.78      9813  66  79.226563 vájiška
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav pozor                 90.97 0:01:41.78 0:01:42.06     10178  29   7.270508 pozor
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav všechn*               88.22 0:01:42.68 0:01:42.97     10268  30  11.311035 fšeXno
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav protože              100.00 0:01:43.35 0:01:43.68     10335  34   0.000000 prottože
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav samozřejmě            93.39 0:01:44.33 0:01:44.82     10433  50  17.176758 sazřemňňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vůbec                 49.87 0:01:45.43 0:01:45.67     10543  25  35.089844 ublc
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav pokud                 70.93 0:01:47.51 0:01:47.80     10751  30  24.422363 okon
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav malinko               84.07 0:01:48.35 0:01:48.76     10835  42  24.370117 maliNko
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vždy*                 99.93 0:02:09.87 0:02:10.15     12987  29   0.058594 dicki
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav rychle                94.74 0:02:11.11 0:02:11.53     13111  43   6.449219 riXa
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav stát*                 27.58 0:02:12.02 0:02:12.41     13202  40  69.519531 stáh
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav nechat                75.69 0:02:12.73 0:02:13.00     13273  28  18.717285 neXáá
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav hezky                 81.54 0:02:14.53 0:02:14.87     13453  35  18.086914 hesk
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav jemně                100.00 0:02:15.58 0:02:15.97     13558  40   0.000000 jemňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav ulic*                 45.35 0:02:18.95 0:02:19.21     13895  27  42.081543 ulifka
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav rychle                86.34 0:02:19.70 0:02:20.02     13970  33  12.904297 riXle
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav budem*                88.03 0:02:22.68 0:02:22.87     14268  20   6.705566 budem
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav malinko              100.00 0:02:29.37 0:02:29.73     14937  37   0.000000 maliNko
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav muškátový*            81.00 0:02:30.70 0:02:31.28     15070  59  50.171875 škátoví
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav hezky                 97.14 0:02:38.98 0:02:39.25     15898  28   2.203613 heskí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vůbec                 61.85 0:02:51.38 0:02:51.73     17138  36  38.719727 húber
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takových              82.06 0:02:51.87 0:02:52.22     17187  36  23.411133 kakovík
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav nějaká                20.37 0:02:52.56 0:02:52.81     17256  26  50.164551 ňeáu
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav plyn*                 51.17 0:02:53.83 0:02:54.16     17383  34  39.554688 ind
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav třicet*               96.89 0:02:55.60 0:02:56.00     17560  41   4.102539 tŘiced
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav minut*                64.95 0:02:56.02 0:02:56.26     17602  25  24.535645 ňéru
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav určitě               100.00 0:02:56.32 0:02:56.67     17632  36   0.000000 úrčiťe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav takže                 88.15 0:02:59.37 0:02:59.87     17937  51  16.999023 ogže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav plátki                86.72 0:03:10.40 0:03:10.81     19040  42  18.062500 vlátki
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav anebo                 44.48 0:03:10.81 0:03:11.23     19081  43  68.007813 ebo
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav jemně                 69.95 0:03:11.40 0:03:11.70     19140  31  26.291016 emňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav plátki                71.50 0:03:12.18 0:03:12.52     19218  35  31.922852 páki
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav česk*                 87.99 0:03:19.73 0:03:20.11     19973  39  13.031250 české
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav másl*                 49.66 0:03:23.63 0:03:24.06     20363  44  61.670898 áslo
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav stran*                53.76 0:03:27.38 0:03:27.85     20738  48  70.279297 Xravňí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 34.98 0:03:29.23 0:03:29.43     20923  21  38.687988 le
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav dnes*                 72.14 0:03:29.37 0:03:29.60     20937  24  15.882324 dnes
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav hezky                 57.12 0:03:29.48 0:03:29.73     20948  26  31.518555 neskí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav jemně                100.00 0:03:29.77 0:03:30.11     20977  35   0.000000 jemňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav žádn*                 86.89 0:03:35.55 0:03:35.93     21555  39  16.786133 žádnú
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav Michal*               35.16 0:03:37.66 0:03:37.92     21766  27  49.923828 iXav
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav protože               59.29 0:03:38.57 0:03:38.88     21857  32  47.628906 hrže
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 44.96 0:03:40.20 0:03:40.38     22020  19  26.417480 Xoli
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 55.00 0:03:55.97 0:03:56.18     23597  22  28.352539 púli
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav třicet*               87.16 0:03:59.37 0:03:59.75     23937  39  15.916992 tŘicev
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav minut*                96.74 0:03:59.73 0:03:59.97     23973  25   2.279297 minut
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav budem*                25.92 0:04:01.92 0:04:02.20     24192  29  68.154785 bujeme
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav znov*                 70.63 0:04:02.18 0:04:02.42     24218  25  20.558594 zdová
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kter*                 61.24 0:04:10.03 0:04:10.23     25003  21  23.059570 krj
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav hezky                 93.55 0:04:14.62 0:04:14.92     25462  31   5.647461 heski
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav politik*              60.89 0:04:15.45 0:04:15.83     25545  39  62.582031 polifka
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav skutečně              82.28 0:04:15.87 0:04:16.25     25587  39  27.472656 zkdečňi
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav vlád*                 50.56 0:04:16.25 0:04:16.51     25625  27  38.069336 vlárv
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kter*                 43.20 0:04:19.22 0:04:19.58     25922  37  76.673828 rému
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 43.77 0:04:19.71 0:04:19.91     25971  21  33.455566 puli
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav ulic*                 74.35 0:04:19.77 0:04:20.33     25977  57  41.290039 ulufce
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav nějakým               63.26 0:04:21.41 0:04:21.78     26141  38  39.863281 ňákíX
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav anebo                 32.57 0:04:22.17 0:04:22.41     26217  25  47.198730 nebo
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav ulic*                 45.21 0:04:50.98 0:04:51.17     29098  20  26.299805 olik
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav trošk*                49.22 0:04:51.88 0:04:52.13     29188  26  42.657715 držú
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav chvíle                63.85 0:04:56.13 0:04:56.57     29613  45  45.548828 vilí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav úpln*                 69.70 0:04:56.45 0:04:56.78     29645  34  29.698242 plňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav krásn*               100.00 0:04:58.42 0:04:58.87     29842  46   0.000000 krásňe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav velk*                 54.95 0:04:59.43 0:04:59.70     29943  28  34.687988 takíp
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav ještě                 71.32 0:05:00.18 0:05:00.47     30018  30  24.087891 ešťe
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kter*                 71.23 0:05:07.53 0:05:07.77     30753  25  20.136719 krrí
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav potom                 70.73 0:05:08.05 0:05:08.30     30805  26  21.512695 otom
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav teďka                100.00 0:05:09.88 0:05:10.18     30988  31   0.000000 teťka
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 31.67 0:05:11.08 0:05:11.27     31108  20  38.267090 buli
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav kvůli                 64.35 0:05:15.28 0:05:15.51     31528  24  23.705566 voli
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav chvíle                69.22 0:05:30.83 0:05:31.31     33083  49  42.016602 bíve
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav otázk*                73.95 0:05:39.51 0:05:40.05     33951  55  45.853516 álski
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav krásn*                79.21 0:05:40.93 0:05:41.41     34093  49  32.435547 kráso
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav čast*                 54.09 0:05:42.03 0:05:42.31     34203  29  36.958984 časťne
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav krásn*                64.73 0:05:58.05 0:05:58.56     35805  52  66.659180 áasnmk
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav velk*                 21.94 0:05:59.03 0:05:59.31     35903  29  71.812988 milko
d:\WordSpotting\DATA\Stream\PraKul_c7857040849e3118_360p.wav česk*                 24.27 0:06:10.46 0:06:10.72     37046  27  58.312012 česte
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav teďka                 28.61 0:00:19.57 0:00:20.03      1957  47  94.954102 teťju
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 35.98 0:00:20.88 0:00:21.15      2088  28  49.294922 áká
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav samozřejmě           100.00 0:00:24.06 0:00:24.65      2406  60   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav důležit*              91.55 0:00:25.27 0:00:25.82      2527  56  19.019531 ložití
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav svah*                 38.09 0:00:25.97 0:00:26.25      2597  29  42.717285 šsva
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 76.07 0:00:26.38 0:00:26.77      2638  40  26.798828 ádra
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav stran*                48.55 0:00:26.56 0:00:26.97      2656  42  69.969727 drana
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav jakoby                38.17 0:00:29.97 0:00:30.28      2997  32  64.300781 jakon
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav prostě                94.36 0:00:33.08 0:00:33.38      3308  31   5.638672 prsťe
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav plátki               100.00 0:00:34.38 0:00:34.83      3438  46   0.000000 plátki
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takže                 35.08 0:00:35.41 0:00:35.61      3541  21  38.626465 aži
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 81.19 0:00:41.71 0:00:42.23      4171  53  28.312500 jádra4
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*               100.00 0:00:42.58 0:00:43.06      4258  49   0.000000 cibuli
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav kvůli                 56.03 0:00:42.82 0:00:43.38      4282  57  70.788086 buli4
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav másl*                 93.99 0:00:43.38 0:00:44.31      4338  94  15.787109 máslo
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav nějaká                43.10 0:00:44.66 0:00:45.12      4466  47  64.868164 ákkáá
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav vůbec                 43.64 0:00:51.48 0:00:51.85      5148  38  59.175781 uube
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*                93.52 0:00:53.83 0:00:54.13      5383  31   6.482910 troška
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 96.23 0:01:18.67 0:01:19.10      7867  44   4.615234 jádra
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav pozor                100.00 0:01:19.50 0:01:19.85      7950  36   0.000000 pozor
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav hezky                 79.73 0:01:25.43 0:01:25.73      8543  31  17.732910 heské
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav vůbec                 37.91 0:01:25.77 0:01:26.06      8577  30  52.155762 hobep
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takže                100.00 0:01:37.32 0:01:37.61      9732  30   0.000000 tagže
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav zvíř*                 55.67 0:01:36.82 0:01:37.35      9682  54  66.716797 zekže
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*                99.44 0:01:38.91 0:01:39.28      9891  38   0.696289 trošku
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav zároveň              100.00 0:01:50.92 0:01:51.33     11092  42   0.000000 zároveň
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav letech                66.99 0:01:51.51 0:01:51.78     11151  28  26.569336 leteX
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav velk*                 30.89 0:01:54.28 0:01:54.53     11428  26  50.796875 lokí
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*                94.71 0:01:54.63 0:01:55.16     11463  54   9.103516 troškú
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav tohle                 31.03 0:01:55.98 0:01:56.31     11598  34  65.178711 avle
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takže                 75.96 0:02:06.57 0:02:06.85     12657  29  19.354004 pagžše
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav vůbec                 47.92 0:02:07.41 0:02:07.70     12741  30  43.748535 hubek
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav stran*                60.04 0:02:08.36 0:02:08.72     12836  37  47.953125 strani
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 32.34 0:02:35.22 0:02:35.47     15522  26  49.728516 tre
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*                95.00 0:02:39.95 0:02:40.31     15995  37   6.000000 cibuj
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 62.36 0:02:49.13 0:02:49.71     16913  59  61.923828 jáXráf
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav stát*                 81.15 0:02:52.03 0:02:52.36     17203  34  15.270508 pát
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav nebyl*                87.15 0:02:53.10 0:02:53.58     17310  49  20.553711 ebili
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav úpln*                100.00 0:02:53.57 0:02:53.93     17357  37   0.000000 úplňe
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav úpln*                100.00 0:02:54.32 0:02:54.70     17432  39   0.000000 úplňe
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*                30.95 0:02:55.28 0:02:55.58     17528  31  69.054199 trtn
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav nechat                78.28 0:02:56.83 0:02:57.15     17683  33  19.762695 neXazt
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav jaksi                 45.92 0:02:58.80 0:02:59.02     17880  23  35.962891 áksi
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takže                 23.36 0:03:00.92 0:03:01.17     18092  26  56.333008 aňž
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav žádn*                 94.86 0:03:01.10 0:03:01.41     18110  32   4.673828 žádná
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav měst*                 30.50 0:03:14.87 0:03:15.15     19487  29  63.939453 ísto
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*                40.81 0:03:15.20 0:03:15.51     19520  32  61.554688 cibuj
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav hezky                 88.42 0:03:16.17 0:03:16.67     19617  51  16.623047 eski
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav teďka                 72.67 0:03:29.67 0:03:30.17     20967  51  39.223633 íka4
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 79.57 0:03:31.86 0:03:32.30     21186  45  25.746094 játra
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav malinko               78.27 0:03:34.65 0:03:34.97     21465  33  26.406250 malíNko
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*                75.32 0:03:44.36 0:03:44.68     22436  33  26.653320 cobud
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav hezky                 65.44 0:03:44.68 0:03:44.92     22468  25  24.193848 heskí
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*               100.00 0:04:00.40 0:04:00.66     24040  27   0.000000 trošku
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav jemně                 22.33 0:04:07.70 0:04:07.93     24770  24  54.370605 indne
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav měst*                 94.14 0:04:07.81 0:04:08.23     24781  43   8.209961 ndneská
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav velk*                 22.75 0:04:20.58 0:04:20.91     26058  34  73.005859 taNkaá
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav samozřejmě            92.17 0:04:36.97 0:04:37.63     27697  67  27.470703 semozřimňe4
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav věc*                  43.54 0:04:38.75 0:04:39.06     27875  32  44.039063 lect
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav územní*               65.50 0:04:55.07 0:04:55.46     29507  40  49.672852 zemňím
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav trošk*                86.53 0:04:55.45 0:04:55.82     29545  38  18.790039 vroškou
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav másl*                 77.01 0:04:55.81 0:04:56.22     29581  42  27.357422 máctňa
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav krásn*               100.00 0:05:01.71 0:05:02.15     30171  45   0.000000 krásná
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*               100.00 0:05:02.41 0:05:02.81     30241  41   0.000000 cibule
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takovej               86.89 0:05:02.98 0:05:03.51     30298  54  25.367188 kovej
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takto                 68.13 0:05:04.58 0:05:04.87     30458  30  26.772461 jaktov
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takových              60.06 0:05:05.17 0:05:05.48     30517  32  46.734375 tokoví
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav anebo                 63.77 0:05:05.88 0:05:06.33     30588  46  46.915039 ebo
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav anebo                 56.49 0:05:07.45 0:05:07.75     30745  31  38.070313 nebo
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takovej              100.00 0:05:07.73 0:05:08.11     30773  39   0.000000 takovej
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav krásn*               100.00 0:05:08.15 0:05:08.61     30815  47   0.000000 krásňe
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav cibul*                84.51 0:05:08.90 0:05:09.40     30890  51  25.410156 civule
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav kter*                 36.13 0:05:10.62 0:05:10.85     31062  24  42.476563 rrou
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 97.07 0:05:27.87 0:05:28.21     32787  35   2.869141 játra
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav velk*                 39.75 0:05:28.71 0:05:29.06     32871  36  61.151367 takimj
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav teďka                 74.32 0:05:29.00 0:05:29.27     32900  28  20.668457 meťka
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav Michal*               31.34 0:05:44.30 0:05:44.57     34430  28  55.273438 reká
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav malinko               98.12 0:05:44.58 0:05:45.17     34458  60   4.056641 maliNko
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav dobře                 90.62 0:05:45.93 0:05:46.25     34593  33   8.532227 robře
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav takže                 34.15 0:05:54.27 0:05:54.48     35427  22  41.483887 aži
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav vždy*                 42.17 0:05:54.46 0:05:54.92     35446  47  76.919922 itki
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav stát*                 41.79 0:06:03.18 0:06:03.50     36318  33  45.403320 ág
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav řekn*                 20.98 0:06:05.52 0:06:05.81     36552  30  75.862793 Řčína
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav plátki                34.91 0:06:15.23 0:06:15.57     37523  35  72.903320 pláte
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav hezky                 79.65 0:06:16.23 0:06:16.50     37623  28  15.667480 rskí
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav hezky                 46.26 0:06:30.66 0:06:30.96     39066  31  47.020996 skí
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav čast*                 37.14 0:06:46.48 0:06:46.73     40648  26  52.805664 anstuf
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav játra                 86.62 0:06:53.86 0:06:54.41     41386  56  21.074219 átra
d:\WordSpotting\DATA\Stream\PraKul_d82af638ce61aba5_360p.wav jaksi                 41.75 0:06:55.72 0:06:56.08     41572  37  61.160156 ásíl
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav másl*                 46.49 0:00:04.08 0:00:04.47       408  40  59.931641 máctnoa
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                100.00 0:00:07.97 0:00:08.27       797  31   0.000000 české
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav potom                 43.17 0:00:10.42 0:00:10.70      1042  29  45.745117 ftom
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav David*                38.19 0:00:11.47 0:00:11.85      1147  39  76.639648 havidul
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 35.11 0:00:11.83 0:00:12.07      1183  25  45.423340 prík
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav dokonce               96.94 0:00:12.98 0:00:13.35      1298  38   4.132813 dokonce
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav společnost*           99.16 0:00:18.53 0:00:19.08      1853  56   2.272461 společnost
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 39.20 0:00:19.61 0:00:19.81      1961  21  36.173340 Xťeli
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takže                 63.68 0:00:20.83 0:00:21.08      2083  26  26.693848 tagže
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vidět                 94.39 0:00:34.47 0:00:34.71      3447  25   3.927734 viďeC
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velmi                 91.57 0:00:38.18 0:00:38.42      3818  25   5.899414 velmi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tohoto                63.27 0:00:39.58 0:00:39.88      3958  31  36.729004 iloto
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav dnes*                 67.01 0:00:43.17 0:00:43.42      4317  26  20.786621 es
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav stran*                36.58 0:00:45.91 0:00:46.25      4591  35  71.029297 ztram
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                 20.89 0:00:50.26 0:00:50.57      5026  32  82.269531 mjeŘtte
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 76.45 0:00:50.46 0:00:50.71      5046  26  17.307129 tteví
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tohoto                65.68 0:00:52.05 0:00:52.32      5205  28  31.574707 tohod
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tohle                 40.75 0:00:55.37 0:00:55.65      5537  29  47.692871 enhle
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                100.00 0:00:57.92 0:00:58.21      5792  30   0.000000 české
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                 50.23 0:01:04.20 0:01:04.51      6420  32  51.759766 mísťe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav prostě                57.54 0:01:05.86 0:01:06.16      6586  31  42.457520 brasťí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav územní*               28.77 0:01:06.26 0:01:06.60      6626  35  79.773438 uzemň
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav život*                27.16 0:01:07.10 0:01:07.42      6710  33  78.668945 doté
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nebyl*                81.26 0:01:08.21 0:01:08.51      6821  31  18.741699 nebila
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vůbec                 44.61 0:01:09.57 0:01:09.80      6957  24  36.835938 ugves
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takto                 25.03 0:01:17.18 0:01:17.45      7718  28  57.723145 tto
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tohle                 96.20 0:01:17.31 0:01:17.68      7731  38   4.127930 tolle
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlád*                 30.05 0:01:19.03 0:01:19.32      7903  30  67.150391 medou
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kvůli                 85.62 0:01:21.83 0:01:22.11      8183  29  11.577148 vúli
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tisíc*                70.49 0:01:27.08 0:01:27.36      8708  29  23.758301 tísíc
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nebyl*                79.90 0:01:30.55 0:01:30.81      9055  27  17.688477 depilo
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav územní*               42.78 0:01:31.21 0:01:31.53      9121  33  61.793945 území
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav pokud                100.00 0:01:35.61 0:01:35.97      9561  37   0.000000 pokud
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nebyl*                33.22 0:01:36.03 0:01:36.30      9603  28  58.770020 ibili
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav územní*               61.09 0:01:36.75 0:01:37.10      9675  36  45.133789 území
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velk*                 64.26 0:01:38.37 0:01:38.76      9837  40  45.742188 velekol
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav další*                99.89 0:01:39.96 0:01:40.32      9996  37   0.136719 dalšíX
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                 91.91 0:01:49.52 0:01:49.81     10952  30   6.797363 české
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                100.00 0:01:49.88 0:01:50.23     10988  36   0.000000 mňesťe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 89.91 0:01:50.26 0:01:50.55     11026  30  10.901855 Xtrremu
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                100.00 0:01:55.37 0:01:55.66     11537  30   0.000000 mňesto
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav další*               100.00 0:01:57.96 0:01:58.40     11796  45   0.000000 dalšíX
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav třicet*               81.06 0:01:58.80 0:01:59.16     11880  37  25.567383 pŘiceťe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                 44.46 0:01:59.43 0:01:59.71     11943  29  44.708008 českí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                100.00 0:01:59.83 0:02:00.06     11983  24   0.000000 mňest
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav jinak                 57.07 0:02:02.90 0:02:03.15     12290  26  31.555664 ínak
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 53.67 0:02:03.12 0:02:03.35     12312  24  35.210449 kerím
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav proti                100.00 0:02:05.98 0:02:06.40     12598  43   0.000000 proťi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlád*                100.00 0:02:12.10 0:02:12.46     13210  37   0.000000 vláda
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav územní*               87.92 0:02:14.53 0:02:14.88     13453  36  14.007813 územňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nebyl*                25.85 0:02:19.46 0:02:19.73     13946  28  68.214844 dibilo
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takových             100.00 0:02:27.88 0:02:28.18     14788  31   0.000000 takovíX
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nikdo                 78.95 0:02:29.16 0:02:29.37     14916  22  13.259766 ňigd
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav opravdu               59.81 0:02:34.13 0:02:34.65     15413  53  75.960938 opravu
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velmi                 65.46 0:02:35.61 0:02:35.83     15561  23  22.970215 elme
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav důležit*             100.00 0:02:35.83 0:02:36.28     15583  46   0.000000 dúležité
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav protože               76.84 0:02:36.36 0:02:37.01     15636  66  55.248047 vrtože
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav úpln*                100.00 0:02:37.76 0:02:38.05     15776  30   0.000000 úplné
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velk*                 22.30 0:02:38.25 0:02:38.57     15825  33  73.424805 elkí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velk*                 52.64 0:02:42.93 0:02:43.21     16293  29  38.124023 vilékí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav chvíle               100.00 0:02:45.46 0:02:45.86     16546  41   0.000000 Xvíli
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav souhlas*              87.69 0:02:48.85 0:02:49.28     16885  44  19.944336 souhla
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takže                100.00 0:02:54.60 0:02:54.88     17460  29   0.000000 tagže
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav abychom               33.23 0:02:55.85 0:02:56.15     17585  31  66.767578 viXom
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav měst*                 95.14 0:03:02.45 0:03:02.81     18245  37   5.830078 mňesta
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav všechn*              100.00 0:03:05.45 0:03:05.88     18545  44   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav samozřejmě           100.00 0:03:06.22 0:03:06.63     18622  42   0.000000 samozřejňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav opravdu              100.00 0:03:09.40 0:03:09.76     18940  37   0.000000 opravdu
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velice               100.00 0:03:09.78 0:03:10.13     18978  36   0.000000 velice
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav důležit*             100.00 0:03:10.67 0:03:11.27     19067  61   0.000000 dúležitá
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav protože              100.00 0:03:11.68 0:03:12.03     19168  36   0.000000 protože
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav prostě                60.03 0:03:14.26 0:03:14.56     19426  31  39.968262 vrsťe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 91.96 0:03:15.13 0:03:15.40     19513  28   7.074707 tterou
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 52.55 0:03:18.91 0:03:19.17     19891  27  36.539063 kteří
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav chvíle               100.00 0:03:21.27 0:03:21.56     20127  30   0.000000 Xvíeli
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav jakoby                29.18 0:03:22.15 0:03:22.52     20215  38  87.813477 jakou
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav plán*                 68.13 0:03:25.70 0:03:25.96     20570  27  21.036133 plá
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav anebo                 36.57 0:03:40.08 0:03:40.30     22008  23  39.959473 anéml
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                 95.15 0:03:40.87 0:03:41.15     22087  29   3.901855 české
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav pokud                 46.90 0:03:41.13 0:03:41.33     22113  21  31.596191 poblč
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav jejich               100.00 0:03:47.26 0:03:47.43     22726  18   0.000000 jejiX
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vůbec                 32.39 0:03:47.48 0:03:47.86     22748  39  73.360352 obecc
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlastně               91.27 0:03:47.95 0:03:48.26     22795  32   9.083008 vlasťň
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takových              77.57 0:03:48.55 0:03:48.85     22855  31  25.233398 takoví
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav situac*              100.00 0:03:48.83 0:03:49.27     22883  45   0.000000 situaci
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vůbec                100.00 0:03:50.61 0:03:50.91     23061  31   0.000000 vúbec
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav úpln*                100.00 0:03:51.56 0:03:51.88     23156  33   0.000000 úplňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav věc*                 100.00 0:03:52.58 0:03:52.78     23258  21   0.000000 vjec
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav samozřejmě           100.00 0:04:00.57 0:04:01.01     24057  45   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav společnost*          100.00 0:04:01.50 0:04:01.98     24150  49   0.000000 společnost
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav aktivně              100.00 0:04:04.88 0:04:05.20     24488  33   0.000000 aktivňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav důležit*             100.00 0:04:06.32 0:04:06.78     24632  47   0.000000 dúležité
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav další*               100.00 0:04:08.62 0:04:09.07     24862  46   0.000000 další
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav možná                 66.91 0:04:09.15 0:04:09.50     24915  36  33.583008 uužná
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav věc*                 100.00 0:04:09.55 0:04:09.86     24955  32   0.000000 vjec
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav aktivně              100.00 0:04:10.33 0:04:10.68     25033  36   0.000000 aktivňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav politik*              97.11 0:04:10.96 0:04:11.55     25096  60   6.932617 politiki
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav pouze                 97.41 0:04:13.91 0:04:14.13     25391  23   1.719727 pouze
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav anebo                 56.81 0:04:15.20 0:04:15.60     25520  41  49.886719 nebo
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav aktivně              100.00 0:04:17.35 0:04:17.75     25735  41   0.000000 aktivňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav politik*             100.00 0:04:18.57 0:04:19.01     25857  45   0.000000 politiki
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                 43.97 0:04:20.82 0:04:21.12     26082  31  63.037109 kfirem
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav česk*                 94.32 0:04:24.95 0:04:25.35     26495  41   6.560547 české
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav zákon*                99.85 0:04:25.96 0:04:26.55     26596  60   0.281250 zákona
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlastně               80.45 0:04:27.52 0:04:27.81     26752  30  18.769043 vlasťň
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav takže                100.00 0:04:28.48 0:04:28.71     26848  24   0.000000 tagže
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav dnes*                100.00 0:04:28.97 0:04:29.36     26897  40   0.000000 dneska
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav někteří               96.85 0:04:31.80 0:04:32.17     27180  38   4.394531 ňekteří
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav řekn*                 64.30 0:04:32.71 0:04:32.95     27271  25  24.986816 řiťíi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlastně               73.42 0:04:34.67 0:04:35.02     27467  36  30.834961 vlasťňi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav věc*                 100.00 0:04:36.62 0:04:36.88     27662  27   0.000000 vjec
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav samozřejmě           100.00 0:04:37.36 0:04:37.96     27736  61   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav aktivně               63.88 0:04:38.18 0:04:38.56     27818  39  50.381836 aktivňí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav čast*                 41.23 0:04:38.60 0:04:38.98     27860  39  65.818359 časťn
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nikdy                 87.10 0:04:41.12 0:04:41.36     28112  25   9.029297 migdi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nikdy                 99.40 0:04:41.86 0:04:42.13     28186  28   0.485840 ňigdi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav letech                94.08 0:04:42.76 0:04:42.98     28276  23   3.935547 lete
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav stát*                 90.56 0:04:43.28 0:04:43.58     28328  31   7.078613 stát
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nechat                60.11 0:04:43.57 0:04:43.85     28357  29  32.111816 neXalt
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav společnost*          100.00 0:04:44.25 0:04:44.80     28425  56   0.000000 společnost
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                100.00 0:04:46.67 0:04:46.86     28667  20   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav stát*                100.00 0:04:47.02 0:04:47.27     28702  26   0.000000 staát
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav kter*                100.00 0:04:50.06 0:04:50.28     29006  23   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav dnes*                100.00 0:04:50.30 0:04:50.62     29030  33   0.000000 dneska
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav stát*                 97.07 0:04:54.57 0:04:54.85     29457  29   2.019043 stát
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav samozřejmě           100.00 0:04:56.56 0:04:57.02     29656  47   0.000000 samozřejmňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav někteří               96.02 0:04:58.20 0:04:58.63     29820  44   6.446289 ňikteří
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav stát*                 98.13 0:04:59.11 0:04:59.40     29911  30   1.343262 stát
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav poměrně              100.00 0:05:01.78 0:05:02.15     30178  38   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav velk*                 44.67 0:05:06.25 0:05:06.51     30625  27  48.693848 veloko
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav korun*                38.10 0:05:06.41 0:05:06.66     30641  26  45.497559 kodol
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav řekn*                 45.39 0:05:10.78 0:05:11.08     31078  31  47.786133 řeťí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav anebo                 71.48 0:05:13.46 0:05:13.80     31346  35  27.947266 lnebo
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav poměrně              100.00 0:05:18.66 0:05:19.16     31866  51   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav dobře                100.00 0:05:19.18 0:05:19.46     31918  29   0.000000 dobře
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav opravdu               98.92 0:05:20.63 0:05:21.03     32063  41   1.607422 opravdu
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav korun*                92.63 0:05:28.82 0:05:29.26     32882  45   9.291992 korun
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav tisíc*                46.09 0:05:30.45 0:05:30.70     33045  26  39.625000 ťisíc
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav hlavně                24.51 0:05:33.88 0:05:34.17     33388  30  72.468262 oďňi
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav krásn*                33.74 0:05:34.62 0:05:34.96     33462  35  74.213867 krásto
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav nikdy                 41.79 0:05:38.58 0:05:38.78     33858  21  34.636230 ďidí
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav komentář*             99.36 0:05:40.90 0:05:41.75     34090  86   2.416016 komentářú
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav vlastně               29.99 0:05:42.52 0:05:42.82     34252  31  70.012207 násňe
d:\WordSpotting\DATA\Stream\TroublaMaker_0eba4c978893d76a_360p.wav příště                99.61 0:05:42.98 0:05:43.48     34298  51   0.642578 pŘíšťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav másl*                 65.15 0:00:03.78 0:00:04.13       378  36  35.369141 mácvao
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav další*                50.24 0:00:04.03 0:00:04.36       403  34  60.453125 lšio
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav dnes*                 58.94 0:00:05.10 0:00:05.25       510  16  16.015137 ve
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ukážem*               87.28 0:00:05.32 0:00:05.75       532  44  17.808594 ukáženéa
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                100.00 0:00:06.62 0:00:06.97       662  36   0.000000 ulici
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav kter*                 60.04 0:00:08.01 0:00:08.26       801  26  29.372559 ktiríb
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav život*                43.31 0:00:08.35 0:00:08.57       835  23  37.698730 živa
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav naprosto              69.83 0:00:08.80 0:00:09.33       880  54  66.371094 ňíprostor
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav měst*                 93.10 0:00:23.05 0:00:23.46      2305  42   9.380859 ňesťev
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 73.18 0:00:23.61 0:00:23.96      2361  36  31.105469 jána
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav vlastně               44.46 0:00:24.00 0:00:24.25      2400  26  46.649902 vlaze
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jinak                 20.76 0:00:26.97 0:00:27.28      2697  32  72.110352 edag
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav možná                 26.65 0:00:34.28 0:00:34.57      3428  30  61.616211 možné
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav úpln*                 40.60 0:00:38.37 0:00:38.67      3837  31  51.973633 plní
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav hlavně                64.28 0:00:43.15 0:00:43.40      4315  26  30.008789 hlavňí
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav Praze                 94.62 0:00:43.91 0:00:44.48      4391  58   8.849609 praze4
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jednoho               28.10 0:00:44.86 0:00:45.15      4486  30  77.652832 jednozt
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav věc*                  47.13 0:00:45.13 0:00:45.31      4513  19  23.791504 vev
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                 68.11 0:00:48.32 0:00:48.66      4832  35  31.253906 ulicije
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav budem*                31.27 0:00:56.05 0:00:56.26      5605  22  43.302734 pedea
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 84.87 0:00:57.01 0:00:57.33      5701  33  16.341797 pjána
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                 96.03 0:00:57.42 0:00:57.76      5742  35   3.888672 ulici
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jakoby                30.45 0:00:58.03 0:00:58.28      5803  26  58.424805 jakobu
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                43.95 0:00:58.67 0:00:58.92      5867  26  47.078125 proso
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jaksi                 60.14 0:00:59.27 0:00:59.56      5927  30  33.480469 jakí
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 34.70 0:01:00.25 0:01:00.51      6025  27  57.462402 pjana
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                100.00 0:01:01.00 0:01:01.23      6100  24   0.000000 ulic
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                80.61 0:01:02.38 0:01:02.86      6238  49  30.242188 prsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nejsou                25.54 0:01:04.22 0:01:04.45      6422  24  56.587402 nese
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav trošk*               100.00 0:01:06.61 0:01:06.90      6661  30   0.000000 trošku
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav velmi                 25.84 0:01:07.25 0:01:07.60      6725  36  75.269531 tavími
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav vždy*                 32.76 0:01:07.81 0:01:07.98      6781  18  30.259277 vde
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav dobře                100.00 0:01:08.01 0:01:08.22      6801  22   0.000000 dobře
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav důležit*              96.94 0:01:11.98 0:01:12.46      7198  49   6.554688 dúuežitíh
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav abychom               43.13 0:01:13.32 0:01:13.70      7332  39  70.515625 abiXpo
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav proti                 27.69 0:01:13.60 0:01:13.78      7360  19  40.494629 poti
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav osobně                27.33 0:01:14.62 0:01:14.93      7462  32  75.574219 ocomňe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jakoby                96.38 0:01:14.93 0:01:15.26      7493  34   3.912109 jakobi
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav trošk*                89.77 0:01:19.60 0:01:19.88      7960  29   9.823242 trošku
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav měst*                100.00 0:01:19.96 0:01:20.26      7996  31   0.000000 mňesto
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nebyl*                42.35 0:01:20.91 0:01:21.15      8091  25  40.354980 abil
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav dobře                 61.95 0:01:21.37 0:01:21.56      8137  20  21.307129 dbře
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav Praha                 34.82 0:01:28.93 0:01:29.16      8893  24  43.346191 trahi
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav souhlas*              84.01 0:01:32.18 0:01:32.48      9218  31  17.987305 souhlas
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav takto                 52.35 0:01:33.05 0:01:33.36      9305  32  43.364258 tagtam
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav další*               100.00 0:01:35.55 0:01:36.01      9555  47   0.000000 dalšíX
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav hezky                 78.79 0:01:36.12 0:01:36.36      9612  25  14.844727 jeski
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                37.44 0:01:39.82 0:01:40.10      9982  29  57.552246 vrsťje
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 78.18 0:01:41.85 0:01:42.31     10185  47  33.169922 bijáve
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav důležit*              65.60 0:01:51.18 0:01:51.53     11118  36  49.885742 dužití
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jakoby                41.52 0:01:51.50 0:01:51.80     11150  31  58.483398 jako
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jakoby                40.78 0:01:54.50 0:01:54.73     11450  24  47.373047 jaklje
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav vždy*                 64.35 0:01:54.68 0:01:54.91     11468  24  23.708496 jecki
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav řekn*                 42.23 0:01:56.08 0:01:56.33     11608  26  48.523438 řikam
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                77.21 0:01:57.76 0:01:58.23     11776  48  35.550781 prsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav řekn*                 76.16 0:01:59.30 0:01:59.55     11930  26  20.023926 řeknou
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                97.58 0:02:00.05 0:02:00.70     12005  66   5.136719 prosťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jaksi                 22.08 0:02:02.32 0:02:02.52     12232  21  46.365234 iekse
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav takto                 28.94 0:02:02.88 0:02:03.17     12288  30  59.688965 tektu
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav způsob*               44.20 0:02:03.37 0:02:03.65     12337  29  51.337402 úsov
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav způsob*               53.51 0:02:04.66 0:02:05.01     12466  36  53.927734 fpúsudob
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav vůbec                 27.60 0:02:04.90 0:02:05.13     12490  24  50.677246 dobéz
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav tohle                 67.89 0:02:07.11 0:02:07.36     12711  26  23.601563 todne
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav korun*                26.29 0:02:07.63 0:02:07.86     12763  24  49.015625 koru
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav kter*                 39.58 0:02:09.52 0:02:09.70     12952  19  27.189941 krei
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav řekn*                 90.93 0:02:10.21 0:02:10.71     13021  51  14.869141 řiknlu
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jaksi                 33.85 0:02:11.17 0:02:11.45     13117  29  53.249023 akse
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav takových              73.75 0:02:13.70 0:02:14.07     13370  38  36.621094 takoví
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nemaj*                75.98 0:02:14.07 0:02:14.27     13407  21  14.292480 nemaj
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostředí*            83.19 0:02:19.01 0:02:19.47     13901  47  35.131836 postŘeďí
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav teďka                 67.71 0:02:21.90 0:02:22.15     14190  26  23.735352 tetka
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav dnes*                 23.62 0:02:23.77 0:02:24.08     14377  32  59.576172 ejss
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                94.56 0:02:25.73 0:02:26.21     14573  49   8.486328 prsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav teďka                 58.16 0:02:35.80 0:02:36.17     15580  38  45.401367 ficka
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                 28.15 0:02:36.75 0:02:37.02     15675  28  57.835449 olici
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jednoho               32.97 0:02:38.18 0:02:38.46     15818  29  69.380859 jedno
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                100.00 0:02:38.45 0:02:38.78     15845  34   0.000000 pijáno
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav Praze                 78.00 0:02:40.13 0:02:40.68     16013  56  34.645508 fraze
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav tohoto                45.44 0:02:41.07 0:02:41.37     16107  31  54.562500 druhatl
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav možná                 99.77 0:02:42.73 0:02:43.03     16273  31   0.204102 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav stát*                 50.55 0:02:44.58 0:02:44.90     16458  33  38.568359 stnáX
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav úpln*                 36.30 0:02:45.15 0:02:45.48     16515  34  62.424805 ugunáŘ
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pokud                 23.84 0:02:49.08 0:02:49.33     16908  26  55.978516 boced
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav další*                93.82 0:02:50.07 0:02:50.35     17007  29   4.976563 dalšu
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav zároveň               51.19 0:02:55.48 0:02:55.81     17548  34  59.305664 arovíc
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav protože               75.15 0:02:57.10 0:02:57.57     17710  48  43.614258 vrtože
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                58.54 0:02:59.03 0:02:59.41     17903  39  51.416016 vrsťee
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav prostě                80.91 0:03:01.25 0:03:01.61     18125  37  22.906250 prsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav jakoby                21.67 0:03:01.57 0:03:01.80     18157  24  59.527344 akli
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nebyl*                48.25 0:03:02.11 0:03:02.32     18211  22  32.602539 neblo
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nějakým               51.37 0:03:04.83 0:03:05.12     18483  30  40.851074 ňáki
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav takže                 33.12 0:03:06.02 0:03:06.31     18602  30  56.176758 tag
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav svah*                 50.72 0:03:07.92 0:03:08.15     18792  24  28.090332 cvav
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav tohle                 70.42 0:03:19.18 0:03:19.38     19918  21  17.597656 ohle
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 50.47 0:03:20.55 0:03:20.91     20055  37  66.862305 pijámeh
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav ulic*                100.00 0:03:21.38 0:03:21.77     20138  40   0.000000 ulicíX
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav vždy*                100.00 0:03:22.68 0:03:23.03     20268  36   0.000000 vždicki
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav nikdo                 23.31 0:03:23.65 0:03:23.93     20365  29  64.415527 ňíkido
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav anebo                 85.27 0:03:28.63 0:03:28.83     20863  21   8.764648 anebu
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav uvidíte              100.00 0:03:30.90 0:03:31.26     21090  37   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav svoji                 22.39 0:03:31.90 0:03:32.11     21190  22  48.895996 spojj
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav pian*                 92.02 0:03:33.33 0:03:33.68     21333  36   9.259766 pijána
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav anebo                 22.84 0:03:34.31 0:03:34.53     21431  23  51.313477 tnebo
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav život*                39.09 0:03:35.87 0:03:36.15     21587  29  49.035156 živovat
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav naprosto              74.84 0:03:36.40 0:03:36.93     21640  54  55.354492 prostor4
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav měst*                100.00 0:03:38.83 0:03:39.20     21883  38   0.000000 mňeste
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav takovej               54.71 0:03:42.63 0:03:42.93     22263  31  50.952148 fakoljd
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav komentář*             80.05 0:03:44.06 0:03:44.53     22406  48  38.897461 kometáf
d:\WordSpotting\DATA\Stream\TroubleMaker_0b2eb7676b742725_360p.wav především             89.79 0:03:45.80 0:03:46.43     22580  64  29.191406 pŘedefšíma
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav další*                57.21 0:00:04.77 0:00:05.11       477  35  53.909180 alšio
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav dnes*                 62.92 0:00:13.06 0:00:13.28      1306  23  21.136230 dness
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav myslíte               31.82 0:00:15.67 0:00:15.97      1567  31  76.704102 mislrane
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav budem*                67.48 0:00:16.17 0:00:16.46      1617  30  31.222656 budebe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav tohle                100.00 0:00:20.85 0:00:21.06      2085  22   0.000000 tohle
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav možná                 42.37 0:00:21.08 0:00:21.38      2108  31  50.427246 možn
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 94.37 0:00:36.86 0:00:37.40      3686  55   8.670898 mňest
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav kter*                 47.27 0:00:37.55 0:00:37.77      3755  23  35.066406 rí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nejsou                33.24 0:00:37.65 0:00:37.96      3765  32  69.432617 ríjsou
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               89.56 0:00:38.57 0:00:38.97      3857  41  17.226563 územňel
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                100.00 0:00:38.96 0:00:39.37      3896  42   0.000000 plánu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                 98.90 0:00:40.23 0:00:40.52      4023  30   0.924805 pláni
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plyn*                 65.76 0:00:41.37 0:00:41.57      4137  21  17.459961 prí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 82.43 0:00:43.82 0:00:44.13      4382  32  18.270508 mňeŘte
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav potom                 20.27 0:00:44.97 0:00:45.21      4497  25  55.813477 plotol
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav velk*                 93.15 0:00:46.23 0:00:46.48      4623  26   5.033203 velkí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav politik*              81.04 0:00:51.71 0:00:52.06      5171  36  24.746094 politik
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav čast*                 60.78 0:00:52.72 0:00:52.97      5272  26  28.829102 asto
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav tohoto                35.37 0:00:55.05 0:00:55.27      5505  23  49.116699 tohop
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                  22.50 0:00:55.36 0:00:55.61      5536  26  65.098633 jisne
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav zákon*               100.00 0:00:56.80 0:00:57.26      5680  47   0.000000 zákona
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               79.30 0:01:00.20 0:01:00.50      6020  31  20.703613 územno
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                 99.26 0:01:00.53 0:01:01.03      6053  51   1.061523 plánu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav evrop*                62.57 0:01:01.23 0:01:01.58      6123  36  43.423828 blotň
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takto                 66.84 0:01:02.66 0:01:02.93      6266  28  26.690918 akto
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav komis*                29.04 0:01:04.11 0:01:04.41      6411  31  70.955078 mise
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                 54.55 0:01:06.33 0:01:06.57      6633  25  27.267090 pá
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vlastně               47.45 0:01:11.66 0:01:11.90      7166  25  42.041992 posmu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav protože               30.90 0:01:13.61 0:01:13.95      7361  35  87.066406 protoha
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav anebo                 25.22 0:01:14.51 0:01:14.76      7451  26  54.961914 anémbu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav budem*                83.69 0:01:14.67 0:01:14.88      7467  22  11.742188 buden
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jakoby                78.10 0:01:16.00 0:01:16.38      7600  39  28.037109 jakomň
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               73.30 0:01:16.76 0:01:17.02      7676  27  23.496582 územň
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav kter*                100.00 0:01:20.37 0:01:20.83      8037  47   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav informac*            100.00 0:01:21.88 0:01:22.58      8188  71   0.000000 informace
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 53.32 0:01:24.10 0:01:24.30      8410  21  27.774414 mist
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav kter*                100.00 0:01:24.67 0:01:24.91      8467  25   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav stran*                58.66 0:01:27.01 0:01:27.37      8701  37  49.611328 stran
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav informac*            100.00 0:01:32.70 0:01:33.35      9270  66   0.000000 informace
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav důležit*              50.97 0:01:33.71 0:01:34.10      9371  40  78.447266 dúležiť
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav kter*                100.00 0:01:34.80 0:01:35.02      9480  23   0.000000 které
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav další*               100.00 0:01:37.72 0:01:38.08      9772  37   0.000000 další
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                 98.00 0:01:39.35 0:01:39.72      9935  38   2.174805 pagže
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav svoji                100.00 0:01:40.77 0:01:41.00     10077  24   0.000000 svoji
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nějaká                24.72 0:01:43.53 0:01:43.82     10353  30  72.265625 ňeáaké
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav anebo                100.00 0:01:45.37 0:01:45.71     10537  35   0.000000 anebo
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav budem*                46.40 0:01:47.52 0:01:47.72     10752  21  31.890137 bude
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav možná                 23.50 0:01:49.31 0:01:49.63     10931  33  72.291016 možňíú
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav úpln*                 70.06 0:01:49.61 0:01:49.92     10961  32  27.249023 úbrňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav možná                 21.52 0:01:51.52 0:01:51.71     11152  20  43.950684 mžne
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vlastně              100.00 0:01:53.52 0:01:53.76     11352  25   0.000000 vlasňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takto                 29.51 0:01:56.17 0:01:56.45     11617  29  56.742188 akto
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               97.14 0:01:56.78 0:01:57.25     11678  48   5.433594 uzemňího
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                100.00 0:01:57.23 0:01:57.53     11723  31   0.000000 plán
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nebyl*                52.76 0:02:00.65 0:02:01.00     12065  36  54.794922 debibila
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                 23.41 0:02:01.37 0:02:01.68     12137  32  69.701172 tagi
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*              100.00 0:02:02.57 0:02:02.95     12257  39   0.000000 územňího
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                100.00 0:02:02.97 0:02:03.32     12297  36   0.000000 plánu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jaksi                 74.23 0:02:03.61 0:02:03.85     12361  25  18.041504 jakste
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vlastně               92.59 0:02:04.85 0:02:05.08     12485  24   5.931152 vlasťň
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav protože               98.17 0:02:05.48 0:02:05.80     12548  33   2.138672 protože
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav trošk*                67.19 0:02:07.46 0:02:07.71     12746  26  27.561523 troško
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav informac*            100.00 0:02:09.07 0:02:09.65     12907  59   0.000000 informace
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vůbec                100.00 0:02:11.60 0:02:11.98     13160  39   0.000000 vúbec
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                100.00 0:02:12.06 0:02:12.37     13206  32   0.000000 tagže
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jednoho               33.50 0:02:17.81 0:02:18.16     13781  36  86.788086 jedno
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav hlavně                28.56 0:02:19.62 0:02:19.88     13962  27  62.866211 hlaze
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                 97.21 0:02:21.28 0:02:21.63     14128  36   2.836914 tagže
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nebyl*                69.49 0:02:22.87 0:02:23.06     14287  20  17.087891 nebio
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav protože               40.44 0:02:23.92 0:02:24.28     14392  37  80.402344 protoho
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav aktivně               51.39 0:02:28.96 0:02:29.36     14896  41  72.186523 akiviňňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 86.40 0:02:29.25 0:02:29.48     14925  24   9.521484 ňňest
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav určitě               100.00 0:02:30.42 0:02:30.77     15042  36   0.000000 určiťe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav hlavně               100.00 0:02:34.06 0:02:34.38     15406  33   0.000000 hlavňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 97.26 0:02:36.30 0:02:36.60     15630  31   2.395996 mňes
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav další*                96.59 0:02:38.08 0:02:38.78     15808  71   6.794922 další
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takovej               50.23 0:02:40.00 0:02:40.40     16000  41  73.908203 takovém
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav možná                 28.75 0:02:42.78 0:02:43.08     16278  31  62.342773 možno
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               98.02 0:02:44.20 0:02:44.62     16420  43   3.470703 mzemňího
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                 79.81 0:02:44.61 0:02:45.03     16461  43  24.729492 plánu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav ještě                 30.62 0:02:45.98 0:02:46.21     16598  24  46.136719 ešťe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav stran*                60.16 0:02:47.72 0:02:48.02     16772  31  39.843750 stríňu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav pokud                 59.77 0:02:48.95 0:02:49.23     16895  29  33.794922 okud
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav prostě                43.21 0:02:51.72 0:02:52.11     17172  40  72.695313 prosi
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav způsob*               23.16 0:02:53.90 0:02:54.20     17390  31  76.842285 sstotat
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                 23.00 0:02:54.78 0:02:55.02     17478  25  53.896973 tagďe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takže                 21.39 0:02:55.22 0:02:55.43     17522  22  49.524414 takňi
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav například             94.80 0:02:57.42 0:02:57.82     17742  41   9.446289 napŘíkllb
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vždy*                 26.01 0:02:59.31 0:02:59.53     17931  23  49.204590 decko
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav další*                95.71 0:02:59.96 0:03:00.30     17996  35   4.202148 valší
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jaksi                 60.19 0:03:00.68 0:03:01.00     18068  33  36.229492 jake
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vlastně               92.48 0:03:01.07 0:03:01.31     18107  25   6.012207 vlasňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav chvíle                24.31 0:03:02.12 0:03:02.31     18212  20  42.387207 li
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                  65.93 0:03:02.33 0:03:02.56     18233  24  19.421387 vjec
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav anebo                 71.92 0:03:03.06 0:03:03.41     18306  36  28.498047 nebo
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav naopak                74.48 0:03:04.10 0:03:04.36     18410  27  22.460449 veopa
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav způsob*              100.00 0:03:10.40 0:03:10.76     19040  37   0.000000 spúsop
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav takových              23.54 0:03:13.42 0:03:13.68     19342  27  75.698242 tekvlu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav poměrně              100.00 0:03:13.97 0:03:14.32     19397  36   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav anebo                 24.53 0:03:17.61 0:03:17.91     19761  31  66.036133 olemuo
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               45.33 0:03:17.85 0:03:18.11     19785  27  48.110352 ozruj
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                100.00 0:03:18.17 0:03:18.57     19817  41   0.000000 plánu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav kter*                100.00 0:03:19.12 0:03:19.32     19912  21   0.000000 které
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 26.99 0:03:29.70 0:03:29.96     20970  27  56.219238 jjás
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vlastně              100.00 0:03:31.08 0:03:31.41     21108  34   0.000000 vlasťňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                  83.64 0:03:33.16 0:03:33.36     21316  21   8.342773 jeC
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav tohle                 91.45 0:03:36.32 0:03:36.55     21632  24   5.683594 todle
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nějakým               80.43 0:03:36.53 0:03:36.83     21653  31  17.127930 ňeákňík
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav volb*                 27.55 0:03:36.82 0:03:37.17     21682  36  73.539063 vonovobr
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav protože               76.96 0:03:37.53 0:03:37.87     21753  35  29.029297 protoja
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                  80.60 0:03:39.21 0:03:39.57     21921  37  20.369141 vjece
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav pokud                 30.71 0:03:48.16 0:03:48.45     22816  30  58.202148 okoj
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav stát*                 42.42 0:03:50.97 0:03:51.35     23097  39  71.404297 staťňí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                 100.00 0:03:52.17 0:03:52.45     23217  29   0.000000 vjecí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav budem*                46.34 0:04:04.45 0:04:04.68     24445  24  42.930176 burňe
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav společnost*           73.46 0:04:08.07 0:04:08.61     24807  55  70.061523 společnoug
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav vždy*                 43.56 0:04:09.81 0:04:09.98     24981  18  25.399414 gdi
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav územní*               85.92 0:04:11.76 0:04:12.13     25176  38  21.826172 buzňího
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav plán*                 98.90 0:04:12.13 0:04:12.51     25213  39   1.196289 plánú
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav další*                82.77 0:04:13.60 0:04:13.86     25360  27  13.269531 dallší
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav měst*                 59.34 0:04:13.87 0:04:14.11     25387  25  32.531250 misťi
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav aktivně               38.92 0:04:15.47 0:04:15.85     25547  39  85.204102 aktivň
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nechat                87.17 0:04:16.16 0:04:16.51     25616  36  13.026367 neXap
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav věc*                  34.33 0:04:19.60 0:04:19.83     25960  24  39.400879 vec
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jednoho               29.44 0:04:20.61 0:04:20.86     26061  26  66.674805 jednomu
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav nebyl*                29.01 0:04:21.17 0:04:21.41     26117  25  56.791016 toblo
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav komentář*             92.67 0:04:23.93 0:04:24.78     26393  86  27.814453 gomentářú
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav jaksi                 27.89 0:04:24.97 0:04:25.17     26497  21  42.908203 apŘí
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav příště                68.84 0:04:25.05 0:04:25.35     26505  31  31.162598 pŘisťa
d:\WordSpotting\DATA\Stream\TroubleMaker_66730cede3aff26f_360p.wav stran*                66.31 0:04:25.43 0:04:25.87     26543  45  54.572266 slanou
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav másl*                 39.23 0:00:04.32 0:00:04.66       432  35  59.555664 másudao
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav další*                73.95 0:00:04.56 0:00:04.86       456  31  29.307129 dalšeo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav dnes*                 85.29 0:00:05.57 0:00:05.86       557  30  14.119141 dnosklá
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav znov*                 96.61 0:00:06.30 0:00:06.51       630  22   2.135254 znovu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ukážem*              100.00 0:00:07.91 0:00:08.40       791  50   0.000000 ukážeme
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav podnikatel*          100.00 0:00:11.28 0:00:11.98      1128  71   0.000000 poďňikatelú
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav pian*                 36.67 0:00:12.90 0:00:13.30      1290  41  83.595703 fiján
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav proti                 68.92 0:00:25.16 0:00:25.46      2516  31  27.195313 proďi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav pokud                 72.89 0:00:27.56 0:00:27.82      2756  27  20.876465 pokoub
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jemně                 79.33 0:00:30.02 0:00:30.27      3002  26  15.191895 jmňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 99.98 0:00:30.13 0:00:30.42      3013  30   0.020020 mňesto
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politici              97.53 0:00:32.22 0:00:32.76      3222  55   5.442383 olitici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jaksi                 48.40 0:00:33.15 0:00:33.35      3315  21  30.700684 taksi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlastně               52.01 0:00:34.48 0:00:34.78      3448  31  47.992188 vlasťňí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politici             100.00 0:00:39.73 0:00:40.23      3973  51   0.000000 politici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jejich                95.93 0:00:40.46 0:00:40.67      4046  22   2.566406 ejiX
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav podnikatel*          100.00 0:00:41.86 0:00:42.43      4186  58   0.000000 poďňikatelé
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlastně               52.16 0:00:43.65 0:00:43.88      4365  24  38.269531 vevřňj
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 85.53 0:00:44.55 0:00:44.75      4455  21   8.611328 mňest
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav například             98.73 0:00:46.47 0:00:46.98      4647  52   2.937500 napŘíklat
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav pokud                 60.48 0:00:47.55 0:00:47.78      4755  24  27.664063 bekur
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 72.59 0:00:48.91 0:00:49.16      4891  26  23.028320 mňeste
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav čast*                 58.01 0:00:53.40 0:00:53.62      5340  23  27.923340 zastu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 88.91 0:00:56.70 0:00:56.88      5670  19   6.208496 mňes
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav řekn*                 25.19 0:00:57.78 0:00:58.05      5778  28  57.606934 řektu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nemaj*                42.26 0:01:02.16 0:01:02.43      6216  28  53.120605 emají
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někteří               49.60 0:01:03.72 0:01:04.11      6372  40  72.581055 fteříd
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 81.53 0:01:04.65 0:01:04.90      6465  26  15.513184 mňesta
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav anebo                 71.11 0:01:04.87 0:01:05.10      6487  24  19.210938 anebo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav krajsk*               81.71 0:01:05.08 0:01:05.48      6508  41  27.159180 krajské
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav například            100.00 0:01:08.03 0:01:08.62      6803  60   0.000000 napŘíklat
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 44.26 0:01:10.26 0:01:10.47      7026  22  30.100098 uglic
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav podnikatel*           99.73 0:01:11.56 0:01:12.12      7156  57   0.816406 poďňikatelé
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav svah*                 46.49 0:01:15.18 0:01:15.42      7518  25  32.106934 švag
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav krajsk*               64.43 0:01:15.53 0:01:15.90      7553  38  48.019531 krajské
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                 63.38 0:01:22.20 0:01:22.45      8220  26  26.918457 kprí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politici             100.00 0:01:26.03 0:01:26.50      8603  48   0.000000 politici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav stát*                 30.88 0:01:26.72 0:01:27.10      8672  39  64.286133 stal
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav korun*                79.98 0:01:27.56 0:01:27.98      8756  43  24.524414 korun
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav opravdu               97.81 0:01:28.23 0:01:28.56      8823  34   2.666016 ropravdu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 77.59 0:01:28.60 0:01:28.86      8860  27  17.257813 ulici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav proti                 25.58 0:01:28.93 0:01:29.21      8893  29  59.906738 proďe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav stát*                 80.19 0:01:36.31 0:01:36.72      9631  42  20.201172 staá
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav korun*                88.96 0:01:37.53 0:01:37.98      9753  46  14.300781 koru4
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav rozpoč*               97.05 0:01:39.23 0:01:39.90      9923  68   7.970703 ospočtu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politik*              78.90 0:01:44.47 0:01:44.81     10447  35  26.583984 furtik
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav podnikatel*           97.47 0:01:45.01 0:01:45.60     10501  60   7.896484 poďňikatelú
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav opravdu              100.00 0:01:45.56 0:01:45.87     10556  32   0.000000 opravdu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nebyl*                46.83 0:01:48.06 0:01:48.35     10806  30  51.040039 debila
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 40.94 0:01:48.38 0:01:48.67     10838  30  56.696777 mísťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                100.00 0:01:49.08 0:01:49.35     10908  28   0.000000 mňeské
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav čast*                 69.85 0:01:50.40 0:01:50.75     11040  36  30.605469 Řastlo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jednoho               22.14 0:01:54.92 0:01:55.22     11492  31  87.591797 jednuX
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav chvíle                96.71 0:01:55.15 0:01:55.45     11515  31   2.882813 Xvíle
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav dokonce               99.43 0:01:55.61 0:01:55.93     11561  33   0.694336 dokonce
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 44.33 0:01:57.98 0:01:58.26     11798  29  51.219727 mísťí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav pouze                100.00 0:01:59.46 0:01:59.77     11946  32   0.000000 pouze
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nebyl*                40.14 0:02:00.72 0:02:01.00     12072  29  55.066895 libilat
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav další*               100.00 0:02:05.07 0:02:05.53     12507  47   0.000000 dalšíX
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 84.65 0:02:07.72 0:02:08.06     12772  35  15.044922 urice
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 98.78 0:02:10.67 0:02:11.10     13067  44   1.492188 ulice
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav korun*                96.83 0:02:12.00 0:02:12.43     13200  44   4.000000 korun
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vůbec                100.00 0:02:12.97 0:02:13.18     13297  22   0.000000 úúbec
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nebyl*                61.32 0:02:13.22 0:02:13.47     13322  26  32.491211 medova
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav rozpoč*               81.08 0:02:13.51 0:02:13.92     13351  42  32.164063 ospočtl
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 40.09 0:02:13.91 0:02:14.25     13391  35  67.100586 ňectv
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav potom                 50.08 0:02:14.65 0:02:14.87     13465  23  33.199219 oto
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 30.77 0:02:17.01 0:02:17.25     13701  25  55.384766 misle
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav minut*                34.34 0:02:17.78 0:02:17.98     13778  21  39.069336 miros
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav takto                 80.76 0:02:18.96 0:02:19.25     13896  30  16.161133 takt
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                 74.60 0:02:19.13 0:02:19.40     13913  28  22.355469 kterho
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 71.29 0:02:19.72 0:02:19.97     13972  26  21.102051 uritco
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav možná                100.00 0:02:21.30 0:02:21.56     14130  27   0.000000 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav plán*                 73.51 0:02:21.65 0:02:21.91     14165  27  17.485840 prán
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav řekn*                 32.38 0:02:26.41 0:02:26.70     14641  30  73.033203 sťízr
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav evrop*                35.25 0:02:26.56 0:02:26.83     14656  28  67.020996 ízrapsh
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav Michal*               87.89 0:02:28.81 0:02:29.15     14881  35  13.561523 mikala
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav prostě                54.30 0:02:35.86 0:02:36.26     15586  41  60.326172 vsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav žádn*                 53.41 0:02:36.32 0:02:36.66     15632  35  45.653320 áádné
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav anebo                100.00 0:02:39.36 0:02:39.63     15936  28   0.000000 anebo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nebyl*               100.00 0:02:40.51 0:02:40.71     16051  21   0.000000 nebil
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdy                 85.20 0:02:41.02 0:02:41.21     16102  20   8.289551 ňigdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vždy*                 33.68 0:02:42.33 0:02:42.57     16233  25  46.421387 lisci
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav Michal*              100.00 0:02:43.47 0:02:43.77     16347  31   0.000000 miXala
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav přístup*              94.49 0:02:48.50 0:02:49.07     16850  58  11.656250 psistup
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav informac*             78.94 0:02:49.93 0:02:50.46     16993  54  49.811523 imfoovací
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav letech                54.50 0:02:53.40 0:02:53.70     17340  31  39.816406 lité
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav Michal*               83.42 0:02:55.27 0:02:55.56     17527  30  15.914063 iXala
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav velk*                 39.76 0:02:58.28 0:02:58.57     17828  30  50.602539 vargí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav Michal*               54.70 0:03:02.58 0:03:02.85     18258  28  39.861816 řiXala
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 98.38 0:03:03.17 0:03:03.71     18317  55   2.491211 ulice
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 40.58 0:03:08.43 0:03:08.67     18843  25  41.594238 olici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav rychle                50.77 0:03:12.53 0:03:12.78     19253  26  36.186523 riXr
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 81.80 0:03:14.38 0:03:14.68     19438  31  15.923828 ulici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav možná                 40.80 0:03:15.57 0:03:15.82     19557  26  43.513672 ořá
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vítej*                22.67 0:03:17.37 0:03:17.61     19737  25  54.132324 vítel
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nějakým               39.85 0:03:17.67 0:03:17.93     19767  27  46.316406 náke
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 60.91 0:03:18.13 0:03:18.40     19813  28  34.396973 mňesslí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav tohle                 55.78 0:03:18.62 0:03:18.87     19862  26  32.502441 tpohle
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jaksi                 25.10 0:03:31.98 0:03:32.27     21198  30  62.914551 jakje
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 31.10 0:03:34.81 0:03:35.02     21481  22  43.408691 olica
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politik*              94.99 0:03:36.42 0:03:36.93     21642  52  10.524414 politiki
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav možná                100.00 0:03:36.97 0:03:37.22     21697  26   0.000000 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jakoby                97.17 0:03:40.86 0:03:41.21     22086  36   3.282227 jakobi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nicméně              100.00 0:03:42.77 0:03:43.23     22277  47   0.000000 ňicméňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                100.00 0:03:44.78 0:03:45.10     22478  33   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav poměrně               97.40 0:03:48.68 0:03:49.13     22868  46   4.806641 pomňerňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav poměrně              100.00 0:03:50.46 0:03:50.91     23046  46   0.000000 pomňerňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ještě                 88.13 0:03:52.82 0:03:53.10     23282  29   9.552246 ešťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlastně               87.04 0:03:53.55 0:03:53.93     23355  39  16.588867 loasťňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdy                100.00 0:03:54.38 0:03:54.82     23438  45   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někdy                 68.16 0:03:54.55 0:03:55.12     23455  58  52.376953 igdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdy                100.00 0:03:55.07 0:03:55.38     23507  32   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jakoby                98.88 0:03:55.68 0:03:56.02     23568  35   1.250000 jakobi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdo                100.00 0:03:56.01 0:03:56.23     23601  23   0.000000 ňigdo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlastně               65.69 0:03:59.85 0:04:00.26     23985  42  46.662109 oasňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                100.00 0:04:00.65 0:04:00.88     24065  24   0.000000 které
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav skutečně              76.97 0:04:01.07 0:04:01.51     24107  45  41.453125 skutečn
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                 77.36 0:04:05.10 0:04:05.35     24510  26  16.638184 teré
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nemaj*                71.05 0:04:05.25 0:04:05.46     24525  22  18.237793 rémaj
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav korun*                38.70 0:04:05.70 0:04:05.93     24570  24  42.911621 koru
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlád*                 38.93 0:04:06.15 0:04:06.42     24615  28  49.162109 láda
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav takto                 64.05 0:04:06.57 0:04:06.85     24657  29  28.941895 takti
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někdy                100.00 0:04:07.28 0:04:07.60     24728  33   0.000000 ňegdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdy                100.00 0:04:07.76 0:04:08.05     24776  30   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někdo                 26.28 0:04:07.28 0:04:07.60     24728  33  67.082031 ňegdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někdy                 46.35 0:04:07.78 0:04:08.08     24778  31  46.947754 igdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlastně               98.65 0:04:08.08 0:04:08.41     24808  34   1.453125 vlasňňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav přesně                35.20 0:04:08.70 0:04:09.03     24870  34  72.575195 pŘesťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nikdy                100.00 0:04:13.36 0:04:13.66     25336  31   0.000000 ňigdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někdy                 74.40 0:04:13.41 0:04:13.90     25341  50  35.838867 igdi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav prostě                49.89 0:04:25.87 0:04:26.18     26587  32  52.116211 prsťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nějakým               60.99 0:04:26.50 0:04:26.83     26650  34  38.232422 ňákí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav potom                 20.37 0:04:27.70 0:04:27.93     26770  24  55.743652 otom
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav médi*                 99.10 0:04:29.75 0:04:30.17     26975  43   1.257813 médijí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav potom                 52.31 0:04:31.33 0:04:31.88     27133  56  75.118164 otom
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav někteří               65.02 0:04:32.61 0:04:33.03     27261  43  55.093750 kteřío
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav protože              100.00 0:04:34.00 0:04:34.32     27400  33   0.000000 protože
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav prostě               100.00 0:04:34.35 0:04:34.60     27435  26   0.000000 prosťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jakoby                96.03 0:04:35.20 0:04:35.48     27520  29   3.807129 eakobi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav tohle                 51.59 0:04:35.57 0:04:35.85     27557  29  38.971680 togle
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav tohle                 59.36 0:04:36.52 0:04:36.76     27652  25  28.451172 toudle
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav aktivně              100.00 0:04:41.48 0:04:41.83     28148  36   0.000000 aktivňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav způsob*               71.54 0:04:41.86 0:04:42.31     28186  46  52.647461 púsobil
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 83.21 0:04:42.45 0:04:42.72     28245  28  13.515625 ulice
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav prostě                82.22 0:04:44.63 0:04:44.90     28463  28  15.645508 vlosťe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav prostě                77.06 0:04:48.82 0:04:49.06     28882  25  18.349609 posťi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav smlouv*               59.99 0:04:49.66 0:04:50.07     28966  42  61.212891 smáluvl
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vlád*                 95.52 0:04:49.96 0:04:50.22     28996  27   3.446777 vládi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav protože               68.09 0:04:50.22 0:04:50.53     29022  32  37.331055 potože
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 79.11 0:04:50.67 0:04:51.20     29067  54  31.439453 olici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jemně                 21.20 0:04:51.60 0:04:51.83     29160  24  55.162109 emňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav anebo                 58.89 0:04:52.23 0:04:52.50     29223  28  31.654297 nebo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vůbec                 25.56 0:04:53.10 0:04:53.30     29310  21  44.291016 vebed
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nějakým               25.20 0:05:00.51 0:05:00.93     30051  43  91.630859 dákí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav situac*               93.06 0:05:03.07 0:05:03.62     30307  56  14.045898 situac
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav vůbec                100.00 0:05:04.20 0:05:04.50     30420  31   0.000000 vúbec
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav skutečně             100.00 0:05:05.22 0:05:05.68     30522  47   0.000000 skutečňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav způsob*               98.15 0:05:09.41 0:05:09.77     30941  37   2.777344 spúsobem
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav případě               70.95 0:05:12.01 0:05:12.43     31201  43  45.750000 pŘípaďň
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav anebo                 79.93 0:05:15.03 0:05:15.66     31503  64  35.832031 nebo5
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nějakým               56.45 0:05:16.05 0:05:16.31     31605  27  33.530273 ásím
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav velk*                 26.74 0:05:16.05 0:05:16.31     31605  27  64.467773 ásím
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav způsob*               88.53 0:05:16.31 0:05:16.63     31631  33  15.488281 zpúsobe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav případě               60.30 0:05:18.81 0:05:19.23     31881  43  62.535156 pŘípaďň
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav svah*                 24.49 0:05:19.38 0:05:19.56     31938  19  33.978027 svlaf
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav informac*             96.86 0:05:21.56 0:05:22.16     32156  61   8.457031 informacv
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav jakoby                88.40 0:05:22.20 0:05:22.51     32220  32  12.062500 ékvi
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 39.83 0:05:24.53 0:05:24.78     32453  26  44.222656 olici
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                100.00 0:05:25.18 0:05:25.55     32518  38   0.000000 kterí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                 82.01 0:05:25.85 0:05:26.18     32585  34  17.633789 ktrrí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav anebo                 23.39 0:05:30.91 0:05:31.13     33091  23  50.948730 nebo
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav případě              100.00 0:05:31.12 0:05:31.46     33112  35   0.000000 pŘípaďe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav kter*                100.00 0:05:33.53 0:05:33.95     33353  43   0.000000 která
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav aktivně               93.78 0:05:35.78 0:05:36.12     33578  35   7.833984 aktivňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav tohoto                41.97 0:05:38.22 0:05:38.50     33822  29  53.385254 tohobl
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav rozhodně              35.05 0:05:38.75 0:05:39.05     33875  31  81.188477 ásooďňe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav tohle                 64.79 0:05:41.53 0:05:41.76     34153  24  23.415527 tohe
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav měst*                 43.06 0:05:42.95 0:05:43.21     34295  27  50.111328 mdjspí
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav politik*              89.81 0:05:44.27 0:05:44.71     34427  45  16.503906 poditik
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav ulic*                 38.18 0:05:45.47 0:05:45.70     34547  24  41.112305 olic
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav podnikatel*          100.00 0:05:46.32 0:05:46.88     34632  57   0.000000 poďňikatelú
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav věc*                  56.51 0:05:47.91 0:05:48.12     34791  22  23.484375 vjes
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nebyl*                75.64 0:05:48.91 0:05:49.27     34891  37  29.235352 ljbilaf
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav budem*                62.72 0:05:50.20 0:05:50.42     35020  23  24.793457 bludeu
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav nějaká                82.52 0:05:50.50 0:05:50.78     35050  29  12.585449 záká
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav budem*                58.44 0:05:52.23 0:05:52.45     35223  23  29.923340 udná
d:\WordSpotting\DATA\Stream\TroubleMaker_82f8aa01d8b7832a_360p.wav čast*                 45.45 0:05:53.90 0:05:54.23     35390  34  53.455078 askoho
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav čast*                 85.43 0:00:03.35 0:00:03.58       335  24  10.196289 časťe
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dnes*                 26.31 0:00:03.58 0:00:03.76       358  19  33.159180 ímňes
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 93.93 0:00:04.67 0:00:04.95       467  29   4.887695 téhle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                 98.52 0:00:05.53 0:00:06.03       553  51   1.819336 svaX
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stran*                85.84 0:00:06.70 0:00:07.02       670  33  17.204102 ztvenou
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               86.82 0:00:07.02 0:00:07.37       702  36  17.195313 dálňici
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav proti                 62.31 0:00:09.85 0:00:10.38       985  54  58.040039 praťi
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav měst*                 82.53 0:00:11.02 0:00:11.27      1102  26  12.838379 mňeŘt
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav anebo                 68.56 0:00:13.23 0:00:13.45      1323  23  19.806641 nebo
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav událost*              41.54 0:00:13.40 0:00:13.71      1340  32  68.400391 odálofř
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav další*                48.25 0:00:16.55 0:00:16.86      1655  32  60.545898 dalšehu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dnes*                 99.68 0:00:17.08 0:00:17.42      1708  35   0.362305 dneska
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav česk*                 87.31 0:00:17.46 0:00:17.75      1746  30  10.660156 české
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav další*                20.81 0:00:18.00 0:00:18.31      1800  32  72.060547 dooří
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               81.54 0:00:19.23 0:00:19.61      1923  39  25.755859 dlálince
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                 32.67 0:00:31.48 0:00:31.81      3148  34  54.539063 sfvál
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav možná                 35.24 0:00:31.98 0:00:32.28      3198  31  56.660645 možn
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*              100.00 0:00:33.02 0:00:33.47      3302  46   0.000000 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav Bohem*                56.78 0:00:34.12 0:00:34.53      3412  42  66.130859 bohémtu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav jednoho               58.86 0:00:37.32 0:00:37.58      3732  27  40.733398 jednue
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                 92.73 0:00:37.61 0:00:37.80      3761  20   3.490723 stát
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tohle                 47.25 0:00:38.92 0:00:39.18      3892  27  40.619629 todle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tisíc*                51.47 0:00:42.13 0:00:42.35      4213  23  30.574707 ťiic
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav jednoho               81.94 0:00:43.77 0:00:44.02      4377  26  17.062988 jednoha
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav vidět                 99.87 0:00:53.10 0:00:53.42      5310  33   0.125000 viďet
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav možná                100.00 0:00:53.97 0:00:54.28      5397  32   0.000000 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav vůbec                 88.52 0:00:54.30 0:00:54.55      5430  26   8.439941 uúbes
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav chvíle                46.24 0:00:54.52 0:00:54.77      5452  26  39.515137 sňígdi
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 80.40 0:00:55.25 0:00:55.51      5525  27  15.090332 tahle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                100.00 0:00:56.25 0:00:56.56      5625  32   0.000000 stát
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav potom                 35.33 0:00:57.40 0:00:57.70      5740  31  56.583008 podlo
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav letech                95.09 0:00:58.08 0:00:58.57      5808  50   6.870117 leteX
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 69.13 0:01:00.28 0:01:00.53      6028  26  22.691406 tele
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tohle                 52.79 0:01:04.63 0:01:04.88      6463  26  34.702637 odlep
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav plán*                 98.50 0:01:05.36 0:01:05.71      6536  36   1.521484 plánú
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               90.20 0:01:05.93 0:01:06.32      6593  40  14.116211 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                 82.87 0:01:07.16 0:01:07.43      6716  28  11.822266 stád
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tisíc*                94.47 0:01:09.31 0:01:09.56      6931  26   4.066406 ťisíC
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dnes*                 86.51 0:01:10.62 0:01:10.96      7062  35  15.108398 dnaska
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav velmi                 76.19 0:01:13.18 0:01:13.43      7318  26  17.503418 telmi
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav přesně                50.09 0:01:13.62 0:01:13.96      7362  35  55.897461 pŘekňí
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav vidět                 88.84 0:01:16.03 0:01:16.23      7603  21   6.639648 viďet
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               97.21 0:01:16.55 0:01:16.93      7655  39   4.022461 dáleňce
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav anebo                 27.20 0:01:16.88 0:01:17.10      7688  23  45.866699 enebu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav nikdy                 95.45 0:01:17.17 0:01:17.41      7717  25   3.186523 ňegdi
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav myslíte               55.75 0:01:18.37 0:01:18.72      7837  36  57.743164 nesvíso
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stran*                46.94 0:01:20.87 0:01:21.26      8087  40  76.409180 stleň
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                 91.01 0:01:21.92 0:01:22.27      8192  36   9.124023 svahu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav budem*                63.07 0:01:23.10 0:01:23.45      8310  36  37.480469 budeb
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav korun*                66.81 0:01:25.25 0:01:25.63      8525  39  37.171875 koru
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav česk*                 99.85 0:01:27.68 0:01:28.07      8768  40   0.171875 česká
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav společnost*          100.00 0:01:28.67 0:01:29.25      8867  59   0.000000 společnost
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav možná                 28.45 0:01:32.25 0:01:32.51      9225  27  55.090332 možn
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               61.84 0:01:32.78 0:01:33.13      9278  36  49.794922 állice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                 97.03 0:01:33.42 0:01:34.01      9342  60   5.694336 svahem
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav politici              99.97 0:01:35.88 0:01:36.42      9588  55   0.066406 politice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav krajsk*              100.00 0:01:37.91 0:01:38.42      9791  52   0.000000 krajskí
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               97.13 0:01:42.86 0:01:43.28     10286  43   4.527344 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav vůbec                 24.71 0:01:47.83 0:01:48.18     10783  36  76.421875 múbé
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 95.54 0:01:49.07 0:01:49.47     10907  41   5.152344 toéhele
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav potom                 63.51 0:01:50.48 0:01:50.70     11048  23  22.988281 natom
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                100.00 0:01:50.98 0:01:51.28     11098  31   0.000000 svahu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav česk*                100.00 0:01:52.78 0:01:53.07     11278  30   0.000000 českou
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav kter*                 97.31 0:01:56.23 0:01:56.51     11623  29   2.165039 kterí
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tohle                 82.48 0:01:57.00 0:01:57.37     11700  38  19.012695 tole
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav česk*                 93.48 0:02:02.55 0:02:02.87     12255  33   6.164063 české
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                100.00 0:02:08.02 0:02:08.46     12802  45   0.000000 svahu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                100.00 0:02:10.50 0:02:10.90     13050  41   0.000000 svahu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav jejich                95.28 0:02:13.78 0:02:14.05     13378  28   3.638184 jejiX
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav další*                87.43 0:02:15.77 0:02:16.18     13577  42  17.100586 dalším
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                 96.05 0:02:21.55 0:02:22.03     14155  49   4.743164 stvaX
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav nicméně              100.00 0:02:26.92 0:02:27.46     14692  55   0.000000 ňicméňe
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*              100.00 0:02:37.23 0:02:37.71     15723  49   0.000000 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav naopak                97.34 0:02:42.20 0:02:42.70     16220  51   4.366211 naopag
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav žádn*                100.00 0:02:45.68 0:02:46.26     16568  59   0.000000 žádní
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               54.70 0:02:48.02 0:02:48.51     16802  50  81.544922 dálňic
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav naopak                96.67 0:02:48.72 0:02:49.23     16872  52   5.596680 naopad
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*              100.00 0:02:49.86 0:02:50.33     16986  48   0.000000 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav svah*                100.00 0:02:51.15 0:02:51.42     17115  28   0.000000 svahu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav možná                 96.07 0:02:54.20 0:02:54.47     17420  28   3.161621 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                 95.99 0:02:54.71 0:02:55.00     17471  30   3.369141 táti
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav řekn*                 46.35 0:02:57.46 0:02:57.66     17746  21  31.924316 řemí
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               99.03 0:03:01.40 0:03:01.78     18140  39   1.395508 dálňice
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav možná                 87.59 0:03:01.95 0:03:02.18     18195  24   8.688965 možná
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav stát*                 93.28 0:03:04.15 0:03:04.51     18415  37   7.053711 tátu
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav život*               100.00 0:03:04.86 0:03:05.18     18486  33   0.000000 živote
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 39.74 0:03:13.92 0:03:14.13     19392  22  37.966797 dehle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav budem*                38.12 0:03:15.25 0:03:15.46     19525  22  38.986328 projam
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav David*                27.25 0:03:16.50 0:03:16.76     19650  27  56.016113 lavit
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav tohle                 91.33 0:03:27.55 0:03:27.82     20755  28   6.978027 vohle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav velk*                 77.62 0:03:27.98 0:03:28.60     20798  63  39.169922 veloká
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               95.11 0:03:29.42 0:03:29.90     20942  49   8.582031 dálňece
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav téhle                 60.83 0:03:29.93 0:03:30.21     20993  29  31.535156 teéle
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dnešní*              100.00 0:03:31.61 0:03:31.93     21161  33   0.000000 dnešňí
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav dálnic*               80.20 0:03:32.13 0:03:32.48     21213  36  25.835938 dalňisi
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav komentář*             99.44 0:03:34.96 0:03:35.67     21496  72   1.787109 komentářú
d:\WordSpotting\DATA\Stream\TroubleMaker_b5fd7e9db7381367_360p.wav příště               100.00 0:03:37.26 0:03:37.56     21726  31   0.000000 pŘíšťe
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav dnes*                100.00 0:00:03.51 0:00:03.88       351  38   0.000000 dnes
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav uvidíte              100.00 0:00:03.95 0:00:04.51       395  57   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                100.00 0:00:09.55 0:00:10.02       955  48   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav znov*                 41.20 0:00:15.82 0:00:16.08      1582  27  45.272461 ova
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav Obam*                 36.50 0:00:16.58 0:00:16.90      1658  33  57.786133 ovov4
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav úpln*                100.00 0:00:19.17 0:00:19.52      1917  36   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav jednoho              100.00 0:00:21.51 0:00:21.88      2151  38   0.000000 jednoho
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                 93.21 0:00:21.91 0:00:22.22      2191  32   6.175781 zvířa
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav jednoho              100.00 0:00:24.00 0:00:24.31      2400  32   0.000000 jednoho
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav myslíte               68.52 0:00:26.07 0:00:26.48      2607  42  48.171875 muslíte
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav trošk*               100.00 0:00:27.01 0:00:27.47      2701  47   0.000000 trošku
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav vůbec                 21.83 0:00:29.76 0:00:29.97      2976  22  49.248047 de
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav budem*                23.27 0:00:30.25 0:00:30.43      3025  19  42.967285 budeX
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                 42.22 0:00:32.03 0:00:32.36      3203  34  54.598633 zvíř
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                100.00 0:00:35.08 0:00:35.51      3508  44   0.000000 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav hezky                 56.53 0:00:38.86 0:00:39.10      3886  25  30.427734 eskí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav jinak                 85.06 0:00:39.91 0:00:40.18      3991  28  12.026855 jinag
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav pozor                 91.59 0:00:42.53 0:00:42.98      4253  46  10.891602 pozor
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav takto                 85.11 0:00:45.17 0:00:45.48      4517  32  13.546875 taktr
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav trošk*                58.03 0:00:45.41 0:00:45.83      4541  43  58.760742 trúšpo
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav vlastně               51.09 0:00:46.23 0:00:46.62      4623  40  62.598633 véssn
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav takže                 88.12 0:00:47.31 0:00:47.60      4731  30   9.981445 tagži
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav čast*                100.00 0:00:48.08 0:00:48.40      4808  33   0.000000 často
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav svoji                100.00 0:00:48.42 0:00:48.65      4842  24   0.000000 svoji
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav protože              100.00 0:00:55.36 0:00:55.75      5536  40   0.000000 protože
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav život*                69.61 0:00:58.46 0:00:58.80      5846  35  34.035156 živoť
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav určitě               100.00 0:00:59.01 0:00:59.31      5901  31   0.000000 určiťe
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav další*                27.59 0:00:59.87 0:01:00.22      5987  36  73.494141 olší
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav věc*                 100.00 0:01:00.21 0:01:00.47      6021  27   0.000000 vjeci
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav například            100.00 0:01:00.70 0:01:01.12      6070  43   0.000000 napŘíklat
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav nebyl*                37.29 0:01:05.77 0:01:06.03      6577  27  55.185547 ohla
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav stran*                45.28 0:01:08.22 0:01:08.56      6822  35  68.941406 straňet
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav proti                 90.21 0:01:23.35 0:01:23.76      8335  42  11.654297 proťi
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav smluvní*              59.88 0:01:25.33 0:01:25.76      8533  44  63.183594 mloví
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav někdo                100.00 0:01:26.58 0:01:26.93      8658  36   0.000000 ňegdo
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav prostě                61.07 0:01:28.93 0:01:29.31      8893  39  48.274414 prsťe
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav vlád*                 96.21 0:01:36.67 0:01:36.96      9667  30   3.638184 vládne
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav dnešní*               53.87 0:01:36.83 0:01:37.20      9683  38  55.356445 dnešťí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                100.00 0:01:44.02 0:01:44.43     10402  42   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav takto                 76.22 0:01:44.90 0:01:45.22     10490  33  22.469727 takto
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav kter*                 37.98 0:01:45.10 0:01:45.33     10510  24  43.416992 ktora
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                100.00 0:01:50.76 0:01:51.36     11076  61   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav tentokrát            100.00 0:01:51.81 0:01:52.50     11181  70   0.000000 tentokrát
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav případě               55.02 0:01:58.45 0:01:58.83     11845  39  64.767578 pŘíplaťo
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav opravdu              100.00 0:02:02.83 0:02:03.30     12283  48   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav vždy*                100.00 0:02:04.11 0:02:04.53     12411  43   0.000000 vždicki
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav tohle                 86.30 0:02:07.08 0:02:07.60     12708  53  20.138672 ohle
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav jednoho               97.97 0:02:14.03 0:02:14.36     13403  34   2.467773 jednoho
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav nebyl*                53.80 0:02:15.51 0:02:15.78     13551  28  42.505371 nebuj
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav kter*                100.00 0:02:16.10 0:02:16.45     13610  36   0.000000 kterí
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav všechn*              100.00 0:02:22.33 0:02:22.76     14233  44   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav další*               100.00 0:02:24.35 0:02:24.72     14435  38   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                 93.99 0:02:25.13 0:02:25.41     14513  29   4.834961 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav naprosto              76.69 0:02:26.41 0:02:26.95     14641  55  51.280273 áprosto
d:\WordSpotting\DATA\Stream\Zviratka_2f61a66a18cc348b_360p.wav zvíř*                 99.17 0:02:30.23 0:02:30.72     15023  50   1.490234 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav dnes*                100.00 0:00:03.42 0:00:03.82       342  41   0.000000 dnes
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav uvidíte              100.00 0:00:03.90 0:00:04.43       390  54   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav opravdu              100.00 0:00:04.88 0:00:05.48       488  61   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav kter*                100.00 0:00:09.72 0:00:10.02       972  31   0.000000 kterí
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav vlád*                 65.66 0:00:10.18 0:00:10.56      1018  39  42.581055 vládnu
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav znov*                 45.84 0:00:15.18 0:00:15.50      1518  33  49.283203 noval
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jejich                29.80 0:00:17.77 0:00:17.97      1777  21  41.770020 elj
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                100.00 0:00:20.36 0:00:20.68      2036  33   0.000000 zvířata
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jaksi                 85.26 0:00:21.13 0:00:21.35      2113  23   9.288086 jakse
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav dnes*                 91.26 0:00:22.31 0:00:22.48      2231  18   3.931641 gnes
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav kter*                 31.48 0:00:22.43 0:00:22.67      2243  25  54.814941 starí
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 96.51 0:00:22.92 0:00:23.28      2292  37   4.710938 sňířat
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav naprosto              81.91 0:00:23.25 0:00:23.80      2325  56  40.701172 prosto
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav proti                 99.63 0:00:24.10 0:00:24.38      2410  29   0.313477 proťi
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 63.09 0:00:24.37 0:00:24.75      2437  39  51.483398 zvířat
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                100.00 0:00:32.02 0:00:32.37      3202  36   0.000000 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav tentokrát            100.00 0:00:32.77 0:00:33.47      3277  71   0.000000 tentokrát
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 85.46 0:00:44.40 0:00:44.68      4440  29  12.209473 zvíř
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav pokud                 63.25 0:00:44.95 0:00:45.21      4495  27  28.296387 poku
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav ještě                100.00 0:00:50.32 0:00:50.71      5032  40   0.000000 ješťe
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jednoho               70.73 0:00:50.75 0:00:51.12      5075  38  40.833984 jedno4
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav naprosto             100.00 0:00:57.38 0:00:57.97      5738  60   0.000000 naprosto
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav tohoto                98.27 0:00:59.83 0:01:00.13      5983  31   1.729492 tohot
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav plán*                 35.39 0:01:00.58 0:01:00.81      6058  24  36.829102 tlam
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav úpln*                100.00 0:01:05.97 0:01:06.41      6597  45   0.000000 úplňe
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav téhle                 75.14 0:01:07.62 0:01:07.95      6762  34  23.491211 éhle
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav tohle                100.00 0:01:18.43 0:01:18.83      7843  41   0.000000 tohle
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 70.92 0:01:24.38 0:01:24.93      8438  56  58.876953 zvířat
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jejich                27.38 0:01:24.91 0:01:25.17      8491  27  55.916992 jei
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav naprosto              76.57 0:01:25.16 0:01:25.62      8516  47  44.513672 nrosto
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav měst*                 26.65 0:01:28.63 0:01:28.90      8863  28  64.547852 ňestn
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav stran*                62.75 0:01:28.75 0:01:29.08      8875  34  41.724609 stnani
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav nikdy                 20.42 0:01:29.78 0:01:30.06      8978  29  64.061523 ňíki
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav minut*                41.37 0:01:33.51 0:01:33.77      9351  27  45.146484 úluk
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav takže                100.00 0:01:44.20 0:01:44.57     10420  38   0.000000 tagže
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav trošk*                53.91 0:01:48.81 0:01:49.30     10881  50  73.750000 trošičku
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav protože              100.00 0:01:58.07 0:01:58.41     11807  35   0.000000 protože
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jejich               100.00 0:02:04.35 0:02:04.68     12435  34   0.000000 jejih
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                100.00 0:02:08.02 0:02:08.51     12802  50   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav tentokrát            100.00 0:02:09.42 0:02:10.17     12942  76   0.000000 tentokrát
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav opravdu               58.38 0:02:22.75 0:02:23.16     14275  42  63.680664 ipravdu
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav dnes*                 33.12 0:02:37.97 0:02:38.22     15797  26  42.133301 s
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav jinak                100.00 0:02:39.71 0:02:40.03     15971  33   0.000000 jinak
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav dnešní*               93.44 0:02:50.87 0:02:51.21     17087  35   6.431641 ešňí
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 31.22 0:02:51.77 0:02:52.02     17177  26  50.550293 zvíř
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav další*               100.00 0:02:54.15 0:02:54.48     17415  34   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav uvidíte              100.00 0:02:56.43 0:02:56.91     17643  49   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 88.65 0:02:57.28 0:02:57.75     17728  48  19.411133 zvířat
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav proti                 91.69 0:02:58.78 0:02:59.06     17878  29   6.687012 proťi
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                 29.47 0:02:59.05 0:02:59.38     17905  34  88.874023 zířat
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav další*               100.00 0:03:00.83 0:03:01.22     18083  40   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav korun*                95.34 0:03:01.26 0:03:01.57     18126  32   4.242188 korin
d:\WordSpotting\DATA\Stream\Zviratka_8810335096eb6991_360p.wav zvíř*                100.00 0:03:01.98 0:03:02.37     18198  40   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav dnes*                100.00 0:00:03.33 0:00:03.72       333  40   0.000000 dnes
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav uvidíte              100.00 0:00:03.80 0:00:04.31       380  52   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav opravdu              100.00 0:00:04.51 0:00:05.06       451  56   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav opravdu              100.00 0:00:06.67 0:00:07.32       667  66   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav život*               100.00 0:00:11.06 0:00:11.47      1106  42   0.000000 života
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                 97.94 0:00:16.28 0:00:16.61      1628  34   1.950195 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                 86.06 0:00:18.12 0:00:18.46      1812  35  13.661133 kterí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav tentokrát            100.00 0:00:23.53 0:00:24.08      2353  56   0.000000 tentokrát
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                 86.98 0:00:25.80 0:00:26.11      2580  32  11.844727 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                 92.95 0:00:26.23 0:00:26.50      2623  28   5.428223 Xtere
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav naopak                99.50 0:00:28.36 0:00:28.76      2836  41   0.660156 naopad
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav nebyl*                21.87 0:00:33.12 0:00:33.51      3312  40  87.506836 nebo
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav takto                 84.38 0:00:38.52 0:00:38.82      3852  31  13.670410 takto
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav plátki               100.00 0:00:43.86 0:00:44.27      4386  42   0.000000 plátki
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav pokud                 34.62 0:00:45.80 0:00:46.11      4580  32  59.498047 oXut
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav myslíte              100.00 0:00:49.63 0:00:50.06      4963  44   0.000000 mislíte
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav další*               100.00 0:01:03.30 0:01:03.80      6330  51   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav další*                96.08 0:01:04.16 0:01:04.60      6416  45   4.937500 další
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav jaksi                 86.23 0:01:07.40 0:01:07.86      6740  47  18.314453 jaksv
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav třicet*               83.84 0:01:13.62 0:01:13.96      7362  35  18.093750 pŘiced
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav dnes*                 98.17 0:01:14.58 0:01:14.85      7458  28   1.208984 nes
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav jaksi                 24.66 0:01:16.03 0:01:16.21      7603  19  39.553711 jaksm
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav tohle                 81.57 0:01:17.12 0:01:17.40      7712  29  14.839355 ohle
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                100.00 0:01:17.45 0:01:17.78      7745  34   0.000000 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav takto                 31.89 0:01:17.91 0:01:18.26      7791  36  69.133789 tagpo
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav ještě                 88.42 0:01:24.31 0:01:24.55      8431  25   8.108398 ješťe
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav všechn*              100.00 0:01:25.60 0:01:26.11      8560  52   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav dnes*                 33.48 0:01:33.02 0:01:33.26      9302  25  39.910156 dnez
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                 95.16 0:01:33.63 0:01:33.93      9363  31   4.233398 zvíři
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav tohoto               100.00 0:01:34.16 0:01:34.48      9416  33   0.000000 tohoto
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav přesně                91.44 0:01:35.66 0:01:36.06      9566  41  11.299805 pŘesňe
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav dnes*                 65.17 0:01:40.06 0:01:40.32     10006  27  22.988770 nes
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav ještě                 38.37 0:01:40.92 0:01:41.16     10092  25  43.139160 pjesle
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav protože               51.64 0:01:42.87 0:01:43.30     10287  44  76.168945 proto
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav téhle                 31.19 0:01:43.47 0:01:43.72     10347  26  50.572754 tadle
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav jednoho               68.47 0:01:49.70 0:01:49.98     10970  29  34.052246 jednuo
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav samozřejmě            95.47 0:01:57.18 0:01:57.72     11718  55  11.958008 samozřejňí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav takže                 66.66 0:01:58.57 0:01:58.92     11857  36  33.838867 ttakse
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav plyn*                 36.21 0:01:59.52 0:01:59.72     11952  21  32.534180 pliv
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav jmenuje              100.00 0:01:59.70 0:02:00.15     11970  46   0.000000 jmenuje
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav protože               90.63 0:02:06.81 0:02:07.18     12681  38  13.074219 prtože
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav žádn*                100.00 0:02:08.22 0:02:08.67     12822  46   0.000000 žádnou
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav život*               100.00 0:02:09.42 0:02:09.78     12942  37   0.000000 života
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                 98.32 0:02:11.02 0:02:11.35     13102  34   1.587891 kterém
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                 99.45 0:02:11.57 0:02:12.05     13157  49   0.963867 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                100.00 0:02:20.17 0:02:20.63     14017  47   0.000000 kterí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav takže                 29.36 0:02:24.26 0:02:24.56     14426  31  61.812500 tag4
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav velk*                 99.19 0:02:26.98 0:02:27.36     14698  39   0.880859 velki
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav anebo                 27.02 0:02:27.87 0:02:28.13     14787  27  56.192871 ebo
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                100.00 0:02:31.81 0:02:32.26     15181  46   0.000000 zvířeťi
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav trošk*                99.47 0:02:34.28 0:02:34.57     15428  30   0.510254 troško
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav dobře                100.00 0:02:35.52 0:02:35.77     15552  26   0.000000 dobře
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav budem*               100.00 0:02:36.05 0:02:36.37     15605  33   0.000000 budeme
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav stran*                72.38 0:02:38.21 0:02:38.58     15821  38  38.524414 stranu
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav všechn*              100.00 0:02:40.70 0:02:41.16     16070  47   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav opravdu              100.00 0:02:42.58 0:02:43.11     16258  54   0.000000 opravdu
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                100.00 0:02:46.41 0:02:46.67     16641  27   0.000000 kterí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kvůli                 64.75 0:02:49.37 0:02:49.65     16937  29  28.374512 húli
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav další*               100.00 0:02:54.85 0:02:55.22     17485  38   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                100.00 0:02:55.76 0:02:56.27     17576  52   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav příště                94.28 0:02:57.88 0:02:58.25     17788  38   6.862305 pŘíšťe
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav zvíř*                 82.80 0:02:58.95 0:02:59.21     17895  27  13.247070 zvíř
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav všechn*              100.00 0:03:02.15 0:03:02.48     18215  34   0.000000 fšeXno
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav vůbec                 24.92 0:03:02.51 0:03:02.83     18251  33  70.948242 obeCs
d:\WordSpotting\DATA\Stream\Zviratka_9109262ab4a7cf9f_360p.wav kter*                 42.09 0:03:04.18 0:03:04.46     18418  29  46.616699 teda
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav dnes*                100.00 0:00:03.21 0:00:03.58       321  38   0.000000 dnes
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav uvidíte              100.00 0:00:03.65 0:00:04.20       365  56   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav jinak                 64.86 0:00:09.63 0:00:09.90       963  28  27.057129 ínak
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav kter*                 99.92 0:00:09.87 0:00:10.16       987  30   0.070313 kterí
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav protože               93.18 0:00:20.22 0:00:20.62      2022  41  10.128906 prtožeg
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav někdo                 24.98 0:00:20.53 0:00:20.80      2053  28  57.762207 egdoj
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                100.00 0:00:24.76 0:00:25.08      2476  33   0.000000 zvíře
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav prostě               100.00 0:00:33.16 0:00:33.50      3316  35   0.000000 prosťe
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav trošk*                20.04 0:00:33.56 0:00:33.82      3356  27  70.364258 ťíčku
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav korun*                73.50 0:00:34.05 0:00:34.35      3405  31  23.186523 korují
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav tohle                 93.36 0:00:37.87 0:00:38.17      3787  31   5.808594 tohle
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav svoji                 43.73 0:00:46.91 0:00:47.18      4691  28  45.301270 svúj
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav minut*                44.31 0:00:48.51 0:00:48.80      4851  30  46.780273 mimu
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav vůbec                100.00 0:00:49.42 0:00:49.82      4942  41   0.000000 vúbec
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav stran*                31.81 0:00:51.85 0:00:52.16      5185  32  70.918945 taa4
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav tohle                 96.17 0:01:01.26 0:01:01.52      6126  27   2.950195 tohle
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav takže                 22.29 0:01:02.40 0:01:02.72      6240  33  73.433594 tagž
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav anebo                 48.69 0:01:08.53 0:01:08.83      6853  31  44.892090 nebo
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav prostě               100.00 0:01:14.11 0:01:14.42      7411  32   0.000000 prosťe
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav všechn*              100.00 0:01:20.40 0:01:20.83      8040  44   0.000000 fšeXna
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                100.00 0:01:20.85 0:01:21.28      8085  44   0.000000 zvířata
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav kter*                100.00 0:01:26.23 0:01:26.52      8623  30   0.000000 která
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav takto                 89.21 0:01:28.42 0:01:28.97      8842  56  17.000977 takt
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav tohle                 92.75 0:01:28.85 0:01:29.32      8885  48   9.891602 tohle
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav jmenuje              100.00 0:01:35.65 0:01:36.10      9565  46   0.000000 jmenuje
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav nikdo                100.00 0:01:38.36 0:01:38.68      9836  33   0.000000 ňigdo
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav znov*                 20.79 0:01:50.68 0:01:51.00     11068  33  72.084961 nohu
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                 92.04 0:01:59.23 0:01:59.68     11923  46  13.249023 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav tohle                 97.44 0:02:04.60 0:02:04.86     12460  27   1.968750 todle
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav minut*                28.92 0:02:07.55 0:02:07.81     12755  27  54.733887 mínom
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav další*                71.92 0:02:09.21 0:02:09.61     12921  41  37.067383 dalřím
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav jmenuje               94.26 0:02:10.48 0:02:10.91     13048  44   9.038086 jménije
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav čast*                 57.50 0:02:13.05 0:02:13.47     13305  43  59.504883 ťastu
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav dnes*                 35.35 0:02:25.33 0:02:25.55     14533  23  34.910156 vnéz
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav stát*                 42.71 0:02:26.63 0:02:27.08     14663  46  63.590820 stál
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav další*               100.00 0:02:38.40 0:02:38.75     15840  36   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                100.00 0:02:39.47 0:02:39.95     15947  49   0.000000 zvířecí
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav příště                98.29 0:02:41.22 0:02:41.60     16122  39   2.125000 pŘíšťe
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav uvidíte              100.00 0:02:41.57 0:02:42.03     16157  47   0.000000 uviďíte
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav rychle                62.38 0:02:42.60 0:02:42.93     16260  34  36.872070 riXla
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                100.00 0:02:44.47 0:02:45.03     16447  57   0.000000 zvířata
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav další*               100.00 0:02:46.42 0:02:46.93     16642  52   0.000000 další
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav zvíř*                 96.75 0:02:49.96 0:02:50.33     16996  38   4.538086 zvířata
d:\WordSpotting\DATA\Stream\Zviratka_b3d4f2d5caeb6dc0_360p.wav jakoby                71.61 0:02:53.06 0:02:53.46     17306  41  37.478516 nakobiX
`;


/***/ }),

/***/ "./src/app/spot-table/spot-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/spot-table/spot-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: SpotTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTableDataSource", function() { return SpotTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




//window["of"] = observableOf;
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compareStrings(a, b, isAsc) {
    return a.localeCompare(b) * (isAsc ? 1 : -1);
}
class SpotTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor() {
        super();
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._filterEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._minScore = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._keywordPattern = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        // private readonly _dataAttributes = new BehaviorSubject<DataAttributes[]>([]);
        // private readonly loadingSubject = new BehaviorSubject<boolean>(false);
        // loading$ = this.loadingSubject.asObservable();
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.filteredDataMap = new WeakMap();
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction === '') {
                return data;
            }
            return data.sort((a, b) => {
                const isAsc = this.sort.direction === 'asc';
                switch (this.sort.active) {
                    case 'index': return compare(a.index, b.index, isAsc);
                    case 'source': return compare(a.filename, b.filename, isAsc);
                    case 'score': return compare(a.score, b.score, isAsc);
                    case 'timeFrom': return compare(a.timeFrom, b.timeFrom, isAsc);
                    case 'timeTo': return compare(a.timeTo, b.timeTo, isAsc);
                    case 'keyword': return compareStrings(a.keyword, b.keyword, isAsc);
                    default: return 0;
                }
            });
        };
        this._updateChangeSubscription();
    }
    set filterEnabled(value) { this._filterEnabled.next(value); }
    get filterEnabled() { return this._filterEnabled.value; }
    get sort() { return this._sort; }
    set sort(value) {
        this._sort = value;
        this._updateChangeSubscription();
    }
    get paginator() { return this._paginator; }
    set paginator(value) {
        this._paginator = value;
        this._updateChangeSubscription();
    }
    set data(value) { this._data.next(value); }
    get data() { return this._data.value; }
    set keywordPattern(value) { this._keywordPattern.next(value); }
    get keywordPattern() { return this._keywordPattern.value; }
    set minScore(value) { this._minScore.next(value); }
    get minScore() { return this._minScore.value; }
    _updateChangeSubscription() {
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        const dataStream = this._data;
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(dataStream, this._minScore, this._keywordPattern, this._filterEnabled)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([data]) => this._filterData(data)));
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(filteredData, sortChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([data]) => this._orderData(data)));
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(orderedData, pageChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([data]) => this._pageData(data)));
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    _filterData(data) {
        // this.filteredData = !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
        const minScore = this._minScore.value;
        const keywordPattern = this._keywordPattern.value;
        let filteringResult = false;
        if (!this.filterEnabled) {
            let item = null;
            if (minScore === 0 && keywordPattern == null) {
                for (let i = 0, I = data.length; i < I; i++) {
                    data[i].filtered = false;
                }
            }
            else {
                for (let i = 0, I = data.length; i < I; i++) {
                    item = data[i];
                    if (keywordPattern) {
                        filteringResult = item.score >= minScore && keywordPattern.test(item.keyword);
                        item.filtered = filteringResult;
                    }
                    else {
                        filteringResult = item.score >= minScore;
                        item.filtered = filteringResult;
                    }
                }
            }
            this.filteredData = data;
        }
        else {
            this.filteredData = data.filter((item) => {
                if (keywordPattern) {
                    filteringResult = item.score >= minScore && keywordPattern.test(item.keyword);
                    item.filtered = filteringResult;
                    return filteringResult;
                }
                else {
                    filteringResult = item.score >= minScore;
                    item.filtered = filteringResult;
                    return filteringResult;
                }
            });
        }
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() { return this._renderData; }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}
// IT WOULD MAKE THE SPOT TABLE A SMART COMPONENT
// VIOLATES SINGLE RESPONSIBILITY
// loadSpots() {
//     this.loadingSubject.next(true);
//     this.spotReaderService.getSpots().pipe(
//         catchError(() => of([])),
//         finalize(() => this.loadingSubject.next(false))
//     )
//         .subscribe(spots => {
//             this.data.length = 0;
//             this.data.push(...spots);
//         });
// }
// DEPRECATED
// Combine everything that affects the rendered data into one update
// stream for the data-table to consume.
// const dataMutations = [
//     // observableOf(this.data),
//     // this.loading$.pipe(filter(x => !x)),
//     this.dataSubject,
//     this.filterOnSubject,
//     this.minScoreSubject,
//     this.paginator.page,
//     this.sort.sortChange,
//     this.internalPageChanges,
// ];
// return merge(...dataMutations).pipe(map(() => {
//     console.log("spot table datasource update", this.data);
//     const data = this.filterOn ? this.getFilteredData(this.data) : [...this.data];
//     return this.getPagedData(this.getSortedData(data));
// }))


/***/ }),

/***/ "./src/app/spot-table/spot-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/spot-table/spot-table.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: 30px;\n  display: contents;\n}\n\n.container {\n  display: contents;\n}\n\n.table-container {\n  z-index: 10;\n  overflow: auto;\n}\n\n.full-width-table {\n  width: 100%;\n}\n\n.loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.controls-container {\n  display: inline-flex;\n  align-items: center;\n  z-index: 20;\n}\n\n.controls-container > * {\n  margin-top: 20px;\n  margin-left: 30px;\n}\n\n.controls-container > :last-child {\n  margin-right: 30px;\n}\n\n.highlight {\n  background-color: #cbe4df;\n}\n\n.mat-row:hover > .mat-cell {\n  border-bottom-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvdC10YWJsZS9EOlxcX19wcm9qZWN0c1xcd29yZHNwb3R0ZXItdWkvc3JjXFxhcHBcXHNwb3QtdGFibGVcXHNwb3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nwb3QtdGFibGUvc3BvdC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRFlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNURjs7QURXRTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNUTjs7QURZRTtFQUNFLGtCQUFBO0FDVko7O0FEY0E7RUFDSSx5QkFBQTtBQ1hKOztBRGVJO0VBQ0kseUJBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL3Nwb3QtdGFibGUvc3BvdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBsaWJyYXJ5IGZ1bmN0aW9ucyBmb3IgdGhlbWUgY3JlYXRpb24uXHJcbi8vIEBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nJztcclxuXHJcbjpob3N0IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRpbmctc2hhZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDU2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLmZvcm0tc2VjdGlvbiB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBoZWlnaHQ6IDYwcHg7XHJcbi8vIH1cclxuXHJcbi5jb250cm9scy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjA7XHJcblxyXG4gICYgPiAqIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmID4gOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMjgsIDIyMylcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgJiA+IC5tYXQtY2VsbCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JheTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtaXhpbiBtYXQtdGFibGUtY29sdW1ucygkY29sdW1ucykge1xyXG4gICAgLm1hdC1jb2x1bW4tIHtcclxuICAgICAgQGVhY2ggJGNvbE5hbWUsICRwcm9wcyBpbiAkY29sdW1ucyB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXAtZ2V0KCRwcm9wcywgXCJ3aWR0aFwiKTtcclxuICBcclxuICAgICAgICAmI3skY29sTmFtZX0ge1xyXG4gICAgICAgICAgZmxleDogJHdpZHRoO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAkd2lkdGg7XHJcbiAgXHJcbiAgICAgICAgICBAaWYgbWFwLWhhcy1rZXkoJHByb3BzLCBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJHByb3BzLCBcImNvbG9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAaW5jbHVkZSBtYXQtdGFibGUtY29sdW1ucygoXHJcbiAgICAvLyBzb3VyY2U6ICh3aWR0aDogNnJlbSwgY29sb3I6IGdyYXkpLFxyXG4gICkpO1xyXG4gIFxyXG4gIC8vIHRkLm1hdC1jb2x1bW4tc291cmNlIHtcclxuICAvLyAgICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgLy8gICAgIGNvbG9yOiByZWQ7XHJcbiAgLy8gICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8gfSIsIjpob3N0IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRpbmctc2hhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1NnB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjA7XG59XG4uY29udHJvbHMtY29udGFpbmVyID4gKiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZTRkZjtcbn1cblxuLm1hdC1yb3c6aG92ZXIgPiAubWF0LWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/spot-table/spot-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/spot-table/spot-table.component.ts ***!
  \****************************************************/
/*! exports provided: SpotTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTableComponent", function() { return SpotTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _spot_table_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spot-table-datasource */ "./src/app/spot-table/spot-table-datasource.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let SpotTableComponent = class SpotTableComponent {
    constructor(fb) {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // loading$ = loadingSubject.as
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataSource = new _spot_table_datasource__WEBPACK_IMPORTED_MODULE_6__["SpotTableDataSource"]();
        this.focusedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataOnPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.renderItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlightedItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // and visible
        this.filterModes = [
            { value: 'filter', viewValue: 'Filter' },
            { value: 'highlight', viewValue: 'Highlight' },
        ];
        // @Output() playAudi = new EventEmitter<string>();
        this.displayedColumns = [
            'index',
            'source',
            'keyword',
            'timeFrom',
            'timeTo',
            'score',
            'action'
        ];
        this.pageSizeOptions = [10, 50, 100, 500, 1000];
        window['spotTable'] = this;
        this.controlTableFormGroup = fb.group({
            keyword: ['', []],
            minScore: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100)]],
            filterMode: 'highlight'
        });
    }
    // private dataSubject = new BehaviorSubject<Spot[]>([]);
    set data(value) {
        console.log('setting spot table data', value);
        this.dataSource.data = value;
    }
    set goToItem(value) {
        // this.dataSource.daat
    }
    set keywordPattern(value) {
        this.dataSource.keywordPattern = value;
    }
    set minScore(value) {
        this.dataSource.minScore = value;
    }
    stringPatternToRegExp(pattern) {
        if (pattern === '') {
            return null;
        }
        pattern = pattern.replace(/\*/g, '.*');
        pattern = `^${pattern}$`;
        return new RegExp(pattern, 'i');
    }
    ngOnInit() {
        // this.controls.get('highlight').valueChanges.pipe()
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.controlTableFormGroup.get('keyword').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(300), // wait 1.5sec for the user to finish entering info before applying filter
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribe)).subscribe((value) => {
            // console.log(value)
            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(value)) {
                // apply the filter to the data source
                value = value.trim().toLowerCase();
                this.dataSource.keywordPattern = this.stringPatternToRegExp(value);
            }
        });
        this.controlTableFormGroup.get('minScore').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(300), // wait 1.5sec for the user to finish entering info before applying filter
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribe)).subscribe((value) => {
            // console.log(value)
            this.dataSource.minScore = value;
        });
        this.dataSource.connect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribe))
            .subscribe(this.renderItems);
        this.dataSource.connect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribe))
            .subscribe(renderData => {
            if (this.dataSource.filterEnabled) {
                const minScore = this.dataSource.minScore;
                const data = renderData.filter(item => item.score >= minScore);
                this.highlightedItems.next(data);
            }
        });
    }
    adjustSort(key) {
    }
    playAudio(index) {
    }
    onRowClicked(row) {
        console.log('Row clicked: ', row);
    }
    onFilterModeChanged(mode) {
        console.log('Filter mode changed: ', mode);
        this.dataSource.filterEnabled = (mode === 'filter');
    }
    filteredDataLength() {
        return this.dataSource.filteredData.length;
    }
    // isHighlight(item) {
    //     return item.score >= this.dataSource.minScore; // || this.dataSource.;
    // }
    trackByFn(item) {
        return item.index;
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
};
SpotTableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], SpotTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], SpotTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], { static: false })
], SpotTableComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotTableComponent.prototype, "data", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpotTableComponent.prototype, "goToItem", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpotTableComponent.prototype, "focusedItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpotTableComponent.prototype, "dataOnPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpotTableComponent.prototype, "renderItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpotTableComponent.prototype, "highlightedItems", void 0);
SpotTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spot-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spot-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spot-table/spot-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spot-table.component.scss */ "./src/app/spot-table/spot-table.component.scss")).default]
    })
], SpotTableComponent);



/***/ }),

/***/ "./src/app/table-with-chart/table-with-chart.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/table-with-chart/table-with-chart.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  display: grid;\n  grid-template-rows: 80px 3fr 50px 1fr;\n  overflow: hidden;\n  /* height: 100%; */\n  /* width: 100%; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUtd2l0aC1jaGFydC9EOlxcX19wcm9qZWN0c1xcd29yZHNwb3R0ZXItdWkvc3JjXFxhcHBcXHRhYmxlLXdpdGgtY2hhcnRcXHRhYmxlLXdpdGgtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYmxlLXdpdGgtY2hhcnQvdGFibGUtd2l0aC1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBR0EsZ0JBQUE7RUFLQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC90YWJsZS13aXRoLWNoYXJ0L3RhYmxlLXdpdGgtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAzZnIgNTBweCAxZnI7XHJcbiAgICAvLyBncmlkLWdhcDogMTBweCAxMHB4O1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5hcHAtc3BvdC10YWJsZSB7XHJcbiAgICAvLyBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hcHAtc3BvdC1jaGFydCB7XHJcbiAgICAvLyBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xyXG59XHJcblxyXG5cclxuLy8gOmhvc3Q6bnRoLWNoaWxkKDEpIHtcclxuLy8gICAgIGZsZXgtZ3JvdzogMTtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3Q6bnRoLWNoaWxkKDIpIHtcclxuLy8gICAgIGZsZXgtZ3JvdzogMTtcclxuLy8gfSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggM2ZyIDUwcHggMWZyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/table-with-chart/table-with-chart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/table-with-chart/table-with-chart.component.ts ***!
  \****************************************************************/
/*! exports provided: TableWithChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWithChartComponent", function() { return TableWithChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_word_spotter_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/word-spotter-data.service */ "./src/app/services/word-spotter-data.service.ts");
/* harmony import */ var _services_audio_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audio-player.service */ "./src/app/services/audio-player.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");





let TableWithChartComponent = class TableWithChartComponent {
    constructor(wordSpotterDataService, audioPlayerService
    // private messageService
    ) {
        this.wordSpotterDataService = wordSpotterDataService;
        this.audioPlayerService = audioPlayerService;
        // @ViewChild()
        this.data = [];
        this.domain = [0, 1];
        window['spotChart'] = this;
    }
    ngOnInit() {
        this.wordSpotterDataService.getData().subscribe(data => {
            this.data = data.map(item => (Object.assign({}, item, { filtered: false })));
            // this.domain = d3.extent<Spot, number>(data, item => item.timeFrom);
            // messageService.showError
        });
    }
    onRenderItemsChange(items) {
        // console.log('render items change', items);
        setTimeout(() => {
            this.domain = d3__WEBPACK_IMPORTED_MODULE_4__["extent"](items, item => item.timeFrom);
            this.renderItems = items;
        }, 0);
    }
};
TableWithChartComponent.ctorParameters = () => [
    { type: _services_word_spotter_data_service__WEBPACK_IMPORTED_MODULE_2__["WordSpotterDataService"] },
    { type: _services_audio_player_service__WEBPACK_IMPORTED_MODULE_3__["AudioPlayerService"] }
];
TableWithChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-with-chart',
        template: `
    <app-spot-table #spotTable [data]="data" (renderItems)="onRenderItemsChange($event)"></app-spot-table>
    <app-spot-chart #spotChart [spots]="renderItems" [highlightedSpots]="spotTable" [domain]="domain"></app-spot-chart>
    `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-with-chart.component.scss */ "./src/app/table-with-chart/table-with-chart.component.scss")).default]
    })
], TableWithChartComponent);



/***/ }),

/***/ "./src/app/utils/parse-spot-file-data.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/parse-spot-file-data.ts ***!
  \***********************************************/
/*! exports provided: parseSpotFileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSpotFileData", function() { return parseSpotFileData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./src/app/utils/time.ts");


function parseSpotFileData(str) {
    const TIME_COEF = 10;
    const lines = str.match(/[^\r\n]+/g);
    const header = lines.shift();
    const spots = new Array(lines.length);
    for (let i = 0, I = lines.length; i < I; i++) {
        const lineParts = lines[i].split(/\s+/);
        if (lineParts.length !== 9) {
            throw new Error(`Invalid line ${i + 2}`);
        }
        spots[i] = {
            index: i,
            filename: lineParts[0],
            keyword: lineParts[1],
            score: parseFloat(lineParts[2]),
            timeFrom: TIME_COEF * Object(_time__WEBPACK_IMPORTED_MODULE_1__["parseTimeMs"])(lineParts[3]),
            timeTo: TIME_COEF * Object(_time__WEBPACK_IMPORTED_MODULE_1__["parseTimeMs"])(lineParts[4]),
            filler: ''
        };
        // spots[i] = parseInt(lineParts[5], 10);
        // spots[i] = parseInt(lineParts[6], 10);
        // spots[i] = parseFloat(lineParts[7]);
        spots[i].filler = lineParts[8];
    }
    return spots;
}


/***/ }),

/***/ "./src/app/utils/time.ts":
/*!*******************************!*\
  !*** ./src/app/utils/time.ts ***!
  \*******************************/
/*! exports provided: parseTimeMs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeMs", function() { return parseTimeMs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function parseTimeMs(str) {
    const parts = str.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseFloat(parts[2]);
    return Math.trunc(1000 * (3600 * hours + 60 * minutes + seconds));
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/material-design/material-design.module.ts":
/*!*******************************************************!*\
  !*** ./src/material-design/material-design.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");




























const modules = [
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkTableModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"]
];
// Declare Module that imports/exports the @angular/material modules needed in the app
let MaterialDesignModule = class MaterialDesignModule {
};
MaterialDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [...modules],
        exports: [...modules]
    })
], MaterialDesignModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\__projects\wordspotter-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map