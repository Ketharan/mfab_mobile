import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksNewDetailsPage } from './my-tasks-new-details';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyTasksNewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksNewDetailsPage),
    HttpModule
  ],
})
export class MyTasksNewDetailsPageModule {}
