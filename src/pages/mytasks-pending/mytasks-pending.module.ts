import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksPendingPage } from './mytasks-pending';
import {HttpModule} from "@angular/http";
import {PendingTasksPage} from "../pending-tasks/pending-tasks";

@NgModule({
  declarations: [
    MytasksPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksPendingPage),
    HttpModule
  ],
  exports: [
    MytasksPendingPage
  ]
})
export class MytasksPendingPageModule {}
