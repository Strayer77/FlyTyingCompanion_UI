import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formGroup: FormGroup;

  constructor(public navCtrl: NavController) {
    
  }

  
}
  

