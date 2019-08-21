import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



  //--------------------------------------------------------------------------------------------------
@Injectable()
export class FlyServiceProvider {
  // Used to check if a change has occurred.
  
  flies: Observable<any>;
  fly: Observable<any>;


  //--------------------------------------------------------------------------------------------------
  constructor(private http: Http) {
    console.log('Hello FlyServiceProvider Provider');
  }


  //--------------------------------------------------------------------------------------------------
  //grabs all flies - loads them into flies variable
  getFlies() {
    //this.flies = this.http.get('http://localhost:8080/Flies/'); 
    this.flies = this.http.get('https://fly-tying-companion-rest-api.herokuapp.com/Flies');
    return this.flies
  }


  //--------------------------------------------------------------------------------------------------
  //grabs specific fly by ID - loads into fly variable
  getFlyDetails(id) {
    this.fly = this.http.get('https://fly-tying-companion-rest-api.herokuapp.com/Flies/' + id)
    return this.fly
  }


}
