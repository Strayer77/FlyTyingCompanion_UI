import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'


@Component({
  selector: 'page-list',
  templateUrl: 'BrowseFlies.html'
})
export class BrowseFliesPage {
  
  public flies:Array<any> = [];
  public fly: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public flyService: FlyServiceProvider, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.loadFlies();
 
  }

  loadFlies() {
    this.flyService.getFlies()
    .map(res => res.json()).subscribe(data => {
      this.flies = data;
      console.log(this.flies)
    });
  }

  /*openFlyDetails(fly) {
    this.navCtrl.push('FlyDetailsPage', {fly: fly});
  } */

  openFlyDetails(fly) {
    this.flyService.getFlyDetails(fly._id)
    .map(res => res.json()).subscribe(data => {
      this.fly = data;
      console.log(this.fly)
    });
    this.navCtrl.push('FlyDetailsPage', {fly: fly});
  }
  
  getFlyImage(fly) {
    this.flyService.getFlyDetails
  }

}
