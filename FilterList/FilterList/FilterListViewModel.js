// Copyright 2021 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
define(["require", "exports", "esri/core/accessorSupport/decorators", "esri/core/Accessor", "esri/core/reactiveUtils", "esri/core/Handles", "esri/geometry/support/jsonUtils"], function (require, exports, decorators_1, Accessor, reactiveUtils_1, Handles, jsonUtils_1) {
    "use strict";
    var accordionStyle = ".accordion-item-content { padding: 0!important; }";
    var FilterListViewModel = /** @class */ (function (_super) {
        __extends(FilterListViewModel, _super);
        // ----------------------------------
        //
        //  Lifecycle methods
        //
        // ----------------------------------
        function FilterListViewModel(params) {
            var _this = _super.call(this, params) || this;
            _this.layerExpressions = [];
            _this.theme = "light";
            _this.extentSelector = false;
            _this.layers = {};
            _this._handles = new Handles();
            return _this;
        }
        FilterListViewModel.prototype.destroy = function () {
            this._handles.removeAll();
            this._handles = null;
        };
        FilterListViewModel.prototype.initialize = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reactiveUtils_1.whenOnce(function () { return _this.map; })];
                        case 1:
                            _a.sent();
                            this._initDefExpressions = {};
                            this.map.allLayers.forEach(function (layer) {
                                if (layer.hasOwnProperty("definitionExpression")) {
                                    _this._initDefExpressions[layer.id] = layer["definitionExpression"];
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ----------------------------------
        //
        //  Public methods
        //
        // ----------------------------------
        FilterListViewModel.prototype.setInitExpression = function (id, expression, scheduleRender) {
            var _this = this;
            if (expression.field && expression.type) {
                var fl_1 = this.map.findLayerById(id);
                fl_1 === null || fl_1 === void 0 ? void 0 : fl_1.load().then(function () {
                    var _a, _b;
                    var layerField = (_a = fl_1.fields) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
                        var name = _a.name;
                        return name === expression.field;
                    });
                    var domainType = (_b = layerField.domain) === null || _b === void 0 ? void 0 : _b.type;
                    expression.type = domainType === "coded-value" || domainType === "range" ? domainType : expression.type;
                    _this._updateExpression(id, expression, layerField, scheduleRender);
                });
            }
            else {
                this._updateExpression(id, expression, null, scheduleRender);
            }
        };
        FilterListViewModel.prototype.initLayerHeader = function (accordionItem) {
            var _this = this;
            var style = document.createElement("style");
            if (this.theme === "dark") {
                accordionStyle += " .accordion-item-header {\n        border-bottom: 1px solid rgb(217, 218, 218)!important;\n        padding: 14px 20px!important;\n      }";
            }
            else if (this.theme === "light") {
                accordionStyle += " .accordion-item-header {\n        background: rgb(244, 243, 244)!important;\n        border-bottom: 1px solid rgb(217, 218, 218)!important;\n        padding: 14px 20px!important;\n      }";
            }
            style.innerHTML = accordionStyle;
            accordionItem.shadowRoot.prepend(style);
            this._openAccordion(accordionItem);
            this._handles.add(reactiveUtils_1.watch(function () { return _this.expandFilters; }, this._openAccordion.bind(this, accordionItem)));
        };
        FilterListViewModel.prototype.initCheckbox = function (id, expression, checkbox) {
            var _this = this;
            checkbox.addEventListener("calciteCheckboxChange", function (event) {
                var node = event.target;
                expression.checked = node.checked;
                if (node.checked) {
                    _this.layers[id].expressions[expression.definitionExpressionId] = {
                        definitionExpression: expression.definitionExpression
                    };
                }
                else {
                    delete _this.layers[id].expressions[expression.definitionExpressionId];
                }
                _this.generateOutput(id);
            });
        };
        FilterListViewModel.prototype.handleComboSelectCreate = function (expression, layerId, comboBox) {
            comboBox.addEventListener("calciteLookupChange", this.handleComboSelect.bind(this, expression, layerId));
        };
        FilterListViewModel.prototype.handleComboSelect = function (expression, layerId, event) {
            var items = event.detail;
            var definitionExpressionId = expression.definitionExpressionId, field = expression.field;
            if (items && items.length) {
                var values = items.map(function (_a) {
                    var value = _a.value;
                    return (typeof value === "number" ? value : "'" + value + "'");
                });
                expression.selectedFields = items.map(function (_a) {
                    var value = _a.value;
                    return value;
                });
                var definitionExpression = field + " IN (" + values.join(",") + ")";
                this.layers[layerId].expressions[definitionExpressionId] = {
                    definitionExpression: definitionExpression
                };
                expression.checked = true;
            }
            else {
                delete this.layers[layerId].expressions[definitionExpressionId];
                expression.checked = false;
            }
            this.generateOutput(layerId);
        };
        FilterListViewModel.prototype.handleSliderCreate = function (expression, layerId, slider) {
            var max = expression.max, min = expression.min, range = expression.range;
            if ((max || max === 0) && (min || min === 0)) {
                slider.setAttribute("min-value", min);
                slider.setAttribute("max-value", max);
                slider.min = min;
                slider.max = max;
                slider.ticks = (max - min) / 4;
            }
            if (range && Object.keys(range)) {
                var minValue = range.min;
                var maxValue = range.max;
                slider.minValue = minValue;
                slider.maxValue = maxValue;
            }
            var style = document.createElement("style");
            style.innerHTML = ".thumb .handle__label--minValue.hyphen::after {content: unset!important}";
            slider.shadowRoot.prepend(style);
            slider.addEventListener("calciteSliderChange", this.handleSliderChange.bind(this, expression, layerId));
        };
        FilterListViewModel.prototype.handleSliderChange = function (expression, layerId, event) {
            var _a = event.target, maxValue = _a.maxValue, minValue = _a.minValue;
            this._debounceSliderChange(expression, layerId, maxValue, minValue);
        };
        FilterListViewModel.prototype.handleDatePickerCreate = function (expression, layerId, datePicker) {
            datePicker.min = this._convertToDate(expression === null || expression === void 0 ? void 0 : expression.min);
            datePicker.max = this._convertToDate(expression === null || expression === void 0 ? void 0 : expression.max);
            datePicker.addEventListener("calciteDatePickerRangeChange", this.handleDatePickerRangeChange.bind(this, expression, layerId));
            datePicker.addEventListener("input", this.handleDatePickerInputChange.bind(this, expression, layerId));
        };
        FilterListViewModel.prototype.handleDatePickerRangeChange = function (expression, layerId, event) {
            var _a, _b;
            this.setExpressionDates((_a = event.detail) === null || _a === void 0 ? void 0 : _a.startDate, (_b = event.detail) === null || _b === void 0 ? void 0 : _b.endDate, expression, layerId);
        };
        FilterListViewModel.prototype.handleDatePickerInputChange = function (expression, layerId, event) {
            var _this = this;
            setTimeout(function () {
                var datePicker = event.target;
                _this.setExpressionDates(datePicker.startAsDate, datePicker.endAsDate, expression, layerId);
            }, 1000);
        };
        FilterListViewModel.prototype.handleResetDatePicker = function (expression, layerId, event) {
            var datePicker = document.getElementById(expression.definitionExpressionId);
            datePicker.start = null;
            datePicker.startAsDate = null;
            datePicker.end = null;
            datePicker.endAsDate = null;
            expression.checked = false;
            delete this.layers[layerId].expressions[expression.definitionExpressionId];
            this.generateOutput(layerId);
        };
        FilterListViewModel.prototype.setExpressionDates = function (startDate, endDate, expression, layerId) {
            var expressions = this.layers[layerId].expressions;
            var start = startDate ? this._convertToDate(Math.floor(startDate.getTime()), true) : null;
            var end = endDate ? this._convertToDate(Math.floor(endDate.getTime()), true) : null;
            if (start || end) {
                var chevron = end && !start ? "<" : !end && start ? ">" : null;
                if (chevron) {
                    expressions[expression.definitionExpressionId] = {
                        definitionExpression: expression.field + " " + chevron + " '" + (start !== null && start !== void 0 ? start : end) + "'"
                    };
                }
                else {
                    expressions[expression.definitionExpressionId] = {
                        definitionExpression: expression.field + " BETWEEN '" + start + "' AND '" + end + "'"
                    };
                }
                expression.range = { min: start, max: end };
                expression.checked = true;
                this.generateOutput(layerId);
            }
        };
        FilterListViewModel.prototype.handleResetFilter = function () {
            var _this = this;
            this.layerExpressions.map(function (layerExpression) {
                var id = layerExpression.id;
                layerExpression.expressions.map(function (expression) {
                    var definitionExpressionId = expression.definitionExpressionId, max = expression.max, min = expression.min, type = expression.type;
                    if (type === "string" || type === "coded-value") {
                        var combobox = document.getElementById(definitionExpressionId);
                        var wrapper = combobox.shadowRoot.querySelector(".wrapper");
                        for (var i = 0; i < wrapper.children.length; i++) {
                            var child = wrapper.children[i];
                            if (child.nodeName === "CALCITE-CHIP") {
                                var chip = child;
                                chip.style.display = "none";
                            }
                        }
                        for (var i = 0; i < combobox.children.length; i++) {
                            var comboboxItem = combobox.children[i];
                            comboboxItem.selected = false;
                        }
                    }
                    else if (type === "date") {
                        var datePicker = document.getElementById(definitionExpressionId);
                        datePicker.startAsDate = null;
                        datePicker.endAsDate = null;
                    }
                    else if (type === "number" || type === "range") {
                        var slider = document.getElementById(definitionExpressionId);
                        slider.minValue = min;
                        slider.maxValue = max;
                    }
                    else {
                        var checkbox = document.getElementById(definitionExpressionId);
                        checkbox.removeAttribute("checked");
                    }
                    expression.checked = false;
                    expression.range = null;
                    expression.selectedFields = null;
                });
                _this.layers[id].expressions = {};
            });
        };
        FilterListViewModel.prototype.generateOutput = function (id) {
            var _a, _b, _c;
            var defExpressions = [];
            if (!((_b = (_a = this.layers) === null || _a === void 0 ? void 0 : _a[id]) === null || _b === void 0 ? void 0 : _b.expressions)) {
                return;
            }
            (_c = Object.values(this.layers[id].expressions)) === null || _c === void 0 ? void 0 : _c.forEach(function (_a) {
                var definitionExpression = _a.definitionExpression;
                if (definitionExpression) {
                    defExpressions.push("(" + definitionExpression + ")");
                }
            });
            var newOutput = {
                id: id,
                definitionExpression: defExpressions.join(this.layers[id].operator)
            };
            this.set("output", newOutput);
        };
        // ----------------------------------
        //
        //  Private methods
        //
        // ----------------------------------
        FilterListViewModel.prototype._getFeatureAttributes = function (layerId, field) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var layer, query, results, features;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            layer = this.map.allLayers.find(function (_a) {
                                var id = _a.id;
                                return id === layerId;
                            });
                            if (!(layer && layer.type === "feature")) return [3 /*break*/, 2];
                            query = layer.createQuery();
                            if ((_b = (_a = layer === null || layer === void 0 ? void 0 : layer.capabilities) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.supportsCacheHint) {
                                query.cacheHint = true;
                            }
                            if (!field) return [3 /*break*/, 2];
                            query.where = (_c = this._initDefExpressions) === null || _c === void 0 ? void 0 : _c[layerId];
                            query.outFields = [field];
                            query.orderByFields = [field + " DESC"];
                            query.returnDistinctValues = true;
                            query.returnGeometry = false;
                            query.maxRecordCountFactor = 3;
                            query.returnExceededLimitFeatures = true;
                            if (this.extentSelector && this.extentSelectorConfig) {
                                query.geometry = this._getExtent(this.extentSelector, this.extentSelectorConfig);
                                query.spatialRelationship = "intersects";
                            }
                            return [4 /*yield*/, layer.queryFeatures(query)];
                        case 1:
                            results = _d.sent();
                            features = results === null || results === void 0 ? void 0 : results.features.filter(function (feature) { var _a; return (_a = feature.attributes) === null || _a === void 0 ? void 0 : _a[field]; });
                            return [2 /*return*/, features === null || features === void 0 ? void 0 : features.map(function (feature) { var _a; return (_a = feature.attributes) === null || _a === void 0 ? void 0 : _a[field]; }).sort()];
                        case 2: return [2 /*return*/, []];
                    }
                });
            });
        };
        FilterListViewModel.prototype._calculateMinMaxStatistics = function (layerId, field) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var layer, query, tmp, results;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            layer = this.map.allLayers.find(function (_a) {
                                var id = _a.id;
                                return id === layerId;
                            });
                            if (!(layer && layer.type === "feature")) return [3 /*break*/, 2];
                            query = layer.createQuery();
                            query.where = (_a = this._initDefExpressions) === null || _a === void 0 ? void 0 : _a[layerId];
                            if ((_c = (_b = layer === null || layer === void 0 ? void 0 : layer.capabilities) === null || _b === void 0 ? void 0 : _b.query) === null || _c === void 0 ? void 0 : _c.supportsCacheHint) {
                                query.cacheHint = true;
                            }
                            if (!field) return [3 /*break*/, 2];
                            tmp = [
                                {
                                    onStatisticField: field,
                                    outStatisticFieldName: "max" + field,
                                    statisticType: "max"
                                },
                                {
                                    onStatisticField: field,
                                    outStatisticFieldName: "min" + field,
                                    statisticType: "min"
                                }
                            ];
                            query.outStatistics = tmp;
                            if (this.extentSelector && this.extentSelectorConfig) {
                                query.geometry = this._getExtent(this.extentSelector, this.extentSelectorConfig);
                                query.spatialRelationship = "intersects";
                            }
                            return [4 /*yield*/, layer.queryFeatures(query)];
                        case 1:
                            results = _d.sent();
                            return [2 /*return*/, results === null || results === void 0 ? void 0 : results.features];
                        case 2: return [2 /*return*/, []];
                    }
                });
            });
        };
        FilterListViewModel.prototype._convertToDate = function (date, includeTime) {
            if (includeTime === void 0) { includeTime = false; }
            if (date) {
                var tmpDate = new Date(date);
                var formattedDate = tmpDate.getFullYear() + "-" + (tmpDate.getMonth() + 1) + "-" + tmpDate.getDate();
                if (includeTime) {
                    var time = tmpDate.getHours() + ":" + tmpDate.getMinutes() + ":" + tmpDate.getSeconds();
                    return formattedDate + " " + time;
                }
                else {
                    return formattedDate;
                }
            }
            return null;
        };
        FilterListViewModel.prototype._getExtent = function (extentSelector, extentSelectorConfig) {
            if (extentSelector && extentSelectorConfig) {
                var constraints = extentSelectorConfig.constraints;
                var newConstraints = __assign({}, constraints);
                var geometry = newConstraints === null || newConstraints === void 0 ? void 0 : newConstraints.geometry;
                if (geometry) {
                    var tmpExtent = jsonUtils_1.fromJSON(geometry);
                    if (tmpExtent && ((tmpExtent === null || tmpExtent === void 0 ? void 0 : tmpExtent.type) === "extent" || (tmpExtent === null || tmpExtent === void 0 ? void 0 : tmpExtent.type) === "polygon")) {
                        return tmpExtent;
                    }
                }
            }
            return null;
        };
        FilterListViewModel.prototype._debounceSliderChange = function (expression, layerId, max, min) {
            var _this = this;
            if (this._timeout) {
                clearTimeout(this._timeout);
            }
            this._timeout = setTimeout(function () {
                _this._updateExpressions(expression, layerId, max, min);
                _this.generateOutput(layerId);
            }, 800);
        };
        FilterListViewModel.prototype._updateExpressions = function (expression, layerId, max, min) {
            if (!this.layers[layerId]) {
                return;
            }
            var expressions = this.layers[layerId].expressions;
            var definitionExpressionId = expression.definitionExpressionId;
            if ((min || min === 0) && (max || max === 0)) {
                if (expressions[definitionExpressionId]) {
                    expressions[definitionExpressionId] = __assign(__assign({}, expressions[definitionExpressionId]), { definitionExpression: (expression === null || expression === void 0 ? void 0 : expression.field) + " BETWEEN " + min + " AND " + max });
                    expression.checked = true;
                    if (min === (expression === null || expression === void 0 ? void 0 : expression.min) && max === (expression === null || expression === void 0 ? void 0 : expression.max)) {
                        delete expressions[definitionExpressionId];
                        expression.checked = false;
                    }
                }
                else {
                    if (min !== (expression === null || expression === void 0 ? void 0 : expression.min) || max !== (expression === null || expression === void 0 ? void 0 : expression.max)) {
                        expressions[definitionExpressionId] = {
                            definitionExpression: (expression === null || expression === void 0 ? void 0 : expression.field) + " BETWEEN " + min + " AND " + max
                        };
                        expression.checked = true;
                    }
                }
            }
            expression.range = { min: min, max: max };
        };
        FilterListViewModel.prototype._updateStringExpression = function (id, expression) {
            return __awaiter(this, void 0, void 0, function () {
                var definitionExpressionId, field, _a, selectedFields, definitionExpression;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            definitionExpressionId = expression.definitionExpressionId, field = expression.field;
                            _a = expression;
                            return [4 /*yield*/, this._getFeatureAttributes(id, field)];
                        case 1:
                            _a.selectFields = _b.sent();
                            if (expression === null || expression === void 0 ? void 0 : expression.selectedFields) {
                                selectedFields = expression.selectedFields.map(function (field) {
                                    return typeof field === "number" ? field : "'" + field + "'";
                                });
                                definitionExpression = field + " IN (" + selectedFields.join(",") + ")";
                                this.layers[id].expressions[definitionExpressionId] = {
                                    definitionExpression: definitionExpression
                                };
                                return [2 /*return*/, true];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        FilterListViewModel.prototype._updateNumberExpression = function (id, expression, scheduleRender) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var definitionExpressionId, field, graphic, attributes, _b, _c, min, max, definitionExpression;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!((!(expression === null || expression === void 0 ? void 0 : expression.min) && (expression === null || expression === void 0 ? void 0 : expression.min) !== 0) || (!(expression === null || expression === void 0 ? void 0 : expression.max) && (expression === null || expression === void 0 ? void 0 : expression.max) !== 0))) return [3 /*break*/, 5];
                            definitionExpressionId = expression.definitionExpressionId, field = expression.field;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, this._calculateMinMaxStatistics(id, field)];
                        case 2:
                            graphic = _d.sent();
                            attributes = (_a = graphic === null || graphic === void 0 ? void 0 : graphic[0]) === null || _a === void 0 ? void 0 : _a.attributes;
                            expression.min = attributes["min" + field];
                            expression.max = attributes["max" + field];
                            return [3 /*break*/, 5];
                        case 3:
                            _b = _d.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            if ((expression === null || expression === void 0 ? void 0 : expression.range) && Object.keys(expression.range).length) {
                                _c = expression.range, min = _c.min, max = _c.max;
                                definitionExpression = expression.field + " BETWEEN " + min + " AND " + max;
                                this.layers[id].expressions[definitionExpressionId] = {
                                    definitionExpression: definitionExpression
                                };
                            }
                            scheduleRender();
                            return [2 /*return*/, true];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        FilterListViewModel.prototype._updateDateExpression = function (id, expression, scheduleRender) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var definitionExpressionId, field, range, graphic, attributes, _d, min, max, chevron;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            definitionExpressionId = expression.definitionExpressionId, field = expression.field, range = expression.range;
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, this._calculateMinMaxStatistics(id, field)];
                        case 2:
                            graphic = _e.sent();
                            attributes = (_a = graphic === null || graphic === void 0 ? void 0 : graphic[0]) === null || _a === void 0 ? void 0 : _a.attributes;
                            expression.min = this._convertToDate(attributes["min" + field]);
                            expression.max = this._convertToDate(attributes["max" + field]);
                            return [3 /*break*/, 5];
                        case 3:
                            _d = _e.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            if (range && Object.keys(range).length) {
                                min = range.min, max = range.max;
                                min = (_b = min) === null || _b === void 0 ? void 0 : _b.replace("+", " ");
                                max = (_c = max) === null || _c === void 0 ? void 0 : _c.replace("+", " ");
                                if (min || max) {
                                    chevron = max && !min ? "<" : !max && min ? ">" : null;
                                    if (chevron) {
                                        this.layers[id].expressions[definitionExpressionId] = {
                                            definitionExpression: field + " " + chevron + " '" + (min !== null && min !== void 0 ? min : max) + "'"
                                        };
                                    }
                                    else {
                                        this.layers[id].expressions[definitionExpressionId] = {
                                            definitionExpression: field + " BETWEEN '" + min + "' AND '" + max + "'"
                                        };
                                    }
                                    expression.start = min;
                                    expression.end = max;
                                }
                            }
                            scheduleRender();
                            return [2 /*return*/, true];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        FilterListViewModel.prototype._updateCodedValueExpression = function (id, expression, layerField) {
            var _a;
            var definitionExpressionId = expression.definitionExpressionId, field = expression.field;
            var selectFields = [];
            expression.codedValues = {};
            var domain = layerField.domain;
            (_a = domain === null || domain === void 0 ? void 0 : domain.codedValues) === null || _a === void 0 ? void 0 : _a.forEach(function (cv) {
                var code = cv.code, name = cv.name;
                selectFields.push(code);
                expression.codedValues[code] = name;
            });
            expression.selectFields = selectFields;
            if (expression === null || expression === void 0 ? void 0 : expression.selectedFields) {
                var selectedFields = expression.selectedFields.map(function (field) {
                    return typeof field === "number" ? field : "'" + field + "'";
                });
                var definitionExpression = field + " IN (" + selectedFields.join(",") + ")";
                this.layers[id].expressions[definitionExpressionId] = {
                    definitionExpression: definitionExpression
                };
                return true;
            }
        };
        FilterListViewModel.prototype._updateRangeExpression = function (id, expression, layerField) {
            var definitionExpressionId = expression.definitionExpressionId, field = expression.field, range = expression.range;
            var domain = layerField.domain;
            expression.min = domain === null || domain === void 0 ? void 0 : domain.minValue;
            expression.max = domain === null || domain === void 0 ? void 0 : domain.maxValue;
            if (range && Object.keys(range).length) {
                var min = range.min, max = range.max;
                var definitionExpression = field + " BETWEEN " + min + " AND " + max;
                this.layers[id].expressions[definitionExpressionId] = {
                    definitionExpression: definitionExpression
                };
                return true;
            }
        };
        FilterListViewModel.prototype._updateExpression = function (id, expression, layerField, scheduleRender) {
            return __awaiter(this, void 0, void 0, function () {
                var update, definitionExpressionId, type;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            update = false;
                            definitionExpressionId = expression.definitionExpressionId, type = expression.type;
                            if (!(type === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, this._updateStringExpression(id, expression)];
                        case 1:
                            update = _a.sent();
                            return [3 /*break*/, 7];
                        case 2:
                            if (!(type === "number")) return [3 /*break*/, 4];
                            return [4 /*yield*/, this._updateNumberExpression(id, expression, scheduleRender)];
                        case 3:
                            update = _a.sent();
                            return [3 /*break*/, 7];
                        case 4:
                            if (!(type === "date")) return [3 /*break*/, 6];
                            return [4 /*yield*/, this._updateDateExpression(id, expression, scheduleRender)];
                        case 5:
                            update = _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            if (type === "coded-value") {
                                update = this._updateCodedValueExpression(id, expression, layerField);
                            }
                            else if (type === "range") {
                                update = this._updateRangeExpression(id, expression, layerField);
                            }
                            else {
                                if (expression.checked && expression.definitionExpression) {
                                    this.layers[id].expressions[definitionExpressionId] = {
                                        definitionExpression: expression.definitionExpression
                                    };
                                    update = true;
                                }
                            }
                            _a.label = 7;
                        case 7:
                            if (update) {
                                this.generateOutput(id);
                            }
                            scheduleRender();
                            return [2 /*return*/];
                    }
                });
            });
        };
        FilterListViewModel.prototype._openAccordion = function (accordionItem) {
            if (this.expandFilters) {
                accordionItem.setAttribute("active", "");
            }
            else {
                accordionItem.removeAttribute("active");
            }
        };
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "map", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "layerExpressions", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "theme", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "extentSelector", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "extentSelectorConfig", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "expandFilters", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "output", void 0);
        __decorate([
            decorators_1.property()
        ], FilterListViewModel.prototype, "layers", void 0);
        FilterListViewModel = __decorate([
            decorators_1.subclass("FilterListViewModel")
        ], FilterListViewModel);
        return FilterListViewModel;
    }(Accessor));
    return FilterListViewModel;
});
//# sourceMappingURL=FilterListViewModel.js.map