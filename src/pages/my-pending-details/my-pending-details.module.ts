import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPendingDetailsPage } from './my-pending-details';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyPendingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPendingDetailsPage),
    HttpModule
  ],
  exports: [
    MyPendingDetailsPage
  ]
})
export class MyPendingDetailsPageModule {}
