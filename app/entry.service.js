/**
 * Created by pwluft on 2016-09-27.
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
var entry_1 = require('./entry');
var EntryService = (function () {
    function EntryService() {
    }
    EntryService.prototype.getEntries = function (data) {
        //getEntries(data): any[]{ //as much as i hate to say this, we might have to resort to this....
        var samples = [];
        var city = data.city;
        var sDate = data.start;
        var eDate = data.end;
        console.log("Sending request for: " + city + " " + sDate + " " + eDate);
        //TODO: access entries from REST endpoint. use city, sDate, and eDate as parameters
        //service will return data from backend
        //a temp random object generator. it'll suffice till we start using an endpoint
        var ind = Math.floor(Math.random() * 20 + 1);
        for (var i = 1; i <= ind; i++) {
            samples.push();
            samples.push(new entry_1.Entry(10 + i, city, Math.floor(Math.random() * 40 + 1), Math.floor(Math.random() * 40 + 1)));
        }
        return Promise.resolve(samples);
        //return samples;
    };
    EntryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EntryService);
    return EntryService;
}());
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map