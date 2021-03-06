import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'
import { Http } from '@angular/http';


  //--------------------------------------------------------------------------------------------------

@IonicPage()
@Component({
  selector: 'page-fly-details',
  templateUrl: 'fly-details.html',
})
export class FlyDetailsPage {

  flyDetails: any;
  flyMaterials: any;
  flyImageURL: any;


  //--------------------------------------------------------------------------------------------------

  constructor(public navCtrl: NavController, public navParams: NavParams, public flyService: FlyServiceProvider, public http: Http) {
    this.flyDetails = this.navParams.get('fly');
  }


  //--------------------------------------------------------------------------------------------------

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlyDetailsPage');
    this.flyImageURL = "/assets/imgs/FlyPictures/" + (this.flyDetails.image_url); //creates image url to display on page
    this.flyMaterials = this.flyDetails.materials; //allows us to read materials nested doc in Fly JSON data
  }

 
}
