import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksPendingDetailsPage } from './my-tasks-pending-details';

@NgModule({
  declarations: [
    MyTasksPendingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksPendingDetailsPage),
  ],
})
export class MyTasksPendingDetailsPageModule {}
