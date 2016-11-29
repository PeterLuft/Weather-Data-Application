/**
 * Created by pwluft on 2016-11-26.
 */


import { Injectable } from '@angular/core';
import {Entry} from './entry';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class CityService{

    constructor(private http: Http){}

    private getUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/polled";

    private addUrl = "http://sample-env-1.ds75epucp6.us-east-1.elasticbeanstalk.com/City/add?"

    getCities(): any{

        return this.http.get(this.getUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    addCity(input): any{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        var url = this.addUrl + "name=" +  input.city + "&countrycode=" + input.country;
        console.log(url);

        // return this.http.post(url, {}, options)
        //     .toPromise()
        //     .then(response => response.json())
        //     .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}