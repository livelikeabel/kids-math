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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section cdkDropListGroup class=\"App\">\n  <h1>🎈재미있는 숫자 놀이 🔢</h1>\n  <app-card-hole-board></app-card-hole-board>\n  <app-card-board></app-card-board>\n</section>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-board/card-board.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-board/card-board.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card-board\">\n  <h3>숫자를 옮겨 보아요!👆🏼</h3>\n  <div\n    cdkDropList\n    [cdkDropListData]=\"numberList\"\n    (cdkDropListDropped)=\"drop($event)\"\n  >\n    <div class=\"card\" *ngFor=\"let number of numberList\" cdkDrag>\n      {{ number.value }}\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-board/card/card.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-board/card/card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-box\" cdkDrag>\n  {{ number }}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-hole-board/card-hole-board.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-hole-board/card-hole-board.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-hole-board\">\n  <app-card-hole\n    *ngFor=\"let number of boardNumbers\"\n    [holeNumber]=\"number\"\n    (finishEvent)=\"checkFinish($event)\"\n  ></app-card-hole>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-hole-board/card-hole/card-hole.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-hole-board/card-hole/card-hole.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  cdkDropList\n  [cdkDropListData]=\"hole\"\n  (cdkDropListDropped)=\"drop($event)\"\n  class=\"card-hole\"\n>\n  {{ holeNumber.value }}\n  <div class=\"card\" *ngFor=\"let item of hole\" cdkDrag>\n    {{ item.value }}\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".App {\n  height: 100vh;\n  background: #f6f6f6;\n}\n.App h1 {\n  background: #74b816;\n  border-bottom: 1px solid #2b8a3e;\n  height: 70px;\n  line-height: 70px;\n  font-size: 25px;\n  width: 100%;\n  margin: 0 0 100px;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmVsL0FiZWwva2lkcy1tYXRoL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuXG4gIGgxIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzRiODE2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmI4YTNlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLkFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG4uQXBwIGgxIHtcbiAgYmFja2dyb3VuZDogIzc0YjgxNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYjhhM2U7XG4gIGhlaWdodDogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_hole_board_card_hole_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-hole-board/card-hole-board.component */ "./src/app/card-hole-board/card-hole-board.component.ts");
/* harmony import */ var _card_board_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-board/card/card.component */ "./src/app/card-board/card/card.component.ts");
/* harmony import */ var _card_hole_board_card_hole_card_hole_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-hole-board/card-hole/card-hole.component */ "./src/app/card-hole-board/card-hole/card-hole.component.ts");
/* harmony import */ var _card_board_card_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-board/card-board.component */ "./src/app/card-board/card-board.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _card_hole_board_card_hole_board_component__WEBPACK_IMPORTED_MODULE_7__["CardHoleBoardComponent"],
                _card_board_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _card_hole_board_card_hole_card_hole_component__WEBPACK_IMPORTED_MODULE_9__["CardHoleComponent"],
                _card_board_card_board_component__WEBPACK_IMPORTED_MODULE_10__["CardBoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-board/card-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/card-board/card-board.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-board {\n  width: 852px;\n  height: 312px;\n  padding: 10px;\n  margin: 0 auto;\n  border: solid 1px #ccc;\n  box-sizing: border-box;\n  background: #1971c2;\n  border-radius: 4px;\n  position: relative;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.card-board h3 {\n  font-size: 23px;\n  margin: 10px;\n  color: #f6f6f6;\n}\n.card {\n  width: 80px;\n  height: 80px;\n  border: solid 1px #ccc;\n  color: #1864ab;\n  font-size: 35px;\n  font-weight: 800;\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.card:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmVsL0FiZWwva2lkcy1tYXRoL3NyYy9hcHAvY2FyZC1ib2FyZC9jYXJkLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkLWJvYXJkL2NhcmQtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FDQ0Y7QURFRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtFQUNBLCtHQUFBO0FDREY7QURLQTtFQUNFLHFIQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWJvYXJkL2NhcmQtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2FyZCB7XG4gIHdpZHRoOiA4NTJweDtcbiAgaGVpZ2h0OiAzMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICMxOTcxYzI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogI2Y2ZjZmNjtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiAjMTg2NGFiO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNhcmQ6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4iLCIuY2FyZC1ib2FyZCB7XG4gIHdpZHRoOiA4NTJweDtcbiAgaGVpZ2h0OiAzMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICMxOTcxYzI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uY2FyZC1ib2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogIzE4NjRhYjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2FyZDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/card-board/card-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/card-board/card-board.component.ts ***!
  \****************************************************/
/*! exports provided: CardBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBoardComponent", function() { return CardBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var CardBoardComponent = /** @class */ (function () {
    function CardBoardComponent() {
        this.numberList = [
            { value: 1, checked: false },
            { value: 2, checked: false },
            { value: 3, checked: false },
            { value: 4, checked: false },
            { value: 5, checked: false },
            { value: 6, checked: false },
            { value: 7, checked: false },
            { value: 8, checked: false },
            { value: 9, checked: false },
            { value: 10, checked: false }
        ];
    }
    CardBoardComponent.prototype.ngOnInit = function () { };
    CardBoardComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CardBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card-board",
            template: __webpack_require__(/*! raw-loader!./card-board.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-board/card-board.component.html"),
            styles: [__webpack_require__(/*! ./card-board.component.scss */ "./src/app/card-board/card-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardBoardComponent);
    return CardBoardComponent;
}());



/***/ }),

/***/ "./src/app/card-board/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/card-board/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-box {\n  width: 80px;\n  height: 80px;\n  border: solid 1px #ccc;\n  color: #1864ab;\n  font-size: 40px;\n  font-weight: 800;\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmVsL0FiZWwva2lkcy1tYXRoL3NyYy9hcHAvY2FyZC1ib2FyZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtYm9hcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQ0NGOztBREdBO0VBQ0UscUhBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtYm9hcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYm94IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6ICMxODY0YWI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4iLCIuZXhhbXBsZS1ib3gge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogIzE4NjRhYjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-board/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/card-board/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CardComponent.prototype, "number", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-board/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card-board/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card-hole-board/card-hole-board.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/card-hole-board/card-hole-board.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-hole-board {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-content: space-evenly;\n  width: 852px;\n  height: 180px;\n  margin: 0 auto;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  text-align: center;\n  background: #ffe066;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmVsL0FiZWwva2lkcy1tYXRoL3NyYy9hcHAvY2FyZC1ob2xlLWJvYXJkL2NhcmQtaG9sZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZC1ob2xlLWJvYXJkL2NhcmQtaG9sZS1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtHQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWhvbGUtYm9hcmQvY2FyZC1ob2xlLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaG9sZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDg1MnB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZTA2NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuIiwiLmNhcmQtaG9sZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDg1MnB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZTA2NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card-hole-board/card-hole-board.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/card-hole-board/card-hole-board.component.ts ***!
  \**************************************************************/
/*! exports provided: CardHoleBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHoleBoardComponent", function() { return CardHoleBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardHoleBoardComponent = /** @class */ (function () {
    function CardHoleBoardComponent() {
        var _this = this;
        this.boardNumbers = [
            { value: 1, checked: false },
            { value: 2, checked: false },
            { value: 3, checked: false },
            { value: 4, checked: false },
            { value: 5, checked: false },
            { value: 6, checked: false },
            { value: 7, checked: false },
            { value: 8, checked: false },
            { value: 9, checked: false },
            { value: 10, checked: false }
        ];
        this._getNewBoardNumbers = function () {
            return _this.boardNumbers.slice(-10).map(function (_a) {
                var value = _a.value;
                return { value: value + 10, checked: false };
            });
        };
        this.checkFinish = function (_a) {
            var _b, _c;
            var _d = _a.number, value = _d.value, checked = _d.checked, previousContainer = _a.previousContainer;
            _this.boardNumbers = _this.boardNumbers.map(function (number) {
                if (number.value === value)
                    number.checked = checked;
                return number;
            });
            var isFinish = _this.boardNumbers.every(function (_a) {
                var checked = _a.checked;
                return checked === true;
            });
            if (isFinish) {
                var newBoardNumbers = _this._getNewBoardNumbers();
                if (_this.boardNumbers.length > 10)
                    _this.boardNumbers.splice(0, 10);
                (_b = _this.boardNumbers).push.apply(_b, newBoardNumbers);
                (_c = previousContainer.data).push.apply(_c, newBoardNumbers);
            }
        };
    }
    CardHoleBoardComponent.prototype.ngOnInit = function () { };
    CardHoleBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card-hole-board",
            template: __webpack_require__(/*! raw-loader!./card-hole-board.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-hole-board/card-hole-board.component.html"),
            styles: [__webpack_require__(/*! ./card-hole-board.component.scss */ "./src/app/card-hole-board/card-hole-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardHoleBoardComponent);
    return CardHoleBoardComponent;
}());



/***/ }),

/***/ "./src/app/card-hole-board/card-hole/card-hole.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/card-hole-board/card-hole/card-hole.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-hole {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  border: solid 1px #ffec99;\n  background: #daa520;\n  box-sizing: border-box;\n  font-size: 35px;\n  font-weight: 800;\n  color: #fff9db;\n  text-align: center;\n  line-height: 80px;\n  border-radius: 4px;\n  box-shadow: inset 0px 0px 5px 1px rgba(140, 85, 25, 0.74);\n}\n\n.card {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  width: 80px;\n  height: 80px;\n  border: solid 1px #ccc;\n  background: white;\n  box-sizing: border-box;\n  font-size: 35px;\n  font-weight: 800;\n  color: #1864ab;\n  text-align: center;\n  line-height: 80px;\n  border-radius: 4px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmVsL0FiZWwva2lkcy1tYXRoL3NyYy9hcHAvY2FyZC1ob2xlLWJvYXJkL2NhcmQtaG9sZS9jYXJkLWhvbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtaG9sZS1ib2FyZC9jYXJkLWhvbGUvY2FyZC1ob2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EseURBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1ob2xlLWJvYXJkL2NhcmQtaG9sZS9jYXJkLWhvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ob2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmVjOTk7XG4gIC8vIGJhY2tncm91bmQ6ICNmY2M0MTk7XG4gIGJhY2tncm91bmQ6ICNkYWE1MjA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmZmY5ZGI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEzcHggNHB4IHJnYmEoMTQwLCA4NSwgMjUsIDAuNzQpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTNweCA0cHggcmdiYSgxNDAsIDg1LCAyNSwgMC43NCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDFweCByZ2JhKDE0MCwgODUsIDI1LCAwLjc0KTtcbn1cblxuLmNhcmQge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMTg2NGFiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuIiwiLmNhcmQtaG9sZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmZlYzk5O1xuICBiYWNrZ3JvdW5kOiAjZGFhNTIwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmOWRiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxM3B4IDRweCByZ2JhKDE0MCwgODUsIDI1LCAwLjc0KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEzcHggNHB4IHJnYmEoMTQwLCA4NSwgMjUsIDAuNzQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAxcHggcmdiYSgxNDAsIDg1LCAyNSwgMC43NCk7XG59XG5cbi5jYXJkIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzE4NjRhYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/card-hole-board/card-hole/card-hole.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/card-hole-board/card-hole/card-hole.component.ts ***!
  \******************************************************************/
/*! exports provided: CardHoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHoleComponent", function() { return CardHoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var CardHoleComponent = /** @class */ (function () {
    function CardHoleComponent() {
        var _this = this;
        this.finishEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hole = [];
        this._checkFinish = function (previousContainer) {
            _this.finishEvent.emit({ number: _this.hole[0], previousContainer: previousContainer });
        };
        this.validateDragCondition = function (e) {
            var value = _this.holeNumber.value;
            return (_this.hole.length >= 1 ||
                e.previousContainer.data[e.previousIndex].value !== value);
        };
    }
    CardHoleComponent.prototype.ngOnInit = function () { };
    // drop(event: CdkDragDrop<string[]>) {
    CardHoleComponent.prototype.drop = function (event) {
        var previousContainer = event.previousContainer, previousIndex = event.previousIndex, container = event.container, currentIndex = event.currentIndex;
        if (this.validateDragCondition(event))
            return;
        if (previousContainer === container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(container.data, previousIndex, currentIndex);
        }
        else {
            previousContainer.data[previousIndex].checked = true;
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(previousContainer.data, event.container.data, previousIndex, currentIndex);
        }
        this._checkFinish(previousContainer);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardHoleComponent.prototype, "holeNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardHoleComponent.prototype, "finishEvent", void 0);
    CardHoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card-hole",
            template: __webpack_require__(/*! raw-loader!./card-hole.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-hole-board/card-hole/card-hole.component.html"),
            styles: [__webpack_require__(/*! ./card-hole.component.scss */ "./src/app/card-hole-board/card-hole/card-hole.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardHoleComponent);
    return CardHoleComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abel/Abel/kids-math/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map