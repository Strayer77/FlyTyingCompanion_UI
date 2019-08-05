import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'
import { Http } from '@angular/http';

/**
 * Generated class for the FlyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fly-details',
  templateUrl: 'fly-details.html',
})
export class FlyDetailsPage {

  flyDetails: any;
  flyMaterials: any;
  flyImageURL: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public flyService: FlyServiceProvider, public http: Http) {
    this.flyDetails = this.navParams.get('fly');
    this.flyMaterials = (JSON.stringify(this.flyDetails.materials)); //allows us to read materials nested doc in Fly JSON data
    this.flyImageURL = "/assets/imgs/FlyPictures/" + (this.flyDetails.image_url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlyDetailsPage');
    console.log(this.flyMaterials)
  }

 
}
