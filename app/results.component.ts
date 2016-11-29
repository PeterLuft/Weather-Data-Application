/**
 * Created by pwluft on 2016-10-17.
 */

import { Component, Input} from '@angular/core';
import {Entry} from './entry';

import {EntryService} from './entry.service';

import {OnInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'results-box',
    templateUrl: 'results.component.html'
})

export class ResultsComponent{

    @Input() compMode: boolean;
    entries: any;
    a = {};
    isEmpty = true;
    currentCity;


    constructor(private entryService: EntryService){
    }

    getEntries(input): void{
        this.entryService.getEntries(input).then(dt => this.myCallBack(dt));
        this.isEmpty = false;
    }


    changeCity(input){
        this.currentCity = input;
    }


    printWeatherFiles(array){
        for(var i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    }

    private myCallBack(input){

        //this is where we do logical stuff with the returned objects

        //console.log("single input callback");
        this.entries = input;
        this.printWeatherFiles(this.entries);

    }



}