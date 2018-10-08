import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingTasksPage } from './pending-tasks';

@NgModule({
  declarations: [
    PendingTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingTasksPage),
  ],
  exports: [
    PendingTasksPage
  ]
})
export class PendingTasksPageModule {}
