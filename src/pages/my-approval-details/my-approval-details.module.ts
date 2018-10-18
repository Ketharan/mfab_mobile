import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyApprovalDetailsPage } from './my-approval-details';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApprovalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyApprovalDetailsPage),
    HttpModule
  ],
})
export class MyApprovalDetailsPageModule {}
