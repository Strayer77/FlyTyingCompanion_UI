import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'


@Component({
  selector: 'page-list',
  templateUrl: 'BrowseFlies.html'
})
export class BrowseFliesPage {
  
  public flies:Array<any> = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public flyService: FlyServiceProvider, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.http.get('http://localhost:8080/Flies').map(res => res.json()).subscribe(data => {
      this.flies = data;
      console.log(this.flies)
  });
 
  }

 

}
