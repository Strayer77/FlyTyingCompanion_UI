import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'
import { LoadingController } from 'ionic-angular';
//--------------------------------------------------------------------------------------------------



@Component({
  selector: 'page-list',
  templateUrl: 'BrowseFlies.html'
})
export class BrowseFliesPage {
  
  public flies:Array<any> = [];
  public fly: any;
  flyImageURL: any;



  //--------------------------------------------------------------------------------------------------
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public flyService: FlyServiceProvider, public http: Http, public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.loadFlies();
    this.flyImageURL = "/assets/imgs/FlyPictures/" 
  }


  //--------------------------------------------------------------------------------------------------
  //this loads all of the flies from our flyService get request to our API
  loadFlies() {
    //adds a loading controller to page when it's first loaded
    //until all the flies are loaded on the page
    let loading = this.loadingCtrl.create({
      content: 'Loading All Flies...'
    });
    //presents loading controller
    loading.present();

    this.flyService.getFlies()  //uses fly service provider and function getFlies()
    .map(res => res.json()).subscribe(data => {
      this.flies = data;
      //console.log(this.flies)
    });
    //dismisses loading controller after all flies are loaded
    loading.dismiss();
  }


  //--------------------------------------------------------------------------------------------------
  //this function opens up a Fly Details page with specific fly info based
  //on that fly's ID
  openFlyDetails(fly) {
    this.flyService.getFlyDetails(fly._id)
    .map(res => res.json()).subscribe(data => {
      this.fly = data;
      //console.log(this.fly)
    });
    this.navCtrl.push('FlyDetailsPage', {fly: fly});
  }
  
}
