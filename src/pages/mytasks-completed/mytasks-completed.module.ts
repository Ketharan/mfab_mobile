import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksCompletedPage } from './mytasks-completed';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MytasksCompletedPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksCompletedPage),
    HttpModule
  ],
})
export class MytasksCompletedPageModule {}
