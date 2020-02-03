function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar class=\"mat-elevation-z3\"></app-navbar>\r\n\r\n<mat-progress-bar *ngIf=\"(loading$ | async)\" mode=\"indeterminate\"></mat-progress-bar>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/common-table-templates/common-table-templates.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/common-table-templates/common-table-templates.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCommonTableTemplatesCommonTableTemplatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- DEFINING DEFAULT ADMIN MODULE WIDE UI BLOCKER (BUSY) FOR PBL-NGRID -->\r\n<div *pblNgridBlockUiDef class=\"pbl-ngrid-ui-block\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<!-- DEFINING DEFAULT ADMIN MODULE WIDE UI BLOCKER (BUSY) FOR PBL-NGRID -->\r\n\r\n<!-- DEFINING DEFAULT NO DATA TEMPLATE -->\r\n<div *pblNgridNoDataRef class=\"pbl-ngrid-no-data\"><span>No Results</span></div>\r\n<!-- DEFINING DEFAULT NO DATA TEMPLATE -->\r\n\r\n<pbl-ngrid-drag-resize *pblNgridCellResizerRef=\"let ctx\" [context]=\"ctx\" [grabAreaWidth]=\"8\">\r\n  <span class=\"pbl-ngrid-column-resizer-handle\"></span>\r\n</pbl-ngrid-drag-resize>\r\n<span *pblNgridCellDraggerRef=\"let ctx\" [pblNgridColumnDrag]=\"ctx\" cdkDragRootElementClass=\"cdk-drag column-reorder-handle\" ></span>\r\n\r\n<!-- DEFINING DEFAULT ADMIN MODULE WIDE COLUMNS FOR PBL-NGRID -->\r\n<div *pblNgridCellDef=\"'*'; value as value;\">{{value}}</div>\r\n<div *pblNgridCellTypeDef=\"'visualBool'; value as value;\">{{ value ? '✅' : '🚫' }}</div>\r\n<div *pblNgridCellTypeDef=\"'date'; value as value;\">{{value | date: 'MMM dd, yyyy'}}</div>\r\n<div *pblNgridCellTypeDef=\"'number'; value as value;\">{{value | number: '1.0-2'}}</div>\r\n<!-- Set's the currency based on a predefined currency in ISO format, provided in the `type.data` property of the column -->\r\n<div *pblNgridCellTypeDef=\"'currency'; value as value; col as col;\">{{value | currency:col.type.data:'symbol':'1.0-2'}}</div>\r\n<div *pblNgridCellTypeDef=\"'datetime'; value as value;\">{{value | date: 'MMM dd, yyyy  HH:mm'}}</div>\r\n<div *pblNgridHeaderCellDef=\"'*'; col as col;\">{{col.label}}</div>\r\n<div *pblNgridFooterCellDef=\"'*'; col as col;\">{{col.label}}</div>\r\n\r\n\r\n<div *pblNgridHeaderCellTypeDef=\"'drag_and_drop_handle'\"></div>\r\n<div *pblNgridCellTypeDef=\"'drag_and_drop_handle'; let ctx\" [pblNgridRowDrag]=\"ctx\" style=\"cursor: move\">\r\n  <mat-icon pblDragHandle class=\"pbl-ngrid-row-drag-handle\">drag_handle</mat-icon>\r\n  <div class=\"pbl-ngrid-row-drag-placeholder\" *cdkDragPlaceholder></div>\r\n</div>\r\n\r\n<!-- START RATINGS -->\r\n<div *pblNgridCellTypeDef=\"'starRatings'; value as value\">\r\n  {{ value >= 1 ? '★' : '☆' }}\r\n  {{ value >= 2 ? '★' : '☆' }}\r\n  {{ value >= 3 ? '★' : '☆' }}\r\n  {{ value >= 4 ? '★' : '☆' }}\r\n  {{ value === 5 ? '★' : '☆' }}\r\n</div>\r\n\r\n<div *pblNgridCellTypeDef=\"'progressBar'; value as value; col as col\"\r\n     [ngStyle]=\"col.type.data.style(value)\" [style.width]=\"value + '%'\">\r\n  <div>{{ value }}%</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedConfirmationDialogConfirmationDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>{{ data.text }}</div>\r\n<div mat-dialog-actions align=\"end\">\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"true\" cdkFocusInitial>{{ data.buttonText }}</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropdown/dropdown.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropdown/dropdown.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-form-field *ngIf=\"items\">\n    <mat-select #matSelect [formControl]=\"select\" disableOptionCentering panelClass=\"ac-dropdown\"\n        (selectionChange)=\"selectionChange.emit($event.value)\">\n\n        <ng-content select=\"ac-dropdown-static-options\"></ng-content>\n        <mat-option *ngFor=\"let item of items\" [value]=\"item[bindValue]\"> {{ item[bindLabel] }} </mat-option>\n    </mat-select>\n</mat-form-field> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TODO-OPTIONAL: add resposivity -->\n<nav class=\"navbar-header\" [class.is-next-version]=\"isNextVersion\">\n    <a mat-button class=\"navbar-button\" routerLink=\"/\" aria-label=\"KWS UI\">\n        <!-- <img class=\"docs-angular-logo\" src=\"../../../assets/img/homepage/angular-white-transparent.svg\" alt=\"angular\"> -->\n        <span>KWS UI</span>\n    </a>\n    <a mat-button class=\"navbar-button\" \n        *ngFor=\"let key of sectionKeys\" \n        [routerLink]=\"key\">{{sections[key].name}}\n    </a>\n    <div class=\"flex-spacer\"></div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedToolbarToolbarLogoToolbarLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>toolbar-logo works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar> <ng-content></ng-content> </mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/audio-event/audio-event.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/audio-event/audio-event.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskResultsAudioEventsChartAudioEventAudioEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>audio-event works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/time-axis/time-axis.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/time-axis/time-axis.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskResultsAudioEventsChartTimeAxisTimeAxisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg:g #ticksel>\n    <svg:g *ngFor=\"let tick of ticks\" class=\"tick\" [attr.transform]=\"tickTransform(tick)\">\n        <title>{{ tickFormat(tick) }}</title>\n        <svg:text stroke-width=\"0.01\" [attr.text-anchor]=\"textAnchor\" [attr.transform]=\"textTransform\"\n            [style.font-size]=\"'12px'\">\n            {{ tickTrim(tickFormat(tick)) }}\n        </svg:text>\n    </svg:g>\n</svg:g>\n\n<svg:g *ngFor=\"let tick of ticks\" [attr.transform]=\"tickTransform(tick)\">\n    <svg:g *ngIf=\"showGridLines\" [attr.transform]=\"gridLineTransform()\">\n        <svg:line class=\"gridline-path gridline-path-vertical\" [attr.y1]=\"-gridLineHeight\" y2=\"0\" />\n    </svg:g>\n</svg:g>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-chart/kws-chart.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-chart/kws-chart.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskResultsKwsChartKwsChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <svg #svg></svg>\n    <!-- oncontextmenu=\"return false;\" -->\n    <div *ngIf=\"loading\" class=\"loader\">Loading</div>\n</div>\n<div style=\"display: none\">\n    {{ runChangeDetection }}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-table/kws-table.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-table/kws-table.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskResultsKwsTableKwsTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<pbl-ngrid id=\"kws-table\" \n    class=\"pbl-ngrid-cell-ellipsis pbl-ngrid-header-cell-ellipsis max-row-height-64 min-row-height-32\"\n    vScrollFixed=\"32\"\n    identityProp=\"id\"\n    matSort\n    blockUi\n    cellTooltip\n    matCheckboxSelection=\"selection\"\n    focusMode=\"cell\"\n    [dataSource]=\"dataSource\"\n    [columns]=\"columns\"\n    (cellClick)=\"onClickEvents($event)\" (rowClick)=\"onClickEvents($event)\"\n    style=\"height: 100%\">\n    <!-- columnReorder -->\n    <!--  -->\n    <!-- (cellClick)=\"$event.context && $event.context.startEdit()\" -->\n    <!-- persistState -->\n\n  <!-- <div *pblNgridCellDef=\"'sales'; row as user\">\n    <mat-icon>check</mat-icon>\n  </div> -->\n\n</pbl-ngrid>\n\n<!-- LOG CHANGE DETECTION -->\n<!-- <div style=\"display: none;\">\n    {{ runChangeDetection }}\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/task-results.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/task-results.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskResultsTaskResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div></div>\n<app-kws-table [taskId]=\"taskId\"></app-kws-table>\n<div></div>\n<app-kws-chart [taskId]=\"taskId\"></app-kws-chart >";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-submission/task-submission.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-submission/task-submission.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskSubmissionTaskSubmissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"task-form-card mat-elevation-z4\">\n    <mat-card-header>\n        <mat-card-title>New Task</mat-card-title>\n    </mat-card-header>\n\n    <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n\n        <div class=\"opacity-transition\" [style.opacity]=\"uploading ? 1 : 0\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"progress\"></mat-progress-bar>\n            <!-- [value]=\"progress$ | async\" -->\n        </div>\n\n        <div class=\"file-picker-field form-section\">\n            <div>\n                <button mat-raised-button appFilePicker type=\"button\" #vocabFile color=\"\" formControlName=\"vocabFile\"\n                    accept=\".voc,.lex\">\n                    Select Vocab File\n                </button>\n            </div>\n            <div>\n                {{ selectedVocabFile ? selectedVocabFile : '(no file selected)' }}\n            </div>\n        </div>\n        <div *ngIf=\"vocabFile.invalid && (vocabFile.dirty || vocabFile.touched)\" class=\"mat-caption error\">\n            File must be selected.\n        </div>\n\n        <!-- <mat-checkbox #testDatasetCheckbox>Test dataset</mat-checkbox> -->\n\n        <div class=\"file-picker-field form-section\">\n            <div>\n                <button mat-raised-button appFilePicker type=\"button\" #audioFiles color=\"\" formControlName=\"audioFiles\"\n                    accept=\".wav,.mp3\" multiple>\n                    Select Audio Files\n                </button>\n            </div>\n            <div>\n                <ng-container *ngIf=\"selectedAudioFiles; else noFilesSelectedMessage\">\n                    <ng-container *ngFor=\"let file of selectedAudioFiles\">\n                        {{ file.name }}, <br>\n                    </ng-container>\n                </ng-container>\n                <ng-template #noFilesSelectedMessage>\n                    (no files selected)\n                </ng-template>\n            </div>\n        </div>\n        <div *ngIf=\"audioFiles.invalid && (audioFiles.dirty || audioFiles.touched)\" class=\"mat-caption error\">\n            Files must be selected.\n        </div>\n\n        <mat-form-field class=\"form-section\" color=\"primary\">\n            <mat-label>Language</mat-label>\n            <mat-select required formControlName=\"language\">\n                <mat-option *ngFor=\"let lang of languages\" [value]=\"lang\">\n                    {{ lang }}\n                </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.controls['language'].invalid\">\n                Language is required\n            </mat-error>\n        </mat-form-field>\n\n        <div class=\"form-section full-width\" id=\"advanced-settings-panel\">\n            <mat-accordion>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Advanced Settings\n                        </mat-panel-title>\n                        <!-- <mat-panel-description>\n                                    Word Spotter Settings\n                                </mat-panel-description> -->\n                    </mat-expansion-panel-header>\n\n                    <div class=\"mat-body-1\" formGroupName=\"advanced\">\n                        <div class=\"advanced-settings-field\">\n                            <div> NumHypotheses =</div>\n                            <mat-form-field>\n                                <input matInput type=\"number\" formControlName=\"numHypotheses\">\n                                <!-- placeholder=\"Min Score\" -->\n                            </mat-form-field>\n                        </div>\n                        <div class=\"advanced-settings-field\">\n                            <div> PruneThreshold =</div>\n                            <mat-form-field>\n                                <input matInput type=\"number\" formControlName=\"pruneThreshold\">\n                                <!-- placeholder=\"Min Score\" -->\n                            </mat-form-field>\n                        </div>\n                        <div class=\"advanced-settings-field\">\n                            <div> SpotThreshold =</div>\n                            <mat-form-field>\n                                <input matInput type=\"number\" formControlName=\"spotThreshold\">\n                                <!-- placeholder=\"Min Score\" -->\n                            </mat-form-field>\n                        </div>\n                        <div class=\"advanced-settings-field\">\n                            <div> DispThreshold =</div>\n                            <mat-form-field>\n                                <input matInput type=\"number\" formControlName=\"dispThreshold\">\n                                <!-- placeholder=\"Min Score\" -->\n                            </mat-form-field>\n                        </div>\n\n                        <!-- NumHypotheses -->\n                        <!-- PruneThreshold -->\n                        <!-- SpotThreshold -->\n                        <!-- DispThreshold -->\n                        <!-- ScaleFactor -->\n                        <!-- FrameShiftInSamples -->\n                        <!-- FrameOffsetDueParametrization -->\n\n                    </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n\n        <!-- <div class=\"row\">\n                    <div class=\"col\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n                            <mat-error *ngIf=\"form.controls['firstName'].hasError('required')\">\n                                First name is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n                            <mat-error *ngIf=\"form.controls['lastName'].hasError('required')\">\n                                Last name is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                </div> -->\n\n        <div class=\"form-section full-width\">\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n            <button mat-raised-button class=\"ml-btn\" type=\"button\" (click)=\"reset()\">Reset</button>\n        </div>\n\n        <div class=\"form-section full-width\">\n            {{ form.value | json }}\n        </div>\n        <div class=\"form-section full-width\">\n            valid: {{ form.valid }}\n        </div>\n    </form>\n\n\n    <!-- <mat-card-actions> -->\n    <!-- </mat-card-actions> -->\n</mat-card>\n\n<!-- LOG CHANGE DETECTION -->\n<div style=\"display: none;\">\n    {{ runChangeDetection }}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-detail/task-detail.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-detail/task-detail.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTaskDetailTaskDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>task-detail works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-dialog/task-dialog.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-dialog/task-dialog.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTaskDialogTaskDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>task-dialog works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTasklistCtaBarTasklistCtaBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cta-bar\">\n    <button class=\"add\" mat-raised-button color=\"primary\" routerLink=\"/new-task\">\n        <mat-icon>add icon</mat-icon>\n        NEW TASK\n    </button>\n    <div class=\"flex-spacer\"></div>\n    <div class=\"filters\" *ngIf=\"filter\">\n        <button class=\"filter\" mat-button (click)=\"filterChange.emit('ALL')\" [class.active]=\"filter === 'ALL'\">\n            <mat-icon>assignment</mat-icon>\n            ALL\n        </button>\n        <button class=\"filter\" mat-button (click)=\"filterChange.emit('COMPLETED')\"\n            [class.active]=\"filter === 'COMPLETED'\">\n            <mat-icon>done</mat-icon>\n            COMPLETED\n        </button>\n        <button class=\"filter\" mat-button (click)=\"filterChange.emit('PENDING')\" [class.active]=\"filter === 'PENDING'\">\n            <mat-icon>hourglass_empty</mat-icon>\n            PENDING\n        </button>\n    </div>\n    <div class=\"cta-buttons\" *ngIf=\"showActionButtons\">\n        <button mat-button (click)=\"checkAll.emit()\">\n            <mat-icon>done_all</mat-icon>\n        </button>\n        <button mat-button (click)=\"uncheckAll.emit()\">\n            <mat-icon>filter_none</mat-icon>\n        </button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-item/tasklist-item.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-item/tasklist-item.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTasklistItemTasklistItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- [class.done]=\"item.checked\" -->\n\n<span class=\"info\">\n    <a class=\"task-title\" [routerLink]=\"['../task', item.id]\">{{ item.title }}</a>\n\n    <span class=\"kwc-count mat-caption\" *ngIf=\"item.isCompleted\">#kwc = {{ item.kwcCount }}</span>\n</span>\n\n\n<span class=\"controls\">\n    <button mat-icon-button>\n        <mat-icon class=\"edit-btn\" aria-hidden=\"false\" aria-label=\"edit\">edit</mat-icon>\n    </button>\n\n    <button mat-icon-button>\n        <mat-icon class=\"delete-btn\" aria-hidden=\"false\" aria-label=\"delete\">delete</mat-icon>\n    </button>\n\n</span>\n\n\n<!-- <mat-checkbox color=\"primary\" (click)=\"toggleItem.emit(item)\" [checked]=\"item.checked\"></mat-checkbox> -->\n\n\n\n<!-- <ac-checklist-favorite-button\n    [active]=\"item.favorite\"\n    (toggle)=\"toggleFavorite.emit(item)\"\n    ></ac-checklist-favorite-button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-list/tasklist-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-list/tasklist-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTasklistListTasklistListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>Tasks</header>\n\n<app-tasklist-cta-bar [filter]=\"filter$ | async\" [showActionButtons]=\"false\" (filterChange)=\"setFilter($event)\">\n</app-tasklist-cta-bar>\n\n<ng-container *ngIf=\"(items$ | async) as items\">\n    <ng-container *ngIf=\"items.length; else: noItems\">\n        <app-tasklist-item\n          *ngFor=\"let item of items; trackBy: trackById\"\n          [item]=\"item\"\n          (toggleItem)=\"toggleItem($event)\"\n        >\n        <!--  -->\n        <!-- (toggleFavorite)=\"toggleFavorite($event)\" -->\n        </app-tasklist-item>\n    </ng-container>\n    <ng-template #noItems>\n        <div class=\"no-items\">\n          <!-- <img src=\"assets/undraw_no_data.svg\" alt=\"No Data\" /> -->\n          <span>You have no tasks yet...</span>\n        </div>\n    </ng-template>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasklistTasklistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-container\">\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-progress-bar {\n  position: fixed;\n}\n\napp-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuYXBwLW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIiwibWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuYXBwLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/utils */
    "./src/app/shared/utils/index.ts");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/local-storage/local-storage.service */
    "./src/app/core/local-storage/local-storage.service.ts");
    /* harmony import */


    var browser_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! browser-detect */
    "./node_modules/browser-detect/dist/browser-detect.es5.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/kws-client/kws-client.service */
    "./src/app/core/kws-client/kws-client.service.ts");

    var AppComponent_1;
    var APP_STATE_STORAGE_KEY = 'state';

    var AppComponent = AppComponent_1 =
    /*#__PURE__*/
    function () {
      function AppComponent(kwsClient, router, storageService) {
        _classCallCheck(this, AppComponent);

        this.kwsClient = kwsClient;
        this.router = router;
        this.storageService = storageService; // items$: Observable<any>

        this.isProd = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production;
        this.navigation = [{
          link: 'about',
          label: 'anms.menu.about'
        }, {
          link: 'feature-list',
          label: 'anms.menu.features'
        }, {
          link: 'examples',
          label: 'anms.menu.examples'
        }];
        window.uuid = _shared_utils__WEBPACK_IMPORTED_MODULE_5__["uuid"];
        window.Faker = faker__WEBPACK_IMPORTED_MODULE_6__;
        faker__WEBPACK_IMPORTED_MODULE_6__["locale"] = 'cz';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storageService.testLocalStorage();
          var appState = JSON.parse(this.storageService.getItem(APP_STATE_STORAGE_KEY)); // TODO: check appState before passing

          this.kwsClient.init(appState);

          if (AppComponent_1.isIEorEdgeOrSafari()) {// disable animations
          }

          var navigationStart$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true));
          var navigationEnd$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(false));
          this.loading$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(navigationStart$, navigationEnd$);
        }
      }, {
        key: "beforeUnload",
        value: function beforeUnload($event) {// const appStateJson = JSON.stringify(this.kwsClient.getState());
          // this.storageService.setItem(APP_STATE_STORAGE_KEY, appStateJson);
        }
      }], [{
        key: "isIEorEdgeOrSafari",
        value: function isIEorEdgeOrSafari() {
          return ['ie', 'edge', 'safari'].includes(String(Object(browser_detect__WEBPACK_IMPORTED_MODULE_8__["default"])().name));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_10__["KwsClientService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppComponent.prototype, "beforeUnload", null);
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_10__["KwsClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _task_results_task_results_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task-results/task-results.module */
    "./src/app/task-results/task-results.module.ts");
    /* harmony import */


    var _task_submission_task_submission_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./task-submission/task-submission.module */
    "./src/app/task-submission/task-submission.module.ts");
    /* harmony import */


    var _custom_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./custom-material.module */
    "./src/app/custom-material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _tasklist_tasklist_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tasklist/tasklist.module */
    "./src/app/tasklist/tasklist.module.ts");
    /* harmony import */


    var _core_kws_api_kws_api_service_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./core/kws-api/kws-api.service.base */
    "./src/app/core/kws-api/kws-api.service.base.ts");
    /* harmony import */


    var _core_kws_api_mock_kws_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./core/kws-api/mock-kws-api.service */
    "./src/app/core/kws-api/mock-kws-api.service.ts"); // import { MATERIAL } from './material';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _tasklist_tasklist_module__WEBPACK_IMPORTED_MODULE_13__["TasklistModule"], _task_submission_task_submission_module__WEBPACK_IMPORTED_MODULE_9__["TaskSubmissionModule"], _task_results_task_results_module__WEBPACK_IMPORTED_MODULE_8__["TaskResultsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"], {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"]
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_10__["CustomMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
      providers: [{
        provide: _core_kws_api_kws_api_service_base__WEBPACK_IMPORTED_MODULE_14__["KwsApiServiceBase"],
        useClass: _core_kws_api_mock_kws_api_service__WEBPACK_IMPORTED_MODULE_15__["MockKwsApiService"]
      }, {
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
        useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["GestureConfig"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: APP_ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function () {
      return APP_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var APP_ROUTES = [{
      path: '',
      redirectTo: '/tasklist',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/tasklist'
    }];
    /***/
  },

  /***/
  "./src/app/core/audio/audio-context.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/audio/audio-context.service.ts ***!
    \*****************************************************/

  /*! exports provided: AudioContextService */

  /***/
  function srcAppCoreAudioAudioContextServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioContextService", function () {
      return AudioContextService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AudioContextService =
    /*#__PURE__*/
    function () {
      function AudioContextService() {
        _classCallCheck(this, AudioContextService);
      }

      _createClass(AudioContextService, [{
        key: "ctx",
        get: function get() {
          if (!this._ctx) {
            this._ctx = new AudioContext(); // instance after a user gesture
          }

          return this._ctx;
        }
      }]);

      return AudioContextService;
    }();

    AudioContextService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AudioContextService);
    /***/
  },

  /***/
  "./src/app/core/audio/audio-player.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/audio/audio-player.service.ts ***!
    \****************************************************/

  /*! exports provided: AudioPlayerService */

  /***/
  function srcAppCoreAudioAudioPlayerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function () {
      return AudioPlayerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _audio_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audio-context.service */
    "./src/app/core/audio/audio-context.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AudioPlayerService =
    /*#__PURE__*/
    function () {
      function AudioPlayerService(audioContextService) {
        _classCallCheck(this, AudioPlayerService);

        this.audioContextService = audioContextService; // private runningSources: Set<AudioBufferSourceNode> = null;

        this.latestSource = null;
        this.sampleRate = 0;
        this._ended = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ended$ = this._ended.asObservable();
      }

      _createClass(AudioPlayerService, [{
        key: "playBuffer",

        /**
           * Play audio
           * @param key filename
           * @param startSample time in seconds
           * @param endSample time in seconds
           *
           */
        value: function playBuffer(buffer, startSample, endSample) {
          /*
              "An AudioBufferSourceNode can only be played once; after each call to start(), you have to create a new node
               if you want to play the same sound again."
          */
          startSample = startSample || 0;
          endSample = endSample || buffer.length - 1;
          var source = this.ctx.createBufferSource();
          this.latestSource = source;
          source.connect(this.ctx.destination); // const sampleRate = this.ctx.sampleRate;
          // const startSamples = Math.floor(startSample * sampleRate);
          // const endSamples = Math.ceil(endSample * sampleRate);

          source.buffer = buffer;
          source.start(); // source.addEventListener('ended', event => this._ended.next(event)); // NO: user can add event listener himself if he needs it

          return source;
        }
      }, {
        key: "playArray",
        value: function playArray(buffer, sampleRate) {
          var newBuffer = this.ctx.createBuffer(1, buffer.length, sampleRate);
          newBuffer.copyToChannel(buffer, 0);
          var source = this.ctx.createBufferSource();
          this.latestSource = source;
          source.connect(this.ctx.destination);
          source.buffer = newBuffer;
          source.start();
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this.latestSource) {
            this.latestSource.stop();
            this.latestSource = null;
          }
        }
      }, {
        key: "ctx",
        get: function get() {
          return this.audioContextService.ctx;
        }
      }]);

      return AudioPlayerService;
    }();

    AudioPlayerService.ctorParameters = function () {
      return [{
        type: _audio_context_service__WEBPACK_IMPORTED_MODULE_2__["AudioContextService"]
      }];
    };

    AudioPlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_audio_context_service__WEBPACK_IMPORTED_MODULE_2__["AudioContextService"]])], AudioPlayerService);
    /***/
  },

  /***/
  "./src/app/core/audio/index.ts":
  /*!*************************************!*\
    !*** ./src/app/core/audio/index.ts ***!
    \*************************************/

  /*! exports provided: KwsAudioDataService, AudioPlayerService */

  /***/
  function srcAppCoreAudioIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _kws_audio_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./kws-audio-data.service */
    "./src/app/core/audio/kws-audio-data.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KwsAudioDataService", function () {
      return _kws_audio_data_service__WEBPACK_IMPORTED_MODULE_1__["KwsAudioDataService"];
    });
    /* harmony import */


    var _audio_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audio-player.service */
    "./src/app/core/audio/audio-player.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function () {
      return _audio_player_service__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerService"];
    });
    /***/

  },

  /***/
  "./src/app/core/audio/kws-audio-data.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/audio/kws-audio-data.service.ts ***!
    \******************************************************/

  /*! exports provided: KwsAudioDataService */

  /***/
  function srcAppCoreAudioKwsAudioDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsAudioDataService", function () {
      return KwsAudioDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _audio_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audio-player.service */
    "./src/app/core/audio/audio-player.service.ts");
    /* harmony import */


    var _audio_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./audio-context.service */
    "./src/app/core/audio/audio-context.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/audio/utils/index.ts");
    /* harmony import */


    var _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");
    /* harmony import */


    var _kws_api_kws_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../kws-api/kws-api.service */
    "./src/app/core/kws-api/kws-api.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts");
    /**
     *
     * TODO: optravit dokumentaci
     * X|  Načítá audio data podle potřeby
     *
     * X| Když jsou dostupné v "tasks-store", tak je načte odtud, jinak je získá od serveru
     *
     */


    var KwsAudioDataService =
    /*#__PURE__*/
    function () {
      function KwsAudioDataService(audioContextService, tasksStoreService, kwsApiService, audioPlayer, ngZone, logger) {
        var _this = this;

        _classCallCheck(this, KwsAudioDataService);

        this.audioContextService = audioContextService;
        this.tasksStoreService = tasksStoreService;
        this.kwsApiService = kwsApiService;
        this.audioPlayer = audioPlayer;
        this.ngZone = ngZone;
        this.logger = logger;
        this.taskFilesCache = new Map();
        this.sampleRate = 16000;
        this.data = new Map();
        this._readySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.ready$ = this._readySubject.asObservable();
        this.dataAvailable = false; // this.ctx = new AudioContext(); // instance after a user gesture
        // this.onended = () => {};

        window.readAudioFile = _utils__WEBPACK_IMPORTED_MODULE_5__["readAudioFile"];
        window.audioBufferSlice = _utils__WEBPACK_IMPORTED_MODULE_5__["audioBufferSlice"];
        this.tasksStoreService.taskAdded$.subscribe(function (task) {
          if (task.audioFiles) {
            _this.readAudioFiles(task.audioFiles);
          }
        });
      }

      _createClass(KwsAudioDataService, [{
        key: "putTaskFiles",
        value: function putTaskFiles(taskId, files) {
          this.taskFilesCache.set(taskId, files);
        }
      }, {
        key: "loadTaskData",
        value: function loadTaskData(taskId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var taskFiles;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.loadedTaskId === taskId)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    this.loadedTaskId = undefined; // check if task data files are stored in cache

                    taskFiles = this.taskFilesCache.get(taskId);

                    if (!taskFiles) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return this.readAudioFiles(taskFiles);

                  case 7:
                    // else try fetch audio data from server
                    // this.kwsApiService.
                    this.loadedTaskId = taskId;

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "playSlice",
        value: function playSlice(key, startTime, endTime) {
          var startSamples = Math.round(startTime * this.sampleRate * 0.0001);
          var endSamples = Math.round(endTime * this.sampleRate * 0.0001);
          var buffer;

          if (!this.dataAvailable) {
            buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["generateWhiteNoise"])(this.ctx, endSamples - startSamples);
          } else {
            buffer = this.data.get(key);

            if (buffer) {
              buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["audioBufferSlice"])(this.ctx, buffer, startSamples, endSamples);
            } else {
              buffer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["generateWhiteNoise"])(this.ctx, endSamples - startSamples);
            }
          }

          this.audioPlayer.playBuffer(buffer);
        }
      }, {
        key: "readAudioFiles",
        value: function readAudioFiles(audioFiles) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, audioBuffer;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this._readySubject.next(false);

                    this.data.clear(); // this.ngZone.runOutsideAngular(async () => {

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 5;
                    _iterator = audioFiles[Symbol.iterator]();

                  case 7:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context2.next = 22;
                      break;
                    }

                    file = _step.value;
                    _context2.prev = 9;
                    _context2.next = 12;
                    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["readAudioFile"])(this.ctx, file);

                  case 12:
                    audioBuffer = _context2.sent;
                    this.data.set(file.name, audioBuffer);
                    _context2.next = 19;
                    break;

                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](9);
                    this.logError("audio file read error: ".concat(file.name, ", ").concat(_context2.t0.message));

                  case 19:
                    _iteratorNormalCompletion = true;
                    _context2.next = 7;
                    break;

                  case 22:
                    _context2.next = 28;
                    break;

                  case 24:
                    _context2.prev = 24;
                    _context2.t1 = _context2["catch"](5);
                    _didIteratorError = true;
                    _iteratorError = _context2.t1;

                  case 28:
                    _context2.prev = 28;
                    _context2.prev = 29;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 31:
                    _context2.prev = 31;

                    if (!_didIteratorError) {
                      _context2.next = 34;
                      break;
                    }

                    throw _iteratorError;

                  case 34:
                    return _context2.finish(31);

                  case 35:
                    return _context2.finish(28);

                  case 36:
                    // })
                    setTimeout(function () {
                      _this2.dataAvailable = true;

                      _this2._readySubject.next(true);
                    }, 2000);

                  case 37:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 24, 28, 36], [9, 16], [29,, 31, 35]]);
          }));
        }
      }, {
        key: "logError",
        value: function logError(message) {
          this.logger.logError(message);
        }
      }, {
        key: "ctx",
        get: function get() {
          return this.audioContextService.ctx;
        }
      }, {
        key: "first",
        get: function get() {
          return this.data.values().next().value;
        }
      }, {
        key: "entries",
        get: function get() {
          return this.data.entries();
        }
      }, {
        key: "durations",
        get: function get() {
          return _toConsumableArray(this.data.values()).map(function (audioBuffer) {
            return audioBuffer.duration;
          });
        }
      }]);

      return KwsAudioDataService;
    }();

    KwsAudioDataService.ctorParameters = function () {
      return [{
        type: _audio_context_service__WEBPACK_IMPORTED_MODULE_3__["AudioContextService"]
      }, {
        type: _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__["KwsTasksStoreService"]
      }, {
        type: _kws_api_kws_api_service__WEBPACK_IMPORTED_MODULE_7__["KwsApiService"]
      }, {
        type: _audio_player_service__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
      }];
    };

    KwsAudioDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_audio_context_service__WEBPACK_IMPORTED_MODULE_3__["AudioContextService"], _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__["KwsTasksStoreService"], _kws_api_kws_api_service__WEBPACK_IMPORTED_MODULE_7__["KwsApiService"], _audio_player_service__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]])], KwsAudioDataService);
    /***/
  },

  /***/
  "./src/app/core/audio/utils/audio-buffer.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/audio/utils/audio-buffer.ts ***!
    \**************************************************/

  /*! exports provided: audioBufferSlice */

  /***/
  function srcAppCoreAudioUtilsAudioBufferTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "audioBufferSlice", function () {
      return audioBufferSlice;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * src: https://github.com/miguelmota/audiobuffer-slice/blob/master/audiobuffer-slice.js
     */


    function audioBufferSlice(ctx, buffer) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var end = arguments.length > 3 ? arguments[3] : undefined;
      var bufferLength = buffer.length;
      var channels = buffer.numberOfChannels;
      var rate = buffer.sampleRate;

      if (typeof end !== 'number') {
        end = bufferLength;
      } // milliseconds to seconds
      // start = start / 1000;
      // end = end / 1000;


      if (start < 0) {
        throw new RangeError('begin time must be greater than 0');
      }

      if (end > bufferLength) {
        throw new RangeError('end time must be less than or equal to ' + bufferLength);
      }

      var startOffset = start; // rate * start;

      var endOffset = end; // rate * end;

      var frameCount = endOffset - startOffset;
      var newBuffer = ctx.createBuffer(channels, endOffset - startOffset, rate);
      var anotherArray = new Float32Array(frameCount);
      var offset = 0;

      for (var channel = 0; channel < channels; channel++) {
        buffer.copyFromChannel(anotherArray, channel, startOffset);
        newBuffer.copyToChannel(anotherArray, channel, offset);
      }

      return newBuffer;
    }
    /***/

  },

  /***/
  "./src/app/core/audio/utils/audio-file.ts":
  /*!************************************************!*\
    !*** ./src/app/core/audio/utils/audio-file.ts ***!
    \************************************************/

  /*! exports provided: readAudioFile */

  /***/
  function srcAppCoreAudioUtilsAudioFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readAudioFile", function () {
      return readAudioFile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function readAudioFile(ctx, file) {
      var reader = new FileReader();
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          ctx.decodeAudioData(reader.result, function (audioBuffer) {
            resolve(audioBuffer);
          }, function (err) {
            reject(err);
          });
        };

        reader.onerror = function () {
          reject(reader.error);
        };

        reader.readAsArrayBuffer(file);
      }); // const buffer = await readFileAsArrayBuffer(file);
      // const audioBuffer = await ctx.decodeAudioData(buffer);
      // return audioBuffer;
    }
    /***/

  },

  /***/
  "./src/app/core/audio/utils/generate-noise.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/audio/utils/generate-noise.ts ***!
    \****************************************************/

  /*! exports provided: generateWhiteNoise */

  /***/
  function srcAppCoreAudioUtilsGenerateNoiseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateWhiteNoise", function () {
      return generateWhiteNoise;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // https://noisehack.com/generate-noise-web-audio-api/


    function generateWhiteNoise(ctx, duration) {
      // const bufferSize = Math.round(duration * ctx.sampleRate);
      var bufferSize = duration;
      var noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      var output = noiseBuffer.getChannelData(0);

      for (var i = 0; i < bufferSize; i++) {
        output[i] = 0.01 * (Math.random() * 2 - 1);
      }

      return noiseBuffer;
    }
    /***/

  },

  /***/
  "./src/app/core/audio/utils/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/audio/utils/index.ts ***!
    \*******************************************/

  /*! exports provided: audioBufferSlice, readAudioFile, generateWhiteNoise */

  /***/
  function srcAppCoreAudioUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audio_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audio-buffer */
    "./src/app/core/audio/utils/audio-buffer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "audioBufferSlice", function () {
      return _audio_buffer__WEBPACK_IMPORTED_MODULE_1__["audioBufferSlice"];
    });
    /* harmony import */


    var _audio_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audio-file */
    "./src/app/core/audio/utils/audio-file.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "readAudioFile", function () {
      return _audio_file__WEBPACK_IMPORTED_MODULE_2__["readAudioFile"];
    });
    /* harmony import */


    var _generate_noise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./generate-noise */
    "./src/app/core/audio/utils/generate-noise.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "generateWhiteNoise", function () {
      return _generate_noise__WEBPACK_IMPORTED_MODULE_3__["generateWhiteNoise"];
    });
    /***/

  },

  /***/
  "./src/app/core/kws-api/kws-api.service.base.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/kws-api/kws-api.service.base.ts ***!
    \******************************************************/

  /*! exports provided: KwsApiServiceBase */

  /***/
  function srcAppCoreKwsApiKwsApiServiceBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsApiServiceBase", function () {
      return KwsApiServiceBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var KwsApiServiceBase =
    /*#__PURE__*/
    function () {
      function KwsApiServiceBase(logger) {
        _classCallCheck(this, KwsApiServiceBase);

        this.logger = logger;
      }

      _createClass(KwsApiServiceBase, [{
        key: "log",
        value: function log(message) {
          // console.log(`KwsTaskService: ${message}`);
          this.logger.log("KwsTaskService: ".concat(message));
        }
      }, {
        key: "logError",
        value: function logError(message) {
          this.logger.logError("KwsTaskService: ".concat(message));
        }
      }]);

      return KwsApiServiceBase;
    }();
    /***/

  },

  /***/
  "./src/app/core/kws-api/kws-api.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/kws-api/kws-api.service.ts ***!
    \*************************************************/

  /*! exports provided: KwsApiService */

  /***/
  function srcAppCoreKwsApiKwsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsApiService", function () {
      return KwsApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kws_api_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kws-api.service.base */
    "./src/app/core/kws-api/kws-api.service.base.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models */
    "./src/app/core/models/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../utils */
    "./src/app/core/utils/index.ts");
    /* harmony import */


    var _kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../kws-client/kws-client-config.service */
    "./src/app/core/kws-client/kws-client-config.service.ts");
    /* harmony import */


    var _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../kws-client/kws-client-utils.service */
    "./src/app/core/kws-client/kws-client-utils.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts");

    var KwsApiService =
    /*#__PURE__*/
    function (_kws_api_service_base) {
      _inherits(KwsApiService, _kws_api_service_base);

      function KwsApiService(config, utils, http, logger) {
        var _this3;

        _classCallCheck(this, KwsApiService);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(KwsApiService).call(this, logger));
        _this3.config = config;
        _this3.utils = utils;
        _this3.http = http;
        _this3.logger = logger;
        return _this3;
      } // TODO: fix errors


      _createClass(KwsApiService, [{
        key: "postTask",
        value: function postTask(task) {
          if (!task.audioFiles || !task.vocabFile) {
            var message = 'postTask failed: task does not have vocabFile or audioFiles';
            this.logError(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
              type: _models__WEBPACK_IMPORTED_MODULE_3__["UploadEventType"].Failure,
              message: message
            });
          } // const custom = task.dataset === 'custom';
          // const configFile = createCfgxFile(settings, custom);


          var vocabKey = this.utils.resolveVocabKey(task.vocabFile.name);
          var fd = new FormData();
          fd.append('language', task.language); // fd.append('dataset', task.dataset);
          // fd.append('email', task.email);
          // fd.append('configfile', configFile);

          fd.append(vocabKey, task.vocabFile, task.vocabFile.name);

          if (task.useStoredDataset) {
            task.audioFiles.forEach(function (file) {
              return fd.append('audiofile', file);
            });
          }

          window.formData = fd; // const postTaskEvents = window['postTaskEvents'] = []; // DEBUG

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"](); // headers.append('Authorization', 'Basic ' + btoa('tester:wordspottingdemo2019'));

          return this.http.post(this.config.newTaskEndpoint, fd, {
            reportProgress: true,
            observe: 'events',
            responseType: 'text',
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.mapToUploadEvent), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('postTask')));
        }
      }, {
        key: "getTaskResults",
        value: function getTaskResults(taskId) {
          return this.http.get(this.config.taskResultsEndpoint, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return {
              candidates: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseSpotFile"])(data)
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getTastResults')));
        }
      }, {
        key: "mapToUploadEvent",
        value: function mapToUploadEvent(event) {
          // if (event.type !== HttpEventType.UploadProgress) postTaskEvents.push(event); // DEBUG
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress:
              var percent = event.total ? event.loaded / event.total : 0;
              return {
                type: _models__WEBPACK_IMPORTED_MODULE_3__["UploadEventType"].Progress,
                percentDone: percent
              };

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
              return {
                type: _models__WEBPACK_IMPORTED_MODULE_3__["UploadEventType"].Response,
                body: event.body
              };

            default:
              return {
                type: _models__WEBPACK_IMPORTED_MODULE_3__["UploadEventType"].Unknown
              };
          }
        }
        /**
         * Handle Http operation that failed.
         * @param operation - name of the operation that failed
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this4 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          return function (err) {
            // in a real world app, we may send the server to some remote logging infrastructure
            // instead of just logging it to the console
            var errorMessage;

            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              errorMessage = "An error occurred: ".concat(err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              errorMessage = "Backend returned code ".concat(err.status, ", body was: ").concat(err.error);
            }

            _this4.logError("".concat(operation, " failed: ").concat(errorMessage));

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
          };
        }
      }]);

      return KwsApiService;
    }(_kws_api_service_base__WEBPACK_IMPORTED_MODULE_2__["KwsApiServiceBase"]);

    KwsApiService.ctorParameters = function () {
      return [{
        type: _kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__["KwsClientConfigService"]
      }, {
        type: _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_9__["KwsClientUtilsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
      }];
    };

    KwsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__["KwsClientConfigService"], _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_9__["KwsClientUtilsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]])], KwsApiService);
    /***/
  },

  /***/
  "./src/app/core/kws-api/mock-kws-api.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/kws-api/mock-kws-api.service.ts ***!
    \******************************************************/

  /*! exports provided: KWS_MOCK_CANDIDATES_STORAGE_KEY_TOKEN, MockKwsApiService */

  /***/
  function srcAppCoreKwsApiMockKwsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KWS_MOCK_CANDIDATES_STORAGE_KEY_TOKEN", function () {
      return KWS_MOCK_CANDIDATES_STORAGE_KEY_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockKwsApiService", function () {
      return MockKwsApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _kws_api_service_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kws-api.service.base */
    "./src/app/core/kws-api/kws-api.service.base.ts");
    /* harmony import */


    var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../audio */
    "./src/app/core/audio/index.ts");
    /* harmony import */


    var _kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../kws-client/kws-client-config.service */
    "./src/app/core/kws-client/kws-client-config.service.ts");
    /* harmony import */


    var _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../kws-client/kws-client-utils.service */
    "./src/app/core/kws-client/kws-client-utils.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models */
    "./src/app/core/models/index.ts");
    /* harmony import */


    var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/utils */
    "./src/app/shared/utils/index.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../utils */
    "./src/app/core/utils/index.ts");
    /*
     TODO:
    
         []  get from vocabs, languages, datasetNames from config
         []  message service (errors, logs)
    
         []  use Injection for passing the storage key
    
    */


    var KWS_MOCK_CANDIDATES_STORAGE_KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('kws-mock-candidates-storage-key');

    var MockKwsApiService =
    /*#__PURE__*/
    function (_kws_api_service_base2) {
      _inherits(MockKwsApiService, _kws_api_service_base2);

      function MockKwsApiService(audioDataService, // private injector: Injector,
      config, utils, logger) {
        var _this5;

        _classCallCheck(this, MockKwsApiService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MockKwsApiService).call(this, logger));
        _this5.audioDataService = audioDataService;
        _this5.config = config;
        _this5.utils = utils;
        _this5.logger = logger;
        _this5.mockCandidatesStorageKey = 'kws-mock-candidates';
        _this5.vocabFile = null;
        _this5.audioFiles = null;
        return _this5;
      }

      _createClass(MockKwsApiService, [{
        key: "postTask",
        value: function postTask(task) {
          if (!task.audioFiles || !task.vocabFile) {
            var message = 'postTask failed: task does not have vocabFile or audioFiles';
            this.logError(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              type: _models__WEBPACK_IMPORTED_MODULE_9__["UploadEventType"].Failure,
              message: message
            });
          }

          var vocabKey = this.utils.resolveVocabKey(task.vocabFile.name);
          this.vocabFile = task.vocabFile;
          this.audioFiles = task.audioFiles;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(100, 100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return {
              type: _models__WEBPACK_IMPORTED_MODULE_9__["UploadEventType"].Progress,
              percentDone: value / 10
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["endWith"])({
            type: _models__WEBPACK_IMPORTED_MODULE_9__["UploadEventType"].Response,
            body: null
          }));
        }
      }, {
        key: "getTaskResults",
        value: function getTaskResults(taskId) {
          var _this6 = this;

          if (this.vocabFile) {
            if (this.utils.resolveVocabKey(this.vocabFile.name) !== 'vocfile') {
              var err = new Error('only vocab of type ".voc" is accepted in test mode');
              console.error(err.message);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.vocabFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (file) {
              return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_10__["readVocabFile"])(file);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (vocab) {
              return _this6.audioDataService.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (r) {
                console.log('audioPlayer.ready$: ', r);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(vocab));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (vocab) {
              var mockCandidates = [];

              var vocabWords = _toConsumableArray(vocab.words.keys());

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _this6.audioDataService.entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _step2$value = _slicedToArray(_step2.value, 2),
                      filename = _step2$value[0],
                      audioBuffer = _step2$value[1];

                  mockCandidates.push.apply(mockCandidates, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["generateMockKeywordCandidates"])(vocabWords, filename, audioBuffer.duration)));
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              for (var i = 0; i < mockCandidates.length; i++) {
                mockCandidates[i].id = i;
              } // localStorage.setItem(this.mockCandidatesStorageKey, JSON.stringify(mockCandidates));


              return {
                candidates: mockCandidates
              };
            }));
          } else {
            var candidatesJson = localStorage.getItem(this.mockCandidatesStorageKey);

            if (candidatesJson !== null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                candidates: JSON.parse(candidatesJson)
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              candidates: []
            });
          }
        }
      }]);

      return MockKwsApiService;
    }(_kws_api_service_base__WEBPACK_IMPORTED_MODULE_4__["KwsApiServiceBase"]);

    MockKwsApiService.ctorParameters = function () {
      return [{
        type: _audio__WEBPACK_IMPORTED_MODULE_5__["KwsAudioDataService"]
      }, {
        type: _kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_6__["KwsClientConfigService"]
      }, {
        type: _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_7__["KwsClientUtilsService"]
      }, {
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
      }];
    };

    MockKwsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_audio__WEBPACK_IMPORTED_MODULE_5__["KwsAudioDataService"], _kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_6__["KwsClientConfigService"], _kws_client_kws_client_utils_service__WEBPACK_IMPORTED_MODULE_7__["KwsClientUtilsService"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]])], MockKwsApiService);
    /***/
  },

  /***/
  "./src/app/core/kws-client/kws-client-config.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/kws-client/kws-client-config.service.ts ***!
    \**************************************************************/

  /*! exports provided: KwsClientConfigService */

  /***/
  function srcAppCoreKwsClientKwsClientConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsClientConfigService", function () {
      return KwsClientConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * TODO: implem
     *
     */


    var KwsClientConfigService =
    /*#__PURE__*/
    function () {
      function KwsClientConfigService() {
        _classCallCheck(this, KwsClientConfigService);

        // audioFile: File | null = null;
        this._acceptedVocabs = [{
          name: 'vocfile',
          fileExt: 'voc'
        }, {
          name: 'lexfile',
          fileExt: 'lex'
        }];
      }

      _createClass(KwsClientConfigService, [{
        key: "init",
        // TODO: implem config factory -> APP_INITIALIZER
        value: function init() {}
      }, {
        key: "taskResultsEndpoint",
        get: function get() {
          return '';
        }
      }, {
        key: "newTaskEndpoint",
        get: function get() {
          return '';
        }
      }, {
        key: "acceptedVocabs",
        get: function get() {
          return this._acceptedVocabs;
        }
      }, {
        key: "languages",
        get: function get() {
          return ['cz', 'sk', 'pl', 'hr'];
        }
      }, {
        key: "datasetNames",
        get: function get() {
          return ['custom', 'call', 'interview', 'stream'];
        }
      }, {
        key: "defaultWordSpotterSettings",
        get: function get() {
          return {
            numHypotheses: 5,
            pruneThreshold: 60,
            spotThreshold: 20,
            dispThreshold: 20,
            scaleFactor: 200,
            frameShiftInSamples: 200,
            frameOffsetDueParametrization: 0
          };
        }
      }]);

      return KwsClientConfigService;
    }();

    KwsClientConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], KwsClientConfigService);
    /***/
  },

  /***/
  "./src/app/core/kws-client/kws-client-utils.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/kws-client/kws-client-utils.service.ts ***!
    \*************************************************************/

  /*! exports provided: KwsClientUtilsService */

  /***/
  function srcAppCoreKwsClientKwsClientUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsClientUtilsService", function () {
      return KwsClientUtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kws-client-config.service */
    "./src/app/core/kws-client/kws-client-config.service.ts");

    var KwsClientUtilsService =
    /*#__PURE__*/
    function () {
      function KwsClientUtilsService(config) {
        _classCallCheck(this, KwsClientUtilsService);

        this.config = config;
      }
      /**
       *  Returns appropriate vocab key for a given vocab filename
       */


      _createClass(KwsClientUtilsService, [{
        key: "resolveVocabKey",
        value: function resolveVocabKey(filename) {
          // find out vocab type
          var fileExt = filename.split('.').pop();
          var vocab = this.config.acceptedVocabs.find(function (v) {
            return v.fileExt === fileExt;
          });

          if (vocab) {
            return vocab.name;
          }

          throw new Error('Invalid vocab file extension');
        }
      }]);

      return KwsClientUtilsService;
    }();

    KwsClientUtilsService.ctorParameters = function () {
      return [{
        type: _kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__["KwsClientConfigService"]
      }];
    };

    KwsClientUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__["KwsClientConfigService"]])], KwsClientUtilsService);
    /***/
  },

  /***/
  "./src/app/core/kws-client/kws-client.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/kws-client/kws-client.service.ts ***!
    \*******************************************************/

  /*! exports provided: KwsClientService */

  /***/
  function srcAppCoreKwsClientKwsClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsClientService", function () {
      return KwsClientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kws-client-config.service */
    "./src/app/core/kws-client/kws-client-config.service.ts");
    /* harmony import */


    var _kws_client_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kws-client-utils.service */
    "./src/app/core/kws-client/kws-client-utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data */
    "./src/app/data/index.ts");
    /* harmony import */


    var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/utils */
    "./src/app/shared/utils/index.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../utils */
    "./src/app/core/utils/index.ts");
    /* harmony import */


    var _time_time_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../time/time.service */
    "./src/app/core/time/time.service.ts");
    /* harmony import */


    var _audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../audio */
    "./src/app/core/audio/index.ts");
    /* harmony import */


    var _kws_api_kws_api_service_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../kws-api/kws-api.service.base */
    "./src/app/core/kws-api/kws-api.service.base.ts");
    /* harmony import */


    var _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts");

    var KwsClientService =
    /*#__PURE__*/
    function () {
      function KwsClientService(apiService, // private kwsLocalStorage: KwsClientLocalStorageService,
      audioData, tasksStore, config, utils, logger, router, time) {
        _classCallCheck(this, KwsClientService);

        this.apiService = apiService;
        this.audioData = audioData;
        this.tasksStore = tasksStore;
        this.config = config;
        this.utils = utils;
        this.logger = logger;
        this.router = router;
        this.time = time;
        window.kwsClient = this;
        window.audioData = audioData;
      }

      _createClass(KwsClientService, [{
        key: "init",
        // TODO
        value: function init(state) {
          var _this7 = this;

          this.log('initializing'); // this.localStorageService.getItem('')

          var averageDuration = 360; // 3600; // 1h in seconds
          // this.tasksStore.init()

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            var _loop = function _loop() {
              var task = _step3.value;
              var keywords = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["getFakeKeywords"])(100);
              var filenames = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["getFakeAudioFilenames"])(10);
              var durations = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["getFakeAudioDurations"])(10, averageDuration, 0.5);
              var audioFiles = filenames.map(function (name, i) {
                return {
                  name: name,
                  duration: durations[i]
                };
              });
              task.results = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["generateMockKwsTaskResults"])(keywords, audioFiles);

              _this7.tasksStore.addTask(task);
            };

            for (var _iterator3 = _data__WEBPACK_IMPORTED_MODULE_5__["MOCK_KWS_TASKS"][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }, {
        key: "submitTask",
        value: function submitTask(task) {
          this.log('submitting new task');
          var submissionTime = this.time.currentTime;
          task = Object.assign({}, task, {
            submissionTime: submissionTime
          });
          task.name = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["coerceKwsTaskName"])(task.name, this.time.getTimestamp());
          var taskId = this.tasksStore.addTask(task);
          this._latestTaskId = taskId;
          this.audioData.putTaskFiles(taskId, task.audioFiles);

          this._awaitTaskCompletion(taskId);

          return this.apiService.postTask(task);
        }
      }, {
        key: "fetchTaskResults",
        value: function fetchTaskResults(taskId) {}
      }, {
        key: "fetchAllTasks",
        value: function fetchAllTasks() {}
      }, {
        key: "_awaitTaskCompletion",
        value: function _awaitTaskCompletion(taskId) {
          var _this8 = this;

          // TODO: read
          //  https://www.quora.com/What-does-setTimeout-with-a-0ms-delay-do-Is-this-some-trick-to-spawn-a-new-thread-but-why
          this.log('starting wait on task completion');
          /*
              TODO: implem waiting queue (if many task pending at once)
            */

          setTimeout(function () {
            _this8.apiService.getTaskResults(taskId).subscribe(function (results) {
              _this8.log('receiving results from KwsApiService');

              _this8.tasksStore.assignTaskResults(taskId, results);

              _this8._latestTaskId = taskId;

              _this8.router.navigate(["/".concat(taskId, "/results")]);
            });
          }, 0);
        } // beforeUnload() {
        //     const stateJson = JSON.stringify(this.tasksStore.tasks);
        //     this.storageService.setItem('', stateJson);
        // }

      }, {
        key: "getState",
        value: function getState() {
          return this.tasksStore.tasks;
        } // TODO: remove these 2

      }, {
        key: "loadState",
        value: function loadState() {// = this.localStorageService.getKwsTasks();
          // this.tasksStoreService.init()
        }
      }, {
        key: "saveState",
        value: function saveState() {// this.localStorageService.
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log("KwsClientService: ".concat(message));
        }
      }, {
        key: "latestTaskId",
        get: function get() {
          return this._latestTaskId;
        }
      }]);

      return KwsClientService;
    }();

    KwsClientService.ctorParameters = function () {
      return [{
        type: _kws_api_kws_api_service_base__WEBPACK_IMPORTED_MODULE_10__["KwsApiServiceBase"]
      }, {
        type: _audio__WEBPACK_IMPORTED_MODULE_9__["KwsAudioDataService"]
      }, {
        type: _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_11__["KwsTasksStoreService"]
      }, {
        type: _kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__["KwsClientConfigService"]
      }, {
        type: _kws_client_utils_service__WEBPACK_IMPORTED_MODULE_3__["KwsClientUtilsService"]
      }, {
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _time_time_service__WEBPACK_IMPORTED_MODULE_8__["TimeService"]
      }];
    };

    KwsClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_kws_api_kws_api_service_base__WEBPACK_IMPORTED_MODULE_10__["KwsApiServiceBase"], _audio__WEBPACK_IMPORTED_MODULE_9__["KwsAudioDataService"], _kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_11__["KwsTasksStoreService"], _kws_client_config_service__WEBPACK_IMPORTED_MODULE_2__["KwsClientConfigService"], _kws_client_utils_service__WEBPACK_IMPORTED_MODULE_3__["KwsClientUtilsService"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _time_time_service__WEBPACK_IMPORTED_MODULE_8__["TimeService"]])], KwsClientService);
    /***/
  },

  /***/
  "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/kws-tasks-store/kws-tasks-store.service.ts ***!
    \*****************************************************************/

  /*! exports provided: KwsTasksStoreService */

  /***/
  function srcAppCoreKwsTasksStoreKwsTasksStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsTasksStoreService", function () {
      return KwsTasksStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/utils */
    "./src/app/shared/utils/index.ts");
    /* harmony import */


    var _time_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../time/time.service */
    "./src/app/core/time/time.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts");
    /*
        STORE
            submitted tasks
            results
    
    */


    var KwsTasksStoreService =
    /*#__PURE__*/
    function () {
      function KwsTasksStoreService(timeService, logger) {
        _classCallCheck(this, KwsTasksStoreService);

        this.timeService = timeService;
        this.logger = logger; // TODO: make tasks a hashmap for faster access using uuid
        // TODO: show observers  (subject.observers)

        this._tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._taskCompletedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._taskAddedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._taskUpdatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._taskRemovedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._taskSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tasks$ = this._tasksSubject.asObservable();
        this.taskCompleted$ = this._taskCompletedSubject.asObservable();
        this.taskAdded$ = this._taskAddedSubject.asObservable();
        this.taskUpdated$ = this._taskUpdatedSubject.asObservable();
        this.taskRemoved$ = this._taskRemovedSubject.asObservable();
        this.taskSelected$ = this._taskSelectedSubject.asObservable();
        this.completedTasks$ = this.tasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tasks) {
          return tasks.filter(function (task) {
            return task.isCompleted;
          });
        }));
        window.kwsTasksStore = this;
      }

      _createClass(KwsTasksStoreService, [{
        key: "init",
        value: function init(tasks) {
          this.log('initialization');

          this._tasksSubject.next(tasks);
        } // getTasks(): KwsTaskData[] {
        //     return this._tasksSubject.getValue();
        // }

      }, {
        key: "_setTasks",
        value: function _setTasks(tasks) {
          this._tasksSubject.next(tasks);
        }
      }, {
        key: "addTask",
        value: function addTask(task) {
          this.log("adding task: ".concat(task.name, " (").concat(task.id, ")"));
          var taskId = this.getNewId();

          this._setTasks([].concat(_toConsumableArray(this.tasks), [Object.assign({}, task, {
            id: taskId
          })]));

          this._taskAddedSubject.next(task);

          return taskId;
        }
      }, {
        key: "updateTask",
        value: function updateTask(task) {
          this.log("updating task (".concat(task.id, ")"));
          var tasks = this.tasks;
          var index = tasks.findIndex(function (_task) {
            return _task.id === task.id;
          });

          if (index !== -1) {
            this.tasks[index] = task;

            this._setTasks(_toConsumableArray(tasks));

            return true;
          }

          return false;
        }
      }, {
        key: "getTask",
        value: function getTask(taskId) {
          this.log("getting task by id (".concat(taskId, ")"));
          return this.tasks.find(function (task) {
            return task.id === taskId;
          });
        }
      }, {
        key: "getTaskResults",
        value: function getTaskResults(taskId) {
          var task = this.getTask(taskId);
          return task && task.results;
        }
      }, {
        key: "updateTaskResults",
        value: function updateTaskResults(taskId, results) {
          this.log("updating task (".concat(taskId, ") results"));
          var task = this.getTask(taskId);

          if (task) {
            this.updateTask(Object.assign({}, task, {
              results: results,
              completionTime: this.timeService.currentTime
            }));
            return true;
          }

          return false;
        }
      }, {
        key: "assignTaskResults",
        value: function assignTaskResults(taskId, results) {
          // TODO: assign completion time using KwsClientUtils
          return this.updateTaskResults(taskId, results);
        }
        /*
        *   TODO: set results on completion
        */

      }, {
        key: "setCompleted",
        value: function setCompleted(taskId, isCompleted, completionTime) {
          this.log("setting task (".concat(taskId, ") completion"));
          var task = this.tasks.find(function (_task) {
            return _task.id === taskId;
          });

          if (task) {
            // we need to make a new copy of tasks array, and the task as well
            var index = this.tasks.indexOf(task);
            this.tasks[index] = Object.assign({}, task, {
              isCompleted: isCompleted,
              completionTime: completionTime
            });

            this._setTasks(_toConsumableArray(this.tasks));
          }
        }
      }, {
        key: "removeTask",
        value: function removeTask(taskId) {
          this.log("removing task (".concat(taskId, ")"));
          var tasks = this.tasks;
          var index = tasks.findIndex(function (_task) {
            return _task.id === taskId;
          });

          if (index !== -1) {
            tasks.splice(index, 1);

            this._setTasks(_toConsumableArray(tasks));

            return true;
          }

          return false;
        }
      }, {
        key: "selectTask",
        value: function selectTask(taskId) {
          this.log("selecting task (".concat(taskId, ")"));
          var selectedTask = this.tasks.find(function (task) {
            return task.id === taskId;
          });

          if (selectedTask) {
            this._taskSelectedSubject.next(selectedTask);

            return true;
          }

          return false;
        }
      }, {
        key: "taskExists",
        value: function taskExists(taskId) {
          this.log("checking if task (".concat(taskId, ") exists"));
          return this.tasks.some(function (task) {
            return task.id === taskId;
          });
        }
      }, {
        key: "getNewId",
        value: function getNewId() {
          return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__["uuid"])();
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log("KwsTasksStoreService: ".concat(message));
        }
      }, {
        key: "tasks",
        get: function get() {
          return this._tasksSubject.getValue();
        }
      }]);

      return KwsTasksStoreService;
    }();

    KwsTasksStoreService.ctorParameters = function () {
      return [{
        type: _time_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]
      }, {
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
      }];
    };

    KwsTasksStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_time_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], KwsTasksStoreService); // ___________________________________________________________________________
    // interface StateObject {
    //     [prop: string]: any;
    // }
    // export interface StateEntry {
    //     key: string;
    //     payload: any;
    // }
    // @Injectable()
    // export class AppStateService {
    //     private stateSubject = new Subject();
    //     private initialState: StateObject = {
    //         topic: 'simple state management with pure RxJS'
    //     };
    //     state$ = this.stateSubject.asObservable().pipe(
    //         scan((acc: StateObject, newVal: StateObject) => {
    //             // create a new object
    //             return { ...acc, ...newVal };
    //         }, this.initialState),
    //         startWith(this.initialState),
    //         shareReplay(1)
    //     );
    //     dispatch(obj: StateEntry) {
    //         this.stateSubject.next({
    //             [obj.key]: obj.payload
    //         });
    //     }
    // }

    /***/
  },

  /***/
  "./src/app/core/local-storage/local-storage.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/local-storage/local-storage.service.ts ***!
    \*************************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppCoreLocalStorageLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/core/logger/logger.service.ts"); // taken from: angular-ngrx-material-starter\src\app\core


    var APP_PREFIX = 'KWS-';

    var LocalStorageService =
    /*#__PURE__*/
    function () {
      function LocalStorageService(logger) {
        _classCallCheck(this, LocalStorageService);

        this.logger = logger;
      }

      _createClass(LocalStorageService, [{
        key: "setItem",
        value: function setItem(key, value) {
          localStorage.setItem("".concat(APP_PREFIX).concat(key), JSON.stringify(value));
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          return JSON.parse(localStorage.getItem("".concat(APP_PREFIX).concat(key)));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          localStorage.removeItem("".concat(APP_PREFIX).concat(key));
        }
        /** Tests that localStorage exists, can be written to, and read from. */

      }, {
        key: "testLocalStorage",
        value: function testLocalStorage() {
          var testValue = 'testValue';
          var testKey = 'testKey';
          var retrievedValue;
          var errorMessage = 'localStorage did not return expected value';
          this.setItem(testKey, testValue);
          retrievedValue = this.getItem(testKey);
          this.removeItem(testKey);

          if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
          }
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log(message);
        }
      }], [{
        key: "loadInitialState",
        value: function loadInitialState() {
          return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
              var stateKeys = storageKey.replace(APP_PREFIX, '').toLowerCase().split('.').map(function (key) {
                return key.split('-').map(function (token, index) {
                  return index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1);
                }).join('');
              });
              var currentStateRef = state;
              stateKeys.forEach(function (key, index) {
                if (index === stateKeys.length - 1) {
                  currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
                  return;
                }

                currentStateRef[key] = currentStateRef[key] || {};
                currentStateRef = currentStateRef[key];
              });
            }

            return state;
          }, {});
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ctorParameters = function () {
      return [{
        type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
      }];
    };

    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], LocalStorageService);
    /***/
  },

  /***/
  "./src/app/core/logger/logger.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/logger/logger.service.ts ***!
    \***********************************************/

  /*! exports provided: LoggerService */

  /***/
  function srcAppCoreLoggerLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var LoggerService =
    /*#__PURE__*/
    function () {
      function LoggerService() {
        _classCallCheck(this, LoggerService);
      }

      _createClass(LoggerService, [{
        key: "log",
        value: function log(msg) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.log(msg);
          } else {// AppInsights
          }
        }
      }, {
        key: "logError",
        value: function logError(msg) {
          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.error(msg);
          } else {// AppInsights
          }
        }
      }]);

      return LoggerService;
    }();

    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoggerService);
    /***/
  },

  /***/
  "./src/app/core/models/events.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/models/events.model.ts ***!
    \*********************************************/

  /*! exports provided: UploadEventType */

  /***/
  function srcAppCoreModelsEventsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadEventType", function () {
      return UploadEventType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // TODO: consider adding genericity


    var UploadEventType;

    (function (UploadEventType) {
      UploadEventType[UploadEventType["Progress"] = 0] = "Progress";
      UploadEventType[UploadEventType["Response"] = 1] = "Response";
      UploadEventType[UploadEventType["Failure"] = 2] = "Failure";
      UploadEventType[UploadEventType["Unknown"] = 3] = "Unknown";
    })(UploadEventType || (UploadEventType = {}));
    /***/

  },

  /***/
  "./src/app/core/models/index.ts":
  /*!**************************************!*\
    !*** ./src/app/core/models/index.ts ***!
    \**************************************/

  /*! exports provided: UploadEventType */

  /***/
  function srcAppCoreModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _events_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./events.model */
    "./src/app/core/models/events.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UploadEventType", function () {
      return _events_model__WEBPACK_IMPORTED_MODULE_1__["UploadEventType"];
    });
    /***/

  },

  /***/
  "./src/app/core/time/time.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/time/time.service.ts ***!
    \*******************************************/

  /*! exports provided: TimeService */

  /***/
  function srcAppCoreTimeTimeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeService", function () {
      return TimeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimeService =
    /*#__PURE__*/
    function () {
      function TimeService() {
        _classCallCheck(this, TimeService);
      }

      _createClass(TimeService, [{
        key: "getTimestamp",
        value: function getTimestamp() {
          return new Date().toISOString();
        }
      }, {
        key: "currentTime",
        get: function get() {
          return Date.now();
        }
      }]);

      return TimeService;
    }();

    TimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TimeService);
    /***/
  },

  /***/
  "./src/app/core/utils/index.ts":
  /*!*************************************!*\
    !*** ./src/app/core/utils/index.ts ***!
    \*************************************/

  /*! exports provided: generateMockKwsTaskResults, generateMockKeywordCandidates, parseSpotFile, coerceKwsTaskName */

  /***/
  function srcAppCoreUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mock_kws_task_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-kws-task-results */
    "./src/app/core/utils/mock-kws-task-results.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "generateMockKwsTaskResults", function () {
      return _mock_kws_task_results__WEBPACK_IMPORTED_MODULE_1__["generateMockKwsTaskResults"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "generateMockKeywordCandidates", function () {
      return _mock_kws_task_results__WEBPACK_IMPORTED_MODULE_1__["generateMockKeywordCandidates"];
    });
    /* harmony import */


    var _spot_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spot-file */
    "./src/app/core/utils/spot-file.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseSpotFile", function () {
      return _spot_file__WEBPACK_IMPORTED_MODULE_2__["parseSpotFile"];
    });
    /* harmony import */


    var _kws_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kws-task */
    "./src/app/core/utils/kws-task.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "coerceKwsTaskName", function () {
      return _kws_task__WEBPACK_IMPORTED_MODULE_3__["coerceKwsTaskName"];
    });
    /***/

  },

  /***/
  "./src/app/core/utils/kws-task.ts":
  /*!****************************************!*\
    !*** ./src/app/core/utils/kws-task.ts ***!
    \****************************************/

  /*! exports provided: coerceKwsTaskName */

  /***/
  function srcAppCoreUtilsKwsTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceKwsTaskName", function () {
      return coerceKwsTaskName;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function coerceKwsTaskName(taskName, timestamp) {
      if (!taskName || taskName.trim() === '') {
        return "KWS-TASK-".concat(timestamp);
      }

      return taskName;
    }
    /***/

  },

  /***/
  "./src/app/core/utils/mock-kws-task-results.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/utils/mock-kws-task-results.ts ***!
    \*****************************************************/

  /*! exports provided: generateMockKwsTaskResults, generateMockKeywordCandidates */

  /***/
  function srcAppCoreUtilsMockKwsTaskResultsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateMockKwsTaskResults", function () {
      return generateMockKwsTaskResults;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateMockKeywordCandidates", function () {
      return generateMockKeywordCandidates;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function generateMockKwsTaskResults(vocabWords, audioFiles) {
      var candidates = [];
      audioFiles.forEach(function (file) {
        candidates.push.apply(candidates, _toConsumableArray(generateMockKeywordCandidates(vocabWords, file.name, file.duration)));
      }); // assign an id to each candidate

      for (var i = 0; i < candidates.length; i++) {
        candidates[i].id = i;
      }

      return {
        candidates: candidates
      };
    } // const histogram = d3.histogram()
    //     .domain()
    //     .thresholds(x.ticks(20));
    //
    // window['histogram'] = histogram;


    var SCORES = [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    var WORD_DURATIONS = [];

    var sample = function sample(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    var clampNumber = function clampNumber(num, min, max) {
      return Math.max(Math.min(num, max), min);
    };

    var randomNumberInRange = function randomNumberInRange(min, max) {
      return Math.random() * (max - min) + min;
    };

    var randomizedWordToDuration = function randomizedWordToDuration(word) {
      return word.length * 0.1; // ms * 100us
    };

    var getRandomScore = function getRandomScore() {
      var sampleSpace = [75, 75, 75, 90, 90];
      var s = sample(sampleSpace) + randomNumberInRange(-30, 30);
      return parseFloat(clampNumber(s, 20, 100).toFixed(2));
    };
    /**
     * @param audioDuration Duration in milliseconds
     */


    function generateMockKeywordCandidates(vocabWords, audioFilename, audioDuration) {
      // tslint:disable-next-line: max-line-length
      var vocabSize = vocabWords.length;
      var spotsPerSecond = 0.2531001589825119 * randomNumberInRange(0.8, 1.2); // add random
      // tslint:disable-next-line: max-line-length
      // const header = 'FilenameS                             KeywordS             ScoreN 	TimeFromT 	TimeToT 	FrameFromN 	DurationN 	AuxScoreN 	FillerS';
      // const lines = [];

      var spots = [];

      var getRandomVocabWord = function getRandomVocabWord() {
        return vocabWords[Math.trunc(vocabSize * Math.random())];
      }; // binary search -> check overlap
      // add time until good


      var numSpots = audioDuration * spotsPerSecond;

      for (var i = 0; i < numSpots; i++) {
        var word = getRandomVocabWord();
        var startTime = Math.random() * audioDuration;
        var duration = randomizedWordToDuration(word);
        var endTime = startTime + duration;

        if (endTime > audioDuration) {
          continue;
        }

        spots.push({
          id: 0,
          filename: audioFilename,
          keyword: word,
          score: getRandomScore(),
          timeFrom: Math.floor(10000 * startTime),
          timeTo: Math.floor(10000 * endTime),
          filler: ''
        });
      }

      return spots;
    }
    /***/

  },

  /***/
  "./src/app/core/utils/spot-file.ts":
  /*!*****************************************!*\
    !*** ./src/app/core/utils/spot-file.ts ***!
    \*****************************************/

  /*! exports provided: parseSpotFile */

  /***/
  function srcAppCoreUtilsSpotFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseSpotFile", function () {
      return parseSpotFile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/utils */
    "./src/app/shared/utils/index.ts");

    function parseSpotFile(str) {
      var TIME_COEF = 10;
      var lines = str.match(/[^\r\n]+/g);
      var header = lines.shift();
      var candidates = new Array(lines.length);

      for (var i = 0, I = lines.length; i < I; i++) {
        var lineParts = lines[i].split(/\s+/);

        if (lineParts.length !== 9) {
          throw new Error("Invalid line ".concat(i + 2));
        }

        candidates[i] = {
          // index: i,
          id: i,
          filename: lineParts[0],
          keyword: lineParts[1],
          score: parseFloat(lineParts[2]),
          timeFrom: TIME_COEF * Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["parseTimeMs"])(lineParts[3]),
          timeTo: TIME_COEF * Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["parseTimeMs"])(lineParts[4]),
          filler: ''
        }; // spots[i] = parseInt(lineParts[5], 10);
        // spots[i] = parseInt(lineParts[6], 10);
        // spots[i] = parseFloat(lineParts[7]);

        candidates[i].filler = lineParts[8];
      }

      return candidates;
    }
    /***/

  },

  /***/
  "./src/app/custom-material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/custom-material.module.ts ***!
    \*******************************************/

  /*! exports provided: CustomMaterialModule */

  /***/
  function srcAppCustomMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function () {
      return CustomMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CustomMaterialModule = function CustomMaterialModule() {
      _classCallCheck(this, CustomMaterialModule);
    };

    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_CHECKBOX_CLICK_ACTION"],
        useValue: 'noop'
      }]
    })], CustomMaterialModule);
    /***/
  },

  /***/
  "./src/app/data/index.ts":
  /*!*******************************!*\
    !*** ./src/app/data/index.ts ***!
    \*******************************/

  /*! exports provided: MOCK_KWS_TASKS */

  /***/
  function srcAppDataIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mock_tasks_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-tasks.data */
    "./src/app/data/mock-tasks.data.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MOCK_KWS_TASKS", function () {
      return _mock_tasks_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_KWS_TASKS"];
    });
    /***/

  },

  /***/
  "./src/app/data/mock-tasks.data.ts":
  /*!*****************************************!*\
    !*** ./src/app/data/mock-tasks.data.ts ***!
    \*****************************************/

  /*! exports provided: MOCK_KWS_TASKS */

  /***/
  function srcAppDataMockTasksDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOCK_KWS_TASKS", function () {
      return MOCK_KWS_TASKS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MOCK_KWS_TASKS = [{
      id: 'dsajdsalkfjlsaafsd',
      name: 'mock-task-1',
      submissionTime: 1580389246932,
      completionTime: 1580389266398,
      language: 'cz',
      isCompleted: true
    }, {
      id: 'dsajdafajsfsjakfhak',
      name: 'mock-task-2',
      submissionTime: 1580389246932,
      completionTime: 1580389266398,
      language: 'cz',
      isCompleted: true
    }, {
      id: 'djakdfjsdljflkasjdf',
      name: 'mock-task-3',
      submissionTime: 1580389246932,
      completionTime: 1580389266398,
      language: 'cz',
      isCompleted: true
    }];
    /***/
  },

  /***/
  "./src/app/shared/common-table-templates/common-table-templates.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/common-table-templates/common-table-templates.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCommonTableTemplatesCommonTableTemplatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pbl-ngrid-ui-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.pbl-ngrid-no-data {\n  display: flex;\n  place-content: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n}\n\n.pbl-ngrid-no-data > * {\n  margin: auto;\n}\n\n.pbl-row-detail-parent:focus {\n  outline: none;\n}\n\n.pbl-row-detail-parent.pbl-row-detail-opened {\n  background: #f5f5f5;\n}\n\n.pbl-detail-row {\n  padding: 10px 40px;\n  overflow: hidden;\n}\n\n.pbl-ngrid-row-drag-handle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.pbl-ngrid-row-drag-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.pbl-ngrid-column-resizer-handle {\n  position: absolute;\n  right: 0%;\n  height: 70%;\n  width: 1px;\n  transform: translateY(30%);\n}\n\n.pbl-ngrid-column-type-progressBar.pbl-ngrid-cell {\n  position: relative;\n}\n\n.pbl-ngrid-column-type-progressBar.pbl-ngrid-cell > div {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  left: 0;\n}\n\n.pbl-ngrid-column-type-progressBar.pbl-ngrid-cell > div > div {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  place-content: center;\n  align-items: center;\n}\n\n.pbl-ngrid:not(.pbl-ngrid-scrolling) .pbl-ngrid-column-type-progressBar.pbl-ngrid-cell > div {\n  width: 0;\n  transition: width 350ms cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.column-reorder-handle {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbW1vbi10YWJsZS10ZW1wbGF0ZXMvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbW1vbi10YWJsZS10ZW1wbGF0ZXNcXGNvbW1vbi10YWJsZS10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21tb24tdGFibGUtdGVtcGxhdGVzL2NvbW1vbi10YWJsZS10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURJSTtFQUNJLGFBQUE7QUNEUjs7QURHSTtFQUNJLG1CQUFBO0FDRFI7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0FSOztBREVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0FaOztBRE1JO0VBQ0ksUUFBQTtFQUNBLDJEQUFBO0FDSFI7O0FET0E7RUFDSSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tbW9uLXRhYmxlLXRlbXBsYXRlcy9jb21tb24tdGFibGUtdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBibC1uZ3JpZC11aS1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYmwtbmdyaWQtbm8tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICYgPiAqIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYmwtcm93LWRldGFpbC1wYXJlbnQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICYucGJsLXJvdy1kZXRhaWwtb3BlbmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGJsLWRldGFpbC1yb3cge1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBibC1uZ3JpZC1yb3ctZHJhZy1oYW5kbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnBibC1uZ3JpZC1yb3ctZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ucGJsLW5ncmlkLWNvbHVtbi1yZXNpemVyLWhhbmRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcclxufVxyXG5cclxuLnBibC1uZ3JpZC1jb2x1bW4tdHlwZS1wcm9ncmVzc0Jhci5wYmwtbmdyaWQtY2VsbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYmwtbmdyaWQ6bm90KC5wYmwtbmdyaWQtc2Nyb2xsaW5nKSAucGJsLW5ncmlkLWNvbHVtbi10eXBlLXByb2dyZXNzQmFyLnBibC1uZ3JpZC1jZWxsIHtcclxuICAgID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbHVtbi1yZW9yZGVyLWhhbmRsZSB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuIiwiLnBibC1uZ3JpZC11aS1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBibC1uZ3JpZC1uby1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnBibC1uZ3JpZC1uby1kYXRhID4gKiB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnBibC1yb3ctZGV0YWlsLXBhcmVudDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGJsLXJvdy1kZXRhaWwtcGFyZW50LnBibC1yb3ctZGV0YWlsLW9wZW5lZCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5wYmwtZGV0YWlsLXJvdyB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBibC1uZ3JpZC1yb3ctZHJhZy1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wYmwtbmdyaWQtcm93LWRyYWctcGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ucGJsLW5ncmlkLWNvbHVtbi1yZXNpemVyLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSk7XG59XG5cbi5wYmwtbmdyaWQtY29sdW1uLXR5cGUtcHJvZ3Jlc3NCYXIucGJsLW5ncmlkLWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGJsLW5ncmlkLWNvbHVtbi10eXBlLXByb2dyZXNzQmFyLnBibC1uZ3JpZC1jZWxsID4gZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbn1cbi5wYmwtbmdyaWQtY29sdW1uLXR5cGUtcHJvZ3Jlc3NCYXIucGJsLW5ncmlkLWNlbGwgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYmwtbmdyaWQ6bm90KC5wYmwtbmdyaWQtc2Nyb2xsaW5nKSAucGJsLW5ncmlkLWNvbHVtbi10eXBlLXByb2dyZXNzQmFyLnBibC1uZ3JpZC1jZWxsID4gZGl2IHtcbiAgd2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG4uY29sdW1uLXJlb3JkZXItaGFuZGxlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/common-table-templates/common-table-templates.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/common-table-templates/common-table-templates.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CommonTableTemplatesComponent */

  /***/
  function srcAppSharedCommonTableTemplatesCommonTableTemplatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonTableTemplatesComponent", function () {
      return CommonTableTemplatesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var CommonTableTemplatesComponent = function CommonTableTemplatesComponent() {
      _classCallCheck(this, CommonTableTemplatesComponent);
    };

    CommonTableTemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-demo-common-table-templates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./common-table-templates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/common-table-templates/common-table-templates.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        minHeight: '0',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./common-table-templates.component.scss */
      "./src/app/shared/common-table-templates/common-table-templates.component.scss")).default]
    })], CommonTableTemplatesComponent);
    /***/
  },

  /***/
  "./src/app/shared/confirmation-dialog/confirmation-dialog.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedConfirmationDialogConfirmationDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n[mat-dialog-content] {\n  line-height: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpcm1hdGlvbi1kaWFsb2cvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbmZpcm1hdGlvbi1kaWFsb2dcXGNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuW21hdC1kaWFsb2ctY29udGVudF0ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuW21hdC1kaWFsb2ctY29udGVudF0ge1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfirmationDialogComponent */

  /***/
  function srcAppSharedConfirmationDialogConfirmationDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
      return ConfirmationDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ConfirmationDialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationDialogComponent(data) {
        _classCallCheck(this, ConfirmationDialogComponent);

        this.data = data;
        this.width = '350px';
        this.confirmationButtonColor = 'warn';
      }

      _createClass(ConfirmationDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this$data = this.data,
              width = _this$data.width,
              confirmationButtonColor = _this$data.confirmationButtonColor;

          if (width) {
            this.width = width;
          }

          if (this.data.confirmationButtonColor) {
            this.confirmationButtonColor = confirmationButtonColor;
          }
        }
      }]);

      return ConfirmationDialogComponent;
    }();

    ConfirmationDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConfirmationDialogComponent.prototype, "width", void 0);
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirmation-dialog/confirmation-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation-dialog.component.scss */
      "./src/app/shared/confirmation-dialog/confirmation-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], ConfirmationDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/dropdown/dropdown.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/dropdown/dropdown.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDropdownDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/dropdown/dropdown.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/dropdown/dropdown.component.ts ***!
    \*******************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcAppSharedDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DropdownComponent =
    /*#__PURE__*/
    function () {
      function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(DropdownComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.selected) {
            this.select.setValue(changes.selected.currentValue);
          }
        }
      }]);

      return DropdownComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DropdownComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DropdownComponent.prototype, "bindLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DropdownComponent.prototype, "bindValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DropdownComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DropdownComponent.prototype, "selectionChange", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropdown/dropdown.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown.component.scss */
      "./src/app/shared/dropdown/dropdown.component.scss")).default]
    })], DropdownComponent);
    /***/
  },

  /***/
  "./src/app/shared/dropdown/options/dropdown-static-option.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/dropdown/options/dropdown-static-option.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDropdownOptionsDropdownStaticOptionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  align-items: center;\n  font-size: inherit;\n  line-height: 3em;\n  height: 3em;\n  padding: 0 16px;\n  cursor: pointer;\n  outline: none;\n  min-width: 150px;\n}\n:host ::ng-deep mat-icon {\n  margin-right: 10px;\n}\n:host:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duL29wdGlvbnMvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFxzaGFyZWRcXGRyb3Bkb3duXFxvcHRpb25zXFxkcm9wZG93bi1zdGF0aWMtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZHJvcGRvd24vb3B0aW9ucy9kcm9wZG93bi1zdGF0aWMtb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FERUk7RUFDRSwrQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duL29wdGlvbnMvZHJvcGRvd24tc3RhdGljLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgXHJcbiAgICA6Om5nLWRlZXAgbWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjpob3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/dropdown/options/dropdown-static-options.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/dropdown/options/dropdown-static-options.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDropdownOptionsDropdownStaticOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duL29wdGlvbnMvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFxzaGFyZWRcXGRyb3Bkb3duXFxvcHRpb25zXFxkcm9wZG93bi1zdGF0aWMtb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duL29wdGlvbnMvZHJvcGRvd24tc3RhdGljLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsNENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kcm9wZG93bi9vcHRpb25zL2Ryb3Bkb3duLXN0YXRpYy1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/dropdown/options/dropdown-static-options.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/dropdown/options/dropdown-static-options.component.ts ***!
    \******************************************************************************/

  /*! exports provided: DropdownStaticOptionsComponent, DropdownStaticOptionComponent */

  /***/
  function srcAppSharedDropdownOptionsDropdownStaticOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownStaticOptionsComponent", function () {
      return DropdownStaticOptionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownStaticOptionComponent", function () {
      return DropdownStaticOptionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropdownStaticOptionsComponent = function DropdownStaticOptionsComponent() {
      _classCallCheck(this, DropdownStaticOptionsComponent);
    };

    DropdownStaticOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdown-static-options',
      template: "\n    <ng-content></ng-content>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown-static-options.component.scss */
      "./src/app/shared/dropdown/options/dropdown-static-options.component.scss")).default]
    })], DropdownStaticOptionsComponent);

    var DropdownStaticOptionComponent = function DropdownStaticOptionComponent() {
      _classCallCheck(this, DropdownStaticOptionComponent);
    };

    DropdownStaticOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdown-static-option',
      template: "\n    <ng-content></ng-content>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown-static-option.component.scss */
      "./src/app/shared/dropdown/options/dropdown-static-option.component.scss")).default]
    })], DropdownStaticOptionComponent);
    /***/
  },

  /***/
  "./src/app/shared/file-picker/file-picker.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/file-picker/file-picker.directive.ts ***!
    \*************************************************************/

  /*! exports provided: FILE_PICKER_VALUE_ACCESSOR, FilePickerEvent, FilePickerDirective */

  /***/
  function srcAppSharedFilePickerFilePickerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILE_PICKER_VALUE_ACCESSOR", function () {
      return FILE_PICKER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerEvent", function () {
      return FilePickerEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerDirective", function () {
      return FilePickerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils */
    "./src/app/shared/file-picker/utils/index.ts");
    /*
        inspiration:
            MatDatepickerInput, MatAutocompleteTrigger
     */

    /** @docs-private */


    var FILE_PICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return FilePickerDirective;
      }),
      multi: true
    };

    var FilePickerEvent = function FilePickerEvent(
    /** Reference to the component that emitted the event. */
    target,
    /** Reference to the native input element associated with the file picker. */
    targetElement) {
      _classCallCheck(this, FilePickerEvent);

      this.target = target;
      this.targetElement = targetElement;
      this.value = this.target.value;
    };

    var FilePickerDirective =
    /*#__PURE__*/
    function () {
      function FilePickerDirective(_ngZone, _hostRef, _renderer) {
        var _this9 = this;

        _classCallCheck(this, FilePickerDirective);

        this._ngZone = _ngZone;
        this._hostRef = _hostRef;
        this._renderer = _renderer;
        this._fileInputElChangeSub = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._value = null;
        this._multiple = false;
        this._accept = '';
        this._disabled = false;

        this._onTouched = function () {};

        this._onChange = function () {};

        this._onFileInputChange = function (ev) {
          _this9._isDialogOpen = false;
          var files = ev.target.files;
          _this9._value = files;

          _this9._onChange(files);

          _this9._onTouched();
        };

        this._isDialogOpen = false;
      }

      _createClass(FilePickerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFileInputElement();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "createFileInputElement",
        value: function createFileInputElement() {
          var _this10 = this;

          var inputEl = this._renderer.createElement('input');

          this._renderer.setProperty(inputEl, 'type', 'file');

          this._renderer.setStyle(inputEl, 'display', 'none');

          this._renderer.setProperty(inputEl, 'accept', this._accept);

          this._renderer.setProperty(inputEl, 'multiple', this._multiple);

          this._ngZone.runOutsideAngular(function () {
            _this10._fileInputElChangeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(inputEl, 'change').subscribe(_this10._onFileInputChange);
          });

          this._fileInputEl = inputEl;
          Object(_utils__WEBPACK_IMPORTED_MODULE_4__["insertAfter"])(this._fileInputEl, this._hostRef.nativeElement, this._renderer);
        }
      }, {
        key: "destroyFileInputElement",
        value: function destroyFileInputElement() {
          if (this._fileInputEl) {
            if (this._renderer.destroyNode) {
              this._renderer.destroyNode(this._fileInputEl);
            }
          }

          this._fileInputElChangeSub.unsubscribe();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /** Handles blur events on the input. */
        // @HostListener('blur')
        // private _onBlur() {
        //     // this._onTouched();
        //     // if (!this._value) { // becomes invalid is nothing selected
        //     //     this._onChange(null);
        //     // }
        // }

      }, {
        key: "onClick",
        value: function onClick() {
          this._isDialogOpen = true;

          if (this._fileInputEl) {
            this._fileInputEl.click();
          }
        }
      }, {
        key: "onWindowFocus",
        value: function onWindowFocus() {
          var _this11 = this;

          this._ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              if (_this11._isDialogOpen) {
                _this11._isDialogOpen = false;

                if (!_this11._value) {
                  // becomes invalid if nothing is selected
                  _this11._onChange(null);
                }

                _this11._onTouched();
              }
            }, 500);
          });
        }
      }, {
        key: "_setDisabledClass",
        value: function _setDisabledClass(isDisabled) {
          if (isDisabled) {
            this._renderer.addClass(this._hostRef.nativeElement, 'disabled');
          } else {
            this._renderer.removeClass(this._hostRef.nativeElement, 'disabled');
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          var oldFile = this.value;
          this._value = value; // FIXME:
          // this has to be here, because fileInput change event does not emit after control's reset
          // for some unknown reason

          this.destroyFileInputElement();
          this.createFileInputElement();
        }
      }, {
        key: "multiple",
        set: function set(v) {
          this._multiple = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(v);

          if (this._fileInputEl) {
            this._renderer.setProperty(this._fileInputEl, 'multiple', this._multiple);
          }
        }
      }, {
        key: "accept",
        set: function set(v) {
          // TODO: validation
          this._accept = v;

          if (this._fileInputEl) {
            this._renderer.setProperty(this._fileInputEl, 'accept', this._accept);
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(value) {
          var newValue = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          var element = this._hostRef.nativeElement;

          if (this._disabled !== newValue) {
            this._disabled = newValue;

            this._setDisabledClass(newValue);
          } // We need to null check the `blur` method, because it's undefined during SSR.


          if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
          }
        }
      }]);

      return FilePickerDirective;
    }();

    FilePickerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], FilePickerDirective.prototype, "value", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], FilePickerDirective.prototype, "multiple", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], FilePickerDirective.prototype, "accept", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], FilePickerDirective.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FilePickerDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:focus'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FilePickerDirective.prototype, "onWindowFocus", null);
    FilePickerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appFilePicker]',
      providers: [FILE_PICKER_VALUE_ACCESSOR]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], FilePickerDirective);
    /***/
  },

  /***/
  "./src/app/shared/file-picker/file-picker.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/file-picker/file-picker.module.ts ***!
    \**********************************************************/

  /*! exports provided: FilePickerModule */

  /***/
  function srcAppSharedFilePickerFilePickerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePickerModule", function () {
      return FilePickerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _file_picker_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file-picker.directive */
    "./src/app/shared/file-picker/file-picker.directive.ts");

    var FilePickerModule = function FilePickerModule() {
      _classCallCheck(this, FilePickerModule);
    };

    FilePickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_file_picker_directive__WEBPACK_IMPORTED_MODULE_4__["FilePickerDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_file_picker_directive__WEBPACK_IMPORTED_MODULE_4__["FilePickerDirective"]]
    })], FilePickerModule);
    /***/
  },

  /***/
  "./src/app/shared/file-picker/utils/coercion.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/file-picker/utils/coercion.ts ***!
    \******************************************************/

  /*! exports provided: coerceBooleanProperty */

  /***/
  function srcAppSharedFilePickerUtilsCoercionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /***/

  },

  /***/
  "./src/app/shared/file-picker/utils/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/file-picker/utils/index.ts ***!
    \***************************************************/

  /*! exports provided: coerceBooleanProperty, insertAfter */

  /***/
  function srcAppSharedFilePickerUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./coercion */
    "./src/app/shared/file-picker/utils/coercion.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return _coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"];
    });
    /* harmony import */


    var _insert_after__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./insert-after */
    "./src/app/shared/file-picker/utils/insert-after.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "insertAfter", function () {
      return _insert_after__WEBPACK_IMPORTED_MODULE_2__["insertAfter"];
    });
    /***/

  },

  /***/
  "./src/app/shared/file-picker/utils/insert-after.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/file-picker/utils/insert-after.ts ***!
    \**********************************************************/

  /*! exports provided: insertAfter */

  /***/
  function srcAppSharedFilePickerUtilsInsertAfterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertAfter", function () {
      return insertAfter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function insertAfter(newChild, refChild, renderer) {
      if (refChild.parentNode) {
        if (renderer) {
          renderer.insertBefore(refChild.parentNode, newChild, refChild.nextSibling);
        } else {
          refChild.parentNode.insertBefore(newChild, refChild.nextSibling);
        }
      } else {
        throw new DOMException('referenceNode does not have a parent');
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  z-index: 100;\n  display: block;\n  background-color: white;\n}\n\n.navbar-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n}\n\n.navbar-header > .mat-button:last-child {\n  margin-left: auto;\n}\n\n.flex-spacer {\n  flex-grow: 1;\n}\n\n.docs-angular-logo {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.docs-github-logo {\n  height: 21px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHNoYXJlZFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vIFRPRE86IHNldCBjb2xvciBpbnNpZGUgdGhlbWluZ1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG5cclxuICAgID4gLm1hdC1idXR0b24ge1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZsZXgtc3BhY2VyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmRvY3MtYW5ndWxhci1sb2dvIHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMCA0cHggM3B4IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9jcy1naXRodWItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW46IDAgN3B4IDJweCAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2YmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG4ubmF2YmFyLWhlYWRlciA+IC5tYXQtYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmZsZXgtc3BhY2VyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZG9jcy1hbmd1bGFyLWxvZ28ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kb2NzLWdpdGh1Yi1sb2dvIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBtYXJnaW46IDAgN3B4IDJweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SECTIONS = {};
    var SECTIONS_KEYS = Object.keys(SECTIONS);

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "sectionKeys",
        get: function get() {
          return SECTIONS_KEYS;
        }
      }, {
        key: "sections",
        get: function get() {
          return SECTIONS;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/navbar/navbar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/shared/toolbar/toolbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _toolbar_toolbar_logo_toolbar_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toolbar/toolbar-logo/toolbar-logo.component */
    "./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.ts");
    /* harmony import */


    var _custom_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../custom-material.module */
    "./src/app/custom-material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dropdown/dropdown.component */
    "./src/app/shared/dropdown/dropdown.component.ts");
    /* harmony import */


    var _dropdown_options_dropdown_static_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dropdown/options/dropdown-static-options.component */
    "./src/app/shared/dropdown/options/dropdown-static-options.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts"); // import { SearchComponent } from './search/search.component';
    // import { SearchComponent } from './search/search.component';


    var COMPONENTS = [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _toolbar_toolbar_logo_toolbar_logo_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarLogoComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropdownComponent"], _dropdown_options_dropdown_static_options_component__WEBPACK_IMPORTED_MODULE_10__["DropdownStaticOptionComponent"], _dropdown_options_dropdown_static_options_component__WEBPACK_IMPORTED_MODULE_10__["DropdownStaticOptionsComponent"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [].concat(COMPONENTS, [_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropdownComponent"], // SearchComponent,
      _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]]),
      exports: [].concat(COMPONENTS),
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedToolbarToolbarLogoToolbarLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b29sYmFyL3Rvb2xiYXItbG9nby90b29sYmFyLWxvZ28uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ToolbarLogoComponent */

  /***/
  function srcAppSharedToolbarToolbarLogoToolbarLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarLogoComponent", function () {
      return ToolbarLogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarLogoComponent =
    /*#__PURE__*/
    function () {
      function ToolbarLogoComponent() {
        _classCallCheck(this, ToolbarLogoComponent);
      }

      _createClass(ToolbarLogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarLogoComponent;
    }();

    ToolbarLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar-logo.component.scss */
      "./src/app/shared/toolbar/toolbar-logo/toolbar-logo.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToolbarLogoComponent);
    /***/
  },

  /***/
  "./src/app/shared/toolbar/toolbar.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/toolbar/toolbar.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedToolbarToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/toolbar/toolbar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/toolbar/toolbar.component.ts ***!
    \*****************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppSharedToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.scss */
      "./src/app/shared/toolbar/toolbar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToolbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/utils/fake-data.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/utils/fake-data.ts ***!
    \*******************************************/

  /*! exports provided: getFakeKeywords, getFakeAudioFilenames, getFakeAudioDurations, getRandomAudioFileExtension */

  /***/
  function srcAppSharedUtilsFakeDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFakeKeywords", function () {
      return getFakeKeywords;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFakeAudioFilenames", function () {
      return getFakeAudioFilenames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFakeAudioDurations", function () {
      return getFakeAudioDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRandomAudioFileExtension", function () {
      return getRandomAudioFileExtension;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js"); // Faker.locale = "cz";
    // (window as any).Faker = Faker;


    var AUDIO_FILE_EXTENSIONS = ['wav'];
    var FORBIDDDEN_KEYWORD_CHARS_RE = /[\d\s]/;

    function getFakeKeywords(amount) {
      var keywords = new Array(amount);

      var keywordIsValid = function keywordIsValid(keyword) {
        return !FORBIDDDEN_KEYWORD_CHARS_RE.test(keyword);
      };

      var kw = '';

      for (var i = 0; i < amount; i++) {
        do {
          kw = faker__WEBPACK_IMPORTED_MODULE_1__["random"].word();
        } while (!keywordIsValid(kw));

        keywords[i] = kw;
      }

      return keywords;
    }

    function getFakeAudioFilenames(amount) {
      var filenames = new Array(amount);
      var fname = '';

      for (var i = 0; i < amount; i++) {
        fname = faker__WEBPACK_IMPORTED_MODULE_1__["system"].fileName();
        var fnameParts = fname.split('.');
        var audioFileExt = getRandomAudioFileExtension();

        if (fnameParts.length > 1) {
          fnameParts[fnameParts.length - 1] = audioFileExt;
        } else {
          fnameParts.push(audioFileExt);
        }

        filenames[i] = fnameParts.join('.');
      }

      return filenames;
    }

    function getFakeAudioDurations(amount, expectedValue, standardDeviation) {
      var durations = new Array(amount);
      var getRandom = d3__WEBPACK_IMPORTED_MODULE_2__["randomNormal"](expectedValue, standardDeviation);

      for (var i = 0; i < amount; i++) {
        durations[i] = getRandom();
      }

      return durations;
    }

    function getRandomAudioFileExtension() {
      var len = AUDIO_FILE_EXTENSIONS.length;
      return AUDIO_FILE_EXTENSIONS[Math.floor(Math.random() * len)];
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/file.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/utils/file.ts ***!
    \**************************************/

  /*! exports provided: readFileAsText, readFileAsArrayBuffer */

  /***/
  function srcAppSharedUtilsFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readFileAsText", function () {
      return readFileAsText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readFileAsArrayBuffer", function () {
      return readFileAsArrayBuffer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function readFileAsText(file, encoding) {
      var reader = new FileReader();
      return new Promise(function (resolve, reject) {
        reader.onerror = function () {
          reject(reader.error);
        };

        reader.onload = function () {
          resolve(reader.result);
        };

        reader.readAsText(file, encoding);
      });
    }

    function readFileAsArrayBuffer(file) {
      var reader = new FileReader();
      return new Promise(function (resolve, reject) {
        reader.onerror = function () {
          reject(reader.error);
        };

        reader.onload = function () {
          resolve(reader.result);
        };

        reader.readAsArrayBuffer(file);
      });
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/index.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/utils/index.ts ***!
    \***************************************/

  /*! exports provided: getUsedLocalStorageSpace, remainingLocalStorageSpace, Vocab, readVocabFile, readFileAsText, readFileAsArrayBuffer, parseTimeMs, time100usToString, getFakeKeywords, getFakeAudioFilenames, getFakeAudioDurations, getRandomAudioFileExtension, uuid */

  /***/
  function srcAppSharedUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./local-storage */
    "./src/app/shared/utils/local-storage.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getUsedLocalStorageSpace", function () {
      return _local_storage__WEBPACK_IMPORTED_MODULE_1__["getUsedLocalStorageSpace"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "remainingLocalStorageSpace", function () {
      return _local_storage__WEBPACK_IMPORTED_MODULE_1__["remainingLocalStorageSpace"];
    });
    /* harmony import */


    var _vocab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vocab */
    "./src/app/shared/utils/vocab.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Vocab", function () {
      return _vocab__WEBPACK_IMPORTED_MODULE_2__["Vocab"];
    });
    /* harmony import */


    var _vocab_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vocab-file */
    "./src/app/shared/utils/vocab-file.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "readVocabFile", function () {
      return _vocab_file__WEBPACK_IMPORTED_MODULE_3__["readVocabFile"];
    });
    /* harmony import */


    var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file */
    "./src/app/shared/utils/file.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "readFileAsText", function () {
      return _file__WEBPACK_IMPORTED_MODULE_4__["readFileAsText"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "readFileAsArrayBuffer", function () {
      return _file__WEBPACK_IMPORTED_MODULE_4__["readFileAsArrayBuffer"];
    });
    /* harmony import */


    var _time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./time */
    "./src/app/shared/utils/time.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseTimeMs", function () {
      return _time__WEBPACK_IMPORTED_MODULE_5__["parseTimeMs"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "time100usToString", function () {
      return _time__WEBPACK_IMPORTED_MODULE_5__["time100usToString"];
    });
    /* harmony import */


    var _fake_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fake-data */
    "./src/app/shared/utils/fake-data.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getFakeKeywords", function () {
      return _fake_data__WEBPACK_IMPORTED_MODULE_6__["getFakeKeywords"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getFakeAudioFilenames", function () {
      return _fake_data__WEBPACK_IMPORTED_MODULE_6__["getFakeAudioFilenames"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getFakeAudioDurations", function () {
      return _fake_data__WEBPACK_IMPORTED_MODULE_6__["getFakeAudioDurations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRandomAudioFileExtension", function () {
      return _fake_data__WEBPACK_IMPORTED_MODULE_6__["getRandomAudioFileExtension"];
    });
    /* harmony import */


    var _uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./uuid */
    "./src/app/shared/utils/uuid.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return _uuid__WEBPACK_IMPORTED_MODULE_7__["uuid"];
    });
    /***/

  },

  /***/
  "./src/app/shared/utils/local-storage.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/utils/local-storage.ts ***!
    \***********************************************/

  /*! exports provided: getUsedLocalStorageSpace, remainingLocalStorageSpace */

  /***/
  function srcAppSharedUtilsLocalStorageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUsedLocalStorageSpace", function () {
      return getUsedLocalStorageSpace;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remainingLocalStorageSpace", function () {
      return remainingLocalStorageSpace;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // https://www.quora.com/How-do-I-check-the-size-of-local-storage-used-by-JavaScript


    function getUsedLocalStorageSpace() {
      return Object.keys(window.localStorage).map(function (key) {
        return localStorage[key].length;
      }).reduce(function (a, b) {
        return a + b;
      });
    }

    function remainingLocalStorageSpace() {
      window.navigator.webkitTemporaryStorage.queryUsageAndQuota(function (used, remaining) {
        console.log('Used space', used);
        console.log('Remaining space', remaining);
      }, function (err) {
        console.warn(err);
      });
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/time.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/utils/time.ts ***!
    \**************************************/

  /*! exports provided: parseTimeMs, time100usToString */

  /***/
  function srcAppSharedUtilsTimeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTimeMs", function () {
      return parseTimeMs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "time100usToString", function () {
      return time100usToString;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function parseTimeMs(timeStr) {
      var parts = timeStr.split(':');
      var hours = parseInt(parts[0], 10);
      var minutes = parseInt(parts[1], 10);
      var seconds = parseFloat(parts[2]);
      return Math.trunc(1000 * (3600 * hours + 60 * minutes + seconds));
    }

    function time100usToString(t) {
      var h = Math.floor(t / 36000000);
      t -= h * 36000000;
      var m = Math.floor(t / 600000);
      t -= m * 600000;
      var s = Math.floor(t / 10000);
      t -= s * 10000;
      return "".concat(h.toString().padStart(2, '0'), ":").concat(m.toString().padStart(2, '0'), ":").concat(s.toString().padStart(2, '0'), ".").concat(t.toString().padStart(4, '0'));
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/uuid.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/utils/uuid.ts ***!
    \**************************************/

  /*! exports provided: uuid */

  /***/
  function srcAppSharedUtilsUuidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return uuid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* jshint bitwise:false, node:true */

    /* tslint:disable:no-bitwise no-var-keyword typedef */
    // taken from TodoMVC


    function uuid() {
      var i, random;
      var result = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i === 8 || i === 12 || i === 16 || i === 20) {
          result += '-';
        }

        result += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
      }

      return result;
    }

    ;
    /***/
  },

  /***/
  "./src/app/shared/utils/vocab-file.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/utils/vocab-file.ts ***!
    \********************************************/

  /*! exports provided: readVocabFile */

  /***/
  function srcAppSharedUtilsVocabFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readVocabFile", function () {
      return readVocabFile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./file */
    "./src/app/shared/utils/file.ts");
    /* harmony import */


    var _vocab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vocab */
    "./src/app/shared/utils/vocab.ts");

    function readVocabFile(file) {
      var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cp1250';
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var str;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_file__WEBPACK_IMPORTED_MODULE_1__["readFileAsText"])(file, encoding);

              case 2:
                str = _context3.sent;
                return _context3.abrupt("return", _vocab__WEBPACK_IMPORTED_MODULE_2__["Vocab"].fromVOC(str));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/vocab.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/utils/vocab.ts ***!
    \***************************************/

  /*! exports provided: Vocab */

  /***/
  function srcAppSharedUtilsVocabTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vocab", function () {
      return Vocab;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Vocab =
    /*#__PURE__*/
    function () {
      function Vocab(data) {
        _classCallCheck(this, Vocab);

        if (data instanceof Map) {
          this._words = data;
        } else if (Array.isArray(data)) {
          this._words = new Map(data);
        } else {
          this._words = new Map();
        }
      }

      _createClass(Vocab, [{
        key: "toJSON",
        value: function toJSON() {
          return JSON.stringify(_toConsumableArray(this.words.entries()));
        }
      }, {
        key: "size",
        get: function get() {
          return this._words.size;
        }
      }, {
        key: "words",
        get: function get() {
          return this._words;
        }
      }], [{
        key: "fromEntries",
        value: function fromEntries(entries) {
          return new Vocab(new Map(entries));
        } // tslint:disable-next-line: member-ordering

      }, {
        key: "fromVOC",
        value: function fromVOC(str) {
          var map = new Map();
          var lines = str.match(/[^\r\n]+/g);
          lines.shift();
          var word;

          for (var i = 0, len = lines.length; i < len; i++) {
            lines[i] = lines[i].match(/[^\s]+/g);
            lines[i].shift();
            word = lines[i].shift();
            map.set(word, lines[i]);
          }

          return new Vocab(map);
        }
      }, {
        key: "fromLEX",
        value: function fromLEX(str) {
          return new Vocab();
        }
      }, {
        key: "fromJSON",
        value: function fromJSON(str) {
          return Vocab.fromEntries(JSON.parse(str));
        }
      }]);

      return Vocab;
    }();
    /***/

  },

  /***/
  "./src/app/task-results/audio-events-chart/audio-event/audio-event.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/task-results/audio-events-chart/audio-event/audio-event.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskResultsAudioEventsChartAudioEventAudioEventComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcmVzdWx0cy9hdWRpby1ldmVudHMtY2hhcnQvYXVkaW8tZXZlbnQvYXVkaW8tZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/task-results/audio-events-chart/audio-event/audio-event.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/task-results/audio-events-chart/audio-event/audio-event.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AudioEventComponent */

  /***/
  function srcAppTaskResultsAudioEventsChartAudioEventAudioEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioEventComponent", function () {
      return AudioEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AudioEventComponent =
    /*#__PURE__*/
    function () {
      function AudioEventComponent() {
        _classCallCheck(this, AudioEventComponent);
      }

      _createClass(AudioEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AudioEventComponent;
    }();

    AudioEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audio-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audio-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/audio-event/audio-event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audio-event.component.scss */
      "./src/app/task-results/audio-events-chart/audio-event/audio-event.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AudioEventComponent);
    /***/
  },

  /***/
  "./src/app/task-results/audio-events-chart/time-axis/time-axis.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/task-results/audio-events-chart/time-axis/time-axis.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskResultsAudioEventsChartTimeAxisTimeAxisComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcmVzdWx0cy9hdWRpby1ldmVudHMtY2hhcnQvdGltZS1heGlzL3RpbWUtYXhpcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/task-results/audio-events-chart/time-axis/time-axis.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/task-results/audio-events-chart/time-axis/time-axis.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TimeAxisComponent */

  /***/
  function srcAppTaskResultsAudioEventsChartTimeAxisTimeAxisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeAxisComponent", function () {
      return TimeAxisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimeAxisComponent =
    /*#__PURE__*/
    function () {
      function TimeAxisComponent() {
        _classCallCheck(this, TimeAxisComponent);
      }

      _createClass(TimeAxisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimeAxisComponent;
    }();

    TimeAxisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-time-axis',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./time-axis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/audio-events-chart/time-axis/time-axis.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./time-axis.component.scss */
      "./src/app/task-results/audio-events-chart/time-axis/time-axis.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TimeAxisComponent);
    /***/
  },

  /***/
  "./src/app/task-results/kws-chart/kws-chart.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/task-results/kws-chart/kws-chart.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskResultsKwsChartKwsChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n.loader {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n  opacity: 1;\n}\n\n.axis {\n  color: gray;\n  font-size: 0.9rem;\n  font-family: \"Roboto\";\n}\n\n.spot-label {\n  color: gray;\n}\n\n.spot-bar {\n  cursor: pointer;\n}\n\n.spot-bar > rect:hover {\n  opacity: 0.5;\n}\n\n.spot-labels {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1yZXN1bHRzL2t3cy1jaGFydC9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHRhc2stcmVzdWx0c1xca3dzLWNoYXJ0XFxrd3MtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stcmVzdWx0cy9rd3MtY2hhcnQva3dzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBR0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcmVzdWx0cy9rd3MtY2hhcnQva3dzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIC5rd3MtY2hhcnQge1xyXG4ud3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5heGlzIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxufVxyXG5cclxuLnNwb3QtbGFiZWwge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zcG90LWJhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zcG90LWJhciA+IHJlY3Q6aG92ZXIge1xyXG4gICAgLy8gZmlsbDogcmdiKDEyOCwgMjU1LCAyNTUpO1xyXG4gICAgLy8gZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc3BvdC1sYWJlbHMge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYXhpcyB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5zcG90LWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zcG90LWJhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwb3QtYmFyID4gcmVjdDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnNwb3QtbGFiZWxzIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/task-results/kws-chart/kws-chart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/task-results/kws-chart/kws-chart.component.ts ***!
    \***************************************************************/

  /*! exports provided: KwsChartComponent */

  /***/
  function srcAppTaskResultsKwsChartKwsChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsChartComponent", function () {
      return KwsChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/audio */
    "./src/app/core/audio/index.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");
    /* harmony import */


    var src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/logger/logger.service */
    "./src/app/core/logger/logger.service.ts");

    var RIGHT_MOUSE_BTN = 2; // secondary button

    var SPOT_BAR_BODY_NTH_CHILD = 1;
    var SPOT_BAR_BORDER_NTH_CHILD = 2;

    var KwsChartComponent =
    /*#__PURE__*/
    function () {
      function KwsChartComponent(kwsTaskStore, kwsAudioData, hostRef, ngZone, changeDetectorRef, logger) {
        var _this12 = this;

        _classCallCheck(this, KwsChartComponent);

        this.kwsTaskStore = kwsTaskStore;
        this.kwsAudioData = kwsAudioData;
        this.hostRef = hostRef;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.logger = logger; // -------------------------------config-----------------------------------

        this.margin = {
          top: 0,
          right: 0,
          bottom: 50,
          left: 0
        };
        this.idleDelay = 350; // zoomTransitionDuration = 750;

        this.viewUpdateDuration = 750;
        this.spotLabelFontSize = 15;
        this.spotLabelY = 50;
        this.spotBarY = 40;
        this.spotBarHeight = 15;
        this.spotBarBodyColor = 'lightgray'; // '#52d1cd';

        this.spotBarBorderColor = 'gray';
        this.spotBarBorderWidth = 2;
        this.spotLabelVisibilityThreshold = 500000;
        this.minBrushWidth = 50;
        this.numTicks = 7;
        this.minXDomainSize = 10000 * 10;
        this.maxZoomLevel = 4;
        this.domainShrink = 3;
        this.taskId = '';
        this.items = []; // @Input() audioSamples: number[] = [];
        // @Input() set domain(value: [number, number]) {
        //     this.xDomain = value;
        // }
        // @Input() audioSampleRate: number;

        this.clickedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // ---------------------------------state-------------------------------------

        this.firstDraw = true;
        this.loading = true;
        this.zoomLevel = 0;
        this.spotLabelVisible = false; //    x2: d3.ScaleLinear<number, number>;
        //    y2: d3.ScaleLinear<number, number>;

        this.xDomain = [0, 100000];
        this.yDomain = [0, 100];

        this.getKeywordCandidateLabel = function (kwc) {
          return _this12.spotLabelVisible ? kwc.keyword : '';
        }; // DEBUG


        var w = window;
        w.chart = this;
        this.changeDetectorRef.detach();
        this.xScaleTime = d3__WEBPACK_IMPORTED_MODULE_5__["scaleTime"]();
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]();
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]();
        this.brush = d3__WEBPACK_IMPORTED_MODULE_5__["brushX"]().on('end', function () {
          return _this12.brushEnded();
        });
      }

      _createClass(KwsChartComponent, [{
        key: "ngOnChanges",
        // ngAfterViewChecked() {
        //     console.log('spot-chart view checked')
        // }
        value: function ngOnChanges(changes) {
          if (changes.taskId) {
            var results = this.kwsTaskStore.getTaskResults(this.taskId);

            if (results) {
              this.items = results.candidates;
            }
          }

          if (!this.xScale) {
            return;
          }

          if (this.firstDraw) {
            this.build();
            this.firstDraw = false;
          }

          this.updateData();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          var _this13 = this;

          if (this.svgRef === undefined) {
            throw new Error('svgRef is undefined');
          }

          var svg = this.svgRef.nativeElement; // this.xAxis = d3.axisBottom(this.xScale);

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return _this13.loading = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (event) {
            console.log('resize event', event); // this.ngZone.runOutsideAngular(() => {

            _this13.onResize(); // });


            setTimeout(function () {
              _this13.loading = false; // this.changeDetectionRef.markForCheck();
            }, 0);
          }); // this.ngZone.runOutsideAngular(() => {

          this.setupInput(); // });
          // zoom
          // d3.select(this.svgRef.nativeElement).call(this.zoom);
        }
      }, {
        key: "setupInput",
        value: function setupInput() {
          var _this14 = this;

          // if (this.svgRef === undefined) {
          //     throw new Error('svgRef is undefined');
          // }
          // new EventListenerOptions()
          this.svgRef.nativeElement.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            return false;
          });
          var click$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'click');
          var dblclick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'dblclick');
          var mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'mousedown');
          var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'mousemove');
          var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'mouseup');
          var mouseLeave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.svgRef.nativeElement, 'mouseleave'); // pan

          mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (e) {
            console.log("button: ".concat(e.button), e);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
            return e.button === RIGHT_MOUSE_BTN;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseLeave$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (res) {
            var shiftX = -(_this14.xScale.invert(res[1].clientX - res[0].clientX) - _this14.xScale.invert(0));

            _this14.shiftDomain(shiftX);
          });
          click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (event) {
            if (event.target instanceof SVGElement) {
              var target = event.target;

              if (target.classList.contains('overlay')) {// this.zoomIn(event.pageX);
              } else if ('__data__' in target) {
                var data = event.target.__data__;

                if (typeof data.timeFrom === 'number') {
                  _this14.clickedItem.emit(data);
                }
              }
            }
          });
          dblclick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (event) {
            if (event.target instanceof SVGElement) {
              var target = event.target;

              if (target.classList.contains('overlay')) {// this.resetZoom();
              }
            }
          }); // defer(() => of(doSomethingSync()));
          // this.dragSub = fromEvent(this.svgRef.nativeElement, 'dragstart').pipe(
        }
      }, {
        key: "onResize",
        value: function onResize() {
          // this.hostWidth = this.svgRef.nativeElement.clientWidth;
          // this.hostHeight = this.svgRef.nativeElement.clientHeight;
          if (!this.items) {
            return;
          }

          this.build();
          this.updateData();
        }
      }, {
        key: "build",
        value: function build() {
          // if (this.svgRef === undefined) {
          //     throw new Error('svgRef is undefined');
          // }
          var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this.svgRef.nativeElement);
          var svgEl = svg.node();

          if (svgEl === null || svgEl.parentElement === null) {
            return;
          }

          var margin = this.margin;
          var x = this.xScale;
          var y = this.yScale; // const xAxis = this.xAxis;
          // x ... 100us - unit of time

          console.log('drawing spot chart', this.items);
          svg.attr('width', 0).attr('height', 0);

          var _svgEl$parentElement$ = svgEl.parentElement.getBoundingClientRect(),
              fullWidth = _svgEl$parentElement$.width,
              fullHeight = _svgEl$parentElement$.height;

          svgEl.innerHTML = '';
          svg.attr('width', fullWidth).attr('height', fullHeight);
          var width = fullWidth - margin.left - margin.right;
          var height = fullHeight - margin.top - margin.bottom;
          svg.append('defs').append('svg:clipPath').attr('id', 'clip').append('svg:rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0);
          this.brush.extent([[margin.left, margin.top], [fullWidth - margin.right, fullHeight - margin.bottom]]); // this.ngZone.runOutsideAngular(() => {

          svg.append('g').attr('class', 'brush').call(this.brush); // });

          var g = svg.append('g').attr('class', 'focus').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")")).style('user-select', 'none');
          x.domain(this.xDomain).range([0, width]);
          y.domain(this.yDomain).range([height, 0]);
          this.xScaleTime.range(x.range());
          this.updateTimeScale(); // TODO: move to ctor  (try to set scale)
          // this.xAxis.scale(,)

          this.xAxis = d3__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.xScaleTime).tickFormat(this.xAxisFormat());
          svg.append('g').attr('class', 'axis axis--x').attr('transform', "translate(0,".concat(height, ")")).call(this.xAxis);
          g.append('g').attr('class', 'spot-labels');
          g.append('g').attr('class', 'spot-bars');
        }
      }, {
        key: "brushEnded",
        value: function brushEnded() {
          var _this15 = this;

          // if (this.svgRef === undefined) {
          //     throw new Error('svgRef is undefined');
          // }
          console.log('brushended');
          var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this.svgRef.nativeElement);
          var s = d3__WEBPACK_IMPORTED_MODULE_5__["event"].selection;

          if (!s) {
            if (!this.idleTimeout) {
              return this.idleTimeout = setTimeout(function () {
                return _this15.clearIdleTimeout();
              }, this.idleDelay);
            }

            this.xScale.domain(this.xDomain);
          } else {
            if (Math.abs(s[1] - s[0]) >= this.minBrushWidth) {
              this.xScale.domain([s[0], s[1]].map(this.xScale.invert, this.xScale));
            }

            svg.select('.brush').call(this.brush.move, null);
          }

          this.updateView(this.viewUpdateDuration);
        }
        /**
         * maybe updateElements is more appropriate
         *
         *  */

      }, {
        key: "updateData",
        value: function updateData() {
          var _this16 = this;

          var x = this.xScale;
          var oldX = x.copy();
          var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this.svgRef.nativeElement);
          var barYScaled = this.yScale(this.spotBarY);
          var barHeightScaled = Math.abs(this.yScale(this.spotBarHeight) - this.yScale(0));
          var labelYScaled = this.yScale(this.spotLabelY);
          var t = d3__WEBPACK_IMPORTED_MODULE_5__["transition"]().duration(750);
          x.domain(this.xDomain);
          this.updateTimeScale();
          this.xAxis.ticks(Math.min(this.numTicks, this.items.length));
          svg.select('.axis--x').transition(t).call(this.xAxis);

          var reverseSpots = _toConsumableArray(this.items).reverse();

          var bars = svg.select('.spot-bars');
          var labels = svg.select('.spot-labels').style('opacity', 0.0);
          bars = bars.selectAll('.spot-bar').data(reverseSpots, function (d) {
            return d;
          }).join(function (enter) {
            return enter.append('g').attr('class', 'spot-bar').attr('transform', function (d) {
              return "translate(".concat(oldX(d.timeFrom), ",").concat(barYScaled, ")");
            }).call(function (g) {
              return g.append('rect').attr('width', function (d) {
                return x(d.timeTo) - x(d.timeFrom);
              }).attr('height', barHeightScaled).attr('fill', _this16.spotBarBodyColor);
            }).call(function (g) {
              return g.append('rect').attr('width', _this16.spotBarBorderWidth).attr('height', barHeightScaled).attr('fill', _this16.spotBarBorderColor);
            });
          }, // .attr('transform-origin', '50% 0')
          // .attr('x', d => oldX(d.timeFrom))
          // .attr('width', d => x(d.timeTo) - x(d.timeFrom))
          // .attr('y', barYScaled)
          function (update) {
            return update;
          }, function (exit) {
            return exit.classed('exit', true).call(function (s) {
              return s.transition(t).attr('transform', function (d) {
                return "translate(".concat(x(d.timeFrom), ",").concat(barYScaled, ")");
              }).call(function (g) {
                return g.select(":nth-child(".concat(SPOT_BAR_BODY_NTH_CHILD, ")")).attr('fill', 'red');
              }).remove();
            });
          });
          labels = labels.selectAll('.spot-label').data(reverseSpots, function (d) {
            return d;
          }).join(function (enter) {
            return enter.append('text').attr('class', 'spot-label').text(function (d) {
              return d.keyword;
            }).attr('transform', function (d) {
              return "translate(".concat(oldX(d.timeTo), ",").concat(labelYScaled, ")");
            }).attr('font-size', _this16.spotLabelFontSize);
          }, // .attr('x', 8)
          function (update) {
            return update.text(function (d) {
              return d.keyword;
            });
          }, function (exit) {
            return exit.classed('exit', true).call(function (s) {
              return s.transition(t).attr('x', function (d) {
                return x(d.timeFrom);
              }).remove();
            });
          }); // .filter(':not(.exiting)')
          // const spotLabels = svg.select('.spot-labels').selectAll('text').data(this.spots) as any;

          var spotLabelYScaled = this.yScale(this.spotLabelY); // .filter(':not(.exit)')

          this.updateView(this.viewUpdateDuration, bars, labels); // .transition(t)
          // .attr('transform', d => `translate(${x(d.timeTo)},${spotLabelYScaled})`);
        }
      }, {
        key: "updateView",
        value: function updateView() {
          var _this17 = this;

          var transitionDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var spotBars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var spotLabels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this.svgRef.nativeElement);
          var focus = svg.select('.focus');
          var x = this.xScale;
          var xDomain = x.domain();
          var xDomainSize = this.xDomainSize; // Math.abs(xDomain[1] - xDomain[0]);

          if (xDomainSize < this.minXDomainSize) {
            var domainPad = (this.minXDomainSize - xDomainSize) * 0.5;
            x.domain([xDomain[0] - domainPad, xDomain[1] + domainPad]);
          }

          this.updateTimeScale(); // const barYScaled = this.yScale(this.spotBarY);
          // const spotBarHeightScaled = Math.abs(this.yScale(this.spotBarHeight) - this.yScale(0));

          var spotLabelYScaled = this.yScale(this.spotLabelY);
          var barYScaled = this.yScale(this.spotBarY); // move axis

          var t = d3__WEBPACK_IMPORTED_MODULE_5__["transition"]().duration(transitionDuration);
          var xAxisSel = svg.select('.axis--x');
          xAxisSel.transition(t).call(this.xAxis); // move data

          spotBars = spotBars || focus.select('.spot-bars').selectAll('.spot-bar');
          spotLabels = spotLabels || focus.select('.spot-labels').selectAll('.spot-label');
          spotBars.transition(t).attr('transform', function (d) {
            return "translate(".concat(x(d.timeFrom), ",").concat(barYScaled, ")");
          }).call(function (g) {
            return g.select(":nth-child(".concat(SPOT_BAR_BODY_NTH_CHILD, ")")).attr('width', function (d) {
              return x(d.timeTo) - x(d.timeFrom);
            });
          }); // .call(g => g.select(':nth-child(2)').attr('width', d => x(d.timeTo) - x(d.timeFrom)));
          // .attr('x', (d) => x(d.timeFrom))
          // .attr('width', (d) => x(d.timeTo) - x(d.timeFrom));

          spotLabels.transition(t).attr('transform', function (d) {
            return "translate(".concat(x(d.timeFrom), ",").concat(spotLabelYScaled, ")");
          }); // labels visibility

          this.spotLabelVisible = xDomainSize <= this.spotLabelVisibilityThreshold ? true : false;
          console.log('spotLableVisible:', this.spotLabelVisible);
          console.log('domainX: ', x.domain());
          focus.select('.spot-labels').transition(t).style('opacity', function () {
            return _this17.spotLabelVisible ? 1.0 : 0.0;
          }); // .attr('x', (d) => x(d.timeFrom))
          // .call(s => s.select('text')
          //         .text(this.getSpotLabel))
          // .call(s => s.select('rect')
          //         .transition(t)
          //         .attr('width', (d) => x(d.timeTo) - x(d.timeFrom)))
          // .transition(t)
          // .attr('trasform', d => `translate(${x(d.timeFrom)},${barYScaled})`);
          // TODO: smaller secondary ticks
          // xAxisSel.selectAll('.tick').select('text').nodes().forEach((el: SVGTextElement) => {
          //     el.style.fontWeight = 'bold';
          // })

          xAxisSel.selectAll('.tick').select('text').filter(function (_, i, g) {
            return g[i].innerHTML.includes('m');
          }).select(function (_, i, g) {
            return g[i].parentNode;
          }).call(function (g) {
            return g.select('line').attr('y1', -50);
          }).call(function (g) {
            return g.select('text').style('font-weight', 'bold');
          });
        }
      }, {
        key: "clearIdleTimeout",
        value: function clearIdleTimeout() {
          this.idleTimeout = null;
        }
      }, {
        key: "shiftDomain",
        value: function shiftDomain(sx) {
          this.xScale.domain(this.xScale.domain().map(function (x) {
            return x + sx;
          }));
          this.updateView(0);
        }
      }, {
        key: "updateTimeScale",
        value: function updateTimeScale() {
          this.xScaleTime.domain(this.xScale.domain().map(function (x) {
            return new Date(0.1 * x);
          }));
        }
      }, {
        key: "xAxisFormat",
        value: function xAxisFormat() {
          var formatMillisecond = function formatMillisecond() {
            return '';
          }; // d3.timeFormat('%Lms');


          var formatSecond = d3__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]('%-Ss');
          var formatMinute = d3__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]('%-Hh %-Mm');
          var formatHour = d3__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]('%-Hh'); // Define filter conditions

          return function multiFormat(date) {
            return (d3__WEBPACK_IMPORTED_MODULE_5__["timeSecond"](date) < date ? formatMillisecond : d3__WEBPACK_IMPORTED_MODULE_5__["timeMinute"](date) < date ? formatSecond : d3__WEBPACK_IMPORTED_MODULE_5__["timeHour"](date) < date ? formatMinute : formatHour)(date);
          };
        }
      }, {
        key: "zoomIn",
        value: function zoomIn(x) {
          this.zoomLevel++;

          if (this.zoomLevel > this.maxZoomLevel) {
            this.resetZoom();
            return;
          }

          console.log('zoom', this.zoomLevel);
          this.zoom(x, 1);
        }
      }, {
        key: "zoom",
        value: function zoom(x, deltaScale) {
          // if (level < 0) {
          //     throw new RangeError('level is out of valid range');
          // }
          var _this$svgRef$nativeEl = this.svgRef.nativeElement.getBoundingClientRect(),
              left = _this$svgRef$nativeEl.left;

          var originX = this.xScale.invert(x - left);
          var halfNewXDomainSize = 0.5 * this.xDomainSize / this.domainShrink;
          this.xScale.domain([originX - halfNewXDomainSize, originX + halfNewXDomainSize]);
          console.log('originX', originX); // this.xDomain[0] + this.domainExtensionPerZoomLevel

          this.updateView(this.viewUpdateDuration);
        }
      }, {
        key: "resetZoom",
        value: function resetZoom() {
          this.zoomLevel = 0;
          this.xScale.domain(this.xDomain);
          this.updateView(this.viewUpdateDuration);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy.next();

          this._destroy.complete();
        }
      }, {
        key: "isOverlay",
        value: function isOverlay(elem) {
          if (elem instanceof SVGElement) {
            return elem.classList.contains('overlay');
          }

          return false;
        }
      }, {
        key: "getContainerDims",
        value: function getContainerDims() {
          var width;
          var height;
          var hostElem = this.hostRef.nativeElement;

          if (hostElem.parentNode !== null) {
            // Get the container dimensions
            var dims = hostElem.parentNode.getBoundingClientRect();
            width = dims.width;
            height = dims.height;
          }

          if (width && height) {
            return {
              width: width,
              height: height
            };
          }

          return null;
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log(message);
        }
      }, {
        key: "logError",
        value: function logError(message) {
          this.logger.logError(message);
        }
      }, {
        key: "runChangeDetection",
        get: function get() {
          console.log('spot-chart: runChangeDetection');
          return true;
        }
      }, {
        key: "xDomainSize",
        get: function get() {
          var xDomain = this.xScale.domain();
          return Math.abs(xDomain[1] - xDomain[0]);
        }
      }]);

      return KwsChartComponent;
    }();

    KwsChartComponent.ctorParameters = function () {
      return [{
        type: src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__["KwsTasksStoreService"]
      }, {
        type: src_app_core_audio__WEBPACK_IMPORTED_MODULE_4__["KwsAudioDataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], KwsChartComponent.prototype, "svgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], KwsChartComponent.prototype, "taskId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], KwsChartComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], KwsChartComponent.prototype, "clickedItem", void 0);
    KwsChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kws-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kws-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-chart/kws-chart.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kws-chart.component.scss */
      "./src/app/task-results/kws-chart/kws-chart.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_6__["KwsTasksStoreService"], src_app_core_audio__WEBPACK_IMPORTED_MODULE_4__["KwsAudioDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])], KwsChartComponent);
    /***/
  },

  /***/
  "./src/app/task-results/kws-table/kws-table.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/task-results/kws-table/kws-table.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskResultsKwsTableKwsTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "pbl-ngrid.max-row-height-42 .pbl-ngrid-row {\n  max-height: 42px !important;\n}\n\npbl-ngrid.min-row-height-32 .pbl-ngrid-row {\n  min-height: 32px !important;\n}\n\npbl-ngrid.pbl-ngrid-header-row {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1yZXN1bHRzL2t3cy10YWJsZS9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHRhc2stcmVzdWx0c1xca3dzLXRhYmxlXFxrd3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stcmVzdWx0cy9rd3MtdGFibGUva3dzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFzay1yZXN1bHRzL2t3cy10YWJsZS9rd3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYmwtbmdyaWQubWF4LXJvdy1oZWlnaHQtNDIgLnBibC1uZ3JpZC1yb3cge1xyXG4gICAgbWF4LWhlaWdodDogNDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wYmwtbmdyaWQubWluLXJvdy1oZWlnaHQtMzIgLnBibC1uZ3JpZC1yb3cge1xyXG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wYmwtbmdyaWQucGJsLW5ncmlkLWhlYWRlci1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJwYmwtbmdyaWQubWF4LXJvdy1oZWlnaHQtNDIgLnBibC1uZ3JpZC1yb3cge1xuICBtYXgtaGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG5cbnBibC1uZ3JpZC5taW4tcm93LWhlaWdodC0zMiAucGJsLW5ncmlkLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblxucGJsLW5ncmlkLnBibC1uZ3JpZC1oZWFkZXItcm93IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/task-results/kws-table/kws-table.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/task-results/kws-table/kws-table.component.ts ***!
    \***************************************************************/

  /*! exports provided: KwsTableComponent */

  /***/
  function srcAppTaskResultsKwsTableKwsTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsTableComponent", function () {
      return KwsTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pebula_ngrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @pebula/ngrid */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid.js");
    /* harmony import */


    var src_app_core_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/audio */
    "./src/app/core/audio/index.ts");
    /* harmony import */


    var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/utils */
    "./src/app/shared/utils/index.ts");
    /* harmony import */


    var src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");
    /* harmony import */


    var src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/logger/logger.service */
    "./src/app/core/logger/logger.service.ts");

    var TIME_MS_TO_STRING = function TIME_MS_TO_STRING(time) {
      return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__["time100usToString"])(time * 10);
    };

    var COUNTRY_GETTER = {
      currency: function currency(row) {
        return COUNTRY_GETTER.data.countries[row.country].currencies[0];
      },
      name: function name(row) {
        return COUNTRY_GETTER.flag(row) + ' ' + COUNTRY_GETTER.data.countries[row.country].name;
      },
      flag: function flag(row) {
        return COUNTRY_GETTER.data.countries[row.country].emoji;
      },
      data: undefined
    };

    var progressBarStyle = function progressBarStyle(value) {
      if (value > 90) {
        return {
          color: 'white',
          background: 'darkgray'
        };
      }

      if (value >= 40 && value <= 90) {
        return {
          color: 'white',
          background: 'lightgray'
        };
      }

      return {
        color: 'black',
        background: 'red'
      };
    };

    var COLUMNS = Object(_pebula_ngrid__WEBPACK_IMPORTED_MODULE_2__["columnFactory"])().default({
      width: '150px',
      reorder: true,
      resize: true
    }).table( // tslint:disable-next-line: max-line-length
    // { prop: 'drag_and_drop_handle', type: 'drag_and_drop_handle', minWidth: 24, width: '', maxWidth: 24, wontBudge: true, resize: false, },
    {
      prop: 'id',
      sort: true,
      width: '50px',
      wontBudge: true,
      pIndex: true
    }, {
      prop: 'filename',
      width: '300px',
      sort: true
    }, {
      prop: 'keyword',
      sort: true
    }, {
      prop: 'filler',
      sort: true
    }, // { prop: 'score', headerType: 'country', type: { name: 'countryNameDynamic', data: COUNTRY_GETTER }, width: '150px' },
    {
      prop: 'timeFrom',
      sort: true,
      transform: TIME_MS_TO_STRING
    }, {
      prop: 'timeTo',
      sort: true,
      transform: TIME_MS_TO_STRING
    }, // { prop: 'rating', type: 'starRatings', width: '120px' },
    {
      prop: 'score',
      sort: true,
      type: {
        name: 'progressBar',
        data: {
          style: progressBarStyle
        }
      },
      width: '100px'
    }, {
      prop: 'selection',
      minWidth: 48,
      width: '',
      maxWidth: 48,
      wontBudge: true,
      resize: false
    }).header({
      rowClassName: 'pbl-groupby-row'
    }, {
      id: 'pbl-groupby-row',
      type: 'pbl-groupby-row',
      label: ' '
    });

    var KwsTableComponent =
    /*#__PURE__*/
    function () {
      /**
       *
       *
       */
      function KwsTableComponent(kwsAudioData, kwsTasksStore, logger) {
        var _this18 = this;

        _classCallCheck(this, KwsTableComponent);

        this.kwsAudioData = kwsAudioData;
        this.kwsTasksStore = kwsTasksStore;
        this.logger = logger;
        this.dataSource = Object(_pebula_ngrid__WEBPACK_IMPORTED_MODULE_2__["createDS"])().onTrigger(function (event) {
          if (_this18.taskId) {
            var results = _this18.kwsTasksStore.getTaskResults(_this18.taskId);

            if (results) {
              return results.candidates;
            }
          }

          return [];
        }).create();
        this.columns = COLUMNS.build(); // ds.getCountries().then( c => COUNTRY_GETTER.data = c );
      }

      _createClass(KwsTableComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.taskId) {
            this.refresh();
          }
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.dataSource.refresh();
        }
      }, {
        key: "dropped",
        value: function dropped(e) {
          console.log(e);
        }
      }, {
        key: "onClickEvents",
        value: function onClickEvents(event) {
          var cellSuffix = '';

          if (isCellEvent(event)) {
            cellSuffix = "  CELL: ".concat(event.colIndex);
          } else {
            if (event.root) {
              cellSuffix = " [Bubbled from CELL: ".concat(event.root.colIndex, "]");
            }
          }

          var targetItem = this.dataSource.renderedData[event.rowIndex]; // TODO: use filename as key or compute index range when reading and assing it a key in hashmap

          this.kwsAudioData.playSlice(targetItem.filename, targetItem.timeFrom, targetItem.timeTo);
          this.log("CLICK EVENT at ROW: ".concat(event.rowIndex).concat(cellSuffix, "\nType: ").concat(event.type, "\nSubType: ").concat(event.subType));
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log("KwsTableComponent: ".concat(message));
        }
      }, {
        key: "runChangeDetection",
        get: function get() {
          this.log('running change detection');
          return true;
        }
      }]);

      return KwsTableComponent;
    }();

    KwsTableComponent.ctorParameters = function () {
      return [{
        type: src_app_core_audio__WEBPACK_IMPORTED_MODULE_3__["KwsAudioDataService"]
      }, {
        type: src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__["KwsTasksStoreService"]
      }, {
        type: src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], KwsTableComponent.prototype, "taskId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pebula_ngrid__WEBPACK_IMPORTED_MODULE_2__["PblNgridComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], KwsTableComponent.prototype, "table", void 0);
    KwsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kws-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kws-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/kws-table/kws-table.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kws-table.component.scss */
      "./src/app/task-results/kws-table/kws-table.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_audio__WEBPACK_IMPORTED_MODULE_3__["KwsAudioDataService"], src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__["KwsTasksStoreService"], src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], KwsTableComponent);

    function isCellEvent(event) {
      return !!event.cellTarget;
    }
    /***/

  },

  /***/
  "./src/app/task-results/task-results.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/task-results/task-results.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskResultsTaskResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  display: grid;\n  grid-template-rows: 20px 4fr 0px 1fr;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1yZXN1bHRzL0M6XFxfX2RhdGFfX1xcX19wcm9qZWN0c1xcdHNcXGt3cy11aS1uZ3JpZC1tYXRlcmlhbC9zcmNcXGFwcFxcdGFzay1yZXN1bHRzXFx0YXNrLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stcmVzdWx0cy90YXNrLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsdUJBQUE7RUFFQSxhQUFBO0VBQ0Esb0NBQUE7RUFHQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvdGFzay1yZXN1bHRzL3Rhc2stcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggNGZyIDBweCAxZnI7XHJcbiAgICAvLyBncmlkLWdhcDogMTBweCAxMHB4O1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggNGZyIDBweCAxZnI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/task-results/task-results.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/task-results/task-results.component.ts ***!
    \********************************************************/

  /*! exports provided: TaskResultsComponent */

  /***/
  function srcAppTaskResultsTaskResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskResultsComponent", function () {
      return TaskResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/audio */
    "./src/app/core/audio/index.ts");

    var TaskResultsComponent =
    /*#__PURE__*/
    function () {
      function TaskResultsComponent(route, audioData) {
        _classCallCheck(this, TaskResultsComponent);

        this.route = route;
        this.audioData = audioData;
        this.taskId = '';
      }

      _createClass(TaskResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.taskId = this.route.snapshot.params.id;
          this.audioData.loadTaskData(this.taskId);
          console.log(this.taskId);
        }
      }]);

      return TaskResultsComponent;
    }();

    TaskResultsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _core_audio__WEBPACK_IMPORTED_MODULE_3__["KwsAudioDataService"]
      }];
    };

    TaskResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-results/task-results.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-results.component.scss */
      "./src/app/task-results/task-results.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_audio__WEBPACK_IMPORTED_MODULE_3__["KwsAudioDataService"]])], TaskResultsComponent);
    /***/
  },

  /***/
  "./src/app/task-results/task-results.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/task-results/task-results.module.ts ***!
    \*****************************************************/

  /*! exports provided: TaskResultsModule */

  /***/
  function srcAppTaskResultsTaskResultsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskResultsModule", function () {
      return TaskResultsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../custom-material.module */
    "./src/app/custom-material.module.ts");
    /* harmony import */


    var _pebula_ngrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @pebula/ngrid */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid.js");
    /* harmony import */


    var _pebula_ngrid_drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @pebula/ngrid/drag */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-drag.js");
    /* harmony import */


    var _pebula_ngrid_target_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @pebula/ngrid/target-events */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-target-events.js");
    /* harmony import */


    var _pebula_ngrid_transpose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @pebula/ngrid/transpose */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-transpose.js");
    /* harmony import */


    var _pebula_ngrid_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @pebula/ngrid/block-ui */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-block-ui.js");
    /* harmony import */


    var _pebula_ngrid_detail_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @pebula/ngrid/detail-row */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-detail-row.js");
    /* harmony import */


    var _pebula_ngrid_sticky__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @pebula/ngrid/sticky */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-sticky.js");
    /* harmony import */


    var _pebula_ngrid_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @pebula/ngrid/state */
    "./node_modules/@pebula/ngrid/fesm2015/pebula-ngrid-state.js");
    /* harmony import */


    var _pebula_ngrid_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @pebula/ngrid-material */
    "./node_modules/@pebula/ngrid-material/fesm2015/pebula-ngrid-material.js");
    /* harmony import */


    var _kws_table_kws_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./kws-table/kws-table.component */
    "./src/app/task-results/kws-table/kws-table.component.ts");
    /* harmony import */


    var _shared_common_table_templates_common_table_templates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/common-table-templates/common-table-templates.component */
    "./src/app/shared/common-table-templates/common-table-templates.component.ts");
    /* harmony import */


    var _audio_events_chart_audio_event_audio_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./audio-events-chart/audio-event/audio-event.component */
    "./src/app/task-results/audio-events-chart/audio-event/audio-event.component.ts");
    /* harmony import */


    var _audio_events_chart_time_axis_time_axis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./audio-events-chart/time-axis/time-axis.component */
    "./src/app/task-results/audio-events-chart/time-axis/time-axis.component.ts");
    /* harmony import */


    var _task_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./task-results.component */
    "./src/app/task-results/task-results.component.ts");
    /* harmony import */


    var _task_results_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./task-results.routes */
    "./src/app/task-results/task-results.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kws_chart_kws_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./kws-chart/kws-chart.component */
    "./src/app/task-results/kws-chart/kws-chart.component.ts"); // NGRID
    // import { AudioEventsChartComponent } from './audio-events-chart/audio-events-chart.component';


    var TaskResultsModule = function TaskResultsModule() {
      _classCallCheck(this, TaskResultsModule);
    };

    TaskResultsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_kws_table_kws_table_component__WEBPACK_IMPORTED_MODULE_13__["KwsTableComponent"], // AudioEventsChartComponent,
      _audio_events_chart_audio_event_audio_event_component__WEBPACK_IMPORTED_MODULE_15__["AudioEventComponent"], _audio_events_chart_time_axis_time_axis_component__WEBPACK_IMPORTED_MODULE_16__["TimeAxisComponent"], _task_results_component__WEBPACK_IMPORTED_MODULE_17__["TaskResultsComponent"], _shared_common_table_templates_common_table_templates_component__WEBPACK_IMPORTED_MODULE_14__["CommonTableTemplatesComponent"], _kws_chart_kws_chart_component__WEBPACK_IMPORTED_MODULE_20__["KwsChartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forChild(_task_results_routes__WEBPACK_IMPORTED_MODULE_18__["TASK_RESULTS_ROUTES"]), _pebula_ngrid__WEBPACK_IMPORTED_MODULE_4__["PblNgridModule"].withCommon([{
        component: _shared_common_table_templates_common_table_templates_component__WEBPACK_IMPORTED_MODULE_14__["CommonTableTemplatesComponent"]
      }]), _pebula_ngrid_drag__WEBPACK_IMPORTED_MODULE_5__["PblNgridDragModule"].withDefaultTemplates(), _pebula_ngrid_target_events__WEBPACK_IMPORTED_MODULE_6__["PblNgridTargetEventsModule"], _pebula_ngrid_block_ui__WEBPACK_IMPORTED_MODULE_8__["PblNgridBlockUiModule"], _pebula_ngrid_transpose__WEBPACK_IMPORTED_MODULE_7__["PblNgridTransposeModule"], _pebula_ngrid_detail_row__WEBPACK_IMPORTED_MODULE_9__["PblNgridDetailRowModule"], _pebula_ngrid_sticky__WEBPACK_IMPORTED_MODULE_10__["PblNgridStickyModule"], _pebula_ngrid_state__WEBPACK_IMPORTED_MODULE_11__["PblNgridStatePluginModule"], _pebula_ngrid_material__WEBPACK_IMPORTED_MODULE_12__["PblNgridMaterialModule"]]
    })], TaskResultsModule);
    /***/
  },

  /***/
  "./src/app/task-results/task-results.routes.ts":
  /*!*****************************************************!*\
    !*** ./src/app/task-results/task-results.routes.ts ***!
    \*****************************************************/

  /*! exports provided: TASK_RESULTS_ROUTES */

  /***/
  function srcAppTaskResultsTaskResultsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASK_RESULTS_ROUTES", function () {
      return TASK_RESULTS_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _task_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task-results.component */
    "./src/app/task-results/task-results.component.ts");
    /* harmony import */


    var _tasklist_task_exists_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tasklist/task-exists.guard */
    "./src/app/tasklist/task-exists.guard.ts");

    var TASK_RESULTS_ROUTES = [{
      path: 'task-results/:id',
      component: _task_results_component__WEBPACK_IMPORTED_MODULE_1__["TaskResultsComponent"],
      canActivate: [_tasklist_task_exists_guard__WEBPACK_IMPORTED_MODULE_2__["TaskExistsGuard"]]
    }];
    /***/
  },

  /***/
  "./src/app/task-submission/task-submission.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/task-submission/task-submission.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskSubmissionTaskSubmissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  margin: 100px 150px;\n  display: block;\n}\n\n.file-picker-field {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.file-picker-field > *:first-child {\n  flex-basis: 300px;\n}\n\n.file-picker-field > *:last-child {\n  padding-left: 50px;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.form-section {\n  padding-top: 40px;\n}\n\n.task-form-card {\n  padding: 50px 100px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\nbutton.ng-invalid.ng-touched {\n  color: red;\n}\n\n.ml-btn {\n  margin-left: 20px;\n}\n\n.form-field {\n  margin-left: 30px;\n}\n\n#advanced-settings-panel {\n  min-width: 400px;\n  max-width: 400px;\n  width: 100%;\n}\n\n.advanced-settings-field {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: baseline;\n  justify-content: space-around;\n}\n\n.opacity-transition {\n  transition: opacity 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1zdWJtaXNzaW9uL0M6XFxfX2RhdGFfX1xcX19wcm9qZWN0c1xcdHNcXGt3cy11aS1uZ3JpZC1tYXRlcmlhbC9zcmNcXGFwcFxcdGFzay1zdWJtaXNzaW9uXFx0YXNrLXN1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stc3VibWlzc2lvbi90YXNrLXN1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFSTtFQUNJLGlCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUVJLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FEUUE7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0xKOztBRGNBO0VBQ0ksb0NBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stc3VibWlzc2lvbi90YXNrLXN1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtYXJnaW46IDEwMHB4IDE1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5maWxlLXBpY2tlci1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRhc2stZm9ybS1jYXJkIHtcclxuICAgIC8vIG1hcmdpbjogMTVweCAzMHB4O1xyXG4gICAgcGFkZGluZzogNTBweCAxMDBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTEwcHhcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5idXR0b24ubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGNvbG9yOiByZWQ7IFxyXG59XHJcblxyXG4ubWwtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuI2FkdmFuY2VkLXNldHRpbmdzLXBhbmVsIHtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hZHZhbmNlZC1zZXR0aW5ncy1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi8vIC5pbnB1dC1oZWFkbGluZSB7XHJcbi8vICAgICBmb250LXNpemU6IDI4cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIH1cclxuXHJcbi5vcGFjaXR5LXRyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIG1hcmdpbjogMTAwcHggMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmlsZS1waWNrZXItZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5maWxlLXBpY2tlci1maWVsZCA+ICo6Zmlyc3QtY2hpbGQge1xuICBmbGV4LWJhc2lzOiAzMDBweDtcbn1cbi5maWxlLXBpY2tlci1maWVsZCA+ICo6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4udGFzay1mb3JtLWNhcmQge1xuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmJ1dHRvbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWwtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbiNhZHZhbmNlZC1zZXR0aW5ncy1wYW5lbCB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWR2YW5jZWQtc2V0dGluZ3MtZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm9wYWNpdHktdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/task-submission/task-submission.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/task-submission/task-submission.component.ts ***!
    \**************************************************************/

  /*! exports provided: TaskSubmissionComponent */

  /***/
  function srcAppTaskSubmissionTaskSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskSubmissionComponent", function () {
      return TaskSubmissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _core_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/models */
    "./src/app/core/models/index.ts");
    /* harmony import */


    var _core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../core/kws-client/kws-client.service */
    "./src/app/core/kws-client/kws-client.service.ts");
    /* harmony import */


    var _core_kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../core/kws-client/kws-client-config.service */
    "./src/app/core/kws-client/kws-client-config.service.ts");
    /* harmony import */


    var _core_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../core/logger/logger.service */
    "./src/app/core/logger/logger.service.ts"); // import { requiredFileTypeValidator } from '../validators/file-validators';

    /*
    
        TODO:
            [] optional task name
    
            [] success message
            [] error message
            [] mat theme for file-picker error
                https://stackblitz.com/edit/angular-fdbvpa?file=src%2Fapp%2Fdialog%2Fdialog-content-example-dialog.component.ts
            []
    */


    var TaskSubmissionComponent =
    /*#__PURE__*/
    function () {
      function TaskSubmissionComponent(kwsClient, config, formBuilder, cd, dialog, logger) {
        _classCallCheck(this, TaskSubmissionComponent);

        this.kwsClient = kwsClient;
        this.config = config;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.dialog = dialog;
        this.logger = logger;
        this.panelOpenState = false;
        this.uploading = false;
        this.uploadSuccessful = false;
        this.formSubmitAttemt = false;
        this.progress = 0;
        this.uploadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this.form = this.formBuilder.group({
          name: [null],
          vocabFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          audioFiles: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          advanced: this.formBuilder.group({
            //     phonemeType: [null, Validators.required],
            numHypotheses: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pruneThreshold: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            spotThreshold: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dispThreshold: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          })
        });
        this._fileChangesSub = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        window.taskEdit = this;
      }

      _createClass(TaskSubmissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          // this.setDefaultFormValues();
          this.log('Init');
          this._fileChangesSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.form.controls.vocabFile.valueChanges, this.form.controls.audioFiles.valueChanges).subscribe(function () {
            _this19.log('File Changes');

            _this19.cd.detectChanges();
          });
        }
      }, {
        key: "setDefaultFormValues",
        value: function setDefaultFormValues() {
          this.form.patchValue({
            // language: this.languages[0],
            advanced: {
              numHypotheses: 0,
              pruneThreshold: 0,
              spotThreshold: 0,
              dispThreshold: 0
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(task) {
          var _this20 = this;

          window.task = task;
          task.vocabFile.item(0);

          if (this.uploading) {
            this.uploadSubscription.unsubscribe();
          }

          if (this.form.valid) {
            this.uploading = true;
            this.form.disable();
            this.uploadSubscription = this.kwsClient.submitTask(this.processKwsTask(task)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
              switch (event.type) {
                case _core_models__WEBPACK_IMPORTED_MODULE_6__["UploadEventType"].Progress:
                  _this20.progress = 100 * event.percentDone;

                  _this20.cd.detectChanges();

                  break;

                case _core_models__WEBPACK_IMPORTED_MODULE_6__["UploadEventType"].Response:
                  // event.body
                  // this.openSuccessDialog(); TODO: uncomment
                  break;

                default:
                  break;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              // this.openFailureDialog(); TODO: uncomment
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              // this.uploadProgress = 0;
              _this20.uploading = false;
            })).subscribe();
          }

          this.form.markAllAsTouched();
          this.cd.detectChanges();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.form.enable();
          this.form.reset();
          this.formSubmitAttemt = false;
          this.setDefaultFormValues();
        }
      }, {
        key: "processKwsTask",
        value: function processKwsTask(task) {
          if (!task.name) {
            task.name = '';
          }

          var taskCopy = Object.assign({}, task, {
            vocabFile: task.vocabFile.item(0),
            audioFiles: Array.from(task.audioFiles)
          });
          return taskCopy;
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log("TaskEditComponent: ".concat(message));
        }
      }, {
        key: "runChangeDetection",
        get: function get() {
          this.log('running change detection');
          return true;
        }
      }, {
        key: "languages",
        get: function get() {
          return this.config.languages;
        }
      }, {
        key: "selectedVocabFile",
        get: function get() {
          var fileList = this.form.controls.vocabFile.value;
          return fileList && fileList.length !== 0 ? fileList.item(0).name : null;
        }
      }, {
        key: "selectedAudioFiles",
        get: function get() {
          var fileList = this.form.controls.audioFiles.value; // console.log('running change detection', Date.now())
          // console.log(fileList)

          return fileList && fileList.length !== 0 ? Array.from(fileList) : null;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.uploading || this.uploadSuccessful;
        }
      }]);

      return TaskSubmissionComponent;
    }();

    TaskSubmissionComponent.ctorParameters = function () {
      return [{
        type: _core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_7__["KwsClientService"]
      }, {
        type: _core_kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__["KwsClientConfigService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _core_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
      }];
    };

    TaskSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-submission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-submission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-submission/task-submission.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-submission.component.scss */
      "./src/app/task-submission/task-submission.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_kws_client_kws_client_service__WEBPACK_IMPORTED_MODULE_7__["KwsClientService"], _core_kws_client_kws_client_config_service__WEBPACK_IMPORTED_MODULE_8__["KwsClientConfigService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _core_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]])], TaskSubmissionComponent);
    /***/
  },

  /***/
  "./src/app/task-submission/task-submission.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/task-submission/task-submission.module.ts ***!
    \***********************************************************/

  /*! exports provided: TaskSubmissionModule */

  /***/
  function srcAppTaskSubmissionTaskSubmissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskSubmissionModule", function () {
      return TaskSubmissionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _task_submission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-submission.component */
    "./src/app/task-submission/task-submission.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/confirmation-dialog/confirmation-dialog.component */
    "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var _custom_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../custom-material.module */
    "./src/app/custom-material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_file_picker_file_picker_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/file-picker/file-picker.module */
    "./src/app/shared/file-picker/file-picker.module.ts");

    var TASK_SUBMISSION_ROUTES = [{
      path: 'new-task',
      component: _task_submission_component__WEBPACK_IMPORTED_MODULE_3__["TaskSubmissionComponent"]
    }];

    var TaskSubmissionModule = function TaskSubmissionModule() {
      _classCallCheck(this, TaskSubmissionModule);
    };

    TaskSubmissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_task_submission_component__WEBPACK_IMPORTED_MODULE_3__["TaskSubmissionComponent"], _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_7__["CustomMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(TASK_SUBMISSION_ROUTES), _shared_file_picker_file_picker_module__WEBPACK_IMPORTED_MODULE_9__["FilePickerModule"]],
      entryComponents: [_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"]]
    })], TaskSubmissionModule);
    /***/
  },

  /***/
  "./src/app/tasklist/models/tasklist.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/tasklist/models/tasklist.model.ts ***!
    \***************************************************/

  /*! exports provided: KwsTasklistItem */

  /***/
  function srcAppTasklistModelsTasklistModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KwsTasklistItem", function () {
      return KwsTasklistItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var KwsTasklistItem =
    /*#__PURE__*/
    function () {
      function KwsTasklistItem(task) {
        _classCallCheck(this, KwsTasklistItem);

        this.task = task;
        this.checked = false;
      }

      _createClass(KwsTasklistItem, [{
        key: "id",
        get: function get() {
          return this.task.id;
        }
      }, {
        key: "title",
        get: function get() {
          return this.task.name || '';
        }
      }, {
        key: "kwcCount",
        get: function get() {
          if (this.task.results) {
            return this.task.results.candidates.length;
          }

          return NaN;
        }
      }, {
        key: "isCompleted",
        get: function get() {
          return this.task.isCompleted;
        }
      }]);

      return KwsTasklistItem;
    }();
    /***/

  },

  /***/
  "./src/app/tasklist/task-detail/task-detail.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/tasklist/task-detail/task-detail.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTaskDetailTaskDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasklist/task-detail/task-detail.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/tasklist/task-detail/task-detail.component.ts ***!
    \***************************************************************/

  /*! exports provided: TaskDetailComponent */

  /***/
  function srcAppTasklistTaskDetailTaskDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function () {
      return TaskDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TaskDetailComponent =
    /*#__PURE__*/
    function () {
      function TaskDetailComponent() {
        _classCallCheck(this, TaskDetailComponent);
      }

      _createClass(TaskDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaskDetailComponent;
    }();

    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-detail/task-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-detail.component.scss */
      "./src/app/tasklist/task-detail/task-detail.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TaskDetailComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/task-dialog/task-dialog.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/tasklist/task-dialog/task-dialog.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTaskDialogTaskDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2stZGlhbG9nL3Rhc2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasklist/task-dialog/task-dialog.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/tasklist/task-dialog/task-dialog.component.ts ***!
    \***************************************************************/

  /*! exports provided: TaskDialogComponent */

  /***/
  function srcAppTasklistTaskDialogTaskDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function () {
      return TaskDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TaskDialogComponent =
    /*#__PURE__*/
    function () {
      function TaskDialogComponent() {
        _classCallCheck(this, TaskDialogComponent);
      }

      _createClass(TaskDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaskDialogComponent;
    }();

    TaskDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/task-dialog/task-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-dialog.component.scss */
      "./src/app/tasklist/task-dialog/task-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TaskDialogComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/task-exists.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/tasklist/task-exists.guard.ts ***!
    \***********************************************/

  /*! exports provided: TaskExistsGuard */

  /***/
  function srcAppTasklistTaskExistsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskExistsGuard", function () {
      return TaskExistsGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");

    var TaskExistsGuard =
    /*#__PURE__*/
    function () {
      function TaskExistsGuard(tasksStore, router) {
        _classCallCheck(this, TaskExistsGuard);

        this.tasksStore = tasksStore;
        this.router = router;
      }

      _createClass(TaskExistsGuard, [{
        key: "canActivate",
        value: function canActivate(snapshot) {
          // const taskId = parseInt(snapshot.params.task, 10);
          var taskId = snapshot.params.id;

          if (this.tasksStore.taskExists(taskId)) {
            this.tasksStore.selectTask(taskId);
            return true;
          }

          this.router.navigate(['/tasks']);
          return false;
        }
      }]);

      return TaskExistsGuard;
    }();

    TaskExistsGuard.ctorParameters = function () {
      return [{
        type: _core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_3__["KwsTasksStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TaskExistsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_3__["KwsTasksStoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TaskExistsGuard);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTasklistCtaBarTasklistCtaBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-spacer {\n  flex-grow: 1;\n}\n\n.cta-bar {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1.5rem 0 1rem;\n}\n\n.cta-bar button {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.cta-bar button mat-icon {\n  font-size: 17px;\n  line-height: 17px;\n  height: 17px;\n  width: 17px;\n}\n\n.cta-buttons {\n  margin-left: auto;\n}\n\n.cta-buttons button {\n  min-width: 40px;\n  padding: 0;\n}\n\n.filter {\n  min-width: 75px;\n}\n\n.filter + .filter {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2xpc3QvdGFza2xpc3QtY3RhLWJhci9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHRhc2tsaXN0XFx0YXNrbGlzdC1jdGEtYmFyXFx0YXNrbGlzdC1jdGEtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrbGlzdC90YXNrbGlzdC1jdGEtYmFyL3Rhc2tsaXN0LWN0YS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LWN0YS1iYXIvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcc3R5bGVzXFxfdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNESjs7QURHSTtFRVZBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURVSjs7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ1o7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBREdJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNEUjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURtQkk7RUFDSSxnQkFBQTtBQ2pCUiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LWN0YS1iYXIvdGFza2xpc3QtY3RhLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdXRpbHNcIjtcclxuXHJcbi5mbGV4LXNwYWNlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jdGEtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwIDFyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBAaW5jbHVkZSBidXR0b24tc21hbGwoKTtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmN0YS1idXR0b25zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgbWluLXdpZHRoOiA3NXB4O1xyXG5cclxuICAgIC8vIDo6bmctZGVlcCB7XHJcbiAgICAvLyAgICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdCwgMC4xKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQsIDAuMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vICYuYWN0aXZlIHtcclxuICAgIC8vICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIsIDAuMyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgJiArICYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmZsZXgtc3BhY2VyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY3RhLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xufVxuLmN0YS1iYXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmN0YS1iYXIgYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbn1cblxuLmN0YS1idXR0b25zIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uY3RhLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsdGVyIHtcbiAgbWluLXdpZHRoOiA3NXB4O1xufVxuLmZpbHRlciArIC5maWx0ZXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSIsIkBtaXhpbiBidXR0b24tc21hbGwoKSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuQG1peGluIHRydW5jYXRlKCkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TasklistCtaBarComponent */

  /***/
  function srcAppTasklistTasklistCtaBarTasklistCtaBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklistCtaBarComponent", function () {
      return TasklistCtaBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // CTA ... Call To Action


    var TasklistCtaBarComponent = // CTA ... Call To Action
    function TasklistCtaBarComponent() {
      _classCallCheck(this, TasklistCtaBarComponent);

      this.showActionButtons = true;
      this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.checkAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.uncheckAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistCtaBarComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistCtaBarComponent.prototype, "showActionButtons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistCtaBarComponent.prototype, "filterChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistCtaBarComponent.prototype, "checkAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistCtaBarComponent.prototype, "uncheckAll", void 0);
    TasklistCtaBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasklist-cta-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasklist-cta-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasklist-cta-bar.component.scss */
      "./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.scss")).default]
    })], TasklistCtaBarComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-item/tasklist-item.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/tasklist/tasklist-item/tasklist-item.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTasklistItemTasklistItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  align-items: center;\n  padding: 12px 12px 12px 0;\n  justify-content: space-between;\n}\n\nmat-checkbox {\n  margin-left: auto;\n}\n\napp-checklist-favorite-button {\n  margin-left: auto;\n}\n\n.done {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n\n.info > * {\n  padding-right: 50px;\n}\n\n.task-title:hover {\n  opacity: 0.6;\n}\n\n.task-title:hover {\n  opacity: 0.6;\n}\n\n.controls mat-icon:hover {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2xpc3QvdGFza2xpc3QtaXRlbS9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHRhc2tsaXN0XFx0YXNrbGlzdC1pdGVtXFx0YXNrbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrbGlzdC90YXNrbGlzdC1pdGVtL3Rhc2tsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURPSTtFQUNJLFlBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LWl0ZW0vdGFza2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbmFwcC1jaGVja2xpc3QtZmF2b3JpdGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmluZm8gPiAqIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnRhc2stdGl0bGU6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gICAgLy8gYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgLy8gfVxyXG4gICAgbWF0LWljb246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbmFwcC1jaGVja2xpc3QtZmF2b3JpdGUtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5kb25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmluZm8gPiAqIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi50YXNrLXRpdGxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY29udHJvbHMgbWF0LWljb246aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-item/tasklist-item.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tasklist/tasklist-item/tasklist-item.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TasklistItemComponent */

  /***/
  function srcAppTasklistTasklistItemTasklistItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklistItemComponent", function () {
      return TasklistItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TasklistItemComponent = function TasklistItemComponent() {
      _classCallCheck(this, TasklistItemComponent);

      this.toggleItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // @Output() toggleFavorite = new EventEmitter<TasklistItem>();
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TasklistItemComponent.prototype, "toggleItem", void 0);
    TasklistItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasklist-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasklist-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-item/tasklist-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasklist-item.component.scss */
      "./src/app/tasklist/tasklist-item/tasklist-item.component.scss")).default]
    })], TasklistItemComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-list/tasklist-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/tasklist/tasklist-list/tasklist-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTasklistListTasklistListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  padding: 100px 200px;\n}\n\nheader {\n  padding: 10px 5px;\n  min-height: 25px;\n  font-size: 1.3rem;\n  border-bottom: 1px solid gainsboro;\n}\n\n.no-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.no-items span {\n  color: #7a7a7a;\n}\n\n.no-items img {\n  margin: 30px 0 15px;\n  width: 250px;\n}\n\napp-tasklist-item + app-tasklist-item {\n  border-top: 1px solid gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2xpc3QvdGFza2xpc3QtbGlzdC9DOlxcX19kYXRhX19cXF9fcHJvamVjdHNcXHRzXFxrd3MtdWktbmdyaWQtbWF0ZXJpYWwvc3JjXFxhcHBcXHRhc2tsaXN0XFx0YXNrbGlzdC1saXN0XFx0YXNrbGlzdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrbGlzdC90YXNrbGlzdC1saXN0L3Rhc2tsaXN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FDQUo7O0FEWUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFdJO0VBQ0ksY0FBQTtBQ1RSOztBRFlJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDVlI7O0FEbUJJO0VBQ0ksK0JBQUE7QUNoQlIiLCJmaWxlIjoic3JjL2FwcC90YXNrbGlzdC90YXNrbGlzdC1saXN0L3Rhc2tsaXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwMHB4IDIwMHB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgLy8gY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxufVxyXG5cclxuLy8gLmNhdGVnb3J5IHtcclxuLy8gICAgIHBhZGRpbmc6IDEycHggMCA4cHg7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcblxyXG4vLyAgICAgaDQge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLm5vLWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwIDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgICAgICAvLyBAaW5jbHVkZSBzbWFsbC1vbmx5KCkge1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG5hcHAtdGFza2xpc3QtaXRlbSB7XHJcbiAgICAmICsgJiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMDBweCAyMDBweDtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xufVxuXG4ubm8taXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vLWl0ZW1zIHNwYW4ge1xuICBjb2xvcjogIzdhN2E3YTtcbn1cbi5uby1pdGVtcyBpbWcge1xuICBtYXJnaW46IDMwcHggMCAxNXB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmFwcC10YXNrbGlzdC1pdGVtICsgYXBwLXRhc2tsaXN0LWl0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist-list/tasklist-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/tasklist/tasklist-list/tasklist-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TasklistListComponent */

  /***/
  function srcAppTasklistTasklistListTasklistListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklistListComponent", function () {
      return TasklistListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_tasklist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/tasklist.model */
    "./src/app/tasklist/models/tasklist.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/kws-tasks-store/kws-tasks-store.service */
    "./src/app/core/kws-tasks-store/kws-tasks-store.service.ts");
    /* harmony import */


    var src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/logger/logger.service */
    "./src/app/core/logger/logger.service.ts");

    var TasklistListComponent =
    /*#__PURE__*/
    function () {
      // showActionButtons$: Observable<boolean>;
      function TasklistListComponent(tasksStore, logger) {
        var _this21 = this;

        _classCallCheck(this, TasklistListComponent);

        this.tasksStore = tasksStore;
        this.logger = logger;
        this._filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('ALL');
        this.filter$ = this._filterSubject.asObservable();
        this.log('running constructor');
        this.items$ = this.tasksStore.tasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tasks) {
          return tasks.map(_this21.mapToTasklistItem);
        }));
        window.taskList = this;
      }

      _createClass(TasklistListComponent, [{
        key: "setFilter",
        value: function setFilter(filter) {
          this._filterSubject.next(filter);
        }
      }, {
        key: "mapToTasklistItem",
        value: function mapToTasklistItem(task) {
          return new _models_tasklist_model__WEBPACK_IMPORTED_MODULE_3__["KwsTasklistItem"](task);
        }
      }, {
        key: "trackById",
        value: function trackById(_, item) {
          return item.id;
        }
      }, {
        key: "toggleItem",
        value: function toggleItem(item) {
          // const index = this.selectedItems.indexOf(item);
          item.checked = !item.checked;
        }
      }, {
        key: "log",
        value: function log(message) {
          this.logger.log("TaskListComponent: ".concat(message));
        }
      }]);

      return TasklistListComponent;
    }();

    TasklistListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__["KwsTasksStoreService"]
      }, {
        type: src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
      }];
    };

    TasklistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasklist-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasklist-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist-list/tasklist-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasklist-list.component.scss */
      "./src/app/tasklist/tasklist-list/tasklist-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_kws_tasks_store_kws_tasks_store_service__WEBPACK_IMPORTED_MODULE_5__["KwsTasksStoreService"], src_app_core_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], TasklistListComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/tasklist/tasklist.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasklistTasklistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n\nmat-sidenav {\n  width: 300px;\n}\n\nmat-sidenav .section-container {\n  padding: 1rem 0;\n}\n\nmat-sidenav ::ng-deep .mat-drawer-inner-container {\n  overflow-x: hidden;\n}\n\nmat-sidenav-content {\n  display: flex;\n  overflow: hidden;\n}\n\nmat-sidenav-container {\n  flex: 1;\n}\n\n.scroll-container {\n  flex: 1;\n  overflow: auto;\n}\n\n.overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(250, 250, 250, 0.85);\n}\n\n.overlay:hover span {\n  opacity: 1;\n}\n\n.overlay span {\n  transition: opacity 0.2s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2xpc3QvQzpcXF9fZGF0YV9fXFxfX3Byb2plY3RzXFx0c1xca3dzLXVpLW5ncmlkLW1hdGVyaWFsL3NyY1xcYXBwXFx0YXNrbGlzdFxcdGFza2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdJO0VBQ0ksa0JBQUE7QUNEUjs7QURLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksT0FBQTtBQ0ZKOztBREtBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUNGSjs7QURJSTtFQUNJLFVBQUE7QUNGUjs7QURLSTtFQUNJLHVEQUFBO0VBQ0EsVUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvdGFza2xpc3QvdGFza2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9WRVJSSURFOiBtYXRlcmlhbCBzaWRlbmF2XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuODUpO1xyXG5cclxuICAgICY6aG92ZXIgc3BhbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxubWF0LXNpZGVuYXYgLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxubWF0LXNpZGVuYXYgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG5cbi5zY3JvbGwtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuODUpO1xufVxuLm92ZXJsYXk6aG92ZXIgc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4ub3ZlcmxheSBzcGFuIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tasklist/tasklist.component.ts ***!
    \************************************************/

  /*! exports provided: TasklistComponent */

  /***/
  function srcAppTasklistTasklistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklistComponent", function () {
      return TasklistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TasklistComponent =
    /*#__PURE__*/
    function () {
      function TasklistComponent() {
        _classCallCheck(this, TasklistComponent);
      }

      _createClass(TasklistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TasklistComponent;
    }();

    TasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasklist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasklist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasklist.component.scss */
      "./src/app/tasklist/tasklist.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TasklistComponent);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tasklist/tasklist.module.ts ***!
    \*********************************************/

  /*! exports provided: TasklistModule */

  /***/
  function srcAppTasklistTasklistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklistModule", function () {
      return TasklistModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-dialog/task-dialog.component */
    "./src/app/tasklist/task-dialog/task-dialog.component.ts");
    /* harmony import */


    var _custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../custom-material.module */
    "./src/app/custom-material.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tasklist_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tasklist.routes */
    "./src/app/tasklist/tasklist.routes.ts");
    /* harmony import */


    var _tasklist_list_tasklist_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tasklist-list/tasklist-list.component */
    "./src/app/tasklist/tasklist-list/tasklist-list.component.ts");
    /* harmony import */


    var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./task-detail/task-detail.component */
    "./src/app/tasklist/task-detail/task-detail.component.ts");
    /* harmony import */


    var _tasklist_cta_bar_tasklist_cta_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tasklist-cta-bar/tasklist-cta-bar.component */
    "./src/app/tasklist/tasklist-cta-bar/tasklist-cta-bar.component.ts");
    /* harmony import */


    var _tasklist_item_tasklist_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tasklist-item/tasklist-item.component */
    "./src/app/tasklist/tasklist-item/tasklist-item.component.ts");
    /* harmony import */


    var _tasklist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tasklist.component */
    "./src/app/tasklist/tasklist.component.ts");

    var TasklistModule = function TasklistModule() {
      _classCallCheck(this, TasklistModule);
    };

    TasklistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tasklist_component__WEBPACK_IMPORTED_MODULE_13__["TasklistComponent"], _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TaskDialogComponent"], _tasklist_list_tasklist_list_component__WEBPACK_IMPORTED_MODULE_9__["TasklistListComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_10__["TaskDetailComponent"], _tasklist_cta_bar_tasklist_cta_bar_component__WEBPACK_IMPORTED_MODULE_11__["TasklistCtaBarComponent"], _tasklist_item_tasklist_item_component__WEBPACK_IMPORTED_MODULE_12__["TasklistItemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_tasklist_routes__WEBPACK_IMPORTED_MODULE_8__["TASKLIST_ROUTES"])],
      entryComponents: [_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TaskDialogComponent"]]
    })], TasklistModule);
    /***/
  },

  /***/
  "./src/app/tasklist/tasklist.routes.ts":
  /*!*********************************************!*\
    !*** ./src/app/tasklist/tasklist.routes.ts ***!
    \*********************************************/

  /*! exports provided: TASKLIST_ROUTES */

  /***/
  function srcAppTasklistTasklistRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASKLIST_ROUTES", function () {
      return TASKLIST_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tasklist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tasklist.component */
    "./src/app/tasklist/tasklist.component.ts");
    /* harmony import */


    var _tasklist_list_tasklist_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tasklist-list/tasklist-list.component */
    "./src/app/tasklist/tasklist-list/tasklist-list.component.ts");

    var TASKLIST_ROUTES = [{
      path: 'tasklist',
      component: _tasklist_component__WEBPACK_IMPORTED_MODULE_1__["TasklistComponent"],
      children: [{
        path: '',
        component: _tasklist_list_tasklist_list_component__WEBPACK_IMPORTED_MODULE_2__["TasklistListComponent"]
      }]
    }, {
      path: 'task/:id',
      redirectTo: 'task-results/:id',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\__data__\__projects\ts\kws-ui-ngrid-material\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map