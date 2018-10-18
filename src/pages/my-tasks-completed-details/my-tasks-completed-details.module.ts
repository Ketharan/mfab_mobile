import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksCompletedDetailsPage } from './my-tasks-completed-details';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyTasksCompletedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksCompletedDetailsPage),
    HttpModule
  ],
  exports: [
    MyTasksCompletedDetailsPage
  ]
})
export class MyTasksCompletedDetailsPageModule {}
