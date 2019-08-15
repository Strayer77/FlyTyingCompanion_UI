import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlyDetailsPage } from './fly-details';

@NgModule({
  declarations: [
    FlyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlyDetailsPage),
  ],
})
export class FlyDetailsPageModule {}
