import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPendingDetailsPage } from './my-pending-details';

@NgModule({
  declarations: [
    MyPendingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPendingDetailsPage),
  ],
})
export class MyPendingDetailsPageModule {}
