import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flyDetails = this.navParams.get('fly');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlyDetailsPage');
  }
 
}
