import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksCompletedDetailsPage } from './my-tasks-completed-details';

@NgModule({
  declarations: [
    MyTasksCompletedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksCompletedDetailsPage),
  ],
})
export class MyTasksCompletedDetailsPageModule {}
