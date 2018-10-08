import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksNewDetailsPage } from './my-tasks-new-details';

@NgModule({
  declarations: [
    MyTasksNewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksNewDetailsPage),
  ],
})
export class MyTasksNewDetailsPageModule {}
