import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingTasksPage } from './pending-tasks';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    PendingTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingTasksPage),
    HttpModule
  ],
  exports: [
    PendingTasksPage
  ]
})
export class PendingTasksPageModule {}
