import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


/*
  Generated class for the FlyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlyServiceProvider {
  // Used to check if a change has occurred.
  
  flies: Observable<any>;
  fly: Observable<any>;

  constructor(private http: Http) {
    console.log('Hello FlyServiceProvider Provider');
  }
  getFlies() {
    this.flies = this.http.get('http://localhost:8080/Flies'); 
    return this.flies
  }

  getFlyDetails(id) {
    this.fly = this.http.get('http://localhost:8080/Flies/' + id)
    return this.fly
  }

}
