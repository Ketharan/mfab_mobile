import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyApprovalDetailsPage } from './my-approval-details';

@NgModule({
  declarations: [
    MyApprovalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyApprovalDetailsPage),
  ],
})
export class MyApprovalDetailsPageModule {}
