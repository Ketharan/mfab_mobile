import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksNewPage } from './mytasks-new';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MytasksNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksNewPage),
    HttpModule
  ],
})
export class MytasksNewPageModule {}
