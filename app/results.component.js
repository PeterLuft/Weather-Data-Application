/**
 * Created by pwluft on 2016-10-17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var entry_service_1 = require('./entry.service');
var ResultsComponent = (function () {
    function ResultsComponent(entryService) {
        this.entryService = entryService;
    }
    ResultsComponent.prototype.getEntries = function (input) {
        var _this = this;
        console.log(input.city + "\n" + input.start + "\n" + input.end);
        this.entryService.getEntries().then(function (entries) { return _this.entries = entries; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ResultsComponent.prototype, "compMode", void 0);
    ResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'results-box',
            templateUrl: 'results.component.html'
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map