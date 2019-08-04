import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {
  map,
  catchError
} from 'rxjs/operators';
import {
  Subject
} from 'rxjs';

/*
  Generated class for the FlyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlyServiceProvider {
  // Used to check if a change has occurred.
  
  flies: Observable<any>;

  constructor(private http: Http) {
    console.log('Hello FlyServiceProvider Provider');
  }
  getFlies() {
    return this.http.get('http://localhost:8080/Flies'); 
    
  }

}
