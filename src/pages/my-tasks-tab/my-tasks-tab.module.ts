import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksTabPage } from './my-tasks-tab';

@NgModule({
  declarations: [
    MyTasksTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksTabPage),
  ],
})
export class MyTasksTabPageModule {}
