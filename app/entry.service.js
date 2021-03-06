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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var EntryService = (function () {
    function EntryService(http) {
        this.http = http;
        //base url string
        this.baseUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/Weatherfile/";
    }
    //function to get weather files based on parameter date range
    EntryService.prototype.getEntries = function (data) {
        var sDate = data.start;
        var eDate = data.end;
        var url;
        //two different urls can be called, depending on date range. here we decide which one
        if (sDate == eDate) {
            url = this.baseUrl + "getByDate?date=" + sDate;
        }
        else {
            url = this.baseUrl + "getBetween?date1=" + sDate + "&date2=" + eDate;
        }
        console.log(url);
        //return http request in promise
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //error handler
    EntryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EntryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EntryService);
    return EntryService;
}());
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map