import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service'

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
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public flyService: FlyServiceProvider) {
    this.flyDetails = this.navParams.get('fly');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlyDetailsPage');
  }

}
